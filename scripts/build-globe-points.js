// 自动生成高精度地球陆地散点矩阵 (用于 3D 赛博地球背景)
const fs = require('fs');
const path = require('path');

async function main() {
  console.log('Fetching land-110m.json and topojson-client...');
  const [topoCode, landData] = await Promise.all([
    fetch('https://cdn.jsdelivr.net/npm/topojson-client@3.1.0/dist/topojson-client.min.js').then(r => r.text()),
    fetch('https://cdn.jsdelivr.net/npm/world-atlas@2.0.2/land-110m.json').then(r => r.json())
  ]);

  const m = { exports: {} };
  new Function('module', 'exports', topoCode)(m, m.exports);
  const geojson = m.exports.feature(landData, landData.objects.land);

  console.log('GeoJSON decoded, type:', geojson.type, 'geometry count:', geojson.geometry ? 1 : geojson.features.length);

  // Extract all polygons/multi-polygons
  const polygons = [];
  function extractPolygons(geom) {
    if (geom.type === 'Polygon') {
      polygons.push(geom.coordinates);
    } else if (geom.type === 'MultiPolygon') {
      geom.coordinates.forEach(c => polygons.push(c));
    }
  }

  if (geojson.geometry) {
    extractPolygons(geojson.geometry);
  } else if (geojson.features) {
    geojson.features.forEach(f => extractPolygons(f.geometry));
  }

  console.log('Total land polygon rings:', polygons.length);

  // Point in polygon (ray-casting)
  function isPointInRing(pt, ring) {
    let inside = false;
    for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
      const xi = ring[i][0], yi = ring[i][1];
      const xj = ring[j][0], yj = ring[j][1];
      const intersect = ((yi > pt[1]) !== (yj > pt[1])) &&
        (pt[0] < (xj - xi) * (pt[1] - yi) / (yj - yi) + xi);
      if (intersect) inside = !inside;
    }
    return inside;
  }

  function isPointInLand(lon, lat) {
    const pt = [lon, lat];
    for (let poly of polygons) {
      // outer ring
      if (isPointInRing(pt, poly[0])) {
        // check holes
        let inHole = false;
        for (let h = 1; h < poly.length; h++) {
          if (isPointInRing(pt, poly[h])) {
            inHole = true;
            break;
          }
        }
        if (!inHole) return true;
      }
    }
    return false;
  }

  // Generate sphere grid with equal-area or regular angular spacing
  // lat from -60 to 80 (exclude most of Antarctica for cleaner aesthetic matching the user image)
  const dots = [];
  const latStep = 1.65; // degrees, generates high-density crisp cyber dot matrix
  for (let lat = -58; lat <= 76; lat += latStep) {
    const cosLat = Math.cos(lat * Math.PI / 180);
    const lonStep = latStep / Math.max(cosLat, 0.22);
    for (let lon = -180; lon < 180; lon += lonStep) {
      if (isPointInLand(lon, lat)) {
        // Round to 1 decimal place to save space
        dots.push([Math.round(lat * 10) / 10, Math.round(lon * 10) / 10]);
      }
    }
  }

  console.log(`Generated ${dots.length} land dots on globe.`);

  // Write out as a lightweight JS file
  const outPath = path.join(__dirname, '..', 'js', 'globe-dots.js');
  const jsContent = `// 3D 赛博地球高精度陆地散点矩阵 (共 ${dots.length} 个点)
(function(window) {
  window.GLOBE_LAND_DOTS = ${JSON.stringify(dots)};
})(typeof window !== 'undefined' ? window : this);
`;

  fs.writeFileSync(outPath, jsContent, 'utf8');
  console.log(`Saved to ${outPath} (${(jsContent.length / 1024).toFixed(1)} KB)`);
}

main().catch(err => {
  console.error('Error:', err);
  process.exit(1);
});

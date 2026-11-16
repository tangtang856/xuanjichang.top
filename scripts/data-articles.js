// scripts/data-articles.js
// 选机场网 (xuanjichang.top) - 100 篇高质量深度 Bing SEO 原创文章集合
const c1 = require('./articles/cluster1');
const c2 = require('./articles/cluster2');
const c3 = require('./articles/cluster3');
const c4 = require('./articles/cluster4');
const c5 = require('./articles/cluster5');
const c6 = require('./articles/cluster6');
const c7 = require('./articles/cluster7');

const allArticles = [
  ...c1,
  ...c2,
  ...c3,
  ...c4,
  ...c5,
  ...c6,
  ...c7
];

module.exports = allArticles;

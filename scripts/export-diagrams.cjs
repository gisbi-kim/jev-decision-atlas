// Rebuild standalone SVGs with the same renderer used in the articles.
// Run: node scripts/export-diagrams.cjs
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const root = path.resolve(__dirname, '..');
const ctx = vm.createContext({ window: {} });
for (const name of ['data.js', 'articles.js', 'pokemon-local.js', 'intro.js', 'inline-links.js', 'comparison.js', 'article-view.js']) {
  vm.runInContext(fs.readFileSync(path.join(root, name), 'utf8'), ctx, { filename: name });
}
fs.mkdirSync(path.join(root, 'diagrams'), { recursive: true });
for (const c of [ctx.window.ATLAS_INTRO,...ctx.window.ATLAS_CASES,ctx.window.ATLAS_COMPARISON]) {
  const article = ctx.window.ATLAS_ARTICLES[c.id];
  ctx.window.ArticleView.render({ ...c, headline: c.name, author: '' }, article, '');
  for (let i=0; ; i++) {
    const diagram = ctx.window.ArticleView.diagramAt(i);
    if (!diagram) break;
    fs.writeFileSync(path.join(root, 'diagrams', diagram.name), diagram.svg);
    console.log(diagram.name);
  }
}

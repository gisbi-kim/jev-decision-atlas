// Verify article rendering, local routes and editorial inline links without a browser.
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),assert=require('node:assert/strict');
const root=path.resolve(__dirname,'..'),ctx=vm.createContext({window:{}});
for(const name of ['data.js','articles.js','pokemon-local.js','intro.js','inline-links.js','comparison.js','article-view.js'])vm.runInContext(fs.readFileSync(path.join(root,name),'utf8'),ctx);
const w=ctx.window,cases=[w.ATLAS_INTRO,...w.ATLAS_CASES,w.ATLAS_COMPARISON],report=[];
for(const c of cases){
  const a=w.ATLAS_ARTICLES[c.id],html=w.ArticleView.render({...c,author:''},a,'');
  assert(html.includes(a.title));
  assert.equal(new Set(a.sections.map(s=>s.id)).size,a.sections.length);
  for(const s of a.sections)for(const b of s.blocks){
    if(b.provenance==='user-run'){
      assert.equal(b.code,fs.readFileSync(path.join(root,b.source),'utf8'),b.label);
      if(b.lang==='json')JSON.parse(b.code);
    }
    for(const l of b.links||[]){assert(b.text.includes(l.text),l.text);assert(/^https:\/\//.test(l.url)||cases.some(c=>'#case/'+c.id===l.url)||(/^assets\/pokemon-local\/[a-z.-]+$/.test(l.url)&&fs.existsSync(path.join(root,l.url))),l.url);}
    if(b.type==='case-links')for(const item of b.items)assert(cases.some(c=>c.id===item.id));
  }
  const links=[...html.matchAll(/class="inline-source" href="([^"]+)"/g)].map(m=>m[1]);
  for(const tag of html.matchAll(/<a class="inline-source"[^>]+>/g))if(tag[0].includes('href="https://'))assert(tag[0].includes('target="_blank" rel="noopener noreferrer"'));
  report.push({id:c.id,sections:a.sections.length,inlineLinks:links.length});
}
assert.equal(w.ATLAS_CASES.length,8);
assert.equal(cases.length,10);
assert.equal(cases.at(-1).id,'implementations');
const index=fs.readFileSync(path.join(root,'index.html'),'utf8');
assert(index.indexOf('class="tutorial-pocket comparison-pocket"')>index.indexOf('id="collection"'));
assert(index.includes('href="#case/implementations" data-case="implementations"'));
const comparison=w.ATLAS_ARTICLES.implementations;
assert.equal(comparison.hideMedia,true);
assert.equal(comparison.sections.length,12);
for(const s of comparison.sections)for(const b of s.blocks)if(b.type==='table')for(const row of b.rows)assert.equal(row.length,b.headers.length,s.id);
const architecture=comparison.sections.flatMap(s=>s.blocks).find(b=>b.layout==='architecture-comparison');
assert.equal(architecture.rows.length,5);
for(const row of architecture.rows)assert.equal(row.cells.length,4,row.label);
const methodTitles=comparison.sections.slice(2,7).map(s=>s.title);
assert.deepEqual(Array.from(architecture.rows,r=>r.label),Array.from(methodTitles));
const methodTable=comparison.sections[1].blocks.find(b=>b.type==='table');
assert.deepEqual(Array.from(methodTable.rows,r=>r[0]),Array.from(methodTitles));
w.ArticleView.render(w.ATLAS_COMPARISON,comparison,'');
const architectureSvg=w.ArticleView.diagramAt(0);
assert.equal(architectureSvg.name,'implementations-architecture.svg');
for(const row of architecture.rows)assert(architectureSvg.svg.includes(row.label));
assert(architectureSvg.svg.includes('생성한 토큰을 다시 입력'));
const mnistRow=architecture.rows[2];
assert(mnistRow.example.includes('MNIST'));
assert(mnistRow.highlight);
assert.deepEqual(Array.from(mnistRow.training.backbone, t=>Array.from(t)),[['기반 고정','fixed'],['LoRA 학습','train']]);
assert.equal(mnistRow.training.head[0][1],'train');
for(const row of architecture.rows){
  assert.equal(row.training.data.length,2,row.label);
  for(const group of [row.training.backbone,row.training.head])for(const [label,kind] of group){
    assert(['fixed','train','optional'].includes(kind),label);
    assert(architectureSvg.svg.includes(label),label);
  }
}
const local=path.join(root,'assets/pokemon-local');
const manifest=JSON.parse(fs.readFileSync(path.join(local,'manifest.json'),'utf8'));
const crypto=require('node:crypto');
for(const [name,info] of Object.entries(manifest.files))assert.equal(crypto.createHash('sha256').update(fs.readFileSync(path.join(local,name))).digest('hex'),info.sha256,name);
const battle=JSON.parse(fs.readFileSync(path.join(local,'battle-request.json'),'utf8'));
const battleAnswer=JSON.parse(fs.readFileSync(path.join(local,'battle-response.json'),'utf8'));
const movement=JSON.parse(fs.readFileSync(path.join(local,'movement-request.json'),'utf8'));
const movementAnswer=JSON.parse(fs.readFileSync(path.join(local,'movement-response.json'),'utf8'));
assert(battle.responseSchema.properties.decision.enum.includes(battleAnswer.decision));
assert(Object.hasOwn(movement.questions.decision.criteria,movementAnswer.decision));
assert(movement.state.recentActions.includes('battle vs EKANS: '+battleAnswer.decision));
assert.equal(w.ATLAS_ARTICLES.pokemon.sections.filter(s=>s.id.startsWith('local-')).length,5);
fs.writeFileSync(path.join(root,'validation.json'),JSON.stringify({articles:report,intro:w.ATLAS_ARTICLES.intro.sections.flatMap(s=>s.blocks).filter(b=>b.type==='code')},null,2));
console.log(JSON.stringify(report));

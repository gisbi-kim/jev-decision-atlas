// Static checks for the bundled English edition; no translation service is called.
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),crypto=require('node:crypto'),assert=require('node:assert/strict');
const root=path.resolve(__dirname,'..'),context=vm.createContext({window:{}});
vm.runInContext(fs.readFileSync(path.join(root,'translations/en.js'),'utf8'),context);
const manifest=JSON.parse(fs.readFileSync(path.join(root,'translations/manifest.json'),'utf8'));
const plain=context.window.ATLAS_EN,rich=context.window.ATLAS_EN_RICH;
assert.equal(Object.keys(plain).length,manifest.strings);
assert.equal(Object.keys(rich).length,manifest.linkedParagraphs);
for(const [ko,en] of Object.entries(plain)){
 assert.equal(typeof en,'string');assert(en.trim(),ko);
 assert(!/[가-힣]/.test(en),'Untranslated English entry: '+ko);
}
for(const [original,en] of Object.entries(rich)){
 assert(!/\[\[L\d+\]\]/.test(en),'Unresolved link placeholder');
 assert(!/[가-힣]/.test(en),'Untranslated linked paragraph');
 const links=s=>[...s.matchAll(/href="([^"]+)"/g)].map(m=>m[1]).sort();
 assert.deepEqual(links(en),links(original),'Source link destinations changed');
 assert(!/<(?:script|iframe|style)\b/i.test(en),'Unexpected markup');
}
for(const [file,expected] of Object.entries(manifest.sources)){
 const text=fs.readFileSync(path.join(root,file),'utf8').replace(/\r\n/g,'\n');
 assert.equal(crypto.createHash('sha256').update(text).digest('hex'),expected,'Source changed; review its English translation: '+file);
}
const index=fs.readFileSync(path.join(root,'index.html'),'utf8');
assert.equal((index.match(/data-language-toggle/g)||[]).length,2);
assert(index.indexOf('translations/en.js')<index.indexOf('i18n.js'));
console.log(JSON.stringify({strings:manifest.strings,linkedParagraphs:manifest.linkedParagraphs,sourceFiles:Object.keys(manifest.sources).length,sourceLinks:'preserved',untranslatedEntries:0}));

/* Static, bundled translations. Original source code and execution records stay intact. */
(() => {
  'use strict';
  const dictionary=window.ATLAS_EN||{};
  const textRecords=new WeakMap(),attributeRecords=new WeakMap(),richRecords=new WeakMap();
  const richDictionary=window.ATLAS_EN_RICH||{};
  const params=new URLSearchParams(location.search);
  let saved;try{saved=localStorage.getItem('atlas-language');}catch{}
  let language=['ko','en'].includes(params.get('lang'))?params.get('lang'):saved==='en'?'en':'ko';
  const attributes=['aria-label','alt','title','placeholder','content'];
  function english(raw){
    const key=raw.trim();let result=dictionary[key];
    if(result===undefined){
      if(/^8개 중 \d+개 사례$/.test(key))result=key.replace(/8개 중 (\d+)개 사례/,'$1 of 8 cases');
      else if(/^약 \d+분$/.test(key))result=key.replace(/약 (\d+)분/,'About $1 min');
      else if(key.endsWith(' 코드 복사'))result='Copy code: '+english(key.slice(0,-6));
      else if(key.endsWith(' 사례 읽기'))result='Read case: '+english(key.slice(0,-6));
      else if(key.endsWith(' — Jev 사용 사례'))result=english(key.replace(/ — Jev 사용 사례$/,''))+' — Jev Case Studies';
      else result=key;
    }
    return raw.slice(0,raw.length-raw.trimStart().length)+result+raw.slice(raw.trimEnd().length);
  }
  function remember(records,node,value){
    let record=records.get(node);
    if(!record||(value!==record.ko&&value!==record.en)){
      record={ko:value,en:english(value)};records.set(node,record);
    }
    return record;
  }
  function translateTree(root,lang=language){
    for(const paragraph of root.querySelectorAll('.blog-content p,.blog-deck,#sources p')){
      let record=richRecords.get(paragraph);
      if(!record&&richDictionary[paragraph.innerHTML]){
        record={ko:paragraph.innerHTML,en:richDictionary[paragraph.innerHTML]};richRecords.set(paragraph,record);
      }
      if(record&&paragraph.innerHTML!==record[lang])paragraph.innerHTML=record[lang];
    }
    const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);
    let node;
    while((node=walker.nextNode())){
      if(node.parentElement?.closest('script,style,pre,code,[data-language-toggle], [translate="no"]'))continue;
      const record=remember(textRecords,node,node.nodeValue);
      let value=record[lang];
      if(lang==='en'&&value.trim()){
        if(node.previousSibling?.nodeType===1&&node.previousSibling.matches('a.inline-source'))value=' '+value.trimStart();
        if(node.nextSibling?.nodeType===1&&node.nextSibling.matches('a.inline-source'))value=value.trimEnd()+' ';
        record.en=value;
      }
      if(node.nodeValue!==value)node.nodeValue=value;
    }
    const elements=[...(root.nodeType===1?[root]:[]),...root.querySelectorAll('*')];
    for(const element of elements){
      if(element.closest('script,style,[data-language-toggle],[translate="no"]'))continue;
      let records=attributeRecords.get(element);
      if(!records){records={};attributeRecords.set(element,records);}
      for(const attr of attributes){
        const value=element.getAttribute(attr);if(value===null)continue;
        if(!records[attr]||(value!==records[attr].ko&&value!==records[attr].en))records[attr]={ko:value,en:english(value)};
        if(value!==records[attr][lang])element.setAttribute(attr,records[attr][lang]);
      }
      // English diagram labels often need more space than their Korean originals.
      if(element.localName==='text'&&element.closest('svg')){
        if(!element.dataset.originalFont)element.dataset.originalFont=element.getAttribute('font-size')||'11';
        const base=Number(element.dataset.originalFont);
        const x=Number(element.getAttribute('x'));
        const isBox=[34,264,494,724,162,352,542,732].includes(x);
        const width=isBox?148:Math.max(150,890-x);
        const size=lang==='en'?Math.min(base,width/Math.max(1,element.textContent.length*.51)):base;
        element.setAttribute('font-size',String(Math.max(7.5,size)));
      }
    }
  }
  function buttons(){
    document.querySelectorAll('[data-language-toggle]').forEach(b=>{
      b.textContent=language==='ko'?'EN':'한국어';
      b.setAttribute('lang',language==='ko'?'en':'ko');
      b.setAttribute('aria-label',language==='ko'?'Switch the entire site to English':'사이트 전체를 한국어로 보기');
      b.title=language==='ko'?'English':'한국어';
    });
  }
  function apply(){
    observer.disconnect();
    document.documentElement.lang=language;
    translateTree(document.documentElement);buttons();
    observer.observe(document.documentElement,{subtree:true,childList:true,characterData:true,attributes:true,attributeFilter:attributes});
  }
  function setLanguage(next){
    language=next;
    try{localStorage.setItem('atlas-language',language);}catch{}
    const url=new URL(location.href);url.searchParams.set('lang',language);history.replaceState(null,'',url);
    apply();
    document.dispatchEvent(new CustomEvent('atlas-language-change',{detail:language}));
  }
  let queued=false;
  const observer=new MutationObserver(()=>{if(!queued){queued=true;queueMicrotask(()=>{queued=false;apply();});}});
  document.addEventListener('click',event=>{if(event.target.closest('[data-language-toggle]'))setLanguage(language==='ko'?'en':'ko');});
  window.addEventListener('storage',event=>{if(event.key==='atlas-language'&&['ko','en'].includes(event.newValue))setLanguage(event.newValue);});
  window.AtlasI18n={
    english,apply,get language(){return language;},setLanguage,
    html(markup){const template=document.createElement('template');template.innerHTML=markup;translateTree(template.content);return template.innerHTML;}
  };
  if(language==='en'&&!params.has('lang')){
    const url=new URL(location.href);url.searchParams.set('lang','en');history.replaceState(null,'',url);
  }
  apply();
})();

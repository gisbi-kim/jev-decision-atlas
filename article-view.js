(() => {
  'use strict';
  const escape = s => String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  let codes=[], diagrams=[];
  function prose(text,links=[]){
    const hits=[];
    for(const l of [...links].sort((a,b)=>b.text.length-a.text.length)){
      if(!/^(https:\/\/|#case\/|assets\/pokemon-local\/)/.test(l.url))continue;
      const start=text.indexOf(l.text),end=start+l.text.length;
      if(start<0||hits.some(h=>start<h.end&&end>h.start))continue;
      hits.push({start,end,...l});
    }
    let out='',offset=0;
    for(const h of hits.sort((a,b)=>a.start-b.start)){
      const internal=h.url.startsWith('#case/');
      out+=escape(text.slice(offset,h.start))+`<a class="inline-source" href="${escape(h.url)}" ${internal?`data-case="${escape(h.url.slice(6))}"`:'target="_blank" rel="noopener noreferrer"'}>${escape(h.text)}${internal?'':'<span class="external-arrow" aria-hidden="true">↗</span>'}</a>`;
      offset=h.end;
    }
    return out+escape(text.slice(offset));
  }
  function highlight(source){
    const token=/("(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\/\/[^\n]*|#[^\n]*|\b(?:const|let|var|return|if|else|for|while|in|of|def|class|import|from|async|await|throw|new|try|catch|assert|break|not|and|or|True|False|None|true|false|null)\b|\b\d+(?:\.\d+)?\b)/g;
    let result='',last=0;
    for(const m of source.matchAll(token)){
      result+=escape(source.slice(last,m.index));
      const t=m[0],kind=/^["']/.test(t)?'string':/^(\/\/|#)/.test(t)?'comment':/^\d/.test(t)?'number':'keyword';
      result+=`<span class="syntax-${kind}">${escape(t)}</span>`;last=m.index+t.length;
    }
    return result+escape(source.slice(last));
  }
  function codeBlock(b){
    const index=codes.push(b.code)-1;
    return `<figure class="code-block${b.wrap?' code-wrap':''}"><figcaption><div><span class="code-kind ${b.source?'original':''}">${b.kind}</span><strong>${escape(b.label)}</strong></div><button type="button" data-copy-code="${index}" aria-label="${escape(b.label)} 코드 복사">복사</button></figcaption><div class="code-language">${escape(b.lang)}${b.source?` · ${escape(b.file)}${b.start?` · L${b.start}`:''}`:` · ${escape(b.kind)}`}</div><pre tabindex="0" aria-label="${escape(b.label)}"><code>${b.code.split('\n').map((l,i)=>`<span class="code-line" data-line="${(b.start||1)+i}">${highlight(l)||' '}</span>`).join('\n')}</code></pre>${b.source?`<a class="code-source" href="${escape(b.source)}" target="_blank" rel="noopener">${escape(b.sourceLabel||(b.start?'해당 커밋의 원본 코드':'원문에서 읽기'))} ↗</a>`:''}</figure>`;
  }
  function pipeline(b,id){
    let nodes=b.nodes.map(n=>({...n}));
    if(id==='robot-arm')nodes[1].kind='vision';
    const extra=!!b.extra;
    if(extra)nodes[3]={...nodes[3],title:'최신 판단 캐시',lines:['기동 · 위험 · 타임스탬프']};
    if(extra)nodes.push({id:'safety',x:250,y:245,kind:'code',title:'별도 안전 반사',lines:['현재 관측으로 제한']},{id:'flight',x:480,y:245,kind:'code',title:'비행 제어',lines:['모델 응답을 기다리지 않음']},{id:'sim',x:710,y:245,kind:'world',title:'MuJoCo',lines:['실제 기체 아닌 시뮬레이션']});
    const height=extra?410:240;
    const colors={world:['#202020','#fff','#ccc'],code:['#efefec','#202020','#686864'],model:['#e33b27','#fff','#ffe4de'],vision:['#dce8ec','#1f3f4b','#55707a'],llm:['#e3dfed','#3b3056','#756688']};
    const label={world:'환경',code:'코드',model:'DECISION MODEL',vision:'VISION MODEL',llm:'GENERATIVE MODEL'};
    const caseId=id;
    const ordinal=diagrams.length+1;
    id=`${id}-diagram-${ordinal}`;
    const box=n=>{const [fill,ink,muted]=colors[n.kind];return `<g><rect x="${n.x}" y="${n.y}" width="190" height="84" fill="${fill}" stroke="${n.kind==='code'?'#c5c5bf':fill}"/><text x="${n.x+14}" y="${n.y+17}" font-size="9" letter-spacing="1" fill="${muted}">${label[n.kind]}</text><text x="${n.x+14}" y="${n.y+39}" font-size="15" font-weight="700" fill="${ink}">${escape(n.title)}</text>${n.lines.map((l,i)=>`<text x="${n.x+14}" y="${n.y+59+i*14}" font-size="11" fill="${muted}">${escape(l)}</text>`).join('')}</g>`;};
    const arrow=d=>`<path d="${d}" fill="none" stroke="#696961" stroke-width="1.5" marker-end="url(#${id}-arrow)"/>`;
    let paths=[0,1,2].map(i=>arrow(`M${210+i*230} 97 H${245+i*230}`)).join('');
    if(extra){paths+=arrow('M345 139 V240')+arrow('M440 287 H475')+arrow('M670 287 H705')+arrow('M805 139 V193 H575 V240');paths+=`<text x="604" y="181" fill="#666" font-size="10">캐시 읽기</text>`;paths+=`<path d="M805 329 V367 H115 V144" fill="none" stroke="#777" stroke-dasharray="5 4" marker-end="url(#${id}-arrow)"/><text x="386" y="358" font-size="11" fill="#666">고속 제어와 관측의 반복</text>`;}
    else paths+=`<path d="M805 139 V195 H115 V144" fill="none" stroke="#777" stroke-dasharray="5 4" marker-end="url(#${id}-arrow)"/><text x="394" y="184" font-size="11" fill="#666">실행 후 다시 관측</text>`;
    const svg=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 920 ${height}" role="img" aria-labelledby="${id}-diagram-title ${id}-diagram-desc" font-family="Noto Sans KR, Arial, sans-serif"><title id="${id}-diagram-title">${escape(b.title)}</title><desc id="${id}-diagram-desc">${escape(b.caption)}</desc><rect width="920" height="${height}" fill="#fafaf8"/><defs><marker id="${id}-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0 0L10 5L0 10Z" fill="#696961"/></marker></defs>${paths}${nodes.map(box).join('')}</svg>`;
    const index=diagrams.push({svg,name:`${caseId}-pipeline${ordinal>1?`-${ordinal}`:''}.svg`})-1;
    return `<figure class="pipeline"><div class="pipeline-heading"><strong>${escape(b.title)}</strong><button type="button" data-download-diagram="${index}">SVG 저장 ↓</button></div><div class="pipeline-scroll" tabindex="0" aria-label="파이프라인 다이어그램. 좁은 화면에서는 가로 스크롤할 수 있습니다.">${svg}</div><figcaption>${escape(b.caption)}</figcaption></figure>`;
  }
  function block(b,id){
    if(b.type==='p')return `<p>${prose(b.text,b.links)}</p>`;
    if(b.type==='case-links')return `<div class="lesson-path">${b.items.map(c=>`<a href="#case/${escape(c.id)}" data-case="${escape(c.id)}"><strong>${escape(c.label)} →</strong><span>${escape(c.text)}</span></a>`).join('')}</div>`;
    if(b.type==='source')return `<p class="section-source"><a href="${escape(b.url)}" target="_blank" rel="noopener">${escape(b.label)} ↗</a></p>`;
    if(b.type==='note')return `<aside class="article-note">${escape(b.text)}</aside>`;
    if(b.type==='exercise')return `<aside class="worked-question"><p class="question-label">생각해 볼 문제</p><p>${escape(b.question)}</p><details><summary>풀이 보기</summary><p>${escape(b.answer)}</p></details></aside>`;
    if(b.type==='code')return codeBlock(b);
    if(b.type==='diagram')return pipeline(b,id);
    if(b.type==='table')return `<div class="article-table" tabindex="0"><table><thead><tr>${b.headers.map(h=>`<th scope="col">${escape(h)}</th>`).join('')}</tr></thead><tbody>${b.rows.map(r=>`<tr>${r.map(c=>`<td>${escape(c)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
    return '';
  }
  function render(c,a,media){
    codes=[];diagrams=[];
    const mediaTitle=a.mediaTitle||(c.video?'제작자 공개 실행 영상':c.embed?'공식 데모 링크':c.id==='robot-arm'?'제작자 영상 표지 · 원본 영상 링크':'원본 저장소 스크린샷');
    const mediaSource=c.mediaSource||(c.id==='robot-arm'?c.links.find(r=>r.label==='제작자 영상'):c.links[0]);
    const refs=[a.origin,...a.refs,...c.links].filter((r,i,rs)=>rs.findIndex(x=>x.url===r.url)===i);
    const demo=c.id==='mario'||a.hideMedia?'':`<details class="article-demo"><summary>${mediaTitle} <span>＋</span></summary><figure>${media}<figcaption>${escape(c.credit)} · <a href="${mediaSource.url}" target="_blank" rel="noopener">${c.id==='robot-arm'?'제작자 영상 보기':'출처 보기'} ↗</a></figcaption></figure></details>`;
    return `<div class="blog-shell">
      <header class="blog-heading">
        <div class="blog-kicker">${c.readerLabel?escape(c.readerLabel):c.id==='intro'?'TUTORIAL 00':'CASE '+c.number} / ${escape(c.name)}</div>
        <h2 id="dialog-title">${escape(a.title)}</h2>
        <p class="blog-deck">${prose(a.lead,a.leadLinks)}</p>
        <p class="article-origin">${escape(c.originLabel||'원문')} <a href="${escape(a.origin.url)}" target="_blank" rel="noopener">${escape(a.origin.label)} ↗</a></p>
        <div class="blog-byline"><span>${escape(c.authorLabel||'프로젝트')} ${escape(c.author)}</span><span>RT616 강의 노트</span><span>약 ${a.minutes}분</span><span>2026.11.11</span></div>
      </header>
      <div class="blog-layout"><aside class="article-sidebar">
        <nav aria-label="글 목차"><h3>목차</h3>${a.sections.map((s,i)=>`<button data-jump="section-${s.id}"><span>${String(i+1).padStart(2,'0')}</span>${escape(s.title)}</button>`).join('')}<button data-jump="article-references"><span>↗</span>원문과 코드</button></nav>
        <dl><dt>입력</dt><dd>${escape(c.input)}</dd><dt>${escape(c.outputLabel||(c.id==='pokemon'?'Jev / 로컬 Qwen의 선택':'Jev의 선택'))}</dt><dd>${escape(c.output)}</dd><dt>실행</dt><dd>${escape(c.executor)}</dd></dl>
      </aside><div class="blog-content">${demo}
        ${a.sections.map((s,i)=>`<section class="blog-section" id="section-${s.id}" tabindex="-1"><div class="section-number">${String(i+1).padStart(2,'0')}</div><h3>${escape(s.title)}</h3>${s.blocks.map(b=>block(b,c.id)).join('')}</section>`).join('')}
        <section class="article-references blog-section" id="article-references" tabindex="-1"><div class="section-number">SOURCES</div><h3>원문과 코드</h3><ol>${refs.map(r=>`<li><a href="${r.url}" target="_blank" rel="noopener">${escape(r.label)} ↗</a></li>`).join('')}</ol></section>
      </div></div></div>`;
  }
  window.ArticleView={render,codeAt:i=>codes[i],diagramAt:i=>diagrams[i]};
})();

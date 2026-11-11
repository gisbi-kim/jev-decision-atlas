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
  function comparisonPipeline(b,caseId){
    const id=`${caseId}-architecture-${diagrams.length+1}`;
    const xs=[150,340,530,720],width=170,rowHeight=176;
    const colors={world:['#202020','#fff','#ccc'],code:['#efefec','#202020','#686864'],model:['#e33b27','#fff','#ffe4de'],vision:['#dce8ec','#1f3f4b','#55707a'],llm:['#e3dfed','#3b3056','#756688']};
    const labels=['INPUT','BACKBONE','HEAD / READOUT','OUTPUT'];
    const arrow=d=>`<path d="${d}" fill="none" stroke="#696961" stroke-width="1.5" marker-end="url(#${id}-arrow)"/>`;
    const badge=(label,kind,x,y,width)=>{
      const fill=kind==='train'?'#dce8dc':kind==='optional'?'#fafaf8':'#efefec';
      const stroke=kind==='fixed'?'#c5c5bf':'#55725a';
      return `<g><rect x="${x}" y="${y}" width="${width}" height="24" fill="${fill}" stroke="${stroke}" ${kind==='optional'?'stroke-dasharray="3 2"':''}/><text x="${x+width/2}" y="${y+16}" text-anchor="middle" font-size="9.5" font-weight="500" fill="${kind==='fixed'?'#555':'#34583c'}">${escape(label)}</text></g>`;
    };
    const training=(row,y)=>{
      const tags=(items,x)=>items.map(([label,kind],i)=>badge(label,kind,x+i*88,y+130,items.length===1?170:82)).join('');
      return `<text x="20" y="${y+145}" font-size="10" fill="${row.highlight?'#34583c':'#777'}">${row.highlight?'MNIST의 학습 설정':'사용 · 추가 학습'}</text>${tags(row.training.backbone,xs[1])}${tags(row.training.head,xs[2])}${row.training.data.map((line,i)=>`<text x="720" y="${y+139+i*16}" font-size="10.5" font-weight="${i===0?'700':'400'}" fill="${row.highlight?'#34583c':'#555'}">${escape(line)}</text>`).join('')}`;
    };
    const box=(cell,x,y,column)=>{
      const [fill,ink,muted]=colors[cell.kind];
      const stroke=cell.kind==='code'?'#c5c5bf':fill;
      if(cell.branches)return cell.branches.map((line,i)=>`<g><rect x="${x}" y="${y+12+i*48}" width="${width}" height="36" fill="${fill}" stroke="${stroke}"/><text x="${x+12}" y="${y+35+i*48}" font-size="12" font-weight="500" fill="${ink}">${escape(line)}</text></g>`).join('');
      return `<g><rect x="${x}" y="${y+12}" width="${width}" height="84" fill="${fill}" stroke="${stroke}"/><text x="${x+12}" y="${y+29}" font-size="8" letter-spacing=".8" fill="${muted}">${labels[column]}</text><text x="${x+12}" y="${y+51}" font-size="14" font-weight="700" fill="${ink}">${escape(cell.title)}</text>${cell.lines.map((line,i)=>`<text x="${x+12}" y="${y+71+i*14}" font-size="10.5" fill="${muted}">${escape(line)}</text>`).join('')}</g>`;
    };
    const rows=b.rows.map((row,i)=>{
      const y=72+i*rowHeight;
      const links=row.split?
        [30,78].map(dy=>arrow(`M320 ${y+dy} H335`)+arrow(`M510 ${y+dy} H525`)).join('')+arrow(`M700 ${y+54} H715`):
        [0,1,2].map(col=>arrow(`M${xs[col]+width} ${y+54} H${xs[col+1]-5}`)).join('');
      const loop=row.repeat?`<path d="M615 ${y+96} V${y+116} H425 V${y+101}" fill="none" stroke="#777" stroke-width="1.2" stroke-dasharray="4 3" marker-end="url(#${id}-arrow)"/><text x="447" y="${y+111}" font-size="9" fill="#666">생성한 토큰을 다시 입력</text>`:'';
      return `<g>${row.highlight?`<rect x="12" y="${y+3}" width="896" height="162" fill="none" stroke="#55725a" stroke-width="1.5"/>`:''}<text x="20" y="${y+39}" font-size="${row.label.length>19?11:12}" font-weight="700" fill="#202020">${escape(row.label)}</text><text x="20" y="${y+60}" font-size="10" fill="#777">${escape(row.example)}</text>${links}${row.cells.map((cell,col)=>box(cell,xs[col],y,col)).join('')}${loop}${training(row,y)}${i<b.rows.length-1?`<path d="M20 ${y+171} H900" stroke="#deded7"/>`:''}</g>`;
    }).join('');
    const svg=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 920 1052" role="img" aria-labelledby="${id}-title ${id}-desc" font-family="Noto Sans KR, Arial, sans-serif"><title id="${id}-title">다섯 구현의 계산 경로와 학습 위치. MNIST는 ③ 별도 head</title><desc id="${id}-desc">${escape(b.caption)}</desc><rect width="920" height="1052" fill="#fafaf8"/><defs><marker id="${id}-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0 0L10 5L0 10Z" fill="#696961"/></marker></defs><text x="20" y="32" font-size="9" letter-spacing="1" fill="#777">FIVE PATHS</text>${xs.map((x,i)=>`<text x="${x}" y="32" font-size="10" letter-spacing="1" font-weight="700" fill="#444">${labels[i]}</text>`).join('')}<path d="M20 50 H900" stroke="#c5c5bf"/>${rows}<path d="M20 957 H900" stroke="#c5c5bf"/>${badge('고정', 'fixed',20,975,65)}${badge('학습', 'train',100,975,65)}${badge('선택 학습', 'optional',180,975,85)}<text x="282" y="991" font-size="10" fill="#666">고정 = 가중치 유지 · 학습 = 가중치 갱신 · 선택 = 직접 추가 학습할 때만</text><text x="20" y="1020" font-size="10" fill="#777">③은 실제 MNIST 설정이다. 다른 행은 대표적인 사용·학습 예이며 모든 제품의 필수 학습법을 뜻하지 않는다.</text><text x="20" y="1038" font-size="10" fill="#777">상자 색은 연산 역할을 표시한다. 학습데이터가 불필요한 경우에도 실제 문제의 성능 평가는 필요하다.</text></svg>`;
    const index=diagrams.push({svg,name:`${caseId}-architecture.svg`})-1;
    return `<figure class="pipeline architecture-comparison"><div class="pipeline-heading"><strong>${escape(b.title)}</strong><button type="button" data-download-diagram="${index}">SVG 저장 ↓</button></div><div class="pipeline-scroll" tabindex="0" aria-label="다섯 구현 방식의 구조도. 좁은 화면에서는 가로 스크롤할 수 있습니다.">${svg}</div><figcaption>${escape(b.caption)}</figcaption></figure>`;
  }
  function pipeline(b,id){
    if(b.layout==='architecture-comparison')return comparisonPipeline(b,id);
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

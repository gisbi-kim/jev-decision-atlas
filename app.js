(() => {
  'use strict';
  const edits = {
    pokemon:{headline:'같은 게임, 서로 다른 Jev의 역할',summary:'2389의 이동 정책 실험과 Mathiesen의 완주 구현. 목표·경로·행동을 어디서 나눌 것인가.',author:'2389 Research · Christian Mathiesen',image:'pokemon.jpg',video:'pokemon.mp4',credit:'비교 사례 B · Christian Mathiesen 공개 하이라이트',kind:'B · Mathiesen 플레이 영상',mediaSource:{label:'Mathiesen 완주 프로젝트',url:'https://github.com/christianmat/jev-pokemon'}},
    pacman:{headline:'팩맨의 다음 방향을 고른다',summary:'갈림길마다 방향과 확률을 반환한다. 사람이 팩맨이 되어 AI 유령을 상대할 수도 있다.',author:'Opper',video:'pacman.mp4',credit:'Jev 실행 클립 · Opper',kind:'플레이 영상'},
    tetris:{headline:'테트리스 배치를 고르는 Jev',summary:'코드가 배치 결과를 계산하고, Jev가 한 곳을 고른다. 블록은 응답을 기다려주지 않는다.',author:'trungdq88',image:'tetris.png',credit:'공개 저장소 스크린샷',kind:'실행 화면'},
    mario:{headline:'마리오의 이동·점프·위험 판단',summary:'위치와 속도를 JSON으로 전달한다. 행동, 점프 필요성, 위험도를 각각 묻는다.',author:'fhshaik',credit:'저장소 설명을 바탕으로 제작한 수업용 도식 · 실행 화면 아님',kind:'수업용 도식'},
    doom:{headline:'DOOM에 붙인 실시간 의사결정',summary:'공식 데모는 초당 약 10번 질의한다. Jev의 입력은 이미지가 아닌 구조화된 게임 상태다.',author:'TypeSafe',embed:'1227495732',credit:'TypeSafe 공식 데모',kind:'공식 영상'},
    wikiracing:{headline:'위키백과 링크만 따라 목적지 찾기',summary:'현재 문서의 링크 중 다음 페이지를 고른다. 후보가 많으면 평가와 선택을 나눈다.',author:'TypeSafe',embed:'1227495711',credit:'TypeSafe 공식 데모',kind:'공식 영상'},
    drone:{headline:'장애물을 넘어가는 MuJoCo 드론',summary:'좌우가 막히면 상승할 수 있을까? 높이 정보를 추가하자 달라진 기동 선택.',author:'RomanSlack',image:'drone.jpg',video:'drone.mp4',credit:'MuJoCo 실행 영상 · RomanSlack',kind:'시뮬레이션'},
    'robot-arm':{headline:'실제 SO-101 로봇팔로 상자 옮기기',summary:'비전 모델이 위치 차이를 읽고, Jev가 16개 동작 중 하나를 골라 실제 로봇을 움직인다.',author:'Control-derek',image:'robot.jpg',credit:'제작자 영상 표지 · Control-derek',kind:'제작자 영상 표지'}
  };
  const cases=window.ATLAS_CASES.map(c=>({...c,...edits[c.id]}));
  const readingCases=[window.ATLAS_INTRO,...cases];
  const $=s=>document.querySelector(s), list=$('#projects'), dialog=$('#case-dialog');
  let filter='all',query='',active=0,returnFocus=null,previewsPaused=false;
  const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  function media(c,detail=false){
    if(detail&&c.id==='mario')return `<div class="external-demo"><span>실행 영상·스크린샷 미확인</span><p>확인한 원본 저장소의 README에는 실행 방법과 코드가 있지만, 플레이 영상이나 스크린샷은 연결되어 있지 않습니다. 아래 본문의 도식은 수업용 설명입니다.</p><a href="${c.links[0].url}#setup" target="_blank" rel="noopener">원본 저장소 · 실행 안내 ↗</a></div>`;
    if(c.video)return `<video ${detail?'controls':'muted loop'} playsinline preload="${c.id==='pacman'?'metadata':'none'}" ${c.image?`poster="assets/${c.image}"`:''} ${detail?'':'aria-hidden="true" tabindex="-1"'}><source src="assets/${c.video}" type="video/mp4"></video>`;
    if(c.image)return `<img src="assets/${c.image}" alt="${esc(c.credit)}" loading="lazy">`;
    if(detail&&c.embed)return `<div class="external-demo"><span>${c.name}</span><p>영상은 TypeSafe 공식 소개에서 볼 수 있습니다.</p><a href="${c.links[0].url}" target="_blank" rel="noopener">공식 데모 보러 가기 ↗</a></div>`;
    if(c.id==='mario')return `<div class="specimen mario-specimen"><span>CONTROLLER / NES</span><div><b>Choice</b><em>이동 · 점프 · 달리기</em></div><div><b>Noul</b><em>지금 점프가 필요한가?</em></div><div><b>Score</b><em>현재 위험도는?</em></div><small>수업용 도식 · 실행 화면 아님</small></div>`;
    if(c.id==='doom')return `<div class="specimen doom-specimen"><span>TypeSafe demo</span><strong>DOOM</strong><div><b>~10</b><span>queries / sec<br>공식 소개 당시</span></div><small>공식 영상과 입력 구조 보기 →</small></div>`;
    return `<div class="specimen wiki-specimen"><span>Wikipedia link navigation</span><strong>Wikiracing</strong><div><u>출발 문서</u><i>→</i><u>다음 링크</u><i>→</i><u>목표 문서</u></div><p>검색 없이,<br>페이지 안의 링크로만.</p><small>과제 설명 · 실제 실행 경로 아님</small></div>`;
  }
  function stopVideos(root){root.querySelectorAll('video').forEach(v=>v.pause());}
  const motion=matchMedia('(prefers-reduced-motion: reduce)');
  const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting&&!motion.matches&&!previewsPaused&&!dialog.open&&!document.hidden)e.target.play().catch(()=>{});else e.target.pause();}),{threshold:.35});
  function watchVideos(){observer.disconnect();list.querySelectorAll('video').forEach(v=>observer.observe(v));}
  function render(){
    stopVideos(list);
    const shown=cases.filter(c=>(filter==='all'||c.category===filter)&&[c.name,c.headline,c.summary,c.concept,c.intro,c.detail].join(' ').toLowerCase().includes(query.trim().toLowerCase()));
    list.classList.toggle('filtered',filter!=='all'||!!query.trim());
    list.innerHTML=shown.map(c=>`<article class="project project-${c.id}"><a class="project-link" href="#case/${c.id}" data-case="${c.id}" aria-label="${esc(c.name)} 사례 읽기"><div class="project-media">${media(c)}<span class="media-label">${c.kind}</span><span class="open-label">사례 읽기 ↗</span></div><div class="project-meta"><span>${c.number} / ${c.category==='game'?'GAME':c.category==='web'?'WEB':'ROBOTICS'}</span><span>${esc(c.author)}</span></div><h2>${c.name}</h2><h3>${c.headline}</h3><p>${c.summary}</p></a><div class="project-foot"><span>${c.mode}</span><a href="${c.links[0].url}" target="_blank" rel="noopener">원문 ↗</a></div></article>`).join('');
    $('#empty-state').hidden=shown.length>0;$('#result-count').textContent=`8개 중 ${shown.length}개 사례`;watchVideos();
  }
  function renderReader(){
    const c=readingCases[active];$('#reader-index').textContent=c.id==='intro'?'TUTORIAL 00 — Jev & System One':`${c.number} / 08 — ${c.name}`;
    stopVideos(dialog);
    $('#reader').innerHTML=ArticleView.render(c,window.ATLAS_ARTICLES[c.id],media(c,true));
    document.title=`${c.name} — Jev 사용 사례`;
    $('#copy-article-link').textContent='글 주소 복사';
    $('#reading-progress').value=0;
    $('#prev-case').disabled=active===0;$('#next-case').disabled=active===readingCases.length-1;
    $('#prev-case').textContent=active===1?'← 입문 튜토리얼':'← 이전 사례';
    $('#next-case').textContent=active===0?'포켓몬부터 시작하기 →':'다음 사례 →';dialog.scrollTop=0;
  }
  function openCase(id,push=true){const i=readingCases.findIndex(c=>c.id===id);if(i<0)return;active=i;stopVideos(list);if(!dialog.open){returnFocus=document.activeElement;dialog.showModal();document.body.style.overflow='hidden';}if(push)history.pushState(null,'',`#case/${id}`);renderReader();$('#close-dialog').focus();}
  function close(){if(dialog.open)dialog.close();}
  function change(delta){const n=active+delta;if(n<0||n>=readingCases.length)return;stopVideos(dialog);active=n;history.replaceState(null,'',`#case/${readingCases[n].id}`);renderReader();$('#close-dialog').focus();}
  document.addEventListener('click',e=>{const a=e.target.closest('[data-case]');if(a&&!e.ctrlKey&&!e.metaKey&&!e.shiftKey&&!e.altKey&&e.button===0){e.preventDefault();openCase(a.dataset.case);}});
  $('.filters').addEventListener('click',e=>{const b=e.target.closest('[data-filter]');if(!b)return;filter=b.dataset.filter;document.querySelectorAll('[data-filter]').forEach(x=>x.setAttribute('aria-pressed',x===b));render();});
  $('#search').addEventListener('input',e=>{query=e.target.value;render();});
  $('#reset-filters').addEventListener('click',()=>{query='';$('#search').value='';document.querySelector('[data-filter="all"]').click();$('#search').focus();});
  $('#close-dialog').addEventListener('click',close);$('#prev-case').addEventListener('click',()=>change(-1));$('#next-case').addEventListener('click',()=>change(1));
  dialog.addEventListener('close',()=>{stopVideos(dialog);$('#reader').innerHTML='';document.body.style.overflow='';document.title='Jev 사용 사례 — RT616';if(location.hash.startsWith('#case/'))history.replaceState(null,'','#collection');returnFocus?.isConnected&&returnFocus.focus({preventScroll:true});watchVideos();});
  dialog.addEventListener('click',e=>{if(e.target!==dialog)return;const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)close();});
  window.addEventListener('hashchange',()=>{if(location.hash.startsWith('#case/'))openCase(location.hash.slice(6),false);else close();});
  document.addEventListener('keydown',e=>{if(e.key==='/'&&!dialog.open&&!['INPUT','TEXTAREA'].includes(document.activeElement.tagName)){e.preventDefault();$('#search').focus();}});
  document.addEventListener('visibilitychange',()=>{if(document.hidden){stopVideos(list);stopVideos(dialog);}else watchVideos();});
  $('#toggle-previews').addEventListener('click',e=>{previewsPaused=!previewsPaused;e.target.textContent=previewsPaused?'영상 재생 ▷':'영상 멈춤 Ⅱ';e.target.setAttribute('aria-pressed',previewsPaused);watchVideos();});
  async function copy(text,button){
    let copied=false;
    try{await navigator.clipboard.writeText(text);copied=true;}catch{}
    if(!copied){
      const field=document.createElement('textarea');field.value=text;field.setAttribute('aria-label','복사할 내용');field.style.cssText='position:fixed;left:-9999px;top:0';dialog.append(field);field.select();
      try{copied=document.execCommand('copy');}catch{}
      field.remove();button.focus({preventScroll:true});
    }
    button.textContent=copied?'복사됨 ✓':'복사 실패';
    $('#reader-status').textContent=copied?'클립보드에 복사했습니다.':'복사할 수 없습니다. 내용을 직접 선택해 복사하세요.';
  }
  $('#copy-article-link').addEventListener('click',e=>copy(location.href,e.currentTarget));
  $('#reader').addEventListener('click',e=>{
    const jump=e.target.closest('[data-jump]');
    if(jump){const target=document.getElementById(jump.dataset.jump);target.scrollIntoView({behavior:'auto',block:'start'});target.focus({preventScroll:true});return;}
    const button=e.target.closest('[data-copy-code]');
    if(button){copy(ArticleView.codeAt(+button.dataset.copyCode),button);return;}
    const download=e.target.closest('[data-download-diagram]');
    if(download){const item=ArticleView.diagramAt(+download.dataset.downloadDiagram);const url=URL.createObjectURL(new Blob([item.svg],{type:'image/svg+xml;charset=utf-8'}));const link=document.createElement('a');link.href=url;link.download=item.name;link.click();setTimeout(()=>URL.revokeObjectURL(url),1000);$('#reader-status').textContent='파이프라인 SVG를 저장합니다.';}
  });
  let scrollQueued=false;
  dialog.addEventListener('scroll',()=>{if(scrollQueued)return;scrollQueued=true;requestAnimationFrame(()=>{scrollQueued=false;const total=dialog.scrollHeight-dialog.clientHeight;$('#reading-progress').value=total>0?Math.min(100,dialog.scrollTop/total*100):100;const sections=[...dialog.querySelectorAll('.blog-section')];let current=sections[0]?.id;for(const s of sections){if(s.getBoundingClientRect().top<=dialog.getBoundingClientRect().top+145)current=s.id;}dialog.querySelectorAll('[data-jump]').forEach(b=>{if(b.dataset.jump===current)b.setAttribute('aria-current','location');else b.removeAttribute('aria-current');});});},{passive:true});
  motion.addEventListener('change',()=>watchVideos());render();if(location.hash.startsWith('#case/'))openCase(location.hash.slice(6),false);
})();

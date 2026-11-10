/* Editorial link annotations; kept separate so rebuilding article text preserves them. */
(() => {
  const D='https://docs.typesafe.ai/', G='https://github.com/';
  const launch='https://typesafe.ai/blog/introducing-system-one-models-and-jev';
  const origins={pokemon:'https://2389.ai/research/writing/jev-plays-pokemon/',pacman:G+'opper-ai/jevman-benchmark',tetris:G+'trungdq88/jev-tetris',mario:G+'fhshaik/typesafe-mario',doom:launch,wikiracing:launch,drone:G+'RomanSlack/jev-drone','robot-arm':G+'Control-derek/so101-jev'};
  const terms={
    pokemon:[
      ['2389 Research','https://2389.ai/research/writing/jev-plays-pokemon/'],['Michael Sugimura','https://2389.ai/research/writing/jev-plays-pokemon/'],
      ['Christian Mathiesen',G+'christianmat/jev-pokemon'],['Mathiesen의 구현',G+'christianmat/jev-pokemon'],['완주한 실행',G+'christianmat/jev-pokemon'],
      ['Orrery 지식베이스','https://2389.ai/research/writing/jev-plays-pokemon/'],['PyBoy',G+'Baekalfen/PyBoy'],['pokered',G+'pret/pokered'],
      ['94%','https://2389.ai/research/writing/jev-plays-pokemon/'],['A/B 실행','https://2389.ai/research/writing/jev-plays-pokemon/'],
      ['정책 선택 요청','https://2389.ai/research/writing/jev-plays-pokemon/'],['원문의 시연','https://2389.ai/research/writing/jev-plays-pokemon/'],['calibrated probabilities',D+'introduction/machine-learning-primer']
    ],
    pacman:[
      ['Johnny Chadda',G+'joch/jevman'],['joch/jevman',G+'joch/jevman'],['Opper',G+'opper-ai/jevman-benchmark'],['jevman-benchmark',G+'opper-ai/jevman-benchmark'],
      ['공개 페이지','https://opper.ai/jevman-benchmark/'],['JevMan',G+'opper-ai/jevman-benchmark'],['리더보드','https://opper.ai/jevman-benchmark/'],['플레이 기록','https://opper.ai/jevman-benchmark/'],
      ['워밍업 호출',G+'opper-ai/jevman-benchmark#scripts'],['최대 세 요청',G+'opper-ai/jevman-benchmark#how-decisions-work']
    ],
    tetris:[['공개 페이지',G+'trungdq88/jev-tetris'],['원본의 비교',G+'trungdq88/jev-tetris'],['기본 중력',G+'trungdq88/jev-tetris'],['missed deadline',G+'trungdq88/jev-tetris'],['세 상대',G+'trungdq88/jev-tetris']],
    mario:[['대시보드',G+'fhshaik/typesafe-mario'],['상태 묶음',G+'fhshaik/typesafe-mario']],
    doom:[['TypeSafe',launch],['공식 소개',launch],['공식 데모',launch],['지시에 반응하는 플레이',launch]],
    wikiracing:[['공식 소개',launch],['원문',launch],['255',D+'primitives/choice']],
    drone:[['RomanSlack',G+'RomanSlack/jev-drone'],['MuJoCo Menagerie',G+'google-deepmind/mujoco_menagerie'],['Skydio X2',G+'google-deepmind/mujoco_menagerie'],['65초 실행',G+'RomanSlack/jev-drone'],['시행착오 기록',G+'RomanSlack/jev-drone'],['후속 터널',G+'RomanSlack/jev-drone']],
    'robot-arm':[['Control-derek',G+'Control-derek/so101-jev'],['SO-101','https://huggingface.co/docs/lerobot/so101'],['LeRobot','https://huggingface.co/docs/lerobot/so101'],['47번 실패',G+'Control-derek/so101-jev'],['오프라인 문제',G+'Control-derek/so101-jev'],['14단계',G+'Control-derek/so101-jev'],['원본 장치',G+'Control-derek/so101-jev']]
  };
  const common=[['Choice',D+'primitives/choice'],['Noul',D+'primitives/noul'],['Score',D+'primitives/score'],['confidence',D+'confidence']];
  for(const [id,a] of Object.entries(window.ATLAS_ARTICLES)){
    if(id==='intro')continue;
    const origin=origins[id];
    for(const s of a.sections){
      const used=new Set();
      const sourceCode=s.blocks.filter(b=>b.type==='code'&&b.source);
      const localTerms=[...(terms[id]||[]),...common,['README',origin]];
      for(const b of sourceCode){
        // Link symbols actually shown in the adjacent source excerpt, never invented paths.
        const names=new Set([...b.code.matchAll(/\b(?:def|function|const|class)\s+([A-Za-z_][\w]*)|["']([a-z][a-z0-9_]{4,})["']\s*:/g)].map(m=>m[1]||m[2]));
        for(const name of names)localTerms.push([name,b.source]);
        if(b.file)localTerms.push([b.file,b.source]);
      }
      for(const b of s.blocks){
        if(b.type!=='p')continue;
        b.links=b.links||[];
        const chosen=[];
        const existing=b.links.map(l=>({at:b.text.indexOf(l.text),end:b.text.indexOf(l.text)+l.text.length})).filter(l=>l.at>=0);
        for(const [text,url] of [...localTerms].sort((a,b)=>b[0].length-a[0].length)){
          const at=b.text.indexOf(text);
          if(at<0||used.has(text)||[...existing,...chosen].some(x=>at<x.end&&at+text.length>x.at))continue;
          chosen.push({text,url,at,end:at+text.length});
        }
        for(const {text,url} of chosen.slice(0,5)){b.links.push({text,url});used.add(text);}
      }
    }
    a.leadLinks=(terms[id]||[]).filter(([text])=>a.lead.includes(text)).slice(0,2).map(([text,url])=>({text,url}));
  }
})();

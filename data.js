"use strict";
window.ATLAS_CASES = [
  {
    "id": "pokemon",
    "number": "01",
    "category": "game",
    "label": "GAME / LONG HORIZON",
    "name": "Pokémon Red",
    "title": "같은 게임,<br>다른 판단의 범위.",
    "short": "두 Jev 구현과 로컬 Qwen 실행의 기억·프롬프트·응답을 살펴본다.",
    "color": "#dceaac",
    "ink": "#365334",
    "concept": "계층 계획 · 기억 · 프롬프트 · 로컬 Qwen",
    "input": "A: 체력·레벨 / B·C: 게임 상태·기억·행동 후보",
    "output": "A: 이동 정책 / B·C: 이동·전투·회복·메뉴 행동",
    "executor": "A: 가중 경로 탐색 / B·C: 경로·메뉴·버튼 조작",
    "question": "누구를 찾아갈지와 그곳까지 어떻게 움직일지는 각각 누가 정할까?",
    "intro": "체력이 부족할 때와 경험치가 필요할 때 좋은 길은 다릅니다. 같은 포켓몬 게임을 두 프로젝트가 서로 다른 판단 문제로 나눴습니다.",
    "detail": "2389 Research는 생성 모델이 퀘스트와 목적지를 정하고 Jev가 이동 정책을 선택합니다. Christian Mathiesen은 Jev에 이동·전투·메뉴 등 더 넓은 행동을 맡겨 완주했습니다.",
    "insight": "같은 Choice 인터페이스라도 후보가 정책인지 구체적인 행동인지에 따라 주변 코드와 평가가 달라집니다.",
    "limit": "2389의 2026년 9월 18일 글은 초기 실험, Mathiesen의 9월 25~26일 기록은 별도 완주 결과입니다.",
    "activity": "두 경로의 풀밭 비용을 바꾸어 최단·회피·훈련 정책의 선택을 계산하고, 체력이 떨어졌을 때 어느 계획 층을 바꿔야 하는지 설명해 보세요.",
    "links": [
      {
        "label": "2389 · 원문 블로그",
        "url": "https://2389.ai/research/writing/jev-plays-pokemon/"
      },
      {
        "label": "2389 · 공개 구현",
        "url": "https://github.com/2389-research/jev-plays-pokemon"
      },
      {
        "label": "Mathiesen · 완주 프로젝트",
        "url": "https://github.com/christianmat/jev-pokemon"
      },
      {
        "label": "Mathiesen · 하이라이트 페이지",
        "url": "https://jev-pokemon.vercel.app/"
      }
    ],
    "evidence": "두 프로젝트의 원문 · 코드 · 실행 기록",
    "mode": "게임 상태 입력"
  },
  {
    "id": "pacman",
    "number": "02",
    "category": "game",
    "label": "GAME / REAL-TIME CHOICE",
    "name": "JevMan",
    "title": "다음 모퉁이에서<br>만나자.",
    "short": "팩맨이 될 수도, 유령이 될 수도. 갈림길마다 드러나는 선택의 확률.",
    "color": "#242943",
    "ink": "#f4efcc",
    "concept": "확률 · 응답 지연",
    "input": "미로·먹이·유령의 구조화된 상태",
    "output": "교차로에서 이동할 방향",
    "executor": "게임 엔진 · 지연 시 대체 규칙",
    "question": "정확하지만 늦은 판단과 조금 덜 정확하지만 빠른 판단, 어느 쪽이 이길까?",
    "intro": "노란 팩맨이 갈림길에 섰습니다. 먹이가 많은 길로 갈까요, 유령을 피해 돌아갈까요? JevMan에서는 AI의 플레이를 보거나 사람이 팩맨이 되어 AI 유령을 상대할 수 있습니다.",
    "detail": "교차로마다 게임 상태와 방향 선택지를 모델에 전달합니다. 반환된 선택과 확률이 플레이와 화면에 반영됩니다. 이 컬렉션에서는 여러 모델 중 Jev를 선택한 실행을 다룹니다.",
    "insight": "선택 확률을 실제 움직임과 함께 관찰할 수 있습니다. 응답이 늦어 대체 규칙이 사용된 경우에는 그 행동을 모델의 판단과 구별해야 합니다.",
    "limit": "기록 재생과 실시간 모델 호출은 다릅니다. 공개 서비스의 실시간 플레이에는 남은 크레딧 또는 사용자 계정이 필요할 수 있습니다.",
    "activity": "갈림길에서 영상을 멈추고 각자 방향을 고른 뒤 Jev의 확률을 공개하세요. 위협을 다르게 해석한 이유를 토론해 보세요.",
    "links": [
      {
        "label": "데모 · 기록 재생",
        "url": "https://opper.ai/jevman-benchmark/"
      },
      {
        "label": "코드와 평가 방법",
        "url": "https://github.com/opper-ai/jevman-benchmark"
      }
    ],
    "evidence": "공개 데모 · 저장소 · 평가 방법",
    "mode": "게임 상태 입력"
  },
  {
    "id": "tetris",
    "number": "03",
    "category": "game",
    "label": "GAME / DECISION DEADLINE",
    "name": "Jev Tetris",
    "title": "좋은 답도,<br>늦으면 소용없다.",
    "short": "블록은 기다리지 않는다. 코드가 계산한 배치 중 한 수를 고르는 Jev.",
    "color": "#e0d9f2",
    "ink": "#51447a",
    "concept": "후보 평가 · 마감 시간",
    "input": "가능한 배치와 각 배치의 결과 설명",
    "output": "배치 Choice · 전략 · 보드 상태",
    "executor": "배치 시뮬레이션 · 낙하·회전 코드",
    "question": "결과를 코드가 미리 계산해 준다면, Jev에게 남는 판단은 무엇일까?",
    "intro": "답변을 기다리는 동안에도 테트리스 블록은 내려옵니다. 멋진 배치를 골라도 바닥에 닿은 뒤라면 이미 늦었습니다.",
    "detail": "코드가 가능한 배치를 열거하고 줄 제거·구멍·높이 같은 결과를 계산합니다. 이 정보를 설명으로 바꿔 Jev에 주면 placement Choice가 실제 배치를 결정합니다. 전략과 위험 상태 등 추가 질문은 UI에 표시됩니다.",
    "insight": "코드가 가능한 미래를 계산하고 모델이 그중 하나를 평가합니다. 모델이 기하학이나 물리 시뮬레이션을 전부 수행한다고 설명하면 역할이 뒤섞입니다.",
    "limit": "웹 데모의 현재 접속은 확인하지 못했습니다. 저장소와 실제 Jev 요청 코드를 확인한 사례이며, 규칙 기반 모드는 Jev 실행과 별개입니다.",
    "activity": "후보 3개를 놓고 ‘줄 제거 수’와 ‘새로 생기는 구멍’ 사이에서 우선순위를 정해 보세요. 선택 이유를 바꾸면 어떤 결과가 날까요?",
    "links": [
      {
        "label": "프로젝트와 실행 안내",
        "url": "https://github.com/trungdq88/jev-tetris"
      },
      {
        "label": "질문·응답 처리 코드",
        "url": "https://github.com/trungdq88/jev-tetris/blob/main/public/jev.js"
      }
    ],
    "evidence": "공개 저장소 · Jev API 호출 코드",
    "mode": "배치 결과 입력"
  },
  {
    "id": "mario",
    "number": "04",
    "category": "game",
    "label": "GAME / TIMING & RISK",
    "name": "Super Mario Bros.",
    "title": "지금 뛸까,<br>한 발 더 갈까?",
    "short": "앞에 다가오는 적, 끝나가는 발판. 점프 한 번에도 세 가지 판단이 필요하다.",
    "color": "#d6e9f3",
    "ink": "#235b77",
    "concept": "Choice · Noul · Score",
    "input": "위치·속도·적·지형·반응 지연 JSON",
    "output": "조작 Choice · 점프 Noul · 위험 Score",
    "executor": "NES 에뮬레이터의 컨트롤러 입력",
    "question": "‘점프가 필요한가?’와 ‘어떤 조작을 할까?’는 같은 질문일까?",
    "intro": "마리오 앞에 적이 다가오고 있습니다. 달리면서 뛸까요, 잠시 멈출까요? 같은 장면에서 행동·점프 필요성·위험도를 함께 판단할 수 있습니다.",
    "detail": "TypeSafe Mario는 에뮬레이터 상태를 물체 중심 JSON으로 바꿉니다. Jev는 오른쪽 이동·점프·달리기 등을 조합한 제한된 조작 중 하나를 선택합니다. 점프 필요성과 위험도는 별도 질문입니다.",
    "insight": "Choice는 행동을 고르고, Noul은 명제가 참일 가능성을 묻고, Score는 정해진 척도로 평가합니다. 같은 입력을 다른 질문으로 읽는 사례입니다.",
    "limit": "Jev는 화면 이미지를 받지 않습니다. 정확한 타이밍 계산은 코드가 처리하며, 저장소는 실험용 컨트롤러로 소개되어 있습니다.",
    "activity": "적까지의 거리는 그대로 두고 속도 또는 응답 지연만 바꿔 보세요. ‘지금 점프’의 의미가 어떻게 달라지는지 설명해 보세요.",
    "links": [
      {
        "label": "컨트롤러와 대시보드",
        "url": "https://github.com/fhshaik/typesafe-mario"
      }
    ],
    "evidence": "공개 저장소 · 입력·질문 명세",
    "mode": "게임 RAM 입력"
  },
  {
    "id": "doom",
    "number": "05",
    "category": "game",
    "label": "GAME / FAST REACTION",
    "name": "DOOM",
    "title": "생각의 속도가<br>행동의 속도로.",
    "short": "실시간 게임 루프 안에 들어간 판단. 눈에 보이는 화면과 모델의 입력은 다르다.",
    "color": "#e9a385",
    "ink": "#6b2f25",
    "concept": "실시간 판단 · 관측 방식",
    "input": "텍스트를 포함한 구조화된 게임 상태",
    "output": "게임 루프에서 사용할 행동 판단",
    "executor": "게임과 연결된 조작 코드",
    "question": "화면에 게임이 나온다는 사실만으로 ‘비전을 이해한다’고 말할 수 있을까?",
    "intro": "TypeSafe가 Jev 공개와 함께 소개한 공식 게임 데모입니다. 빠르게 변하는 게임 안에서 짧은 판단이 반복적으로 행동에 연결됩니다.",
    "detail": "공식 설명은 이 데모가 이미지를 입력받는 방식이 아니라 구조화된 게임 상태를 사용한다고 명시합니다. 소개 당시 초당 약 10회 질의를 수행했다고 설명했습니다.",
    "insight": "화려한 데모를 볼 때 첫 질문은 ‘모델에게 어떤 정보가 주어졌나?’입니다. 플레이 영상과 인식 능력은 같은 증거가 아닙니다.",
    "limit": "공식 소개 데모 기준입니다. 제작사도 전용 규칙 기반 봇이 더 잘 플레이할 수 있다고 밝히며, 이 사이트는 속도나 성능을 재측정하지 않았습니다.",
    "activity": "학생들에게 먼저 플레이 장면만 보여주고 입력을 추측하게 하세요. 실제 입력이 구조화된 상태라는 점을 공개한 뒤 평가 기준을 다시 정해 보세요.",
    "links": [
      {
        "label": "공식 소개 · Fun Demos",
        "url": "https://typesafe.ai/blog/introducing-system-one-models-and-jev"
      }
    ],
    "evidence": "TypeSafe 공식 데모 설명",
    "mode": "구조화된 상태 입력"
  },
  {
    "id": "wikiracing",
    "number": "06",
    "category": "web",
    "label": "WEB / SEMANTIC NAVIGATION",
    "name": "Wikiracing",
    "title": "링크만 타고,<br>목적지까지.",
    "short": "검색창 없이 위키백과를 건너기. 수많은 링크 중 다음 문서를 선택하는 레이스.",
    "color": "#eee4ce",
    "ink": "#6b5637",
    "concept": "의미적 탐색 · 후보 축소",
    "input": "현재 문서의 링크 후보와 목표",
    "output": "다음에 방문할 링크",
    "executor": "문서 이동 · 후보 평가와 선택 코드",
    "question": "목표와 닮은 링크를 계속 고르면 반드시 목적지에 도착할까?",
    "intro": "한 위키백과 문서에서 출발해 페이지 안의 링크만 따라 목표 문서로 이동합니다. 검색창도, 원하는 URL을 직접 만드는 방법도 쓸 수 없습니다.",
    "detail": "Jev는 실제로 주어진 링크 후보 안에서 다음 이동을 선택합니다. 공식 소개에서는 후보 수가 많을 때 각 후보를 평가한 뒤 명시적으로 선택하는 두 단계 방식을 사용한다고 설명합니다.",
    "insight": "허용된 후보 안에서만 고르는 것과 올바른 경로를 찾는 것은 별개입니다. 선택 형식이 유효해도 의미적으로 잘못된 길을 고를 수 있습니다.",
    "limit": "공식 소개의 모델 간 속도 비교는 추론 설정 등의 영향을 받습니다. 수업에서는 우승 순위보다 후보 구성과 경로 선택을 살펴보세요.",
    "activity": "출발 문서와 목표 문서를 정해 학생 팀끼리 링크 레이스를 해보세요. 가장 짧은 경로와 가장 빨리 도착한 경로가 같은지도 비교해 보세요.",
    "links": [
      {
        "label": "공식 소개 · Wikiracing",
        "url": "https://typesafe.ai/blog/introducing-system-one-models-and-jev"
      }
    ],
    "evidence": "TypeSafe 공식 데모 설명",
    "mode": "문서·링크 입력"
  },
  {
    "id": "drone",
    "number": "07",
    "category": "robot",
    "label": "ROBOTICS / SIMULATION",
    "name": "Jev Drone",
    "title": "옆이 막혔다면,<br>위는 어때?",
    "short": "장애물을 피해 목표를 따라가는 드론. 상승이라는 선택에 필요한 것은 높이 정보였다.",
    "color": "#d4e5de",
    "ink": "#31574e",
    "concept": "상태 설계 · 계층 제어",
    "input": "시뮬레이터 깊이·세그멘테이션 → 장면 요약",
    "output": "우회·상승·제동 등 기동 · 위험 판단",
    "executor": "고속 비행 제어 · 별도 안전 제한",
    "question": "입력에 높이가 없는데 ‘위로 넘어가라’는 선택을 기대할 수 있을까?",
    "intro": "MuJoCo 속 드론이 움직이는 목표를 따라 장애물 코스를 통과합니다. 왼쪽과 오른쪽이 모두 막혔을 때는 위로 넘어가는 선택이 필요합니다.",
    "detail": "코드가 깊이와 세그멘테이션 버퍼를 장면 정보로 정리합니다. Jev는 기동·위험도·목표를 정말 잃었는지를 판단합니다. 비행 제어와 안전 반사는 더 빠른 별도 루프에서 실행됩니다.",
    "insight": "제작자는 처음에 수평 거리만 주어 상승이 선택되지 않았다고 기록했습니다. 장애물 상단 높이와 드론의 상승 가능 범위를 추가하면서 문제를 해결했습니다. 핵심은 상태 설계였습니다.",
    "limit": "실제 드론이 아닌 시뮬레이션입니다. 공개 비교에는 단일 실행과 구조적으로 제한된 기준 제어기가 포함되어 있어 일반적인 성능 우위로 해석할 수 없습니다.",
    "activity": "입력 항목을 하나씩 지워 보세요. 높이·목표 가림 시간·안전 거리 중 무엇이 사라질 때 어떤 판단이 불가능해질까요?",
    "links": [
      {
        "label": "프로젝트 · 장면 이미지",
        "url": "https://github.com/RomanSlack/jev-drone"
      },
      {
        "label": "Choice·Score·Noul 코드",
        "url": "https://github.com/RomanSlack/jev-drone/blob/main/tactics.py"
      }
    ],
    "evidence": "공개 저장소 · Jev API 호출 코드",
    "mode": "시뮬레이션 · 장면 요약"
  },
  {
    "id": "robot-arm",
    "number": "08",
    "category": "robot",
    "label": "ROBOTICS / REAL HARDWARE",
    "name": "SO-101 × Jev",
    "title": "보고, 고르고,<br>집어 올린다.",
    "short": "두 카메라와 16개 행동. 비전 모델과 decision model이 실제 로봇팔에서 만나는 순간.",
    "color": "#f0d866",
    "ink": "#655512",
    "concept": "비전·판단 분리 · 실제 실행",
    "input": "별도 비전 모델의 위치 차이·그리퍼 상태",
    "output": "이동·회전·그리퍼 등 16개 행동 중 선택",
    "executor": "SO-101 제어 코드 · 운동학·서보 실행",
    "question": "비전 모델이 ‘오른쪽으로 가라’고까지 말하면, 누가 결정을 한 것일까?",
    "intro": "실제 SO-101 로봇팔이 작은 약 상자를 집어 차 상자 위에 올립니다. 카메라 두 대가 장면을 보고, 별도 비전 모델과 Jev가 서로 다른 역할을 맡습니다.",
    "detail": "비전 모델은 카메라 사진에서 목표까지의 위치 차이 등을 추출합니다. Jev는 이 구조화된 상태를 받아 16개 행동 중 하나를 고릅니다. 코드가 그 동작을 실행하고 다시 관측합니다.",
    "insight": "제작자는 조언이 섞인 비전 설명, 사실만 담긴 문장, 구조화된 위치 차이를 비교했습니다. ‘보는 모델’이 사실만 전달하는지 이미 행동을 추천하는지 살펴볼 수 있습니다.",
    "limit": "제작자의 제한된 실제 로봇 실행 기록입니다. 성공률 검증 사례로 일반화하지 말고, 입력·판단·실행의 역할을 설명하는 사례로 읽으세요.",
    "activity": "같은 장면을 ‘물체가 왼쪽에 있다’와 좌표 차이로 각각 표현해 보세요. 로봇 기준축·카메라 기준축이 섞이면 무엇이 달라질까요?",
    "links": [
      {
        "label": "프로젝트 · 실행 기록",
        "url": "https://github.com/Control-derek/so101-jev"
      },
      {
        "label": "제작자 영상",
        "url": "https://b23.tv/7z5LXtQ"
      },
      {
        "label": "Jev 호출·실행 코드",
        "url": "https://github.com/Control-derek/so101-jev/blob/main/lean_runner.py"
      }
    ],
    "evidence": "실제 하드웨어 기록 · Jev 호출 코드",
    "mode": "실제 로봇 · 별도 비전 모델"
  }
];

"use strict";
window.ATLAS_ARTICLES = {
  "pokemon": {
    "title": "포켓몬을 하는 두 Jev: 길의 선택과 모험의 진행",
    "lead": "상록시티 상점으로 가는 두 길이 있다. 풀밭을 가로지르면 빨리 도착하지만 야생 포켓몬과 싸울 수 있고, 풀밭을 피하면 안전한 대신 돌아가야 한다. 체력이 부족할 때는 돌아가는 길이 낫다. 그러나 다음 체육관에 도전하기에 레벨이 낮다면 그 전투가 오히려 필요하다. 목적지가 같아도 좋은 길의 기준은 달라지는 것이다. 2389 Research는 Jev가 풀밭을 피할지, 전투를 하며 갈지를 고르게 했다. Christian Mathiesen은 같은 모델에 이동과 전투, 회복 등 더 넓은 선택을 맡겨 게임을 완주했다. 두 구현을 비교하며 무엇을 모델에 묻고 무엇을 코드로 처리할지 살펴보자.",
    "origin": {
      "label": "Michael Sugimura · Jev Plays Pokemon · 2026.09.18",
      "url": "https://2389.ai/research/writing/jev-plays-pokemon/"
    },
    "refs": [
      {
        "label": "2389 Research 공개 구현",
        "url": "https://github.com/2389-research/jev-plays-pokemon"
      },
      {
        "label": "Christian Mathiesen · 완주 프로젝트",
        "url": "https://github.com/christianmat/jev-pokemon/blob/main/README.md"
      },
      {
        "label": "src/jev/client.ts",
        "url": "https://github.com/christianmat/jev-pokemon/blob/20cdcb846ff995383fe3da1d48ad5eac6d8d1abd/src/jev/client.ts"
      },
      {
        "label": "src/agent/agent.ts",
        "url": "https://github.com/christianmat/jev-pokemon/blob/20cdcb846ff995383fe3da1d48ad5eac6d8d1abd/src/agent/agent.ts"
      }
    ],
    "mediaTitle": "비교 사례 B · Christian Mathiesen의 완주 영상",
    "sections": [
      {
        "id": "two-projects",
        "title": "같은 포켓몬, 서로 다른 실험",
        "blocks": [
          {
            "type": "p",
            "text": "포켓몬을 오래 진행하려면 눈앞의 이동뿐 아니라 여러 장소를 거치는 목표와 이미 끝낸 일을 기억해야 한다. 2389 Research의 Michael Sugimura는 이 장기 계획과 기억을 실험하던 시스템에 Jev를 추가했다. 여러 모델과 코드가 함께 작동하는 상황에서, 자주 반복되는 작은 판단을 빠른 모델에 맡기면 어디에서 도움이 되는지가 실험의 출발점이었다.",
            "links": [
              {
                "text": "Michael Sugimura",
                "url": "https://2389.ai/research/writing/jev-plays-pokemon/"
              },
              {
                "text": "2389 Research",
                "url": "https://2389.ai/research/writing/jev-plays-pokemon/"
              }
            ]
          },
          {
            "type": "p",
            "text": "예컨대 요청을 어느 처리기로 보낼지 정할 때 필요한 답은 긴 설명이 아니라 처리기의 이름 하나다. Jev는 이처럼 주어진 후보 가운데 하나를 고르고 확률을 반환하는 데 쓰인다. 저자는 큰 생성 모델을 매번 호출하거나 BERT 같은 별도 분류기를 학습할 데이터를 먼저 모으지 않고도 이런 선택 문제를 구성할 수 있다는 점에 주목했다. 포켓몬에서는 이동의 성격을 고르는 일이 그에 해당했다.",
            "links": []
          },
          {
            "type": "p",
            "text": "Christian Mathiesen이 공개한 완주한 실행은 질문의 범위가 더 넓다. 이동 목적지뿐 아니라 전투 기술, 회복, 훈련, 대화 메뉴까지 Jev가 선택한다. 따라서 두 결과를 같은 구현의 전후 성능처럼 이어 붙여서는 안 된다. 제작자와 코드가 다른 두 실험이며, 이 글에서는 2389의 이동 정책 실험을 A, Mathiesen의 완주 실험을 B로 구분한다.",
            "links": [
              {
                "text": "Christian Mathiesen",
                "url": "https://github.com/christianmat/jev-pokemon"
              },
              {
                "text": "완주한 실행",
                "url": "https://github.com/christianmat/jev-pokemon"
              }
            ]
          },
          {
            "type": "table",
            "headers": [
              "구분",
              "A · 2389 Research",
              "B · Christian Mathiesen"
            ],
            "rows": [
              [
                "중심 질문",
                "어떤 판단을 Jev에 맡기면 도움이 되는가?",
                "작은 선택들을 이어 게임을 끝낼 수 있는가?"
              ],
              [
                "Jev의 대표 역할",
                "이동 정책 선택",
                "이동·전투·회복·메뉴 등 행동 선택"
              ],
              [
                "상위 목표",
                "다른 생성 모델이 퀘스트와 목적지를 구성",
                "스토리 마일스톤과 게임 이벤트 플래그"
              ],
              [
                "공개 결과",
                "2026.09.18 글은 초기 실험 단계",
                "2026.09.25~26 실행에서 완주"
              ]
            ]
          },
          {
            "type": "p",
            "text": "A의 2026년 9월 18일 글은 더 긴 실행, 초반 지역 탐색, 체육관 전투를 다음 과제로 남겼다. B는 그다음 주인 9월 25~26일에 37시간 40분 동안 플레이해 완주한 별개의 기록이다. A에서 판단을 나누는 이유를 먼저 이해한 뒤 B의 장기 실행을 보면, 작은 선택을 잘하는 것에 더해 어떤 장치가 필요한지 비교할 수 있다.",
            "links": []
          }
        ]
      },
      {
        "id": "hierarchy",
        "title": "A. 무엇을 할지, 어디로 갈지, 어떻게 갈지",
        "blocks": [
          {
            "type": "p",
            "text": "오박사에게 소포를 전달하려면 무엇부터 해야 할까? 소포를 어디서 받아야 하는지 알아야 하고, 그 장소로 이동한 뒤, 받은 물건을 가지고 돌아와야 한다. “소포를 전달한다”는 목표만으로 지금 누를 방향키가 정해지지는 않는다. 2389는 이 간격을 세 층으로 나눴다. 상위 층이 퀘스트를 정하고, 중간 층이 현재 지도에서 갈 좌표를 정하며, 하위 층이 그 좌표까지 가는 방법을 정한다.",
            "links": []
          },
          {
            "type": "table",
            "headers": [
              "층",
              "담당",
              "아래로 넘기는 내용"
            ],
            "rows": [
              [
                "상위 계획",
                "GLM",
                "퀘스트와 확인 가능한 완료 조건"
              ],
              [
                "중간 계획",
                "DeepSeek 4.1 Flash",
                "현재 지도에서 향할 x, y 좌표"
              ],
              [
                "하위 이동",
                "Jev + 결정론적 경로 탐색",
                "이동 정책과 그 정책에 따른 다음 걸음"
              ]
            ]
          },
          {
            "type": "p",
            "text": "여러 층을 두면 하위 에이전트가 일을 마쳤다고 보고했을 때 정말 끝났는지 확인할 방법도 필요하다. 상점 주변을 걸었다는 보고와 상점에 도착했다는 사실은 다르기 때문이다. 그래서 상위 계획기는 목표와 함께 검사 가능한 완료 조건을 만든다. 원문의 대시보드에서는 지도 42로 가라는 목표에 on_map이 42인지 확인하는 조건이 붙는다. 아이템을 얻는 목표라면 가방에 그 아이템이 있는지를 검사한다.",
            "links": []
          },
          {
            "type": "p",
            "text": "완료 검사가 실제로 무엇을 읽는지 확인하면 계획의 말과 게임의 사실이 분리되는 지점이 드러난다. 다음 두 함수는 같은 아이템에 대해 존재와 부재를 각각 검사한다."
          },
          {
            "type": "code",
            "label": "완료 확인: 아이템을 얻었는지, 건넸는지",
            "lang": "python",
            "kind": "2389 원본 코드",
            "code": "    if key == \"has_item\":\n        # spec = item id (int): true when that item is in the bag (e.g. Oak's Parcel 0x46).\n        try:\n            return int(spec) in _bag_item_ids(emu)\n        except (TypeError, ValueError):\n            return False\n    if key == \"no_item\":\n        # spec = item id: true when the item is NOT in the bag (e.g. delivered/consumed).\n        try:\n            return int(spec) not in _bag_item_ids(emu)\n        except (TypeError, ValueError):\n            return False",
            "start": 88,
            "file": "src/pokemon_agent/games/pokemon_red/predicates.py",
            "source": "https://github.com/2389-research/jev-plays-pokemon/blob/65390784134329682fd9eadb4b9ed5ccb7bad526/src/pokemon_agent/games/pokemon_red/predicates.py#L88-L99"
          },
          {
            "type": "p",
            "text": "소포를 받는 단계와 전달하는 단계는 같은 물건을 다루지만 완료 조건이 반대다. 받은 뒤에는 가방에 있어야 하고, 전달한 뒤에는 없어야 한다. 공개 구현의 has_item과 no_item이 각각 이 검사를 맡는다. 기준은 모델이 작성한 완료 보고가 아니라 실제 RAM에서 읽은 아이템 ID다. 목표를 정하는 판단과 완료를 확인하는 검사를 분리했으므로, 모델이 너무 일찍 끝났다고 말해도 게임 상태로 다시 확인할 수 있다.",
            "links": [
              {
                "text": "has_item",
                "url": "https://github.com/2389-research/jev-plays-pokemon/blob/65390784134329682fd9eadb4b9ed5ccb7bad526/src/pokemon_agent/games/pokemon_red/predicates.py#L88-L99"
              },
              {
                "text": "no_item",
                "url": "https://github.com/2389-research/jev-plays-pokemon/blob/65390784134329682fd9eadb4b9ed5ccb7bad526/src/pokemon_agent/games/pokemon_red/predicates.py#L88-L99"
              }
            ]
          },
          {
            "type": "p",
            "text": "현재 지도만 알아서는 소포를 누구에게 가져가야 하는지 알 수 없다. 지도와 인벤토리는 지금의 사실을 제공하지만, 장소와 아이템의 용도는 별도의 지식이다. 상위 계획기는 Orrery 지식베이스에서 초반 지역, 포켓몬 타입, 아이템 정보를 검색해 이 간격을 메운다. 게임 상태와 관련 지식을 함께 갖춰야 다음 퀘스트를 정할 수 있다.",
            "links": [
              {
                "text": "Orrery 지식베이스",
                "url": "https://2389.ai/research/writing/jev-plays-pokemon/"
              }
            ]
          },
          {
            "type": "diagram",
            "title": "2389의 세 단계 판단과 경로 실행",
            "nodes": [
              {
                "id": "n0",
                "x": 20,
                "y": 55,
                "kind": "llm",
                "title": "상위 계획 · GLM",
                "lines": [
                  "퀘스트 · 완료 조건"
                ]
              },
              {
                "id": "n1",
                "x": 250,
                "y": 55,
                "kind": "llm",
                "title": "중간 계획 · DeepSeek",
                "lines": [
                  "현재 목표 좌표 x, y"
                ]
              },
              {
                "id": "n2",
                "x": 480,
                "y": 55,
                "kind": "model",
                "title": "Jev · 정책 선택",
                "lines": [
                  "최단 · 풀밭 회피 · 훈련"
                ]
              },
              {
                "id": "n3",
                "x": 710,
                "y": 55,
                "kind": "code",
                "title": "가중 경로 탐색",
                "lines": [
                  "지형 비용 → 다음 방향"
                ]
              }
            ],
            "caption": "상위·중간 계획은 생성 모델, 정책 선택은 Jev가 맡는다. 게임 RAM의 관측은 각 층의 판단과 목표 완료 확인에 사용된다."
          },
          {
            "type": "p",
            "text": "원문에서는 상위 계획에 GLM, 중간 계획에 DeepSeek 4.1 Flash를 사용했으며 LunaRoute를 통해 호출했다. 이 구성에서 중요한 약속은 모델 이름보다 층 사이에 전달하는 내용이다. 상위 층은 퀘스트와 완료 조건을, 중간 층은 좌표를, Jev는 이동 정책을 제공한다. 저자가 모델을 바꿀 수 있다고 설명한 것도 이 역할과 전달 형식을 유지할 수 있기 때문이다.",
            "links": []
          }
        ]
      },
      {
        "id": "observation",
        "title": "그림 대신 RAM에서 지도를 구성한다",
        "blocks": [
          {
            "type": "p",
            "text": "목적지가 정해져도 길을 찾으려면 현재 어디가 막혀 있는지부터 알아야 한다. 2389는 PyBoy 에뮬레이터의 RAM을 읽어 현재 지도와 파티, 아이템, NPC 위치를 얻는다. 로드된 지도의 타일과 충돌 정보를 해독할 때는 pokered 디스어셈블리의 작은 타일 목록도 사용한다. 이 시스템의 출발점은 게임 화면의 픽셀을 인식하는 문제가 아니라 게임 내부의 값을 이동에 필요한 정보로 바꾸는 문제다.",
            "links": [
              {
                "text": "pokered",
                "url": "https://github.com/pret/pokered"
              },
              {
                "text": "PyBoy",
                "url": "https://github.com/Baekalfen/PyBoy"
              }
            ]
          },
          {
            "type": "p",
            "text": "그 정보를 빈칸과 벽으로만 표시하면 풀밭과 문을 구분할 수 없다. 풀밭은 걸을 수 있지만 전투가 생길 수 있고, 문은 다른 지도로 이어지며, 턱은 접근 방향에 따라 통과 여부가 달라진다. 이에 따라 지도는 길·벽·풀밭·물·문·턱을 구별하는 ASCII 기호로 표현한다. 중간 계획기가 이동 가능성과 이동의 결과를 함께 판단하도록 한 것이다.",
            "links": []
          },
          {
            "type": "p",
            "text": "지도는 갈 수 있는 곳을 보여 주지만 그중 어디로 가야 하는지는 알려 주지 않는다. 중간 계획기는 현재 퀘스트에 게임 상태와 최근 행동을 함께 대조해 다음 좌표를 고른다. 예를 들어 이미 소포를 받은 상태라면 상점으로 다시 가는 대신 돌아갈 길을 정해야 한다. 좌표가 정해진 뒤에는 그곳까지 빨리 갈지, 전투를 피할지와 같은 이동 정책을 Jev가 고른다.",
            "links": []
          },
          {
            "type": "p",
            "text": "원문의 대시보드는 이 흐름을 게임 화면 옆에 드러낸다. 재생 제어와 함께 현재 목표, 퀘스트 목록, 웨이포인트가 따로 표시된다. 소포를 받는 장면만 보면 아이템 하나가 늘어난 사건이지만, 퀘스트 패널을 함께 보면 그 사건으로 어떤 단계가 끝났는지 알 수 있다. 화면에 나타난 변화와 계획의 진행을 대응시킬 수 있는 구성이다.",
            "links": []
          }
        ]
      },
      {
        "id": "bfs",
        "title": "이동 방향을 매번 물을 필요가 있었을까?",
        "blocks": [
          {
            "type": "p",
            "text": "목적지까지 가장 적게 걷는 것만 필요하다면 이동할 때마다 모델에 방향을 물을 필요가 있을까? 모든 칸의 이동 비용이 같을 때는 BFS가 시작점에서 가까운 칸부터 탐색해 최단 경로를 구할 수 있다. 초기 구현은 이 경로의 다음 방향을 힌트로 주면서, 매 프레임의 이동 방향을 Jev에 다시 물었다. 이미 계산한 답 위에 모델의 판단을 한 번 더 얹은 셈이다.",
            "links": []
          },
          {
            "type": "p",
            "text": "A/B 실행에서 Jev의 선택은 BFS와 94% 일치했다. 대부분의 상황에서는 기존 계산을 그대로 따랐다는 뜻이다. 남은 6%가 더 좋은 선택인지는 이 숫자만으로 알 수 없다. 유리한 우회였을 수도 있고 불필요한 이동이었을 수도 있기 때문이다. 저자는 이 결과를 보고 이동 방향은 경로 탐색 코드로 정하고, Jev에는 풀밭을 피할지 전투를 하며 갈지를 묻기로 했다.",
            "links": [
              {
                "text": "A/B 실행",
                "url": "https://2389.ai/research/writing/jev-plays-pokemon/"
              },
              {
                "text": "94%",
                "url": "https://2389.ai/research/writing/jev-plays-pokemon/"
              }
            ]
          },
          {
            "type": "p",
            "text": "그다음에는 질문을 “어느 방향으로 한 칸 갈 것인가”에서 “이번 이동에서 무엇을 우선할 것인가”로 바꿨다. 체력이 낮으면 전투를 피해야 하고, 건강하지만 레벨이 부족하면 경험치를 얻어야 한다. 이 차이는 최단 경로만으로 정할 수 없다. Jev가 경로의 목적함수를 고르고, 정해진 목적함수 아래에서 가장 좋은 길은 경로 탐색 코드가 계산하도록 역할을 바꾼 것이다.",
            "links": []
          },
          {
            "type": "exercise",
            "question": "BFS와 94% 일치했다면 Jev의 정확도가 94%라는 뜻인가?",
            "answer": "아니다. 94%는 두 방식의 선택이 같은 비율이다. BFS는 최단 경로를 기준으로 하므로 체력 보존이나 훈련의 정답지라고 볼 수 없다. 일치율은 모델이 BFS와 얼마나 다른 행동을 했는지 알려 주지만, 어느 쪽이 퀘스트를 더 잘 진행했는지는 완료 시간·체력·전투 결과 등 별도 결과로 판단해야 한다."
          }
        ]
      },
      {
        "id": "policies",
        "title": "풀밭을 피할지, 싸우며 갈지",
        "blocks": [
          {
            "type": "p",
            "text": "풀밭을 피할지 들어갈지는 같은 장소에서도 파티 상태에 따라 달라진다. 원문의 시연에서는 건강할 때 훈련을 택했다가 체력이 떨어지자 풀밭을 피하는 쪽으로 바뀐다. 이를 표현하는 정책이 shortest, dodge-grass, farm-exp다. 각각 최단 이동, 체력 보존을 위한 풀밭 회피, 경험치를 위한 풀밭 전투를 뜻한다. 세 정책은 목적지보다 그곳에 도달하는 동안 감수할 비용과 얻을 이익을 바꾼다.",
            "links": [
              {
                "text": "shortest",
                "url": "https://github.com/2389-research/jev-plays-pokemon/blob/65390784134329682fd9eadb4b9ed5ccb7bad526/src/pokemon_agent/agent/typesafe_reasoner.py#L379-L391"
              },
              {
                "text": "원문의 시연",
                "url": "https://2389.ai/research/writing/jev-plays-pokemon/"
              }
            ]
          },
          {
            "type": "code",
            "label": "정책 후보와 판단에 필요한 상태",
            "lang": "python",
            "kind": "2389 원본 코드",
            "code": "        criteria = {\n            \"shortest\": \"take the shortest path; ignore grass (normal travelling)\",\n            \"dodge-grass\": \"avoid tall grass / wild battles — for when the party is HURT or you're \"\n                           \"on an important errand (delivering, low HP) and can't risk a fight\",\n            \"farm-exp\": \"deliberately route THROUGH grass to trigger wild battles and GRIND — for \"\n                        \"when the party is UNDER-LEVELED for what's ahead and healthy enough to fight\",\n        }\n        state = {\n            \"task\": \"Pick the routing objective for the next stretch toward the destination.\",\n            \"party_hp_frac\": (round(float(hp_frac), 2) if hp_frac is not None else None),\n            \"party_level\": level, \"level_target_for_next_gym\": level_target or None,\n            \"objective\": objective, \"area\": area, \"grass_on_this_map\": bool(grass_nearby),\n        }",
            "start": 379,
            "file": "src/pokemon_agent/agent/typesafe_reasoner.py",
            "source": "https://github.com/2389-research/jev-plays-pokemon/blob/65390784134329682fd9eadb4b9ed5ccb7bad526/src/pokemon_agent/agent/typesafe_reasoner.py#L379-L391"
          },
          {
            "type": "p",
            "text": "이 선택에는 체력만으로 충분하지 않다. 건강해도 다음 체육관에 필요한 레벨을 이미 넘었다면 훈련의 필요가 줄고, 주변에 풀이 없다면 회피와 훈련의 구분 자체가 이번 경로를 바꾸지 못한다. 그래서 state에는 체력 비율, 현재·목표 레벨, 목적과 지역, 풀밭 존재를 담는다. criteria의 키는 실행기가 알아볼 정책 이름이고 설명은 그 정책의 의미다. 체력이 낮을 때 회피하고, 건강하지만 레벨이 부족할 때 훈련하며, 풀이 없을 때 최단 경로를 고르는 기준을 함께 전달한다.",
            "links": []
          },
          {
            "type": "code",
            "label": "정책의 선택과 confidence 반환",
            "lang": "python",
            "kind": "2389 원본 코드",
            "code": "        instr = (\n            \"Choose the routing objective. Prefer 'dodge-grass' when PARTY_HP_FRAC is low or the \"\n            \"objective is a delivery/errand you shouldn't risk. Prefer 'farm-exp' when PARTY_LEVEL \"\n            \"is below LEVEL_TARGET_FOR_NEXT_GYM and HP is healthy (grind on the way). Otherwise \"\n            \"'shortest'. If GRASS_ON_THIS_MAP is false the choice barely matters — pick 'shortest'.\"\n        )\n        resp = self.client.system_one(state=state, questions={\"pol\": Choice(instructions=instr, criteria=criteria)})\n        ans = resp.answers[\"pol\"]\n        conf = float(getattr(ans, \"confidence\", 0.0) or 0.0)\n        pol = ans.choice if isinstance(ans.choice, str) and ans.choice in criteria else \"shortest\"\n        return pol, conf",
            "start": 392,
            "file": "src/pokemon_agent/agent/typesafe_reasoner.py",
            "source": "https://github.com/2389-research/jev-plays-pokemon/blob/65390784134329682fd9eadb4b9ed5ccb7bad526/src/pokemon_agent/agent/typesafe_reasoner.py#L392-L402"
          },
          {
            "type": "p",
            "text": "정책을 바꿨다고 경로 탐색 알고리즘까지 새로 만들 필요는 없다. 통과하는 칸마다 부과하는 비용을 바꾸면 된다. 공개 구현의 tile_cost는 shortest에서 모든 칸에 1을, dodge-grass에서 풀밭에 12와 일반 길에 1을, farm-exp에서 풀밭에 1과 일반 길에 4를 부과한다. 그러면 같은 지도에서도 비용이 가장 작은 길이 달라진다. 비용이 서로 다를 수 있으므로 Dijkstra 탐색을 사용하며, 모든 비용이 1인 경우는 BFS의 최단 거리와 같은 기준이 된다.",
            "links": [
              {
                "text": "tile_cost",
                "url": "https://github.com/2389-research/jev-plays-pokemon/blob/65390784134329682fd9eadb4b9ed5ccb7bad526/src/pokemon_agent/agent/routing.py#L24-L30"
              }
            ]
          },
          {
            "type": "code",
            "label": "동일한 지도에서 경로 선호를 바꾸는 tile_cost",
            "lang": "python",
            "kind": "2389 원본 코드",
            "code": "def tile_cost(cls: str, policy: str) -> float:\n    \"\"\"Per-tile step cost for a terrain class under a routing policy.\"\"\"\n    if policy == \"dodge-grass\":\n        return 12.0 if cls == \"grass\" else 1.0\n    if policy == \"farm-exp\":\n        return 1.0 if cls == \"grass\" else 4.0   # make grass the cheap tile to prefer\n    return 1.0                                    # shortest: uniform",
            "start": 24,
            "file": "src/pokemon_agent/agent/routing.py",
            "source": "https://github.com/2389-research/jev-plays-pokemon/blob/65390784134329682fd9eadb4b9ed5ccb7bad526/src/pokemon_agent/agent/routing.py#L24-L30"
          },
          {
            "type": "p",
            "text": "A 경로에 풀밭 3칸과 일반 길 3칸이 있고 B 경로에 일반 길 9칸이 있다고 하자. shortest에서는 A가 6, B가 9이므로 A가 짧다. dodge-grass에서는 A의 풀밭 비용이 커져 39가 되므로 비용 9의 B가 선택된다. farm-exp에서는 A가 15, B가 36이 되어 A가 다시 유리해진다. 계산 방법을 바꾸지 않고도 정책의 뜻을 경로에 반영할 수 있다.",
            "links": []
          },
          {
            "type": "code",
            "label": "두 경로를 세 정책으로 비교하기",
            "lang": "python",
            "kind": "계산 예제",
            "code": "routes = {\"A\": {\"grass\": 3, \"floor\": 3}, \"B\": {\"grass\": 0, \"floor\": 9}}\ncosts = {\"shortest\": (1, 1), \"dodge-grass\": (12, 1), \"farm-exp\": (1, 4)}\nfor policy, (grass, floor) in costs.items():\n    total = {name: r[\"grass\"] * grass + r[\"floor\"] * floor\n             for name, r in routes.items()}\n    print(policy, total, min(total, key=total.get))"
          },
          {
            "type": "p",
            "text": "다만 풀밭을 선호하는 한 구간의 경로와 목표 레벨까지 훈련하는 전체 행동은 범위가 다르다. 훈련하려면 풀밭을 오가는 이동을 반복하고 경험치를 확인하며, 충분히 성장했을 때 그만두어야 한다. 원문이 설명한 훈련 플레이에는 이 반복이 포함된다. tile_cost는 그중 각 이동 구간의 선호를 정한다. 정책 이름 하나를 보더라도 경로 비용, 이동 반복, 훈련 종료 중 어디까지 코드가 담당하는지 구분해야 한다.",
            "links": []
          }
        ]
      },
      {
        "id": "context",
        "title": "지도를 더 많이 주면 판단도 좋아질까?",
        "blocks": [
          {
            "type": "p",
            "text": "다음 방향 하나를 정하는 데 전체 게임 지도가 필요할까? 정보가 많으면 유리해 보이지만, 질문과 무관한 내용도 처리해야 한다. 저자는 이동할 때마다 방향을 묻던 버전에서 중간 계획기가 받는 전체 상태와 그 방향 선택에 필요한 최소 상태를 비교했다. 다른 질문으로 바꾸기 전에, 같은 판단에 주는 문맥의 크기를 먼저 시험한 것이다.",
            "links": []
          },
          {
            "type": "table",
            "headers": [
              "입력",
              "입력 토큰",
              "BFS와의 일치율",
              "confidence"
            ],
            "rows": [
              [
                "전체 게임 상태",
                "1,324",
                "94%",
                "0.82"
              ],
              [
                "판단에 필요한 최소 상태",
                "601",
                "94%",
                "0.87"
              ]
            ]
          },
          {
            "type": "p",
            "text": "두 입력의 BFS 일치율은 모두 94%였지만 토큰 수는 1,324와 601이었다. 전체 상태가 약 2.2배를 사용했고, 최소 상태에서는 723토큰, 약 54.6%를 줄일 수 있었다. confidence도 0.82에서 0.87로 조금 높아졌다. 이 결과는 해당 방향 선택에 지도 정보를 더 주어도 선택이 개선되지 않았음을 보여 준다. 필요한 사실까지 지워도 좋다는 뜻은 아니므로, 입력을 줄일 때는 무엇이 답을 바꿀 수 있는지를 기준으로 삼아야 한다.",
            "links": [
              {
                "text": "confidence",
                "url": "https://docs.typesafe.ai/confidence"
              }
            ]
          },
          {
            "type": "p",
            "text": "정책 선택으로 옮긴 뒤에도 같은 원리를 적용했다. 중간 계획기가 이미 목적지를 정했으므로 Jev가 지도 전체에서 목적지를 다시 찾을 필요는 적다. 대신 파티 체력, 목표 대비 레벨, 주변 풀밭처럼 정책을 바꾸는 정보가 남는다. 이 최종 호출은 423토큰을 사용했다. 앞의 601토큰은 방향 선택의 A/B 실험이고 423토큰은 정책 선택의 요청이므로, 두 숫자의 차이에는 문맥 축소와 질문 변경이 함께 반영돼 있다.",
            "links": []
          },
          {
            "type": "exercise",
            "question": "지도를 줄여서 보내더라도 주변에 풀밭이 있는지는 왜 알려 주어야 할까?",
            "answer": "풀밭이 없다면 회피와 훈련이라는 두 정책이 이번 이동에 영향을 주지 못하기 때문이다. 체력이 낮다는 사실만으로 dodge-grass를 고르도록 만들면 실행 가능한 차이와 무관한 판단을 하게 된다. 입력을 줄인다는 것은 짧게 만드는 작업이 아니라 선택을 바꾸는 변수를 남기는 작업이다."
          }
        ]
      },
      {
        "id": "cost",
        "title": "159ms가 전체 플레이 속도를 뜻하지는 않는다",
        "blocks": [
          {
            "type": "p",
            "text": "작은 판단을 분리했을 때의 이득을 보려면 한 번의 비용과 호출 빈도를 함께 계산해야 한다. 정책 선택 요청은 약 423토큰을 사용했고 응답 중앙값은 159ms, 관측 범위는 146~540ms였다. 원문 당시 입력 요금인 백만 토큰당 0.042달러를 적용하면 한 번에 약 0.0000178달러, 반올림하면 0.00002달러다. 출력 토큰에는 요금이 없었다.",
            "links": [
              {
                "text": "정책 선택 요청",
                "url": "https://2389.ai/research/writing/jev-plays-pokemon/"
              }
            ]
          },
          {
            "type": "code",
            "label": "원문 수치로 호출 비용과 빈도 계산하기",
            "lang": "python",
            "kind": "계산 예제",
            "code": "tokens = 423\nprice_per_million = 0.042\ncost_per_call = tokens * price_per_million / 1_000_000\ncalls_per_minute = 25 / 20\nprint(f\"per call: ${cost_per_call:.8f}\")\nprint(f\"per hour: ${cost_per_call * calls_per_minute * 60:.6f}\")\nprint(f\"10 calls/s: ${cost_per_call * 10 * 3600:.4f}/hour\")"
          },
          {
            "type": "p",
            "text": "이 판단은 이동할 때마다 실행되지 않았다. 게임에서는 분당 약 25번 이동했고 Jev는 약 20번 이동할 때마다 호출됐다. 따라서 분당 1.25회이며 원문의 표현으로는 약 1.3회다. 이 빈도에서 비용은 시간당 약 0.0013~0.0014달러다. 같은 423토큰 요청을 초당 10번 보낸다고 가정하면 약 0.64달러/시간이 된다. 이는 포켓몬 요청의 호출 빈도만 바꾼 계산이며 DOOM의 실제 요청 비용을 뜻하지 않는다.",
            "links": []
          },
          {
            "type": "p",
            "text": "비교 대상으로 제시한 중간 계층 생성 모델은 62토큰의 작은 프롬프트에서도 응답 중앙값이 418ms였고 출력 토큰 요금도 있었다. 여기서는 입력과 판단의 크기가 서로 다르다. 따라서 418을 159로 나눈 값이 어떤 작업에도 적용되는 속도비는 아니다. 확인할 수 있는 변화는 자주 반복할 수 있는 정책 판단을 큰 생성 모델의 호출에서 떼어 낼 수 있었다는 점이다.",
            "links": []
          },
          {
            "type": "p",
            "text": "그런데 전체 플레이에서는 한 번 이동하는 데 2.38초가 걸렸다. 저자는 이 시간의 대부분을 중간 계층 모델 호출이 차지한다고 설명한다. 20번 이동할 때 한 번 실행되는 159ms짜리 판단을 줄여도, 이동할 때마다 기다리는 시간이 크게 줄지는 않는다. 한 단계의 빠르기를 시스템 전체의 빠르기로 읽지 않으려면, 각 단계의 지연과 실행 횟수를 함께 놓아야 한다.",
            "links": []
          }
        ]
      },
      {
        "id": "uncertainty",
        "title": "확률은 판단 문제를 점검하는 단서가 된다",
        "blocks": [
          {
            "type": "p",
            "text": "모델이 훈련을 선택했다는 사실만 기록하면, 다른 정책과 거의 동률이었는지 확실한 선택이었는지 알 수 없다. 원문이 강조한 calibrated probabilities는 이런 차이를 수치로 다룬다. 예를 들어 80% 정도로 예측한 사례들을 모았을 때 실제 정답 비율도 비슷해야 확률이 잘 보정됐다고 할 수 있다. Jev는 비생성 System One 모델로 소개되지만, 개별 답의 높은 confidence만으로 이 집단적 성질을 확인할 수는 없다.",
            "links": [
              {
                "text": "calibrated probabilities",
                "url": "https://docs.typesafe.ai/introduction/machine-learning-primer"
              },
              {
                "text": "confidence",
                "url": "https://docs.typesafe.ai/confidence"
              }
            ]
          },
          {
            "type": "p",
            "text": "애매한 답이 반복되면 모델의 능력만 의심하기 전에 질문에 필요한 기준이 있는지 점검해야 한다. 현재 레벨만 알려 주고 다음 체육관의 목표 레벨을 주지 않았다면, 더 훈련해야 하는지 결정할 기준이 빠진다. 반대로 후보 설명이 겹치면 같은 상태에 두 정책이 모두 맞을 수 있다. 저자는 confidence를 이런 질문 구성의 문제를 찾는 단서로 사용했다.",
            "links": []
          },
          {
            "type": "p",
            "text": "원문은 정책 사이에서 망설일 때 중간 계층 모델에 판단을 넘기는 방식을 다음 단계로 제안한다. 빠른 모델이 대부분의 판단을 처리하되 어려운 경우에는 더 넓은 문맥을 가진 모델을 부르는 구성이다. 이는 이미 평가를 마친 성공 결과가 아니라 앞으로 시험할 설계다. 확률을 단지 화면에 표시하는 데서 그치지 않고 다음 호출 경로를 정하는 데 쓰려는 것이다.",
            "links": []
          },
          {
            "type": "p",
            "text": "그 경로를 만들려면 어느 수치에서 판단을 넘길지 정해야 한다. 낮은 confidence였지만 정책은 맞았던 장면과, 높은 confidence로 틀린 정책을 고른 장면을 함께 기록해야 기준을 조정할 수 있다. 정책을 너무 자주 바꾸면 이동이 흔들리고, 너무 늦게 바꾸면 위험한 풀밭에 이미 들어간다. 후속 실험에서는 선택의 적절성에 정책 유지 시간, 상위 모델 호출 횟수, 퀘스트 진행도를 함께 대응시킬 필요가 있다.",
            "links": []
          },
          {
            "type": "source",
            "label": "2389 원문: 실험 과정·비용·다음 단계",
            "url": "https://2389.ai/research/writing/jev-plays-pokemon/"
          }
        ]
      },
      {
        "id": "completion",
        "title": "B. 더 넓은 선택을 맡겨 게임을 끝내기",
        "blocks": [
          {
            "type": "p",
            "text": "이동 경로의 성격만 골라서는 게임 전체를 끝낼 수 없다. 체육관 도전 전에 훈련할지, 체력이 떨어지면 회복할지, 전투에서 어떤 기술을 쓸지도 정해야 한다. Mathiesen의 구현은 Jev의 선택 범위를 이런 활동까지 넓혔다. 포획 대상, PC에서 교체할 파티, 대화할 NPC, 구매할 물건, YES/NO 메뉴와 새 기술을 배우거나 잊는 선택도 같은 방식으로 다룬다.",
            "links": [
              {
                "text": "Mathiesen의 구현",
                "url": "https://github.com/christianmat/jev-pokemon"
              }
            ]
          },
          {
            "type": "p",
            "text": "이 선택들이 실제 게임에서 유효하려면 먼저 현재 가능한 행동을 알아야 한다. Node 기반 Game Boy 에뮬레이터의 RAM에서 상태를 얻고, 코드가 합법적인 후보와 상성, 예상 피해량, 목표까지의 거리를 구성한다. Jev가 후보를 고르면 A* 경로 탐색과 메뉴 조작이 이를 버튼 입력으로 바꾼다. RAM은 읽기만 하며 진행 상태를 직접 써서 바꾸지 않는다. 다음 목표는 스토리 마일스톤이 제공하고 달성 여부는 게임 이벤트 플래그로 확인한다.",
            "links": []
          },
          {
            "type": "diagram",
            "title": "목표와 후보를 판단하고, 버튼으로 실행하기",
            "nodes": [
              {
                "id": "n0",
                "x": 20,
                "y": 55,
                "kind": "world",
                "title": "게임 RAM",
                "lines": [
                  "지도 · 파티 · 전투 · 대화"
                ]
              },
              {
                "id": "n1",
                "x": 250,
                "y": 55,
                "kind": "code",
                "title": "합법 행동과 정보",
                "lines": [
                  "상성 · 피해량 · 목표 거리"
                ]
              },
              {
                "id": "n2",
                "x": 480,
                "y": 55,
                "kind": "model",
                "title": "Jev의 선택",
                "lines": [
                  "이동 · 회복 · 훈련 · 전투"
                ]
              },
              {
                "id": "n3",
                "x": 710,
                "y": 55,
                "kind": "code",
                "title": "조작 실행",
                "lines": [
                  "A* 경로 · 메뉴 · 버튼"
                ]
              }
            ],
            "caption": "README의 실행 구조. 스토리 마일스톤이 다음 목표를 제공하고, 게임 이벤트 플래그로 진행을 읽는다.",
            "extra": null
          },
          {
            "type": "code",
            "label": "B의 choose: 행동 이름을 실행 코드에 반환",
            "lang": "typescript",
            "kind": "원본 코드",
            "code": "  async choose(purpose: string, state: JevInput, instructions: string, options: Record<string, string>): Promise<string> {\n    const keys = Object.keys(options);\n    if (keys.length === 1) return keys[0];\n    const { picked } = await this.ask(purpose, state, { decision: { type: 'choice', instructions, criteria: options } });\n    return picked.decision as string;\n  }",
            "start": 108,
            "file": "src/jev/client.ts",
            "source": "https://github.com/christianmat/jev-pokemon/blob/20cdcb846ff995383fe3da1d48ad5eac6d8d1abd/src/jev/client.ts#L108-L113"
          },
          {
            "type": "p",
            "text": "후보가 하나뿐이면 비교할 일이 없으므로 이 함수는 모델을 호출하지 않는다. 후보가 둘 이상일 때만 state, instructions, criteria를 보내 선택된 키를 받는다. API의 모양은 A와 비슷하지만 후보가 가리키는 일은 다르다. A의 farm-exp가 경로 비용을 정하는 정책이었다면, B의 후보는 현재 상황에서 수행할 행동이나 활동 목표다.",
            "links": []
          },
          {
            "type": "code",
            "label": "B의 상황 분기: 전투·대화·탐험",
            "lang": "typescript",
            "kind": "원본 코드",
            "code": "  async step() {\n    const { ctx } = this;\n    const mode = this.mode();\n    this.track();\n    switch (mode) {\n      case 'battle': await battleStep(ctx); break;\n      case 'dialog': await dialogStep(ctx); break;\n      case 'overworld': this.unstick(); await overworldStep(ctx, this); break;\n      case 'busy': ctx.emu.wait(8); break;\n      case 'boot': tap(ctx, 'A', 20); break;\n    }\n  }",
            "start": 37,
            "file": "src/agent/agent.ts",
            "source": "https://github.com/christianmat/jev-pokemon/blob/20cdcb846ff995383fe3da1d48ad5eac6d8d1abd/src/agent/agent.ts#L37-L48"
          },
          {
            "type": "p",
            "text": "전투 화면에서 다음 도시를 고르거나 대화 창이 열린 상태에서 전투 기술을 고르게 해서는 조작이 진행되지 않는다. 그래서 먼저 전투·대화·탐험을 구분한 뒤 그 상황에 맞는 후보를 만든다. 이름 짓기에서는 A~Z와 DONE을 후보로 두어 글자를 하나씩 고른다. 자유로운 문자열을 생성하지 않아도 이름을 만들 수 있지만, 글자마다 판단과 메뉴 조작을 반복해야 한다는 비용이 따른다.",
            "links": []
          },
          {
            "type": "p",
            "text": "선택이 형식에 맞아도 같은 실패를 반복할 수 있다. 이미 해 봤는데 상태가 달라지지 않은 행동을 계속 고르는 경우가 그렇다. 이 구현은 그런 후보에 표시를 붙여 다른 선택을 유도하고, 반복이 계속되면 확률 분포에서 대안을 뽑는다. 마지막 수단은 최근 마일스톤의 저장 상태를 다시 불러오는 것이다. 탐험 중에는 이전 답의 캐시도 건너뛴다. 막힌 상황에서 같은 답을 빠르게 재사용하는 것은 탈출에 도움이 되지 않기 때문이다.",
            "links": []
          },
          {
            "type": "code",
            "label": "B의 반복 탈출: 탐험 상황에서 확률 샘플링",
            "lang": "typescript",
            "kind": "원본 코드",
            "code": "    const picked: Record<string, string | number> = {};\n    for (const [id, a] of Object.entries(res.answers)) {\n      if (a.type === 'choice') picked[id] = explore && a.probabilities ? sample(flatten(a.probabilities)) : a.choice;\n      else if (a.type === 'boolean') picked[id] = a.probability;\n      else picked[id] = a.score;\n    }",
            "start": 92,
            "file": "src/jev/client.ts",
            "source": "https://github.com/christianmat/jev-pokemon/blob/20cdcb846ff995383fe3da1d48ad5eac6d8d1abd/src/jev/client.ts#L92-L97"
          },
          {
            "type": "p",
            "text": "반복 감지에는 현재 목적도 필요하다. 훈련이나 포획 중에는 같은 풀밭에 오래 머무르는 것이 정상일 수 있다. 이를 위치 변화만으로 판단하면 필요한 훈련까지 중단시킨다. 그래서 훈련·포획 목표에서는 경험치 증가도 진행으로 인정한다. A에서 목적에 따라 좋은 길이 달라졌듯이, B에서도 목적에 따라 진전의 의미가 달라진다.",
            "links": []
          }
        ]
      },
      {
        "id": "comparison",
        "title": "두 결과를 함께 놓고 무엇을 비교할 것인가",
        "blocks": [
          {
            "type": "p",
            "text": "끝까지 진행하는 능력은 한 번의 선택만으로 드러나지 않는다. B의 2026년 9월 25~26일 기록은 실패와 재도전을 포함한 전체 실행을 남겼으며, 주요 수치는 다음과 같다."
          },
          {
            "type": "table",
            "headers": [
              "B의 2026.09.25~26 완주 기록",
              "값"
            ],
            "rows": [
              [
                "플레이 시간 / 판단 횟수",
                "37시간 40분 / 16,150회"
              ],
              [
                "입력 토큰 / Jev 비용",
                "약 3,920만 / 약 1.65달러"
              ],
              [
                "판단 시간 중앙값",
                "약 0.4초"
              ],
              [
                "전멸 / 사천왕 도전",
                "16회 중 14회가 사천왕 / 15회 도전"
              ],
              [
                "최종 파티",
                "Charizard 83, Graveler 62, Nidoqueen 45, Beedrill 44, Haunter 39, Primeape 29"
              ]
            ]
          },
          {
            "type": "p",
            "text": "B의 완주는 여러 번 실패한 뒤 회복하고 훈련해 다시 도전한 누적 결과다. 아래 기록에는 그 장기 실행의 시간과 비용이 들어 있다. A의 159ms·423토큰은 경로 정책 하나의 판단이고, B의 약 0.4초·총 3,920만 토큰은 훨씬 다양한 상황과 후보를 처리한 기록이다. 요청 단위와 총량을 맞추지 않은 채 두 숫자를 비교하면 역할의 차이를 모델 성능의 차이로 오해하게 된다.",
            "links": []
          },
          {
            "type": "table",
            "headers": [
              "설계 질문",
              "A의 답",
              "B의 답"
            ],
            "rows": [
              [
                "모델 앞에서 코드가 하는 일",
                "지도 해독, 정책별 경로 계산",
                "상태 해독, 합법 후보와 관련 사실 구성"
              ],
              [
                "상위 목표를 제공하는 방법",
                "생성 모델의 퀘스트와 완료 조건",
                "스토리 마일스톤과 현재 활동"
              ],
              [
                "확률의 쓰임",
                "불확실한 정책을 상위 모델에 넘기는 방향을 제안",
                "탐험의 반복을 벗어나기 위한 대안 샘플링"
              ],
              [
                "게임 조작",
                "가중 경로 탐색과 제어기",
                "A*·메뉴·버튼 조작"
              ],
              [
                "주요 관찰",
                "판단 단위를 올리고 입력을 줄였을 때 유용해짐",
                "실패·회복·훈련을 이어 장기 과제를 완료"
              ]
            ]
          },
          {
            "type": "p",
            "text": "두 구현은 후보를 설계하는 위치가 다르다. A는 이미 코드로 풀 수 있는 한 칸의 이동에서 벗어나 경로의 기준을 묻고, B는 게임의 각 상황을 실행 가능한 후보로 나눈 뒤 이를 길게 이어 간다. 후보에 필요한 행동이 없으면 모델이 빨라도 그 행동을 할 수 없다. 반대로 지나치게 작은 선택을 매번 묻는다면 기존 알고리즘의 계산을 되풀이하게 된다. 너무 큰 목표를 한 번에 맡기면 완료와 실패를 추적하기 어렵다. 두 사례는 판단의 크기를 정하는 일이 모델 선택만큼 중요함을 보여 준다.",
            "links": []
          },
          {
            "type": "exercise",
            "question": "체력은 낮고 레벨도 부족하다. 풀밭을 피하면 체육관 준비가 늦어지고, 훈련하면 전멸할 수 있다. 어느 계획을 바꾸어야 이 문제를 풀 수 있을까?",
            "answer": "현재 목적지까지 어떻게 갈지만 고르는 Jev에는 dodge-grass가 합리적일 수 있다. 하지만 더 근본적인 선택은 목적지를 회복 장소로 바꿀지 여부이다. 이는 상위·중간 계획의 몫이다. 회복한 뒤 훈련으로 돌아오도록 목표를 바꾸면 충돌을 풀 수 있다. 하위 정책 선택만으로 상위 목표의 잘못을 항상 해결할 수는 없다."
          },
          {
            "type": "source",
            "label": "B의 완주 결과와 전체 구현",
            "url": "https://github.com/christianmat/jev-pokemon/blob/main/README.md"
          }
        ]
      }
    ],
    "minutes": 23,
    "leadLinks": [
      {
        "text": "2389 Research",
        "url": "https://2389.ai/research/writing/jev-plays-pokemon/"
      },
      {
        "text": "Christian Mathiesen",
        "url": "https://github.com/christianmat/jev-pokemon"
      }
    ]
  },
  "pacman": {
    "minutes": 12,
    "title": "JevMan: 팩맨의 다음 방향을 결정하는 방법",
    "lead": "팩맨이 갈림길에 도착했는데 AI의 답이 아직 오지 않았다. 그대로 가면 원하지 않은 길로 들어가고, 멈춰 기다리면 플레이가 끊긴다. 그런데 복도에 들어선 순간 다음 갈림길이 어디인지는 이미 알 수 있다. 그렇다면 도착할 때까지 기다리지 말고 이동하는 동안 물어보면 어떨까? JevMan은 이 시간을 이용한다. 이 글에서는 질문을 일찍 보내 얻는 이점과, 그사이 달라진 상황을 어떻게 다루는지 설명한다.",
    "origin": {
      "label": "Opper · JevMan",
      "url": "https://github.com/opper-ai/jevman-benchmark/blob/main/README.md"
    },
    "sections": [
      {
        "id": "ahead",
        "title": "질문을 미리 보내는 이유",
        "blocks": [
          {
            "type": "p",
            "text": "갈림길에서는 여러 방향 가운데 하나를 골라야 하지만, 그곳까지 이어진 복도에서는 계속 앞으로 가면 되는 경우가 많다. JevMan은 이 구간을 판단 대기 시간으로 활용한다. 다음 갈림길의 후보를 미리 보내고 팩맨은 이동을 계속한다. 최대 세 요청을 동시에 처리할 수 있으므로 한 요청이 끝날 때까지 모든 판단을 멈출 필요도 없다. 응답 자체가 빨라지는 것은 아니지만, 이동과 기다림을 겹쳐 실제로 멈추는 시간을 줄일 수 있다.",
            "links": [
              {
                "text": "최대 세 요청",
                "url": "https://github.com/opper-ai/jevman-benchmark#how-decisions-work"
              },
              {
                "text": "JevMan",
                "url": "https://github.com/opper-ai/jevman-benchmark"
              }
            ]
          },
          {
            "type": "diagram",
            "title": "다음 갈림길을 미리 판단하기",
            "nodes": [
              {
                "id": "n0",
                "x": 20,
                "y": 55,
                "kind": "world",
                "title": "복도로 진입",
                "lines": [
                  "다음 갈림길이 정해짐"
                ]
              },
              {
                "id": "n1",
                "x": 250,
                "y": 55,
                "kind": "code",
                "title": "경로별 특징",
                "lines": [
                  "먹이 · 유령 · 도착 시간"
                ]
              },
              {
                "id": "n2",
                "x": 480,
                "y": 55,
                "kind": "model",
                "title": "방향 Choice",
                "lines": [
                  "다음 갈림길의 방향"
                ]
              },
              {
                "id": "n3",
                "x": 710,
                "y": 55,
                "kind": "code",
                "title": "이동과 답 적용",
                "lines": [
                  "도착 전 요청 · 도착 후 선택"
                ]
              }
            ],
            "caption": "README의 How decisions work: 도착했는데 응답이 없으면 기다리고, 2초가 지나거나 오류가 나면 greedy 규칙을 적용한다.",
            "extra": null
          },
          {
            "type": "p",
            "text": "미리 물어봤는데도 답보다 팩맨이 먼저 도착할 수 있다. 그때는 갈림길에서 기다리며, 2초가 지나거나 오류가 나면 greedy 규칙으로 방향을 고른다. 여기서 greedy는 현재 보이는 상황에서 유리한 방향을 곧바로 택하는 간단한 규칙이다. 모델을 연결하려면 질문과 응답뿐 아니라, 답이 제때 오지 않았을 때 게임을 어떻게 계속할지도 정해야 한다.",
            "links": []
          }
        ]
      },
      {
        "id": "timing-example",
        "title": "갈림길까지 남은 시간을 계산하면",
        "blocks": [
          {
            "type": "p",
            "text": "다음 갈림길까지 12칸이 남았고 팩맨이 초당 6칸을 움직인다고 하자. 도착까지 2초가 있으므로 0.3초 걸리는 판단은 이동 중에 끝난다. 갈림길에 도착해서 물었다면 그 0.3초 동안 멈춰야 한다. 같은 모델과 같은 질문을 사용해도 요청 시점을 앞당기면 화면에서 느끼는 지연이 달라지는 이유다.",
            "links": []
          },
          {
            "type": "code",
            "label": "이동 시간과 응답 시간의 겹침",
            "lang": "python",
            "kind": "계산 예제",
            "code": "distance = 12\nspeed = 6\ntravel_time = distance / speed\nfor latency in [0.3, 2.4]:\n    wait_at_junction = max(0, latency - travel_time)\n    print(latency, round(wait_at_junction, 3))"
          },
          {
            "type": "p",
            "text": "그러나 일찍 보낸 요청에는 일찍 관측한 상태가 들어 있다. 답이 오는 동안 유령이 복도로 들어오면, 미리 고른 다음 방향이 적절해도 갈림길까지 가는 길 자체가 위험해질 수 있다. 그래서 복도 중간의 위험에는 pacman_escape라는 별도 질문을 둔다. “갈림길에서 어느 쪽으로 갈 것인가”와 “지금 계속 가도 되는가”를 나누는 것이다.",
            "links": []
          },
          {
            "type": "p",
            "text": "선행 요청으로도 덮지 못한 지연에는 앞서 본 대기와 대체 규칙이 적용된다. 원본은 갈림길 도착 후 응답을 기다리다가 2초가 지나거나 오류가 나면 greedy를 사용한다. 최대 세 요청을 동시에 보낼 때는 어느 시점, 어느 갈림길에 대해 받은 답인지도 구분해야 한다. 요청 수를 늘리는 일과 현재 상황에 맞는 답을 사용하는 일은 함께 해결해야 한다.",
            "links": [
              {
                "text": "최대 세 요청",
                "url": "https://github.com/opper-ai/jevman-benchmark#how-decisions-work"
              }
            ]
          }
        ]
      },
      {
        "id": "features",
        "title": "좌표만으로는 부족한 이유",
        "blocks": [
          {
            "type": "p",
            "text": "유령이 가깝다고 반드시 그쪽 길이 위험한 것은 아니다. 바로 옆에서도 멀어지는 중일 수 있다. 반대로 아직 멀리 있는 유령이 팩맨보다 먼저 출구에 도착하면 복도에 갇힐 수 있다. 그래서 이 구현은 좌표만 전달하지 않고, 방향별 먹이와 유령의 접근 여부, 갈림길에 도착하는 데 걸리는 시간을 계산한다. 모델이 비교해야 하는 것은 현재 거리보다 그 길로 갔을 때 벌어질 일이다.",
            "links": []
          },
          {
            "type": "code",
            "label": "도달 시간 비교로 TRAP을 표시하는 실제 코드",
            "lang": "typescript",
            "kind": "원본 코드",
            "code": "        if (f.dangerNearby >= 2) parts.push(`${f.dangerNearby} dangerous ghosts within ${NEARBY_STEPS} steps`);\n        if (f.dangerInCorridor.length) parts.push(`DANGER: ${names(f.dangerInCorridor)} in this corridor`);\n        if (f.junctionGhost && isTrap(f)) {\n          parts.push(`TRAP: ${ACTOR_NAMES[f.junctionGhost.id]} can reach the next junction in ${plural(f.junctionGhost.steps, 'step')}, you need ${f.junctionSteps}`);\n        } else if (f.junctionGhost) {\n          parts.push(`you reach the next junction in ${plural(f.junctionSteps, 'step')}, ${plural(f.junctionGhost.steps - f.junctionSteps, 'step')} before any ghost`);",
            "start": 179,
            "source": "https://github.com/opper-ai/jevman-benchmark/blob/465dc0fa40e4db42bda84a4dd091433c8f28bbb7/src/brain.ts#L179-L184",
            "file": "src/brain.ts"
          },
          {
            "type": "p",
            "text": "이 코드는 팩맨과 유령 가운데 누가 갈림길에 먼저 도착할지 비교한다. 팩맨이 이동해야 할 칸 수가 junctionSteps이고, 유령 쪽의 값이 steps다. 유령이 먼저 길을 막는 상황이면 후보 설명에 TRAP을 붙인다. 모델은 좌표들로 같은 계산을 되풀이하는 대신, 막힐 수 있는 길이라는 정보를 다른 경로의 이점과 비교할 수 있다.",
            "links": []
          },
          {
            "type": "p",
            "text": "과일에서도 거리만으로는 행동을 충분히 설명하지 못했다. 소스 주석에 따르면 거리 정보만 주었을 때 Jev는 과일을 놓치는 경우가 많았다. 이후 코드는 제시간에 안전하게 도달할 수 있는 길을 FRUIT로 표시하고, 과일의 점수를 먹이 몇 개와 맞먹는지도 알려 준다. 어디에 있는지에 더해 얻을 수 있는지와 얼마나 가치가 있는지를 설명한 것이다.",
            "links": []
          },
          {
            "type": "p",
            "text": "팩맨은 갈림길까지 8칸, 유령은 같은 갈림길까지 3칸 남았다고 하자. 속도가 같다면 유령이 먼저 도착한다. 현재 둘 사이의 거리만 보고 안전하다고 판단하면 출구에서 막힐 수 있다. 반대로 가까운 유령이 다른 쪽으로 가고 있다면 당장 같은 위험은 아니다. TRAP과 접근 여부는 이런 시간 관계를 후보 설명에 담기 위한 표시다.",
            "links": []
          },
          {
            "type": "p",
            "text": "이 정보는 Jev가 화면을 보고 직접 알아낸 것이 아니다. 미로와 이동 규칙을 아는 게임 코드가 계산했다. Jev에 남겨진 일은 먹이를 얻는 이익, 유령을 만날 위험, 과일에 도달할 가능성을 함께 고려해 길을 고르는 것이다. 따라서 결과를 해석할 때는 모델의 이름뿐 아니라 앞에서 어떤 정보를 계산해 주었는지도 함께 봐야 한다.",
            "links": []
          }
        ]
      },
      {
        "id": "questions",
        "title": "누구의 행동을 결정하는가",
        "blocks": [
          {
            "type": "p",
            "text": "게임에 모델을 붙였다는 설명만으로는 누구의 행동을 고르는지 알 수 없다. 팩맨과 유령은 같은 장면에서도 다른 방향을 원한다. 다음 요청 빌더는 캐릭터마다 질문을 따로 만드는 부분이다."
          },
          {
            "type": "code",
            "label": "캐릭터별 Choice 질문을 만드는 요청 빌더",
            "lang": "typescript",
            "kind": "원본 코드",
            "code": "export function buildRequest(state: GameState, batch: PendingQuestion[]): SystemOneRequest {\n  return {\n    state: summarizeState(state),\n    questions: Object.fromEntries(\n      batch.map(({ point, features }) => [\n        questionName(point),\n        { type: 'choice', instructions: instructionsFor(state, point, features), criteria: criteriaFor(state, point, features) },\n      ]),\n    ),\n  };\n}",
            "start": 203,
            "source": "https://github.com/opper-ai/jevman-benchmark/blob/465dc0fa40e4db42bda84a4dd091433c8f28bbb7/src/brain.ts#L203-L213",
            "file": "src/brain.ts"
          },
          {
            "type": "p",
            "text": "같은 미로를 보고 있어도 팩맨과 유령이 해야 할 일은 반대다. 팩맨은 먹이를 모으며 유령을 피하고, 유령은 팩맨을 쫓는다. 파워 펠릿이 활성화되면 유령도 도망쳐야 한다. 위 buildRequest는 공통 state에 캐릭터별 질문을 묶으며, instructionsFor는 현재 역할에 맞는 목적을 정한다. 상태를 공유한다고 지시까지 같아지는 것은 아니다.",
            "links": [
              {
                "text": "buildRequest",
                "url": "https://github.com/opper-ai/jevman-benchmark/blob/465dc0fa40e4db42bda84a4dd091433c8f28bbb7/src/brain.ts#L203-L213"
              }
            ]
          },
          {
            "type": "p",
            "text": "복도에서 뒤돌아설지를 판단할 때도 별도의 목적이 필요하다. 미리 정한 갈림길의 방향은 그곳에 무사히 도착한다는 전제 아래 유효하다. 중간에 위험이 생기면 먼저 그 전제를 다시 확인해야 한다. pacman_escape는 계속 갈지 즉시 돌아설지를 묻고, 일반 이동 질문은 다음 갈림길의 방향을 고른다.",
            "links": []
          },
          {
            "type": "code",
            "label": "일반 이동과 복도 탈출 질문의 이름을 나누는 코드",
            "lang": "typescript",
            "kind": "원본 코드",
            "code": "/** Name of a point's question in the System One request (Pac-Man can have two open at once). */\nexport const questionName = (point: DecisionPoint): string => (point.escape ? `${point.actor}_escape` : point.actor);",
            "start": 78,
            "source": "https://github.com/opper-ai/jevman-benchmark/blob/465dc0fa40e4db42bda84a4dd091433c8f28bbb7/src/brain.ts#L78-L79",
            "file": "src/brain.ts"
          },
          {
            "type": "p",
            "text": "여러 질문을 한 요청에 넣는 것은 통신과 처리를 묶는 방식이다. 팩맨과 유령의 목표까지 하나로 합치는 방식은 아니다. 같은 state를 두고도 instructions와 criteria를 다르게 구성해야 각자의 행동을 고를 수 있다. 서로 다른 모델이 캐릭터를 맡는 모드에서는 어느 모델이 누구를 조종했는지도 따로 기록한다.",
            "links": []
          }
        ]
      },
      {
        "id": "answer",
        "title": "선택 결과와 확률의 의미",
        "blocks": [
          {
            "type": "p",
            "text": "모델이 오른쪽을 골랐더라도 그 답이 어느 갈림길의 선택인지는 실행 코드가 알아야 한다. 다음 함수는 응답을 해당 후보에 연결하고, 선택과 함께 돌려받은 확률을 꺼낸다."
          },
          {
            "type": "code",
            "label": "응답을 현재 갈림길의 방향과 연결한다",
            "lang": "typescript",
            "kind": "원본 코드",
            "code": "export function parseAnswer(answer: unknown, q: PendingQuestion): Decision | null {\n  if (!answer || typeof answer !== 'object') return null;\n  const a = answer as { type?: unknown; choice?: unknown; confidence?: unknown; probabilities?: unknown };\n  if (a.type !== 'choice' || typeof a.choice !== 'string') return null;\n  const choice = a.choice as Dir;\n  if (!q.point.options.includes(choice)) return null;\n  const raw = (a.probabilities && typeof a.probabilities === 'object' ? a.probabilities : {}) as Record<string, unknown>;\n  const probabilities: Partial<Record<Dir, number>> = {};\n  for (const d of q.point.options) if (typeof raw[d] === 'number') probabilities[d] = raw[d] as number;",
            "start": 215,
            "source": "https://github.com/opper-ai/jevman-benchmark/blob/465dc0fa40e4db42bda84a4dd091433c8f28bbb7/src/brain.ts#L215-L223",
            "file": "src/brain.ts"
          },
          {
            "type": "p",
            "text": "응답의 choice는 선택한 방향이고 probabilities는 각 방향에 부여한 확률이다. 이 분포를 갈림길에 표시하면 한 방향을 뚜렷하게 선호했는지, 여러 방향 사이에서 망설였는지 알 수 있다. 다만 오른쪽의 값이 0.8이라고 해서 그 길로 갔을 때 80% 확률로 살아남는다는 뜻은 아니다. 질문은 방향의 선택이지 앞으로의 생존 여부를 직접 예측하는 질문이기 때문이다.",
            "links": [
              {
                "text": "probabilities",
                "url": "https://github.com/opper-ai/jevman-benchmark/blob/465dc0fa40e4db42bda84a4dd091433c8f28bbb7/src/brain.ts#L215-L223"
              },
              {
                "text": "choice",
                "url": "https://github.com/opper-ai/jevman-benchmark/blob/465dc0fa40e4db42bda84a4dd091433c8f28bbb7/src/brain.ts#L215-L223"
              }
            ]
          },
          {
            "type": "p",
            "text": "위 함수는 반환된 방향이 현재 후보에 들어 있는지 확인하고 그 후보들의 확률을 가져온다. 활동 로그에는 선택과 지연 시간이 게임 사건들과 함께 남는다. 모델의 답 대신 greedy 규칙으로 움직인 경우에는 backup move로 표시한다. 따라서 같은 오른쪽 이동이라도 모델이 선택했는지, 응답을 기다리다 코드가 대신 선택했는지 구분할 수 있다.",
            "links": [
              {
                "text": "a",
                "url": "https://github.com/opper-ai/jevman-benchmark/blob/465dc0fa40e4db42bda84a4dd091433c8f28bbb7/src/brain.ts#L215-L223"
              },
              {
                "text": "d",
                "url": "https://github.com/opper-ai/jevman-benchmark/blob/465dc0fa40e4db42bda84a4dd091433c8f28bbb7/src/brain.ts#L215-L223"
              }
            ]
          },
          {
            "type": "p",
            "text": "확률이 높았는데도 죽었다면 선택 순간과 실행 순간을 함께 살펴야 한다. 당시 후보 설명이 위험을 충분히 드러내지 못했을 수도 있고, 이후 유령의 이동이나 다른 캐릭터의 판단으로 상황이 달라졌을 수도 있다. 응답 지연 때문에 적용이 늦었을 가능성도 있다. 확률 막대는 원인을 찾는 출발점이며, 최종 결과의 보증은 아니다.",
            "links": []
          }
        ]
      },
      {
        "id": "replay",
        "title": "플레이 기록으로 판단을 확인하기",
        "blocks": [
          {
            "type": "p",
            "text": "실패 원인을 찾으려면 마지막 화면뿐 아니라 그곳에 이르기까지의 선택도 필요하다. 공개 페이지에서는 Jev의 플레이 기록을 재생할 수 있고, 사람이 팩맨을 움직여 AI 유령을 상대할 수도 있다. 아래 README 명령은 그중 팩맨을 Jev가 맡고 유령은 규칙으로 움직이는 한 게임을 JSON으로 저장한다. 조종 주체가 정해진 기록을 남겨야 나중에 결과를 비교할 수 있다.",
            "links": [
              {
                "text": "공개 페이지",
                "url": "https://opper.ai/jevman-benchmark/"
              },
              {
                "text": "플레이 기록",
                "url": "https://opper.ai/jevman-benchmark/"
              },
              {
                "text": "README",
                "url": "https://github.com/opper-ai/jevman-benchmark"
              }
            ]
          },
          {
            "type": "code",
            "label": "README의 Jev 게임 기록 명령",
            "lang": "bash",
            "kind": "README 발췌",
            "code": "npm run bench -- --games 1 --pacman jev --ghosts greedy --max 120 --record public/demo/jev-demo.json",
            "source": "https://github.com/opper-ai/jevman-benchmark/blob/main/README.md",
            "file": "README.md"
          },
          {
            "type": "p",
            "text": "죽기 직전의 방향 전환만 고치면 된다고 생각하기 쉽지만, 이미 앞선 갈림길에서 탈출구 없는 복도를 택했을 수 있다. 기록에는 당시 후보와 확률이 남으므로 그 선택으로 돌아갈 수 있다. 처음부터 막힌 길을 골랐는지, 이동 중에 새 위협이 생겼는지, 늦은 응답 때문에 대체 규칙이 작동했는지를 시간 순서대로 구분할 수 있다.",
            "links": []
          },
          {
            "type": "source",
            "label": "질문 시점과 대기 처리",
            "url": "https://github.com/opper-ai/jevman-benchmark/blob/main/README.md#how-decisions-work"
          },
          {
            "type": "p",
            "text": "이 글의 대상은 Johnny Chadda의 joch/jevman에서 출발해 Opper가 확장한 jevman-benchmark다. 사람이 팩맨을 맡고 AI 유령과 겨루는 모드와, 모델이 팩맨을 맡아 고전 규칙 유령을 상대하는 벤치마크가 함께 있다. 리더보드는 후자의 조건으로 모델을 비교한다. 그러므로 “AI가 이겼다”는 결과를 말하기 전에 어느 캐릭터를 AI가 맡았는지부터 정해야 한다.",
            "links": [
              {
                "text": "jevman-benchmark",
                "url": "https://github.com/opper-ai/jevman-benchmark"
              },
              {
                "text": "Johnny Chadda",
                "url": "https://github.com/joch/jevman"
              },
              {
                "text": "joch/jevman",
                "url": "https://github.com/joch/jevman"
              },
              {
                "text": "Opper",
                "url": "https://github.com/opper-ai/jevman-benchmark"
              },
              {
                "text": "리더보드",
                "url": "https://opper.ai/jevman-benchmark/"
              }
            ]
          },
          {
            "type": "p",
            "text": "벤치마크는 생존 시간, 점수, 먹이 수, 사망뿐 아니라 호출 횟수, 대체 행동, 지연과 비용도 기록한다. 오랫동안 사용하지 않은 모델은 첫 호출이 특히 느릴 수 있어 워밍업 호출도 한다. 저장소 명령의 기본값은 모델당 8게임, 게임당 300초 제한이다. 반면 2026년 11월 11일 확인한 공개 리더보드는 모델당 100게임으로 표시한다. 기본 실행 설정과 게시된 결과의 조건을 구분해야 한다. 기록 파일을 재생해 점수를 다시 검증하는 절차도 제공한다.",
            "links": [
              {
                "text": "워밍업 호출",
                "url": "https://github.com/opper-ai/jevman-benchmark#scripts"
              }
            ]
          },
          {
            "type": "p",
            "text": "조종하는 캐릭터 수가 달라지면 같은 게임에서도 호출량이 달라진다. 원문의 운영 예시는 팩맨만 Jev가 맡을 때 초당 약 1~2회, 게임당 약 0.01달러, 연속 실행 약 0.35달러/시간이다. 유령 네 마리를 맡기면 초당 약 4회, 약 0.75달러/시간이 된다. 실습에서는 이 예시와 함께 bench가 기록한 실제 호출 수와 비용을 비교하면 어느 역할에서 호출이 늘었는지 알 수 있다.",
            "links": []
          },
          {
            "type": "exercise",
            "question": "점수가 같은 두 모델 중 하나는 backup move가 20번, 다른 하나는 0번이다. 두 모델의 판단 능력이 같다고 볼 수 있을까?",
            "answer": "첫 모델의 점수에는 응답 실패 때 대신 움직인 greedy 규칙의 기여가 섞여 있다. 점수만으로 두 모델의 판단 능력이 같다고 볼 수 없다. backup 비율, 응답 시간, 모델이 직접 선택한 장면의 결과를 함께 비교해야 한다."
          }
        ]
      }
    ],
    "refs": [
      {
        "label": "src/brain.ts",
        "url": "https://github.com/opper-ai/jevman-benchmark/blob/465dc0fa40e4db42bda84a4dd091433c8f28bbb7/src/brain.ts"
      },
      {
        "label": "server/decide.ts",
        "url": "https://github.com/opper-ai/jevman-benchmark/blob/465dc0fa40e4db42bda84a4dd091433c8f28bbb7/server/decide.ts"
      }
    ],
    "leadLinks": [
      {
        "text": "JevMan",
        "url": "https://github.com/opper-ai/jevman-benchmark"
      }
    ]
  },
  "tetris": {
    "minutes": 12,
    "title": "Jev 테트리스: 좋은 수와 제때 둔 수의 차이",
    "lead": "좋은 자리를 골랐는데도 블록을 그곳에 놓지 못할 수 있다. AI가 답하는 동안 블록이 이미 바닥에 닿았다면 배치를 바꿀 기회가 사라지기 때문이다. 이 테트리스 프로젝트는 같은 순서의 블록을 여러 모델에 주고, 답을 기다리는 동안에도 중력을 적용할 때와 기다려 줄 때를 비교한다. 무엇을 골랐는지와 언제 답했는지를 나누어야 승패의 이유를 이해할 수 있다.",
    "origin": {
      "label": "trungdq88 · Jev vs the LLMs: real-time Tetris",
      "url": "https://github.com/trungdq88/jev-tetris/blob/main/README.md"
    },
    "sections": [
      {
        "id": "race",
        "title": "중력이 있을 때와 없을 때",
        "blocks": [
          {
            "type": "p",
            "text": "새 블록이 나오면 게임은 모델에 배치를 묻는다. 답이 오면 해당 열과 회전으로 옮겨 곧바로 떨어뜨린다. 그런데 그 전에 블록이 바닥에 닿으면 현재 자리에서 고정된다. 이때는 좋은 답이 나중에 와도 사용할 수 없으며, 기록에서는 missed deadline으로 센다. 대전 모드에서는 지운 줄이 상대에게 방해 줄로 전달되므로 빠른 응답은 상대의 보드를 더 빨리 채우는 효과도 낸다.",
            "links": [
              {
                "text": "missed deadline",
                "url": "https://github.com/trungdq88/jev-tetris"
              }
            ]
          },
          {
            "type": "table",
            "headers": [
              "원문 Seed 42 대결",
              "Jev",
              "Gemini 3.8 Flash"
            ],
            "rows": [
              [
                "실시간 대전",
                "35개 블록 · 6줄 · 212ms/수 · 마감 실패 0",
                "13개 블록 · 0줄 · 1,346ms/수 · 마감 실패 8"
              ],
              [
                "중력 없는 독립 보드",
                "105개 블록 · 26줄",
                "106개 블록 · 34줄"
              ]
            ]
          },
          {
            "type": "p",
            "text": "제작자가 Seed 42로 실행한 표를 보면 실시간 대전에서는 Jev가 이겼지만, 중력을 없앤 독립 보드에서는 Gemini가 더 오래 버텼다. 실시간 판의 Gemini는 답을 기다리는 동안 블록이 여덟 번 고정됐다. 시간 제약을 없앤 판에서는 선택한 배치를 적용할 수 있었다. 두 결과가 다른 이유를 이해하려면 우선 중력과 상대의 방해 줄이 있는지를 확인해야 한다.",
            "links": []
          },
          {
            "type": "source",
            "label": "원문의 대결 설정과 실행 결과",
            "url": "https://github.com/trungdq88/jev-tetris/blob/main/README.md#results-so-far"
          }
        ]
      },
      {
        "id": "deadline-budget",
        "title": "블록이 쌓일수록 생각할 시간이 줄어든다",
        "blocks": [
          {
            "type": "p",
            "text": "보드가 높아지면 같은 속도로 답하는 모델도 배치를 놓치기 쉽다. 기본 중력은 한 줄에 150ms이며, 20초마다 간격이 15% 줄어 가장 빠를 때는 40ms가 된다. 처음 간격에서 바닥까지 12줄이 남으면 단순 계산으로 1.8초가 있지만, 3줄만 남으면 0.45초뿐이다. 700ms 걸리는 답은 앞의 경우에는 제때 오고 뒤의 경우에는 늦는다.",
            "links": [
              {
                "text": "기본 중력",
                "url": "https://github.com/trungdq88/jev-tetris"
              }
            ]
          },
          {
            "type": "code",
            "label": "남은 낙하 거리와 판단 시간 비교",
            "lang": "python",
            "kind": "계산 예제",
            "code": "row_ms = 150\nfor rows_left in [12, 3]:\n    budget_ms = rows_left * row_ms\n    print(rows_left, budget_ms,\n          {latency: latency < budget_ms for latency in [212, 700, 1346]})"
          },
          {
            "type": "p",
            "text": "이 계산은 남은 줄 수와 낙하 간격만 사용한 시간 예산이다. 실제 착지는 블록의 모양과 쌓인 표면에 따라 달라진다. 같은 보드에서도 어느 열에 어떤 회전으로 놓느냐에 따라 먼저 닿는 높이가 다를 수 있다. 그러므로 평균 응답 시간이 짧다는 정보만으로 모든 배치를 제때 적용한다고 판단할 수는 없다.",
            "links": []
          },
          {
            "type": "p",
            "text": "대전에서는 상대의 빠른 응답이 내 시간까지 줄인다. 상대가 줄을 지우면 내 보드 아래에 방해 줄이 올라와 블록이 떨어질 공간이 좁아진다. 느린 응답으로 공격을 덜 보내는 동안 상대의 공격을 받아 마감도 더 촉박해지는 것이다. 중력을 끄는 실험과 방해 줄을 끄는 실험은 이 두 효과를 나누어 확인하는 방법이다.",
            "links": []
          }
        ]
      },
      {
        "id": "placements",
        "title": "모델에게 어떤 선택지를 줄 것인가",
        "blocks": [
          {
            "type": "p",
            "text": "모델에 보드만 보여 주고 열과 회전을 답하게 하면, 좋은 배치를 고르기 전에 가능한 배치부터 계산해야 한다. 블록이 벽이나 기존 블록과 겹치는지도 판단해야 한다. 이 구현에서는 게임 코드가 가능한 배치를 먼저 모두 구하고 각각 놓아 본 결과를 계산한다. 지워지는 줄, 새로 생기는 구멍, 가장 높은 열을 미리 알아낸 뒤 모델에 비교를 맡긴다.",
            "links": []
          },
          {
            "type": "diagram",
            "title": "배치 결과를 계산한 다음 우선순위를 판단하기",
            "nodes": [
              {
                "id": "n0",
                "x": 20,
                "y": 55,
                "kind": "world",
                "title": "현재 보드와 블록",
                "lines": [
                  "현재 블록 · 다음 블록"
                ]
              },
              {
                "id": "n1",
                "x": 250,
                "y": 55,
                "kind": "code",
                "title": "배치별 미래 보드",
                "lines": [
                  "줄 · 구멍 · 높이 · 표면"
                ]
              },
              {
                "id": "n2",
                "x": 480,
                "y": 55,
                "kind": "model",
                "title": "placement Choice",
                "lines": [
                  "후보 ID와 확률"
                ]
              },
              {
                "id": "n3",
                "x": 710,
                "y": 55,
                "kind": "code",
                "title": "선택한 배치 실행",
                "lines": [
                  "열 · 회전 · hard drop"
                ]
              }
            ],
            "caption": "public/tetris.js가 결과를 계산하고 public/jev.js가 설명과 질문을 만든다.",
            "extra": null
          },
          {
            "type": "code",
            "label": "배치 후보의 ID와 결과 설명",
            "lang": "javascript",
            "kind": "원본 코드",
            "code": "export function buildQuestions(placements) {\n  const criteria = {};\n  for (const p of placements) criteria[p.id] = describePlacement(p);\n  return {\n    placement: {\n      type: \"choice\",\n      instructions: {\n        question: \"Which placement of `game.current_piece` should the player choose? Each option describes the board after that placement.\",",
            "start": 42,
            "source": "https://github.com/trungdq88/jev-tetris/blob/a0b411c6378ff24a503f317d2aa8bf1f18a7a6dc/public/jev.js#L42-L49",
            "file": "public/jev.js"
          },
          {
            "type": "p",
            "text": "계산한 결과는 describePlacement를 거쳐 후보 설명이 된다. 모든 후보를 줄 제거 수와 구멍 유무 같은 공통 항목으로 설명하면 서로 비교하기 쉽다. criteria의 키는 그 배치의 ID이므로 Jev는 하나의 ID만 반환하면 된다. 가능한 배치를 만드는 계산과, 그중 어떤 결과를 더 좋게 볼지 정하는 판단이 이 지점에서 나뉜다.",
            "links": [
              {
                "text": "criteria",
                "url": "https://github.com/trungdq88/jev-tetris/blob/a0b411c6378ff24a503f317d2aa8bf1f18a7a6dc/public/jev.js#L42-L49"
              }
            ]
          },
          {
            "type": "p",
            "text": "높이만 낮추면 좋은 보드가 될까? 위를 블록으로 덮은 빈칸은 새 블록을 바로 떨어뜨려 채울 수 없으므로 구멍으로 남는다. 그 줄을 지우려면 위쪽 블록부터 치워야 한다. 울퉁불퉁한 표면이나 깊은 우물도 다음 블록이 들어갈 자리를 제한한다. 따라서 후보 설명에는 당장 지우는 줄 수와 함께 다음 배치를 어렵게 만드는 흔적도 포함된다.",
            "links": []
          },
          {
            "type": "p",
            "text": "describe 계열 함수는 이러한 계산을 “두 줄”, “구멍 없음”, “낮은 높이”, “평평한 표면”처럼 일정한 형식의 말로 바꾼다. 모델에 긴 수치 목록을 해석하게 하는 부담을 줄이는 것이다. 다만 연속된 수치를 몇 구간으로 나누면 같은 표현 아래 서로 다른 상태가 묶인다. 어떤 높이부터 위험하다고 설명할지 정하는 경계도 입력 설계의 일부다.",
            "links": []
          }
        ]
      },
      {
        "id": "priorities",
        "title": "당장 점수를 얻는 배치가 항상 좋을까?",
        "blocks": [
          {
            "type": "p",
            "text": "한 줄을 지우는 대신 밑에 구멍을 남기는 배치와, 줄은 못 지워도 표면을 평평하게 만드는 배치가 있다고 하자. 당장 점수는 전자가 높지만 다음 블록을 놓기는 후자가 쉬울 수 있다. 후보의 결과를 모두 계산해 주어도 무엇을 우선할지는 여전히 남는다. 아래 priorities는 이때 적용할 실제 판단 기준을 적은 지시문이다.",
            "links": []
          },
          {
            "type": "code",
            "label": "실제 배치 질문의 우선순위",
            "lang": "javascript",
            "kind": "원본 코드",
            "code": "        priorities: [\n          \"Clearing lines is good. Clearing more lines at once is better.\",\n          \"Do not create holes. A placement with holes_created of none beats one that creates holes, unless the one with holes clears far more lines or the stack is dangerously high.\",\n          \"Keep the stack low. Prefer a lower stack_height_after and a height_change that does not grow the stack.\",\n          \"Keep the surface flat. Prefer surface_after of flat over slightly uneven, bumpy, or very jagged.\",\n          \"One deep well is acceptable because the next I piece can fill it. Several deep wells are bad.\",\n          \"When the stack is dangerously high, survival matters more than a clean surface.\",\n        ],\n      },\n      criteria,\n    },",
            "start": 50,
            "source": "https://github.com/trungdq88/jev-tetris/blob/a0b411c6378ff24a503f317d2aa8bf1f18a7a6dc/public/jev.js#L50-L60",
            "file": "public/jev.js"
          },
          {
            "type": "p",
            "text": "천장 가까이 쌓였을 때는 이 비교의 무게가 달라진다. 앞으로 좋은 모양을 만들 여유보다 지금 높이를 줄여 살아남는 일이 급하다. 지시문의 마지막 항목은 이 상황을 다룬다. 제작자는 단독 플레이에서 Jev가 한 줄 제거를 쉽게 택하고 비교용 휴리스틱보다 구멍을 더 허용하는 경향을 관찰했다. 더 깔끔하게 쌓도록 바꾸려면 결과만 지적할 것이 아니라 이 우선순위를 조정해야 한다.",
            "links": []
          }
        ]
      },
      {
        "id": "fanout",
        "title": "한 번의 요청으로 네 가지를 묻는 이유",
        "blocks": [
          {
            "type": "p",
            "text": "블록이 잘못 놓였을 때 선택한 자리만 보면 모델이 상황을 어떻게 이해했는지 알기 어렵다. 제작자는 실행할 배치 외에 현재 전략과 보드의 위험도도 함께 물었다. 네 질문의 역할은 다음과 같다."
          },
          {
            "type": "table",
            "headers": [
              "질문",
              "반환 타입",
              "쓰이는 곳"
            ],
            "rows": [
              [
                "placement",
                "Choice",
                "실제로 놓을 배치"
              ],
              [
                "strategy",
                "Choice",
                "쌓기·제거·표면 복구·생존 전략 표시"
              ],
              [
                "board_health",
                "Score",
                "현재 보드 상태 게이지"
              ],
              [
                "next_piece_fits",
                "Noul",
                "다음 블록을 놓기 쉬운지 확률 막대"
              ]
            ]
          },
          {
            "type": "code",
            "label": "상태와 네 질문을 묶는 한 번의 요청",
            "lang": "javascript",
            "kind": "원본 코드",
            "code": "export function buildRequest(gameInfo, placements) {\n  return {\n    state: buildState(gameInfo),\n    model: MODEL,\n    questions: buildQuestions(placements),\n  };\n}",
            "start": 82,
            "source": "https://github.com/trungdq88/jev-tetris/blob/a0b411c6378ff24a503f317d2aa8bf1f18a7a6dc/public/jev.js#L82-L88",
            "file": "public/jev.js"
          },
          {
            "type": "p",
            "text": "네 답 가운데 실제 배치를 정하는 것은 placement 하나다. strategy, board_health, next_piece_fits는 관객이 모델의 판단을 이해하도록 전략과 위험, 다음 블록의 여유를 보여 준다. 각각을 따로 호출하는 대신 같은 상태에서 한 번에 묻는다. 그러면 선택한 배치가 무엇인지와 함께, 그때 보드를 얼마나 위태롭게 보았는지도 확인할 수 있다.",
            "links": []
          },
          {
            "type": "code",
            "label": "응답 ID와 배치 객체의 연결",
            "lang": "javascript",
            "kind": "원본 코드",
            "code": "export function pickPlacement(response, placements) {\n  const answer = response?.answers?.placement;\n  if (!answer || answer.type !== \"choice\") throw new JevError(\"Response has no placement choice\", 500, response);\n  const byId = new Map(placements.map((p) => [p.id, p]));\n  const ranked = Object.entries(answer.probabilities || {})\n    .filter(([id]) => byId.has(id))\n    .sort((a, b) => b[1] - a[1])\n    .map(([id, probability]) => ({ placement: byId.get(id), probability }));\n  const chosen = byId.get(answer.choice) || ranked[0]?.placement || placements[0];\n  return { chosen, ranked, confidence: answer.confidence ?? 0 };\n}",
            "start": 137,
            "source": "https://github.com/trungdq88/jev-tetris/blob/a0b411c6378ff24a503f317d2aa8bf1f18a7a6dc/public/jev.js#L137-L147",
            "file": "public/jev.js"
          },
          {
            "type": "p",
            "text": "모델이 돌려준 ID는 byId 맵에서 원래 배치 객체를 찾는 데 사용된다. 그 객체에는 이미 열과 회전 등 실행 정보가 있다. “오른쪽에 놓으라”는 문장을 다시 해석할 필요 없이, 후보를 만들 때 붙인 이름으로 같은 배치를 찾아 실행한다. 후보 설명과 실행 정보가 한 배치를 가리키도록 연결해 두는 것이 핵심이다.",
            "links": [
              {
                "text": "byId",
                "url": "https://github.com/trungdq88/jev-tetris/blob/a0b411c6378ff24a503f317d2aa8bf1f18a7a6dc/public/jev.js#L137-L147"
              }
            ]
          }
        ]
      },
      {
        "id": "compare",
        "title": "대결 결과를 바꾸는 세 가지 조건",
        "blocks": [
          {
            "type": "p",
            "text": "판단의 질을 비교하려면 시간과 공격이 만든 차이를 떼어 볼 필요가 있다. 이 프로젝트는 다음 세 설정으로 어떤 제약을 남길지 정한다."
          },
          {
            "type": "table",
            "headers": [
              "모드",
              "무엇이 달라지는가",
              "볼 항목"
            ],
            "rows": [
              [
                "Versus",
                "줄 제거가 상대에게 garbage를 보냄",
                "제거 속도와 상대 압박"
              ],
              [
                "Independent",
                "상대 공격 없이 각자 생존",
                "블록 수와 보드 관리"
              ],
              [
                "Wait for answers",
                "답을 기다리는 동안 중력 제거",
                "시간 압박 없는 배치 선택"
              ]
            ]
          },
          {
            "type": "p",
            "text": "Versus를 끄면 상대가 보내는 방해 줄이 사라진다. Wait for answers를 켜면 답을 기다리는 동안 블록이 떨어지지 않는다. 전자는 상대의 빠른 공격이 미친 영향을, 후자는 응답이 늦어 배치를 놓친 영향을 줄인다. 두 설정을 따로 바꾸어야 불리한 자리를 고른 것인지, 고른 자리에 놓을 시간이 없었던 것인지 구분할 수 있다.",
            "links": []
          },
          {
            "type": "source",
            "label": "대결 규칙과 화면 옵션",
            "url": "https://github.com/trungdq88/jev-tetris/blob/main/README.md#the-battle"
          }
        ]
      },
      {
        "id": "opponents",
        "title": "원문에 있는 세 상대를 함께 비교하면",
        "blocks": [
          {
            "type": "p",
            "text": "원문에는 Gemini뿐 아니라 Haiku와 Laya의 비교도 있다. 상대와 경기 조건을 함께 적어야 어느 제약에서 차이가 났는지 놓치지 않는다. 표의 각 행은 Seed 42의 개별 실행 기록이다."
          },
          {
            "type": "table",
            "headers": [
              "상대 / 조건 · Seed 42",
              "Jev",
              "상대"
            ],
            "rows": [
              [
                "Gemini · 실시간 대전",
                "35개 / 6줄 / 212ms / 지연 실패 0",
                "13개 / 0줄 / 1,346ms / 지연 실패 8"
              ],
              [
                "Gemini · 무중력 독립 보드",
                "105개 / 26줄 / 205ms / $0.014",
                "106개 / 34줄 / 1,881ms / $0.231"
              ],
              [
                "Haiku · 실시간 대전",
                "34개 / 10줄 / 216ms / 지연 실패 0",
                "21개 / 4줄 / 700ms / 지연 실패 2"
              ],
              [
                "Haiku · 중력 있는 독립 보드",
                "97개 / 25줄 / 243ms / 지연 실패 2",
                "61개 / 15줄 / 721ms / 지연 실패 6"
              ],
              [
                "Haiku · 무중력",
                "167개 / 52줄 / 219ms",
                "106개 / 28줄 / 832ms"
              ],
              [
                "Laya · 실시간 대전",
                "27개 / 7줄 / 232ms / 지연 실패 0",
                "19개 / 0줄 / 614ms / 지연 실패 2"
              ]
            ]
          },
          {
            "type": "p",
            "text": "Gemini 3.8 Flash는 무중력 독립 보드에서 106개 블록을 버텨 Jev의 105개를 조금 넘었다. 줄 제거 비율도 약 0.32줄/블록으로 Jev의 약 0.25줄/블록보다 높았다. 그러나 실시간 대전에서는 Jev가 18초에 이겼다. 시간을 충분히 준 배치 결과와 마감 안에 답해야 하는 경기 결과가 다를 수 있음을 보여 주는 기록이다.",
            "links": []
          },
          {
            "type": "p",
            "text": "이 패턴이 모든 상대에게 같지는 않다. Haiku 4.5와의 기록에서는 실시간 대전, 중력 있는 독립 보드, 무중력 조건 모두 Jev가 더 오래 버텼다. 따라서 시간을 충분히 주면 다른 모델이 항상 더 잘한다는 결론도 나오지 않는다. 원문은 Seed 42에서 각 조건을 한 번 실행한 기록을 제시한다. 그 조건의 결과를 먼저 비교하고 반복 실험에서 같은 경향이 이어지는지 확인해야 한다.",
            "links": []
          },
          {
            "type": "p",
            "text": "Laya의 결과를 비교하려면 먼저 입력 차이를 알아야 한다. 문맥 한도가 512토큰이어서 전체 후보를 받지 못하고, 휴리스틱으로 고른 여섯 배치와 짧은 보드 설명을 받았다. 실행 장치는 4코어 CPU다. 무중력 단독 실행에서는 53개 블록과 5줄을 기록했고, 휴리스틱이 1위로 둔 후보와 같은 선택을 한 횟수는 16번이었다. 제작자는 확률이 거의 평평하며 앞에 나열된 후보를 선호하는 경향도 관찰했다.",
            "links": []
          },
          {
            "type": "p",
            "text": "원문의 Laya는 4억 2,100만 파라미터의 ModernBERT 인코더로, 테트리스가 아니라 이메일 분류·라우팅 같은 다른 영역의 선택 문제로 학습됐다. 보고된 엔트로피 기반 confidence는 약 0.01~0.1이었고, 유일하게 네 줄을 지울 수 있는 후보도 일관되게 고르지 못했다. Apple Silicon의 MLX 구현은 지연을 수십 ms로 낮출 수 있다고 소개되지만, 빠른 실행만으로 이런 선택 성향까지 고쳐지는 것은 아니다.",
            "links": [
              {
                "text": "confidence",
                "url": "https://docs.typesafe.ai/confidence"
              }
            ]
          },
          {
            "type": "p",
            "text": "대전과 별도로 Jev가 150개 블록을 끝까지 처리하며 50줄을 지운 단독 기록도 있다. 평균 판단 시간은 약 240ms, 입력은 약 53만 토큰, 비용은 약 2센트였고 휴리스틱과의 일치율은 69%였다. 이 기록은 위 대전 표와 같은 실행이 아니다. 또한 휴리스틱과 다르게 골랐다는 사실만으로 오답이라고 할 수는 없다. 일치율은 두 방식의 차이를, 생존과 제거한 줄은 그 선택을 이어 간 결과를 보여 준다.",
            "links": []
          },
          {
            "type": "exercise",
            "question": "공정하게 비교하려면 같은 시드만 주면 될까?",
            "answer": "시드는 블록 순서를 맞춘다. 그 외에도 후보 목록, 설명, 중력 일정, 방해 줄, 실행 하드웨어와 추론 설정을 확인해야 한다. 특히 Laya는 후보 여섯 개를 미리 골라 받으므로 동일한 전체 후보를 받는 Jev·Haiku·Gemini와 입력 조건이 다르다. 입력 축소 효과를 알고 싶다면 다른 모델에도 같은 여섯 후보를 주는 비교를 추가할 수 있다."
          },
          {
            "type": "source",
            "label": "전체 대결 표와 단독 플레이 기록",
            "url": "https://github.com/trungdq88/jev-tetris/blob/main/README.md"
          }
        ]
      }
    ],
    "refs": [
      {
        "label": "public/jev.js",
        "url": "https://github.com/trungdq88/jev-tetris/blob/a0b411c6378ff24a503f317d2aa8bf1f18a7a6dc/public/jev.js"
      }
    ],
    "leadLinks": []
  },
  "mario": {
    "minutes": 11,
    "title": "마리오의 점프 시점과 AI 응답 지연",
    "lead": "마리오 앞에 적이 다가온다. 지금 거리를 보면 조금 더 달려도 될 듯하지만, AI의 답을 기다리는 동안에도 적은 가까워진다. 점프 버튼을 누른 뒤 적보다 높이 올라가는 데도 시간이 든다. 따라서 필요한 질문은 “적이 가까운가”에서 끝나지 않는다. 다음에 행동을 바꿀 때까지 기다려도 되는지를 알아야 한다. TypeSafe Mario는 적의 움직임과 응답 지연, 진행 중인 점프를 함께 전달해 이 판단을 돕는다.",
    "origin": {
      "label": "fhshaik · TypeSafe Mario",
      "url": "https://github.com/fhshaik/typesafe-mario/blob/main/README.md"
    },
    "sections": [
      {
        "id": "state",
        "title": "현재 위치만으로는 알 수 없는 것",
        "blocks": [
          {
            "type": "p",
            "text": "마리오가 같은 자리에 있어도 멈춰 있을 때와 달릴 때 점프를 시작해야 하는 시점은 다르다. 이미 공중에 있다면 새로 뛰는 일보다 점프 입력을 계속 유지할지가 문제가 된다. 현재 좌표만으로는 이 상황들을 구분할 수 없다.",
            "links": []
          },
          {
            "type": "p",
            "text": "그래서 프로그램은 위치에 더해 속도와 접지 여부, 점프 진행 상태, 적과 만날 예상 시점, 직전 조작의 결과를 함께 보낸다. player는 현재 움직임, trajectory는 진행 중인 점프, hazard는 예상 접촉, recent_control은 직전 조작을 설명하는 묶음이다. README의 상태 항목은 각각 다음 판단에 필요한 질문과 연결된다.",
            "links": [
              {
                "text": "README",
                "url": "https://github.com/fhshaik/typesafe-mario"
              }
            ]
          },
          {
            "type": "table",
            "headers": [
              "상태 묶음",
              "판단에 필요한 내용"
            ],
            "rows": [
              [
                "player / trajectory",
                "속도·접지·점프 단계·구멍을 건너는 중인지"
              ],
              [
                "hazard / terrain",
                "적의 예상 위치·접촉 시점·지형 신뢰도"
              ],
              [
                "reaction_timing",
                "조작 유지 시간과 관측 후 응답 지연"
              ],
              [
                "recent_control / episode",
                "직전 조작의 결과·정체·생존·진행도"
              ]
            ]
          },
          {
            "type": "diagram",
            "title": "미래의 위험을 계산해 현재의 조작을 고르기",
            "nodes": [
              {
                "id": "n0",
                "x": 20,
                "y": 55,
                "kind": "world",
                "title": "NES 상태",
                "lines": [
                  "RAM · 이동 · 지형"
                ]
              },
              {
                "id": "n1",
                "x": 250,
                "y": 55,
                "kind": "code",
                "title": "위험과 시간 계산",
                "lines": [
                  "접촉 예상 · 반응 구간"
                ]
              },
              {
                "id": "n2",
                "x": 480,
                "y": 55,
                "kind": "model",
                "title": "Jev의 세 판단",
                "lines": [
                  "행동 · 점프 필요 · 위험"
                ]
              },
              {
                "id": "n3",
                "x": 710,
                "y": 55,
                "kind": "code",
                "title": "컨트롤러 매크로",
                "lines": [
                  "선택한 조작을 여러 프레임 유지"
                ]
              }
            ],
            "caption": "README의 상태 그룹과 policy.py의 next_action, jump_needed, danger 질문을 연결했다.",
            "extra": null
          },
          {
            "type": "p",
            "text": "마리오가 구멍을 발견하고 오른쪽으로 뛰어올랐다고 하자. 반대편에 닿기 전에 다음 행동을 정해야 한다면, 지금 위치뿐 아니라 무엇을 넘으려고 뛰었는지도 알아야 한다. 새 관측에서 구멍이 보이지 않는다고 곧바로 안전한 땅에 도착했다고 판단할 수는 없다.",
            "links": []
          },
          {
            "type": "p",
            "text": "그 이유는 지형을 관측하는 방식에 있다. 이 프로그램은 마리오를 기준으로 가로 11칸, 세로 9칸의 좁은 영역을 격자로 읽는다. 관측 영역도 마리오를 따라 움직이므로 높이 뛰면 바닥이 범위를 벗어날 수 있다. 구멍 위에서는 바로 아래의 바닥을 찾지 못해 주변 지형을 해석할 기준도 잡기 어렵다. 구멍을 다 건넌 경우와 구멍을 제대로 볼 수 없게 된 경우를 구분해야 하는 것이다.",
            "links": [
              {
                "text": "가로 11칸, 세로 9칸",
                "url": "https://github.com/fhshaik/typesafe-mario/blob/ca22449ed187118d19326d1f54b01b6636578aa4/src/typesafe_mario/state.py"
              }
            ]
          },
          {
            "type": "p",
            "text": "이를 위해 현재 관측의 신뢰도와 마지막 지상 관측을 함께 전달한다. terrain.observation_reliability는 땅에 있을 때 high, 공중에서는 low_airborne으로 표시된다. terrain.last_grounded_preview에는 땅에 있었을 때 확인한 구멍과 장애물의 거리, 보이는 구멍의 폭과 장애물 높이를 남긴다. 현재 지형을 판독하기 어려워도 뛰기 전에 확인한 정보를 판단에 사용할 수 있다.",
            "links": [
              {
                "text": "terrain.observation_reliability",
                "url": "https://github.com/fhshaik/typesafe-mario/blob/ca22449ed187118d19326d1f54b01b6636578aa4/src/typesafe_mario/state.py"
              },
              {
                "text": "terrain.last_grounded_preview",
                "url": "https://github.com/fhshaik/typesafe-mario/blob/ca22449ed187118d19326d1f54b01b6636578aa4/src/typesafe_mario/state.py"
              }
            ]
          },
          {
            "type": "p",
            "text": "진행 중인 동작도 따로 기록한다. trajectory.crossing_known_gap은 이미 확인한 구멍을 건너는 중임을 나타낸다. 모델에는 이때 전진 속도를 유지하고, 상승 중에는 전진과 점프 입력을 이어 가라는 지침을 준다. 아직 구멍 위에 있는데 순간적인 관측만 믿고 입력을 놓거나 왼쪽으로 방향을 바꾸는 일을 막으려는 것이다.",
            "links": [
              {
                "text": "trajectory.crossing_known_gap",
                "url": "https://github.com/fhshaik/typesafe-mario/blob/ca22449ed187118d19326d1f54b01b6636578aa4/src/typesafe_mario/state.py"
              },
              {
                "text": "상승 중에는 전진과 점프 입력을 이어 가라는 지침",
                "url": "https://github.com/fhshaik/typesafe-mario/blob/ca22449ed187118d19326d1f54b01b6636578aa4/src/typesafe_mario/policy.py"
              }
            ]
          },
          {
            "type": "p",
            "text": "구멍 하나를 건너는 동안에도 판단은 여러 번 이루어진다. 그때마다 새 장면만 주면 앞서 시작한 동작의 목적을 잃을 수 있다. 뛰기 전에 본 지형과 지금까지 진행한 점프를 함께 남기는 이유가 여기에 있다.",
            "links": []
          },
          {
            "type": "table",
            "headers": [
              "허용 조작",
              "컨트롤러 의미"
            ],
            "rows": [
              [
                "noop",
                "버튼을 누르지 않음"
              ],
              [
                "right / left",
                "오른쪽 / 왼쪽 이동"
              ],
              [
                "jump",
                "제자리 점프 입력"
              ],
              [
                "right_jump",
                "오른쪽 이동 + 점프"
              ],
              [
                "right_run",
                "오른쪽 이동 + 달리기"
              ],
              [
                "right_run_jump",
                "오른쪽 이동 + 달리기 + 점프"
              ]
            ]
          },
          {
            "type": "p",
            "text": "원본의 초기 행동은 표에 제시한 일곱 가지다. right_run_jump처럼 여러 버튼을 묶은 이름을 매크로라고 부르지만, 성공 경로를 미리 녹화한 스크립트를 뜻하지는 않는다. Jev가 하나를 고르면 에뮬레이터가 그 조작으로 몇 프레임 진행하고 새 상태를 돌려준다. 그동안은 선택을 바로 바꾸지 못하므로, 지금 한 프레임에 안전한지에 더해 다음 판단까지 유지해도 되는지를 고려해야 한다.",
            "links": []
          }
        ]
      },
      {
        "id": "timing",
        "title": "응답을 기다리는 시간만큼 가까워진다",
        "blocks": [
          {
            "type": "p",
            "text": "적과의 간격이 40픽셀이고 매 프레임 2픽셀씩 좁혀진다고 하자. 속도가 유지되면 20프레임 뒤에 접촉한다. 답을 기다리는 데 12프레임이 걸리고 받은 조작을 8프레임 유지한다면, 다음 판단 기회까지도 20프레임이다. 지금 화면에 여유가 있어 보여 한 번 더 달리면 다음에 바꿀 때는 이미 늦을 수 있다.",
            "links": []
          },
          {
            "type": "code",
            "label": "행동 유지 시간과 최근 추론 지연을 합치는 상태 필드",
            "lang": "python",
            "kind": "원본 코드",
            "code": "            \"reaction_timing\": {\n                \"action_horizon_frames\": self.decision_horizon_frames,\n                \"last_inference_delay_frames\": self.last_response_delay_frames,\n                \"total_reaction_horizon_frames\": (\n                    self.decision_horizon_frames + self.last_response_delay_frames\n                ),\n            },",
            "start": 272,
            "source": "https://github.com/fhshaik/typesafe-mario/blob/ca22449ed187118d19326d1f54b01b6636578aa4/src/typesafe_mario/state.py#L272-L278",
            "file": "src/typesafe_mario/state.py"
          },
          {
            "type": "p",
            "text": "이 때문에 코드는 행동 유지 시간과 최근 응답 지연을 더해 다음 판단까지의 시간을 만든다. 그 값이 total_reaction_horizon_frames다. 여기에 적의 움직임을 대조해 이번 결정에서 점프를 시작해야 하는지도 계산한다. jump_must_start_this_decision이라는 이름은 바로 그 뜻이다. 다음 지시문은 이 값이 참이면 한 번 더 달리지 말고 지금 앞으로 점프하도록 요구한다.",
            "links": [
              {
                "text": "total_reaction_horizon_frames",
                "url": "https://github.com/fhshaik/typesafe-mario/blob/ca22449ed187118d19326d1f54b01b6636578aa4/src/typesafe_mario/state.py#L272-L278"
              }
            ]
          },
          {
            "type": "code",
            "label": "위험 예측과 응답 지연을 읽도록 하는 실제 지시문",
            "lang": "python",
            "kind": "원본 코드",
            "code": "                    \"enemy_timing\": (\n                        \"Use `hazard` projections, not distance alone. Code has already accounted \"\n                        \"for inference delay, action cadence, and the frames needed to clear an \"\n                        \"enemy. If `jump_must_start_this_decision` is true, choose a forward jump \"\n                        \"now; another right-run decision will miss the takeoff deadline. If \"\n                        \"`contact_within_reaction_horizon` is true, also jump immediately. If \"\n                        \"`will_land_before_contact` is true, the current jump will not clear the \"\n                        \"enemy and another takeoff will be needed after landing. Use \"\n                        \"`upcoming_enemies` and their spacing to avoid landing on a second or \"\n                        \"third enemy hidden behind the nearest one.\"\n                    ),\n                    \"delay\": (\n                        \"`reaction_timing` describes how far the world moves before this choice \"\n                        \"takes effect. Judge urgency from projected rather than current distance.\"\n                    ),",
            "start": 76,
            "source": "https://github.com/fhshaik/typesafe-mario/blob/ca22449ed187118d19326d1f54b01b6636578aa4/src/typesafe_mario/policy.py#L76-L90",
            "file": "src/typesafe_mario/policy.py"
          },
          {
            "type": "p",
            "text": "여기에는 점프에 필요한 시간도 들어가야 한다. 접촉까지 20프레임이 남았다고 해서 19프레임 뒤에 버튼을 눌러도 되는 것은 아니다. 적의 높이를 넘을 만큼 상승하는 데 시간이 들기 때문이다. 코드는 반응 지연, 적의 운동, 행동 유지 시간과 점프 여유 시간을 함께 사용한다. Jev는 거리 하나로 같은 계산을 다시 추측하는 대신 그 결과를 조작 선택에 반영한다.",
            "links": []
          },
          {
            "type": "code",
            "label": "접촉 시간과 행동 갱신 시간 비교",
            "lang": "python",
            "kind": "계산 예제",
            "code": "gap_px = 40\nclosing_speed_px_per_frame = 2\nresponse_frames = 12\nhold_frames = 8\ncontact_frames = gap_px / closing_speed_px_per_frame\nhorizon_frames = response_frames + hold_frames\nprint(contact_frames, horizon_frames)  # 20.0, 20\nprint(contact_frames - horizon_frames) # 0.0: 추가 여유가 없음"
          },
          {
            "type": "p",
            "text": "계산 결과의 여유 0은 다음 판단 때까지 기다리면 접촉 시점에 이른다는 뜻이다. 점프 상승 시간까지 생각하면 출발은 그보다 빨라야 한다. 간격을 40픽셀에서 80픽셀로 늘리거나 접근 속도를 절반으로 줄이면 접촉까지의 시간은 두 배가 된다. 반대로 응답이 늦어지면 같은 장면에서도 더 빨리 점프해야 한다. 위험은 거리만의 성질이 아니라 움직임과 판단에 걸리는 시간의 관계다.",
            "links": []
          }
        ]
      },
      {
        "id": "judgments",
        "title": "점프가 필요한가와 어떤 버튼을 누를 것인가는 다르다",
        "blocks": [
          {
            "type": "p",
            "text": "점프가 필요하다는 사실을 알아도 누를 버튼이 모두 정해지지는 않는다. 제자리에서 뛸지, 앞으로 가며 뛸지, 달리기를 함께 누를지가 남는다. 이미 상승 중이라면 새 점프보다 현재 입력을 유지해야 할 수도 있다. 그래서 실제 조작을 고르는 next_action과 점프 필요성을 묻는 jump_needed를 나눈다. danger는 즉각적인 위험을 세 단계로 평가한다.",
            "links": [
              {
                "text": "jump_needed",
                "url": "https://github.com/fhshaik/typesafe-mario/blob/ca22449ed187118d19326d1f54b01b6636578aa4/src/typesafe_mario/policy.py#L94-L110"
              },
              {
                "text": "danger",
                "url": "https://github.com/fhshaik/typesafe-mario/blob/ca22449ed187118d19326d1f54b01b6636578aa4/src/typesafe_mario/policy.py#L94-L110"
              }
            ]
          },
          {
            "type": "code",
            "label": "점프 Noul과 위험 Score의 실제 정의",
            "lang": "python",
            "kind": "원본 코드",
            "code": "            \"jump_needed\": self._Noul(\n                instructions=(\n                    \"Do trusted `terrain`, projected `hazard`, `trajectory`, and \"\n                    \"`player.jump_phase` indicate that a forward jump should begin or remain \"\n                    \"held now? `hazard.jump_must_start_this_decision=true` is unambiguously yes. \"\n                    \"Also count a trusted obstacle/gap within three tiles, immediate projected \"\n                    \"contact, or a rising jump over a known gap as yes.\"\n                )\n            ),\n            \"danger\": self._Score(\n                instructions=\"How dangerous is Mario's immediate situation?\",\n                criteria=[\n                    \"Safe open movement\",\n                    \"Potential obstacle or enemy soon\",\n                    \"Immediate collision, fall, or enemy threat\",\n                ],\n            ),",
            "start": 94,
            "source": "https://github.com/fhshaik/typesafe-mario/blob/ca22449ed187118d19326d1f54b01b6636578aa4/src/typesafe_mario/policy.py#L94-L110",
            "file": "src/typesafe_mario/policy.py"
          },
          {
            "type": "p",
            "text": "jump_needed의 Noul 값은 점프가 필요하다는 판단의 확률이고, danger의 Score는 안전한 이동에서 충돌·추락 위험까지 정한 척도 위의 점수다. 이 두 값은 대시보드에서 상황을 설명한다. 게임을 움직이는 값은 Choice가 고른 next_action이다. 따라서 점프 확률이 높다는 표시가 곧바로 별도 점프 명령을 만들어 내는 것은 아니다. 상황 평가와 실행할 조작을 구분해야 로그도 올바르게 읽을 수 있다.",
            "links": [
              {
                "text": "Score",
                "url": "https://docs.typesafe.ai/primitives/score"
              },
              {
                "text": "대시보드",
                "url": "https://github.com/fhshaik/typesafe-mario"
              },
              {
                "text": "Noul",
                "url": "https://docs.typesafe.ai/primitives/noul"
              }
            ]
          }
        ]
      },
      {
        "id": "execution",
        "title": "한 번 선택한 행동은 여러 프레임 유지한다",
        "blocks": [
          {
            "type": "p",
            "text": "행동을 실행한 뒤 실패 원인을 되짚으려면 선택 이름과 당시의 판단을 함께 보관해야 한다. 응답을 받는 이 부분에서 조작, 확률, 지연을 하나의 기록으로 묶는다."
          },
          {
            "type": "code",
            "label": "한 요청에서 세 응답을 읽고 Decision을 만든다",
            "lang": "python",
            "kind": "원본 코드",
            "code": "        started = time.perf_counter()\n        response = self._client.system_one(state=snapshot.to_state(), questions=questions)\n        latency_ms = (time.perf_counter() - started) * 1000\n\n        action_answer = self._answer(response, \"next_action\", \"choices\")\n        jump_answer = self._answer(response, \"jump_needed\", \"nouls\")\n        danger_answer = self._answer(response, \"danger\", \"scores\")\n        action = Action(str(action_answer.choice))\n        probabilities = {\n            str(key): float(value) for key, value in dict(action_answer.probabilities).items()\n        }\n        return Decision(\n            action=action,\n            confidence=float(action_answer.confidence),\n            probabilities=probabilities,\n            latency_ms=latency_ms,\n            jump_needed_probability=float(jump_answer.noul),\n            danger_score=float(danger_answer.score),\n        )",
            "start": 112,
            "source": "https://github.com/fhshaik/typesafe-mario/blob/ca22449ed187118d19326d1f54b01b6636578aa4/src/typesafe_mario/policy.py#L112-L130",
            "file": "src/typesafe_mario/policy.py"
          },
          {
            "type": "p",
            "text": "요청 전후의 시각을 재면 이번 답을 받는 데 실제로 얼마나 걸렸는지 알 수 있다. 위 코드는 그 차이를 latency_ms로 남기고, next_action의 선택을 Action으로 바꾼다. 같은 Decision 안에는 후보별 확률과 점프·위험 평가도 함께 담는다. 실행 루프는 action을 사용하고 대시보드는 나머지 값을 표시하므로, 어떤 판단이 실제 조작이 되었는지 추적할 수 있다.",
            "links": [
              {
                "text": "대시보드",
                "url": "https://github.com/fhshaik/typesafe-mario"
              }
            ]
          },
          {
            "type": "p",
            "text": "질문에는 고른 조작을 최소 8프레임 유지한다는 조건이 들어 있다. 모델은 한순간의 버튼보다 일정 시간 이어질 동작을 선택하는 셈이다. 특히 구멍 위에서는 입력을 놓아도 당장 떨어지지 않을 수 있지만, 여러 프레임 동안 전진이나 점프를 유지하지 않으면 반대편에 닿지 못할 수 있다. 앞에서 본 점프 진행 기록과 입력 유지 지침은 이 시간 간격을 견디기 위한 것이다.",
            "links": []
          }
        ]
      },
      {
        "id": "inspect",
        "title": "입력 상태와 실행 기록",
        "blocks": [
          {
            "type": "p",
            "text": "게임을 시작하기 전에 모델에 전달할 정보부터 확인할 수 있다. 다음 명령은 네트워크 판단 없이 예시 상태를 출력하므로, 입력을 살펴보는 첫 단계로 적합하다."
          },
          {
            "type": "code",
            "label": "README의 상태 출력 명령",
            "lang": "powershell",
            "kind": "README 발췌",
            "code": ".venv\\Scripts\\typesafe-mario state-demo",
            "source": "https://github.com/fhshaik/typesafe-mario/blob/main/README.md",
            "file": "README.md"
          },
          {
            "type": "p",
            "text": "state-demo는 게임이나 API를 실행하지 않고 전달할 상태를 출력한다. 설치 후 아래와 같은 상태 묶음이 실제로 어떻게 구성되는지 확인할 수 있다. hazard와 reaction_timing에는 앞서 설명한 위험과 시간 정보가 들어간다. 사람이 보는 원시 격자와 모델에 주는 물체 중심 상태는 별도로 구성되므로 둘을 대조하면 어떤 정보를 추려 보냈는지도 알 수 있다.",
            "links": []
          },
          {
            "type": "code",
            "label": "README의 World 1-1 실행 명령",
            "lang": "powershell",
            "kind": "README 발췌",
            "code": ".venv\\Scripts\\typesafe-mario play --env SuperMarioBros-1-1-v0 --frames-per-decision 8",
            "source": "https://github.com/fhshaik/typesafe-mario/blob/main/README.md",
            "file": "README.md"
          },
          {
            "type": "p",
            "text": "World 1-1을 실행하면 게임 화면 옆에 선택한 조작, 후보별 확률, 응답 시간, 점프 확률과 위험 점수가 표시된다. 같은 내용은 artifacts 아래 JSONL 로그에도 남는다. 충돌한 순간만 보면 잘못된 점프처럼 보여도, 요청할 때와 적용할 때 사이에 적이 가까워졌을 수 있다. 실패 장면에서 거꾸로 요청 시점과 소요 시간을 찾아야 하는 이유다.",
            "links": []
          },
          {
            "type": "source",
            "label": "환경 설정과 대시보드 설명",
            "url": "https://github.com/fhshaik/typesafe-mario/blob/main/README.md#setup"
          },
          {
            "type": "p",
            "text": "분석은 관측, 선택, 적용 순서로 나누면 된다. 먼저 RAM에서 읽은 적과 지형이 실제 장면에 맞는지 확인한다. 그 정보가 맞다면 당시 고른 조작이 적절했는지 본다. 마지막으로 조작이 적용될 때도 같은 판단이 유효했는지 확인한다. 입력 오류와 판단 오류, 늦은 응답은 모두 충돌로 나타날 수 있지만 고쳐야 할 부분은 다르다.",
            "links": []
          },
          {
            "type": "p",
            "text": "여기서는 Noul과 Score가 대시보드용이고 Choice가 조작을 정한다. 높은 점프 확률을 별도 코드가 읽어 모델의 선택을 강제로 바꾸지는 않는다. 원문도 스크립트 기반 회복 행동이 선택을 덮어쓰지 않는다고 설명한다. 별도의 안전 반사가 Jev의 판단을 무시할 수 있는 드론과 다른 구조다. 보조 판단이 표시만 하는지, 실제 행동을 바꿀 권한도 있는지 확인해야 두 사례를 비교할 수 있다.",
            "links": [
              {
                "text": "Choice",
                "url": "https://docs.typesafe.ai/primitives/choice"
              },
              {
                "text": "Score",
                "url": "https://docs.typesafe.ai/primitives/score"
              },
              {
                "text": "대시보드",
                "url": "https://github.com/fhshaik/typesafe-mario"
              },
              {
                "text": "Noul",
                "url": "https://docs.typesafe.ai/primitives/noul"
              }
            ]
          },
          {
            "type": "exercise",
            "question": "frames-per-decision을 8에서 16으로 바꾸면 무엇이 달라질까?",
            "answer": "다음 관측과 행동 변경까지의 간격이 길어진다. 모델 호출 빈도는 줄일 수 있지만, 한 번 잘못 고른 행동을 더 오래 유지하며 적의 운동이나 착지에 늦게 반응할 수 있다. 지연 로그, 충돌 직전의 reaction_timing, 실제 유지 프레임을 함께 비교해야 하며, 호출 수 감소만으로 개선이라고 판단할 수 없다."
          }
        ]
      }
    ],
    "refs": [
      {
        "label": "src/typesafe_mario/policy.py",
        "url": "https://github.com/fhshaik/typesafe-mario/blob/ca22449ed187118d19326d1f54b01b6636578aa4/src/typesafe_mario/policy.py"
      },
      {
        "label": "src/typesafe_mario/state.py",
        "url": "https://github.com/fhshaik/typesafe-mario/blob/ca22449ed187118d19326d1f54b01b6636578aa4/src/typesafe_mario/state.py"
      },
      {
        "label": "상태 묶음 · 관련 원문",
        "url": "https://github.com/fhshaik/typesafe-mario"
      }
    ],
    "leadLinks": []
  },
  "doom": {
    "minutes": 8,
    "title": "Jev의 DOOM 데모와 실시간 의사결정",
    "lead": "같은 적을 앞에 두고도 “적을 처리하라”는 지시와 “쏘지 말고 피하라”는 지시는 다른 행동을 요구한다. 이동과 충돌 규칙은 그대로지만 무엇을 우선해야 하는지가 바뀌기 때문이다. TypeSafe의 DOOM 데모는 게임 상태에 이런 지시를 함께 주고 Jev의 판단을 반복해 조작으로 이어 간다. 이때 살펴야 할 것은 명령에 따라 행동이 달라지는지, 그리고 그 판단이 변하는 장면을 따라갈 만큼 제때 도착하는지다.",
    "origin": {
      "label": "TypeSafe · Introducing System One Models & Jev — Doom",
      "url": "https://typesafe.ai/blog/introducing-system-one-models-and-jev"
    },
    "sections": [
      {
        "id": "idea",
        "title": "게임을 잘한다는 말의 두 가지 의미",
        "blocks": [
          {
            "type": "p",
            "text": "적을 많이 쓰러뜨리도록 만든 전용 봇은 점수를 잘 얻어도 다른 목적에는 맞지 않을 수 있다. TypeSafe가 강조한 것은 지시에 반응하는 플레이다. 이 데모는 화면 이미지 대신 텍스트를 포함한 구조화된 게임 상태를 주며, 소개 당시 초당 약 10번 Jev를 호출했다. 같은 조작 체계를 두고도 상황과 지시가 바뀌면 행동의 우선순위를 바꾸려는 시도다.",
            "links": [
              {
                "text": "지시에 반응하는 플레이",
                "url": "https://typesafe.ai/blog/introducing-system-one-models-and-jev"
              },
              {
                "text": "TypeSafe",
                "url": "https://typesafe.ai/blog/introducing-system-one-models-and-jev"
              }
            ]
          },
          {
            "type": "source",
            "label": "TypeSafe 원문 · Fun Demos / Doom",
            "url": "https://typesafe.ai/blog/introducing-system-one-models-and-jev"
          },
          {
            "type": "p",
            "text": "예를 들어 점수만 중요하면 공격을 계속하는 편이 나을 수 있지만, 체력이 낮고 생존이 목표라면 먼저 피해야 한다. 규칙으로 구현하려면 상태와 목표의 여러 조합에 대해 조건을 정해야 한다. 목적을 해석하는 부분에 모델을 쓰면 그 조합을 자연어 지시로 전달할 수 있다. 물론 이동과 발사처럼 실제로 할 수 있는 행동은 게임 코드가 제공해야 한다.",
            "links": []
          }
        ]
      },
      {
        "id": "loop",
        "title": "상태에서 행동으로, 다시 다음 상태로",
        "blocks": [
          {
            "type": "p",
            "text": "명령을 한 번 해석하는 것으로 게임을 계속할 수는 없다. 조작이 장면을 바꾸고 그 변화가 다시 판단의 조건이 되기 때문이다. 이 반복을 네 단계로 나누면 다음과 같다."
          },
          {
            "type": "diagram",
            "title": "DOOM을 읽는 기본 구조",
            "nodes": [
              {
                "id": "n0",
                "x": 20,
                "y": 55,
                "kind": "world",
                "title": "게임의 현재 상태",
                "lines": [
                  "구조화된 상태 · 텍스트"
                ]
              },
              {
                "id": "n1",
                "x": 250,
                "y": 55,
                "kind": "code",
                "title": "상태와 지시 연결",
                "lines": [
                  "현재 무엇을 우선할지"
                ]
              },
              {
                "id": "n2",
                "x": 480,
                "y": 55,
                "kind": "model",
                "title": "Jev 판단",
                "lines": [
                  "소프트웨어가 읽는 결과"
                ]
              },
              {
                "id": "n3",
                "x": 710,
                "y": 55,
                "kind": "code",
                "title": "게임 조작",
                "lines": [
                  "다음 상태로 변화"
                ]
              }
            ],
            "caption": "공식 소개가 강조하는 구조화된 상태, 지시 반응, 실시간 실행의 관계.",
            "extra": null
          },
          {
            "type": "p",
            "text": "조작을 한 번 실행하면 처음 판단에 사용한 상태도 달라진다. 적이 사라질 수 있고, 이동한 곳에서 새로운 공격이 날아올 수도 있다. 따라서 게임 코드가 상태를 전달하고 Jev의 답을 조작으로 적용한 뒤, 바뀐 장면에서 다시 판단하는 순환이 필요하다. 그림의 한 바퀴는 이 관측·판단·실행 한 번을 나타낸다.",
            "links": []
          },
          {
            "type": "p",
            "text": "사람이 영상에서 보는 장면과 모델의 입력을 같은 것으로 생각하면 이 과정에서 중요한 부분을 놓친다. 공식 데모는 게임의 상태 데이터를 전달한다. 체력만 있는 상태와 위험의 위치까지 있는 상태는 서로 다른 판단을 가능하게 한다. 화면이 멋지게 움직이는지만 볼 것이 아니라, 코드가 어떤 사실을 추려 모델에 주었는지 함께 확인해야 한다.",
            "links": []
          }
        ]
      },
      {
        "id": "state-age",
        "title": "100ms 주기와 100ms 지연은 다른 값이다",
        "blocks": [
          {
            "type": "p",
            "text": "답이 100ms마다 나온다는 말이 모든 답을 100ms 안에 받는다는 뜻일까? 요청을 겹쳐 보내면 그렇지 않을 수 있다. 각 요청은 250ms 걸리더라도 여러 요청을 진행 중에 두면 초당 열 개의 답이 나올 수 있다. 출력 간격은 평균 100ms지만 각 답은 약 250ms 전 장면에 관한 것이다. 새 답이 나오는 주기와 한 상태의 답이 적용되기까지의 지연을 구분해야 한다.",
            "links": []
          },
          {
            "type": "code",
            "label": "판단의 나이와 그동안 움직인 거리",
            "lang": "python",
            "kind": "계산 예제",
            "code": "observation_ms = 1000\nresponse_ms = 1250\napply_ms = 1280\nage_s = (apply_ms - observation_ms) / 1000\nspeed = 6  # 이 계산 예제의 이동 속도: m/s\nprint(age_s)         # 0.28\nprint(round(speed * age_s, 2)) # 1.68"
          },
          {
            "type": "p",
            "text": "위 계산에서는 1초에 관측한 장면의 답을 1.28초에 적용한다. 그동안 초당 6m로 움직이면 1.68m를 이동한다. 요청할 때 통로에 있던 여유가 실행할 때는 사라질 수 있는 거리다. 이 수치들은 시간 관계를 설명하기 위해 정한 예제 값이다. 실제 로그에서도 호출 횟수에 더해 관측 시각과 적용 시각을 남겨야 판단이 얼마나 오래된 것인지 알 수 있다.",
            "links": []
          },
          {
            "type": "p",
            "text": "요청을 겹치면 나중에 보낸 요청의 답이 먼저 올 수도 있다. 새 답을 적용한 뒤 오래된 답이 도착했다고 그대로 덮어쓰면 행동이 과거 상태로 돌아간다. 관측 시각으로 오래된 답을 걸러 내거나 현재에도 유효한지 확인하는 처리가 필요한 이유다. 이는 실시간 시스템을 설계할 때 다뤄야 할 문제이며, 단순히 호출 빈도를 높이는 것으로 해결되지 않는다.",
            "links": []
          }
        ]
      },
      {
        "id": "rate",
        "title": "초당 10번이라는 수치의 의미",
        "blocks": [
          {
            "type": "p",
            "text": "초당 10번이면 평균 100ms마다 한 번이고, 같은 빈도를 유지하면 1분에 600회, 한 시간에 36,000회다. 한 번의 호출이 싸더라도 계속 반복하면 총비용에 영향을 준다. 실시간 게임에서는 한 답의 가격과 함께 얼마나 오래, 얼마나 자주 부르는지 계산해야 한다.",
            "links": []
          },
          {
            "type": "code",
            "label": "질의 빈도를 시간 간격과 총횟수로 바꾸기",
            "lang": "python",
            "kind": "계산해 보기",
            "code": "queries_per_second = 10\ninterval_ms = 1000 / queries_per_second\nqueries_per_minute = queries_per_second * 60\nqueries_per_hour = queries_per_second * 60 * 60\nprint(interval_ms)        # 100.0\nprint(queries_per_minute) # 600\nprint(queries_per_hour)   # 36000"
          },
          {
            "type": "p",
            "text": "같은 상태가 계속되는 동안에도 이 빈도로 물어야 할까? 변화가 없을 때는 이전 판단을 유지할 수 있지만 새로운 위험이 나타나면 즉시 갱신할 필요가 있다. 팩맨은 다음 갈림길을 예상해 미리 묻고, 드론은 장애물이나 목표 소실에 반응해 묻는다. 모델을 얼마나 빨리 호출할 수 있는지와 언제 호출해야 하는지는 함께 설계할 문제다.",
            "links": []
          },
          {
            "type": "p",
            "text": "공식 소개는 이 DOOM 데모의 운영 비용을 당시 약 7달러/시간으로 제시한다. 포켓몬의 작은 정책 요청을 같은 빈도로 호출한 계산과는 다르다. 요청에 담는 상태와 질문의 크기가 다르기 때문이다. 비용을 비교하려면 한 요청의 입력량과 비용을 확인한 다음 실제 호출 횟수를 곱해야 한다.",
            "links": [
              {
                "text": "공식 소개",
                "url": "https://typesafe.ai/blog/introducing-system-one-models-and-jev"
              }
            ]
          }
        ]
      },
      {
        "id": "read",
        "title": "명령을 바꾸는 것과 프로그램을 바꾸는 것",
        "blocks": [
          {
            "type": "p",
            "text": "행동의 목적이 바뀌었을 때 규칙 기반 봇에서는 보통 조건이나 가중치를 고쳐야 한다. 지시를 해석하는 모델을 넣으면 같은 실행 코드에 새로운 목적을 전달할 수 있다. 그러나 명령에 적힌 동작을 게임 코드가 제공하지 않는다면 이해만으로 실행되지는 않는다. 모델의 해석과 실행기가 가진 행동을 함께 보아야 한다.",
            "links": []
          },
          {
            "type": "p",
            "text": "DOOM에서는 짧은 시간에도 적과 발사체의 위치가 바뀐다. 새로운 지시와 상태로 선택을 바꾸고, 실행 뒤 다시 관측해야 그 변화에 대응할 수 있다. TypeSafe의 데모는 이런 반복 안에 작은 판단을 넣는 사례다. 긴 계획을 한 번 받아 끝까지 따르기보다 당장의 장면과 목적을 계속 대조한다.",
            "links": [
              {
                "text": "TypeSafe",
                "url": "https://typesafe.ai/blog/introducing-system-one-models-and-jev"
              }
            ]
          },
          {
            "type": "source",
            "label": "공식 데모 영상이 있는 원문",
            "url": "https://typesafe.ai/blog/introducing-system-one-models-and-jev"
          },
          {
            "type": "p",
            "text": "명령의 영향을 시험하려면 우선 상태를 고정해야 한다. 수업 예제로 A는 높은 점수와 큰 위험, B는 낮은 점수와 높은 생존 가능성을 갖도록 구성할 수 있다. 그 상태에서 점수 우선과 생존 우선 지시만 바꾼다. 기대하는 선택이 달라지는 장면을 준비해야 명령을 반영했는지 확인하기 쉽다. 상태까지 동시에 바꾸면 선택이 바뀐 원인을 분리하기 어렵다.",
            "links": []
          },
          {
            "type": "exercise",
            "question": "명령을 바꿨는데 매번 같은 행동을 골랐다면 명령을 무시한 것일까?",
            "answer": "반드시 그렇지는 않다. 주어진 상태에서는 한 행동이 점수와 생존 모두에 유리할 수 있다. 지시 준수를 시험하려면 두 목표가 서로 다른 행동을 선호하는 장면을 준비해야 한다. 후보가 하나뿐인 상태도 좋은 시험 장면이 아니다. 상태와 후보를 고정하고 목적만 바꿨을 때 어떤 선택을 기대하는지 먼저 정해야 한다."
          },
          {
            "type": "p",
            "text": "이렇게 평가하면 게임 점수와 지시 준수가 서로 다른 결과임이 드러난다. 공격하지 말라는 명령을 잘 따르면 점수가 낮아질 수도 있다. 원문이 강조한 것도 다양한 상태 표현과 명령에 반응하는 플레이다. 게임 규칙을 처리하는 코드에 목적을 해석하는 판단을 연결하고, 그 판단을 장면 변화에 맞춰 반복하는 것이 이 사례의 요점이다.",
            "links": []
          }
        ]
      }
    ],
    "refs": [],
    "leadLinks": [
      {
        "text": "TypeSafe",
        "url": "https://typesafe.ai/blog/introducing-system-one-models-and-jev"
      }
    ]
  },
  "wikiracing": {
    "minutes": 8,
    "title": "Wikiracing: 링크만 따라 목표 문서에 도착하기",
    "lead": "위키백과에서 어떤 문서를 찾아가야 하는데 검색창을 쓸 수 없다고 하자. 현재 페이지의 링크만 눌러야 한다. 목표 문서의 이름을 알아도 바로 갈 수 없고, 이름이 비슷한 문서로 옮겼다고 목적지에 가까워졌다는 보장도 없다. Wikiracing은 이렇게 제한된 이동을 반복해 목표 문서에 도착하는 게임이다. 링크 하나를 고르는 판단이 어떻게 경로 전체의 성공과 실패로 이어지는지 보여 준다.",
    "origin": {
      "label": "TypeSafe · Introducing System One Models & Jev — Wikiracing",
      "url": "https://typesafe.ai/blog/introducing-system-one-models-and-jev"
    },
    "sections": [
      {
        "id": "graph",
        "title": "관련 있는 문서와 갈 수 있는 문서",
        "blocks": [
          {
            "type": "p",
            "text": "목표와 관련된 문서를 떠올리는 것만으로는 이동할 수 없다. 현재 페이지에 그 문서로 가는 링크가 있어야 한다. 그곳에 도착한 뒤에는 다시 그 페이지의 링크만 사용할 수 있다. 문서를 점으로, 링크를 화살표로 나타내면 이 규칙이 그래프의 이동이 된다. 매번 현재 점에서 화살표로 연결된 이웃 가운데 하나를 골라야 한다.",
            "links": []
          },
          {
            "type": "p",
            "text": "그 이웃이 너무 많으면 한 번에 고르기도 어렵다. TypeSafe의 소개에서는 페이지에 따라 후보가 수백에서 수천 개가 될 수 있다고 설명한다. 소개 당시 Jev의 Choice 한 질문은 최대 255개 후보를 받았다. 이보다 많을 때는 링크를 각각 평가하는 단계와 그 결과에서 하나를 고르는 단계를 나누었다.",
            "links": [
              {
                "text": "Choice",
                "url": "https://docs.typesafe.ai/primitives/choice"
              },
              {
                "text": "255",
                "url": "https://docs.typesafe.ai/primitives/choice"
              }
            ]
          },
          {
            "type": "source",
            "label": "TypeSafe 원문 · Wikiracing",
            "url": "https://typesafe.ai/blog/introducing-system-one-models-and-jev"
          },
          {
            "type": "diagram",
            "title": "링크 후보를 평가하고 실제 이동 하나를 고르기",
            "nodes": [
              {
                "id": "n0",
                "x": 20,
                "y": 55,
                "kind": "world",
                "title": "현재 문서",
                "lines": [
                  "현재 링크 · 목표 문서"
                ]
              },
              {
                "id": "n1",
                "x": 250,
                "y": 55,
                "kind": "model",
                "title": "후보별 평가",
                "lines": [
                  "목표에 이르는 관련성"
                ]
              },
              {
                "id": "n2",
                "x": 480,
                "y": 55,
                "kind": "model",
                "title": "명시적인 선택",
                "lines": [
                  "다음 링크 하나"
                ]
              },
              {
                "id": "n3",
                "x": 710,
                "y": 55,
                "kind": "code",
                "title": "문서 이동",
                "lines": [
                  "새 페이지의 링크를 읽음"
                ]
              }
            ],
            "caption": "원문의 대규모 후보 처리: 개별 평가 뒤 최종 선택. 한 번 이동하면 다음 문서에서 같은 문제가 이어진다.",
            "extra": null
          }
        ]
      },
      {
        "id": "choice",
        "title": "문서 이름을 만드는 대신 링크를 선택한다",
        "blocks": [
          {
            "type": "p",
            "text": "존재하는 링크만 누르게 하려면 코드가 먼저 현재 페이지에서 링크를 추출해야 한다. 이 목록을 Choice의 criteria에 넣고 각 이름을 실제 주소와 연결한다. Jev가 고른 이름은 choice로, 후보별 확률은 probabilities로 돌아온다. 코드는 받은 이름에 해당하는 링크로 이동하면 되므로, 모델이 주소를 새로 작성하게 할 필요가 없다.",
            "links": [
              {
                "text": "Choice",
                "url": "https://docs.typesafe.ai/primitives/choice"
              }
            ]
          },
          {
            "type": "source",
            "label": "공식 문서 · Choice의 요청과 응답",
            "url": "https://docs.typesafe.ai/primitives/choice"
          },
          {
            "type": "p",
            "text": "모델이 목표에 가까운 문서를 알고 있어도 현재 링크에 없으면 이번에는 갈 수 없다. 알고 있는 문서와 지금 클릭할 수 있는 문서가 다른 것이다. 코드가 실제 링크로 후보를 제한하면 이 규칙이 요청 형식에 들어간다. 모델의 지식을 활용하면서도 이번 이동의 범위는 현재 페이지에 묶어 둘 수 있다.",
            "links": []
          }
        ]
      },
      {
        "id": "graph-example",
        "title": "연결된 문서를 알아도 목적지까지의 길은 모른다",
        "blocks": [
          {
            "type": "p",
            "text": "출발 문서 S에 A와 B로 가는 링크가 있다고 하자. A는 목표 T와 이름이 비슷하지만 X에만 연결되고, X도 A로 돌아가는 링크만 가진다. B는 이름이 덜 비슷해도 C를 거쳐 T에 닿는다. 이름만 보고 A를 고른 뒤 같은 판단을 반복하면 A와 X 사이를 맴돈다. 아래 작은 그래프는 링크를 규칙대로 누르는 것과 목적지에 도착하는 일이 왜 다른지 보여 준다.",
            "links": []
          },
          {
            "type": "code",
            "label": "고립된 순환과 목표로 이어지는 경로",
            "lang": "python",
            "kind": "계산 예제",
            "code": "graph = {\"S\": [\"A\", \"B\"], \"A\": [\"X\"], \"X\": [\"A\"],\n         \"B\": [\"C\"], \"C\": [\"T\"], \"T\": []}\ndef check_route(route):\n    valid = all(b in graph[a] for a, b in zip(route, route[1:]))\n    return {\"legal_moves\": valid, \"reached_goal\": route[-1] == \"T\"}\nprint(check_route([\"S\", \"A\", \"X\", \"A\"]))\nprint(check_route([\"S\", \"B\", \"C\", \"T\"]))"
          },
          {
            "type": "p",
            "text": "두 경로의 legal_moves는 모두 참이다. 한 번도 없는 링크를 클릭하지 않았기 때문이다. 그러나 첫 경로는 목표에 도착하지 못한다. 후보 중 하나를 반환한다는 타입 안전성은 존재하지 않는 주소를 만드는 오류를 막는 데 도움이 되지만, 반복 방문이나 잘못된 탐색 방향까지 해결해 주지는 않는다.",
            "links": []
          },
          {
            "type": "p",
            "text": "전체 링크 그래프를 미리 안다면 BFS 같은 방법으로 최단 경로를 계산할 수 있다. 그러나 현재 페이지의 링크만 아는 조건에서는 다음 페이지에 가야 그곳의 연결을 확인한다. 아직 보지 못한 곳 중 어디를 먼저 살펴볼지 결정해야 하므로 문서의 의미가 유용한 단서가 된다. 다만 그 단서가 실제 연결을 대신하는 것은 아니다.",
            "links": []
          }
        ]
      },
      {
        "id": "two-stage",
        "title": "후보별 평가와 최종 선택",
        "blocks": [
          {
            "type": "p",
            "text": "후보가 많은 상황에서는 넓게 검토하는 일과 다음 이동 하나를 확정하는 일을 나눌 수 있다. 첫 단계는 각 링크가 목표로 가는 데 얼마나 도움이 될지를 평가한다. 다음 단계는 그 평가를 바탕으로 이번에 누를 링크 하나를 고른다. 최종 Choice가 처리할 후보 수를 줄이면서도 먼저 많은 링크를 검토하는 구성이다.",
            "links": []
          },
          {
            "type": "p",
            "text": "여기서 높은 관련성이 짧은 경로를 뜻하지는 않는다. 목표와 같은 단어를 많이 쓰는 문서라도 다른 곳으로 나갈 링크가 적을 수 있다. 이름이 덜 비슷한 문서가 여러 분야를 잇는 통로일 수도 있다. 한 번 이동한 뒤 새 링크를 확인하고 판단을 갱신해야 하는 이유다. 전체 길을 아는 상태의 계산과, 이동하면서 길을 알아 가는 탐색은 다르다.",
            "links": []
          },
          {
            "type": "p",
            "text": "따라서 첫 평가가 무엇을 점수로 삼는지 중요하다. “목표 단어와 닮았는가”만 평가하면 앞의 A를 높게 둘 수 있다. 목표와 관련된 분야로 이어질 가능성, 이미 방문한 문서인지 같은 정보도 고려한다면 B를 선택할 여지가 생긴다. 이는 수업에서 탐색 방식을 설계할 때 비교해 볼 기준이다. 평가 단계의 목적이 마지막 이동의 목적과 맞아야 한다.",
            "links": []
          },
          {
            "type": "p",
            "text": "후보를 줄이다가 필요한 중간 문서를 버리면 마지막 모델은 그 문서를 고를 수 없다. 따라서 잘못된 최종 선택을 고치기 전에 좋은 후보가 마지막까지 남았는지 확인해야 한다. 테트리스에서 전체 배치 중 여섯 개만 골라 주는 경우도 같다. 모델의 선택 능력과, 코드가 필요한 후보를 남기는 능력을 따로 평가해야 한다.",
            "links": []
          }
        ]
      },
      {
        "id": "time",
        "title": "짧은 경로가 항상 빠른 경로일까?",
        "blocks": [
          {
            "type": "p",
            "text": "세 번 클릭하는 길과 다섯 번 클릭하는 길 중 어느 쪽이 먼저 끝날까? 각 클릭을 정하는 시간이 같다면 짧은 길이 빠르다. 그러나 한쪽은 단계마다 0.8초, 다른 쪽은 0.2초를 기다린다면 결과가 달라질 수 있다. 아래 계산은 페이지 처리 시간까지 더해 이 차이를 비교한다.",
            "links": []
          },
          {
            "type": "code",
            "label": "완주 시간을 판단 대기와 페이지 처리로 나누기",
            "lang": "python",
            "kind": "계산해 보기",
            "code": "def elapsed_seconds(decision_times, page_times):\n    return sum(decision_times) + sum(page_times)\n\n# 연습용 두 경로: 이동 횟수가 적어도 완주가 늦을 수 있다.\nroute_a = elapsed_seconds([0.8] * 3, [0.2] * 3)\nroute_b = elapsed_seconds([0.2] * 5, [0.2] * 5)\nprint(round(route_a, 1))  # 3.0초, 3단계\nprint(round(route_b, 1))  # 2.0초, 5단계"
          },
          {
            "type": "p",
            "text": "첫 경로는 3단계에 3초, 두 번째는 5단계에 2초가 걸린다. 이동 횟수가 적은 경로가 전체 시간에서도 앞서는 것은 아니다. TypeSafe의 영상 역시 시연 속도를 위해 상대 모델의 추론 설정을 낮췄다. 경로를 잘 고르는 정도와 한 선택에 쓰는 시간이 함께 결과를 만든다.",
            "links": []
          },
          {
            "type": "p",
            "text": "결국 한 번의 클릭 앞에는 링크 추출, 의미 평가, 후보 선택이 있다. 후보가 수천 개여도 실행되는 이동은 하나이며, 새 페이지에 도착하면 후보 목록도 새로 바뀐다. 하나씩 보면 분류 문제처럼 보이지만 그 선택이 다음 입력을 바꾼다. 이러한 판단을 이어 가는 동안 경로 전체가 만들어진다.",
            "links": []
          },
          {
            "type": "p",
            "text": "공식 비교에서 상대 모델은 대부분 비추론 모드였고 Astra는 가장 낮은 추론 설정이었다. 제작사는 영상 진행을 위한 조건이며 추론을 켰을 때보다 상대의 경로 선택이 불리할 수 있다고 설명한다. 두 번째와 세 번째 도전이 모두 Rubber Duck에서 출발한 것은 우연이라고도 덧붙인다. 이동 수와 시간을 비교할 때는 출발·목표에 더해 이런 추론 설정도 함께 기록해야 한다.",
            "links": []
          },
          {
            "type": "exercise",
            "question": "1,000개의 링크를 평가해 20개로 줄였는데, 목표에 이르는 경로의 첫 링크가 빠졌다. 마지막 선택 모델을 개선하면 이 경로를 찾을 수 있을까?",
            "answer": "그 요청에서는 해결할 수 없다. 최종 모델의 행동 공간에 해당 링크가 없기 때문이다. 후보 평가 기준을 바꾸거나 남기는 후보 수를 늘리는 등 첫 단계부터 수정해야 한다. 최종 선택 정확도와 후보 보존 여부를 따로 측정하면 어느 단계에서 경로를 잃었는지 알 수 있다."
          }
        ]
      }
    ],
    "refs": [
      {
        "label": "Choice primitive",
        "url": "https://docs.typesafe.ai/primitives/choice"
      }
    ],
    "leadLinks": []
  },
  "drone": {
    "minutes": 15,
    "title": "Jev 드론: 앞이 막혔는데 왜 올라가지 않을까?",
    "lead": "드론 앞을 낮은 장벽이 가로막았다. 좌우로는 빠져나갈 틈이 없지만 위로 넘을 수는 있다. 그런데 Jev는 처음에 상승을 고르지 않았다. 모델이 받은 정보에는 다섯 방향의 거리가 있었을 뿐 장벽의 높이가 없었다. 낮은 장벽과 높은 벽이 입력에서는 비슷하게 보였던 것이다. 이 사례는 필요한 정보를 빠뜨린 문제에서 출발해, 관측과 판단, 실제 기체 제어를 차례로 고쳐 가는 과정을 보여 준다.",
    "origin": {
      "label": "RomanSlack · jev-drone",
      "url": "https://github.com/RomanSlack/jev-drone/blob/main/README.md"
    },
    "sections": [
      {
        "id": "course",
        "title": "좌우 회피만으로 통과할 수 없는 장애물",
        "blocks": [
          {
            "type": "p",
            "text": "RomanSlack은 MuJoCo에서 움직이는 목표를 따라가는 드론을 만들었다. 코스에는 기둥 사이 통로, 낮은 보, 회전 장애물, 움직이는 문, 빽빽한 기둥이 있다. 이 중 낮은 보는 복도 전체를 가로막는다. 더 넓은 쪽으로 피하라는 규칙만 있으면 좌우 어느 쪽을 골라도 지나갈 수 없다. 이 장면에서는 길을 고르는 것에 앞서 위로 넘는 행동을 고려해야 한다.",
            "links": [
              {
                "text": "RomanSlack",
                "url": "https://github.com/RomanSlack/jev-drone"
              }
            ]
          },
          {
            "type": "p",
            "text": "README의 65초 실행에서 Jev를 끈 기준 제어기는 17.7m 부근에 머물렀고, Jev를 사용한 드론은 코스를 지나 77.5m까지 진행했다. 차이를 만든 행동은 낮은 보 위로 올라가는 것이었다. 앞선 단순 코스의 세 시드 비교에서는 양쪽 모두 통과하지 못한 기록도 있다. 따라서 이 결과는 모든 코스에 대한 성능보다, 해당 장애물에서 기존 좌우 회피만으로 할 수 없던 행동을 선택했다는 점부터 이해해야 한다.",
            "links": [
              {
                "text": "65초 실행",
                "url": "https://github.com/RomanSlack/jev-drone"
              },
              {
                "text": "README",
                "url": "https://github.com/RomanSlack/jev-drone"
              }
            ]
          },
          {
            "type": "source",
            "label": "다섯 구간과 실행 결과",
            "url": "https://github.com/RomanSlack/jev-drone/blob/main/README.md#the-course"
          },
          {
            "type": "table",
            "headers": [
              "65초 기록의 지표",
              "Jev 비활성 기준 제어기",
              "Jev 사용 실행"
            ],
            "rows": [
              [
                "최대 진행 거리",
                "17.7m / 17.7m / 17.7m",
                "77.5m"
              ],
              [
                "목표가 화면에 보인 비율",
                "약 19%",
                "82%"
              ],
              [
                "안전 반사에 머문 시간 비율",
                "65~71%",
                "9%"
              ],
              [
                "충돌",
                "세 실행 모두 0",
                "0"
              ]
            ]
          },
          {
            "type": "p",
            "text": "충돌 수가 0이라는 사실만 보면 두 방식 모두 잘 날았다고 생각하기 쉽다. 그러나 기준 제어기는 장벽 앞에서 안전 반사를 오래 유지하며 멈춰 있었다. 부딪히지 않는 것과 목표를 따라 계속 진행하는 것은 다른 결과다. Jev 실행은 약 47초에 코스를 벗어났으며 65초 기록 전체에서 80회 호출, 응답 중앙값 0.11초, 약 9만 6천 토큰을 사용했다.",
            "links": []
          },
          {
            "type": "p",
            "text": "원문의 실행은 낮은 보를 넘어 회전 장애물을 지나고, 옆으로 움직이는 3.2m 문을 통과한 뒤 두 번째 보를 넘는다. 이어 기둥 구간에서 목표를 놓쳤다가 출구에서 다시 찾는다. 마지막 과정에서는 장애물을 피하는 일만으로 충분하지 않다. 가려져 있던 동안에도 목표가 움직였으므로 다시 찾아 따라가야 원래 과제가 이어진다.",
            "links": []
          }
        ]
      },
      {
        "id": "architecture",
        "title": "판단 주기와 제어 주기",
        "blocks": [
          {
            "type": "p",
            "text": "상승을 선택해도 모터가 그 말 자체를 실행하지는 못한다. 기체가 원하는 높이와 자세를 따라가도록 추력과 회전량을 계속 계산해야 한다. 이 구현은 그 비행 제어를 500Hz로 수행하고, 가까운 장애물에 반응하는 유도·안전 코드는 50Hz로 돌린다. Jev의 판단은 약 2.5Hz다. 모델의 답을 기다리는 동안에도 기체를 안정시키고 근처 장애물에 대응할 코드가 따로 필요한 것이다.",
            "links": []
          },
          {
            "type": "table",
            "headers": [
              "층",
              "주기",
              "담당 작업"
            ],
            "rows": [
              [
                "기체 제어",
                "500Hz",
                "자세·추력·모터 혼합"
              ],
              [
                "유도와 안전 반사",
                "50Hz",
                "이동 목표와 가까운 장애물 처리"
              ],
              [
                "장면 구성",
                "15Hz",
                "깊이·세그멘테이션을 장면 특징으로 변환"
              ],
              [
                "Jev 전술 판단",
                "약 2.5Hz",
                "우회·상승·제동·재탐색 결정"
              ]
            ]
          },
          {
            "type": "diagram",
            "title": "느린 전술 판단을 빠른 제어 루프에 연결하기",
            "nodes": [
              {
                "id": "n0",
                "x": 20,
                "y": 55,
                "kind": "world",
                "title": "온보드 카메라",
                "lines": [
                  "깊이 · 세그멘테이션"
                ]
              },
              {
                "id": "n1",
                "x": 250,
                "y": 55,
                "kind": "code",
                "title": "기호화한 장면",
                "lines": [
                  "거리 구간 · 높이 · 목표"
                ]
              },
              {
                "id": "n2",
                "x": 480,
                "y": 55,
                "kind": "model",
                "title": "Jev 전술 판단",
                "lines": [
                  "기동 · 위험 · 목표 소실"
                ]
              },
              {
                "id": "n3",
                "x": 710,
                "y": 55,
                "kind": "code",
                "title": "최신 판단",
                "lines": [
                  "작업 스레드가 갱신"
                ]
              }
            ],
            "caption": "README의 4계층 구조. 최신 판단을 읽는 동안에도 비행 제어와 가까운 장애물에 대한 반사는 계속 실행된다.",
            "extra": true
          },
          {
            "type": "p",
            "text": "Jev에 주는 장면도 코드가 만든다. 카메라는 시뮬레이터의 깊이와 세그멘테이션 버퍼를 제공하고, NumPy 기반 처리가 이를 거리 구역, 장애물 높이, 목표 위치로 바꾼다. 범용 비전 모델이 영상에서 모든 사실을 추론하는 구성은 아니다. 기체는 MuJoCo Menagerie의 Skydio X2 모델이며 실제 하드웨어 비행이 아니라 물리 시뮬레이션이다. 무엇을 관측하고 무엇을 계산했는지 알아야 Jev가 해결한 판단의 범위를 알 수 있다.",
            "links": [
              {
                "text": "MuJoCo Menagerie",
                "url": "https://github.com/google-deepmind/mujoco_menagerie"
              },
              {
                "text": "Skydio X2",
                "url": "https://github.com/google-deepmind/mujoco_menagerie"
              }
            ]
          },
          {
            "type": "p",
            "text": "원래 장애물 코스에서 최종 안전 처리는 Jev의 답을 기다리지 않는다. 가까운 장애물이 나타나면 50Hz 안전 반사가 모델의 판단을 덮어쓸 수 있다. climb을 골랐어도 관측된 장애물 상단이 기체의 상승 한계 안에 있는지 코드가 확인한다. 모델이 높은 위험 점수를 줄 때까지 기다렸다가는 이미 가까운 물체에 부딪힐 수 있기 때문이다.",
            "links": []
          }
        ]
      },
      {
        "id": "height",
        "title": "상승을 판단하려면 높이가 필요하다",
        "blocks": [
          {
            "type": "p",
            "text": "앞쪽 다섯 방향의 거리가 모두 짧다는 정보로 무엇을 알 수 있을까? 좌우가 막혔다는 사실은 알 수 있지만, 낮은 장벽인지 천장까지 닿은 벽인지는 알 수 없다. 초기 입력에는 이 구분이 없었다. 제작자는 장애물 상단의 높이, 상단이 카메라에 보이는지, 기체가 도달할 수 있는 높이를 추가했다. 그러자 낮은 장벽 장면에서 climb의 확률이 0.93으로 나왔다. 상승할 수 있는 상황을 입력에서 구별할 수 있게 된 것이다.",
            "links": []
          },
          {
            "type": "code",
            "label": "AIRCRAFT: 비행 고도·상승 한계·속도",
            "lang": "python",
            "kind": "원본 코드",
            "code": "AIRCRAFT = {\n    \"type\": \"quadrotor, camera-only, no map and no GPS\",\n    \"cruise_altitude_m\": 1.6,\n    \"can_climb_to_m\": 3.0,\n    \"climb_takes_about_s\": 1.5,\n    \"top_speed_mps\": 3.6,\n    \"note\": \"All distances are from a forward camera. 25 m means nothing was detected.\",\n}",
            "start": 32,
            "source": "https://github.com/RomanSlack/jev-drone/blob/974b47378c14c6dcf7d11f7c813fba0f5f4d8b6a/tactics.py#L32-L39",
            "file": "tactics.py"
          },
          {
            "type": "p",
            "text": "장벽 높이만 추가해도 아직 정보가 하나 부족하다. 같은 2m 장애물 앞에서도 1m까지만 올라갈 수 있는 기체와 3m까지 올라갈 수 있는 기체는 다르게 행동해야 한다. 위 AIRCRAFT의 can_climb_to_m은 이 상승 한계를 제공한다. 장애물의 높이와 자신의 능력을 함께 알아야 “위로 넘는다”가 가능한 선택인지 판단할 수 있다.",
            "links": [
              {
                "text": "can_climb_to_m",
                "url": "https://github.com/RomanSlack/jev-drone/blob/974b47378c14c6dcf7d11f7c813fba0f5f4d8b6a/tactics.py#L32-L39"
              }
            ]
          }
        ]
      },
      {
        "id": "questions",
        "title": "잠시 가려진 목표와 놓친 목표",
        "blocks": [
          {
            "type": "p",
            "text": "목표가 기둥 뒤로 0.6초 동안 가려졌다고 하자. 곧 다시 보일 수 있으므로 바로 수색으로 전환하면 추적을 불필요하게 끊을 수 있다. 반면 열린 공간에서 여러 초 동안 보이지 않는다면 이전 방향만 계속 따라가기 어렵다. 이 차이를 묻는 질문이 target_truly_lost이며 Noul로 참일 확률을 받는다. 이동 방법을 고르는 maneuver와 따로 두어, 잠깐의 가림을 목표 소실과 구별한다.",
            "links": [
              {
                "text": "target_truly_lost",
                "url": "https://github.com/RomanSlack/jev-drone/blob/974b47378c14c6dcf7d11f7c813fba0f5f4d8b6a/tactics.py#L67-L88"
              },
              {
                "text": "maneuver",
                "url": "https://github.com/RomanSlack/jev-drone/blob/974b47378c14c6dcf7d11f7c813fba0f5f4d8b6a/tactics.py#L67-L88"
              },
              {
                "text": "Noul",
                "url": "https://docs.typesafe.ai/primitives/noul"
              }
            ]
          },
          {
            "type": "code",
            "label": "기동 Choice, 위험 Score, 목표 소실 Noul",
            "lang": "python",
            "kind": "원본 코드",
            "code": "QUESTIONS = {\n    \"maneuver\": Choice(\n        instructions={\n            \"role\": \"You are the tactical decision layer of an autonomous quadrotor.\",\n            \"mission\": MISSION,\n            \"ask\": \"Which single maneuver should the drone commit to right now?\",\n        },\n        criteria=MANEUVERS,\n    ),\n    \"risk\": Score(\n        instructions=\"How dangerous is the drone's immediate situation?\",\n        criteria=[\"clear and open\", \"tight but manageable\", \"about to hit something\"],\n    ),\n    \"target_truly_lost\": Noul(\n        instructions=(\n            \"Has the drone genuinely lost the rover? Judge from unseen_for_s: a fraction \"\n            \"of a second behind a pillar is a normal occlusion, several seconds of nothing \"\n            \"in an open scene means the chase line is stale.\"),\n        criteria={\"true\": \"Give up the remembered bearing and sweep to search.\",\n                  \"false\": \"Keep flying the last known bearing; it should reappear.\"},\n    ),\n}",
            "start": 67,
            "source": "https://github.com/RomanSlack/jev-drone/blob/974b47378c14c6dcf7d11f7c813fba0f5f4d8b6a/tactics.py#L67-L88",
            "file": "tactics.py"
          },
          {
            "type": "p",
            "text": "제작자가 구성한 짧은 가림 장면에서는 Choice의 확률이 여러 기동에 나뉘었지만 target_truly_lost는 0.12였다. 어느 기동이 나은지 애매해도 목표를 잃었다고 보지는 않은 것이다. 이 때문에 재탐색 여부에는 Noul을, 우회·상승·제동 선택에는 Choice를 사용한다. 별도의 위험 Score는 속도를 줄이는 데 쓴다. 판단을 나누면 애매한 기동 선택을 곧바로 목표 소실로 해석하지 않아도 된다.",
            "links": [
              {
                "text": "Choice",
                "url": "https://docs.typesafe.ai/primitives/choice"
              },
              {
                "text": "Score",
                "url": "https://docs.typesafe.ai/primitives/score"
              }
            ]
          },
          {
            "type": "table",
            "headers": [
              "제작자가 구성한 장면",
              "대표 응답"
            ],
            "rows": [
              [
                "낮은 장벽 · 다섯 방향 막힘",
                "climb 0.93 / risk 1.42"
              ],
              [
                "높은 기둥 · 오른쪽 열림",
                "gap_right 0.72 / risk 1.53"
              ],
              [
                "높은 기둥 · 왼쪽 열림",
                "gap_left 0.40 / risk 1.58"
              ],
              [
                "목표 7초 소실 · 열린 공간",
                "reacquire 0.96 / lost 0.85"
              ],
              [
                "가까운 높은 장애물로 둘러싸임",
                "brake 0.84 / risk 1.89"
              ],
              [
                "경로 열림 · 목표 정면",
                "hold_course 0.82 / risk 0.46"
              ],
              [
                "0.6초 가림 · 경로 열림",
                "Choice 분산, 최상위 약 0.24 / lost 0.12"
              ]
            ]
          },
          {
            "type": "p",
            "text": "표에서 같은 숫자처럼 보이는 값들도 의미가 다르다. risk 1.89는 위험 단계 위의 점수이며 충돌 확률 189%가 아니다. lost는 목표를 실제로 잃었는지에 대한 확률이다. Choice는 기동 후보 사이의 분포를 돌려준다. 이 세 값을 모두 같은 임계값으로 처리하면 서로 다른 질문의 답을 섞게 되므로, 실행 코드에서도 각각의 의미에 맞게 사용해야 한다.",
            "links": []
          }
        ]
      },
      {
        "id": "calls",
        "title": "호출 시점과 판단의 유효기간",
        "blocks": [
          {
            "type": "p",
            "text": "계속 날고 있다고 매 순간 새로운 전술 판단이 필요한 것은 아니다. 직전 판단으로 충분한 장면과 다시 물어야 할 장면을 구분하면 불필요한 호출을 줄일 수 있다. 다음 함수가 그 시점을 정한다."
          },
          {
            "type": "code",
            "label": "decision_needed: 호출 여부를 정하는 조건",
            "lang": "python",
            "kind": "원본 코드",
            "code": "def decision_needed(scene):\n    \"\"\"Code decides WHEN there is a judgment worth paying for. On an empty corridor\n    with the target in view there is nothing to decide, so we do not ask.\"\"\"\n    return (scene[\"nearest_obstacle_m\"] < THRESHOLDS[\"consult_within_m\"]\n            or scene[\"sectors_blocked\"] >= 1\n            or (scene[\"target\"][\"unseen_for_s\"] or 0.0) >= THRESHOLDS[\"consult_lost_s\"])\n\n\ndef build_state(scene):\n    \"\"\"Everything the model is allowed to know, and nothing it cannot observe.\"\"\"\n    return {\"mission\": MISSION, \"aircraft\": AIRCRAFT, \"observed\": scene}",
            "start": 91,
            "source": "https://github.com/RomanSlack/jev-drone/blob/974b47378c14c6dcf7d11f7c813fba0f5f4d8b6a/tactics.py#L91-L101",
            "file": "tactics.py"
          },
          {
            "type": "p",
            "text": "앞이 열려 있고 목표도 보이면 직전 행동을 계속해도 되는 경우가 많다. decision_needed는 장애물이 가까워지거나 일부 방향이 막히거나 목표가 일정 시간 보이지 않을 때 새 판단을 요청한다. 장면이 거의 같을 때는 이전 판단도 재사용한다. 단순히 일정한 속도로 호출하는 것보다 상황이 바뀌었는지를 먼저 확인하는 방식이다.",
            "links": [
              {
                "text": "decision_needed",
                "url": "https://github.com/RomanSlack/jev-drone/blob/974b47378c14c6dcf7d11f7c813fba0f5f4d8b6a/tactics.py#L91-L101"
              }
            ]
          },
          {
            "type": "code",
            "label": "read: 최근 판단과 관측 경과 시간",
            "lang": "python",
            "kind": "원본 코드",
            "code": "    def read(self, now):\n        with self._lock:\n            out = dict(self._latest)\n        out[\"age_s\"] = round(now - self._stamp, 2)\n        return out",
            "start": 171,
            "source": "https://github.com/RomanSlack/jev-drone/blob/974b47378c14c6dcf7d11f7c813fba0f5f4d8b6a/tactics.py#L171-L175",
            "file": "tactics.py"
          },
          {
            "type": "p",
            "text": "재사용할 답이 있다 해도 그것이 언제의 장면에 대한 답인지 알아야 한다. 왼쪽으로 피하라는 판단 뒤 장애물을 이미 지나쳤다면 같은 명령을 계속할 이유가 없다. read는 최근 판단에 age_s를 붙여 관측 이후 지난 시간을 함께 돌려준다. 제어기는 선택 내용뿐 아니라 그 판단이 얼마나 오래됐는지도 확인할 수 있다.",
            "links": [
              {
                "text": "read",
                "url": "https://github.com/RomanSlack/jev-drone/blob/974b47378c14c6dcf7d11f7c813fba0f5f4d8b6a/tactics.py#L171-L175"
              }
            ]
          }
        ]
      },
      {
        "id": "simulation-failures",
        "title": "판단이 맞아도 비행이 실패했던 이유",
        "blocks": [
          {
            "type": "p",
            "text": "장애물이 가까운데도 피하지 않는다면 모델이 위험을 과소평가했을까? 이 저장소의 시행착오 기록에는 모델에 장애물 정보가 제대로 도착하지 않은 경우가 먼저 나온다. MuJoCo의 znear와 zfar는 미터가 아니라 stat.extent에 대한 비율인데, 이를 잘못 해석해 약 1.93m 이내가 잘렸다. 안전 반사가 반응해야 할 물체가 관측에서 사라졌으므로 판단을 바꾸기 전에 센서 설정을 고쳐야 했다.",
            "links": [
              {
                "text": "시행착오 기록",
                "url": "https://github.com/RomanSlack/jev-drone"
              }
            ]
          },
          {
            "type": "p",
            "text": "관측이 있어도 방향을 잘못 연결하면 반대로 움직인다. +x를 보는 카메라에서 이미지 오른쪽은 월드 좌표의 -y다. 이 부호를 거꾸로 사용하자 목표 쪽으로 돌라는 제어가 목표에서 멀어지는 회전이 됐다. 카메라가 기체 내부에 있어 자기 몸을 장애물로 보는 문제도 있었고, 목표의 기둥과 몸체가 서로 다른 geom이어서 목표 일부를 피하는 문제도 있었다. 무엇을 보고 어느 방향이라고 해석하는지부터 바로잡아야 했다.",
            "links": []
          },
          {
            "type": "table",
            "headers": [
              "원문에서 발견한 문제",
              "수정의 의미"
            ],
            "rows": [
              [
                "기체 자신의 몸을 3.94m 장애물로 인식",
                "자기 기체 geom을 관측에서 제외"
              ],
              [
                "목표의 mast와 hull을 별개로 판단",
                "geom 하나가 아닌 body로 목표 구분"
              ],
              [
                "이미 넘은 장애물이 계속 반사를 유발",
                "기체 높이와 비교해 아래쪽 장애물 제거"
              ],
              [
                "양옆 벽도 전방 위험으로 계산해 문 진입 불가",
                "중앙 구역의 path_ahead_m과 주변 거리 분리"
              ],
              [
                "넓은 렌즈의 주변 물체를 충돌 위험으로 간주",
                "목표 추적 시야와 진행 방향의 위협 범위 분리"
              ],
              [
                "15Hz 관측의 오차를 50Hz로 반복 적용",
                "카메라 프레임마다 절대 목표값을 고정"
              ],
              [
                "시뮬레이션이 실제 시간보다 10배 빠름",
                "네트워크 판단이 따라올 수 있도록 실제 시간에 맞춤"
              ]
            ]
          },
          {
            "type": "p",
            "text": "마지막 시간 문제에서는 182번의 판단 요청 중 152번이 가득 찬 대기열에 막혔다. 시뮬레이션을 실제 시간보다 빠르게 돌려도 외부 API의 응답이 같은 비율로 빨라지지는 않는다. 물리 세계만 앞서가면 판단은 계속 뒤처진다. 실제 시간 제어를 시험하려면 시뮬레이션의 진행과 네트워크 응답이 같은 시간 기준에서 만나도록 해야 한다.",
            "links": []
          }
        ]
      },
      {
        "id": "control-failures",
        "title": "뒤집힘과 과도한 회피는 어디서 생기는가",
        "blocks": [
          {
            "type": "p",
            "text": "옆으로 피하라는 판단이 맞아도 그 방향으로 너무 급하게 가속하면 기체가 크게 기울 수 있다. 모터 명령의 음수 부분을 단순히 잘라 버리는 처리도 추력과 회전 토크의 비율을 바꾼다. 제작자는 추력을 우선하는 모터 혼합과 속도 명령의 변화율 제한을 적용해 최대 기울기를 84도에서 약 40도의 과도 응답으로 줄였다. 가능한 기동을 고르는 일에 더해 기체가 그 명령을 감당하도록 해야 했다.",
            "links": []
          },
          {
            "type": "p",
            "text": "거의 뒤집힌 기체가 돌아오지 않는 문제는 자세 오차를 계산하는 식에 있었다. 원래 회전 행렬 기반 오차는 sin(θ)에 비례한다. 90도에서는 크지만 180도에 가까워지면 다시 작아진다. 기체가 가장 크게 뒤집혔는데 복구를 위한 신호는 약해지는 것이다. 쿼터니언의 sin(θ/2) 형태로 바꾸면 이 구간에서도 큰 신호가 남는다. 저자는 179도에서 복구를 확인했고, 수정 후 진행 거리가 77m에서 88m로 늘었다고 기록했다.",
            "links": []
          },
          {
            "type": "code",
            "label": "뒤집힌 자세에서 두 오차 신호 비교",
            "lang": "python",
            "kind": "계산 예제",
            "code": "import math\nfor degrees in [0, 90, 179, 180]:\n    theta = math.radians(degrees)\n    print(degrees, round(math.sin(theta), 4),\n          round(math.sin(theta / 2), 4))"
          },
          {
            "type": "p",
            "text": "급강하에서도 실행 가능한 명령을 만들 필요가 있었다. 원하는 수직 가속도와 중력을 더한 값이 음수가 되자, 자세 계산은 추력축을 아래로 향하게 했다. 쿼드로터가 아래로 추력을 낼 수 있다고 취급한 결과 기체를 뒤집는 명령이 된 것이다. 수직 성분을 양수로 제한한 수정은 Jev의 선택이 아니라 그 선택을 물리적인 제어로 바꾸는 부분을 바로잡았다.",
            "links": []
          },
          {
            "type": "p",
            "text": "옆으로 피하는 명령을 언제 끝낼지도 중요하다. 속도만 정해 다음 판단까지 계속 유지하면 반대편 벽까지 밀려갈 수 있다. 제작자는 목표 위치를 따라가는 루프와 측면 위치 추정을 추가했다. 장애물이 시야를 가려 벽 측정이 끊겼을 때도 기체가 중앙으로 돌아왔다고 가정하지 않는다. 이전 위치에서 움직임을 적분하고 타당한 벽 관측으로 보정했으며, 기록된 위치 오차 중앙값은 약 0.07m였다.",
            "links": []
          },
          {
            "type": "p",
            "text": "목표가 사라졌을 때 마지막 카메라 방향만 기억하는 데도 한계가 있다. 기체가 회전하면 같은 화면 방향은 이전과 다른 월드 방향을 가리킨다. 그래서 방위·거리·기체 자세로 목표의 월드 위치를 추정하고 관측된 속도로 다음 위치를 예측한다. 원문은 위치 약 0.14m, 속도 약 0.12m/s의 오차를 보고했다. 속도는 약 1초 구간으로 계산했다. 0.07초의 카메라 한 간격만 차분하면 작은 픽셀 잡음이 큰 속도 오차로 확대되기 때문이다.",
            "links": []
          }
        ]
      },
      {
        "id": "budget",
        "title": "모델을 더 빠르게 만들면 해결될까?",
        "blocks": [
          {
            "type": "p",
            "text": "앞 코스에서 Jev는 안전 반사가 있는 상태에서 기동을 제안했다. 후속 tunnel.py는 다른 조건을 시험한다. 620m 터널에서 15개 장애물을 지나 차를 추적하며, 별도 안전 반사나 손으로 작성한 회피 규칙 없이 Jev만 항법 판단을 맡는다. 좌우 조향과 고도 변화의 강도를 두 Score 질문으로 받아 제어한다. 앞의 여섯 기동 Choice와 실험 조건, 출력의 뜻이 모두 다르다.",
            "links": [
              {
                "text": "Choice",
                "url": "https://docs.typesafe.ai/primitives/choice"
              },
              {
                "text": "Score",
                "url": "https://docs.typesafe.ai/primitives/score"
              }
            ]
          },
          {
            "type": "p",
            "text": "이 실험은 작업자를 여러 개 두어 초당 21개의 결정을 공급했다. 그런데 9m/s로 날던 기체가 옆으로 2m 이동하는 데는 약 0.70초가 걸렸다. 제작자가 나눈 반응 시간에서 모델의 몫은 약 13%, 기체 운동은 약 80%였다. 답을 더 자주 받는다고 기체가 같은 비율로 빨리 방향을 바꿀 수는 없었던 것이다.",
            "links": []
          },
          {
            "type": "p",
            "text": "터널 전체를 안정적으로 통과하는 데까지는 이르지 못했다. 회피를 오래 지속해 반대편 벽에 붙는 문제가 남았다. 낮은 장벽을 넘지 못한 초기 문제에는 높이 정보가 필요했지만, 이 실패에는 멈출 위치와 기체 반응 시간이 관여한다. 비슷한 충돌 장면이어도 앞에서 무엇이 잘못됐는지에 따라 수정할 곳이 달라진다.",
            "links": []
          },
          {
            "type": "source",
            "label": "터널 실험과 반응 시간 분석",
            "url": "https://github.com/RomanSlack/jev-drone/blob/main/README.md#the-tunnel-experiment-tunnelpy---partial"
          },
          {
            "type": "p",
            "text": "터널의 지연 중앙값은 0.118초, p90은 0.164초였으며 순차 호출의 한계는 약 7.4Hz였다. 4~6개 작업자를 겹쳐 약 2,000회 호출하는 동안 초당 21개 결정을 유지했다. 원문이 나눈 반응 시간은 인식 0.03초, Jev 0.118초, 판단의 경과 시간 0.024초, 옆으로 2m 이동하는 기체 운동 0.70초다. 마지막 항이 가장 크므로 요청을 더 겹치는 것만으로 회피를 끝낼 수는 없다.",
            "links": []
          },
          {
            "type": "p",
            "text": "최선의 실행에는 충돌 0회, 목표 가시율 94%라는 기록도 있다. 그러나 터널 전체를 안정적으로 통과한 결과는 아니므로 앞의 코스 완주와 구분해야 한다. 이 저장소에서는 입력에 높이를 추가한 수정, 카메라와 좌표를 고친 수정, 기체 제어를 바꾼 수정이 각각 다른 실패를 해결한다. 모델이 무엇을 골랐는지에 더해 그 전에 무엇을 보았고 그 뒤 기체가 어떻게 움직였는지를 함께 살펴야 한다.",
            "links": []
          },
          {
            "type": "exercise",
            "question": "안전 반사가 작동하는 시간이 줄었다면 비행이 나아졌다고 볼 수 있을까?",
            "answer": "아니다. 장애물을 잘 피해 반사가 덜 필요해진 것인지, 가까운 장애물이 관측에서 잘려 반사가 작동하지 않은 것인지 구분해야 한다. 진행 거리·충돌·목표 가시율과 함께 비교해야 한다. znear 오류는 같은 지표 감소가 전혀 다른 원인으로 생길 수 있음을 보여 준다."
          }
        ]
      }
    ],
    "refs": [
      {
        "label": "tactics.py",
        "url": "https://github.com/RomanSlack/jev-drone/blob/974b47378c14c6dcf7d11f7c813fba0f5f4d8b6a/tactics.py"
      },
      {
        "label": "후속 터널 · 관련 원문",
        "url": "https://github.com/RomanSlack/jev-drone"
      }
    ],
    "leadLinks": []
  },
  "robot-arm": {
    "minutes": 13,
    "title": "Jev로 로봇팔을 움직이기: 선택과 실행 사이의 문제",
    "lead": "로봇팔이 상자를 집지 못한다. AI가 엉뚱한 동작을 고른 탓일 수 있지만, 사람이 같은 메뉴에서 올바른 동작을 골라도 실패한다면 이야기가 달라진다. Control-derek의 SO-101 실험은 여기서 다시 출발했다. 먼저 고른 동작이 실제로 이루어지도록 팔의 제어를 고쳤다. 그다음 사진에서 알아낸 위치를 Jev에 어떻게 설명해야 하는지 시험했다. 선택이 틀린 경우와 선택대로 움직이지 못한 경우를 차례로 구분한 기록이다.",
    "origin": {
      "label": "Control-derek · What we learned",
      "url": "https://github.com/Control-derek/so101-jev/blob/main/docs/lessons.md"
    },
    "sections": [
      {
        "id": "failure",
        "title": "사람이 조종해도 실패했던 이유",
        "blocks": [
          {
            "type": "p",
            "text": "이전 시스템은 약 8일 동안 47번 실행했지만 상자를 한 번도 들어 올리지 못했다. 사람이 행동을 직접 골라도 결과는 같았다. 그러면 우선 모델 밖에서 원인을 찾아야 한다. 이동을 너무 작게 나눠 서보가 반응하지 않았고, 관절이 목표를 조금 벗어나도 실행을 중단했다. 후보를 여러 차례 걸러 내는 과정에서 상자 쪽으로 가는 행동이 목록에서 빠지기도 했다.",
            "links": []
          },
          {
            "type": "p",
            "text": "제작자는 먼저 팔을 펼치고 15mm나 40mm처럼 더 큰 이동을 사용했다. 목표에 덜 도달한 관절은 바깥쪽 보정 루프로 더 움직이게 했고, 그리퍼는 접촉 뒤 가볍게 잡도록 바꿨다. 이 메뉴에서는 사람이 첫 시도에 상자를 집었다. 사람이 성공할 수 있는 실행기를 갖춘 뒤에야 Jev가 어떤 선택을 하는지 따로 평가할 수 있었다.",
            "links": []
          },
          {
            "type": "source",
            "label": "실행 계층에서 무엇을 고쳤는가",
            "url": "https://github.com/Control-derek/so101-jev/blob/main/docs/lessons.md#1-the-execution-layer-has-to-work-before-you-can-judge-the-model"
          },
          {
            "type": "p",
            "text": "시간도 문제였다. 초기 상태는 약 17,000토큰이었고 한 단계에서 Jev를 3~4번 연쇄 호출했다. 비전 결과가 약 64초 전 장면인 경우도 있었다. 작은 판단 하나가 빨라도 오래된 사진에 여러 호출을 이어 붙이면 현재 팔과 상자의 관계를 따라가기 어렵다. 개선 후에는 단계당 약 1,000토큰의 한 번 호출로 줄였다.",
            "links": []
          },
          {
            "type": "p",
            "text": "아주 조금 움직이라는 명령이 왜 움직임을 만들지 못했을까? 서보에는 작은 목표 변화에 반응하지 않는 dead band가 있다. 접힌 자세에서 관절 한계에 걸린 채 역기구학으로 밀리미터 단위 손끝 이동을 요구하자 관절 변화가 약 0.5 정규화 단위에 머물렀다. “앞으로”를 반복해도 사진은 거의 그대로였다. 팔을 펼치고 15/40mm 동작을 사용한 것은 이 작은 명령이 묻히는 구간을 벗어나기 위한 수정이었다.",
            "links": []
          },
          {
            "type": "p",
            "text": "상자에 닿은 뒤 더 세게 쥔다고 항상 잘 잡히는 것도 아니다. 추가 압착 5단위에서는 부하가 27%에 올라 25% 과부하 보호가 작동했다. 2단위의 가벼운 압착과 부하를 15% 아래로 완화하는 처리로 바꾸자 상자를 유지할 수 있었다. 접촉 후에는 위치 목표뿐 아니라 힘과 부하도 실제 집기의 조건이 된다.",
            "links": []
          }
        ]
      },
      {
        "id": "loop",
        "title": "두 사진을 다음 이동에 필요한 값으로 바꾸기",
        "blocks": [
          {
            "type": "p",
            "text": "팔이 움직일 수 있게 됐다면 다음은 관측을 조작에 연결할 차례다. 이 구현은 사진에서 위치를 알아내는 단계와 그 위치를 보고 행동을 고르는 단계를 나눈다."
          },
          {
            "type": "diagram",
            "title": "원본 README의 관측–판단–실행 루프",
            "nodes": [
              {
                "id": "n0",
                "x": 20,
                "y": 55,
                "kind": "world",
                "title": "고정 + 손목 카메라",
                "lines": [
                  "두 장의 새로운 사진"
                ]
              },
              {
                "id": "n1",
                "x": 250,
                "y": 55,
                "kind": "vision",
                "title": "비전 모델",
                "lines": [
                  "목표까지의 위치 차이"
                ]
              },
              {
                "id": "n2",
                "x": 480,
                "y": 55,
                "kind": "model",
                "title": "Jev Choice",
                "lines": [
                  "다음 행동 하나"
                ]
              },
              {
                "id": "n3",
                "x": 710,
                "y": 55,
                "kind": "code",
                "title": "SO-101 실행",
                "lines": [
                  "이동 · 손목 · 그리퍼"
                ]
              }
            ],
            "caption": "두 카메라의 관측이 structured offsets로 바뀌고, Jev가 선택한 메뉴 항목을 로봇팔이 실행한다.",
            "extra": null
          },
          {
            "type": "p",
            "text": "사진에는 상자와 손끝이 보이지만 로봇을 움직이려면 어느 축으로 얼마나 옮길지 알아야 한다. 고정 카메라와 손목 카메라의 사진은 먼저 비전 모델로 들어가고, 손끝 목표까지의 차이가 forward, left, up으로 정리된다. Jev는 사진 대신 이 값에 작업 순서, 이동 규칙, 그리퍼 상태, 최근 행동을 함께 받는다. 아래 README 예시는 이때 비전 단계가 반환하는 정보다.",
            "links": [
              {
                "text": "forward",
                "url": "https://github.com/Control-derek/so101-jev/blob/main/README.md"
              },
              {
                "text": "README",
                "url": "https://github.com/Control-derek/so101-jev"
              }
            ]
          },
          {
            "type": "code",
            "label": "README의 비전 응답 형식",
            "lang": "json",
            "kind": "README 발췌",
            "code": "{\"stage\": \"grasp\",\n \"target_offset_cm\": {\"forward\": -0.1, \"left\": 0.4, \"up\": -1.3},\n \"carton_between_fingers\": true,\n \"carton_held\": false,\n \"description\": \"Carton centered between the open fingers, untouched.\"}",
            "source": "https://github.com/Control-derek/so101-jev/blob/main/README.md",
            "file": "README.md"
          },
          {
            "type": "p",
            "text": "예시에서 up이 -1.3이면 목표가 손끝보다 1.3cm 아래에 있다. 한편 carton_between_fingers가 참이어도 carton_held는 거짓일 수 있다. 상자가 손가락 사이에 들어온 것과 이미 잡힌 것은 다르기 때문이다. 앞의 상태라면 그리퍼를 닫을 때이고, 뒤의 상태가 확인돼야 들어 올릴 수 있다. 물체 위치와 접촉 상태를 나누어야 작업 순서를 정할 수 있다.",
            "links": [
              {
                "text": "carton_between_fingers",
                "url": "https://github.com/Control-derek/so101-jev/blob/main/README.md"
              },
              {
                "text": "carton_held",
                "url": "https://github.com/Control-derek/so101-jev/blob/main/README.md"
              }
            ]
          },
          {
            "type": "p",
            "text": "카메라 화면의 오른쪽이 곧 로봇의 오른쪽은 아니다. 이 때문에 좌표는 이미지의 오른쪽·아래 대신 로봇이 움직일 forward·left·up 축으로 전달된다. 고정 카메라는 전체 배치, 손목 카메라는 그리퍼 주변을 보여 준다. 원본 장치의 해상도는 각각 1920×1080과 640×480이며, SO-101 follower의 Feetech STS3215 서보를 LeRobot으로 보정했다. 장면 설정에는 화면에서 로봇 축이 나타나는 방향, 상자 크기, 준비 자세가 들어 있다.",
            "links": [
              {
                "text": "LeRobot",
                "url": "https://huggingface.co/docs/lerobot/so101"
              },
              {
                "text": "SO-101",
                "url": "https://huggingface.co/docs/lerobot/so101"
              },
              {
                "text": "원본 장치",
                "url": "https://github.com/Control-derek/so101-jev"
              }
            ]
          },
          {
            "type": "p",
            "text": "비전 응답을 얻는 경로는 두 가지다. API 모드는 사진 두 장을 멀티모달 엔드포인트로 보내고, mailbox 모드는 vision_request.json에 사진 경로를 남긴 뒤 vision.json을 기다린다. 후자에서는 모델과 사람이 같은 형식으로 답할 수 있다. 원문 실행은 강한 멀티모달 모델이 응답을 작성했다. 따라서 Jev의 선택을 평가할 때 그 앞에서 공간 위치를 추정한 비전 단계의 기여도 따로 보아야 한다.",
            "links": []
          }
        ]
      },
      {
        "id": "three-runs",
        "title": "문장으로 줄 때와 위치 차이로 줄 때",
        "blocks": [
          {
            "type": "p",
            "text": "실행기가 작동해도 모델이 관측을 잘못 해석하면 반대 방향으로 갈 수 있다. 제작자는 같은 작업에서 비전이 Jev에 넘기는 설명을 바꿔 세 번 실행했다. 다음 표는 무엇을 바꾸었는지 정리한 것이다."
          },
          {
            "type": "table",
            "headers": [
              "실행",
              "비전이 전달한 내용",
              "원문의 관찰"
            ],
            "rows": [
              [
                "1",
                "조작 조언이 섞인 문장",
                "성공했지만 Jev가 조언을 따라간 실행"
              ],
              [
                "2",
                "방향과 거리의 사실만 적은 문장",
                "앞의 상자를 두고 뒤로 네 번 이동하며 실패"
              ],
              [
                "3",
                "숫자 위치 차이 + 고정 규칙",
                "14단계, 6.5분에 성공"
              ]
            ]
          },
          {
            "type": "p",
            "text": "첫 실행은 성공했지만 입력에 이미 행동의 답이 들어 있었다. 비전 모델이 그리퍼를 열고 아래로 내리라는 조언까지 작성했기 때문이다. Jev가 공간 관계를 이해해 선택한 것인지, 받은 조언을 따른 것인지 알기 어려웠다. 두 번째 실행에서 조언을 빼고 사실만 문장으로 전달하자, 앞에 놓인 상자를 두고 뒤로 네 번 연속 움직였다.",
            "links": []
          },
          {
            "type": "p",
            "text": "세 번째는 위치 차이를 숫자로 전달하고 적용할 이동 규칙을 고정했다. 이 실행은 14단계, 6.5분에 성공했다. 별도의 오프라인 문제에서는 숫자와 규칙만 준 경우 10개 중 6개, 방향을 단어로 다시 쓰고 이동 크기까지 분류한 경우 13개 중 13개를 맞혔다. 모델을 교체하기보다 같은 공간 관계를 전달하는 방법을 바꾸어 얻은 결과다.",
            "links": [
              {
                "text": "오프라인 문제",
                "url": "https://github.com/Control-derek/so101-jev"
              },
              {
                "text": "14단계",
                "url": "https://github.com/Control-derek/so101-jev"
              }
            ]
          },
          {
            "type": "source",
            "label": "세 실행과 상태 표현 실험",
            "url": "https://github.com/Control-derek/so101-jev/blob/main/docs/lessons.md#2-jev-understands-procedure-not-spatial-language"
          },
          {
            "type": "p",
            "text": "첫 성공을 다른 실행과 구분하는 이유는 누가 다음 행동을 정했는지 확인하기 위해서다. “상자가 앞에 있다”는 관측이지만 “열고 내려서 닫아라”는 이미 절차를 결정한 조언이다. 후자를 Jev에 주면 조언을 메뉴 이름으로 옮기는 일만 남을 수 있다. 사실만 준 실행과 비교해야 비전 모델과 Jev가 각각 무엇을 해결했는지 드러난다.",
            "links": []
          },
          {
            "type": "p",
            "text": "오프라인 6/10과 13/13도 실제 로봇 성공률과 섞어서는 안 된다. 서로 다른 입력 표현과 문제 집합에서, 고정된 관측에 대해 규칙에 맞는 행동을 골랐는지 검사한 값이다. 실제 실행에는 카메라와 기구의 오차, 접촉, 물체의 움직임이 더해진다. 13/13을 실제 과제의 100% 성공으로 읽으면 이 차이가 사라진다. 두 검사를 구분하면 선택 전의 입력 문제와 선택 후의 실행 문제를 좁힐 수 있다.",
            "links": []
          }
        ]
      },
      {
        "id": "words",
        "title": "부호와 크기를 코드에서 해석해 주기",
        "blocks": [
          {
            "type": "p",
            "text": "목표가 앞에 있다는 사실을 숫자로 받았는데도 뒤로 움직였다면, 같은 사실을 더 분명하게 전달할 방법을 시험할 수 있다. 제작자는 좌표의 부호와 크기를 코드에서 먼저 해석해 방향 단어를 덧붙였다."
          },
          {
            "type": "code",
            "label": "offset_facts 안의 방향·크기 표현",
            "lang": "python",
            "kind": "원본 코드",
            "code": "    def word(v, pos, neg, tol):\n        if abs(v) <= tol:\n            return 'aligned'\n        size = '3 cm or more: large move' if abs(v) >= 3 else 'under 3 cm: small move'\n        return f'target is {abs(v):.1f} cm {pos if v > 0 else neg} ({size})'\n\n    return {'forward_back': word(f, 'FORWARD', 'BACK', 1.0),\n            'left_right': word(l, 'LEFT', 'RIGHT', 1.0),\n            'up_down': word(u, 'UP', 'DOWN', 1.0),\n            'horizontally_aligned': abs(f) <= 1.5 and abs(l) <= 1.5,\n            'at_target': abs(f) <= 1.0 and abs(l) <= 1.0 and abs(u) <= 1.0}",
            "start": 544,
            "source": "https://github.com/Control-derek/so101-jev/blob/621b235e272c9fd0f692945ff938e64c63ce8297/lean_runner.py#L544-L554",
            "file": "lean_runner.py"
          },
          {
            "type": "p",
            "text": "위 word 함수는 값의 부호를 방향 단어로 바꾼다. forward가 양수면 FORWARD, 음수면 BACK이다. 절댓값이 3cm 이상이면 큰 이동, 그보다 작으면 작은 이동으로 설명하고, 허용 오차 안이면 aligned로 표시한다. 부호와 크기를 해석하는 계산은 코드가 매번 같은 방식으로 처리할 수 있으므로 그 결과를 모델에 명시해 주는 것이다.",
            "links": [
              {
                "text": "word",
                "url": "https://github.com/Control-derek/so101-jev/blob/621b235e272c9fd0f692945ff938e64c63ce8297/lean_runner.py#L544-L554"
              }
            ]
          },
          {
            "type": "code",
            "label": "작업 절차·이동 규칙·위치 차이의 상태 표현",
            "lang": "python",
            "kind": "원본 코드",
            "code": "    return {\n        'task': TASK,\n        'procedure': PROCEDURE,\n        'movement_rule': MOVE_RULE,\n        'vision_stage': v.get('stage'),\n        'target_offset_cm': v.get('target_offset_cm'),\n        'target_offset_words': offset_facts(v.get('target_offset_cm')),\n        'carton_between_fingers': v.get('carton_between_fingers'),\n        'carton_held_per_vision': v.get('carton_held'),",
            "start": 559,
            "source": "https://github.com/Control-derek/so101-jev/blob/621b235e272c9fd0f692945ff938e64c63ce8297/lean_runner.py#L559-L567",
            "file": "lean_runner.py"
          },
          {
            "type": "p",
            "text": "target_offset_cm과 target_offset_words는 서로 다른 모델의 추정이 아니다. 같은 측정값을 숫자와 방향 단어로 두 번 표현한 것이다. 여기에 procedure와 movement_rule을 넣어 접근·집기·들기·놓기 중 현재 단계에 맞는 행동을 고르게 한다. 공간 표현의 부호를 읽는 부담을 줄이고, 여러 사실을 작업 순서에 맞춰 적용하는 판단을 남긴다.",
            "links": [
              {
                "text": "target_offset_words",
                "url": "https://github.com/Control-derek/so101-jev/blob/621b235e272c9fd0f692945ff938e64c63ce8297/lean_runner.py#L559-L567"
              },
              {
                "text": "target_offset_cm",
                "url": "https://github.com/Control-derek/so101-jev/blob/621b235e272c9fd0f692945ff938e64c63ce8297/lean_runner.py#L559-L567"
              },
              {
                "text": "movement_rule",
                "url": "https://github.com/Control-derek/so101-jev/blob/621b235e272c9fd0f692945ff938e64c63ce8297/lean_runner.py#L559-L567"
              },
              {
                "text": "procedure",
                "url": "https://github.com/Control-derek/so101-jev/blob/621b235e272c9fd0f692945ff938e64c63ce8297/lean_runner.py#L559-L567"
              }
            ]
          },
          {
            "type": "p",
            "text": "forward가 +4.0cm라면 앞으로 큰 이동이 필요하다고 표현하고, up이 -6.5cm라면 아래쪽이라고 표현한다. 그렇다고 두 값이 크다는 이유만으로 바로 내려가면 되는 것은 아니다. 아직 상자 위에 정렬하지 않았다면 수평 이동이 먼저일 수 있고, 이미 상자를 잡았다면 내려가는 목적도 달라진다. 숫자의 부호를 설명하는 계산을 끝내도 작업 단계에 맞는 행동 선택은 여전히 필요하다.",
            "links": []
          },
          {
            "type": "exercise",
            "question": "비전이 목표 위치를 4cm 잘못 추정했는데 Jev가 주어진 규칙에 맞는 행동을 골랐다면 어느 부분을 수정해야 할까?",
            "answer": "우선 비전의 좌표 변환과 장면 추정을 점검해야 한다. Jev가 잘못된 입력에 규칙대로 반응한 경우에는 선택 프롬프트를 바꾸어도 근본 원인이 남는다. 사진, target_offset_cm, 선택된 행동, 실행 후 관절 값과 사진을 한 단계씩 맞춰 보면 입력 오류와 판단 오류를 분리할 수 있다."
          }
        ]
      },
      {
        "id": "action",
        "title": "선택한 이름이 실제 동작이 되기까지",
        "blocks": [
          {
            "type": "p",
            "text": "선택한 이름이 실제 움직임으로 이어지려면 후보를 만들 때부터 실행할 동작과 짝지어야 한다. 다음 요청은 현재 메뉴의 설명을 Choice 후보로 사용한다."
          },
          {
            "type": "code",
            "label": "현재 행동 메뉴를 Choice의 criteria로 만드는 요청",
            "lang": "python",
            "kind": "원본 코드",
            "code": "    questions = {'next_action': {'type': 'choice', 'instructions': JEV_INSTRUCTIONS,\n                                 'criteria': {k: v['criteria'] for k, v in menu.items()}}}\n    body = {'model': JEV_MODEL, 'state': state, 'questions': questions, 'provider': {'allow_fallbacks': False}}",
            "start": 589,
            "source": "https://github.com/Control-derek/so101-jev/blob/621b235e272c9fd0f692945ff938e64c63ce8297/lean_runner.py#L589-L591",
            "file": "lean_runner.py"
          },
          {
            "type": "p",
            "text": "메뉴에는 행동 설명과 실행할 관절 목표가 함께 들어 있다. criteria는 그중 설명을 Jev에 보내고, 받은 키는 같은 메뉴에서 실행 항목을 찾는 데 쓴다. 기본 이동과 손목 회전, 그리퍼 조작뿐 아니라 완료된 단계에서는 done도 고를 수 있다. 모델의 답이 프로그램의 어느 동작을 뜻하는지 처음부터 연결해 둔 셈이다.",
            "links": [
              {
                "text": "criteria",
                "url": "https://github.com/Control-derek/so101-jev/blob/621b235e272c9fd0f692945ff938e64c63ce8297/lean_runner.py#L589-L591"
              }
            ]
          },
          {
            "type": "code",
            "label": "execute: 선택한 메뉴 항목의 실행",
            "lang": "python",
            "kind": "원본 코드",
            "code": "def execute(arm, kin, action_id, entry):\n    q_before = arm.read()\n    tip_before = kin.tip(q_before)\n    if entry['kind'] == 'close':\n        q_after = arm.close_gripper()\n    elif entry['kind'] == 'done':\n        return q_before, 'task finished'\n    else:\n        target = entry['target']\n        if action_id != 'open_gripper':\n            target = dict(target, gripper=arm.goal['gripper'])  # body moves keep the current grip\n        delta = max(abs(target[n] - q_before[n]) for n in BODY)\n        duration = entry['duration'] or float(np.clip(delta / 12, 1.2, 4.0))\n        q_after = arm.move(target, duration)",
            "start": 506,
            "source": "https://github.com/Control-derek/so101-jev/blob/621b235e272c9fd0f692945ff938e64c63ce8297/lean_runner.py#L506-L519",
            "file": "lean_runner.py"
          },
          {
            "type": "p",
            "text": "명령을 보냈다고 목표 위치에 도착하거나 상자를 잡았다고 단정할 수는 없다. 따라서 실행 뒤 관절 값을 다시 읽고 사진을 새로 찍는다. 다음 선택은 이 실제 결과에서 시작한다. 앞의 47번 실패와 이후 성공을 비교하면, 좋은 후보를 고르는 일에 앞서 그 후보가 실제로 가능한 동작을 가리켜야 함을 알 수 있다.",
            "links": [
              {
                "text": "47번 실패",
                "url": "https://github.com/Control-derek/so101-jev"
              }
            ]
          },
          {
            "type": "source",
            "label": "원본 프로젝트와 단계별 로그",
            "url": "https://github.com/Control-derek/so101-jev/blob/main/README.md"
          },
          {
            "type": "p",
            "text": "기본 메뉴는 16개 동작이며 완료 상태에서는 done이 추가될 수 있다. 수평 이동은 15/40mm, 상승은 15/40mm, 하강은 10/30mm로 나뉘고 손목 회전과 그리퍼 열기·닫기가 있다. 키와 설명, 실행 대상이 같은 메뉴 항목에 묶여 있으므로 응답을 다시 자연어로 해석할 필요 없이 해당 동작을 찾는다.",
            "links": []
          },
          {
            "type": "p",
            "text": "실제 관절이 목표를 덜 따라오면 외부 적분 루프로 보정하되 보정량을 ±10단위로 제한한다. 기하 모델도 완벽하지 않았다. 명목상 순기구학이 테이블 근처 높이를 약 1cm 높게 추정해 첫 잡기가 상자 위에서 빗나갔고, 한 번 더 10mm 내려서 잡았다. 긴 비전 대기 중에는 서보가 현재 목표 자세를 유지한다. 계산한 위치와 실제 접촉을 새 관측으로 맞춰 가는 과정이다.",
            "links": []
          },
          {
            "type": "p",
            "text": "이 구현은 관절 범위 제한과 서보 오류 처리는 있지만 별도의 소프트웨어 안전 게이트를 두지는 않았다. 제작자는 사람이 전원 스위치 옆에서 감독하는 조건으로 실행했다. 드론에서 50Hz 안전 반사가 독립적으로 Jev의 판단을 덮어쓰는 것과 다르다. 두 시스템을 비교할 때는 모델이 어떤 답을 내는지와 함께 그 답을 거부하거나 중단할 주체가 누구인지도 확인해야 한다.",
            "links": []
          },
          {
            "type": "p",
            "text": "단계별 기록에는 사진 두 장, 비전 응답, Jev 요청과 응답, 관절 값, 영상이 남는다. 덕분에 첫 성공의 비전 설명에 행동 조언이 섞였다는 사실도 찾을 수 있었다. 14단계 6.5분의 완료 시간에는 약 1초의 Jev 응답뿐 아니라 촬영, 비전 처리, 실제 이동과 대기가 포함된다. 모델 응답이 빠르다는 말과 물체를 빨리 옮겼다는 말을 구분하려면 이 전체 기록이 필요하다.",
            "links": [
              {
                "text": "14단계",
                "url": "https://github.com/Control-derek/so101-jev"
              }
            ]
          }
        ]
      }
    ],
    "refs": [
      {
        "label": "lean_runner.py",
        "url": "https://github.com/Control-derek/so101-jev/blob/621b235e272c9fd0f692945ff938e64c63ce8297/lean_runner.py"
      },
      {
        "label": "docs/lessons.md",
        "url": "https://github.com/Control-derek/so101-jev/blob/621b235e272c9fd0f692945ff938e64c63ce8297/docs/lessons.md"
      },
      {
        "label": "프로젝트 README",
        "url": "https://github.com/Control-derek/so101-jev/blob/main/README.md"
      }
    ],
    "leadLinks": [
      {
        "text": "Control-derek",
        "url": "https://github.com/Control-derek/so101-jev"
      },
      {
        "text": "SO-101",
        "url": "https://huggingface.co/docs/lerobot/so101"
      }
    ]
  }
};

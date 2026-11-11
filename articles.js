"use strict";
window.ATLAS_ARTICLES = {
  "pokemon": {
    "title": "포켓몬을 하는 두 Jev: 길의 선택과 모험의 진행",
    "lead": "상록시티 상점으로 가는 두 길이 있다. 풀밭을 가로지르면 빨리 도착하지만 야생 포켓몬과 싸울 수 있고, 풀밭을 피하면 안전한 대신 돌아가야 한다. 체력이 부족할 때는 돌아가는 길이 낫다. 그러나 다음 체육관에 도전하기에 레벨이 낮다면 그 전투가 오히려 필요하다. 2389 Research는 Jev가 풀밭을 피할지, 싸우며 갈지를 고르게 했다. Christian Mathiesen의 프로그램에서는 Jev가 이동할 곳과 전투 기술, 회복 시점까지 고르며 게임을 끝냈다.",
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
      },
      {
        "label": "완주한 실행 · 원문",
        "url": "https://github.com/christianmat/jev-pokemon"
      },
      {
        "label": "A/B 실행 · 원문",
        "url": "https://2389.ai/research/writing/jev-plays-pokemon/"
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
            "text": "포켓몬을 오래 진행하려면 눈앞의 이동뿐 아니라 여러 장소를 거치는 목표와 이미 끝낸 일을 기억해야 한다. 2389 Research의 Michael Sugimura는 이 장기 계획과 기억을 실험하던 시스템에 Jev를 추가했다. 기존 모델이 다음 목표와 목적지를 정하면, Jev는 그곳까지 어떻게 갈지를 고른다. 이 글에서 이동 정책은 최단 경로로 갈지, 풀밭을 피할지, 풀밭에서 훈련하며 갈지를 정하는 방침이다.",
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
            "text": "선택지는 세 가지다. 가장 짧은 길로 가거나, 풀밭을 피하거나, 일부러 풀밭을 지나며 경험치를 얻는다. 체력이 낮으면 풀밭을 피하고, 체력은 충분하지만 레벨이 낮으면 훈련하는 쪽을 고를 수 있다. 이때 필요한 답은 길게 작성한 이동 계획이 아니라 세 후보 중 하나의 이름이다. 저자는 큰 생성 모델을 매번 호출하거나 문장을 분류하는 BERT 기반 모델 같은 별도 분류기를 학습할 데이터를 먼저 모으지 않고도, Jev에 후보와 선택 기준을 주어 이런 문제를 풀 수 있다는 점에 주목했다. 게임 밖에서도 여러 모델 중 어느 모델에 요청을 보낼지 고르는 일이나 분류에 쓸 수 있다고 보았다.",
            "links": []
          },
          {
            "type": "p",
            "text": "Christian Mathiesen의 프로그램에서는 Jev가 이동 목적지뿐 아니라 전투 기술, 회복, 훈련, 대화 메뉴까지 선택한다. 2389와는 제작자와 코드가 다른 프로젝트다. 여기서는 2389의 이동 정책 실험을 A, Mathiesen의 완주 실험을 B로 부른다.",
            "links": [
              {
                "text": "Christian Mathiesen",
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
            "text": "A의 2026년 9월 18일 글은 더 긴 실행, 초반 지역 탐색, 체육관 전투를 다음 과제로 남겼다. B는 그다음 주인 9월 25~26일에 37시간 40분 동안 플레이해 게임을 끝냈다. A에서는 이동할 길을 고르는 과정을, B에서는 전투와 회복을 거듭하며 마지막 목표에 도달하는 과정을 다룬다.",
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
            "text": "오박사에게 소포를 전달하려면 무엇부터 해야 할까? 상점에서 소포를 받은 뒤 연구소로 돌아와야 한다. 하지만 이 목표만으로 지금 누를 방향키가 정해지지는 않는다. 2389는 목표를 정하는 일부터 버튼을 누르기까지를 세 단계로 나눴다. 상위 계획기는 “소포를 받는다”와 같은 퀘스트, 즉 수행할 과제를 정한다. 중간 계획기는 현재 지도에서 갈 좌표를 정한다. 하위 이동에서는 Jev가 이동 정책을 고르고 경로 탐색 코드가 한 칸씩 움직일 방향을 구한다.",
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
            "text": "다음 목표로 넘어가려면 지금 목표를 끝냈는지 확인해야 한다. 하위 프로그램이 상점에 도착했다고 보고해도 실제로는 상점 주변에 머물렀을 수 있다. 그래서 상위 계획기는 목표와 함께 검사할 완료 조건을 만든다. 원문의 대시보드에는 지도 번호 42로 이동하라는 목표와 on_map 조건이 나온다. 게임이 저장한 현재 지도 번호가 42인지 확인하는 것이다. 아이템을 얻는 목표라면 가방에 그 아이템이 있는지 검사한다.",
            "links": []
          },
          {
            "type": "p",
            "text": "게임은 실행 중인 정보를 메모리인 RAM에 보관한다. 현재 위치뿐 아니라 가방에 든 아이템의 종류와 수량도 여기에 있다. 다음 코드는 _bag_item_ids(emu)로 가방의 아이템 번호 목록을 읽고, 찾는 번호인 spec이 목록에 있는지 검사한다. has_item은 있으면 참, no_item은 없으면 참을 반환한다.",
            "links": []
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
            "text": "소포를 받은 뒤에는 가방에 소포가 있어야 하고, 전달한 뒤에는 없어야 한다. 공개 구현의 has_item과 no_item이 각각 이 검사를 맡는다. 하위 에이전트가 소포를 전달했다고 보고하더라도, RAM에서 읽은 가방에 소포의 아이템 ID가 남아 있으면 아직 완료한 것으로 처리하지 않는다.",
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
            "text": "현재 지도만 알아서는 소포를 누구에게 가져가야 하는지 알 수 없다. 상위 계획기는 게임 관련 자료를 모은 Orrery 지식베이스에서 초반 지역, 포켓몬 타입, 아이템 정보를 검색한다. 지금 어디에 있고 무엇을 가지고 있는지에 더해, 그 물건을 어디에 써야 하는지 알아야 다음 퀘스트를 정할 수 있기 때문이다.",
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
            "text": "원문에서는 상위 계획에 GLM, 중간 계획에 DeepSeek 4.1 Flash를 사용했으며 LunaRoute를 통해 호출했다. GLM은 퀘스트와 완료 조건을, DeepSeek은 현재 지도에서 갈 좌표를, Jev는 이동 정책을 정한다. 저자는 이처럼 각 층에서 주고받는 내용을 유지하면서 사용하는 모델을 바꿀 수 있다고 설명한다.",
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
            "text": "목적지가 정해져도 길을 찾으려면 어디가 막혀 있는지 알아야 한다. 이 구현은 게임보이의 동작을 컴퓨터에서 재현하는 PyBoy 에뮬레이터로 게임을 실행한다. 그 RAM을 읽어 현재 지도, 데리고 다니는 포켓몬 묶음인 파티, 아이템, 대화 상대인 NPC의 위치를 얻는다. 지도는 작은 칸인 타일로 나뉜다. 각 타일을 통과할 수 있는지 해독할 때는 게임의 기계어를 분석해 정리한 pokered 디스어셈블리 자료의 타일 목록도 사용한다. 화면에서 벽을 찾아내는 대신 게임이 저장한 지도와 충돌 정보를 읽는 방식이다.",
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
            "text": "그 정보를 빈칸과 벽으로만 표시하면 풀밭과 문을 구분할 수 없다. 풀밭은 걸을 수 있지만 전투가 생길 수 있고, 문은 다른 지도로 이어지며, 턱은 접근 방향에 따라 통과 여부가 달라진다. 이에 따라 지도는 길·벽·풀밭·물·문·턱을 구별하는 ASCII 문자로 표현한다. 그림을 그대로 보내는 대신, 각 칸이 길인지 벽인지 문자로 적어 만든 지도다.",
            "links": []
          },
          {
            "type": "p",
            "text": "지도는 갈 수 있는 곳을 보여 주지만 그중 어디로 가야 하는지는 알려 주지 않는다. 중간 계획기는 현재 퀘스트와 게임 상태, 최근 행동을 보고 다음 좌표를 고른다. 예를 들어 이미 소포를 받은 상태라면 상점으로 다시 가는 대신 돌아갈 길을 정해야 한다. 좌표가 정해진 뒤에는 그곳까지 빨리 갈지, 전투를 피할지와 같은 이동 정책을 Jev가 고른다.",
            "links": []
          },
          {
            "type": "p",
            "text": "원문의 대시보드는 이 흐름을 게임 화면 옆에 드러낸다. 재생 제어와 함께 현재 목표, 퀘스트 목록, 다음에 도착할 좌표인 웨이포인트가 따로 표시된다. 소포를 받는 장면만 보면 아이템 하나가 늘어난 사건이지만, 퀘스트 패널을 함께 보면 그 사건으로 어떤 단계가 끝났는지 알 수 있다.",
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
            "text": "목적지까지 가장 적게 걷기만 하면 된다면 이동 방향을 매번 모델에 물을 필요가 있을까? BFS는 너비 우선 탐색이라는 경로 탐색 방법이다. 시작점에서 한 칸으로 갈 수 있는 곳을 먼저 살피고, 그다음 두 칸, 세 칸 떨어진 곳을 살핀다. 각 칸의 이동 비용이 같다면 목적지에 처음 도달한 경로가 최단 경로다. 초기 구현은 BFS가 계산한 다음 방향을 힌트로 주면서, 이동할 때마다 다음 방향을 Jev에 다시 물었다.",
            "links": []
          },
          {
            "type": "p",
            "text": "두 입력을 비교한 실행에서 Jev의 선택은 BFS와 94% 일치했다. 대부분의 상황에서는 기존 계산을 그대로 따랐다는 뜻이다. 남은 6%가 더 좋은 선택인지는 이 숫자만으로 알 수 없다. 유리한 우회였을 수도 있고 불필요한 이동이었을 수도 있기 때문이다. 저자는 이 결과를 보고 이동 방향은 경로 탐색 코드로 정하고, Jev에는 풀밭을 피할지 전투를 하며 갈지를 묻기로 했다.",
            "links": [
              {
                "text": "94%",
                "url": "https://2389.ai/research/writing/jev-plays-pokemon/"
              }
            ]
          },
          {
            "type": "p",
            "text": "바뀐 질문은 “어느 방향으로 한 칸 갈 것인가”가 아니라 “풀밭을 피할 것인가, 싸우며 갈 것인가”였다. 체력이 낮으면 전투를 피해야 하고, 건강하지만 레벨이 부족하면 경험치를 얻어야 한다. Jev가 이 중 하나를 고르면, 코드는 풀밭을 지날 때의 비용을 바꾸어 길을 찾는다. 다음 절에서 같은 지도에 세 정책을 적용해 보면 경로가 어떻게 달라지는지 알 수 있다.",
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
            "text": "풀밭을 피할지 들어갈지는 같은 장소에서도 파티 상태에 따라 달라진다. 원문의 시연에서는 건강할 때 훈련을 택했다가 체력이 떨어지자 풀밭을 피하는 쪽으로 바뀐다. 세 정책의 이름은 shortest, dodge-grass, farm-exp다. 각각 최단 이동, 체력 보존을 위한 풀밭 회피, 경험치를 위한 풀밭 전투를 뜻한다. 이를 고르려면 체력뿐 아니라 훈련이 필요한 레벨인지, 주변에 풀밭이 있는지도 알아야 한다. 다음 코드는 그 정보를 state에 담고 세 후보를 criteria에 넣는다.",
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
            "text": "party_hp_frac는 파티에 남은 체력의 비율이고, party_level과 level_target_for_next_gym은 현재 레벨과 다음 체육관에 대비한 목표 레벨이다. objective와 area는 목적과 현재 지역, grass_on_this_map은 이번 지도에 풀밭이 있는지 알려 준다. 건강해도 목표 레벨을 이미 넘었다면 훈련할 필요가 줄어든다. 그렇다면 풀밭의 유무는 왜 알려 주어야 할까?",
            "links": []
          },
          {
            "type": "p",
            "text": "체력이 낮은 채 상점까지 가야 한다고 하자. 가는 길에 풀밭이 있다면 야생 포켓몬과 전투하다 쓰러질 수 있다. 이때 dodge-grass를 고르면 풀밭을 피해 가는 길을 찾는다. 그러나 이번 지도에 풀밭이 아예 없다면 피할 풀도 없다. 체력이 낮더라도 풀밭을 피하는 경로를 따로 찾을 필요가 없는 것이다."
          },
          {
            "type": "p",
            "text": "훈련도 마찬가지다. 경험치가 필요해서 farm-exp를 골라도, 지도에 풀밭이 없으면 풀밭을 지나며 야생 포켓몬을 만나는 경로를 만들 수 없다. 그래서 Jev에는 체력과 레벨뿐 아니라 풀밭이 있는지도 알려 준다. 아래 지시문은 풀이 없을 때 shortest를 고르도록 한다. 필요한 정보만 보낸다는 것은 이런 차이를 판단할 수 있도록 입력을 구성한다는 뜻이다."
          },
          {
            "type": "p",
            "text": "반대로 지도에 풀밭이 있다고 해서 정책을 바꿀 때마다 경로가 달라지는 것은 아니다. 풀이 목적지로 가는 길과 동떨어져 있거나, 통과 가능한 길이 하나뿐이라면 같은 경로가 나올 수 있다. 풀밭의 유무는 정책 선택에 필요한 정보이고, 실제로 어느 길을 갈지는 지도와 목적지를 받은 경로 탐색 코드가 계산한다."
          },
          {
            "type": "p",
            "text": "이어지는 instructions는 이런 조건에 따라 무엇을 고를지 지시한다. 응답에서는 pol이라는 질문의 choice를 꺼내고, 후보에 없는 값이면 shortest를 사용한다. confidence도 함께 반환한다."
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
            "text": "선택한 정책을 실제 길에 반영하려면 칸마다 비용을 붙이면 된다. 여기서 비용은 돈이나 실제 체력 소모량이 아니라, 길을 비교하기 위해 코드가 정한 점수다. 경로에 포함된 칸들의 비용을 더해 합이 작은 길을 고른다. tile_cost는 shortest에서 모든 칸에 1을, dodge-grass에서 풀밭에 12와 일반 길에 1을, farm-exp에서 풀밭에 1과 일반 길에 4를 부과한다. 이렇게 칸마다 비용이 다를 때는 누적 비용이 작은 경로부터 찾는 Dijkstra, 즉 다익스트라 탐색을 사용한다. 모든 비용이 1이면 BFS와 마찬가지로 가장 적은 칸을 지나는 길을 찾는다.",
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
            "text": "A 경로에 풀밭 3칸과 일반 길 3칸이 있고 B 경로에 일반 길 9칸이 있다고 하자. shortest에서는 A가 6, B가 9이므로 A가 짧다. dodge-grass에서는 A의 풀밭 비용이 커져 39가 되므로 비용 9의 B가 선택된다. farm-exp에서는 A가 15, B가 36이 되어 A가 다시 유리해진다. Jev는 정책 이름 하나를 골랐지만, 실제 이동 경로는 그 이름에 따라 코드가 다시 계산한다.",
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
            "text": "farm-exp를 골랐다고 목적지에 도착할 때까지 원하는 레벨에 도달하는 것은 아니다. 훈련하려면 풀밭을 오가는 이동을 반복하고 경험치를 확인하다가 충분히 성장했을 때 그만두어야 한다. 원문이 설명한 훈련 플레이에는 이 반복이 포함된다. tile_cost는 풀밭을 우선해서 지나도록 각 구간의 경로를 정하는 데 쓰인다.",
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
            "text": "저자는 이동 방향을 묻던 버전에서, Jev에 보내는 지도 정보를 줄여 보았다. 한쪽에는 중간 계획기가 받는 전체 상태를 주고, 다른 쪽에는 다음 방향을 정하는 데 필요한 최소 상태만 주었다. 풀밭 회피나 훈련 정책을 고르도록 바꾸기 전의 비교다. 표의 토큰은 모델이 입력을 처리할 때 나누는 작은 텍스트 단위다. 글자 수나 단어 수와 같지는 않지만, 처리하는 입력의 양과 요금을 계산하는 데 사용한다.",
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
            "text": "두 입력의 BFS 일치율은 모두 94%였지만 토큰 수는 1,324와 601이었다. 전체 상태가 약 2.2배를 사용했고, 최소 상태에서는 723토큰, 약 54.6%를 줄일 수 있었다. confidence도 0.82에서 0.87로 조금 높아졌다. 지도 정보를 더 많이 보낸 쪽에서도 BFS와 다른 방향을 고른 비율은 줄지 않았다.",
            "links": [
              {
                "text": "confidence",
                "url": "https://docs.typesafe.ai/confidence"
              }
            ]
          },
          {
            "type": "p",
            "text": "정책 선택으로 옮긴 뒤에도 같은 원리를 적용했다. 중간 계획기가 이미 목적지를 정했으므로 Jev가 지도 전체에서 목적지를 다시 찾을 필요는 적다. 대신 파티 체력, 목표 대비 레벨, 주변 풀밭처럼 정책을 바꾸는 정보가 남는다. 이 최종 호출은 423토큰을 사용했다. 앞의 601토큰은 방향을 고르면서 두 입력을 비교한 실험이고 423토큰은 정책 선택의 요청이므로, 두 숫자의 차이에는 문맥 축소와 질문 변경이 함께 반영돼 있다.",
            "links": []
          },
          {
            "type": "exercise",
            "question": "지도를 줄여서 보내더라도 주변에 풀밭이 있는지는 왜 알려 주어야 할까?",
            "answer": "체력이 낮은 채 상점으로 간다고 하자. 도중에 풀밭을 지날 수 있다면 dodge-grass로 야생 포켓몬과의 전투를 피하는 길을 찾을 수 있다. 그러나 지도에 풀밭이 없다면 피할 풀이 없으므로 shortest로 가면 된다. 경험치가 필요해도 풀이 없으면 farm-exp로 풀밭 전투를 유도할 수 없다. 체력과 레벨만으로는 이 차이를 알 수 없으므로 풀밭의 유무도 입력에 남겨야 한다. 단, 풀밭이 있더라도 통과 가능한 길이 하나뿐이라면 정책을 바꾸어도 경로는 같을 수 있다."
          }
        ]
      },
      {
        "id": "cost",
        "title": "159ms가 전체 플레이 속도를 뜻하지는 않는다",
        "blocks": [
          {
            "type": "p",
            "text": "작은 판단을 분리했을 때의 이득을 보려면 한 번의 비용과 호출 빈도를 함께 계산해야 한다. 정책 선택 요청은 약 423토큰을 사용했고 응답 중앙값은 159ms, 관측 범위는 146~540ms였다. 중앙값은 측정한 시간을 작은 순서로 늘어놓았을 때 가운데에 오는 값이다. 159ms는 0.159초이며, 모든 요청이 그 시간 안에 끝났다는 뜻은 아니다. 원문 당시 입력 요금인 백만 토큰당 0.042달러를 적용하면 한 번에 약 0.0000178달러, 반올림하면 0.00002달러다. 출력 토큰에는 요금이 없었다.",
            "links": [
              {
                "text": "정책 선택 요청",
                "url": "https://2389.ai/research/writing/jev-plays-pokemon/"
              }
            ]
          },
          {
            "type": "p",
            "text": "이 판단은 이동할 때마다 실행되지 않았다. 게임에서는 분당 약 25번 이동했고 Jev는 약 20번 이동할 때마다 호출됐다. 따라서 분당 1.25회이며 원문의 표현으로는 약 1.3회다. 이 빈도에서 비용은 시간당 약 0.0013~0.0014달러다. 같은 423토큰 요청을 초당 10번 보낸다고 가정하면 약 0.64달러/시간이 된다. 이는 포켓몬 요청의 호출 빈도만 바꾼 계산이며 DOOM의 실제 요청 비용을 뜻하지 않는다.",
            "links": []
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
            "text": "저자는 중간 계층의 생성 모델에도 같은 수준의 선택을 맡겨 비교했다. 62토큰의 작은 프롬프트에서도 응답 중앙값이 418ms였고 출력 토큰 요금도 있었다. 정책 선택을 Jev가 맡으면 이런 선택을 할 때마다 큰 생성 모델의 응답을 기다리지 않아도 된다.",
            "links": []
          },
          {
            "type": "p",
            "text": "그런데 전체 플레이에서는 한 번 이동하는 데 2.38초가 걸렸다. 저자는 이 시간의 대부분을 중간 계층 모델 호출이 차지한다고 설명한다. 20번 이동할 때 한 번 실행되는 159ms짜리 판단을 줄여도, 이동할 때마다 기다리는 시간이 크게 줄지는 않는다. 이 실행의 이동 속도를 높이려면 먼저 중간 계층 모델을 기다리는 시간을 줄여야 한다.",
            "links": []
          }
        ]
      },
      {
        "id": "uncertainty",
        "title": "어느 정책을 골라야 할지 애매할 때",
        "blocks": [
          {
            "type": "p",
            "text": "훈련을 골랐다는 답만 기록하면 다른 정책과 얼마나 차이를 두고 골랐는지 알 수 없다. Jev는 후보별 확률과 그 분포에서 계산한 confidence도 반환한다. 원문은 이와 함께 calibrated probabilities, 즉 실제 결과의 빈도와 맞도록 보정한 확률을 강조한다. 예를 들어 80% 정도로 예측한 선택들을 모으면 실제로 적절했던 선택도 비슷한 비율이어야 한다. 한 요청의 confidence가 높다는 것과 여러 요청에서 확률 보정이 잘됐다는 것은 별개다. Jev가 설명문을 생성하지 않는 System One 모델이라는 사실만으로 새로운 게임에서의 보정 성능까지 알 수는 없다.",
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
            "text": "저자는 Jev가 정책을 확실하게 고르지 못할 때 중간 계층 모델에 다시 묻는 방식을 후속 과제로 제안했다. 평소에는 Jev가 고르고, 애매할 때만 더 넓은 게임 상태를 받는 모델을 호출하자는 것이다. 이 글의 실행에서는 아직 그 방식을 평가하지 않았다.",
            "links": []
          },
          {
            "type": "p",
            "text": "이를 구현하려면 어느 confidence에서 다시 물을지 정해야 한다. 수치가 낮아도 적절한 정책을 고른 장면이 있는 반면, 높은 수치로 위험한 풀밭에 들어가는 장면도 있을 수 있다. 퀘스트가 얼마나 진행됐는지와 함께 이런 장면을 기록하면 다시 물어볼 기준을 조정할 수 있다. 정책을 얼마나 오래 유지할지, 중간 계층 모델을 몇 번 호출할지도 함께 시험할 항목이다.",
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
            "text": "풀밭을 피할지만 골라서는 게임 전체를 끝낼 수 없다. 체육관 도전 전에 훈련할지, 체력이 떨어지면 회복할지, 전투에서 어떤 기술을 쓸지도 정해야 한다. Mathiesen의 구현에서는 Jev가 이런 활동도 고른다. 포획 대상, 포켓몬을 보관하는 게임 속 PC에서 교체할 파티, 대화할 NPC, 구매할 물건, YES/NO 메뉴와 새 기술을 배우거나 잊는 선택도 다룬다.",
            "links": [
              {
                "text": "Mathiesen의 구현",
                "url": "https://github.com/christianmat/jev-pokemon"
              }
            ]
          },
          {
            "type": "p",
            "text": "프로그램은 먼저 지금 할 수 있는 행동을 후보로 만든다. 자바스크립트를 실행하는 Node 환경에서 Game Boy 에뮬레이터를 구동하고, RAM에서 상태를 읽는다. 코드가 후보마다 타입 간 유불리인 상성, 예상 피해량, 목표까지의 거리를 계산해 붙인다. Jev가 이동할 대상을 고르면 A*가 그곳까지 길을 찾는다. A*는 현재까지 온 거리와 목적지까지 남은 거리의 추정치를 함께 써서 유망한 길부터 살피는 탐색 방법이다. 메뉴를 골랐다면 해당 메뉴를 누르는 버튼 입력을 실행한다. 진행은 이런 조작으로 이루어지며 RAM의 값을 직접 고쳐 게임을 넘기지는 않는다.",
            "links": []
          },
          {
            "type": "p",
            "text": "다음 목표는 스토리 마일스톤에서 가져온다. 마일스톤은 소포 전달이나 체육관 승리처럼 미리 정리한 주요 진행 단계다. 게임 내부에는 사건을 완료했는지 표시하는 값, 즉 이벤트 플래그가 있다. 프로그램은 이 값을 확인해 다음 단계로 넘어간다."
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
            "text": "같은 NPC에게 계속 말을 걸어도 진행되지 않는 경우가 있다. 코드는 이런 후보에 이전 시도를 표시하고, 탐험할 때는 답을 고르는 방식도 바꾼다. 아래 코드의 explore가 참이면 최고 확률의 후보만 고정해서 쓰지 않고, 후보별 확률을 조정한 뒤 sample로 하나를 뽑는다. 낮은 확률의 다른 행동도 시도할 기회를 주는 것이다. 같은 입력의 이전 답을 저장해 재사용하는 캐시도 탐험에서는 건너뛴다. 그래도 막히면 최근 마일스톤의 저장 상태를 다시 불러온다.",
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
            "text": "반복 감지에는 현재 목적도 필요하다. 훈련이나 포획 중에는 같은 풀밭에 오래 머무르는 것이 정상일 수 있다. 이를 위치 변화만으로 판단하면 필요한 훈련까지 중단시킨다. 그래서 훈련·포획 목표에서는 경험치 증가도 진행으로 인정한다. 같은 풀밭을 오가더라도 경험치가 늘고 있다면 훈련을 계속한다.",
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
            "text": "B의 2026년 9월 25~26일 기록에는 마지막 목표에 도달할 때까지 걸린 시간과 호출 비용, 실패한 뒤 다시 도전한 과정이 남아 있다.",
            "links": []
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
            "text": "B는 여러 번 실패한 뒤 회복하고 훈련해 다시 도전했다. 위 기록은 그 전체 실행의 시간과 비용이다. A의 159ms·423토큰은 경로 정책 하나를 고른 요청이다. B의 약 0.4초는 다양한 행동을 고른 요청의 응답 시간 중앙값이고, 총 3,920만 토큰은 완주할 때까지 사용한 양이다.",
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
            "text": "A에서는 생성 모델이 목적지를 정하고 Jev가 풀밭을 피할지 싸우며 갈지를 고른다. 한 칸씩 이동할 방향은 경로 탐색 코드가 계산한다. B에서는 Jev가 다음에 찾아갈 사람과 전투 기술, 회복이나 훈련 여부도 고른다. 코드는 가능한 후보를 만들어 주고, 답을 받으면 길을 찾아 움직이거나 메뉴를 조작한다. 같은 행동을 반복해도 진행되지 않으면 다른 후보를 시도하고, 필요하면 저장된 마일스톤부터 다시 시작한다.",
            "links": []
          },
          {
            "type": "exercise",
            "question": "체력은 낮고 레벨도 부족하다. 풀밭을 피하면 체육관 준비가 늦어지고, 훈련하면 전멸할 수 있다. 어느 계획을 바꾸어야 이 문제를 풀 수 있을까?",
            "answer": "목적지가 체육관으로 고정돼 있다면 Jev는 가는 길의 풀밭을 피하는 dodge-grass를 고를 수 있을 뿐이다. 회복하려면 상위·중간 계획기가 목적지를 포켓몬센터로 바꾸어야 한다. 먼저 회복한 뒤 풀밭에서 훈련하고 다시 체육관으로 가도록 목표를 정하면 된다. 이동 정책을 아무리 바꾸어도, 주어진 목적지 자체는 Jev가 바꿀 수 없는 구조다."
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
    "lead": "팩맨은 미로에서 먹이를 모으며 유령을 피하는 게임이다. 갈림길에 도착했는데 AI의 답이 아직 오지 않았다면, 멈춰 기다릴지 그대로 갈지부터 정해야 한다. 그런데 복도에 들어선 순간 다음 갈림길이 어디인지는 이미 알 수 있다. JevMan은 팩맨이 복도를 지나는 동안 다음 방향을 미리 묻는다. 답이 늦으면 갈림길에서 기다리고, 너무 오래 기다리면 코드가 대신 방향을 고른다.",
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
            "text": "갈림길에서는 여러 방향 가운데 하나를 골라야 하지만, 그곳까지 이어진 복도에서는 계속 앞으로 가면 되는 경우가 많다. JevMan은 팩맨이 이 복도를 지나는 동안 다음 갈림길의 후보를 Jev에 보낸다. 최대 세 요청을 동시에 처리할 수 있으므로 한 요청이 끝날 때까지 모든 판단을 멈출 필요도 없다. 응답 자체가 빨라지는 것은 아니지만, 이동과 기다림을 겹쳐 실제로 멈추는 시간을 줄일 수 있다.",
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
            "text": "미리 물어봤는데도 답보다 팩맨이 먼저 도착할 수 있다. 그때는 갈림길에서 기다리며, 2초가 지나거나 오류가 나면 greedy 규칙으로 방향을 고른다. 여기서 greedy는 현재 보이는 상황에서 유리한 방향을 곧바로 택하는 간단한 규칙이다. 이 규칙이 있으므로 모델이 응답하지 않아도 게임을 계속할 수 있다.",
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
            "text": "다음 갈림길까지 12칸이 남았고 팩맨이 초당 6칸을 움직인다고 하자. 도착까지 2초가 있으므로 0.3초 걸리는 판단은 이동 중에 끝난다. 갈림길에 도착해서 물었다면 그 0.3초 동안 멈춰야 한다. 이동을 시작할 때 물으면 2초의 이동 시간 안에 답을 받아 둘 수 있다.",
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
            "text": "그러나 일찍 보낸 요청에는 일찍 관측한 상태가 들어 있다. 답이 오는 동안 유령이 복도로 들어오면, 미리 고른 다음 방향이 적절해도 갈림길까지 가는 길 자체가 위험해질 수 있다. 그래서 복도 중간의 위험에는 pacman_escape라는 별도 질문을 둔다. 이 질문으로 복도에서 바로 뒤돌아설지 정한다.",
            "links": []
          },
          {
            "type": "p",
            "text": "코드의 첫 출력은 0.3, 0이다. 판단에 0.3초가 걸려도 이동하는 2초 안에 끝나므로 갈림길에서 기다릴 시간은 0초다. 두 번째 출력은 2.4, 0.4다. 판단에 2.4초가 걸리면 갈림길에 도착한 뒤 0.4초 더 기다린다. 앞서 설명한 2초 제한은 요청을 보낸 순간이 아니라 갈림길에 도착한 뒤의 대기 시간에 적용된다. 요청 여러 개를 함께 처리할 때는 돌아온 답을 원래 물었던 갈림길에 연결해야 한다.",
            "links": []
          },
          {
            "type": "p",
            "text": "예를 들어 첫 요청은 갈림길 A, 두 번째 요청은 갈림길 B에 관한 것이라고 하자. B의 답이 먼저 왔다고 A에서 그 방향을 실행해서는 안 된다. “오른쪽”이라는 답에는 어느 갈림길에서 오른쪽인지가 붙어 있어야 한다. 요청을 보낼 때 저장한 갈림길과 후보를 응답에 연결하는 이유다."
          }
        ]
      },
      {
        "id": "features",
        "title": "좌표만으로는 부족한 이유",
        "blocks": [
          {
            "type": "p",
            "text": "유령이 가깝다고 반드시 그쪽 길이 위험한 것은 아니다. 바로 옆에서도 멀어지는 중일 수 있다. 반대로 아직 멀리 있는 유령이 팩맨보다 먼저 출구에 도착하면 복도에 갇힐 수 있다. 그래서 이 구현은 좌표만 전달하지 않고, 방향별 먹이와 유령의 접근 여부, 갈림길에 도착하는 데 걸리는 시간을 계산한다. ",
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
            "text": "이 코드는 팩맨과 유령 가운데 누가 갈림길에 먼저 도착할지 비교한다. 팩맨이 이동해야 할 칸 수가 junctionSteps이고, 유령 쪽의 값이 steps다. 유령이 먼저 길을 막는 상황이면 후보 설명에 TRAP을 붙인다. Jev는 이 표시를 보고 먹이가 많은 길이라도 유령에게 막힐 수 있음을 알 수 있다.",
            "links": []
          },
          {
            "type": "p",
            "text": "미로의 작은 먹이 외에 보너스 점수를 주는 과일도 등장한다. 과일은 계속 남아 있지 않으므로 보였다고 무조건 찾아가서는 안 된다. 소스 주석에 따르면 거리 정보만 주었을 때 Jev는 과일을 놓치는 경우가 많았다. 이후 코드는 제시간에 안전하게 도달할 수 있는 길을 FRUIT로 표시하고, 과일 하나의 점수가 작은 먹이 몇 개에 해당하는지도 알려 준다.",
            "links": []
          },
          {
            "type": "p",
            "text": "팩맨은 갈림길까지 8칸, 유령은 같은 갈림길까지 3칸 남았다고 하자. 속도가 같다면 유령이 먼저 도착한다. 현재 둘 사이의 거리만 보고 안전하다고 판단하면 출구에서 막힐 수 있다. 반대로 가까운 유령이 다른 쪽으로 가고 있다면 당장 같은 위험은 아니다. 코드는 두 캐릭터가 도착할 순서와 유령의 이동 방향을 후보 설명에 붙인다.",
            "links": []
          },
          {
            "type": "p",
            "text": "미로와 이동 규칙을 아는 게임 코드가 거리와 도착 순서를 계산한다. Jev는 이 계산값을 받아 먹이가 많은 길로 갈지, 과일을 노릴지, 유령을 피해 다른 길로 갈지 고른다. 같은 Jev를 쓰더라도 TRAP이나 FRUIT 설명을 빼면 다른 방향을 고를 수 있다.",
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
            "text": "팩맨과 유령은 같은 미로에 있어도 서로 다른 목적을 가진다. 팩맨은 먹이를 모으고 유령을 피해야 하며, 유령은 팩맨을 잡아야 한다. 아래 코드는 같은 게임 상태에 캐릭터별 질문을 붙여 한 요청으로 보낸다.",
            "links": []
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
            "text": "팩맨이 큰 먹이인 파워 펠릿을 먹으면 잠시 유령을 잡을 수 있으므로, 이때는 유령이 도망쳐야 한다. instructionsFor는 이런 역할과 현재 상황에 맞는 지시를 만든다. criteriaFor는 해당 캐릭터가 갈 수 있는 방향을 후보로 만든다. buildRequest는 이들을 질문 이름과 짝지어 questions에 넣고, summarizeState가 요약한 게임 상태와 함께 보낸다.",
            "links": [
              {
                "text": "buildRequest",
                "url": "https://github.com/opper-ai/jevman-benchmark/blob/465dc0fa40e4db42bda84a4dd091433c8f28bbb7/src/brain.ts#L203-L213"
              }
            ]
          },
          {
            "type": "p",
            "text": "팩맨이 복도를 지나는 도중 유령이 들어오면 다음 갈림길까지 그대로 가서는 안 될 수 있다. pacman_escape는 이때 계속 갈지 즉시 돌아설지를 묻는다. 갈림길에서 방향을 고르는 일반 이동 질문과 별도로 호출한다.",
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
            "text": "한 요청에 여러 캐릭터의 질문을 묶어 보낼 수 있다. 이때 같은 state를 사용하더라도 instructions에는 팩맨과 유령의 목적을 각각 쓰고, criteria에는 각 캐릭터가 갈 수 있는 방향을 넣는다. 서로 다른 모델이 캐릭터를 맡는 모드에서는 어느 모델이 팩맨을, 어느 모델이 유령을 조종했는지도 기록한다.",
            "links": []
          },
          {
            "type": "p",
            "text": "가령 팩맨과 유령이 동시에 갈림길에 있다면, 두 질문의 입력 상태에는 같은 팩맨·유령 위치가 들어갈 수 있다. 하지만 팩맨 질문에는 유령을 피하라는 목적이, 유령 질문에는 팩맨을 잡으라는 목적이 붙는다. 파워 펠릿 효과가 남아 있다면 유령의 목적도 도망치는 쪽으로 바뀐다. 같은 위치 정보에서 서로 다른 답이 나오는 이유는 조종하는 캐릭터와 그 캐릭터의 목적이 다르기 때문이다."
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
            "text": "응답의 choice는 선택한 방향이고 probabilities는 각 방향에 부여한 확률이다. 갈림길에 이 분포를 표시하면 어느 방향에 높은 확률을 주었는지 볼 수 있다. 다만 오른쪽의 값이 0.8이라고 해서 그 길로 갔을 때 80% 확률로 살아남는다는 뜻은 아니다. 질문은 방향의 선택이지 앞으로의 생존 여부를 직접 예측하는 질문이기 때문이다.",
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
            "text": "위 함수는 반환된 방향이 요청 당시 q.point.options에 넣었던 후보인지 확인하고 그 후보들의 확률을 가져온다. 활동 로그에는 선택과 지연 시간이 게임 사건들과 함께 남는다. 모델의 답 대신 greedy 규칙으로 움직인 경우에는 backup move로 표시한다. 로그에서 backup move를 찾으면 모델 대신 코드가 방향을 고른 순간을 확인할 수 있다.",
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
            "text": "예를 들어 요청 당시 후보가 left와 right였다고 하자. choice가 right이면 이 함수는 오른쪽 선택을 받아들인다. up이 오면 요청에 없던 방향이므로 null을 반환해 유효한 답으로 쓰지 않는다. 다만 right가 후보에 있었다는 검사만으로 지금도 안전하다는 뜻은 아니다. 답을 기다리는 동안 오른쪽 복도에 유령이 들어왔는지는 별도로 확인해야 한다."
          },
          {
            "type": "p",
            "text": "확률이 높았는데도 죽었다면 선택 순간과 실행 순간을 함께 살펴야 한다. 당시 후보 설명이 위험을 충분히 드러내지 못했을 수도 있고, 이후 유령의 이동이나 다른 캐릭터의 판단으로 상황이 달라졌을 수도 있다. 응답 지연 때문에 적용이 늦었을 가능성도 있다. 선택 당시의 후보 설명부터 유령의 움직임, 응답 적용 시각까지 순서대로 확인해야 한다.",
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
            "text": "실패 원인을 찾으려면 마지막 화면뿐 아니라 그곳에 이르기까지의 선택도 필요하다. 공개 페이지에서는 Jev의 플레이 기록을 재생할 수 있고, 사람이 팩맨을 움직여 AI 유령을 상대할 수도 있다. 아래 README 명령은 그중 팩맨을 Jev가 맡고 유령은 규칙으로 움직이는 한 게임을 JSON으로 저장한다. ",
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
            "text": "이 명령은 프로젝트를 설치한 폴더에서 실행한다. --games 1은 한 게임, --pacman jev는 팩맨을 Jev가 조종한다는 뜻이다. --ghosts greedy는 유령을 규칙으로 움직이게 하고, --max 120은 게임 시간을 120초로 제한한다. --record 뒤의 경로에는 나중에 재생할 기록을 저장한다."
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
            "text": "이 글에서 다루는 저장소는 Johnny Chadda의 joch/jevman을 Opper가 확장한 jevman-benchmark다. 여기에는 사람이 팩맨을 맡아 AI 유령과 겨루는 모드와, 모델이 팩맨을 맡아 고전 규칙으로 움직이는 유령을 상대하는 모드가 함께 있다. 후자는 같은 조건에서 모델을 비교하는 벤치마크에 쓰인다. 공개 순위표인 리더보드의 점수도 모델이 팩맨을 조종했을 때 얻은 점수다.",
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
            "text": "벤치마크는 생존 시간, 점수, 먹이 수, 사망뿐 아니라 호출 횟수, 대체 행동, 지연과 비용도 기록한다. 오랫동안 사용하지 않은 모델은 첫 호출이 특히 느릴 수 있어 측정에 앞서 한 번 미리 요청을 보내는 워밍업 호출도 한다. 저장소 명령의 기본값은 모델당 8게임, 게임당 300초 제한이다. 반면 2026년 11월 11일 확인한 공개 리더보드는 모델당 100게임으로 표시한다. 명령을 기본값으로 실행하면 공개 리더보드보다 적은 게임을 치른다. 기록 파일을 재생해 점수를 다시 검증하는 절차도 제공한다.",
            "links": [
              {
                "text": "워밍업 호출",
                "url": "https://github.com/opper-ai/jevman-benchmark#scripts"
              }
            ]
          },
          {
            "type": "p",
            "text": "조종하는 캐릭터 수가 달라지면 같은 게임에서도 호출량이 달라진다. 원문의 운영 예시는 팩맨만 Jev가 맡을 때 초당 약 1~2회, 게임당 약 0.01달러, 연속 실행 약 0.35달러/시간이다. 유령 네 마리를 맡기면 초당 약 4회, 약 0.75달러/시간이 된다. 직접 실행할 때는 bench에 남은 호출 수와 비용을 확인한다. 팩맨만 맡겼는지 유령까지 맡겼는지도 함께 기록해야 비교할 수 있다.",
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
      },
      {
        "label": "최대 세 요청 · 원문",
        "url": "https://github.com/opper-ai/jevman-benchmark#how-decisions-work"
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
    "lead": "좋은 자리를 골랐는데도 블록을 그곳에 놓지 못할 수 있다. AI가 답하는 동안 블록이 이미 바닥에 닿았다면 배치를 바꿀 기회가 사라지기 때문이다. 이 테트리스 프로젝트는 같은 순서의 블록을 여러 모델에 주고, 답을 기다리는 동안에도 떨어뜨릴 때와 멈춰 줄 때를 비교한다. 중력을 켠 대전과 끈 경기에서는 서로 다른 모델이 더 오래 버텼다.",
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
            "text": "테트리스에서는 블록을 좌우로 옮기고 회전시켜 빈칸을 채운다. 가로 한 줄을 채우면 그 줄이 사라지고, 블록이 맨 위까지 쌓이면 끝난다. 이 구현은 새 블록이 나올 때 모델에 놓을 열과 회전을 묻는다. 답이 오면 그 배치로 옮겨 한 번에 바닥까지 떨어뜨리는 hard drop을 실행한다. 그런데 답을 받기 전에 블록이 바닥에 닿아 고정되면 나중에 온 배치는 사용할 수 없다. 이를 missed deadline, 즉 응답이 늦어 배치를 적용하지 못한 횟수로 센다. 대전 모드에서는 지운 줄에 따라 상대 보드 아래에 방해 줄을 올려 보내므로, 빨리 배치하면 상대를 더 자주 공격할 수도 있다.",
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
            "text": "표의 Seed 42는 블록 순서를 만드는 난수의 시작값이다. 같은 시드를 쓰면 같은 순서로 블록이 나와 두 모델에 같은 재료를 줄 수 있다. 제작자의 이 실행에서는 실시간 대전에서 Jev가 이겼고, Gemini는 답을 기다리다 블록이 여덟 번 고정됐다. 반면 중력을 없앤 독립 보드에서는 두 모델 모두 답을 받은 뒤 배치했다. 이때는 상대가 방해 줄도 보내지 않았으며, Gemini가 106개, Jev가 105개의 블록을 놓았다. 중력과 상대 공격이라는 두 조건이 함께 달라진 비교다.",
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
            "text": "블록이 높이 쌓일수록 새 블록이 바닥에 닿기까지 남은 거리가 짧아진다. 이 게임의 기본 낙하 간격은 한 줄에 150ms다. 20초마다 이 간격을 15%씩 줄이고, 최소 40ms까지 떨어뜨린다. 처음 간격에서 착지할 곳까지 12줄이 남으면 단순 계산으로 1.8초, 3줄만 남으면 0.45초의 여유가 있다. 700ms, 즉 0.7초 걸리는 답은 앞의 경우에는 제때 오고 뒤의 경우에는 늦는다.",
            "links": []
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
            "text": "출력의 True는 답이 착지 전에 온다는 뜻이고 False는 늦는다는 뜻이다. 12줄 남았을 때는 세 응답 시간이 모두 True지만, 3줄 남았을 때는 212ms만 True다. 이 계산에서는 남은 줄 수에 낙하 간격만 곱했다. 실제로는 블록의 모양과 쌓인 표면에 따라 착지 시점이 달라진다. 같은 보드에서도 회전과 열을 바꾸면 더 높은 곳에 먼저 닿을 수 있다. 응답이 오는 동안 블록이 어디까지 떨어지는지 함께 보아야 한다.",
            "links": []
          },
          {
            "type": "p",
            "text": "대전에서는 상대의 빠른 응답이 내 시간까지 줄인다. 상대가 줄을 지우면 내 보드 아래에 방해 줄이 올라와 블록이 떨어질 공간이 좁아진다. 느린 응답으로 공격을 덜 보내는 동안 상대의 공격을 받아 마감도 더 촉박해지는 것이다. 중력을 끄면 답을 기다려 주고, 방해 줄을 끄면 상대가 내 보드를 밀어 올리지 못한다. 두 설정을 따로 바꾸어 비교한다.",
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
            "text": "계산한 결과는 describePlacement를 거쳐 후보 설명이 된다. 모든 후보를 줄 제거 수와 구멍 유무 같은 공통 항목으로 설명하면 서로 비교하기 쉽다. criteria의 키는 그 배치의 ID이므로 Jev는 하나의 ID만 반환하면 된다. 코드는 이 ID에 해당하는 열과 회전을 찾아 블록을 놓는다.",
            "links": [
              {
                "text": "criteria",
                "url": "https://github.com/trungdq88/jev-tetris/blob/a0b411c6378ff24a503f317d2aa8bf1f18a7a6dc/public/jev.js#L42-L49"
              }
            ]
          },
          {
            "type": "p",
            "text": "설명을 위한 두 후보를 만들어 보자. P1은 “가운데에 놓으면 한 줄을 지우지만 구멍 두 개가 생긴다”, P2는 “왼쪽에 놓으면 줄은 못 지우지만 구멍이 생기지 않는다”는 배치다. Jev가 P2라고 답하면 코드는 P2에 저장해 둔 열과 회전을 찾아 실행한다. P2라는 이름 자체에 왼쪽이라는 뜻이 있는 것은 아니다. 이름과 실제 배치의 대응은 후보를 만든 코드가 보관한다."
          },
          {
            "type": "p",
            "text": "높이만 낮추면 좋은 보드가 될까? 위를 블록으로 덮은 빈칸은 새 블록을 바로 떨어뜨려 채울 수 없으므로 구멍으로 남는다. 그 줄을 지우려면 위쪽 블록부터 치워야 한다. 표면이 울퉁불퉁하면 다음 블록을 빈틈없이 놓기 어렵다. 양옆보다 낮아 세로로 깊게 패인 한 열을 우물이라고 부른다. 우물 하나는 긴 I자 블록으로 채울 수 있지만 여러 개가 생기면 맞는 블록을 계속 기다려야 한다. 그래서 후보 설명에 지워지는 줄 수뿐 아니라 구멍, 표면의 굴곡, 우물도 적는다.",
            "links": []
          },
          {
            "type": "p",
            "text": "describe 계열 함수는 계산한 값을 “두 줄”, “구멍 없음”, “낮은 높이”, “평평한 표면”처럼 바꿔 적는다. Jev는 이 설명을 읽고 후보를 비교한다. 이때 서로 다른 높이를 모두 “낮다”고 묶으면 그 차이는 모델에 전달되지 않는다. 코드를 살펴볼 때는 몇 줄부터 높다고 표시하는지도 확인해야 한다.",
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
            "text": "한 줄을 지우는 대신 밑에 구멍을 남기는 배치와, 줄은 못 지워도 표면을 평평하게 만드는 배치가 있다고 하자. 당장 점수는 전자가 높지만 다음 블록을 놓기는 후자가 쉬울 수 있다. 아래 priorities는 이때 줄을 지우는 것과 구멍을 줄이는 것 중 무엇을 우선할지 Jev에 지시한다.",
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
            "text": "블록이 천장 가까이 쌓였다면 줄을 먼저 지워야 할 수 있다. 앞으로 좋은 모양을 만들 여유보다 지금 높이를 줄여 살아남는 일이 급하다. 지시문의 마지막 항목은 이 상황을 다룬다. 제작자는 단독 플레이에서 Jev가 한 줄 제거를 쉽게 택하고 모델 없이 높이·구멍 등의 점수로 배치를 고르는 비교용 규칙, 즉 휴리스틱보다 구멍을 더 허용하는 경향을 관찰했다. 구멍이 덜 생기게 하려면 구멍을 피하라는 지시를 더 우선하도록 바꿔 볼 수 있다.",
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
            "text": "네 답 가운데 실제 배치를 정하는 것은 placement 하나다. strategy는 쌓기·줄 제거·표면 복구·생존 중 무엇이 필요한지, board_health는 보드 상태가 어떤지, next_piece_fits는 다음 블록을 놓기 쉬운지를 화면에 표시하는 데 쓴다. 네 질문은 같은 상태에서 각각 답한다. strategy의 답을 먼저 얻고 그것을 근거로 placement를 고르는 순서는 아니다.",
            "links": []
          },
          {
            "type": "p",
            "text": "따라서 strategy가 “생존”이고 placement가 구멍을 만드는 배치라면, 두 답이 어긋나 보일 수 있다. 이 구현은 그 이유만으로 배치를 다른 것으로 바꾸지 않는다. 화면에는 전략을 표시하지만 블록은 placement의 답에 따라 놓는다. 전략 답을 배치 선택의 조건으로 쓰고 싶다면, 먼저 전략을 받은 뒤 그 값을 넣어 배치를 다시 물어보는 별도의 과정이 필요하다."
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
            "text": "byId는 후보 ID로 배치 객체를 찾는 표다. 각 객체에 열과 회전이 들어 있으므로 선택한 ID를 이 표에서 찾으면 실제 배치를 알 수 있다. ranked는 후보별 확률을 높은 순으로 정렬한 목록이다. chosen은 먼저 answer.choice에 해당하는 배치를 사용하고, 없으면 ranked의 첫 후보, 그것도 없으면 원래 후보 목록의 첫 배치를 사용한다. 함수가 반환한 chosen을 실행 코드가 받아 블록을 옮기고 떨어뜨린다.",
            "links": [
              {
                "text": "byId",
                "url": "https://github.com/trungdq88/jev-tetris/blob/a0b411c6378ff24a503f317d2aa8bf1f18a7a6dc/public/jev.js#L137-L147"
              }
            ]
          },
          {
            "type": "p",
            "text": "예를 들어 후보가 P1과 P2인데 응답의 choice가 P9이고, probabilities에는 P2가 0.7, P1이 0.3으로 들어 있다고 하자. 위 함수는 P9를 찾지 못하므로 유효한 후보 중 확률이 가장 높은 P2를 사용한다. 확률에서도 유효한 후보를 찾지 못하면 placements의 첫 항목을 쓴다. 이 순서는 원본 함수의 동작을 설명하기 위한 예이며, P1·P2·P9는 임의로 붙인 이름이다."
          }
        ]
      },
      {
        "id": "compare",
        "title": "대결 결과를 바꾸는 세 가지 조건",
        "blocks": [
          {
            "type": "p",
            "text": "모델이 나쁜 자리를 골라서 졌는지, 답이 늦어 고른 자리에 놓지 못했는지 알아보려면 경기 조건을 바꾸어야 한다. 이 프로젝트는 아래 세 설정을 제공한다.",
            "links": []
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
            "type": "p",
            "text": "예를 들어 같은 후보를 고르던 모델이 Wait for answers를 켠 뒤에만 오래 버틴다면, 잘못된 자리보다는 늦은 응답이 문제였는지 의심할 수 있다. 반대로 기다려 줘도 같은 구멍을 계속 만든다면 후보 설명과 배치 선택을 살펴야 한다. 비교할 때 보드와 블록 순서, 후보 목록을 함께 기록해야 어느 조건 때문에 결과가 바뀌었는지 알 수 있다."
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
            "text": "원문은 Gemini, Haiku, Laya를 각각 Jev와 비교한다. 표의 각 행은 Seed 42로 한 번씩 실행한 기록이다. 중력과 방해 줄을 켜고 끈 결과를 나누어 적었다.",
            "links": []
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
            "text": "Gemini 3.8 Flash는 무중력 독립 보드에서 106개 블록을 놓아 Jev의 105개를 조금 넘었다. 줄 제거 비율도 약 0.32줄/블록으로 Jev의 약 0.25줄/블록보다 높았다. 그러나 실시간 대전에서는 Jev가 18초에 이겼다. Gemini는 기다려 준 경기에서는 더 많은 줄을 지웠지만, 블록이 계속 떨어지는 대전에서는 Jev에게 졌다.",
            "links": []
          },
          {
            "type": "p",
            "text": "Haiku 4.5와의 기록에서는 실시간 대전, 중력 있는 독립 보드, 무중력 조건 모두 Jev가 더 많은 블록을 놓았다. 답을 기다려 준 조건에서도 Haiku가 Jev를 앞서지는 못했다. 다만 원문의 수치는 Seed 42에서 각 조건을 한 번씩 실행한 기록이다. 다른 블록 순서에서도 같은 결과가 나오는지 알아보려면 시드를 바꾸어 반복해야 한다.",
            "links": []
          },
          {
            "type": "p",
            "text": "Laya는 한 번에 읽을 수 있는 입력이 512토큰으로 제한돼 전체 후보를 받지 못했다. 그래서 코드의 휴리스틱이 먼저 고른 여섯 배치와 짧은 보드 설명만 받았다. 4코어 CPU에서 실행했으며, 중력을 끈 단독 실행에서는 53개 블록을 놓고 5줄을 지웠다. 휴리스틱이 1위로 둔 후보와 같은 선택을 한 횟수는 16번이었다. 제작자는 Laya가 후보별로 거의 비슷한 확률을 주면서도 목록 앞쪽의 후보를 선호하는 경향을 관찰했다.",
            "links": []
          },
          {
            "type": "p",
            "text": "원문의 Laya는 4억 2,100만 파라미터를 가진 ModernBERT 인코더를 사용한다. 인코더는 입력 문장을 읽어 특징을 추출하는 모델이며, 여기서는 그 특징으로 후보를 고른다. Laya가 학습한 문제는 테트리스가 아니라 이메일 분류나 처리 경로 선택 등 다른 영역이었다. 원문이 보고한 confidence는 약 0.01~0.1이다. 이는 확률이 여러 후보에 고르게 퍼져 있을수록 커지는 엔트로피를 이용해 계산한 값으로, 입문의 Jev confidence 식과는 계산법이 다르다. Laya는 네 줄을 한 번에 지울 수 있는 유일한 후보도 일관되게 고르지 못했다. Apple Silicon에서 모델을 실행하는 MLX 구현은 지연을 수십 ms로 줄일 수 있다고 소개되지만, 빨리 답하는 것과 그 배치를 정확히 고르는 것은 따로 확인해야 한다.",
            "links": [
              {
                "text": "confidence",
                "url": "https://docs.typesafe.ai/confidence"
              }
            ]
          },
          {
            "type": "p",
            "text": "대전과 별도로 Jev가 150개 블록을 끝까지 처리하며 50줄을 지운 단독 기록도 있다. 평균 판단 시간은 약 240ms, 입력은 약 53만 토큰, 비용은 약 2센트였고 휴리스틱과의 일치율은 69%였다. 이 기록은 위 대전 표와 같은 실행이 아니다. 또한 휴리스틱과 다르게 골랐다는 사실만으로 오답이라고 할 수는 없다. 다르게 고른 뒤 더 오래 버텼는지, 더 많은 줄을 지웠는지를 함께 비교해야 한다.",
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
      },
      {
        "label": "기본 중력 · 원문",
        "url": "https://github.com/trungdq88/jev-tetris"
      }
    ],
    "leadLinks": []
  },
  "mario": {
    "minutes": 11,
    "title": "마리오의 점프 시점과 AI 응답 지연",
    "lead": "마리오 앞에 적이 다가온다. 지금은 조금 더 달려도 될 듯하지만, AI의 답을 기다리는 동안에도 적은 가까워진다. 점프 버튼을 누른 뒤 적보다 높이 올라가는 데도 시간이 든다. TypeSafe Mario는 두 캐릭터가 언제 부딪힐지 코드로 계산해 Jev에 알려 준다. Jev는 이 시간과 진행 중인 점프를 보고 지금 어떤 버튼을 누를지 고른다.",
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
            "text": "그래서 프로그램은 위치에 더해 이동 속도, 발이 땅에 닿았는지, 점프가 어느 단계인지, 적과 언제 만날지, 직전 조작의 결과를 함께 보낸다. NES 게임을 실행하는 에뮬레이터의 RAM에서 상태를 읽어 만드는 정보다. player에는 현재 움직임을, trajectory에는 진행 중인 점프를, hazard에는 예상 충돌을, recent_control에는 직전 조작을 묶어 넣는다. 표의 접지는 발이 땅에 닿은 상태를 뜻한다.",
            "links": []
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
            "text": "그 이유는 지형을 관측하는 방식에 있다. 이 프로그램은 마리오를 기준으로 가로 11칸, 세로 9칸의 좁은 영역을 격자로 읽는다. 관측 영역도 마리오를 따라 움직이므로 높이 뛰면 바닥이 범위를 벗어날 수 있다. 구멍 위에서는 바로 아래의 바닥을 찾지 못해 주변 지형을 해석할 기준도 잡기 어렵다. 그런데 이를 안전한 땅에 도착한 것으로 잘못 해석하면, 아직 구멍 위에 있는데 점프 입력을 놓을 수 있다.",
            "links": [
              {
                "text": "가로 11칸, 세로 9칸",
                "url": "https://github.com/fhshaik/typesafe-mario/blob/ca22449ed187118d19326d1f54b01b6636578aa4/src/typesafe_mario/state.py"
              }
            ]
          },
          {
            "type": "p",
            "text": "이런 오판을 줄이기 위해 현재 지형을 얼마나 믿을 수 있는지와 마지막으로 땅에서 본 지형을 함께 전달한다. terrain.observation_reliability는 땅에 있을 때 high, 공중에서는 low_airborne이다. terrain.last_grounded_preview에는 땅에 있었을 때 확인한 구멍과 장애물의 거리, 보이는 구멍의 폭과 장애물 높이를 남긴다. 공중에서 바닥이 관측 범위를 벗어나도, 뛰기 전에 보았던 구멍의 폭을 참고할 수 있다.",
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
            "text": "진행 중인 동작도 따로 기록한다. trajectory.crossing_known_gap은 이미 확인한 구멍을 건너는 중임을 나타낸다. 모델에는 이때 전진 속도를 유지하고, 상승 중에는 전진과 점프 입력을 이어 가라는 지침을 준다. 구멍을 넘는 도중 입력을 놓거나 왼쪽으로 돌아서지 않도록 지시한 것이다.",
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
            "text": "구멍 하나를 건너는 동안에도 Jev에 여러 번 묻는다. 그때마다 새로 읽은 지형만 보내면 Jev는 무엇을 넘으려고 뛰었는지 알기 어렵다. 코드는 뛰기 전에 본 지형과 점프 진행 상태를 다음 요청에도 함께 넣는다.",
            "links": []
          },
          {
            "type": "p",
            "text": "입력의 차이를 예로 들면, “지금 화면에 구멍이 보이지 않는다”만 전달하는 경우와 “뛰기 전 구멍을 확인했고, 지금은 공중이며 그 구멍을 건너는 중이다”까지 전달하는 경우가 있다. 앞의 입력으로는 안전한 땅인지 관측에서 바닥이 빠진 것인지 구분하기 어렵다. 뒤의 입력은 구멍이 안 보이더라도 건너기를 계속해야 할 이유를 남긴다. 현재 관측이 불완전할 때 직전 관측과 동작 기록이 필요한 까닭이다."
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
            "text": "표에는 버튼 조합 일곱 가지가 있다. right_run_jump처럼 여러 버튼을 동시에 누르는 조합을 매크로라고 부른다. 성공한 플레이를 미리 녹화한 것은 아니며, Jev가 그때그때 하나를 고른다. 에뮬레이터는 고른 버튼을 누른 상태로 몇 프레임 진행한 뒤 새 상태를 돌려준다. 프레임은 게임 상태를 한 번 갱신하는 시간 단위다. 그동안 같은 버튼을 유지하므로, 다음에 조작을 바꾸기 전에 적에게 닿을지도 따져야 한다.",
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
            "text": "action_horizon_frames는 고른 버튼을 유지할 프레임 수이고, last_inference_delay_frames는 직전 요청의 응답 지연을 프레임 수로 바꾼 값이다. 코드는 둘을 더한 total_reaction_horizon_frames로 다음 조작 변경까지 걸릴 시간을 가늠한다. 다음 응답 지연을 미리 아는 것은 아니므로 최근 측정값을 사용하는 것이다. hazard 계산에서는 이 시간과 적의 움직임을 비교해 지금 점프를 시작해야 하는지 구한다. jump_must_start_this_decision이 참이면 한 번 더 달리지 말고 바로 앞으로 점프하라는 지시가 붙는다.",
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
            "text": "점프 버튼을 누른 뒤 적보다 높이 올라가는 시간도 필요하다. 접촉까지 20프레임 남았다고 해서 19프레임 뒤에 누르면 늦을 수 있다. 따라서 코드는 응답 지연, 버튼 유지 시간, 적의 움직임과 점프에 필요한 여유를 함께 계산한다. 위 지시문에서 contact_within_reaction_horizon은 다음 조작 변경 전 접촉할 위험을, will_land_before_contact는 적을 만나기 전에 현재 점프가 끝날 가능성을 뜻한다. 후자의 경우 착지한 뒤 다시 뛰어야 한다. upcoming_enemies에는 뒤따르는 적도 넣어 첫 적을 넘다가 두 번째 적 위에 떨어지는 일을 피하도록 한다.",
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
            "text": "계산 결과의 여유 0은 다음 판단 때까지 기다리면 접촉 시점에 이른다는 뜻이다. 점프 상승 시간까지 생각하면 출발은 그보다 빨라야 한다. 간격을 40픽셀에서 80픽셀로 늘리거나 접근 속도를 절반으로 줄이면 접촉까지의 시간은 두 배가 된다. 반대로 응답이 늦어지면 같은 장면에서도 더 빨리 점프해야 한다. ",
            "links": []
          }
        ]
      },
      {
        "id": "judgments",
        "title": "점프 필요성과 버튼 조작을 따로 묻는 이유",
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
            "text": "jump_needed는 지금 앞으로 점프를 시작하거나 점프 버튼을 계속 누를 필요가 있다는 문장이 참일 확률이다. danger는 안전한 이동, 곧 장애물이나 적을 만날 상황, 즉시 충돌·추락할 위험이라는 세 단계의 점수다. 둘은 대시보드에 상황을 표시하는 데 쓰인다. 게임을 움직이는 것은 Choice가 고른 next_action뿐이다. jump_needed가 높아도 별도의 점프 명령이 자동으로 생기지는 않으므로, 실제 조작은 next_action의 기록에서 확인한다.",
            "links": [
              {
                "text": "대시보드",
                "url": "https://github.com/fhshaik/typesafe-mario"
              }
            ]
          },
          {
            "type": "p",
            "text": "예를 들어 한 응답에 next_action=right_run, jump_needed=0.95가 함께 들어왔다고 하자. 점프가 필요하다는 값은 높지만, 실제로 누르는 버튼은 오른쪽과 달리기다. 0.95가 자동으로 점프 버튼을 추가하지 않는다. 이처럼 어긋난 답이 나오면 대시보드에서 발견하고 지시나 입력을 점검할 수 있다. 이는 세 출력의 역할을 구분하기 위한 가정이지, 원문에서 관측한 실패 기록은 아니다."
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
            "text": "요청 전후의 시각을 재면 이번 답을 받는 데 실제로 얼마나 걸렸는지 알 수 있다. 위 코드는 그 차이를 latency_ms로 남기고, next_action의 선택을 Action으로 바꾼다. 같은 Decision 안에는 후보별 확률과 점프·위험 평가도 함께 담는다. 실행 루프는 action에 따라 버튼을 누르고, 대시보드는 나머지 값을 표시한다.",
            "links": [
              {
                "text": "대시보드",
                "url": "https://github.com/fhshaik/typesafe-mario"
              }
            ]
          },
          {
            "type": "p",
            "text": "질문에는 고른 조작을 최소 8프레임 유지한다는 조건이 들어 있다. Jev가 right_run_jump를 고르면 오른쪽·달리기·점프 버튼을 그동안 함께 누른다. 특히 구멍 위에서는 입력을 놓아도 당장 떨어지지 않을 수 있지만, 여러 프레임 동안 전진이나 점프를 유지하지 않으면 반대편에 닿지 못할 수 있다. 따라서 다음 요청에도 구멍을 넘는 중임을 알려 주고, 상승 중에는 점프 입력을 유지하도록 지시한다.",
            "links": []
          },
          {
            "type": "p",
            "text": "예를 들어 이번 선택이 right_run_jump이고 다음 선택이 noop이면, 첫 구간에는 오른쪽·달리기·점프를 함께 누르고 다음 구간에는 모든 버튼을 놓는다. noop이 캐릭터를 공중에 정지시키는 것은 아니다. 버튼을 놓은 뒤에도 게임의 중력과 이미 생긴 속도에 따라 움직인다. 그래서 출력 이름만 보지 말고 그 조작을 몇 프레임 유지했는지까지 확인해야 한다."
          }
        ]
      },
      {
        "id": "inspect",
        "title": "입력 상태와 실행 기록",
        "blocks": [
          {
            "type": "p",
            "text": "상태가 어떻게 만들어지는지 보려면 프로젝트를 설치한 뒤 state-demo를 실행한다. 아래는 Windows 명령이다. .venv는 파이썬 가상환경 폴더이고, 그 안에 설치된 typesafe-mario 프로그램을 실행한다. 이 명령은 게임을 시작하거나 Jev API를 호출하지 않고 예시 상태를 출력한다.",
            "links": []
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
            "text": "출력의 hazard와 reaction_timing에서 앞서 설명한 위험과 시간 값을 확인할 수 있다. 사람이 살펴보는 원시 격자는 칸마다 지형을 표시한 것이고, 모델에 보내는 상태는 여기서 적·구멍·장애물과의 관계를 추린 것이다. 실제 World 1-1 플레이는 다음 명령으로 실행한다. --env는 스테이지를, --frames-per-decision 8은 선택한 조작을 유지할 프레임 수를 지정한다. 게임과 API의 준비 방법은 아래 환경 설정 링크에 있다.",
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
            "text": "World 1-1을 실행하면 게임 화면 옆에 선택한 조작, 후보별 확률, 응답 시간, 점프 확률과 위험 점수가 표시된다. 같은 내용은 artifacts 폴더의 JSONL 로그에도 남는다. JSONL은 기록 하나를 한 줄의 JSON으로 저장하는 형식이다. 충돌한 순간만 보면 잘못된 점프처럼 보여도, 요청할 때와 적용할 때 사이에 적이 가까워졌을 수 있다. 로그에서 요청 시각과 적용 시각을 찾아 그사이 적이 얼마나 다가왔는지 확인한다.",
            "links": []
          },
          {
            "type": "source",
            "label": "환경 설정과 대시보드 설명",
            "url": "https://github.com/fhshaik/typesafe-mario/blob/main/README.md#setup"
          },
          {
            "type": "p",
            "text": "분석은 관측, 선택, 적용 순서로 나누면 된다. 먼저 RAM에서 읽은 적과 지형이 실제 장면에 맞는지 확인한다. 그 정보가 맞다면 당시 고른 조작이 적절했는지 본다. 마지막으로 조작이 적용될 때도 같은 판단이 유효했는지 확인한다. 적을 잘못 찾았다면 상태 추출 코드를, 적을 제대로 보고도 달리기를 골랐다면 질문과 후보를, 답을 너무 늦게 적용했다면 호출과 실행 시점을 고쳐야 한다.",
            "links": []
          },
          {
            "type": "p",
            "text": "여기서는 Noul과 Score가 대시보드용이고 Choice가 조작을 정한다. 높은 점프 확률을 별도 코드가 읽어 모델의 선택을 강제로 바꾸지는 않는다. 원문도 막힌 상황에서 규칙대로 탈출시키는 보조 동작이 모델의 선택을 덮어쓰지 않는다고 설명한다. 뒤의 드론 구현에서는 장애물이 가까워지면 별도의 안전 코드가 Jev의 답을 무시하고 기체를 멈출 수 있다. 마리오의 jump_needed와 danger는 그런 일을 하지 않고 화면에 값만 표시한다.",
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
      },
      {
        "label": "Score · 원문",
        "url": "https://docs.typesafe.ai/primitives/score"
      },
      {
        "label": "Noul · 원문",
        "url": "https://docs.typesafe.ai/primitives/noul"
      }
    ],
    "leadLinks": []
  },
  "doom": {
    "minutes": 8,
    "title": "Jev의 DOOM 데모와 실시간 의사결정",
    "lead": "같은 적을 앞에 두고 “적을 처리하라”고 할 때와 “쏘지 말고 피하라”고 할 때 캐릭터가 다르게 움직일까? TypeSafe의 DOOM 데모는 게임 상태와 이런 지시를 Jev에 함께 보낸다. Jev가 발사와 회피 등을 판단하면 코드가 조작에 반영하고, 바뀐 상태를 다시 보낸다. 적과 발사체가 계속 움직이므로 답을 제때 적용하는 일도 중요하다.",
    "origin": {
      "label": "TypeSafe · Introducing System One Models & Jev — Doom",
      "url": "https://typesafe.ai/blog/introducing-system-one-models-and-jev"
    },
    "sections": [
      {
        "id": "idea",
        "title": "적을 잘 잡는 것과 명령을 잘 따르는 것",
        "blocks": [
          {
            "type": "p",
            "text": "TypeSafe는 DOOM 데모에서 “공격하지 말고 피하라”는 지시로 플레이를 바꾸는 모습을 소개했다. 게임은 화면 이미지 대신 체력과 주변 적 등 항목별로 정리한 상태 데이터를 Jev에 보냈고, 소개 당시에는 초당 약 10번 호출했다. 적을 쓰러뜨려 점수를 얻는 데 더해, 사람이 명령을 바꾸면 그에 맞춰 움직이는지를 보여 주었다.",
            "links": [
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
            "text": "적을 공격하면 점수를 얻지만 맞을 위험도 있는 장면을 생각해 보자. “점수를 얻어라”는 지시에서는 공격이, “공격하지 말고 살아남아라”는 지시에서는 회피가 요구된다. 게임 화면의 체력과 적 위치가 같더라도 목적이 다르면 기대하는 행동이 달라진다. 이 데모는 그 목적을 자연어로 상태와 함께 보낸다. Jev가 선택한 뒤 이동 버튼과 발사 버튼을 누르는 일은 게임 코드가 처리한다.",
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
            "text": "회피를 한 번 했다고 계속 안전한 것은 아니다. 이동한 곳으로 다른 적이 다가올 수 있으므로, 상태를 다시 확인하고 다음 행동을 골라야 한다. 아래 그림처럼 게임 코드와 Jev가 관측과 조작을 반복한다.",
            "links": []
          },
          {
            "type": "diagram",
            "title": "게임 상태를 보내고 다음 조작을 받는 과정",
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
                  "발사 여부 · 목표 · 회피 필요성"
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
            "caption": "게임 코드가 상태와 지시를 Jev에 보내고, 받은 판단을 조작으로 실행한다. 이동한 뒤 상태를 다시 확인한다.",
            "extra": null
          },
          {
            "type": "p",
            "text": "공식 영상은 발사할지, 무엇을 우선 목표로 삼을지, 회피가 필요한지를 나누어 묻는 모습을 보여 준다. 회복약으로 가야 하면서 날아오는 공격도 피해야 할 수 있으므로, 세 답은 함께 쓰일 수 있다. 목표를 회복약으로 유지하되 이동은 회피하도록 하고 발사는 멈추는 식이다. 각각의 판단을 버튼 조작으로 바꾸는 일은 게임 코드가 맡는다.",
            "links": []
          },
          {
            "type": "p",
            "text": "Jev가 받는 것은 플레이 영상이 아니라 게임에서 읽은 체력, 적과 발사체, 획득 가능한 물품 등의 정보다. 체력만 보내면 회복이 급한지는 알아도 약이 어디 있는지 알 수 없다. 주변 물품과 위험을 함께 알려 주어야 이동할 목표와 당장 피할 대상을 고를 수 있다. 캐릭터가 움직이면 이런 정보도 바뀌므로 다음 요청에는 새 상태를 보낸다.",
            "links": []
          },
          {
            "type": "p",
            "text": "수업용으로 단순화하면 입력은 “체력 18/100, 회복약으로 가는 길이 열려 있음, 적의 탄환이 접근 중, 생존 우선”이다. 여기에 목표는 회복, 발사는 하지 않음, 회피는 필요함이라는 답이 돌아왔다고 가정하자. 코드는 회복약을 향해 이동하면서 탄환을 피하고 발사 버튼은 누르지 않도록 세 답을 함께 사용한다. 회피한 뒤 체력이 회복되었는지는 새 상태에서 확인한다. 이 예시의 숫자와 답은 공식 데모의 로그가 아니라 위 흐름을 설명하기 위해 정한 값이다."
          }
        ]
      },
      {
        "id": "state-age",
        "title": "100ms 주기와 100ms 지연은 다른 값이다",
        "blocks": [
          {
            "type": "p",
            "text": "요청을 100ms마다 보낸다는 말과 답 하나를 받는 데 100ms 걸린다는 말은 다르다. 예를 들어 0ms, 100ms, 200ms에 요청을 보내고 각각 250ms씩 걸린다고 하자. 답은 250ms, 350ms, 450ms에 온다. 답을 받는 간격은 100ms지만 각 답은 250ms 전의 상태에 관한 것이다. 이렇게 여러 요청을 겹쳐 보내면 초당 열 개의 답을 받아도 각 답의 지연은 100ms보다 길 수 있다.",
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
            "text": "이 예제는 실행 시작 후 1초에 관측하고, 1.25초에 답을 받아, 1.28초에 조작을 적용했다고 가정한다. 모델을 기다린 시간은 250ms지만 관측부터 적용까지는 280ms, 즉 0.28초다. 답을 받은 뒤 적용하기까지의 30ms도 포함해야 한다. 그동안 초당 6m로 움직였다면 이동 거리는 1.68m다. 요청할 때 벽에서 떨어져 있었어도 적용할 때는 벽 가까이에 있을 수 있다. 실제 실행에서도 관측·응답·적용 시각을 각각 기록하면 어느 구간에서 늦었는지 알 수 있다.",
            "links": []
          },
          {
            "type": "p",
            "text": "요청을 겹쳐 보내면 나중에 보낸 요청의 답이 먼저 올 수도 있다. 새 답을 적용한 뒤 오래된 답으로 덮어쓰면, 이미 달라진 적의 위치를 기준으로 움직이게 된다. 코드에서 관측 시각을 비교해 오래된 답을 버리거나, 지금도 그 행동을 해도 되는지 다시 확인해야 한다.",
            "links": []
          },
          {
            "type": "p",
            "text": "가령 1.0초의 관측은 “오른쪽이 비어 있다”이고, 1.1초의 관측은 “오른쪽에 적이 들어왔다”라고 하자. 두 번째 요청의 “왼쪽으로 피하라”가 먼저 왔는데 첫 번째 요청의 “오른쪽으로 가라”가 나중에 도착할 수 있다. 이때 마지막에 도착한 답만 저장하면 더 오래된 상황으로 되돌아간다. 비교해야 하는 시각은 답의 도착 순서가 아니라 각 요청이 관측한 시각이다."
          }
        ]
      },
      {
        "id": "rate",
        "title": "초당 10번이라는 수치의 의미",
        "blocks": [
          {
            "type": "p",
            "text": "초당 10번이면 평균 100ms마다 한 번이고, 같은 빈도를 유지하면 1분에 600회, 한 시간에 36,000회다. 한 시간 비용을 구하려면 호출 한 번의 비용에 36,000을 곱한다.",
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
            "text": "같은 상태가 계속되는 동안에도 이 빈도로 물어야 할까? 변화가 없을 때는 이전 판단을 유지할 수 있지만 새로운 위험이 나타나면 즉시 갱신할 필요가 있다. 팩맨은 다음 갈림길을 예상해 미리 묻고, 드론은 장애물이 가까워지거나 추적하던 목표가 보이지 않을 때 묻는다. 이처럼 매번 같은 간격으로 묻는 대신, 갈림길에 가까워지거나 새 장애물이 나타났을 때 물을 수도 있다.",
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
        "title": "공격을 멈추라는 말을 따랐는지 확인하려면",
        "blocks": [
          {
            "type": "p",
            "text": "이 데모는 이동과 발사 코드를 그대로 둔 채 “쏘지 말고 피하라”는 지시를 보내 플레이를 바꾼다. Jev가 발사를 멈추고 회피하도록 답하면 기존 게임 코드가 그 조작을 실행한다. 명령을 바꾸는 것만으로 다른 행동을 끌어낼 수 있는 이유는, 그 행동을 실행할 버튼과 코드가 이미 준비돼 있기 때문이다.",
            "links": []
          },
          {
            "type": "p",
            "text": "이런 게임을 직접 구현한다면 명령을 바꾼 시각도 기록해야 한다. 공격하지 말라고 바꾼 직후에 발사했다고 해서 반드시 새 명령을 무시한 것은 아니다. 이전의 공격 명령으로 보낸 요청이 늦게 도착했을 수 있다. 그 답에 어떤 상태와 지시를 보냈는지 확인하고, 새 명령이 적용된 뒤에는 예전 지시의 답을 사용하지 않도록 처리한다.",
            "links": []
          },
          {
            "type": "source",
            "label": "공식 데모 영상이 있는 원문",
            "url": "https://typesafe.ai/blog/introducing-system-one-models-and-jev"
          },
          {
            "type": "p",
            "text": "명령의 영향을 시험하려면 같은 장면에서 지시만 바꾸어야 한다. 예를 들어 앞에 적이 있고 옆에는 숨을 곳이 있는 장면을 준비한다. 공격하면 점수를 얻지만 맞을 위험이 있고, 숨으면 살아남기 쉽지만 점수를 얻지 못하도록 만든다. 여기서 점수 우선과 생존 우선 지시를 번갈아 보내 어떤 행동을 고르는지 비교한다. 적의 위치까지 함께 바꾸면 무엇 때문에 선택을 바꿨는지 알기 어렵다.",
            "links": []
          },
          {
            "type": "exercise",
            "question": "명령을 바꿨는데 매번 같은 행동을 골랐다면 명령을 무시한 것일까?",
            "answer": "반드시 그렇지는 않다. 적을 쏘는 것이 점수도 얻고 살아남는 데도 유리한 장면일 수 있다. 명령의 영향을 보려면 공격과 회피 중 무엇을 우선하느냐에 따라 기대하는 행동이 달라지는 장면을 준비해야 한다. 같은 상태와 후보를 주고 지시만 바꾼다. 후보가 하나뿐이면 어느 지시를 보내도 같은 답밖에 할 수 없으므로 비교에 적합하지 않다."
          },
          {
            "type": "p",
            "text": "“공격하지 말라”는 지시를 잘 따르면 적을 덜 쓰러뜨려 점수가 낮아질 수 있다. 따라서 점수와 함께 실제로 몇 번 발사했는지, 얼마나 오래 살아남았는지를 기록한다. TypeSafe도 이 데모에서 여러 상태 표현과 명령에 반응하는 플레이를 강조했다.",
            "links": []
          }
        ]
      }
    ],
    "refs": [
      {
        "label": "지시에 반응하는 플레이 · 원문",
        "url": "https://typesafe.ai/blog/introducing-system-one-models-and-jev"
      }
    ],
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
    "lead": "위키백과에서 목표 문서를 찾아가야 하는데 검색창을 쓸 수 없다고 하자. 현재 페이지의 링크만 눌러야 한다. 목표 문서의 이름을 알아도 바로 갈 수 없고, 이름이 비슷한 문서에 갔다가 길이 막힐 수도 있다. Wikiracing에서는 링크를 하나씩 골라 목표 문서까지 찾아간다. TypeSafe는 Jev에 현재 페이지의 링크를 주고 다음에 누를 것을 고르게 했다.",
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
            "text": "목표와 관련된 문서를 떠올리는 것만으로는 이동할 수 없다. 현재 페이지에 그 문서로 가는 링크가 있어야 한다. 그곳에 도착한 뒤에는 다시 그 페이지의 링크만 사용할 수 있다. 문서를 점으로, 링크를 화살표로 그리면 그래프로 나타낼 수 있다. 현재 문서에서 출발하는 화살표 중 하나를 따라 다음 문서로 이동한다.",
            "links": []
          },
          {
            "type": "p",
            "text": "현재 페이지에서 갈 수 있는 문서가 너무 많으면 한 번에 고르기도 어렵다. TypeSafe의 소개에서는 페이지에 따라 후보가 수백에서 수천 개가 될 수 있다고 설명한다. 소개 당시 Jev의 Choice 한 질문은 최대 255개 후보를 받았다. 이보다 많을 때는 링크를 각각 평가하는 단계와 그 결과에서 하나를 고르는 단계를 나누었다.",
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
                  "목표 문서로 가는 데 도움이 될지"
                ]
              },
              {
                "id": "n2",
                "x": 480,
                "y": 55,
                "kind": "model",
                "title": "다음 링크 선택",
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
            "caption": "먼저 링크들을 평가하고, 후보를 줄여 다음에 누를 링크를 고른다. 이동한 페이지에서도 링크를 새로 모아 같은 절차를 반복한다.",
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
            "text": "예를 들어 현재 페이지의 후보가 A와 B뿐이라면, 모델이 목표 T의 주소를 알고 있어도 T로 바로 갈 수 없다. 코드가 A와 B만 후보로 주기 때문이다. 답도 이 둘 가운데 하나여야 한다. 후보 이름과 실제 주소를 미리 짝지어 두면 모델이 선택한 이름을 바로 링크 클릭으로 연결할 수 있다.",
            "links": []
          },
          {
            "type": "p",
            "text": "이를 이름이 있는 연습용 지도에 대입해 보자. 현재 문서는 “고무 오리”, 목표는 “우주 탐사”이고, 현재 링크를 “장난감”과 “플라스틱” 두 개로만 정했다고 하자. Jev가 “플라스틱”을 고르면 코드는 미리 연결해 둔 그 문서의 주소를 연다. 모델이 “우주 탐사”라는 주소를 알고 있어도 현재 후보가 아니므로 한 번에 이동할 수 없다. 이 연결은 원문 시연이나 실제 위키백과 링크를 재현한 것이 아니라 이동 규칙을 설명하기 위한 예다."
          }
        ]
      },
      {
        "id": "graph-example",
        "title": "연결된 문서를 알아도 목적지까지의 길은 모른다",
        "blocks": [
          {
            "type": "p",
            "text": "출발 문서 S에 A와 B로 가는 링크가 있다고 하자. A는 목표 T와 이름이 비슷하지만 X에만 연결되고, X도 A로 돌아가는 링크만 가진다. B는 이름이 덜 비슷해도 C를 거쳐 T에 닿는다. 이름만 보고 A를 고른 뒤 같은 판단을 반복하면 A와 X 사이를 맴돈다. 아래 코드로 A를 골랐을 때와 B를 골랐을 때의 경로를 확인해 보자.",
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
            "text": "check_route는 이동 경로에서 이웃한 두 문서를 차례로 꺼내 실제 링크가 있는지 검사한다. S→A→X→A와 S→B→C→T는 모두 존재하는 링크만 따라가므로 legal_moves가 참이다. 그러나 reached_goal은 두 번째 경로에서만 참이다. 첫 경로는 A와 X 사이를 오갈 뿐 목표 T에 닿지 못한다. 허용된 링크만 누르게 하는 것만으로는 이런 반복을 막을 수 없다.",
            "links": []
          },
          {
            "type": "p",
            "text": "첫 출력은 {\"legal_moves\": True, \"reached_goal\": False}, 두 번째는 {\"legal_moves\": True, \"reached_goal\": True}다. legal_moves는 각 이동이 규칙을 지켰는지이고 reached_goal은 마지막 문서가 목표인지다. 둘을 나누어 출력해야 “클릭은 모두 가능했지만 목표에는 도착하지 못했다”는 실패를 구별할 수 있다."
          },
          {
            "type": "p",
            "text": "전체 링크 그래프를 미리 안다면 가까운 문서부터 한 단계씩 넓혀 찾는 BFS, 즉 너비 우선 탐색으로 최단 경로를 계산할 수 있다. 그러나 현재 페이지의 링크만 아는 조건에서는 다음 페이지에 가야 그곳의 연결을 확인한다. 이때는 문서 이름과 내용을 보고 어디를 먼저 방문할지 추측해야 한다. 실제로 어느 문서에 연결되는지는 방문한 뒤 링크를 읽어 확인한다.",
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
            "text": "현재 페이지에 링크가 수천 개 있다면 Choice 한 번에 모두 보낼 수 없다. 먼저 각 링크가 목표 문서를 찾는 데 얼마나 도움이 될지 평가하고 후보를 줄인다. 그다음 남은 후보를 Choice에 보내 이번에 누를 링크 하나를 고른다.",
            "links": []
          },
          {
            "type": "p",
            "text": "앞의 S·A·B 예제에서 첫 평가가 A만 남기고 B를 버렸다고 하자. 최종 Choice에 보낼 입력은 이제 A 하나뿐이다. 최종 모델이 아무리 좋아도 B→C→T로 가는 길을 고를 수 없다. 반대로 A와 B가 모두 남아 있는데 A를 골랐다면, 후보를 줄이는 단계보다 마지막 선택을 살펴야 한다. 이렇게 중간에 남은 후보 목록까지 기록하면 어느 단계에서 목표로 가는 길이 사라졌는지 찾을 수 있다."
          },
          {
            "type": "p",
            "text": "여기서 높은 관련성이 짧은 경로를 뜻하지는 않는다. 목표와 같은 단어를 많이 쓰는 문서라도 다른 곳으로 나갈 링크가 적을 수 있다. 이름이 덜 비슷한 문서가 여러 분야를 잇는 통로일 수도 있다. 어느 쪽으로 가든 다음 페이지에서 실제 링크를 확인하고 다시 골라야 한다.",
            "links": []
          },
          {
            "type": "p",
            "text": "수업에서 이 과정을 만들어 본다면 첫 평가에 어떤 정보를 줄지도 바꾸어 볼 수 있다. 문서 이름이 목표와 얼마나 비슷한지만 물으면 앞의 A를 높게 평가할 수 있다. 그런데 A와 X를 이미 왕복했다는 방문 기록까지 주면 같은 길을 피할 단서가 생긴다. 이름만 주었을 때와 방문 기록도 주었을 때 남기는 후보가 달라지는지 비교한다.",
            "links": []
          },
          {
            "type": "p",
            "text": "후보를 줄이다가 필요한 중간 문서를 버리면 마지막 모델은 그 문서를 고를 수 없다. 따라서 잘못된 최종 선택을 고치기 전에 좋은 후보가 마지막까지 남았는지 확인해야 한다. 테트리스에서 전체 배치 중 여섯 개만 골라 주는 경우도 같다. 필요한 후보를 코드가 버렸다면 마지막에 답하는 모델만 바꾸어서는 그 길을 찾을 수 없다.",
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
            "text": "목표까지 세 번 클릭하는 방법과 다섯 번 클릭하는 방법을 비교한다고 하자. 각 클릭을 정하는 시간이 같으면 세 번이 빠르다. 하지만 세 번 가는 쪽이 매번 0.8초 생각하고, 다섯 번 가는 쪽은 0.2초 만에 고른다면 달라질 수 있다. 다음 예제는 두 방식 모두 페이지를 여는 데 0.2초씩 걸린다고 두고 총시간을 계산한다.",
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
            "text": "첫 경로는 3단계에 3초, 두 번째는 5단계에 2초가 걸린다. 이동 횟수가 적은 경로가 전체 시간에서도 앞서는 것은 아니다. TypeSafe의 영상 역시 시연 속도를 위해 상대 모델의 추론 설정을 낮췄다. 오래 생각해 클릭 수를 줄여도 전체 완료 시간은 더 길어질 수 있다.",
            "links": []
          },
          {
            "type": "p",
            "text": "링크를 한 번 누르면 현재 페이지와 후보 목록이 함께 바뀐다. 이전 페이지에서 높게 평가한 문서가 새 페이지에는 없을 수도 있다. 따라서 코드는 이동할 때마다 링크를 새로 추출하고, Jev는 새 후보 중에서 다음 문서를 고른다.",
            "links": []
          },
          {
            "type": "p",
            "text": "공식 영상에서는 비교 상대 대부분의 추론 모드를 끄고, Astra에는 가장 낮은 추론 설정을 적용했다. 이 설정은 답을 내기 전 중간 추론에 얼마나 계산을 쓸지 조절한다. 제작사는 영상을 빠르게 진행하기 위한 조건이며, 추론을 켰을 때보다 상대가 길을 덜 잘 고를 수 있다고 설명한다. 두 번째와 세 번째 도전이 모두 Rubber Duck, 즉 고무 오리 문서에서 시작한 것은 우연이라고도 덧붙였다. 다른 모델과 비교할 때는 출발·목표 문서뿐 아니라 이 추론 설정도 맞춰야 한다.",
            "links": []
          },
          {
            "type": "exercise",
            "question": "1,000개의 링크를 평가해 20개로 줄였는데, 목표에 이르는 경로의 첫 링크가 빠졌다. 마지막 선택 모델을 개선하면 이 경로를 찾을 수 있을까?",
            "answer": "그 요청에서는 찾을 수 없다. 마지막 모델에 준 20개 후보에 필요한 링크가 없기 때문이다. 먼저 평가 기준을 바꾸거나 남길 후보를 늘려야 한다. 1,000개를 20개로 줄일 때 필요한 링크가 남았는지, 남아 있는데도 최종 모델이 다른 것을 골랐는지를 나누어 확인하면 고칠 단계를 찾을 수 있다."
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
    "lead": "이 실험은 실제 드론을 날린 것이 아니라 MuJoCo 시뮬레이터 안에서 진행했다. 드론 앞을 낮은 장벽이 가로막았지만 Jev는 처음에 상승을 고르지 않았다. 사람은 화면을 보고 위로 넘을 수 있다고 생각할 수 있다. 그러나 Jev가 받은 것은 화면이 아니라 코드가 정리한 다섯 방향의 거리였다. 이 값만으로는 낮은 장벽과 천장까지 이어진 벽을 구분할 수 없다. 제작자가 장애물 상단의 높이와 기체의 상승 한계를 입력에 추가하자 Jev는 상승을 골랐다. 그 뒤 실제로 넘을 수 있도록 센서와 비행 제어 코드를 고친 것도 제작자였다.",
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
            "text": "RomanSlack은 물리 시뮬레이터인 MuJoCo 안에서 움직이는 차량을 따라가는 드론을 만들었다. 실제 기체를 날린 실험은 아니다. 코스에는 기둥 사이 통로, 낮은 가로 장벽인 보, 회전 장애물, 움직이는 문, 빽빽한 기둥이 있다. 낮은 보는 복도 전체를 가로막으므로 좌우로 빠져나갈 틈이 없다. 더 넓은 쪽으로 피하라는 규칙만으로는 지나갈 수 없고, 보 위로 올라가야 한다.",
            "links": [
              {
                "text": "RomanSlack",
                "url": "https://github.com/RomanSlack/jev-drone"
              }
            ]
          },
          {
            "type": "p",
            "text": "README의 65초 실행에서 Jev를 끈 기준 제어기는 17.7m 부근에 머물렀고, Jev를 사용한 드론은 코스를 지나 77.5m까지 진행했다. 차이를 만든 행동은 낮은 보 위로 올라가는 것이었다. 앞선 단순 코스의 세 시드 비교에서는 양쪽 모두 통과하지 못한 기록도 있다. 여기서 77.5m까지 진행한 실행은 낮은 보를 위로 넘도록 만든 코스의 기록이다. 표의 안전 반사는 가까운 장애물을 발견하면 모델에 묻지 않고 제동하거나 피하는 코드다. 사람이 뜨거운 물체에서 손을 빼는 반사에 빗댄 이름이며, 별도의 학습 모델을 뜻하지 않는다.",
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
            "text": "충돌 수가 0이라는 사실만 보면 두 방식 모두 잘 날았다고 생각하기 쉽다. 그러나 기준 제어기는 장벽 앞에서 안전 반사를 오래 유지하며 멈춰 있었다. 멈춰 있으면 충돌은 피할 수 있지만 목표를 따라가지는 못한다. Jev 실행은 약 47초에 코스를 벗어났으며 65초 기록 전체에서 80회 호출, 응답 중앙값 0.11초, 약 9만 6천 토큰을 사용했다.",
            "links": []
          },
          {
            "type": "p",
            "text": "원문의 실행은 낮은 보를 넘어 회전 장애물을 지나고, 옆으로 움직이는 3.2m 문을 통과한 뒤 두 번째 보를 넘는다. 이어 기둥 구간에서 목표를 놓쳤다가 출구에서 다시 찾는다. 기둥 뒤에 가려져 있던 동안에도 목표는 움직인다. 드론은 장애물을 지난 뒤 목표를 다시 찾아 따라가야 한다.",
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
            "text": "Jev가 climb, 즉 상승을 골라도 모터가 그 단어를 알아듣지는 못한다. 비행 제어기는 원하는 높이와 기울기에 맞춰 각 모터를 얼마나 돌릴지 계속 계산한다. 여기서는 500Hz, 즉 초당 500번 이 계산을 한다. 약 2ms마다 한 번이다. 가까운 장애물에 반응하는 유도·안전 코드는 50Hz로, Jev를 통한 기동 선택은 약 2.5Hz로 작동한다. 2.5Hz는 약 0.4초에 한 번이다. Jev의 답을 기다리는 동안에도 모터 제어와 장애물 대응은 계속된다.",
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
            "title": "Jev가 기동을 고르는 동안에도 모터 제어는 계속된다",
            "nodes": [
              {
                "id": "n0",
                "x": 20,
                "y": 55,
                "kind": "world",
                "title": "기체에 달린 카메라",
                "lines": [
                  "깊이 · 세그멘테이션"
                ]
              },
              {
                "id": "n1",
                "x": 250,
                "y": 55,
                "kind": "code",
                "title": "영상에서 필요한 값 추출",
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
                  "응답 저장 · 제어기는 바로 읽기"
                ]
              }
            ],
            "caption": "Jev의 답을 기다리는 동안에도 비행 제어기는 기체 자세를 잡고, 안전 코드는 가까운 장애물에 반응한다.",
            "extra": true
          },
          {
            "type": "p",
            "text": "시뮬레이터 카메라는 픽셀별 거리인 깊이 영상과 각 픽셀이 어느 물체에 속하는지 표시한 세그멘테이션 영상을 제공한다. 수치 배열을 다루는 파이썬 라이브러리인 NumPy로 이 값들을 처리해 방향별 거리, 장애물 높이, 목표 위치를 구한다. Jev에는 원본 영상 대신 이렇게 정리한 값을 보낸다. 사진에서 물체를 알아내는 별도의 범용 비전 모델을 쓰지는 않았다. 기체는 MuJoCo용 로봇 모델 모음인 MuJoCo Menagerie의 Skydio X2다.",
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
          },
          {
            "type": "p",
            "text": "climb은 네 모터의 회전수를 담은 답이 아니다. 코드가 상승 목표로 바꾸고, 제어기가 기체를 지탱하면서 높이를 올릴 모터 출력을 계속 계산한다. 따라서 Jev가 climb을 골랐는데 드론이 옆으로 기울어 부딪혔다면, 선택 기록뿐 아니라 목표 높이와 실제 높이, 모터에 보낸 값도 확인해야 한다."
          }
        ]
      },
      {
        "id": "height",
        "title": "상승을 판단하려면 높이가 필요하다",
        "blocks": [
          {
            "type": "p",
            "text": "앞쪽 다섯 방향에서 모두 가까운 장애물이 관측됐다고 하자. 이 거리들은 정면과 좌우의 길이 막혔다는 단서를 주지만, 장애물이 위로 어디까지 이어지는지는 알려 주지 않는다. 낮은 장벽도 높은 벽도 같은 거리 값을 만들 수 있다. 초기 입력에는 이 둘을 구분할 높이 정보가 없었다. 제작자는 장애물 상단의 높이, 그 상단이 카메라에 보이는지, 기체가 도달할 수 있는 높이를 추가했다. 그 뒤 제작자가 구성한 낮은 장벽 장면에서는 climb의 확률이 0.93으로 나왔다. 높이 정보의 필요성을 설명하는 기록이며, 상승 버튼을 누르기만 하면 항상 통과한다는 뜻은 아니다.",
            "links": []
          },
          {
            "type": "table",
            "headers": [
              "입력에 담긴 내용",
              "Jev가 판단할 수 있는 것"
            ],
            "rows": [
              [
                "다섯 방향의 장애물 거리만 제공",
                "정면과 좌우가 막혔다는 단서는 있지만, 위로 넘을 수 있는지는 알 수 없다."
              ],
              [
                "장애물 상단 높이·상단의 관측 여부·상승 한계를 추가",
                "장애물보다 높이 올라갈 수 있는지 비교할 수 있다. 원문의 낮은 장벽 시험 응답은 climb 0.93이다."
              ]
            ]
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
            "text": "장벽 높이만 추가해도 아직 정보가 하나 부족하다. 같은 2m 장애물 앞에서도 1m까지만 올라갈 수 있는 기체와 3m까지 올라갈 수 있는 기체는 다르게 행동해야 한다. 위 AIRCRAFT의 can_climb_to_m은 이 상승 한계를 제공한다. Jev는 장애물 높이와 기체가 올라갈 수 있는 높이를 함께 보고 위로 넘을지 고른다. AIRCRAFT에는 기본 비행 고도 1.6m, 상승 한계 3.0m, 상승에 약 1.5초가 걸린다는 정보와 최고 속도 3.6m/s도 있다. 거리 값 25m는 그곳에 물체가 있다는 뜻이 아니라 카메라에서 아무것도 검출하지 못했다는 표시다. 이런 특수값의 뜻도 note로 알려 준다.",
            "links": [
              {
                "text": "can_climb_to_m",
                "url": "https://github.com/RomanSlack/jev-drone/blob/974b47378c14c6dcf7d11f7c813fba0f5f4d8b6a/tactics.py#L32-L39"
              }
            ]
          },
          {
            "type": "p",
            "text": "예를 들어 장애물 꼭대기가 지면에서 2m이고 기체가 올라갈 수 있는 높이가 3m라고 하자. 그러면 장애물보다 높이 올라갈 여지가 있다. 꼭대기가 4m라면 같은 기체는 위로 넘을 수 없다. 이는 숫자의 비교를 보여 주기 위한 예다. 실제로는 기체의 크기와 장애물 위에 남겨야 할 여유도 고려해야 한다. can_climb_to_m=3.0은 지금 위치에서 3m를 더 올라가라는 명령이 아니라 기체가 도달할 수 있는 높이의 한계다."
          }
        ]
      },
      {
        "id": "questions",
        "title": "잠시 가려진 목표와 놓친 목표",
        "blocks": [
          {
            "type": "p",
            "text": "따라가던 차량이 기둥 뒤로 0.6초 동안 가려졌다고 하자. 곧 다시 보일 수 있으므로 바로 수색으로 전환하면 추적을 불필요하게 끊는다. 반면 열린 공간에서 여러 초 동안 보이지 않는다면 이전 방향만 계속 따라가기 어렵다. target_truly_lost는 목표를 정말 놓쳤는지 Noul로 묻는다. 현재 상황에 따라 여섯 기동 중 하나를 고르는 질문은 maneuver다. hold_course는 현재 경로 유지, gap_left와 gap_right는 좌우의 열린 쪽으로 이동, climb은 상승, brake는 제동, reacquire는 목표 재탐색이다.",
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
            "text": "제작자가 구성한 짧은 가림 장면에서는 Choice의 확률이 여러 기동에 나뉘었지만 target_truly_lost는 0.12였다. 어느 기동이 나은지 애매해도 목표를 잃었다고 보지는 않은 것이다. 이 때문에 재탐색 여부에는 Noul을, 우회·상승·제동 선택에는 Choice를 사용한다. 별도의 위험 Score는 속도를 줄이는 데 쓴다. 따라서 어느 쪽으로 움직일지 확신하지 못했다는 이유만으로 목표를 잃었다고 처리하지 않는다.",
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
            "text": "표에서 같은 숫자처럼 보이는 값들도 의미가 다르다. risk 1.89는 위험 단계 위의 점수이며 충돌 확률 189%가 아니다. lost는 목표를 실제로 잃었는지에 대한 확률이다. Choice는 기동 후보 사이의 분포를 돌려준다. 코드는 risk로 속도를 줄이고, lost로 재탐색할지 정하며, Choice가 고른 기동으로 이동한다.",
            "links": []
          },
          {
            "type": "p",
            "text": "예를 들어 표의 7초 소실 장면에서 reacquire 0.96은 여섯 기동 중 재탐색에 높은 확률을 주었다는 뜻이고, lost 0.85는 목표를 정말 놓쳤다는 판단이다. 반면 0.6초 가림 장면의 lost 0.12는 재탐색을 시작하기보다 마지막으로 보인 방향을 더 따라갈 근거가 된다. 어느 방향으로 피할지 애매하다는 것과 목표가 사라졌다고 판단하는 것은 별개의 문제다."
          }
        ]
      },
      {
        "id": "calls",
        "title": "호출 시점과 판단의 유효기간",
        "blocks": [
          {
            "type": "p",
            "text": "앞이 열려 있고 목표를 계속 따라가고 있다면 직전 행동을 유지할 수 있다. 반대로 장애물이 가까워지거나 목표가 보이지 않으면 Jev에 다시 물어야 한다. 아래 decision_needed가 새 요청을 보낼 시점을 정한다.",
            "links": []
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
            "text": "nearest_obstacle_m은 가장 가까운 장애물까지의 거리다. 이 값이 기준보다 작거나, sectors_blocked가 1 이상이어서 막힌 방향이 있거나, unseen_for_s가 기준을 넘어 목표가 오래 보이지 않으면 새 판단이 필요하다. 셋 중 하나만 참이어도 된다. build_state는 임무인 mission, 기체 성능인 aircraft, 관측한 장면인 observed를 한 요청에 묶는다. 장면이 거의 같을 때는 이전 답을 재사용한다.",
            "links": []
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
            "text": "Jev 요청은 비행 제어와 별도의 실행 흐름인 작업 스레드에서 처리한다. 새 답이 오면 _latest에 저장하고, 제어기는 기다리지 않고 가장 최근 답을 읽는다. 다만 그 답이 언제 관측한 장면에 관한 것인지 알아야 한다. read는 현재 시각 now에서 그 장면의 시각 _stamp를 빼 age_s에 넣는다. 요청을 기다리는 동안 흐른 시간도 여기에 포함된다. 왼쪽으로 피하라는 답이 오래전에 관측한 장애물에 관한 것이라면, 이미 그 장애물을 지났을 수 있다.",
            "links": [
              {
                "text": "read",
                "url": "https://github.com/RomanSlack/jev-drone/blob/974b47378c14c6dcf7d11f7c813fba0f5f4d8b6a/tactics.py#L171-L175"
              }
            ]
          },
          {
            "type": "p",
            "text": "예를 들어 실행 시작 후 10.00초에 관측한 장면의 답이 10.12초에 도착했고, 제어기가 10.15초에 읽었다고 하자. age_s는 0.03이 아니라 0.15다. 답을 받은 뒤 지난 시간만 재면 모델을 기다린 0.12초가 빠지기 때문이다. 이 값은 답의 정확도 점수가 아니라, 그 답이 얼마나 오래된 관측에 근거하는지 알려 주는 시간이다."
          }
        ]
      },
      {
        "id": "simulation-failures",
        "title": "판단이 맞아도 비행이 실패했던 이유",
        "blocks": [
          {
            "type": "p",
            "text": "장애물이 가까운데도 피하지 않는다면 먼저 입력에 장애물이 있었는지 확인해야 한다. 이 실험에서는 카메라의 관측 거리 설정 때문에 가까운 물체가 아예 영상에서 사라졌다. MuJoCo의 znear와 zfar는 카메라가 보여 줄 가장 가까운 면과 가장 먼 면을 정한다. 값의 단위는 미터가 아니라 장면의 기준 크기인 stat.extent에 대한 비율이다. 이를 미터로 잘못 해석해 설정하자 약 1.93m 안쪽이 잘렸다. 안전 코드가 반응해야 할 물체를 못 보고 있었으므로, Jev의 판단을 바꾸기 전에 카메라 설정부터 고쳐야 했다.",
            "links": []
          },
          {
            "type": "p",
            "text": "좌표의 방향도 맞춰야 했다. 월드 좌표는 카메라가 돌아도 바뀌지 않는 공간의 기준 축이다. 이 장면에서는 +x를 보는 카메라의 화면 오른쪽이 월드의 -y에 해당했다. 부호를 반대로 연결하자 목표 쪽으로 돌라는 명령이 오히려 목표에서 멀어지는 회전이 됐다. 카메라가 기체 안에 있어 자기 몸을 장애물로 보는 문제도 있었다. 또 MuJoCo에서는 물체의 모양 조각을 geom, 이 조각들을 묶는 몸체를 body라고 부른다. 목표 차량의 기둥과 몸체를 서로 다른 물체로 취급해 차량 일부를 장애물로 피하기도 했다. 제작자는 자기 기체를 관측에서 제외하고, 목표 차량의 조각들은 같은 body로 묶어 인식하도록 고쳤다.",
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
            "text": "관측과 제어의 주기가 다른 데서도 오류가 생겼다. 카메라는 초당 15번 새 영상을 주지만 제어 코드는 초당 50번 실행된다. 카메라가 “오른쪽으로 더 돌아야 한다”고 준 같은 오차를 제어할 때마다 더하면, 다음 영상이 오기 전에 필요 이상으로 회전한다. 제작자는 새 카메라 영상이 올 때 한 번 목표 방향을 정하고, 다음 영상까지는 그 방향을 유지하도록 바꿨다."
          },
          {
            "type": "p",
            "text": "이를 각도로 단순화하면, 현재 방향에서 오른쪽 10도에 목표가 보였는데 같은 영상을 세 번 사용해 매번 10도씩 더 도는 문제가 된다. 필요한 회전은 10도인데 30도를 명령하는 셈이다. 새 영상에서 정한 목표 방향을 고정하면 세 번 제어하더라도 같은 목표를 향하게 된다. 이 숫자는 원문의 오류를 설명하기 위한 예다."
          },
          {
            "type": "p",
            "text": "마지막 시간 문제에서는 182번의 판단 요청 중 152번이 가득 찬 대기열에 막혔다. 시뮬레이션을 실제 시간보다 빠르게 돌려도 외부 API의 응답이 같은 비율로 빨라지지는 않는다. 시뮬레이션만 빨리 진행하면 이전 장면의 답을 기다리는 동안 기체가 더 멀리 날아간다. 그래서 실제 시간에 맞춰 시뮬레이션을 진행하도록 조정해야 했다.",
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
            "text": "옆으로 피하라는 답을 받았어도 갑자기 큰 속도를 명령하면 기체가 지나치게 기울 수 있다. 네 모터에 나눠 보낼 값을 계산하는 과정도 문제였다. 계산상 음수가 된 모터 명령을 단순히 0으로 자르면, 기체를 지탱할 추력과 돌리는 힘의 비율이 달라진다. 제작자는 기체를 지탱하는 추력을 우선하도록 모터 출력을 배분하고, 속도 명령도 한 번에 크게 바뀌지 않게 제한했다. 그 결과 순간 최대 기울기가 84도에서 약 40도로 줄었다.",
            "links": []
          },
          {
            "type": "p",
            "text": "거의 뒤집힌 기체가 돌아오지 않는 문제는 자세 오차를 계산하는 식에서 생겼다. θ를 목표 자세에서 벗어난 회전각이라고 하자. 이 코드가 회전 행렬로 계산하던 오차는 sin(θ)에 비례했다. sin(90°)는 1이지만 sin(180°)는 0이다. 기체가 거꾸로 뒤집혔는데도 되돌리는 신호가 작아질 수 있다. 제작자는 회전을 나타내는 다른 수학 표현인 쿼터니언을 사용해 sin(θ/2)에 비례하는 오차로 바꿨다. 180°에서 이 값은 sin(90°)=1이므로 큰 복구 신호가 남는다. 179도에서 복구를 확인했으며, 이 수정 후 진행 거리가 77m에서 88m로 늘었다고 기록했다.",
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
            "text": "아래로 빨리 내려가라는 명령도 기체를 뒤집을 수 있었다. 이 제어기는 원하는 수직 가속도에 중력을 더해 필요한 추력을 계산한다. 그 값이 음수가 되자 추력 방향을 아래로 만들기 위해 기체를 뒤집으라는 자세 명령이 나왔다. 하지만 이 비행에서 원하는 것은 뒤집기가 아니라 수평 자세를 유지한 하강이다. 제작자는 계산한 추력의 수직 성분을 양수로 제한해 이런 명령이 나오지 않도록 고쳤다.",
            "links": []
          },
          {
            "type": "p",
            "text": "옆으로 피하는 동작을 언제 끝낼지도 정해야 한다. 왼쪽으로 가라는 속도를 계속 유지하면 장애물을 피한 뒤 반대편 벽까지 갈 수 있다. 제작자는 측면 위치를 추정하고 목표 위치에 가까워지면 회피를 끝내도록 바꿨다. 벽이 가려져 거리를 잴 수 없는 동안에도 기체가 터널 중앙에 있다고 가정하지 않는다. 직전 위치에서 얼마나 옆으로 움직였는지 누적해 위치를 추정하고, 다시 믿을 만한 벽 관측이 들어오면 그 값으로 보정한다. 위치 오차의 중앙값은 약 0.07m였다.",
            "links": []
          },
          {
            "type": "p",
            "text": "목표 차량이 가려졌을 때는 마지막 화면 방향만 기억해서도 안 된다. 기체가 회전하면 화면 오른쪽이 가리키는 실제 방향도 달라진다. 그래서 카메라에서 본 목표의 방향과 거리, 기체 자세를 함께 써서 월드 좌표의 목표 위치를 구한다. 위치가 시간에 따라 얼마나 바뀌는지로 속도를 추정하고, 가려진 동안 다음 위치를 예측한다. 원문이 보고한 오차는 위치 약 0.14m, 속도 약 0.12m/s다. 속도 계산에는 약 1초 동안의 위치 변화를 사용했다. 카메라 한 간격인 0.07초로 나누면 작은 위치 측정 오차도 큰 속도 오차로 증폭되기 때문이다.",
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
            "text": "후속 tunnel.py는 더 어려운 조건을 시험한다. 620m 터널에서 15개 장애물을 지나 차량을 추적하며, 별도의 안전 반사나 사람이 작성한 회피 규칙을 두지 않았다. 모터를 제어하는 코드는 있지만, 어디로 피할지는 Jev만 결정한다. 앞 코스처럼 여섯 기동 중 하나를 고르는 대신 두 Score 질문으로 좌우 어느 쪽으로 얼마나 조향할지와 고도를 어떻게 바꿀지 묻는다. 돌아온 점수를 제어 명령으로 바꾼다.",
            "links": [
              {
                "text": "Score",
                "url": "https://docs.typesafe.ai/primitives/score"
              }
            ]
          },
          {
            "type": "p",
            "text": "이 실험은 API 요청을 보내는 작업 스레드를 여러 개 두어 초당 21개의 결정을 공급했다. 그런데 9m/s로 날던 기체가 옆으로 2m 이동하는 데는 약 0.70초가 걸렸다. 제작자가 나눈 반응 시간에서 모델의 몫은 약 13%, 기체 운동은 약 80%였다. 응답 간격을 줄여도 기체가 옆으로 움직이는 데 걸리는 0.70초는 남았다.",
            "links": []
          },
          {
            "type": "p",
            "text": "터널 전체를 안정적으로 통과하는 데까지는 이르지 못했다. 회피를 오래 지속해 반대편 벽에 붙는 문제가 남았다. 이제는 높이를 알려 주는 것으로 해결할 수 없다. 옆으로 얼마나 움직였는지 추적하고, 벽에 닿기 전에 회피를 끝내야 한다.",
            "links": []
          },
          {
            "type": "source",
            "label": "터널 실험과 반응 시간 분석",
            "url": "https://github.com/RomanSlack/jev-drone/blob/main/README.md#the-tunnel-experiment-tunnelpy---partial"
          },
          {
            "type": "p",
            "text": "터널 실험의 응답 지연 중앙값은 0.118초, p90은 0.164초였다. p90은 관측한 응답의 90%가 그 시간 이하에 도착했다는 뜻이다. 한 요청이 끝나야 다음 것을 보내는 순차 호출은 약 7.4Hz가 한계였지만, 4~6개 작업자를 겹쳐 약 2,000회 호출하는 동안 초당 21개의 답을 받았다. 원문은 반응 시간을 인식 0.03초, Jev 대기 0.118초, 판단이 적용되기까지 추가로 지난 시간 0.024초, 옆으로 2m 이동하는 시간 0.70초로 나눈다. 새 답을 자주 받아도 기체가 실제로 옆으로 움직이는 데 걸리는 시간이 가장 길었다.",
            "links": []
          },
          {
            "type": "p",
            "text": "최선의 실행에는 충돌 0회, 목표 가시율 94%라는 기록도 있다. 그러나 앞 코스처럼 터널 전체를 안정적으로 통과하지는 못했다. 이 저장소를 따라가면 낮은 보 앞에서는 입력에 높이를 추가하고, 잘못된 회전 앞에서는 좌표 부호를 고치며, 반대편 벽으로 밀려갈 때는 측면 위치를 추적하는 식으로 각각 다른 부분을 수정했음을 확인할 수 있다.",
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
      },
      {
        "label": "Choice · 원문",
        "url": "https://docs.typesafe.ai/primitives/choice"
      },
      {
        "label": "decision_needed · 원문",
        "url": "https://github.com/RomanSlack/jev-drone/blob/974b47378c14c6dcf7d11f7c813fba0f5f4d8b6a/tactics.py#L91-L101"
      }
    ],
    "leadLinks": []
  },
  "robot-arm": {
    "minutes": 13,
    "title": "Jev로 로봇팔을 움직이기: 선택과 실행 사이의 문제",
    "lead": "로봇팔이 상자를 집지 못했다. AI가 엉뚱한 동작을 골랐을 수도 있지만, 사람이 올바른 동작을 골라도 실패한다면 먼저 팔을 점검해야 한다. Control-derek의 SO-101 실험은 여기서 다시 출발했다. 너무 작은 이동 명령과, 물체를 잡는 집게인 그리퍼가 상자를 지나치게 누르는 문제를 고쳤다. 사람이 상자를 집을 수 있게 된 뒤 Jev에 위치를 문장과 숫자, 방향 단어로 알려 주며 동작을 고르게 했다.",
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
            "text": "이전 시스템은 약 8일 동안 47번 실행했지만 상자를 한 번도 들어 올리지 못했다. 사람이 행동을 직접 골라도 결과는 같았다. 그러면 우선 모델 밖에서 원인을 찾아야 한다. 이동을 너무 작게 나눠 관절 위치를 조절하는 서보 모터가 반응하지 않았고, 관절이 목표를 조금 벗어나도 실행을 중단했다. 후보를 여러 차례 걸러 내는 과정에서 상자 쪽으로 가는 행동이 목록에서 빠지기도 했다.",
            "links": []
          },
          {
            "type": "p",
            "text": "제작자는 먼저 팔을 펼치고 손끝을 15mm나 40mm처럼 더 크게 움직이게 했다. 관절이 목표에 덜 도달하면 실제 위치를 읽어 남은 차이만큼 더 움직이도록 보정했다. 그리퍼는 접촉 뒤 가볍게 쥐도록 바꿨다. 이렇게 고친 동작 메뉴로는 사람이 첫 시도에 상자를 집었다. 그 뒤 같은 메뉴를 Jev에 주고 다음 동작을 고르게 했다.",
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
            "text": "아주 조금 움직이라는 명령에는 왜 반응하지 않았을까? 서보에는 목표가 조금 바뀌어도 움직이지 않는 구간인 dead band가 있다. 손끝을 어디로 옮길지 주면 각 관절을 얼마나 움직여야 하는지 계산하는 방법을 역기구학, 또는 IK라고 한다. 이전 시스템은 팔이 접히고 팔꿈치가 더 움직일 수 있는 한계에 걸린 상태에서, IK로 밀리미터 단위의 작은 손끝 이동을 요구했다. 계산된 관절 변화는 프로그램의 정규화된 제어값으로 약 0.5단위에 그쳤다. 이 단위는 실제 각도나 손끝의 이동거리가 아니라, 관절 제어에 쓰도록 변환한 수치다. 서보가 반응하지 않으니 “앞으로”를 반복해도 사진은 거의 같았다. 팔을 펼친 뒤 손끝을 15/40mm씩 옮기게 하자 관절 목표도 충분히 크게 바뀌었다.",
            "links": []
          },
          {
            "type": "p",
            "text": "상자에 닿은 뒤 더 세게 쥐는 것도 실패 원인이었다. 그리퍼 제어값을 5단위 더 닫는 쪽으로 주자 부하가 27%까지 올라 25% 과부하 보호 기준을 넘었다. 이 단위 역시 mm가 아닌 그리퍼 제어값이다. 추가 압착을 2단위로 줄이고 부하가 높으면 조금 풀어 15% 아래로 낮추자 상자를 잡은 채 유지할 수 있었다.",
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
            "text": "팔이 움직이기 시작하면 어느 방향으로 옮길지 정해야 한다. 두 카메라로 상자와 손끝을 찍고, 비전 모델이 그 사이의 위치 차이를 구한다. Jev는 이 값을 받아 다음 동작을 고른다.",
            "links": []
          },
          {
            "type": "diagram",
            "title": "두 사진에서 상자 위치를 찾고 로봇팔을 움직이는 과정",
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
            "caption": "비전 모델이 두 사진에서 손끝과 목표의 위치 차이를 구한다. Jev가 이동·집기 메뉴에서 하나를 고르면 로봇팔이 실행한다.",
            "extra": null
          },
          {
            "type": "p",
            "text": "로봇을 움직이려면 상자가 사진의 어디에 있는지에 더해 손끝에서 어느 방향으로 얼마나 떨어져 있는지 알아야 한다. 고정 카메라와 손목 카메라의 사진을 비전 모델에 보내 이 차이를 forward, left, up으로 받는다. 각각 앞뒤·좌우·위아래 방향의 위치 차이다. Jev에는 사진 대신 이 수치와 작업 순서, 이동 규칙, 그리퍼 상태, 최근 행동을 보낸다. 다음은 README에 실린 비전 모델의 응답 예시다.",
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
            "text": "target_offset_cm의 단위는 cm다. forward=-0.1은 목표가 손끝보다 0.1cm 뒤에, left=0.4는 0.4cm 왼쪽에, up=-1.3은 1.3cm 아래에 있다는 뜻이다. stage=\"grasp\"는 집는 단계다. carton_between_fingers가 참이어도 carton_held가 거짓이면 상자가 손가락 사이에 들어왔지만 아직 잡히지는 않은 상태다. 상자가 사이에 있다는 정보만으로 들어 올리면 놓칠 수 있으므로, 그리퍼를 닫고 실제로 잡혔는지 확인해야 한다.",
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
            "text": "카메라 화면의 오른쪽이 로봇이 움직일 오른쪽과 같지는 않다. 카메라가 어느 방향을 향하는지에 따라 달라지기 때문이다. 그래서 비전 모델에는 로봇의 forward·left·up 축이 화면에서 어느 방향인지, 상자의 크기와 팔의 준비 자세를 알려 준다. 고정 카메라는 전체 배치를, 손목 카메라는 그리퍼 주변을 본다. 원본 장치의 해상도는 각각 1920×1080과 640×480이다. 실제로 물체를 움직이는 SO-101 follower 팔의 관절에는 Feetech STS3215 서보가 쓰이며, 로봇 제어 도구인 LeRobot으로 관절의 기준 위치와 범위를 보정했다.",
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
            "text": "비전 응답은 두 경로로 받을 수 있다. API 모드는 두 사진을 이미지와 텍스트를 함께 처리하는 멀티모달 모델의 API에 직접 보낸다. mailbox 모드는 vision_request.json에 사진 경로를 써 두고, 다른 모델이나 사람이 그 사진을 해석해 vision.json에 답을 쓰면 받아온다. 파일을 요청함과 응답함처럼 쓰는 방식이다. 원문 실행에서는 멀티모달 모델이 이 응답을 작성했고, Jev는 그 모델이 추정한 위치를 받아 동작을 골랐다.",
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
            "text": "팔이 제대로 움직여도 Jev가 상자 위치를 잘못 해석하면 엉뚱한 곳으로 갈 수 있다. 제작자는 비전 모델이 Jev에 넘기는 설명을 바꾸어 세 번 실행했다.",
            "links": []
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
            "text": "세 번째 실행에서는 위치 차이를 숫자로 주고 어떤 차이에 어떤 이동을 적용할지 규칙을 정했다. 그 결과 14단계, 6.5분에 상자를 집는 데 성공했다. 이후 로봇을 움직이지 않고 입력에 맞는 행동만 고르게 하는 오프라인 검사도 했다. 숫자와 규칙만 준 문제에서는 10개 중 6개를, 방향 단어와 이동 크기를 덧붙인 문제에서는 13개 중 13개를 맞혔다.",
            "links": [
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
            "text": "6/10과 13/13은 로봇팔로 상자를 집은 횟수가 아니다. 저장한 관측을 입력으로 주고, 규칙에 맞는 행동을 고르는지 검사한 오프라인 결과다. 문제 집합과 입력 표현도 서로 다르다. 실제 팔로 실행하면 카메라가 위치를 잘못 추정하거나, 손끝이 덜 움직이거나, 접촉한 상자가 밀릴 수 있다. 원문의 실제 성공은 앞서 기록한 14단계·6.5분 실행으로 확인한다.",
            "links": []
          },
          {
            "type": "p",
            "text": "입력을 바꾸는 실험에서는 비전 모델이 무엇을 이미 결정했는지도 확인해야 한다. “상자가 손끝 아래에 있다”는 위치 설명이지만, “이제 손끝을 내려라”는 행동 지시다. 뒤의 문장을 Jev에 주고 하강을 골랐다고 해서 Jev가 위치만으로 하강을 알아냈다고 할 수는 없다. 반대로 위치 설명만 주고 틀린 행동을 골랐다면 좌표 표현과 이동 규칙을 더 분명하게 만드는 실험을 할 수 있다."
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
            "text": "word의 v는 위치 차이, pos와 neg는 양수·음수일 때 붙일 방향 단어, tol은 맞춰졌다고 볼 허용 오차다. forward가 양수면 FORWARD, 음수면 BACK을 붙인다. 여기서는 오차가 1cm 이내면 aligned, 즉 충분히 정렬됐다고 표시한다. 그보다 큰 차이에서는 3cm 이상을 큰 이동, 3cm 미만을 작은 이동으로 적는다. 아래 horizontally_aligned는 앞뒤·좌우가 각각 1.5cm 이내인지, at_target은 세 방향 모두 1cm 이내인지를 검사한다. Jev는 숫자와 함께 이 설명을 받는다.",
            "links": [
              {
                "text": "word",
                "url": "https://github.com/Control-derek/so101-jev/blob/621b235e272c9fd0f692945ff938e64c63ce8297/lean_runner.py#L544-L554"
              }
            ]
          },
          {
            "type": "p",
            "text": "예를 들어 word(4.0, \"FORWARD\", \"BACK\", 1.0)은 “target is 4.0 cm FORWARD (3 cm or more: large move)”를 만든다. -2.0을 넣으면 “target is 2.0 cm BACK (under 3 cm: small move)”, 0.5를 넣으면 aligned다. 이 문장은 Jev가 추론해 만든 것이 아니라 위 함수가 숫자를 비교해 붙인 설명이다. 입력에 숫자와 이 설명을 함께 넣으면 Jev가 부호를 해석하는 일을 줄일 수 있다."
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
            "text": "target_offset_cm과 target_offset_words에는 같은 측정값을 넣는다. 하나는 숫자로, 다른 하나는 코드가 바꾼 방향 단어로 표현한다. 여기에 procedure와 movement_rule을 더해 접근·집기·들기·놓기 중 지금 무엇을 해야 하는지 알려 준다. Jev는 위치 설명과 작업 순서를 함께 보고 메뉴에서 동작을 고른다.",
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
            "text": "forward가 +4.0cm라면 앞으로 큰 이동이 필요하다고 표현하고, up이 -6.5cm라면 아래쪽이라고 표현한다. 그렇다고 두 값이 크다는 이유만으로 바로 내려가면 되는 것은 아니다. 아직 상자 위에 정렬하지 않았다면 수평 이동이 먼저일 수 있고, 이미 상자를 잡았다면 내려가는 목적도 달라진다. 따라서 “아래에 있다”는 정보만 보고 하강을 고르지 않도록, 현재 작업 단계도 함께 알려 준다.",
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
            "text": "프로그램은 이동·손목 회전·그리퍼 조작 메뉴를 만들고 각 항목에 설명과 실행할 관절 목표를 저장한다. 아래 요청은 이 메뉴의 설명을 Choice 후보로 보낸다.",
            "links": []
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
            "text": "menu의 각 항목에는 Jev에 보여 줄 criteria 설명과 실행할 target 관절값이 함께 있다. 위 요청은 설명만 후보로 보낸다. 모델이 키 하나를 반환하면 같은 menu에서 그 키의 실행 정보를 찾는다. 이동·손목 회전·그리퍼 조작 외에, 작업을 마칠 수 있는 단계에서는 done도 후보에 넣는다.",
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
            "text": "execute는 먼저 arm.read()로 실제 관절값을 읽는다. close라면 그리퍼를 닫고, done이면 끝났다고 반환하며, 나머지는 항목에 저장된 target으로 이동한다. 팔을 옮길 때는 현재 그리퍼 목표를 유지해 잡은 상자를 놓지 않게 한다. 별도로 정한 시간이 없으면 최대 관절 변화량 delta로 이동 시간을 계산하되 1.2~4.0초로 제한한다. 명령을 보냈다고 목표에 정확히 닿았다고 가정하지는 않는다. 실행 뒤 관절값을 다시 읽고 사진을 새로 찍어 다음 판단에 사용한다.",
            "links": []
          },
          {
            "type": "p",
            "text": "예를 들어 상자를 잡고 앞으로 이동하는 메뉴를 골랐다고 하자. 팔의 관절 목표만 바꾸면서 그리퍼는 지금의 닫힌 목표를 유지해야 한다. 위 코드의 gripper=arm.goal[\"gripper\"]가 그 역할을 한다. 반대로 open_gripper를 골랐을 때까지 이 값을 유지하면 손을 열 수 없으므로, 그 동작은 예외로 둔다. 하나의 행동 이름을 실행할 때도 팔 이동과 잡는 상태를 함께 다뤄야 하는 이유다."
          },
          {
            "type": "source",
            "label": "원본 프로젝트와 단계별 로그",
            "url": "https://github.com/Control-derek/so101-jev/blob/main/README.md"
          },
          {
            "type": "p",
            "text": "기본 메뉴는 16개 동작이며 완료 상태에서는 done이 추가될 수 있다. 수평 이동은 15/40mm, 상승은 15/40mm, 하강은 10/30mm로 나뉘고 손목 회전과 그리퍼 열기·닫기가 있다. 모델이 이 중 하나의 키를 반환하면 코드는 메뉴에 저장된 관절 목표를 보낸다.",
            "links": []
          },
          {
            "type": "p",
            "text": "실제 관절이 목표에 덜 도달하면, 목표와 측정값의 차이를 반복해서 더해 추가 명령을 만든다. 이것이 원문의 외부 적분 보정이며, 보정량은 ±10단위로 제한했다. 관절값에서 손끝 위치를 계산하는 순기구학 모델에도 오차가 있었다. 이 모델은 테이블 근처의 손끝을 실제보다 약 1cm 높게 추정했고, 첫 집기는 상자 위에서 빗나갔다. 한 번 더 10mm 내려서 잡았다. 비전 응답을 기다리는 동안에는 서보가 현재 목표 자세를 유지한다.",
            "links": []
          },
          {
            "type": "p",
            "text": "이 구현에는 관절의 움직임 범위를 제한하고 서보 오류에 대응하는 코드가 있다. 다만 모델이 고른 동작의 위험을 별도로 판단해 거부하는 소프트웨어 안전 게이트는 두지 않았다. 제작자는 사람이 전원 스위치 옆에서 지켜보며 실행했다. 앞서 본 드론은 50Hz 안전 코드가 Jev의 판단을 바꿀 수 있었지만, 이 로봇팔 실험은 사람이 멈출 수 있는 조건이었다.",
            "links": []
          },
          {
            "type": "p",
            "text": "단계별 기록에는 사진 두 장, 비전 응답, Jev 요청과 응답, 관절 값, 영상이 남는다. 덕분에 첫 성공의 비전 설명에 행동 조언이 섞였다는 사실도 찾을 수 있었다. 14단계 6.5분의 완료 시간에는 약 1초의 Jev 응답뿐 아니라 촬영, 비전 처리, 실제 이동과 대기가 포함된다. Jev 호출만 단축해도 촬영과 비전 처리, 팔이 움직이는 동안의 대기는 그대로 남는다.",
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
      },
      {
        "label": "47번 실패 · 원문",
        "url": "https://github.com/Control-derek/so101-jev"
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

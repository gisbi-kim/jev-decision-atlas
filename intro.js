"use strict";
window.ATLAS_INTRO = {
  "id": "intro",
  "number": "00",
  "name": "Jev & System One",
  "author": "TypeSafe · RT616 해설",
  "input": "상태 + 질문 + 가능한 답",
  "output": "선택 · 확률 · 점수",
  "executor": "판단을 조합하는 프로그램",
  "credit": "",
  "links": [
    {
      "label": "Diogo Almeida · Introducing System One Models & Jev · 2026.09.15",
      "url": "https://typesafe.ai/blog/introducing-system-one-models-and-jev"
    }
  ]
};
window.ATLAS_ARTICLES.intro = {
  "title": "Jev란 무엇인가: 판단을 프로그램에 넣는 법",
  "lead": "게임 속 캐릭터의 체력이 얼마 남지 않았다. 적을 공격할지, 회복약을 찾아갈지 정해야 한다. Jev에 현재 체력과 주변 상황, 가능한 행동을 알려 주면 그중 하나를 고른다. 프로그램은 그 답에 따라 캐릭터를 움직이고, 이동한 뒤의 상태를 다시 Jev에 보낸다. 이 강의에서는 회복·전투·탐색을 고르는 예제를 만들며 이 과정을 따라간다.",
  "origin": {
    "label": "Diogo Almeida · Introducing System One Models & Jev · 2026.09.15",
    "url": "https://typesafe.ai/blog/introducing-system-one-models-and-jev"
  },
  "minutes": 25,
  "hideMedia": true,
  "refs": [
    {
      "label": "System One",
      "url": "https://docs.typesafe.ai/concepts/system-one"
    },
    {
      "label": "상태 설계",
      "url": "https://docs.typesafe.ai/concepts/state"
    },
    {
      "label": "Choice",
      "url": "https://docs.typesafe.ai/primitives/choice"
    },
    {
      "label": "Noul",
      "url": "https://docs.typesafe.ai/primitives/noul"
    },
    {
      "label": "Score",
      "url": "https://docs.typesafe.ai/primitives/score"
    },
    {
      "label": "확률과 confidence",
      "url": "https://docs.typesafe.ai/confidence"
    },
    {
      "label": "학습 목표와 RLCD",
      "url": "https://docs.typesafe.ai/introduction/machine-learning-primer"
    },
    {
      "label": "여러 질문의 병렬 처리",
      "url": "https://docs.typesafe.ai/patterns/fan-out"
    },
    {
      "label": "후보가 적절한지 확인하기",
      "url": "https://docs.typesafe.ai/patterns/companion-noul"
    },
    {
      "label": "Python SDK 시작하기",
      "url": "https://docs.typesafe.ai/introduction/quickstart"
    }
  ],
  "sections": [
    {
      "id": "why",
      "title": "설명문 다음에는 누가 버튼을 누를까?",
      "blocks": [
        {
          "type": "p",
          "text": "캐릭터를 회복약으로 보내려면 약이 있는 곳까지 길을 찾고 이동 함수를 호출해야 한다. 도중에 적을 만나면 피하거나 싸워야 한다. Jev에는 먼저 회복·전투·탐색 중 무엇을 할지 묻는다. 프로그램은 각 행동에 recover, fight, explore라는 이름을 붙여 두고, 돌아온 이름에 맞는 함수를 실행한다.",
          "links": []
        },
        {
          "type": "p",
          "text": "TypeSafe의 첫 소개 글은 대화 모델이 발전했는데도 자동화가 기대만큼 늘지 않은 이유를 묻는다. 사람이 모델의 설명을 읽고 다음 일을 처리하는 데서 더 나아가, 프로그램이 답을 받아 바로 움직이게 하려는 것이다. Jev는 주어진 상태에서 후보 하나를 고르거나 확률과 점수를 반환한다. 아래 코드에서는 recover를 받으면 회복약을 목표로 지정하고 발사를 끈다.",
          "links": [
            {
              "text": "첫 소개 글",
              "url": "https://typesafe.ai/blog/introducing-system-one-models-and-jev"
            }
          ]
        },
        {
          "type": "code",
          "lang": "python",
          "kind": "직접 계산",
          "label": "선택 이름과 실행할 함수를 연결하기",
          "code": "# 모델 응답이 왔다고 가정한, API 없는 작은 예제입니다.\nchosen = \"recover\"\ncommands = {\n    \"recover\": {\"target\": \"medkit\", \"fire\": False},\n    \"fight\":   {\"target\": \"enemy\",  \"fire\": True},\n    \"explore\": {\"target\": \"exit\",   \"fire\": False},\n}\nprint(commands[chosen])",
          "run": "offline"
        },
        {
          "type": "p",
          "text": "여기까지 실행하면 회복약으로 가겠다고 정했을 뿐이다. 다음에는 약까지의 경로를 구하고, 게임 엔진을 통해 캐릭터를 움직이고, 체력이 회복됐는지 확인해야 한다. 뒤에서 살펴볼 포켓몬 구현도 모델이 목적지를 고르면 경로 탐색 코드가 그곳까지 이동시킨다.",
          "links": []
        }
      ]
    },
    {
      "id": "system-one",
      "title": "System One은 모델의 종류, Jev는 그 모델의 이름",
      "blocks": [
        {
          "type": "p",
          "text": "이처럼 프로그램에서 바로 쓸 수 있는 작은 판단을 빠르게 돌려주는 모델을 TypeSafe는 System One이라고 부른다. Jev는 그 첫 모델의 이름이다. 상황과 기준을 자연어로 이해하지만 결과는 선택지, 수치, 확률처럼 정한 형식으로 나온다. System One이라는 이름은 대니얼 카너먼이 널리 알린 빠른 직관적 사고와 느린 숙고의 구분에서 왔다. TypeSafe는 그중 빠르게 반응하는 사고에 빗대어 이름을 붙였다.",
          "links": [
            {
              "text": "System One",
              "url": "https://docs.typesafe.ai/concepts/system-one"
            }
          ]
        },
        {
          "type": "p",
          "text": "포켓몬에서 소포를 받아 오박사에게 전달하려면 상점에 갔다가 연구소로 돌아와야 한다. 이 계획을 세우는 모델과, 이동 중 풀밭을 피할지 정하는 모델을 따로 둘 수 있다. 포켓몬의 2389 구현이 그렇게 작동한다. 다른 생성 모델이 퀘스트와 목적지를 정하고, Jev는 현재 체력과 레벨을 보고 풀밭을 피할지 전투를 하며 갈지를 고른다.",
          "links": [
            {
              "text": "포켓몬의 2389 구현",
              "url": "#case/pokemon"
            }
          ]
        },
        {
          "type": "p",
          "text": "Jev라는 이름은 경제학자 William Stanley Jevons에서 따왔다. 한 번 판단하는 비용이 낮아지면 이미 하던 작업의 요금만 줄어드는 것이 아니라, 이전에는 비용 때문에 묻지 못했던 상황에도 모델을 사용할 수 있다는 기대가 담겼다. 게임에서 다음 행동을 계속 물으려면 호출 한 번의 비용이 충분히 낮아야 한다.",
          "links": [
            {
              "text": "이름",
              "url": "https://typesafe.ai/blog/introducing-system-one-models-and-jev"
            }
          ]
        }
      ]
    },
    {
      "id": "state",
      "title": "상태에는 사실을, 질문에는 판단 기준을",
      "blocks": [
        {
          "type": "p",
          "text": "체력이 18이라는 숫자만 보고 회복이 급한지 판단할 수 있을까? 최대 체력이 20이면 아직 여유가 있지만 100이면 크게 줄어든 상태다. 적이 가까이 있는지, 회복약까지 가는 길이 열려 있는지도 알아야 한다. 아래 예제는 이 정보를 모아 Jev에 보낸다.",
          "links": []
        },
        {
          "type": "code",
          "lang": "python",
          "kind": "직접 계산",
          "label": "이번 판단에 필요한 상태 구성",
          "code": "state = {\n    \"player\": {\"health\": 18, \"max_health\": 100, \"ammo\": 12},\n    \"enemy\": {\"distance_m\": 8, \"approaching\": True},\n    \"medkit\": {\"visible\": True, \"route_clear\": True},\n    \"order\": \"살아남는 것을 우선하되, 안전하면 출구를 찾는다.\",\n}\nassert state[\"player\"][\"health\"] <= state[\"player\"][\"max_health\"]\nprint(state)",
          "run": "offline"
        },
        {
          "type": "p",
          "text": "공식 State 문서는 state를 문자열, 객체 또는 배열로 받을 수 있다고 설명한다. 위 예제는 health와 max_health에 현재·최대 체력을 넣고, order에는 “살아남는 것을 우선하라”는 지시를 넣었다. 체력과 주변 적을 그대로 둔 채 order만 “적을 처리하라”로 바꾸면, 지시에 따라 Jev가 다른 행동을 고르는지 비교할 수 있다.",
          "links": [
            {
              "text": "State 문서",
              "url": "https://docs.typesafe.ai/concepts/state"
            }
          ]
        },
        {
          "type": "p",
          "text": "적까지의 거리를 사진에서 추정했다면 물체를 잘못 찾거나 거리를 틀리게 잴 수 있다. 게임 RAM에서 읽었다면 그런 영상 분석을 거치지 않는다. Jev에는 둘 다 거리 값으로 들어가므로, 입력에 숫자가 있다는 이유만으로 모델이 화면을 보고 거리를 알아냈다고 생각해서는 안 된다. DOOM과 포켓몬 글에서는 이 값을 어디서 읽어 오는지도 함께 설명한다.",
          "links": []
        }
      ]
    },
    {
      "id": "primitives",
      "title": "세 종류의 질문은 답의 의미가 다르다",
      "blocks": [
        {
          "type": "p",
          "text": "회복과 전투 중 하나를 고르는 질문에는 행동 이름으로 답하면 된다. 그러나 “지금 회피해야 하는가”에는 회피가 필요한지 답해야 하고, “얼마나 위험한가”에는 위험의 정도를 매겨야 한다. Jev에 질문을 보낼 때는 어떤 답을 받을지도 정한다.",
          "links": []
        },
        {
          "type": "table",
          "headers": [
            "형식",
            "이 게임에서 묻는 질문",
            "답을 쓰는 방법"
          ],
          "rows": [
            [
              "Choice",
              "회복·전투·탐색 중 지금의 우선 목표는?",
              "선택 이름으로 실행 분기"
            ],
            [
              "Noul",
              "지금 적의 공격을 피해야 하는가?",
              "참일 확률을 임계값과 비교"
            ],
            [
              "Score",
              "현재 상황은 얼마나 위험한가?",
              "정의한 위험 단계 위의 점수로 처리"
            ]
          ]
        },
        {
          "type": "p",
          "text": "회복과 전투 중 하나를 고를 때는 Choice를 쓴다. recover와 fight라는 키를 주고, 각각 회복약으로 이동하는 행동과 적을 공격하는 행동이라고 설명한다. 모델은 이 설명을 보고 후보를 비교한 뒤 프로그램이 알아볼 키를 반환한다.",
          "links": [
            {
              "text": "Choice",
              "url": "https://docs.typesafe.ai/primitives/choice"
            }
          ]
        },
        {
          "type": "p",
          "text": "Noul에는 “지금 회피가 필요하다”라는 문장을 주고, 참일 확률을 묻는다. 모델은 0~1 사이의 값을 반환한다. 0.9면 필요하다는 쪽, 0.1이면 필요하지 않다는 쪽이며 0.5 근처는 어느 쪽도 뚜렷하지 않다. 한편 위험이 얼마나 큰지 평가하려면 낮음·중간·높음처럼 순서 있는 단계를 정해야 한다. 여기에 쓰는 Score는 세 단계일 때 0~2 사이의 점수가 나올 수 있다. 1.4는 단계 위의 위치이지 충돌 확률 140%가 아니다.",
          "links": [
            {
              "text": "Noul",
              "url": "https://docs.typesafe.ai/primitives/noul"
            },
            {
              "text": "Score",
              "url": "https://docs.typesafe.ai/primitives/score"
            }
          ]
        },
        {
          "type": "p",
          "text": "현재 공식 문서에는 이미지의 영역을 반환하는 Box도 있다. 이 강의의 게임 예제에서는 행동을 선택하고 필요성과 위험을 평가하므로 앞의 세 형식을 사용한다. 다만 뒤에서 살펴볼 DOOM 데모는 이미지를 보내지 않았다. 게임 상태를 항목별로 정리해 보냈다.",
          "links": [
            {
              "text": "현재 공식 문서",
              "url": "https://docs.typesafe.ai/introduction"
            },
            {
              "text": "DOOM 데모",
              "url": "https://typesafe.ai/blog/introducing-system-one-models-and-jev"
            }
          ]
        },
        {
          "type": "exercise",
          "question": "“피할 방향”과 “피해야 하는지”를 모두 Choice 하나로 물으면 어떤 문제가 생길까?",
          "answer": "왼쪽·오른쪽·뒤쪽만 후보로 주면 회피가 불필요해도 그중 하나가 선택된다. 그대로 진행한다는 후보를 넣거나, 회피 필요성을 Noul로 따로 묻고 그 결과가 충분히 높을 때만 방향 선택을 사용해야 한다."
        }
      ]
    },
    {
      "id": "request",
      "title": "한 번의 호출로 목표·회피·위험을 묻기",
      "blocks": [
        {
          "type": "p",
          "text": "이제 같은 상태에서 우선 목표, 회피 필요성, 위험 정도를 함께 묻는다. 아래 코드는 공식 Python SDK 형식을 사용해 이 강의를 위해 만든 게임 예제다. Python 3.10 이상에서 typesafe-sdk를 설치하고 TYPESAFE_API_KEY 환경 변수를 준비하면 실행할 수 있다. 설치와 인증은 공식 Quick start에 설명돼 있다. API 요청은 이 코드를 실행할 때 전송된다.",
          "links": [
            {
              "text": "공식 Quick start",
              "url": "https://docs.typesafe.ai/introduction/quickstart"
            }
          ]
        },
        {
          "type": "code",
          "lang": "python",
          "kind": "SDK 활용 예제",
          "label": "같은 상태에 서로 다른 세 질문 보내기",
          "code": "from typesafe_sdk import Choice, Noul, Score, TypeSafeClient\n\nstate = {\n    \"player\": {\"health\": 18, \"max_health\": 100, \"ammo\": 12},\n    \"enemy\": {\"distance_m\": 8, \"approaching\": True},\n    \"medkit\": {\"visible\": True, \"route_clear\": True},\n    \"order\": \"살아남는 것을 우선하되, 안전하면 출구를 찾는다.\",\n}\nwith TypeSafeClient(model=\"jev-latest\") as client:\n    result = client.system_one(\n        state=state,\n        questions={\n            \"goal\": Choice(\n                instructions=\"현재 상태와 지시에 맞는 우선 목표는?\",\n                criteria={\n                    \"recover\": \"회복약으로 이동해 체력을 회복한다\",\n                    \"fight\": \"접근하는 적을 공격한다\",\n                    \"explore\": \"출구를 찾으며 이동한다\",\n                },\n            ),\n            \"dodge\": Noul(instructions=\"지금 적의 공격을 피할 필요가 있다\"),\n            \"danger\": Score(\n                instructions=\"현재 생존을 위협하는 정도는?\",\n                criteria=[\n                    \"즉각적인 위협이 없다\",\n                    \"위협이 있지만 대응할 여유가 있다\",\n                    \"즉시 대응하지 않으면 생존이 어렵다\",\n                ],\n            ),\n        },\n    )\nprint(result.answers[\"goal\"].choice)\nprint(result.answers[\"dodge\"].noul)\nprint(result.answers[\"danger\"].score)",
          "run": "api"
        },
        {
          "type": "p",
          "text": "요청 코드에서는 세 질문에 goal, dodge, danger라는 ID를 붙였다. 각각 무엇을 묻는지는 instructions에 썼고, Choice의 criteria에는 허용할 키와 행동 설명을 넣었다. 답이 오면 같은 ID로 찾아 goal에서는 선택 이름을, dodge에서는 참일 확률을, danger에서는 위험 점수를 꺼낸다.",
          "links": []
        },
        {
          "type": "p",
          "text": "세 질문을 같이 보냈다고 뒤 질문이 앞 질문의 답을 보고 판단하는 것은 아니다. 모두 같은 state에서 독립적으로 답한다. 따라서 한 요청 안에서 “앞에서 고른 목표에 맞춰 회피 방향을 정하라”고 지시하면, 회피 질문은 목표 질문의 답을 참조할 수 없다. 첫 답이 다음 질문에 꼭 필요하다면, 그 답을 받은 뒤 새 상태나 질문을 만들어 두 번째 호출을 해야 한다.",
          "links": [
            {
              "text": "독립적으로 답한다",
              "url": "https://docs.typesafe.ai/introduction"
            }
          ]
        }
      ]
    },
    {
      "id": "composition",
      "title": "여러 판단을 행동 하나로 합치는 일",
      "blocks": [
        {
          "type": "p",
          "text": "Jev가 회복을 골랐는데 회피가 필요할 확률과 위험 점수도 높게 나왔다고 하자. 회복약으로 가는 도중 공격을 피해야 한다면 세 답을 함께 쓸 수 있다. 아래 코드는 회복이라는 목적지를 유지하면서 이동 방법을 회피로 바꾸고 속도를 낮춘다.",
          "links": []
        },
        {
          "type": "code",
          "lang": "python",
          "kind": "직접 계산",
          "label": "API 없이 실행해 보는 판단 조합",
          "code": "def compose(goal, dodge_probability, danger_score):\n    speed = 0.5 if danger_score >= 1.5 else 1.0\n    if dodge_probability >= 0.8:\n        motion = \"evasive_move\"\n    elif dodge_probability <= 0.2:\n        motion = \"follow_route\"\n    else:\n        motion = \"pause_and_observe\"\n    return {\"destination\": goal, \"motion\": motion, \"speed\": speed}\n\nprint(compose(\"recover\", 0.91, 1.7))\nassert compose(\"recover\", 0.91, 1.7)[\"destination\"] == \"recover\"\nassert compose(\"explore\", 0.50, 0.6)[\"motion\"] == \"pause_and_observe\"",
          "run": "offline"
        },
        {
          "type": "p",
          "text": "위 코드의 0.8, 0.2, 1.5는 이 계산 예제에서 정한 기준이다. 회피가 필요할 가능성이 높으면 피하고, 낮으면 경로를 따르며, 중간이면 잠시 이동을 줄이고 다시 관측한다. 위험 점수가 높으면 속도도 낮춘다. 기준을 바꾸면 같은 답으로도 다른 행동이 나온다. pause_and_observe를 게임에 연결할 때는 주의해야 한다. 캐릭터의 이동을 줄이더라도 적은 계속 움직이므로, 기다리는 동안 공격받을 수 있다.",
          "links": []
        },
        {
          "type": "diagram",
          "title": "상태에서 실행까지: 모델의 답은 중간 결과다",
          "caption": "코드가 현재 상태를 모아 Jev에 보내고, 돌아온 답을 조합해 캐릭터를 움직인다. 움직인 뒤 상태를 다시 관측한다.",
          "nodes": [
            {
              "x": 20,
              "y": 55,
              "kind": "world",
              "title": "게임의 현재 상태",
              "lines": [
                "체력 · 적 · 회복약"
              ]
            },
            {
              "x": 250,
              "y": 55,
              "kind": "code",
              "title": "입력 구성",
              "lines": [
                "사실 + 목적 + 질문"
              ]
            },
            {
              "x": 480,
              "y": 55,
              "kind": "model",
              "title": "Jev의 작은 판단",
              "lines": [
                "목표 · 회피 · 위험"
              ]
            },
            {
              "x": 710,
              "y": 55,
              "kind": "code",
              "title": "행동 조합과 실행",
              "lines": [
                "경로 · 이동 · 속도"
              ]
            }
          ]
        },
        {
          "type": "p",
          "text": "어떤 답을 쓸지에 따라 질문을 순서대로 보내면 호출마다 기다려야 한다. 질문들이 같은 상태만으로 답할 수 있다면 한 번에 보내고 코드가 필요한 답을 골라 쓸 수 있다. 공식 문서는 이를 speculative fan-out이라고 설명한다. 예를 들어 회복과 탐색 중 어느 것을 고를지 기다리지 않고, 각각에 필요한 후속 질문도 함께 보낼 수 있다. 다음 호출을 기다리지 않아도 되지만 실제로 쓰지 않을 답까지 구하므로 비용은 늘 수 있다.",
          "links": [
            {
              "text": "speculative fan-out",
              "url": "https://docs.typesafe.ai/patterns/fan-out"
            }
          ]
        }
      ]
    },
    {
      "id": "probability",
      "title": "확률 0.8과 confidence 0.8은 같은 뜻일까?",
      "blocks": [
        {
          "type": "p",
          "text": "회복·전투·탐색의 확률이 0.8, 0.15, 0.05라면 회복이 가장 유력하다. 그런데 함께 돌아온 confidence가 0.7이라면 모순일까? Choice의 confidence는 별도의 정답률 예측이 아니라 후보 분포로 계산한 값이다. 공식 식은 (가장 큰 확률 − 1/n) / (1 − 1/n)이며 n은 후보 수다. 세 후보의 균등한 확률 1/3을 기준으로, 최고 확률 0.8이 얼마나 더 큰지를 0~1로 환산하면 0.7이 된다. “정답률은 70%다”라는 뜻이 아니다.",
          "links": [
            {
              "text": "공식 식",
              "url": "https://docs.typesafe.ai/confidence"
            }
          ]
        },
        {
          "type": "code",
          "lang": "python",
          "kind": "직접 계산",
          "label": "후보 수와 최고 확률로 confidence 계산하기",
          "code": "def confidence(values):\n    n = len(values)\n    assert n >= 2 and abs(sum(values) - 1) < 1e-9\n    return (max(values) - 1 / n) / (1 - 1 / n)\n\nprint(round(confidence([0.8, 0.15, 0.05]), 3))  # 0.7\nprint(round(confidence([0.8, 0.2]), 3))         # 0.6\nassert abs(confidence([1/3, 1/3, 1/3])) < 1e-9",
          "run": "offline"
        },
        {
          "type": "p",
          "text": "모든 후보가 같으면 confidence는 0이고 한 후보에 전부 몰리면 1이다. 후보 수가 같다면 최고 확률로 confidence를 계산할 수 있다. 둘을 별개의 근거처럼 세어 확신을 더해서는 안 된다. 또한 최고 확률이 같아도 나머지가 한 후보에 몰렸는지 여러 후보에 흩어졌는지는 다를 수 있다. 차선 후보와의 경쟁을 알고 싶다면 전체 분포를 확인해야 한다.",
          "links": [
            {
              "text": "전체 분포",
              "url": "https://docs.typesafe.ai/confidence"
            }
          ]
        },
        {
          "type": "p",
          "text": "게임 속 문이 열려 있는지 묻는다고 하자. 모델이 약 0.8을 준 장면 100개 중 실제로 51개만 열렸다면, 문이 열렸다고 지나치게 확신한 셈이다. 확률이 0.8인 예측은 실제로도 약 80%가 맞는지, 0.6인 예측은 약 60%가 맞는지 확인해야 한다. 이렇게 예측 확률과 실제 빈도가 맞는지를 살피는 일을 calibration, 즉 확률 보정과 관련해 다룬다.",
          "links": [
            {
              "text": "calibration",
              "url": "https://docs.typesafe.ai/introduction/machine-learning-primer"
            }
          ]
        }
      ]
    },
    {
      "id": "training",
      "title": "RLCD가 바꾸려는 것은 학습의 목표다",
      "blocks": [
        {
          "type": "p",
          "text": "사람이 좋아하는 설명을 쓰는 것과 실제 결과에 맞는 확률을 내는 것은 학습에서 서로 다른 목표가 될 수 있다. TypeSafe는 후자를 위해 Jev를 학습하는 방식을 RLCD, Reinforcement Learning for Calibrated Decisions라고 부른다. 공식 AI primer는 RLHF가 사람이 선호하는 응답을, RLVR가 검증 가능한 보상을 사용해 학습한다고 설명한다. RLCD에서는 예측한 확률이 실제 결과와 맞도록 학습하는 데 초점을 둔다.",
          "links": [
            {
              "text": "공식 AI primer",
              "url": "https://docs.typesafe.ai/introduction/machine-learning-primer"
            }
          ]
        },
        {
          "type": "p",
          "text": "문이 열렸다고 답한 두 예측이 있어도 하나는 0.51, 다른 하나는 0.99였을 수 있다. 선택 결과만 남기면 이 차이를 놓친다. 확률까지 기록하면 틀린 답을 얼마나 확신했는지와 어느 구간에서 과신하는지 확인할 수 있다. 실행 프로그램도 판단이 애매한 장면에서 바로 움직이는 대신 사진을 더 얻거나 다른 판단 절차로 넘길 수 있다.",
          "links": []
        },
        {
          "type": "p",
          "text": "특정 학습 목표를 사용했다는 사실만으로 새 게임의 모든 확률이 맞는다고 볼 수는 없다. 상태를 만드는 방식과 질문이 달라졌다면 그 조건에서의 예측과 결과를 모아야 한다. 수업에서는 성공 장면만 남기지 말고 당시 상태, 확률, 선택, 실행 결과를 함께 기록하는 편이 좋다. 예를 들어 적을 피하지 못했다면 입력에 적의 위치가 빠졌는지, 모델이 공격을 골랐는지, 회피를 골랐는데도 버튼 입력이 늦었는지 순서대로 확인한다.",
          "links": []
        }
      ]
    },
    {
      "id": "types",
      "title": "형식이 맞는 답도 잘못된 행동일 수 있다",
      "blocks": [
        {
          "type": "p",
          "text": "선택지를 recover, fight, explore로 제한하면 모델이 목록에 없는 escape_to_moon을 반환하지 못하게 할 수 있다. 그렇다고 recover가 언제나 옳은 답은 아니다. 벽 때문에 회복약에 갈 수 없는 상황에서도 recover를 고를 수 있다. 코드는 답이 허용된 이름인지 확인하고, 실행 전에 실제로 그곳까지 갈 수 있는지도 확인해야 한다.",
          "links": []
        },
        {
          "type": "p",
          "text": "세 후보가 모두 부적절한 경우도 있다. 대화 창을 닫아야 하는 장면에 회복·전투·탐색만 주면 어느 것을 골라도 진행되지 않는다. 공식 companion Noul 패턴은 후보 중 적절한 답이 있는지를 따로 묻는다. 그 확률이 낮으면 실행 코드는 억지로 선택을 적용하지 않고 후보부터 다시 만들 수 있다. 이 장면에서는 대화 창을 닫는 행동을 후보에 넣어야 진행할 수 있다.",
          "links": [
            {
              "text": "companion Noul 패턴",
              "url": "https://docs.typesafe.ai/patterns/companion-noul"
            }
          ]
        },
        {
          "type": "exercise",
          "question": "네 방향 중 벽이 없는 방향만 Choice 후보로 주면 경로 탐색 문제는 모두 해결될까?",
          "answer": "한 번의 이동이 벽을 통과하지 않는다는 조건은 코드로 보장할 수 있다. 하지만 막다른 길로 들어가거나 두 칸을 계속 왕복할 수는 있다. 목적지, 방문 기록, 장기 진행도를 다루는 별도 설계가 필요하다. 위키백과 링크 탐색에서도 존재하는 링크만 선택하는 것과 목적지에 도착하는 것은 다르다."
        }
      ]
    },
    {
      "id": "doom",
      "title": "DOOM: 목표는 유지하면서 당장의 행동을 바꾼다",
      "blocks": [
        {
          "type": "p",
          "text": "같은 적 앞에서도 공격하라는 명령과 공격하지 말라는 명령은 다른 조작을 요구한다. 공식 DOOM 데모는 구조화된 상태를 주고 초당 약 10회 질의하며, 발사 여부와 우선 목표, 회피 필요성 같은 판단을 조합한다고 설명한다. 영상 1분 10초 부근에는 쏘지 말고 피하라는 지시로 바꾸는 장면이 있다. 앞에서는 공격하던 캐릭터가 새 지시를 받은 뒤 사격을 멈추는지 살펴보면 된다.",
          "links": [
            {
              "text": "공식 DOOM 데모",
              "url": "https://typesafe.ai/blog/introducing-system-one-models-and-jev"
            }
          ]
        },
        {
          "type": "table",
          "headers": [
            "영상 위치",
            "설명의 내용",
            "앞의 예제와 연결"
          ],
          "rows": [
            [
              "00:24 부근",
              "체력, 주변 적, 발사체, 획득 가능한 물품",
              "state를 구성하는 관측 정보"
            ],
            [
              "00:46 부근",
              "발사·우선 목표·회피에 관한 작은 질문",
              "서로 다른 판단을 나누는 질문 설계"
            ],
            [
              "01:10 부근",
              "공격하지 않고 회피하도록 지시 변경",
              "상태와 실행기는 유지하고 목적을 변경"
            ],
            [
              "01:28 부근",
              "다음 탐색 위치를 정하는 별도의 구성",
              "즉각적인 조작보다 긴 범위의 판단"
            ]
          ]
        },
        {
          "type": "p",
          "text": "영상의 판단 패널과 플레이를 함께 보면 받은 선택이 어떤 조작으로 이어지는지 비교할 수 있다. 앞의 예제에서도 recover라는 목표를 그대로 두고 motion만 evasive_move로 바꿀 수 있었다. 다만 실제 회피에는 어느 방향으로 움직이고 버튼을 얼마나 유지할지 정하는 코드가 더 필요하다. 목표와 이동 방법을 정한 다음, 실행 코드가 방향과 버튼 유지 시간을 정해야 한다.",
          "links": []
        },
        {
          "type": "p",
          "text": "수업에서는 같은 장면에 “적을 처리하라”, “탄약을 아껴라”, “공격하지 말라”를 각각 주어 비교할 수 있다. 발사 비율, 생존 시간, 이동 경로를 기록하고 지시 준수와 점수를 나누어 평가한다. 공격하지 말라는 지시를 따르면 점수가 줄어도 명령은 잘 수행한 것일 수 있다. 빠르게 바뀌는 장면에서 답을 언제 적용할지는 DOOM 강의의 제어 주기 계산으로 이어진다.",
          "links": [
            {
              "text": "DOOM 강의",
              "url": "#case/doom"
            }
          ]
        }
      ]
    },
    {
      "id": "evaluation",
      "title": "빠르다는 말은 어떤 시간의 비교일까?",
      "blocks": [
        {
          "type": "p",
          "text": "한 요청이 100ms, 곧 0.1초 걸린다고 하자. 한 행동을 정하려고 세 요청을 순서대로 보내면 모델 대기만 0.3초다. 세 질문이 독립적이면 한 요청에 묶어 이 연속 대기를 줄일 수 있다. 반대로 첫 답을 알아야 두 번째 질문을 만들 수 있다면 모두 먼저 보낼 수는 없다. 따라서 응답 시간과 함께 한 행동을 정하기 위해 몇 번 기다렸는지도 세어야 한다.",
          "links": []
        },
        {
          "type": "code",
          "lang": "python",
          "kind": "직접 계산",
          "label": "순차 판단과 병렬 판단의 시간 예산",
          "code": "latency_s = 0.1\nobservation_s = 0.02\nexecution_s = 0.03\nsequential = observation_s + 3 * latency_s + execution_s\nbatched = observation_s + latency_s + execution_s\nprint(round(sequential, 2), round(batched, 2))  # 0.35, 0.15\nprint(round(sequential / batched, 2))           # 전체 루프: 2.33배",
          "run": "offline"
        },
        {
          "type": "p",
          "text": "예제에서 모델 대기는 3배 차이가 나지만 관측과 실행을 합친 전체 루프는 약 2.33배 차이다. 모델 외의 시간이 남기 때문이다. 로봇팔처럼 사진 해석과 물리적 이동이 길면 Jev 호출을 줄여도 전체 완료 시간은 조금만 줄 수 있다. 반면 테트리스에서는 작은 지연 차이가 배치를 바꿀 기회를 놓치게 할 수 있다. 테트리스에서는 응답을 받기 전에 블록이 바닥에 닿았는지도 기록해야 한다.",
          "links": [
            {
              "text": "로봇팔",
              "url": "#case/robot-arm"
            },
            {
              "text": "테트리스",
              "url": "#case/tetris"
            }
          ]
        },
        {
          "type": "p",
          "text": "소개 글의 workflow 평가는 모든 모델에 같은 코드 흐름을 주고 큰 외부 모델들의 평균 예측에 비교한다. 사람이 별도로 확인한 정답 레이블과의 정확도를 재는 방식과는 기준이 다르다. workflow evals에서 질문과 평가 기준을 확인할 수 있고, 같은 인터페이스에 LLM을 연결하는 어댑터도 공개돼 있다. 이 평가를 읽을 때는 사람이 매긴 정답과 비교한 값인지, 다른 모델들의 평균 예측과 비교한 값인지 확인해야 한다.",
          "links": [
            {
              "text": "workflow evals",
              "url": "https://evals.typesafe.ai/"
            },
            {
              "text": "어댑터",
              "url": "https://github.com/typesafe-ai/system-one-adapter-python"
            }
          ]
        },
        {
          "type": "p",
          "text": "우리 게임에서 비교한다면 초기 체력, 적 배치, 실행 코드를 먼저 고정해야 한다. 그 뒤 모델을 바꾸면 판단의 차이를 보기 쉽다. 실시간성을 평가할 때는 답이 늦어도 게임을 계속 진행시키며 그 답을 어떻게 처리했는지 기록한다. 게임을 멈춰 생각할 시간을 주는 평가와 계속 움직이는 게임에서의 평가는 다른 조건이다.",
          "links": []
        }
      ]
    },
    {
      "id": "cases",
      "title": "여덟 가지 구현으로 이어가기",
      "blocks": [
        {
          "type": "p",
          "text": "포켓몬에서는 목적지를 고른 뒤 그곳까지 갈 길을 계산한다. 팩맨은 갈림길에 닿기 전에 질문을 보내고, 테트리스는 답을 기다리는 동안에도 블록을 떨어뜨린다. 드론과 로봇팔에서는 모델이 고른 동작을 모터에 전달하는 과정까지 살펴야 한다. 다음 여덟 글은 각 프로그램이 무엇을 관측하고, 무엇을 물으며, 돌아온 답으로 어떻게 움직이는지 코드와 실행 기록을 따라 설명한다.",
          "links": []
        },
        {
          "type": "case-links",
          "items": [
            {
              "id": "pokemon",
              "label": "01 · 포켓몬",
              "text": "목적지를 정하는 일과 풀밭을 피할지 고르는 일은 어떻게 다른가?"
            },
            {
              "id": "pacman",
              "label": "02 · 팩맨",
              "text": "다음 갈림길에 도착하기 전에 답을 받아 둘 수 있을까?"
            },
            {
              "id": "tetris",
              "label": "03 · 테트리스",
              "text": "배치가 좋아도 답이 늦으면 소용이 없다."
            },
            {
              "id": "mario",
              "label": "04 · 마리오",
              "text": "위치와 속도, 점프 진행 상태가 필요한 이유."
            },
            {
              "id": "doom",
              "label": "05 · DOOM",
              "text": "목표·발사·회피를 조합하고 명령을 바꾸기."
            },
            {
              "id": "wikiracing",
              "label": "06 · Wikiracing",
              "text": "존재하는 링크 선택과 목적지 도착의 차이."
            },
            {
              "id": "drone",
              "label": "07 · 드론",
              "text": "느린 전술 판단과 빠른 비행 제어를 연결하기."
            },
            {
              "id": "robot-arm",
              "label": "08 · 로봇팔",
              "text": "같은 위치를 숫자와 방향 단어로 주었을 때."
            }
          ]
        }
      ]
    }
  ],
  "leadLinks": []
};

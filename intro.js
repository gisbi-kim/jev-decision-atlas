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
  "lead": "게임 속 캐릭터의 체력이 얼마 남지 않았다. 적을 공격할지, 회복약을 찾아갈지 정해야 한다. 사람에게는 “지금은 회복이 먼저다”라는 설명으로 충분할 수 있지만, 프로그램은 그 답을 받아 실제로 캐릭터를 움직여야 한다. Jev는 이런 상황에서 정해진 후보 중 하나를 고르거나 위험을 평가하는 데 쓰는 모델이다. 작은 게임 예제로 시작해, 필요한 정보를 준비하고 질문을 만들고 돌아온 답을 조작에 연결하는 과정을 알아보자.",
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
          "text": "“체력이 낮으니 우선 회복하라.” 사람이 읽으면 뜻을 알 수 있다. 그러나 게임 프로그램에는 아직 할 일이 남아 있다. 회복약으로 갈 경로를 찾고 이동 함수를 호출해야 하며, 도중에 적을 만나면 대응해야 한다. 매번 다른 설명문이 돌아오면 그 말이 어느 동작을 뜻하는지 해석하는 과정도 필요하다. 선택지를 회복·전투·탐색으로 정하고 각각 recover, fight, explore라는 이름을 붙이면 프로그램은 받은 이름으로 동작을 찾을 수 있다.",
          "links": []
        },
        {
          "type": "p",
          "text": "TypeSafe의 첫 소개 글은 대화 모델이 발전했는데도 자동화가 기대만큼 늘지 않은 이유를 묻는다. Jev는 사람이 읽을 문장을 자유롭게 생성하는 대신, 상태에 대한 판단을 프로그램이 사용할 값과 확률로 돌려준다. 아래 예제에서는 recover라는 선택을 받아 회복약을 목표로 지정하고 발사는 하지 않도록 연결한다.",
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
          "text": "이 코드가 실행됐다고 회복약을 얻은 것은 아니다. 회복약으로 이동할 경로를 구하고 게임 엔진이 캐릭터를 움직인 뒤 체력이 회복됐는지 다시 확인해야 한다. Jev의 답은 그 과정에서 무엇을 할지 고르는 데 쓰인다. 이후 여덟 사례에서는 방향 하나를 고르게 하기도 하고, 이동과 전투를 이어 게임 전체를 진행하게 하기도 한다. 같은 모델을 써도 그 앞뒤의 프로그램에 따라 맡는 일이 달라진다.",
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
          "text": "이처럼 프로그램에서 바로 쓸 수 있는 작은 판단을 빠르게 돌려주는 모델을 TypeSafe는 System One이라고 부른다. Jev는 그 첫 모델의 이름이다. 상황과 기준을 자연어로 이해하지만 결과는 선택지, 수치, 확률처럼 정한 형식으로 나온다. System One이라는 이름은 대니얼 카너먼이 널리 알린 빠른 직관적 사고와 느린 숙고의 구분에서 왔다. 사람의 사고 체계가 그대로 구현됐다는 뜻보다는 빠르고 좁은 판단에 주목한 이름이다.",
          "links": [
            {
              "text": "System One",
              "url": "https://docs.typesafe.ai/concepts/system-one"
            }
          ]
        },
        {
          "type": "p",
          "text": "“이 던전을 어떻게 공략할 것인가”에는 여러 장소와 행동을 잇는 계획이 필요하다. “현재 장비와 체력으로 앞의 적을 상대해도 되는가”는 필요한 사실을 모으면 더 작은 질문으로 만들 수 있다. 큰 계획은 생성 모델이 세우고 진행 중에 반복되는 선택을 Jev가 처리하도록 구성할 수도 있다. 포켓몬의 2389 구현에서는 다른 모델이 목적지를 정한 뒤 Jev가 풀밭을 피할지, 전투를 하며 갈지를 고른다.",
          "links": [
            {
              "text": "포켓몬의 2389 구현",
              "url": "#case/pokemon"
            }
          ]
        },
        {
          "type": "p",
          "text": "Jev라는 이름은 경제학자 William Stanley Jevons에서 따왔다. 한 번 판단하는 비용이 낮아지면 이미 하던 작업의 요금만 줄어드는 것이 아니라, 이전에는 비용 때문에 묻지 못했던 상황에도 모델을 사용할 수 있다는 기대가 담겼다. 한 번 답하고 끝나는 일보다 매초 계속 판단하는 게임에서 이런 변화가 두드러진다.",
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
          "text": "체력이 18이라는 숫자만 보고 회복이 급한지 판단할 수 있을까? 최대 체력이 20이면 아직 여유가 있지만 100이면 크게 줄어든 상태다. 적이 가까운지, 회복약까지 가는 길이 열려 있는지도 선택을 바꾼다. 반대로 화면의 모든 픽셀이나 과거 대화를 늘 함께 줄 필요는 없다. 이번 선택에 영향을 줄 수 있는 사실을 골라 묶는 것이 입력을 만드는 첫 단계다.",
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
          "text": "공식 State 문서는 state를 문자열, 객체 또는 배열로 받을 수 있다고 설명한다. 위 예제는 관련된 값을 이름 붙인 객체에 모았다. health와 max_health는 관측한 사실이고 order는 달성하려는 목적이다. 이 둘을 나누면 같은 장면에 “살아남아라” 또는 “적을 처리하라”는 지시를 주는 비교도 쉬워진다. 무엇이 달라져 선택이 바뀌었는지 확인할 수 있기 때문이다.",
          "links": [
            {
              "text": "State 문서",
              "url": "https://docs.typesafe.ai/concepts/state"
            }
          ]
        },
        {
          "type": "p",
          "text": "같은 숫자라도 어디서 얻었는지에 따라 그 앞의 문제가 달라진다. 적의 거리를 사진으로 추정했다면 비전의 오차가 있고, 게임 RAM에서 읽었다면 내부 정보에 접근한 것이다. 둘 다 Jev에는 거리 값으로 들어갈 수 있다. 따라서 DOOM이나 포켓몬을 평가할 때는 모델에 전달된 값만 보지 말고, 그 값을 어떤 방식으로 만들었는지도 확인해야 한다.",
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
          "text": "다음 행동을 정할 때도 필요한 답의 모양이 모두 같지는 않다. 목표 하나를 고를 때는 이름이, 회피가 필요한지 판단할 때는 참일 가능성이, 위험의 정도를 평가할 때는 단계가 필요하다. 이 차이에 따라 질문 형식을 고른다."
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
          "text": "회복과 전투 가운데 하나를 고르는 데 두 행동의 크기나 순서를 정할 필요는 없다. 이런 후보 선택에 Choice를 쓴다. recover와 fight는 프로그램이 사용할 이름이고, 각 후보의 설명은 모델이 그 행동의 의미를 알아보는 데 쓰인다. A·B·C라는 이름만 보내면 무엇을 비교할지 알 수 없으므로, 선택지마다 어떤 행동인지 적어야 한다.",
          "links": [
            {
              "text": "Choice",
              "url": "https://docs.typesafe.ai/primitives/choice"
            }
          ]
        },
        {
          "type": "p",
          "text": "회피가 필요한지는 후보 이름보다 참일 가능성이 필요한 질문이다. Noul은 이를 0~1로 돌려준다. 0.9면 필요하다는 쪽, 0.1이면 필요하지 않다는 쪽이며 0.5 근처는 어느 쪽도 뚜렷하지 않다. 한편 위험이 얼마나 큰지 평가하려면 낮음·중간·높음처럼 순서 있는 단계를 정해야 한다. 여기에 쓰는 Score는 세 단계일 때 0~2 사이의 점수가 나올 수 있다. 1.4는 단계 위의 위치이지 충돌 확률 140%가 아니다.",
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
          "text": "현재 공식 문서에는 이미지의 영역을 반환하는 Box도 있다. 이 강의의 게임 예제에서는 행동을 선택하고 필요성과 위험을 평가하므로 앞의 세 형식을 사용한다. 또한 현재 API의 이미지 지원과 과거 DOOM 데모의 입력 방식은 구분해야 한다. 그 DOOM 데모는 구조화된 게임 상태를 입력으로 사용했다.",
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
          "text": "이제 같은 상태에서 우선 목표, 회피 필요성, 위험 정도를 함께 묻는다. 아래 코드는 공식 Python SDK 형식을 사용해 이 강의를 위해 만든 게임 예제다. Python 3.10 이상에서 typesafe-sdk를 설치하고 TYPESAFE_API_KEY 환경 변수를 준비하면 실행할 수 있다. 설치와 인증은 공식 Quick start에 설명돼 있다. 강의 사이트를 열거나 코드를 복사하는 것만으로 API가 호출되지는 않는다.",
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
          "text": "세 답을 받으면 어느 질문의 답인지 찾아야 한다. goal, dodge, danger는 이를 위한 질문 ID다. ID 이름만으로 의도를 전달하지 않고 instructions에 질문을 쓴다. Choice의 criteria에는 허용할 키와 의미를 넣는다. 응답에서는 goal의 선택 이름, dodge의 참일 확률, danger의 단계 점수를 각각 꺼내므로 서로 다른 값을 섞지 않고 사용할 수 있다.",
          "links": [
            {
              "text": "질문 ID",
              "url": "https://docs.typesafe.ai/primitives/choice"
            }
          ]
        },
        {
          "type": "p",
          "text": "세 질문을 같이 보냈다고 뒤 질문이 앞 질문의 답을 보고 판단하는 것은 아니다. 모두 같은 state에서 독립적으로 답한다. 따라서 “앞에서 고른 목표에 맞춰 회피 방향을 정하라”는 요청은 아직 없는 답을 조건으로 요구하게 된다. 첫 답이 다음 질문에 꼭 필요하다면, 그 답을 받은 뒤 새 상태나 질문을 만들어 두 번째 호출을 해야 한다.",
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
          "text": "목표는 회복인데 회피가 필요할 확률도 높고 위험 점수도 높게 나왔다고 하자. 회복약으로 가는 동안 날아오는 공격을 피해야 한다면 세 답은 함께 맞을 수 있다. 회복은 어디로 갈지를, 회피는 당장 어떻게 움직일지를 설명한다. 목표를 유지하면서 이동 방법과 속도를 바꾸려면 코드에서 이 답들을 함께 사용해야 한다.",
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
          "text": "위 코드의 0.8, 0.2, 1.5는 이 계산 예제에서 정한 기준이다. 회피가 필요할 가능성이 높으면 피하고, 낮으면 경로를 따르며, 중간이면 잠시 이동을 줄이고 다시 관측한다. 위험 점수가 높으면 속도도 낮춘다. 기준을 바꾸면 같은 답으로도 다른 행동이 나온다. 실제 게임의 pause_and_observe는 게임 시간을 멈추는 마법이 아니므로, 이동을 줄이는 동안에도 적이 움직일 수 있음을 실행 단계에서 고려해야 한다.",
          "links": []
        },
        {
          "type": "diagram",
          "title": "상태에서 실행까지: 모델의 답은 중간 결과다",
          "caption": "상태를 구성하고, 작은 판단들을 얻고, 코드가 실행 순서와 우선순위를 정한다. 실행 결과는 다음 관측으로 돌아온다.",
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
          "text": "어떤 답을 쓸지에 따라 질문을 순서대로 보내면 호출마다 기다려야 한다. 질문들이 같은 상태만으로 답할 수 있다면 한 번에 보내고 코드가 필요한 답을 골라 쓸 수 있다. 공식 문서는 이를 speculative fan-out이라고 설명한다. 각 목표에서 필요할 질문을 미리 계산하는 대신 사용하지 않을 답도 얻으므로, 지연을 줄이는 이점과 추가 입력 처리 비용을 함께 따져야 한다.",
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
          "text": "모든 후보가 같으면 confidence는 0이고 한 후보에 전부 몰리면 1이다. 후보 수가 고정돼 있으면 최고 확률과 confidence는 서로 변환할 수 있으므로 둘을 확인해도 독립적인 증거 두 개가 되지는 않는다. 또한 최고 확률이 같아도 나머지가 한 후보에 몰렸는지 여러 후보에 흩어졌는지는 다를 수 있다. 차선 후보와의 경쟁을 알고 싶다면 전체 분포를 확인해야 한다.",
          "links": [
            {
              "text": "전체 분포",
              "url": "https://docs.typesafe.ai/confidence"
            }
          ]
        },
        {
          "type": "p",
          "text": "계산된 수치의 뜻을 알아도 모델의 확률이 실제 결과와 맞는지는 따로 확인해야 한다. “문이 열려 있다”에 약 0.8을 준 장면 100개 중 실제로 51개만 열렸다면 지나치게 자신 있는 예측이다. 이런 차이를 확률 구간별로 살피는 것이 calibration, 즉 확률 보정의 관점이다. 하나의 높은 값만 보고 잘 보정됐다고 판단할 수 없으며 여러 예측과 실제 결과를 모아야 한다.",
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
          "text": "사람이 좋아하는 설명을 쓰는 것과 실제 결과에 맞는 확률을 내는 것은 학습에서 서로 다른 목표가 될 수 있다. TypeSafe는 후자를 위해 Jev를 학습하는 방식을 RLCD, Reinforcement Learning for Calibrated Decisions라고 부른다. 공식 AI primer는 사람이 선호하는 응답을 학습하는 RLHF, 검증 가능한 보상을 사용하는 RLVR와 구분해 판단과 확률의 보정을 강조한다.",
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
          "text": "특정 학습 목표를 사용했다는 사실만으로 새 게임의 모든 확률이 맞는다고 볼 수는 없다. 상태를 만드는 방식과 질문이 달라졌다면 그 조건에서의 예측과 결과를 모아야 한다. 수업에서는 성공 장면만 남기지 말고 당시 상태, 확률, 선택, 실행 결과를 함께 기록하는 편이 좋다. 그래야 정보가 빠졌는지, 선택이 틀렸는지, 선택대로 실행되지 않았는지를 구분할 수 있다.",
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
          "text": "선택지를 recover, fight, explore로 정하면 목록에 없는 escape_to_moon이라는 이름이 갑자기 나오는 문제를 막을 수 있다. 그러나 실제로 갈 수 없는 회복약을 향해 recover를 고르는 문제는 남는다. 반환된 이름이 올바른 형식인지와 그 행동이 상황에 맞는지는 서로 다른 검사다. 형식이 보장돼도 입력과 판단을 평가해야 하는 이유다.",
          "links": []
        },
        {
          "type": "p",
          "text": "세 후보가 모두 부적절한 경우도 있다. 대화 창을 닫아야 하는 장면에 회복·전투·탐색만 주면 어느 것을 골라도 진행되지 않는다. 공식 companion Noul 패턴은 후보 중 적절한 답이 있는지를 따로 묻는다. 그 확률이 낮으면 실행 코드는 억지로 선택을 적용하지 않고 후보부터 다시 만들 수 있다. 잘못된 후보 목록은 마지막 선택만으로 고칠 수 없기 때문이다.",
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
          "text": "같은 적 앞에서도 공격하라는 명령과 공격하지 말라는 명령은 다른 조작을 요구한다. 공식 DOOM 데모는 구조화된 상태를 주고 초당 약 10회 질의하며, 발사 여부와 우선 목표, 회피 필요성 같은 판단을 조합한다고 설명한다. 영상 1분 10초 부근에는 쏘지 말고 피하라는 지시로 바꾸는 장면이 있다. 높은 점수를 내는 것에 더해 바뀐 목적에 따라 행동도 달라지는지를 보여 주는 시연이다.",
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
          "text": "영상의 판단 패널과 플레이를 함께 보면 받은 선택이 어떤 조작으로 이어지는지 비교할 수 있다. 앞의 예제에서도 recover라는 목표를 그대로 두고 motion만 evasive_move로 바꿀 수 있었다. 다만 실제 회피에는 어느 방향으로 움직이고 버튼을 얼마나 유지할지 정하는 코드가 더 필요하다. 판단을 합친 결과가 실행기의 모든 세부 조작을 저절로 채워 주지는 않는다.",
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
          "text": "한 요청이 100ms, 곧 0.1초 걸린다고 하자. 한 행동을 정하려고 세 요청을 순서대로 보내면 모델 대기만 0.3초다. 세 질문이 독립적이면 한 요청에 묶어 이 연속 대기를 줄일 수 있다. 반대로 첫 답을 알아야 두 번째 질문을 만들 수 있다면 모두 먼저 보낼 수는 없다. 호출 하나의 속도만으로 전체 판단 시간을 알 수 없는 이유다.",
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
          "text": "예제에서 모델 대기는 3배 차이가 나지만 관측과 실행을 합친 전체 루프는 약 2.33배 차이다. 모델 외의 시간이 남기 때문이다. 로봇팔처럼 사진 해석과 물리적 이동이 길면 Jev 호출을 줄여도 전체 완료 시간은 조금만 줄 수 있다. 반면 테트리스에서는 작은 지연 차이가 배치를 바꿀 기회를 놓치게 할 수 있다. 같은 지연도 과제의 시간 조건에 따라 의미가 달라진다.",
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
          "text": "소개 글의 workflow 평가는 모든 모델에 같은 코드 흐름을 주고 큰 외부 모델들의 평균 예측에 비교한다. 사람이 별도로 확인한 정답 레이블과의 정확도를 재는 방식과는 기준이 다르다. workflow evals에서 질문과 평가 기준을 확인할 수 있고, 같은 인터페이스에 LLM을 연결하는 어댑터도 공개돼 있다. 결과의 수치에 앞서 무엇을 정답에 해당하는 기준으로 두었는지 알아야 한다.",
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
          "text": "이제 같은 질문을 실제 구현에 적용할 수 있다. 모델에 어떤 사실을 주었는가, 후보는 어떻게 만들었는가, 답이 늦거나 실행이 실패하면 어떻게 하는가를 확인하면 된다. 첫 글의 포켓몬 두 프로젝트는 이동할 좌표와 이동 중 전투를 피할지 정하는 일을 어떻게 나누었는지 보여 준다. 이어지는 사례에서는 응답 시간, 관측의 불확실성, 물리적 움직임이 선택에 어떤 제약을 주는지 차례로 살핀다.",
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

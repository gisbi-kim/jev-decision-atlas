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
  "title": "Jev 입문: 게임의 다음 행동을 고르는 모델",
  "lead": "슈팅 게임 속 캐릭터의 체력이 얼마 남지 않았다. 적을 공격할지, 회복약을 찾아갈지 정해야 한다. Jev에 현재 체력과 주변 상황, 가능한 행동을 알려 주면 그중 하나를 고른다. 프로그램은 그 답에 따라 캐릭터를 움직이고, 이동한 뒤의 상태를 다시 Jev에 보낸다.",
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
    },
    {
      "label": "현재 공식 문서 · 원문",
      "url": "https://docs.typesafe.ai/introduction"
    }
  ],
  "sections": [
    {
      "id": "why",
      "title": "모델이 “회복하라”고 답하면 어떻게 움직일까?",
      "blocks": [
        {
          "type": "p",
          "text": "캐릭터를 회복약으로 보내려면 약이 있는 곳까지 길을 찾고 이동 함수를 호출해야 한다. 도중에 적을 만나면 피하거나 싸워야 한다. Jev에는 먼저 회복·전투·탐색 중 무엇을 할지 묻는다. 프로그램은 각 행동에 recover, fight, explore라는 이름을 붙여 두고, 돌아온 이름에 맞는 함수를 실행한다.",
          "links": []
        },
        {
          "type": "p",
          "text": "TypeSafe의 첫 소개 글은 대화 모델이 발전했는데도 자동화가 기대만큼 늘지 않은 이유를 묻는다. 사람이 모델의 설명을 읽고 다음 일을 처리한다면, 그 과정에는 여전히 사람이 필요하다. Jev는 프로그램이 바로 사용할 수 있도록 후보 이름이나 수치로 답한다. 아래 예제에서는 Jev가 recover를 골랐다고 가정한다. 코드는 그 이름을 받아 목표를 회복약으로 지정하고 발사를 끄는 명령을 만든다.",
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
          "label": "선택 이름으로 게임 명령 찾기",
          "code": "# 모델 응답이 왔다고 가정한, API 없는 작은 예제입니다.\nchosen = \"recover\"\ncommands = {\n    \"recover\": {\"target\": \"medkit\", \"fire\": False},\n    \"fight\":   {\"target\": \"enemy\",  \"fire\": True},\n    \"explore\": {\"target\": \"exit\",   \"fire\": False},\n}\nprint(commands[chosen])",
          "run": "offline"
        },
        {
          "type": "p",
          "text": "출력은 {\"target\": \"medkit\", \"fire\": False}에 해당하는 파이썬 딕셔너리다. target은 이동할 대상, fire는 발사 여부이며 False는 발사하지 않는다는 뜻이다. 이 코드는 명령을 만들어 출력할 뿐, 게임 캐릭터를 움직이지는 않는다. 실제 게임에서는 이 명령을 받은 코드가 회복약까지 길을 찾고 이동 버튼을 눌러야 한다. 도착한 뒤에는 체력이 회복됐는지도 확인한다.",
          "links": []
        }
      ]
    },
    {
      "id": "system-one",
      "title": "System One과 Jev는 무엇인가?",
      "blocks": [
        {
          "type": "p",
          "text": "TypeSafe는 주어진 상황에서 선택·확률·점수를 빠르게 반환하는 모델을 System One이라고 부른다. Jev는 이 회사가 공개한 첫 System One 모델이다. 대화 모델처럼 답변 문장을 차례로 생성하는 대신, 주어진 후보를 평가해 정해진 형식으로 답한다. System One이라는 이름은 대니얼 카너먼이 널리 알린 빠른 직관적 사고와 느린 숙고의 구분에서 왔다. TypeSafe는 그중 빠르게 반응하는 사고에 빗대어 이름을 붙였다.",
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
      "title": "판단에 필요한 상황을 어떻게 알려 줄까?",
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
          "text": "state는 모델에 알려 줄 현재 상황이다. 공식 State 문서는 문자열, 객체 또는 배열을 사용할 수 있다고 설명한다. 위 코드는 항목 이름과 값을 묶은 객체를 사용했다. health와 max_health는 현재·최대 체력이고, ammo는 남은 탄약이다. enemy에는 적까지의 거리와 접근 여부를, medkit에는 회복약이 보이는지와 그곳까지 길이 열려 있는지를 넣었다. order에는 “살아남는 것을 우선하되, 안전하면 출구를 찾는다”는 지시를 적었다. 체력과 적의 위치는 그대로 두고 이 지시만 바꾸면, 같은 장면에서 Jev가 다른 행동을 고르는지 비교할 수 있다.",
          "links": [
            {
              "text": "State 문서",
              "url": "https://docs.typesafe.ai/concepts/state"
            }
          ]
        },
        {
          "type": "p",
          "text": "이 값들은 누가 알아내는 것일까? 사진을 분석해 적까지의 거리를 추정할 수도 있고, 게임이 실행 중인 정보를 보관하는 메모리, 즉 RAM에서 위치 값을 읽을 수도 있다. 전자는 사진에서 적을 찾아야 하지만 후자는 게임 내부의 값을 사용한다. Jev에 거리 값을 보냈다는 사실만으로 Jev가 화면에서 적을 찾아냈다고 볼 수는 없다. 뒤의 DOOM과 포켓몬 사례에서는 프로그램이 게임 상태를 읽어 입력을 만든다.",
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
          "text": "회복과 전투 중 하나를 고를 때는 Choice를 쓴다. 각 후보에는 프로그램이 구별할 이름인 키를 붙인다. recover에는 “회복약으로 이동한다”, fight에는 “적을 공격한다”는 설명을 붙이는 식이다. Jev는 설명을 보고 후보를 비교한 뒤 키를 반환한다. 앞의 코드가 commands[chosen]으로 해당 명령을 찾을 수 있는 이유다.",
          "links": [
            {
              "text": "Choice",
              "url": "https://docs.typesafe.ai/primitives/choice"
            }
          ]
        },
        {
          "type": "p",
          "text": "적이 다가오더라도 매번 피할 필요는 없다. 멀리 있는 적인지, 곧 공격이 닿을 적인지에 따라 다르다. Noul은 이처럼 참·거짓으로 답할 수 있는 질문에 대해 참일 확률을 반환한다. 프로그래밍에서 참과 거짓을 나타내는 형식을 Boolean이라고 한다. Noul은 True나 False를 바로 반환하는 대신, 참이라고 판단하는 정도를 0~1의 확률로 알려 준다. 값이 없음을 나타내는 null과는 다른 이름이다.",
          "links": [
            {
              "text": "Noul",
              "url": "https://docs.typesafe.ai/primitives/noul"
            }
          ]
        },
        {
          "type": "p",
          "text": "“지금 적의 공격을 피할 필요가 있다”라고 물었다고 하자. 답이 0.9면 회피가 필요하다는 쪽에 높은 확률을 준 것이고, 0.1이면 필요하지 않다는 쪽이다. 0.5 근처면 어느 쪽도 뚜렷하지 않다. 이 확률을 받아 실제로 피할지는 프로그램이 정한다. 아래는 답이 0.9라고 가정하고, 0.7을 넘으면 회피하도록 만든 예제다. 이렇게 행동을 나누는 경곗값을 임계값이라고 한다."
        },
        {
          "type": "code",
          "lang": "python",
          "kind": "직접 계산",
          "label": "Noul의 답을 받아 회피 여부 정하기",
          "code": "def dodge():\n    print(\"회피\")\n\ndef continue_action():\n    print(\"기존 행동 유지\")\n\n# Jev가 반환했다고 가정한 값\ndodge_probability = 0.9\n\nif dodge_probability > 0.7:\n    dodge()\nelse:\n    continue_action()",
          "run": "offline"
        },
        {
          "type": "p",
          "text": "실행하면 ‘회피’가 출력된다. dodge_probability를 0.1로 바꾸면 ‘기존 행동 유지’가 출력된다. 이 예제의 두 함수는 선택 결과만 보여 주며, 실제 게임에서는 함수 안에 이동 버튼을 누르는 코드를 넣는다. 0.7은 이 예제에서 정한 기준이다. 뒤의 판단 조합 예제에서는 0.8 이상일 때 회피하고, 애매한 구간에서는 다시 관측하도록 확장한다."
        },
        {
          "type": "p",
          "text": "회피가 필요한지와 상황이 얼마나 위험한지는 서로 다른 질문이다. 적 하나가 쏜 느린 탄환을 피해야 할 수도 있고, 체력이 거의 없는 채 여러 적에게 둘러싸였을 수도 있다. Score는 이런 위험의 정도를 미리 정한 단계에 따라 매긴다. 아래처럼 질문과 세 단계의 설명을 준비한다. 이 코드는 질문을 정의하는 부분이며, 다음 절에서 현재 상태와 함께 Jev에 보낸다.",
          "links": [{"text": "Score", "url": "https://docs.typesafe.ai/primitives/score"}]
        },
        {
          "type": "code",
          "lang": "python",
          "kind": "SDK 활용 예제",
          "label": "Score에 위험의 세 단계 알려 주기",
          "code": "from typesafe_sdk import Score\n\ndanger_question = Score(\n    instructions=\"현재 생존을 위협하는 정도는?\",\n    criteria=[\n        \"즉각적인 위협이 없다\",              # 0\n        \"위협이 있지만 대응할 여유가 있다\",    # 1\n        \"즉시 대응하지 않으면 생존이 어렵다\",  # 2\n    ],\n)",
          "run": "syntax"
        },
        {
          "type": "p",
          "text": "criteria는 낮은 단계부터 높은 단계까지 순서대로 적은 기준이다. 첫 항목이 0, 다음이 1, 마지막이 2이므로 점수의 범위는 0~2다. 이 기준으로 다음과 같은 값이 돌아왔다면 각각 이렇게 해석할 수 있다."
        },
        {
          "type": "table",
          "headers": ["반환값 예시", "위 기준에서의 해석"],
          "rows": [
            ["0.2", "위협이 없는 0단계에 가까운 점수다."],
            ["1.0", "대응할 여유가 있는 1단계에 해당하는 점수다."],
            ["1.7", "즉시 대응해야 하는 2단계에 가까운 점수다."]
          ]
        },
        {
          "type": "p",
          "text": "소수점은 어떻게 나오는 것일까? Score는 각 단계에 확률을 주고, 단계 번호에 그 확률을 곱해 더한다. 예를 들어 0단계의 확률이 0.0, 1단계가 0.3, 2단계가 0.7이라면 점수는 다음과 같다."
        },
        {
          "type": "code",
          "lang": "python",
          "kind": "직접 계산",
          "label": "단계별 확률에서 점수 1.7 계산하기",
          "code": "probabilities = {0: 0.0, 1: 0.3, 2: 0.7}\nscore = sum(level * probability\n            for level, probability in probabilities.items())\nprint(round(score, 1))  # 0 × 0.0 + 1 × 0.3 + 2 × 0.7 = 1.7",
          "run": "offline"
        },
        {
          "type": "p",
          "text": "1.7은 위에서 정한 위험 단계의 점수다. 최댓값 2로 나눠 85%라고 해도 사망 확률이 되는 것은 아니다. 또 점수 1.0만으로 모델이 1단계를 확신했다고 볼 수는 없다. 1단계에 확률 1을 주어도, 0단계와 2단계에 각각 0.5를 주어도 평균은 1.0이다. 답이 어느 단계에 몰렸는지까지 보려면 함께 반환되는 probabilities, 즉 단계별 확률을 확인한다."
        },
        {
          "type": "p",
          "text": "체력이 부족하고 적이 접근하는 같은 장면에 세 질문을 던졌다고 하자. 아래는 설명을 위해 가정한 답이다. 회복하러 가는 도중에도 공격을 피해야 할 수 있으므로 세 답은 함께 사용할 수 있다."
        },
        {
          "type": "table",
          "headers": ["형식", "질문", "답의 예시와 의미"],
          "rows": [
            ["Choice", "회복·전투·탐색 중 무엇을 할까?", "recover — 회복을 선택한다."],
            ["Noul", "지금 회피가 필요한가?", "0.85 — 회피가 필요하다는 답의 확률이다."],
            ["Score", "지금 얼마나 위험한가?", "1.7 — 정의한 0~2단계 중 2에 가까운 위험 점수다."]
          ]
        },
        {
          "type": "p",
          "text": "로봇에도 같은 구분을 적용할 수 있다. 복도를 달리는 로봇에 “이 통로를 주행하기 얼마나 어려운가?”를 묻는다면, Score의 0단계는 ‘넓고 비어 있어 그대로 지나갈 수 있다’, 1단계는 ‘장애물이 있지만 속도를 줄이면 지나갈 수 있다’, 2단계는 ‘좁고 사람이 많아 멈추거나 우회해야 한다’로 정할 수 있다. 반면 “지금 정지해야 하는가?”는 Noul로, “직진·정지·우회 중 무엇을 할까?”는 Choice로 묻는다. 같은 통로를 보더라도 필요한 답이 확률인지, 정도인지, 행동 이름인지에 따라 질문 형식이 달라진다."
        },
        {
          "type": "p",
          "text": "2026년 11월에 확인한 공식 문서에는 이미지에서 찾은 영역의 경계 상자를 반환하는 Box도 있다. 경계 상자는 물체를 둘러싼 직사각형의 위치와 크기를 나타낸다. 여기서는 게임 상태를 이미 항목별로 알고 있으므로 행동·회피 필요성·위험도를 묻는 세 형식을 사용한다. 뒤에서 살펴볼 DOOM 데모도 이미지를 보내는 대신 구조화한 게임 상태를 보냈다.",
          "links": [
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
          "text": "앞의 예제는 준비한 값만 출력했다. 이제 Jev에 실제로 요청을 보낸다. 프로그램이 모델 서비스에 입력을 보내 답을 받는 통로가 API이고, 이를 파이썬에서 편하게 호출하도록 만든 라이브러리가 SDK다. 아래는 공식 Python SDK로 이 강의의 게임 상황을 묻는 코드다. Python 3.10 이상에서 typesafe-sdk를 설치하고, 발급받은 API 키를 TYPESAFE_API_KEY 환경 변수에 넣으면 실행할 수 있다. 환경 변수는 프로그램이 실행될 때 읽는 설정값이며, 여기서는 코드에 키를 직접 쓰지 않고 인증에 사용한다. 설치와 키 설정은 공식 Quick start에 설명돼 있다.",
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
          "text": "TypeSafeClient가 Jev 서비스에 연결할 준비를 하고, system_one이 state와 questions를 보낸다. questions 안에는 goal, dodge, danger라는 이름을 붙인 세 질문이 있다. 각각 무엇을 묻는지는 instructions에 쓰고, Choice의 criteria에는 후보 키와 설명을 넣었다. 답을 받으면 같은 질문 이름으로 result.answers에서 찾는다. goal의 choice에는 선택한 이름이, dodge의 noul에는 참일 확률이, danger의 score에는 위험 점수가 들어 있다. 마지막 세 줄은 이 값을 출력한다.",
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
          "text": "Jev가 회복을 골랐는데 회피가 필요할 확률과 위험 점수도 높게 나왔다고 하자. 회복약으로 가면서 공격을 피해야 하는 상황이다. 다음 예제는 goal=\"recover\", 회피 확률 0.91, 위험 점수 1.7을 받았다고 가정하고, 세 답으로 어떤 명령을 만들지 계산한다.",
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
          "text": "첫 호출의 결과는 destination=\"recover\", motion=\"evasive_move\", speed=0.5다. 회복이라는 목표는 유지하고, 회피하며 이동하도록 하고, 속도는 기준 속도의 절반으로 정했다. 이 예제에서는 회피 확률이 0.8 이상이면 회피하고 0.2 이하면 경로를 따른다. 그 사이면 pause_and_observe를 반환한다. 위험 점수가 1.5 이상일 때는 속도를 줄인다. 이 숫자들은 예제를 위해 정한 기준으로, 게임에 맞춰 조정해야 한다. 또한 pause_and_observe라는 이름 자체가 게임을 멈추지는 않는다. 실제 코드에서 이동을 줄이고 다시 관측하도록 구현해야 하며, 그동안에도 적은 움직인다.",
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
          "text": "회복을 골랐을 때와 탐색을 골랐을 때 필요한 후속 질문도 다를 수 있다. 회복약 쪽으로 가면서 피해야 할 적과 출구 쪽으로 가면서 피해야 할 적이 다르기 때문이다. 첫 선택을 기다렸다가 해당 경로의 회피 여부를 물으면 두 번 기다린다. 두 경로의 상황을 이미 알고 있다면 각각의 회피 질문을 미리 보내고, 첫 선택에 맞는 답만 사용할 수 있다. 공식 문서는 이런 방식을 speculative fan-out이라고 부른다. 쓰게 될지 모르는 답까지 미리 구해 대기 시간을 줄이는 대신, 처리할 입력과 비용이 늘 수 있다.",
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
          "text": "모든 후보의 확률이 같으면 confidence는 0이고, 한 후보의 확률이 1이면 confidence도 1이다. 후보 수와 최고 확률로 계산한 값이므로, confidence를 별도로 측정한 정답률처럼 받아들이면 안 된다. 또 [0.8, 0.2, 0]과 [0.8, 0.1, 0.1]은 confidence가 같아도 나머지 두 후보의 확률은 다르다. 후보별 차이를 보려면 최고 확률만 보지 말고 전체 분포를 확인한다.",
          "links": [
            {
              "text": "전체 분포",
              "url": "https://docs.typesafe.ai/confidence"
            }
          ]
        },
        {
          "type": "p",
          "text": "모델이 문이 열려 있을 확률을 0.8이라고 예측한 장면 100개를 모았다고 하자. 실제로 약 80개에서 문이 열려 있다면 예측한 확률과 관측한 빈도가 잘 맞는다. 51개만 열려 있었다면 열려 있을 가능성을 너무 높게 잡은 것이다. 0.6이라고 예측한 장면들에서도 약 60%가 열려 있는지 확인할 수 있다. 이처럼 예측 확률이 실제 빈도와 맞는 성질을 calibration이라고 하며, 이를 맞추는 과정을 확률 보정이라고 한다.",
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
      "title": "RLCD: 예측한 확률이 실제 결과와 맞도록 학습하기",
      "blocks": [
        {
          "type": "p",
          "text": "좋은 설명문을 쓰도록 학습하는 것과 정확한 확률을 내도록 학습하는 것은 목표가 다르다. 예를 들어 “문이 열렸다”는 문장이 자연스럽더라도, 매번 0.99라고 답하면 닫힌 문을 만났을 때 크게 틀린 예측이 된다. TypeSafe는 예측 확률이 실제 결과와 맞도록 Jev를 학습하는 방식을 RLCD, Reinforcement Learning for Calibrated Decisions라고 부른다. 공식 AI primer는 이를 RLHF와 RLVR에 대비해 설명한다. RLHF는 사람이 선호하는 응답에 보상을 주는 학습이고, RLVR는 수학 문제의 정답처럼 검증할 수 있는 결과에 보상을 주는 학습이다. RLCD는 선택의 정오뿐 아니라 그 선택에 얼마의 확률을 주었는지도 학습에 반영한다.",
          "links": [
            {
              "text": "공식 AI primer",
              "url": "https://docs.typesafe.ai/introduction/machine-learning-primer"
            }
          ]
        },
        {
          "type": "p",
          "text": "문이 열렸다고 고른 두 답도 하나는 0.51, 다른 하나는 0.99일 수 있다. 실제로 닫혀 있었다면 두 답 모두 틀렸지만, 뒤의 답이 훨씬 더 과신했다. 따라서 선택 이름과 확률을 함께 기록해야 한다. 게임 프로그램에서도 확률이 애매할 때는 상태를 다시 확인하거나, 더 많은 정보를 받는 다른 모델에 물어보도록 만들 수 있다.",
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
      "title": "DOOM에서는 명령을 바꾸면 어떻게 움직일까?",
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
          "text": "영상에는 판단 결과를 표시하는 패널과 실제 플레이 화면이 함께 나온다. 패널의 발사 여부나 우선 목표가 바뀔 때 캐릭터가 어떻게 움직이는지 대조할 수 있다. 앞의 예제도 recover라는 목표를 유지하면서 motion을 evasive_move로 바꾸었다. 이런 답을 실제 회피로 바꾸려면 실행 코드가 이동 방향과 버튼을 누를 시간을 정해야 한다.",
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
          "text": "소개 글의 workflow 평가는 여러 단계의 판단을 수행하는 같은 코드를 각 모델에 실행시켜 비교한다. 이때 기준 답은 사람이 일일이 붙인 정답이 아니라 여러 큰 외부 모델의 예측을 평균한 값이다. 따라서 그 기준과 잘 맞는다는 결과를 사람의 정답과 비교한 정확도로 읽어서는 안 된다. workflow evals에서 질문과 평가 기준을 확인할 수 있다. Jev 대신 대형 언어 모델, 즉 LLM을 같은 코드에 연결하도록 요청·응답 형식을 맞춰 주는 어댑터도 공개돼 있다.",
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

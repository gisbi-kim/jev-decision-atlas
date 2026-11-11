/* Closing lesson. Source descriptions are a snapshot as of 2026-11-11. */
(() => {
  'use strict';
  const sources = {
    adapter: { label: 'TypeSafe · 일반 LLM을 연결하는 System One adapter', url: 'https://github.com/typesafe-ai/system-one-adapter-python' },
    mnist: { label: 'MNIST · Qwen에 Clef 방식 head와 LoRA를 학습한 실험', url: 'https://gisbi-kim.github.io/jev-mnist-tutorial/site/index.html' },
    guide: { label: '시각적 decision model 실험 세 편의 안내', url: 'https://gisbi-kim.github.io/decision-model-guide/' },
    anyjev: { label: 'Nokia Applied Research · AnyJev', url: 'https://github.com/nokia-applied-research/AnyJev' },
    anyjevPaper: { label: 'AnyJev Technical Report · 2026', url: 'https://arxiv.org/abs/2610.00831' },
    semif: { label: 'TheoLeeCJ · SemIf', url: 'https://github.com/TheoLeeCJ/SemIf-OpenJev' },
    simple: { label: 'Featherless AI · simple-jev', url: 'https://github.com/featherless-ai/simple-jev' },
    sglang: { label: 'ekzhang · openjev-sglang', url: 'https://github.com/ekzhang/openjev-sglang' },
    nimble: { label: 'Bespoke Labs · Nimble와 학습 방법', url: 'https://github.com/bespokelabsai/nimble' },
    tev: { label: 'Together AI · Tev1', url: 'https://github.com/togethercomputer/tev1' },
    pplx: { label: 'Perplexity · Decider v1.2 모델 카드', url: 'https://huggingface.co/perplexity-ai/pplx-decider-v1.2' },
    baseten: { label: 'Baseten Base Labs · Mammoth-1 / Elephant-1 기술 보고서', url: 'https://labs.baseten.co/articles/mammoth-1-and-elephant-1-frontier-decision-models' },
    h2o: { label: 'H2O.ai · H2O-Lightning-4B 모델 카드', url: 'https://huggingface.co/h2oai/h2o-lightning-4b' },
    glide: { label: 'Fastino · GLiDE-27B 공개 체크포인트', url: 'https://huggingface.co/fastino/GLiDE-27B' },
    inner: { label: 'Releasing the Inner Jev · 2026', url: 'https://arxiv.org/abs/2610.17205' },
    kev: { label: 'Jared Palmer · Kev의 pointer head와 질문 격리', url: 'https://github.com/jaredpalmer/kev' },
    clef: { label: 'Cloudflare · Clef 구조와 학습', url: 'https://blog.cloudflare.com/clef-decision-models/' },
    drex: { label: 'Nace.AI · Drex v2.0 모델 카드', url: 'https://huggingface.co/nace-ai/drex-v2.0' },
    prism: { label: 'Sarvam AI · Sarvam-Prism의 decision head', url: 'https://huggingface.co/sarvamai/prism' },
    openjev: { label: 'Zefan-Cai · Open-Jev', url: 'https://github.com/Zefan-Cai/Open-Jev' },
    laya: { label: 'NandhaKishorM / Convai Innovations · Laya', url: 'https://github.com/NandhaKishorM/laya' },
    gliner: { label: 'Fastino · GLiNER2.5-Decide 구조와 제약식', url: 'https://fastino.ai/blog/gliner-2-5-decide-open-weight-decision-model' },
    liquid: { label: 'Liquid AI · Open d1의 decoder·encoder 두 경로', url: 'https://www.liquid.ai/blog/d1-open' },
    jeff: { label: 'logan-markewich · GLiFormer 기반 jeff', url: 'https://github.com/logan-markewich/jeff' },
    clm: { label: 'Contrastive Language Models · 상태·행동 임베딩과 projection head', url: 'https://github.com/Contrastive-LM/CLM' },
    kanana: { label: 'Kakao · Kanana-2-v-decide-3b-2611 모델 카드', url: 'https://huggingface.co/kakaocorp/kanana-2-v-decide-3b-2611' },
    kananaCode: { label: 'Kanana 입력 구성 · build_pairs의 show_criteria 기본값', url: 'https://huggingface.co/kakaocorp/kanana-2-v-decide-3b-2611/blob/main/decision_kanana_v_decide.py' },
    djev: { label: 'mmastrac · DiffusionGemma의 structured readout', url: 'https://github.com/mmastrac/djev' },
    drexDlm: { label: 'Nace.AI · Efficient-DLM 기반 Drex DLM', url: 'https://huggingface.co/nace-ai/drex-dlm' },
    jev: { label: 'TypeSafe · System One 공식 설명', url: 'https://docs.typesafe.ai/concepts/system-one' },
    openai: { label: 'OpenAI · Decisions API 공식 가이드', url: 'https://developers.openai.com/api/docs/guides/decisions' },
    microsoft: { label: 'Microsoft · Microsoft-Decision-1 발표', url: 'https://commandline.microsoft.com/microsoft-decision-1-model-foundry/' },
    upstage: { label: 'Upstage · Solar Decide 공식 문서', url: 'https://console.upstage.ai/docs/models/solar-decide' },
    inception: { label: 'Inception · Mercury 제품군과 Mercury Decide', url: 'https://www.inceptionlabs.ai/blog/introducing-mercury-3' },
    snowflake: { label: 'Snowflake · Cortex AI Functions의 Decision', url: 'https://www.snowflake.com/en/blog/snowflake-decision-cortex-ai-functions/' },
    ibm: { label: 'IBM · Granite Switch의 decision adapter', url: 'https://www.ibm.com/granite/playground/model-selector/faqs' },
    parallel: { label: 'Parallel · 웹 검색을 결합한 Decisions API', url: 'https://parallel.ai/blog/decisions-api' }
  };
  const p = (text, refs = []) => ({ type: 'p', text, links: refs.map(([text, key]) => ({ text, url: sources[key].url })) });
  const table = (headers, rows) => ({ type: 'table', headers, rows });
  // One name per method, reused in the diagram, overview table and section/TOC.
  const methods = {
    generation: '① 문자열 생성',
    vocabulary: '② Vocabulary readout',
    heads: '③ 별도 decision head',
    encoders: '④ Encoder 기반 판단',
    embeddings: '⑤ 임베딩 간 매칭'
  };
  window.ATLAS_COMPARISON = {
    id: "implementations",
    number: "09",
    name: "구현 방식 비교",
    readerLabel: "COMPARISON 09",
    author: "공개 코드·공식 문서 비교",
    authorLabel: "자료",
    originLabel: "관련 실험",
    input: "같은 상태·질문·행동 후보",
    outputLabel: "모델이 반환하는 값",
    output: "생성한 이름 · 토큰 점수 · head 점수 · 임베딩 유사도",
    executor: "답 검증 · 행동 실행 · 결과 기록",
    links: []
  };
  window.ATLAS_ARTICLES.implementations = {
    title: "행동을 고르는 다섯 가지 구현: 무엇을 읽고, 어디를 학습할까?",
    lead: "로컬 포켓몬은 Qwen이 써 준 행동 이름을 읽어 실행했다. MNIST 실험은 Qwen에 새 Clef 방식 head를 붙여 행동별 점수를 계산했다. 이 글에서는 입력이 답으로 바뀌는 과정을 다섯 방식으로 비교하고, 각 방식에서 기존 모델을 그대로 쓸 수 있는 때와 학습데이터가 필요한 때를 살펴본다.",
    origin: sources.guide,
    minutes: 25,
    hideMedia: true,
    refs: [
      sources.adapter,
      sources.mnist,
      sources.anyjev,
      sources.anyjevPaper,
      sources.semif,
      sources.simple,
      sources.sglang,
      sources.nimble,
      sources.tev,
      sources.pplx,
      sources.baseten,
      sources.h2o,
      sources.glide,
      sources.inner,
      sources.kev,
      sources.clef,
      sources.drex,
      sources.prism,
      sources.openjev,
      sources.laya,
      sources.gliner,
      sources.liquid,
      sources.jeff,
      sources.clm,
      sources.kanana,
      sources.kananaCode,
      sources.djev,
      sources.drexDlm,
      sources.jev,
      sources.openai,
      sources.microsoft,
      sources.upstage,
      sources.inception,
      sources.snowflake,
      sources.ibm,
      sources.parallel
    ],
    sections: [
      {
        id: "comparison-start",
        title: "포켓몬은 그대로 썼는데, MNIST는 왜 학습했을까?",
        blocks: [
          p("로컬 포켓몬의 전투 입력에는 적의 체력이 33이고 EMBER의 예상 피해가 41~49라는 정보가 들어 있었다. Qwen은 이 설명과 행동 후보를 읽고 {\"decision\":\"Use EMBER\"}라는 답을 생성했다. 실행 프로그램은 JSON에서 행동 이름을 꺼내 후보에 있는지 확인하고 기술을 사용했다. 이때 프로그램이 받은 것은 행동 이름 하나이며, 후보별 확률은 아니었다."),
          {
            type: "case-links",
            items: [
              {
                id: "pokemon",
                label: "01 · 포켓몬의 실제 입력과 응답",
                text: "전투·이동 프롬프트와 기억이 다음 판단에 들어가는 과정을 다시 확인한다."
              }
            ]
          },
          p("MNIST 실험은 ③ 별도 decision head 방식이다. 이미지에 적힌 목표 숫자와 현재 숫자를 Qwen3.5-0.8B에 넣고, 그 내부 표현을 새 Clef 방식 head에 전달했다. head는 −1, 0(STOP), +1의 점수를 만들고, softmax가 이 점수를 세 행동의 확률로 바꾼다. 이미지가 7이고 현재 숫자가 3이면 정답 행동은 +1이다.", [["MNIST 실험","mnist"]]),
          p("여기서 새 head는 처음부터 이 문제를 풀 줄 아는 상태가 아니었다. 그래서 MNIST 이미지의 정답 숫자로 올바른 행동을 계산해 학습데이터를 만들었다. Qwen의 기존 가중치는 고정하고, 본체에 끼운 LoRA와 새 head를 학습했다. LoRA는 기존 가중치를 직접 바꾸는 대신 작은 보조 행렬을 학습해 모델 계산을 조정하는 방법이다."),
          table(["구분","로컬 포켓몬","직접 학습한 MNIST"], [
            [
              "다섯 방식 중 위치",
              methods.generation,
              methods.heads
            ],
            [
              "사용 모델",
              "Qwen3.5:9b의 기존 생성 기능",
              "Qwen3.5-0.8B + 새 Clef 방식 head"
            ],
            [
              "직접 학습한 부분",
              "없음",
              "LoRA + 새 head; 기존 본체 가중치는 고정"
            ],
            [
              "직접 준비한 학습데이터",
              "없음",
              "이미지·현재 숫자·정답 행동"
            ],
            [
              "프로그램이 받는 값",
              "JSON의 행동 이름",
              "세 행동의 확률과 선택"
            ]
          ]),
          {
            type: "note",
            text: "MNIST에서 사용한 것은 Cloudflare가 배포한 Clef 모델 자체가 아니라, 일반 Qwen에 Clef 방식 head를 새로 붙인 모델이다. 이미 학습된 Clef 모델을 내려받아 쓰는 경우에는 새 head를 처음부터 학습하는 과정이 필요하지 않다."
          },
          p("포켓몬도 이미 학습된 Qwen의 능력을 사용했다. 여기서 “학습 없이”는 이번 포켓몬 과제에 맞춘 추가 학습을 하지 않았다는 뜻이다. 두 실험은 모델 크기, 입력 형식, 행동 설명도 다르므로 어느 쪽이 성공했는지만으로 구조의 우열을 정할 수는 없다.")
        ]
      },
      {
        id: "comparison-families",
        title: "다섯 방식은 어디서 갈리고, 어디를 학습할까?",
        blocks: [
          p("먼저 두 질문을 구분한다. “입력을 어떤 본체로 읽는가?”와 “읽은 결과에서 답을 어떻게 얻는가?”다. 본체(backbone)는 입력을 숫자 배열로 표현하고, head는 그 표현에서 출력 점수를 계산한다. 기존 언어 모델의 LM head는 다음 토큰, 즉 글자·단어 조각의 점수를 내는 출력층이다. 이 점수를 읽을 수도 있고, 행동 후보를 채점하는 head를 따로 붙일 수도 있다."),
          p("아래 다섯 행은 서로 겹치지 않는 다섯 종류의 모델이 아니라, 실제 구현을 비교하기 위한 다섯 구성 예다. 답을 얻는 방법만 묶으면 ① 문자열 생성, ② 토큰 점수 읽기, ③·④ 별도 head로 채점, ⑤ 임베딩 유사도 비교의 네 갈래가 된다. ③은 주로 생성용 decoder에 붙인 head를, ④는 양방향 encoder에 붙인 head를 보여 준다. 둘은 본체가 다르지만 “별도 head로 채점한다”는 점에서는 같은 갈래다."),
          {
            type: "diagram",
            layout: "architecture-comparison",
            title: "다섯 계산 경로와 학습 위치 · MNIST는 ③",
            caption: "위쪽 상자는 답을 계산하는 흐름, 아래 배지는 학습 설정이다. ①은 로컬 포켓몬, ③은 MNIST 실험에 사용한 방식이다. 초록 배지는 학습한 부분, 회색 배지는 고정한 부분, 회색 점선 배지는 선택적으로 추가 학습할 부분이다. ③·④는 모두 별도 head 채점이며 본체를 비교하려고 나누어 표시했다. 학습데이터가 불필요해도 성능을 확인할 평가 자료는 필요하다.",
            rows: [
              {
                label: methods.generation,
                example: "포켓몬 Qwen",
                repeat: true,
                cells: [
                  {
                    kind: "world",
                    title: "상태 · 질문 · 후보",
                    lines: ["목표와 행동 후보를 구성"]
                  },
                  {
                    kind: "llm",
                    title: "생성 모델 본체",
                    lines: ["Qwen의 입력 표현 계산"]
                  },
                  {
                    kind: "code",
                    title: "기존 LM head",
                    lines: ["다음 토큰 점수","토큰 선택을 반복"]
                  },
                  {
                    kind: "code",
                    title: "JSON / 행동 이름",
                    lines: ["문자열을 완성한 뒤","파싱 · 후보 검증"]
                  }
                ],
                training: {
                  backbone: [["기반 고정","fixed"]],
                  head: [["기존 head 고정","fixed"]],
                  data: ["포켓몬: 학습데이터 불필요","기존 모델 그대로 사용"]
                }
              },
              {
                label: methods.vocabulary,
                example: "AnyJev · Nimble",
                cells: [
                  {
                    kind: "world",
                    title: "상태 · 질문 · 후보",
                    lines: ["후보를 A · B · C로 대응"]
                  },
                  {
                    kind: "llm",
                    title: "생성 모델 본체",
                    lines: ["답을 시작할 위치의 표현"]
                  },
                  {
                    kind: "model",
                    title: "LM head / readout",
                    lines: ["A·B·C 토큰 점수만 읽기","필요한 행만 남길 수도 있음"]
                  },
                  {
                    kind: "code",
                    title: "후보 확률 · 선택",
                    lines: ["후보 안에서 softmax","답 문자열 생성 생략"]
                  }
                ],
                training: {
                  backbone: [["기반 고정","fixed"],["LoRA 선택","optional"]],
                  head: [["기존 head 사용","fixed"]],
                  data: ["그대로 사용: 불필요","추가 학습 시: 필요"]
                }
              },
              {
                label: methods.heads,
                example: "MNIST · Clef 방식",
                cells: [
                  {
                    kind: "world",
                    title: "MNIST 이미지 · 상태",
                    lines: ["현재 숫자 · −1 / 0 / +1"]
                  },
                  {
                    kind: "llm",
                    title: "Qwen3.5-0.8B",
                    lines: ["이미지·텍스트 표현 계산"]
                  },
                  {
                    kind: "model",
                    title: "Clef 방식 새 head",
                    lines: ["입력에서 판단 근거를 모아","행동 3개의 점수 계산"]
                  },
                  {
                    kind: "code",
                    title: "후보 확률 · 선택",
                    lines: ["행동 점수 → softmax","−1 / 0(STOP) / +1"]
                  }
                ],
                training: {
                  backbone: [["기반 고정","fixed"],["LoRA 학습","train"]],
                  head: [["새 head 학습","train"]],
                  data: ["MNIST: 정답 행동 필요","완성된 Clef 사용: 불필요"]
                },
                highlight: true
              },
              {
                label: methods.encoders,
                example: "Laya · GLiNER",
                cells: [
                  {
                    kind: "world",
                    title: "상태 · 질문 · 후보",
                    lines: ["읽을 내용과 질문·후보"]
                  },
                  {
                    kind: "vision",
                    title: "양방향 encoder",
                    lines: ["앞뒤 문맥을 함께 읽음"]
                  },
                  {
                    kind: "model",
                    title: "후보 채점 head",
                    lines: ["질문 타입에 맞게 채점","답 조합 규칙도 적용 가능"]
                  },
                  {
                    kind: "code",
                    title: "확률 · 허용된 답",
                    lines: ["선택 · yes/no · 점수","규칙을 적용하는 구현도 있음"]
                  }
                ],
                training: {
                  backbone: [["기반 고정","fixed"],["튜닝 선택","optional"]],
                  head: [["학습된 head 고정","fixed"]],
                  data: ["완성 모델 사용: 불필요","새 head·튜닝 시: 필요"]
                }
              },
              {
                label: methods.embeddings,
                example: "CLM · Kanana",
                split: true,
                cells: [
                  {
                    kind: "world",
                    title: "분리된 입력",
                    branches: ["상태 + 질문","후보 각각"]
                  },
                  {
                    kind: "llm",
                    title: "분리 인코딩",
                    branches: ["상태·질문 → 벡터 u","후보 각각 → 벡터 v"]
                  },
                  {
                    kind: "model",
                    title: "임베딩 유사도",
                    lines: ["필요시 벡터 변환층 적용","두 벡터의 방향 비교"]
                  },
                  {
                    kind: "code",
                    title: "후보 확률 · 선택",
                    lines: ["유사도 → softmax","후보 벡터 재사용 가능"]
                  }
                ],
                training: {
                  backbone: [["기반 고정","fixed"],["튜닝 선택","optional"]],
                  head: [["기존 벡터 사용","fixed"],["새 층 학습","optional"]],
                  data: ["완성 모델 사용: 불필요","직접 추가 학습 시: 필요"]
                }
              }
            ]
          },
          p("구조도, 아래 표, 뒤의 다섯 절은 같은 ①~⑤ 번호를 사용한다. ①은 기존 LM head로 행동 이름을 완성하고, ②는 같은 LM head에서 A·B·C의 점수만 읽고 멈춘다. ③ 행은 생성용 decoder와 별도 decision head의 조합을 대표 예로 보여 주며, 별도 head를 decoder에만 붙일 수 있다는 뜻은 아니다. ④는 양방향 encoder와 채점 head의 조합이다. ⑤는 상태 쪽과 후보 쪽 임베딩을 각각 만들어 유사도를 비교한다. 한 프로젝트가 여러 구성을 지원할 수도 있다."),
          table(["계열","답을 계산하는 경로","공개 사례"], [
            [methods.generation, "LLM → 답 문자열 → 파싱·검증", "로컬 포켓몬 Qwen · TypeSafe LLM adapter"],
            [methods.vocabulary, "답 위치의 후보 토큰 점수 → softmax", "AnyJev · SemIf · Nimble · Perplexity Decider"],
            [methods.heads, "Backbone의 hidden states → 후보 채점 head", "Kev · Clef · Drex · Sarvam-Prism"],
            [methods.encoders, "양방향 encoder가 상태·질문·후보를 읽고 채점", "Laya · GLiNER2.5-Decide · d1-omni"],
            [methods.embeddings, "상태·질문 벡터와 후보 벡터의 유사도 비교", "CLM · Kanana-2-v-decide"]
          ]),
          p("학습 여부는 이 다섯 분류와 별개다. 같은 ② Vocabulary readout도 기존 모델의 점수만 읽어 사용할 수 있고, 정답 데이터로 LoRA나 전체 가중치를 추가 학습할 수도 있다. ③ 별도 decision head도 head까지 이미 학습된 모델을 사용한다면 내 데이터로 다시 학습하지 않고 실행할 수 있다. 아래 표는 각 계열에서 내가 학습데이터를 준비해야 하는 경우를 따로 정리한 것이다."),
          table(["방식","기존 모델을 그대로 사용할 때","내가 학습데이터를 준비하는 때"], [
            [
              methods.generation,
              "기존 Qwen 등으로 행동 이름 생성; 본체·LM head 고정",
              "행동 선택을 더 잘하도록 직접 추가 학습할 때"
            ],
            [
              methods.vocabulary,
              "기존 모델에서 후보 토큰 점수만 읽기; 새 층 불필요",
              "Nimble처럼 LoRA 등을 직접 학습할 때"
            ],
            [
              methods.heads,
              "head까지 학습된 Clef·Kev 등을 사용",
              "MNIST처럼 새 head를 붙이거나 기존 모델을 추가 학습할 때"
            ],
            [
              methods.encoders,
              "head까지 학습된 Laya·GLiNER 등을 사용",
              "새 head를 만들거나 업무에 맞게 encoder·head를 조정할 때"
            ],
            [
              methods.embeddings,
              "학습된 임베딩 모델의 벡터를 비교",
              "상태·후보의 짝으로 모델이나 새 벡터 변환층을 학습할 때"
            ]
          ]),
          p("따라서 “③이면 무조건 사용자가 학습해야 한다”는 뜻은 아니다. 사용자가 학습데이터를 준비해야 하는지는 새로 학습할 가중치가 있는지에 달려 있다. 이미 학습된 모델과 head를 그대로 쓰면 추론부터 시작할 수 있다. 반면 새 head, LoRA, 전체 본체 중 어느 것이든 직접 학습하려면 정답 행동이나 보상처럼 맞고 틀림을 알려 줄 자료가 필요하다."),
          {
            type: "note",
            text: "본체 고정과 LoRA 학습은 함께 성립한다. MNIST에서는 원래 Qwen 가중치를 고정한 채 LoRA의 보조 행렬만 바꿨다. 학습 중 오차는 본체의 계산을 거슬러 LoRA까지 전달되지만, 원래 가중치는 갱신하지 않는다."
          },
          p("이 비교는 2026년 11월 11일 확인한 공개 문서와 코드를 바탕으로 한다. 아래 절에서는 각 방식의 계산과 공개 사례를 차례로 살펴본다.")
        ]
      },
      {
        id: "comparison-generation",
        title: methods.generation,
        blocks: [
          p("포켓몬의 Qwen은 Use EMBER라는 행동 이름을 JSON 안에 써 주었다. 모델 내부에서는 다음 토큰의 점수를 계산하고 하나를 고르는 일을 반복한다. 호출한 프로그램은 이 중간 점수 대신 완성된 문자열을 받는다. JSON schema로 허용할 이름을 제한할 수 있지만, 답을 문자열로 생성하는 과정은 그대로다."),
          p("TypeSafe의 LLM adapter도 일반 LLM을 System One API 형식으로 연결한다. discrete 모드는 선택 하나를 생성하고, probabilities 모드는 후보별 확률 숫자를 답에 써 준다. 모델이 답변에 “0.9”라고 쓴 값은 프로그램이 내부 후보 점수에서 직접 계산한 확률과 다르다. 숫자가 어떻게 만들어졌는지를 확인해야 한다.", [["LLM adapter","adapter"]]),
          p("기존 모델을 그대로 사용한다면 별도 학습데이터가 필요하지 않다. 프로그램은 JSON이 올바른지, 행동 이름이 후보에 있는지 검사하면 된다. 그 행동이 실제로 유리했는지는 실행 뒤의 게임 상태로 평가한다. 허용된 형식의 답을 만들었다는 것만으로 좋은 행동을 골랐다고 볼 수는 없다.")
        ]
      },
      {
        id: "comparison-vocabulary",
        title: methods.vocabulary,
        blocks: [
          p("공격을 A, 회복을 B, 도주를 C에 대응시켜 질문한다. 언어 모델은 답의 첫 토큰을 고르는 위치에서 어휘 목록(vocabulary)의 각 토큰에 점수를 매긴다. 이 확률 변환 전 점수가 logit이다. 프로그램은 A·B·C의 점수만 꺼내 softmax로 합이 1인 값으로 바꾼다. 행동 이름 전체를 생성할 필요가 없다. 이렇게 모델 안의 점수를 꺼내 쓰는 것을 여기서는 readout이라고 부른다."),
          {
            type: "code",
            lang: "python",
            kind: "직접 계산",
            label: "후보 토큰 점수를 선택 확률로 바꾸기",
            run: "offline",
            code: "from math import exp\n\n# 모델을 호출하지 않는 설명용 logits\nlogits = {\"A\": 2.0, \"B\": 0.5, \"C\": -1.0}\npeak = max(logits.values())\nweights = {key: exp(value - peak) for key, value in logits.items()}\nprobabilities = {key: value / sum(weights.values())\n                 for key, value in weights.items()}\nprint({key: round(value, 3) for key, value in probabilities.items()})\nassert abs(sum(probabilities.values()) - 1) < 1e-9\nassert max(probabilities, key=probabilities.get) == \"A\""
          },
          p("예제의 2.0, 0.5, −1.0은 계산을 설명하려고 지정한 값이다. 실제 사용에서는 모델이 이 점수를 계산한다. A·B·C가 답 문맥에서 각각 하나의 서로 다른 토큰인지도 확인해야 한다. Use EMBER처럼 여러 토큰으로 된 이름에서 첫 토큰 점수만 읽으면 행동 전체의 점수가 되지 않는다. 그래서 짧은 답 코드를 쓰거나, 문자열 전체의 조건부 확률을 계산하는 방법을 사용한다."),
          table(["공개 구현","어떤 점수를 읽는가","학습·추가 처리"], [
            [
              "Nokia Applied Research · AnyJev",
              "기존 지시 수행 LLM의 답 토큰 점수",
              "추가 가중치 학습 없이 사용; 후보 순서를 바꿔 채점하고 답 글자 편향 보정"
            ],
            [
              "TheoLeeCJ · SemIf",
              "기존 공개 모델의 후보 토큰 점수",
              "공통 상태 계산 재사용; 사용할 문제에 맞춰 확률 온도 보정"
            ],
            [
              "Featherless AI · simple-jev",
              "다음 토큰 점수에서 질문 타입에 맞는 답 구성",
              "여러 질문이 공유하는 입력 앞부분의 계산을 캐시에 저장"
            ],
            [
              "ekzhang · openjev-sglang",
              "SGLang으로 지정한 토큰의 로그확률 조회",
              "입력 앞부분의 캐시를 재사용하고 질문별 뒷부분 처리"
            ],
            [
              "Bespoke Labs · Nimble",
              "Qwen의 답 코드 토큰 점수",
              "LoRA를 학습해 정답 후보의 확률을 높임"
            ],
            [
              "Together AI · Tev1",
              "기존 LM head의 한 글자 답",
              "정답 글자로 지도학습; 클라이언트가 글자를 후보 이름으로 변환"
            ],
            [
              "Perplexity · Decider v1.2",
              "답 코드 255개의 점수",
              "LM head에서 답 코드에 필요한 행을 사용; 여러 질문 위치에서 점수 추출"
            ],
            [
              "Baseten · Mammoth-1 / Elephant-1",
              "LM head의 후보 글자 점수",
              "언어 모델 전체 가중치 학습; 입력 블록을 읽는 attention 방식도 변경"
            ],
            [
              "H2O.ai · H2O-Lightning",
              "학습된 모델의 답 토큰 점수",
              "앞부분만 읽는 방식과 앞뒤를 함께 읽는 방식을 지원"
            ],
            [
              "Fastino · GLiDE-27B",
              "질문별 답 코드 255개의 점수",
              "여러 질문을 작은 배치로 묶어 계산"
            ]
          ]),
          p("AnyJev, SemIf, simple-jev, openjev-sglang은 기존 모델에서 점수를 읽는 예다. 사용자가 새 head를 만들 필요는 없다. 다만 AnyJev처럼 후보 순서를 여러 번 바꾸어 점수를 합치면 계산도 여러 번 필요하다. “문자열을 생성하지 않는다”와 “모든 처리가 모델 계산 한 번으로 끝난다”는 서로 다른 말이다.", [["AnyJev","anyjev"],["SemIf","semif"],["simple-jev","simple"],["openjev-sglang","sglang"]]),
          p("Nimble과 Tev1은 이 경로를 학습으로 개선한 예다. 이미 완성된 모델을 쓰는 사용자는 그 학습을 다시 할 필요가 없다. Perplexity Decider의 별도 readout 파일은 기존 LM head에서 답 코드에 해당하는 행을 가져온다. 파일이 분리되어 있다고 해서 반드시 새로운 종류의 복잡한 head를 붙인 것은 아니다.", [["Nimble","nimble"],["Tev1","tev"],["Perplexity Decider","pplx"]]),
          p("Baseten의 기술 보고서, H2O-Lightning, GLiDE-27B 모델 카드는 같은 토큰 점수 방식에서도 학습 범위와 입력 처리 방법이 다를 수 있음을 보여 준다. Releasing the Inner Jev 논문도 기존 글자 점수를 그대로 읽는 기준 모델과 LoRA·축소 head를 학습한 모델을 비교한다.", [["Baseten의 기술 보고서","baseten"],["H2O-Lightning","h2o"],["GLiDE-27B","glide"],["Releasing the Inner Jev","inner"]])
        ]
      },
      {
        id: "comparison-heads",
        title: methods.heads,
        blocks: [
          p("이 방식은 일반 언어 모델의 LM head 대신, 후보를 채점하는 head를 사용한다. 본체가 입력을 읽으며 만든 숫자 배열을 hidden states라고 한다. head는 질문과 후보가 있는 위치의 hidden states 등을 받아 후보별 점수를 계산한다. 모든 후보에 같은 채점 함수를 적용하는 설계라면 실행할 때 후보 개수나 설명을 바꿀 수도 있다."),
          table(["공개 구현","Head에 주는 정보","점수를 만드는 방법"], [
            [
              "Jared Palmer · Kev",
              "질문 표시 <decide>와 각 후보 끝의 내부 표현",
              "질문과 후보 벡터를 비교하는 pointer head"
            ],
            [
              "Cloudflare · Clef",
              "입력 전체, 질문, 후보의 내부 표현",
              "후보별로 입력의 근거를 모으고 질문끼리 정보 교환"
            ],
            [
              "Nace.AI · Drex v2.0",
              "Qwen MoE 본체의 내부 표현",
              "별도 pointer head"
            ],
            [
              "Sarvam AI · Sarvam-Prism",
              "각 후보 끝과 답 표시 위치의 표현",
              "후보끼리 읽지 못하게 한 뒤 decision head로 비교"
            ],
            [
              "Zefan-Cai · Open-Jev",
              "Qwen의 내부 표현",
              "LoRA와 후보당 점수 하나를 내는 head를 학습"
            ]
          ]),
          p("Kev의 pointer head는 질문을 표현한 벡터와 후보를 표현한 벡터를 비교한다. Clef의 joint schema head는 각 후보가 입력에서 필요한 근거를 모으고 질문 표현과 결합해 점수를 만든다. 예를 들어 “회복해야 하나?”를 판단할 때 체력 관련 입력을 참고하는 식이다. 두 구현 모두 행동 이름을 생성하는 과정은 생략하지만, head 안의 계산은 다르다.", [["Kev","kev"],["Clef","clef"]]),
          p("Drex v2.0, Sarvam-Prism, Open-Jev도 별도 head를 쓰는 공개 사례다. Sarvam-Prism은 후보마다 같은 시작 위치를 부여하고 다른 후보를 읽지 못하게 한다. 이처럼 후보 점수에는 head뿐 아니라 후보를 입력에 배치하는 방식도 영향을 준다.", [["Drex v2.0","drex"],["Sarvam-Prism","prism"],["Open-Jev","openjev"]]),
          p("MNIST 실험은 바로 이 ③번이다. Qwen3.5-0.8B의 기존 가중치는 고정하고, 새 Clef 방식 head와 Qwen 안의 LoRA를 학습했다. 학습 입력은 이미지·현재 숫자·행동 설명이며, 정답 행동은 오차를 계산할 때만 사용한다. 이미지의 정답 숫자를 모델 입력에 미리 알려 준 것은 아니다.", [["MNIST 실험","mnist"]]),
          p("배포된 Clef는 head까지 학습된 모델이다. 반면 MNIST는 일반 Qwen에 새 head를 붙였기 때문에 그 head를 학습해야 했다. LoRA까지 함께 학습하는 것은 이 실험이 택한 방법이다. 본체를 완전히 고정하고 head만 학습하는 방법도 가능하지만, 이 MNIST 실험이 그 설정의 성능까지 검증한 것은 아니다.", [["배포된 Clef","clef"]])
        ]
      },
      {
        id: "comparison-encoders",
        title: methods.encoders,
        blocks: [
          p("“결제가 두 번 됐어요. 하나는 환불해 주세요.”라는 문의를 결제팀·기술팀·영업팀 중 어디로 보낼지 정한다고 하자. ④의 대표적인 구성은 문의, “어느 부서로 보내야 하는가?”라는 질문, 부서별 업무 설명을 함께 입력받는다. 결제팀 설명에는 결제·청구·환불, 기술팀에는 오류·장애, 영업팀에는 구매 상담이 적혀 있다."),
          p("본체는 이 글을 읽으며 각 토큰의 내부 표현(hidden states)을 만든다. 내부 표현은 문맥을 반영한 숫자 배열이다. 예를 들어 “환불” 위치의 표현에는 주변의 “결제”, “두 번”과 후보 설명에서 읽은 정보가 반영될 수 있다. 숫자 하나마다 “환불”, “결제” 같은 뜻이 하나씩 붙어 있는 것은 아니다. Head는 이 표현을 받아 후보별 점수를 계산한다. 보통 사람이 작성한 if문이 아니라, 학습으로 가중치를 정한 신경망이다."),
          p("설명용으로 결제팀 4.2, 기술팀 0.3, 영업팀 −0.5라는 점수가 나왔다고 하자. 가장 높은 결제팀을 선택해 문의를 전달한다. 이 숫자는 실제 모델의 측정값이 아니라 계산 순서를 보여 주기 위한 가정이다. 입력을 읽는 본체 → 후보 점수를 계산하는 head → 가장 높은 후보 선택의 순서이며, 확률 형태가 필요하면 점수에 softmax를 적용한다."),
          p("④를 encoder 기반이라고 부르는 이유는 입력을 읽는 본체가 양방향 encoder이기 때문이다. 일반적인 causal decoder의 각 위치는 그 위치와 앞쪽 토큰을 참고한다. 양방향 encoder의 각 위치는 앞뒤 토큰을 모두 참고할 수 있다. 다만 decoder도 입력 맨 끝에서는 앞에 놓인 문의와 후보 전체를 참고할 수 있다. 따라서 encoder만 전체 문의를 이해하고 decoder는 일부만 이해한다는 뜻은 아니다. ③과 ④는 모두 별도 head를 쓸 수 있으며, 여기서는 본체의 차이를 비교하려고 두 행으로 보여 준다."),
          table(["공개 구현","모델 본체와 head","특징"], [
            [
              "NandhaKishorM / Convai Innovations · Laya",
              "ModernBERT 계열 encoder + 질문 타입별 head",
              "후보를 표시한 위치의 표현을 채점"
            ],
            [
              "Fastino · GLiNER2.5-Decide",
              "텍스트·질문·후보를 함께 읽는 encoder",
              "후보 점수를 계산한 뒤 답 사이의 규칙도 적용"
            ],
            [
              "Liquid AI · d1-omni-600M",
              "양방향 LFM encoder + 이미지·오디오 encoder",
              "텍스트 외 입력도 받아 직접 판단"
            ],
            [
              "logan-markewich · jeff",
              "GLiFormer encoder + RNN·분류 head",
              "기존 모델을 System One 호출 형식에 연결"
            ]
          ]),
          p("Laya는 encoder와 질문 타입에 맞는 head를 사용한다. GLiNER2.5-Decide는 후보별 점수를 만든 뒤, 미리 정한 규칙을 만족하는 답 조합을 찾는다. 예를 들어 “공격 탐지 = 예”로 선택했다면 “전체 판정 = 안전”은 선택하지 못하도록 할 수 있다. 점수를 계산하는 단계와 허용된 답 조합을 고르는 단계가 함께 있는 것이다.", [["Laya","laya"],["GLiNER2.5-Decide","gliner"]]),
          p("Liquid AI의 d1 제품군 안에서도 d1-3B는 decoder, d1-omni는 encoder를 사용한다. jeff는 GLiFormer를 이용한 별도 구현이다. 같은 회사 제품이거나 API 형식이 같더라도 본체까지 같지는 않다. head까지 학습된 모델을 그대로 사용하면 추가 학습데이터는 필요 없고, 새 head를 붙이거나 업무에 맞춰 학습할 때는 데이터가 필요하다.", [["Liquid AI","liquid"],["jeff","jeff"]])
        ]
      },
      {
        id: "comparison-embeddings",
        title: methods.embeddings,
        blocks: [
          p("같은 중복 결제 문의를 ⑤로 처리해 보자. 이번에는 문의와 질문을 벡터 u로 만들고, 결제팀·기술팀·영업팀의 설명을 각각 벡터 v1, v2, v3로 만든다. 벡터는 숫자 배열이며, 내용을 이런 배열로 바꾸어 표현하는 것을 임베딩이라고 한다. 예를 들어 u에는 문의와 “어느 부서로 보낼까?”라는 질문이, v1에는 “결제팀: 결제·청구·환불 담당”이라는 설명이 반영된다."),
          p("각 벡터를 만든 다음 s_i = cosine(u, v_i)를 계산한다. Cosine similarity는 두 벡터가 얼마나 비슷한 방향을 가리키는지 나타낸다. 설명용 유사도가 결제팀 0.86, 기술팀 0.21, 영업팀 0.08이라면 결제팀을 고른다. 0.86은 정답일 확률 86%라는 뜻이 아니다. 실제 모델은 유사도에 배율을 적용하기도 하며, softmax로 합이 1인 후보 분포를 만든다."),
          p("④도 내부에서 벡터를 쓰므로, 차이는 “벡터를 쓰느냐”가 아니다. 여기서 비교한 ④는 문의와 후보의 관계를 본체와 채점 head가 처리한다. ⑤는 문의 쪽과 후보 쪽의 임베딩을 각각 만든 뒤, 그 유사도로 최종 점수를 얻는다. 문의가 하루 만 건 들어와도 부서 설명이 같다면, 후보 벡터 세 개를 저장해 두고 재사용할 수 있다."),
          table(["공개 구현","벡터를 만드는 방법","후보 점수"], [
            [
              "CLM · Contrastive Language Models",
              "상태와 행동을 따로 읽고 학습한 벡터 변환층(projection head) 적용",
              "두 벡터 방향의 유사도(cosine similarity)에 배율을 곱함"
            ],
            [
              "Kakao · Kanana-2-v-decide-3b-2611",
              "상태·질문을 하나의 벡터로, 후보 답을 각각의 벡터로 만듦",
              "Cosine similarity를 softmax로 변환"
            ]
          ]),
          p("CLM은 올바른 상태·행동의 짝은 가깝게, 다른 짝은 멀게 표현되도록 대조학습(contrastive learning)을 한다. 공개 코드에는 상태용 head와 행동용 head가 각각 있다. 카카오 Kanana-2-v-decide는 텍스트·JSON·대화·이미지 상태를 지원하며, 상태·질문 벡터와 후보 벡터의 유사도로 확률을 만든다고 설명한다. 두 모델이 같은 변환층을 쓴다는 뜻은 아니다.", [["CLM","clm"],["카카오 Kanana-2-v-decide","kanana"]]),
p("“올바른 짝은 가깝게 학습한다”는 말은 중복 결제 문의와 결제팀 설명의 유사도는 높이고, 같은 문의와 기술팀·영업팀 설명의 유사도는 낮추도록 가중치를 조정한다는 뜻이다. 이미 이렇게 학습된 모델을 쓰면 사용자에게 새 학습 과정이 필요한 것은 아니다."),
          p("따로 임베딩한다는 설명을 “문의 쪽에는 후보가 절대 들어가지 않는다”로 이해해서는 안 된다. Kanana의 공개 구현은 기본 설정에서 후보 목록을 문의 쪽 입력에도 포함한다. 그래도 문의 쪽 임베딩과 후보별 임베딩은 별도로 계산하고, 마지막에는 그 유사도를 비교한다.", [["Kanana의 공개 구현","kananaCode"]]),
          p("후보 설명이 계속 같으면 후보 벡터를 미리 계산해 재사용할 수 있다. 상태와 후보를 따로 읽는다고 반드시 본체 가중치도 두 벌인 것은 아니다. 같은 모델을 각각 호출할 수도 있다. 이미 학습된 모델의 벡터를 그대로 비교한다면 추가 학습이 필요 없고, 모델이나 새 변환층을 직접 학습하려면 올바른 상태·후보의 짝 같은 데이터가 필요하다.")
        ]
      },
      {
        id: "comparison-diffusion",
        title: "Diffusion은 ②·③과 어떻게 연결될까?",
        blocks: [
          p("Diffusion은 여섯 번째 답 선택 방식이 아니다. 앞에서 구분한 “답을 꺼내는 방법”과 별개로, 본체가 답 위치의 표현을 어떻게 계산하는지를 설명하는 말이다. 따라서 diffusion 모델도 토큰 점수를 읽으면 ②와 연결되고, 별도 head로 후보 점수를 내면 ③·④와 같은 채점 갈래에 속한다."),
          p("고객 문의에서 “담당 부서: [빈칸], 긴급 여부: [빈칸]”이라는 답 틀을 준비한다고 하자. 순차 생성은 답 토큰을 하나씩 이어 쓰지만, 텍스트 diffusion은 여러 답 위치를 마스크나 노이즈에서 시작해 함께 갱신할 수 있다. 이 예시의 빈칸은 답이 들어갈 위치를 설명하기 위한 표시다. 그 위치의 토큰 분포를 읽을 수도 있고, 갱신한 내부 표현을 별도 head에 넣어 후보를 채점할 수도 있다."),
          p("아래 표는 출력 방법을 기준으로 앞의 번호와 연결한다. djev는 ②의 토큰 점수 읽기에 해당하고, Drex DLM은 ③에서 설명한 별도 head 채점에 해당한다. 다만 앞 도식의 ③ 행에 그려진 Qwen decoder를 그대로 쓴다는 뜻은 아니다. Drex DLM에서는 그 자리를 diffusion 본체가 차지한다."),
          table(["공개 구현","모델 본체","답을 얻는 방법"], [
            [
              "mmastrac · djev",
              "DiffusionGemma",
              "② 토큰 점수 읽기 · 답 칸의 토큰 분포"
            ],
            [
              "Nace.AI · Drex DLM",
              "NVIDIA Efficient-DLM",
              "③과 같은 별도 head 채점 · 본체는 diffusion; 질문 간 입력은 분리"
            ]
          ]),
          p("djev는 고정 텍스트를 남겨 두고 빈 답 위치를 준비한 뒤, 한 번의 갱신(denoise step)에서 그 위치의 토큰 분포를 읽는다. Drex DLM은 diffusion 본체에 pointer head를 붙였다. 따라서 diffusion이라는 이름만으로 head의 종류나 학습데이터 필요 여부를 알 수 없다. Nace의 Qwen 기반 Drex v2.0과 Drex DLM도 서로 다른 모델이다.", [["djev","djev"],["Drex DLM","drexDlm"],["Drex v2.0","drex"]])
        ]
      },
      {
        id: "comparison-parallel",
        title: "질문을 한꺼번에 보내면 서로의 판단에도 영향을 줄까?",
        blocks: [
          p("같은 고객 문의에 대해 “담당 부서는?”, “환불이 필요한가?”, “얼마나 급한가?”를 한 요청에 보낼 수 있다. 어떤 구현은 문의를 읽은 계산만 재사용하고 세 질문은 따로 판단한다. 다른 구현은 세 질문의 표현을 함께 처리한다. 한 HTTP 요청에 담았다는 사실만으로 이 둘을 구분할 수는 없다."),
          table(["처리 방식","질문끼리 공유하는 것","공개 예"], [
            [
              "공통 입력 계산만 재사용",
              "문의까지 읽은 결과를 캐시에 저장; 뒤에 붙이는 질문은 각각 처리",
              "simple-jev · Nimble의 해당 처리 방식"
            ],
            [
              "다른 질문을 읽지 못하도록 분리",
              "공통 상태는 읽을 수 있지만 다른 질문의 입력은 읽지 못함",
              "Kev · Drex DLM"
            ],
            [
              "질문들을 함께 처리",
              "질문 표현이 서로 영향을 줄 수 있음",
              "Clef · Perplexity Decider v1.2"
            ],
            [
              "답 조합에 규칙 적용",
              "개별 점수 외에 답 사이의 허용 조합을 검사",
              "GLiNER2.5-Decide"
            ]
          ]),
          p("Perplexity Decider v1.1은 질문마다 마지막 위치의 점수를 읽었다. v1.2는 한 입력 토큰 열(sequence)에 여러 질문을 넣고 각 질문 뒤의 표시 토큰(marker)에서 점수를 읽는다. 모델 카드에는 질문들이 서로 영향을 줄 수 있다고 설명되어 있다. 모델 이름이 같아도 버전에 따라 처리 방법이 바뀔 수 있다.", [["Perplexity Decider","pplx"]]),
          p("Kev는 질문을 분리할 때 Qwen의 recurrent layer도 고려한다. 이 층은 앞에서 계산한 상태를 이어 쓰므로, attention mask로 토큰 사이 연결만 막는 것으로 질문을 완전히 분리할 수 없기 때문이다. 구현에서는 질문별 입력 행과 공통 캐시 재사용을 구분한다. 속도를 비교할 때는 요청에 담은 질문 수뿐 아니라 실제 모델 계산 횟수와 전체 대기 시간도 기록해야 한다.", [["Kev","kev"]]),
          {
            type: "exercise",
            question: "같은 문의에 질문 하나를 추가했더니 원래 질문의 후보 확률도 바뀌었다. 구현 오류라고 단정할 수 있을까?",
            answer: "질문들이 함께 처리되는 모델이라면 추가 질문이 기존 질문의 표현에도 영향을 줄 수 있다. 먼저 그 모델이 질문별 독립성을 보장하는지 확인한다. 독립성을 보장하는 구현이라면 질문을 따로 보낸 결과와 함께 보낸 결과를 비교해 차이가 단순 수치 오차인지 검사한다."
          }
        ]
      },
      {
        id: "comparison-training",
        title: "내가 학습데이터를 준비해야 하는 경우",
        blocks: [
          p("가장 먼저 “완성된 모델을 쓰는가, 새로 학습할 부분이 있는가?”를 확인한다. 학습된 Nimble·Kev·Clef·Laya를 내려받아 그대로 실행하는 것과, 일반 Qwen에 새 head를 붙이는 것은 다르다. 전자는 공급자가 학습을 마쳤고, 후자는 사용자가 새 부분을 학습해야 한다. ①이나 ②도 성능을 개선하려고 직접 추가 학습한다면 데이터가 필요하다."),
          table(["내가 하려는 작업","바뀌는 가중치","준비할 자료"], [
            [
              "학습된 모델을 그대로 실행",
              "없음; 본체와 head 모두 고정",
              "추가 학습데이터 불필요; 성능을 확인할 평가 사례는 준비"
            ],
            [
              "새 decision head만 학습",
              "새 head; 본체 고정",
              "입력·질문·후보와 정답 선택"
            ],
            [
              "MNIST처럼 LoRA + head 학습",
              "LoRA 보조 행렬과 새 head; 기존 본체 고정",
              "이미지·현재 숫자와 정답 행동"
            ],
            [
              "기존 모델을 전체 미세조정",
              "선택한 본체·head 가중치 전체",
              "정답, 실행 보상, 교사 모델의 답 등 학습 목표에 맞는 자료"
            ],
            [
              "후보 순서·답 글자 편향 보정",
              "모델 가중치는 고정; 점수 합치는 방법 변경",
              "순서를 바꾼 출력과 방법에 따라 정답 없는 입력 등"
            ],
            [
              "확률의 온도 보정",
              "확률 변환 배율 조정; 본체·head 고정",
              "모델 학습용·최종 시험용과 분리한 정답 있는 보정 데이터"
            ]
          ]),
          p("LoRA와 head는 역할이 다르다. LoRA는 본체가 만드는 표현을 적은 수의 추가 가중치로 조정한다. head는 그 표현을 받아 후보 점수를 계산한다. MNIST에서는 두 부분을 함께 학습했지만, 어느 부분을 학습할지는 실험 설계에 따라 선택한다. 새 head를 학습하는 데 반드시 LoRA까지 써야 하는 것은 아니다."),
          p("학습 신호가 반드시 사람이 일일이 붙인 정답일 필요는 없다. 예를 들어 AnyJev의 순서·답 글자 편향 보정은 모델 가중치를 바꾸지 않지만, 같은 프로젝트의 Tacit은 모델 자신의 예측을 학습 목표로 쓰는 self-distillation을 거친 별도 모델이다. 사람 정답을 쓰지 않았더라도 입력과 학습 목표를 만들어 가중치를 바꿨다면 학습을 한 것이다.", [["AnyJev","anyjev"]]),
          p("학습과 확률 보정도 구분해야 한다. softmax는 점수를 합이 1인 값으로 바꿔 줄 뿐, “0.9라고 답한 사례의 약 90%가 맞는다”는 성질까지 보장하지 않는다. 이를 확인하고 조정하는 것이 확률 보정(calibration)이다. TypeSafe의 RLCD와 Cloudflare의 calibration 학습은 모델을 만드는 학습 방법이며, 학습 후 온도 보정은 점수에 적용하는 배율을 맞추는 방법이다. 새로운 게임이나 업무에서도 별도 정답 자료로 확인해야 한다.", [["TypeSafe","jev"],["Cloudflare","clef"]]),
          {
            type: "exercise",
            question: "어휘 전체에서 A·B·C의 확률이 0.06·0.03·0.01이었다. 세 후보만 남겨 다시 나누면 A는 0.6이다. A가 실제로 정답인 비율도 60%일까?",
            answer: "0.6은 세 후보에 배정된 값의 합 0.1 중 A의 값 0.06이 차지하는 비율이다. 후보 밖 토큰의 값은 이 계산에서 제외됐다. 이 비율만으로 실제 정답 비율을 알 수는 없다. 실제 문제에서 0.6 정도의 확률을 받은 예측들을 모으고 그중 몇 개가 정답인지 별도 데이터로 확인해야 한다."
          }
        ]
      },
      {
        id: "comparison-services",
        title: "같은 API 형태라도 내부 계산 방식은 다를 수 있다",
        blocks: [
          p("상태와 후보를 보냈더니 {\"attack\":0.7,\"heal\":0.2,\"run\":0.1}이 돌아왔다고 하자. 이 응답만으로는 A·B·C 토큰의 점수를 읽었는지, 별도 head로 채점했는지, 임베딩을 비교했는지 알 수 없다. 회사마다 내부 구조를 공개한 범위가 다르므로, 공식 자료로 확인한 내용까지만 아래에 적었다. 자료 확인일은 2026년 11월 11일이다."),
          table(["회사·제품","공식 자료에서 설명한 것","이 설명만으로 알 수 없는 것"], [
            [
              "TypeSafe · Jev",
              "정해진 질문 타입의 답과 확률을 반환; 확률 보정을 위한 학습 목표 설명",
              "정확한 내부 head 구조"
            ],
            [
              "OpenAI · Decisions API",
              "gpt-6-luna로 참/거짓(predicate)·선택(choice)·점수(score) 질문 처리",
              "확률을 계산하는 내부 head 구조"
            ],
            [
              "Microsoft · Microsoft-Decision-1",
              "Qwen3.5-9B를 한 번의 채점에 맞게 후속 학습",
              "발표에 없는 세부 구현"
            ],
            [
              "Upstage · Solar Decide",
              "Solar Mini 4 기반; 답 문자열 생성 없이 확률 반환",
              "문서에 없는 정확한 head 연산"
            ],
            [
              "Inception · Mercury Decide",
              "반복적인 고빈도 분류를 위한 제품",
              "해당 발표에 없는 head와 답 선택의 세부 계산"
            ],
            [
              "Snowflake · Decision",
              "SQL에서 데이터 행별로 판단하는 Cortex AI Functions 기능",
              "SQL 호출 형식만으로는 내부 채점 구조를 알 수 없음"
            ],
            [
              "IBM · Granite Switch",
              "요청에 따라 decision·safety adapter를 선택해 기반 모델에 적용",
              "Adapter 전환 기능만으로 각 head의 구조를 알 수 없음"
            ],
            [
              "Parallel · Decisions API",
              "실시간 웹 검색과 근거를 결합해 정해진 타입의 답 반환",
              "검색 기능만으로 모델 내부 head를 알 수 없음"
            ]
          ]),
          p("Jev와 OpenAI Decisions API는 어떤 질문과 출력을 지원하는지 설명한다. Microsoft-Decision-1은 기반 모델과 후속 학습을, Solar Decide는 문자열 생성 없이 확률을 반환하는 동작을 설명한다. API 형식이 닮았다는 이유만으로 내부 계산까지 같다고 묶을 수는 없다.", [["Jev","jev"],["OpenAI Decisions API","openai"],["Microsoft-Decision-1","microsoft"],["Solar Decide","upstage"]]),
          p("Mercury Decide와 Snowflake Decision도 발표에 나온 제품 동작을 기준으로 적었다. IBM은 어떤 adapter를 골라 실행하는지, Parallel은 웹 검색으로 판단 근거를 어떻게 보충하는지를 보여 준다. 이런 시스템 기능과 후보 점수를 만드는 head의 계산은 서로 다른 비교 항목이다.", [["Mercury Decide","inception"],["Snowflake Decision","snowflake"],["IBM","ibm"],["Parallel","parallel"]]),
          p("모델을 실행하는 소프트웨어도 따로 살펴야 한다. 같은 모델을 Mac의 MLX, ONNX를 지원하는 장치, llama.cpp 등으로 옮겨 실행할 수 있다. 실행 환경을 바꾸면 속도와 메모리 사용량은 달라질 수 있지만, 그 사실만으로 새로운 head가 생긴 것은 아니다. 모델의 점수 계산을 바꿨는지와 어디에서 실행하는지를 나누어 비교한다.")
        ]
      },
      {
        id: "comparison-finish",
        title: "모델을 바꿀 때는 입력·학습·출력을 함께 기록한다",
        blocks: [
          p("포켓몬의 Qwen을 다른 모델로 바꿔 비교하려면 같은 게임 상태, 목표, 행동 후보를 전달하고 같은 실행 코드로 행동을 연결한다. 한 모델에만 피해 설명을 주거나 조작 코드까지 바꾸면 결과가 모델 차이 때문인지 알기 어렵다. 같은 조건에서 다음 항목을 기록하면 차이를 설명하기 쉽다."),
          table(["기록할 항목","구체적인 내용"], [
            [
              "후보 점수의 출처",
              "생성한 행동 이름 / A·B·C 토큰 점수 / 별도 head / 임베딩 유사도"
            ],
            [
              "직접 학습한 부분",
              "없음 / 새 head / LoRA / 본체 전체; 사용한 학습데이터"
            ],
            [
              "여러 질문 처리",
              "각각 계산 / 공통 입력만 재사용 / 질문끼리 영향 / 답 조합 규칙"
            ],
            [
              "성능과 시간",
              "선택 정확도 / 실제 행동 결과 / 확률 보정 / 전체 지연 / 반복 실패"
            ]
          ]),
          p("로컬 포켓몬은 ① 기존 Qwen으로 행동 이름을 생성한 사례다. 기존 LLM에서 A·B·C의 점수만 읽으면 ②다. 직접 만든 MNIST 모델은 ③이며 기존 Qwen 가중치는 고정하고 LoRA와 새 Clef 방식 head를 학습했다. Kanana는 ⑤처럼 상태·질문과 후보의 임베딩을 비교한다. 이 구분으로 어떤 점수를 쓰는지와 내가 무엇을 학습해야 하는지를 함께 확인할 수 있다."),
          p("MNIST처럼 새 head를 학습하는 과정을 따라가려면 시각적 decision model 실험 안내와 MNIST 문제를 이어 읽으면 된다. 입력과 정답 행동을 만드는 방법, LoRA·head의 학습, 확률 보정, 높은 확률로 틀린 사례를 순서대로 확인할 수 있다.", [["시각적 decision model 실험 안내","guide"],["MNIST 문제","mnist"]])
        ]
      }
    ]
  };
})();

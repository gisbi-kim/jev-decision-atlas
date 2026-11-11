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
  window.ATLAS_COMPARISON = {
    id: 'implementations', number: '09', name: '구현 방식 비교', readerLabel: 'COMPARISON 09',
    author: '공개 코드·공식 문서 비교', authorLabel: '자료', originLabel: '관련 실험',
    input: '같은 상태·질문·행동 후보', outputLabel: '모델이 반환하는 값',
    output: '생성한 이름 · 토큰 점수 · head 점수 · 임베딩 유사도',
    executor: '답 검증 · 행동 실행 · 결과 기록', links: []
  };
  window.ATLAS_ARTICLES.implementations = {
    title: 'Jev를 바꾸면, 판단은 어디서 나올까?',
    lead: '포켓몬의 로컬 실행에서는 Qwen을 추가로 학습하지 않고 행동을 골랐다. 반면 MNIST 실험에서는 Qwen에 Clef 방식 decision head와 LoRA를 붙여 학습했다. 둘 다 후보 하나를 고르지만, 답을 계산하는 경로는 다르다. 마지막 글에서는 이 차이에서 출발해 공개된 회사·개인 구현을 다섯 계열로 비교한다.',
    origin: sources.guide, minutes: 20, hideMedia: true,
    refs: Object.entries(sources).filter(([key]) => key !== 'guide').map(([, source]) => source),
    sections: [
      {
        id: 'comparison-start', title: '포켓몬은 학습 없이 골랐는데, MNIST는 왜 학습했을까?',
        blocks: [
          p('로컬 포켓몬의 전투 기록에는 적의 남은 체력이 33이고, EMBER의 예상 피해가 41~49라는 정보가 이미 들어 있다. 프로그램은 이 상태와 행동 후보를 Qwen에 보내고, Qwen은 {"decision":"Use EMBER"}를 반환한다. 프로그램은 JSON을 읽어 후보에 있는 이름인지 확인한 뒤 기술을 실행한다. 이 응답에는 후보별 확률이 없다.'),
          { type: 'case-links', items: [{ id: 'pokemon', label: '01 · 포켓몬의 실제 입력과 응답', text: '전투·이동 프롬프트와 기억이 다음 판단에 들어가는 과정을 다시 확인한다.' }] },
          p('MNIST 실험은 다른 출력 경로를 사용했다. Qwen3.5-0.8B가 이미지와 현재 숫자를 읽으면, 새로 붙인 Clef 방식 head가 −1·STOP·+1의 점수를 만든다. 기반 모델이 언어와 이미지를 학습했다는 사실만으로 새 head까지 학습된 것은 아니다. 이 실험에서는 정답 행동 데이터로 head와 LoRA를 함께 학습했다.', [['MNIST 실험', 'mnist']]),
          table(['구분', '로컬 포켓몬', 'MNIST 실험'], [
            ['사용한 경로', 'Qwen3.5:9b의 기존 언어 생성', 'Qwen3.5-0.8B + Clef 방식 head'],
            ['프로그램이 받는 값', 'JSON에 담긴 행동 이름 하나', '행동별 점수에서 구한 확률과 선택'],
            ['이번 과제의 추가 학습', '없음', '정답 행동으로 head와 LoRA 학습'],
            ['주변 코드의 역할', '상태·목표·후보·피해 설명을 만들고 조작 실행', '이미지·현재 숫자를 구성하고 선택한 이동 실행']
          ]),
          p('따라서 추가 학습 없이 사용했다는 말은 아무 학습도 하지 않은 모델이라는 뜻이 아니다. 이미 학습된 어느 부분을 그대로 쓰고, 어떤 출력 경로를 새로 만들었는지를 살펴야 한다. 두 실험은 모델 크기, 이미지 입력, 후보 설명과 주변 코드도 다르므로 성공 여부만으로 구조의 우열을 비교할 수 없다.')
        ]
      },
      {
        id: 'comparison-families', title: '같은 선택을 만드는 다섯 가지 계산 경로',
        blocks: [
          p('공격·회복·도주 중 하나를 고른다고 하자. 어떤 구현은 attack이라는 문자열을 쓰고, 어떤 구현은 A라는 토큰의 점수를 읽는다. 다른 구현은 후보의 내부 표현이나 별도로 만든 벡터를 비교한다. 아래 분류는 2026년 11월 11일 확인한 공개 문서·모델 카드·코드를 계산 경로에 따라 묶은 것이다. 서로 완전히 배타적인 이론 분류는 아니며, 한 프로젝트에 여러 경로가 함께 있을 수 있다.'),
          table(['계열', '답을 계산하는 경로', '공개 사례'], [
            ['① 문자열 생성', 'LLM → 답 문자열 → 파싱·검증', '로컬 포켓몬 Qwen · TypeSafe LLM adapter'],
            ['② Vocabulary readout', '답 위치의 후보 토큰 점수 → softmax', 'AnyJev · SemIf · Nimble · Perplexity Decider'],
            ['③ 별도 decision head', 'Backbone의 hidden states → 후보 채점 head', 'Kev · Clef · Drex · Sarvam-Prism'],
            ['④ Encoder 기반 판단', '양방향 encoder가 상태·질문·후보를 읽고 채점', 'Laya · GLiNER2.5-Decide · d1-omni'],
            ['⑤ 임베딩 간 매칭', '상태·질문 벡터와 후보 벡터의 유사도 비교', 'CLM · Kanana-2-v-decide']
          ]),
          p('학습 여부는 이 표와 별개의 축이다. 같은 vocabulary readout을 그대로 사용할 수도 있고, 정답 데이터로 LoRA나 전체 가중치를 조정할 수도 있다. 배포된 decision model의 head가 이미 학습되어 있다면 사용자는 자기 데이터로 다시 학습하지 않고 추론부터 시작할 수 있다.')
        ]
      },
      {
        id: 'comparison-generation', title: '① 행동 이름을 생성하고 코드가 읽는다',
        blocks: [
          p('포켓몬에서 Use EMBER를 골랐다는 결과는 JSON 안의 문자열로 왔다. 모델 내부에서는 다음 토큰의 점수를 계산하며 이 문자열을 이어 쓴다. 하지만 호출한 프로그램은 그 중간 점수를 읽지 않고 완성된 답을 받는다. JSON schema로 허용한 이름을 제한해도, 이 생성 경로가 별도의 decision head로 바뀌는 것은 아니다.'),
          p('TypeSafe의 LLM adapter도 일반 LLM API를 System One 형태로 연결한다. 선택 하나를 생성하는 discrete 모드와 후보별 확률 숫자를 생성하는 probabilities 모드가 있다. 이때 모델이 텍스트로 써 준 0.9는 내부 후보 logits에서 계산한 0.9와 구분해야 한다.', [['LLM adapter', 'adapter']]),
          p('이 방법은 기존 모델과 API로 행동 선택을 빠르게 연결하기 좋다. 실행 코드는 답을 파싱하고 후보 이름과 값의 범위를 검증한다. 형식에 맞는 공격을 골랐어도 공격이 좋은 판단이었는지는 게임의 다음 상태를 보고 평가해야 한다.')
        ]
      },
      {
        id: 'comparison-vocabulary', title: '② 답 위치의 A·B·C 점수를 바로 읽는다',
        blocks: [
          p('공격을 A, 회복을 B, 도주를 C에 대응시키고 답을 고르게 한다. 답이 시작되는 위치에서 vocabulary 전체의 logits를 얻은 뒤 A·B·C의 점수만 추출해 softmax를 적용할 수 있다. 답 문자열을 끝까지 생성할 필요는 없다. 다음은 실제 모델 출력이 아니라 softmax 연산만 확인하는 계산 예제다.'),
          { type: 'code', lang: 'python', kind: '직접 계산', label: '후보 토큰 점수를 선택 확률로 바꾸기', run: 'offline', code: 'from math import exp\n\n# 모델을 호출하지 않는 설명용 logits\nlogits = {"A": 2.0, "B": 0.5, "C": -1.0}\npeak = max(logits.values())\nweights = {key: exp(value - peak) for key, value in logits.items()}\nprobabilities = {key: value / sum(weights.values())\n                 for key, value in weights.items()}\nprint({key: round(value, 3) for key, value in probabilities.items()})\nassert abs(sum(probabilities.values()) - 1) < 1e-9\nassert max(probabilities, key=probabilities.get) == "A"' },
          p('단, A·B·C가 실제 답 문맥에서 각각 하나의 서로 다른 토큰인지 확인해야 한다. Use EMBER처럼 여러 토큰인 후보의 첫 토큰만 읽으면 전체 후보의 점수를 얻지 못한다. 짧은 답 코드를 사용하거나 후보 문자열 전체의 조건부 확률을 계산하는 별도 방식이 필요하다. 후보 점수를 정규화한 확률은 공격의 실제 성공률과도 다르다.'),
          table(['구현', '학습과 readout', '추가 계산·처리'], [
            ['Nokia Applied Research · AnyJev', '기존 instruction LLM의 답 토큰 점수', '후보 순서 회전과 label prior 보정'],
            ['TheoLeeCJ · SemIf', '기존 공개 모델의 후보 logits', '공통 상태 재사용 · workload별 온도 보정'],
            ['Featherless AI · simple-jev', '다음 토큰 logits로 typed answer 구성', '공통 prefix의 KV cache 재사용'],
            ['ekzhang · openjev-sglang', 'SGLang의 지정 토큰 logprob readout', 'Prefix cache와 질문 suffix 처리'],
            ['Bespoke Labs · Nimble', 'Qwen에 LoRA 학습 후 답 코드 점수 읽기', '후보 logits의 cross-entropy 학습'],
            ['Together AI · Tev1', '기존 LM head로 정답 글자 SFT', '공개 클라이언트는 한 글자 답을 선택 이름으로 변환'],
            ['Perplexity · Decider v1.2', '255개 답 코드의 축소 readout', '여러 질문 marker에서 공동 readout'],
            ['Baseten · Mammoth-1 / Elephant-1', 'LM head의 후보 글자 logits', '전체 언어 가중치 학습 · block-bidirectional attention'],
            ['H2O.ai · H2O-Lightning', '학습한 모델의 answer-token 점수', 'Causal·bidirectional reading 경로'],
            ['Fastino · GLiDE-27B 공개 모델', '질문별 255-way readout', '질문들을 microbatch로 함께 채점']
          ]),
          p('추가 학습 없는 예는 AnyJev, SemIf, simple-jev, openjev-sglang에서 확인할 수 있다. AnyJev의 순서 보정은 여러 회전을 읽으므로 한 번의 raw readout보다 호출과 연산이 늘어난다. 보정한 전체 판단까지 항상 한 번의 forward라고 부를 수는 없다.', [['AnyJev', 'anyjev'], ['SemIf', 'semif'], ['simple-jev', 'simple'], ['openjev-sglang', 'sglang']]),
          p('학습한 예는 Nimble과 Tev1의 recipe에 설명되어 있다. Perplexity Decider의 축소 readout도 vocabulary의 답 코드에 대응하는 행을 사용한다. 별도 readout 파일이 있다는 이유만으로 복잡한 routing head라고 볼 수는 없다.', [['Nimble', 'nimble'], ['Tev1', 'tev'], ['Perplexity Decider', 'pplx']]),
          p('Baseten의 기술 보고서는 후보 글자 logits와 attention 변경을 설명한다. H2O-Lightning은 같은 가중치의 reading mode를 구분하며, GLiDE-27B 공개 카드는 255-way readout을 명시한다. Releasing the Inner Jev 논문은 학습 전 글자 logits baseline과 LoRA·축소 head 학습을 함께 비교한다.', [['Baseten의 기술 보고서', 'baseten'], ['H2O-Lightning', 'h2o'], ['GLiDE-27B', 'glide'], ['Releasing the Inner Jev', 'inner']])
        ]
      },
      {
        id: 'comparison-heads', title: '③ Hidden states에서 후보를 직접 채점한다',
        blocks: [
          p('공격 후보의 설명이 길어져도 한 토큰으로 바꿀 필요가 없는 설계도 있다. Backbone이 읽은 후보의 표현과 질문의 표현을 별도 head에 전달해 점수를 만든다. head가 모든 후보에 같은 채점 함수를 적용하면 실행할 때 후보 종류와 개수를 바꿀 수 있다.'),
          table(['구현', 'Head가 사용하는 정보', '주요 계산'], [
            ['Jared Palmer · Kev', '질문의 <decide>와 후보 끝의 hidden states', 'Query·key 형태의 pointer 채점'],
            ['Cloudflare · Clef', '입력 memory · 질문 · 후보 표현', '후보별 evidence routing · 질문 간 attention'],
            ['Nace.AI · Drex v2.0', 'Qwen MoE backbone의 내부 표현', '별도 pointer head'],
            ['Sarvam AI · Sarvam-Prism', '후보 끝과 answer marker의 표현', '후보를 격리해 읽고 decision head로 비교'],
            ['Zefan-Cai · Open-Jev', 'Qwen의 내부 표현', 'LoRA + 학습된 scalar decision head']
          ]),
          p('Kev의 pointer head는 질문과 후보의 표현을 비교한다. Clef는 후보마다 입력의 근거를 모으고 질문의 표현을 함께 처리하는 joint schema head를 사용한다. 둘 다 문자열 생성을 생략하지만 head의 연산은 같지 않다.', [['Kev', 'kev'], ['Clef', 'clef']]),
          p('Drex v2.0, Sarvam-Prism, Open-Jev도 내부 표현에 별도 head를 연결하는 공개 사례다. 특히 Sarvam-Prism은 후보들이 같은 시작 위치를 쓰고 다른 후보를 읽지 못하도록 구성한다. 후보를 배열하는 방법과 attention도 결과에 관여한다.', [['Drex v2.0', 'drex'], ['Sarvam-Prism', 'prism'], ['Open-Jev', 'openjev']]),
          p('MNIST 실험은 일반 Qwen에 Clef 방식 head를 새로 붙였으므로 정답 데이터로 학습했다. 배포된 Clef는 head까지 이미 학습되어 있다. LoRA는 이 실험에서 backbone을 조정한 방법이며, 모든 decision head에 수학적으로 필수인 구성은 아니다. Backbone을 고정하고 head만 학습하는 설계도 가능하다.', [['MNIST 실험', 'mnist'], ['배포된 Clef', 'clef']])
        ]
      },
      {
        id: 'comparison-encoders', title: '④ 문장을 생성하지 않는 encoder에서 시작한다',
        blocks: [
          p('고객 문의를 읽고 담당 부서를 고르는 일에는 긴 답변을 쓰는 능력이 필요하지 않을 수 있다. Encoder 계열은 상태·질문·후보를 양방향으로 읽고 decision head로 점수를 만든다. 생성용 decoder에서 시작한 앞의 구현과 출발점이 다르다.'),
          table(['구현', '기반 구성', '판단의 특징'], [
            ['NandhaKishorM / Convai Innovations · Laya', 'ModernBERT 계열 + typed decision head', '후보 marker의 표현을 채점'],
            ['Fastino · GLiNER2.5-Decide', 'Text·schema를 함께 읽는 encoder', '후보 점수와 질문 간 제약을 함께 처리'],
            ['Liquid AI · d1-omni-600M', '양방향 LFM encoder + vision·audio encoder', '멀티모달 상태에서 직접 판단'],
            ['logan-markewich · jeff', 'GLiFormer encoder + RNN·classification head', '기존 encoder를 System One 인터페이스로 연결']
          ]),
          p('Laya의 공개 코드는 encoder와 typed head를 구분한다. GLiNER2.5-Decide는 후보별 compatibility score를 만든 뒤 명시한 규칙에 맞는 공동 답을 찾는다. 예를 들어 공격이 탐지되었다면 전체 안전 판정도 unsafe가 되어야 한다는 제약을 표현할 수 있다.', [['Laya', 'laya'], ['GLiNER2.5-Decide', 'gliner']]),
          p('Liquid AI의 같은 d1 제품군에도 decoder 기반 d1-3B와 encoder 기반 d1-omni가 함께 있다. jeff는 GLiFormer를 활용한 별도 구현이다. 회사 이름이나 System One API 형식만 보고 backbone이 같다고 판단해서는 안 된다.', [['Liquid AI', 'liquid'], ['jeff', 'jeff']])
        ]
      },
      {
        id: 'comparison-embeddings', title: '⑤ 상태와 후보를 각각 임베딩해 비교한다',
        blocks: [
          p('담당 부서가 billing·technical·sales로 계속 같다면 후보 설명의 벡터를 미리 만들어 둘 수 있다. 새 문의가 들어오면 상태와 질문의 벡터를 만들고, 후보 벡터들과 비교한다. 상태와 후보를 처음부터 함께 읽는 대신 표현을 분리하는 접근이다.'),
          table(['구현', '두 표현을 만드는 방법', '최종 점수'], [
            ['CLM · Contrastive Language Models', '상태와 행동을 따로 인코딩하고 학습한 projection head 적용', '두 projection 벡터의 cosine similarity'],
            ['Kakao · Kanana-2-v-decide-3b-2611', '상태·질문을 한 임베딩으로, 후보 답을 각각 별도 임베딩으로 구성', 'Cosine similarity의 softmax']
          ]),
          p('CLM은 상태와 행동을 연결하는 contrastive 학습을 사용한다. 공개 코드에는 state head와 action head를 거친 벡터의 cosine similarity에 scale을 곱하는 연산이 있다. 카카오 Kanana-2-v-decide는 텍스트·JSON·대화와 이미지 상태를 받아 질문·후보 임베딩의 유사도로 분포를 만든다고 설명한다.', [['CLM', 'clm'], ['카카오 Kanana-2-v-decide', 'kanana']]),
          p('이 경우 확률은 vocabulary의 특정 토큰을 꺼낸 결과가 아니다. 후보 설명을 인코딩한 벡터와 상태·질문 벡터를 비교한 결과다. 후보 표현을 재사용하기 좋지만, 세부 조건을 구분하는 능력과 확률 보정은 해당 학습과 실제 업무에서 확인해야 한다.')
        ]
      },
      {
        id: 'comparison-diffusion', title: 'Diffusion은 어떤 head를 쓰는가와 별개의 축이다',
        blocks: [
          p('빈 답 칸 여러 개를 한꺼번에 읽는다고 모두 같은 구조는 아니다. Diffusion 모델은 여러 위치의 표현을 함께 갱신할 수 있고, 그 위에서 토큰 점수를 읽거나 별도 decision head를 사용할 수 있다.'),
          table(['공개 구현', 'Backbone과 출력 경로', '읽을 때 구분할 점'], [
            ['mmastrac · djev', 'DiffusionGemma의 답 canvas에서 slot별 토큰 분포를 읽음', '고정 텍스트를 유지하고 답 slot을 남긴 structured readout'],
            ['Nace.AI · Drex DLM', 'NVIDIA Efficient-DLM backbone + pointer head', '공유 상태는 양방향, 질문 branch는 격리해 채점']
          ]),
          p('djev는 고정된 답 형식을 canvas에 놓고 한 denoise step에서 답 slot의 분포를 읽는 방법을 공개했다. Drex DLM은 diffusion backbone에 pointer head를 결합한 모델이다. 같은 diffusion 계열에서도 readout이 다르며, Nace의 Qwen 기반 Drex v2.0과 Drex DLM도 별도 모델로 구분해야 한다.', [['djev', 'djev'], ['Drex DLM', 'drexDlm'], ['Drex v2.0', 'drex']])
        ]
      },
      {
        id: 'comparison-parallel', title: '세 질문을 함께 물으면 서로의 답도 볼까?',
        blocks: [
          p('회복이 필요한지, 어느 부서가 담당할지, 얼마나 급한지를 한 요청에 묶을 수 있다. 그러나 한 HTTP 요청에 들어 있다는 사실만으로 세 질문을 하나의 공동 판단으로 계산했다고 볼 수는 없다. 어떤 구현은 공통 문서만 재사용하고, 어떤 구현은 질문끼리 정보를 나눈다.'),
          table(['처리 방식', '정보를 공유하는 범위', '공개 예'], [
            ['Prefix 재사용 후 독립 채점', '공통 상태의 cache를 쓰고 질문별 suffix를 처리', 'simple-jev · Nimble의 해당 경로'],
            ['질문 branch 격리', '상태는 읽지만 다른 질문 branch는 읽지 못함', 'Kev · Drex DLM'],
            ['공동 표현과 readout', '질문들을 함께 처리하며 서로 영향을 줄 수 있음', 'Clef · Perplexity Decider v1.2'],
            ['명시한 규칙으로 공동 선택', '후보 점수에 더해 답 사이의 허용 조합을 검사', 'GLiNER2.5-Decide']
          ]),
          p('Perplexity Decider v1.1은 질문마다 마지막 위치에서 읽었다. v1.2는 한 sequence에 여러 질문을 넣고 각 질문 뒤 marker에서 읽으며, 질문끼리 영향을 줄 수 있다고 설명한다. 같은 모델 이름도 버전에 따라 판단 경로가 달라진다.', [['Perplexity Decider', 'pplx']]),
          p('반면 Kev는 Qwen의 recurrent layer가 일반 attention mask만으로 격리되지 않는다는 점 때문에 질문별 row와 cache 재사용 경로를 구분한다. 한 번에 보낸 질문 수와 실제 sequence 수, 반복 횟수, 대기 시간을 함께 기록해야 속도를 비교할 수 있다.', [['Kev', 'kev']]),
          { type: 'exercise', question: '다른 조건은 그대로 두고 질문 하나를 더 보냈더니 기존 질문의 확률도 바뀌었다. 구현 오류라고 단정할 수 있을까?', answer: '질문이 공동 표현을 사용하는 구현이라면 다른 질문이 입력 문맥에 영향을 줄 수 있다. 먼저 해당 버전의 attention과 readout 계약을 확인한다. 독립성을 보장한 구현이라면 질문을 따로·함께 보냈을 때의 차이를 수치 오차와 비교해 검사한다.' }
        ]
      },
      {
        id: 'comparison-training', title: 'Head 학습, 모델 학습, 확률 보정을 나누어 본다',
        blocks: [
          p('학습이 필요하다는 말에는 공급자가 모델을 만든 과정과 사용자가 자기 업무에 맞추는 과정이 함께 섞이기 쉽다. 이미 학습된 Nimble·Kev·Clef·Laya 등을 내려받아 추론하는 사용자가 항상 새 데이터셋을 만들어야 하는 것은 아니다. 반대로 새 head를 붙이거나 업무에 맞게 확률을 보정하려면 그 목적에 맞는 데이터가 필요하다.'),
          table(['작업', '바뀌는 부분', '필요한 근거'], [
            ['기존 모델의 raw readout', '가중치 변경 없음', '후보 토큰과 프롬프트가 맞는지, 실제 문제의 성능'],
            ['순서·prior 보정', '출력 점수의 결합·재조정', '회전별 출력과 비라벨 입력 등 방법에 맞는 자료'],
            ['Head·LoRA·전체 가중치 학습', '후보 채점 함수 또는 backbone', '정답·검증 가능한 결과·teacher 분포 등 학습 신호'],
            ['온도 보정', 'Logits를 확률로 바꾸는 scale', '학습·최종 평가와 분리한 보정 데이터'],
            ['독립 평가', '모델은 고정', '실제 사용할 입력 분포의 정답과 실행 결과']
          ]),
          p('AnyJev의 순서·prior 보정은 가중치를 바꾸지 않는 경로이며, 같은 프로젝트의 Tacit은 self-distillation으로 학습한 별도 체크포인트다. 사람의 정답이나 다른 teacher 모델을 쓰지 않았다는 설명도 학습 자체를 하지 않았다는 뜻은 아니다.', [['AnyJev', 'anyjev']]),
          p('또한 softmax로 합이 1인 숫자를 만들었다고 calibration이 보장되지는 않는다. TypeSafe의 RLCD, Cloudflare가 설명한 calibration 학습, 학습 뒤 temperature scaling은 각각 확인할 과정이다. 새 게임이나 업무에서도 확률 0.9인 예측들의 실제 정답 비율이 그에 맞는지 따로 평가한다.', [['TypeSafe', 'jev'], ['Cloudflare', 'clef']]),
          { type: 'exercise', question: '후보 A·B·C의 전체 vocabulary 확률이 0.06·0.03·0.01이었다. 후보만 남겨 정규화하면 A는 0.6이다. A가 정답일 확률이 60%라고 바로 해석할 수 있을까?', answer: '0.6은 이 세 후보 토큰의 확률 질량 안에서 A가 차지하는 비율이다. 전체 vocabulary에서 세 후보가 차지하는 질량은 0.1이며, 후보 밖의 값은 정규화에서 제외되었다. 어느 수치도 실제 정답 빈도와 자동으로 같아지지 않는다. 해당 문제의 정답 데이터로 보정을 평가해야 한다.' }
        ]
      },
      {
        id: 'comparison-services', title: '회사 API와 실행 환경은 공개된 수준까지 구분한다',
        blocks: [
          p('System One 형태로 호출할 수 있어도 내부 head가 공개되어 있다는 뜻은 아니다. 다음은 2026년 11월 11일 공식 자료에서 확인한 제품 범위다. API의 입출력, 공급자가 설명한 backbone, 실제 공개 코드의 구조를 구분했으며 속도·가격 순위를 만들지는 않았다.'),
          table(['회사·제품', '공개 자료에서 확인한 내용', '이 비교에서 구분한 범위'], [
            ['TypeSafe · Jev', 'Typed decision·확률과 calibration 학습 목표', '정확한 내부 head 구조는 확정하지 않음'],
            ['OpenAI · Decisions API', 'gpt-6-luna의 predicate·choice·score', '공식 API 가이드로 head 구조를 확정하지 않음'],
            ['Microsoft · Microsoft-Decision-1', 'Qwen3.5-9B를 single-pass scoring용 post-training', '공개 발표의 backbone·학습 범위'],
            ['Upstage · Solar Decide', 'Solar Mini 4 기반 System One endpoint', '문자열 생성 없이 확률을 반환한다는 공식 설명'],
            ['Inception · Mercury Decide', '고빈도 분류용 decision 제품', '해당 발표만으로 head·sampling 구조를 확정하지 않음'],
            ['Snowflake · Decision', 'Cortex AI Functions에서 SQL로 행별 판단', '모델 출력과 데이터 플랫폼 통합을 구분'],
            ['IBM · Granite Switch', 'Base model과 decision·safety adapter 전환', '요청별 adapter 선택이라는 배포 구성'],
            ['Parallel · Decisions API', '실시간 웹 검색과 근거를 결합한 typed decision', '모델 head와 검색·판단 시스템을 구분']
          ]),
          p('Jev, OpenAI Decisions API, Microsoft-Decision-1, Solar Decide의 공식 자료는 각각 다른 수준으로 구현을 설명한다. 인터페이스가 닮았다는 이유로 같은 구조라고 묶지 않는다.', [['Jev', 'jev'], ['OpenAI Decisions API', 'openai'], ['Microsoft-Decision-1', 'microsoft'], ['Solar Decide', 'upstage']]),
          p('Mercury Decide와 Snowflake Decision은 제품 발표에서 확인한 범위를 표시했다. IBM의 adapter 전환과 Parallel의 웹 검색은 판단을 어떤 시스템에 연결하는지 보여 준다. 모델을 MLX·Core ML·ONNX·llama.cpp로 옮기는 작업도 주로 실행 환경의 차이이며, 모델의 채점 구조가 새로 생겼는지는 별도로 확인한다.', [['Mercury Decide', 'inception'], ['Snowflake Decision', 'snowflake'], ['IBM', 'ibm'], ['Parallel', 'parallel']])
        ]
      },
      {
        id: 'comparison-finish', title: '모델을 바꿀 때 같은 상태와 실행 코드로 비교한다',
        blocks: [
          p('포켓몬에서 Qwen을 다른 모델로 바꾸려면 먼저 같은 상태·목표·후보를 보내고 답을 같은 행동으로 연결한다. 그 상태에서 문자열 생성, 토큰 readout, 학습된 head를 비교해야 계산 경로의 차이를 관찰할 수 있다. 피해 설명을 한쪽에만 주거나 실행 코드를 함께 바꾸면 어떤 변경이 결과를 만들었는지 나누기 어렵다.'),
          table(['확인할 항목', '기록할 내용'], [
            ['출력 경로', '생성 문자열 / vocabulary logits / decision head / 임베딩 유사도'],
            ['학습 범위', '기존 가중치 / LoRA / 새 head / 전체 학습 / distillation'],
            ['질문 처리', '독립 / prefix 공유 / 공동 판단 / 답 사이 제약'],
            ['확률과 실행', '보정 자료 / 선택 정확도 / 행동 결과 / 지연 / 반복 실패']
          ]),
          p('이 기준으로 보면 로컬 포켓몬은 ① 생성 경로, 추가 학습 없는 A·B·C 추출은 ② vocabulary readout, MNIST는 ③ 새 head 학습, Kanana는 ⑤ 임베딩 매칭에 놓인다. 같은 행동 이름을 반환해도 어디에서 점수를 만들었는지, 어느 부분이 이미 학습되어 있는지, 실행 결과와 확률이 맞는지를 각각 확인할 수 있다.'),
          p('직접 head를 학습하는 과정은 시각적 decision model 실험 안내에서 이어 볼 수 있다. 가장 작은 MNIST 문제부터 정답 데이터, LoRA와 head, 확률 보정, 높은 확신의 오답을 순서대로 살펴본다.', [['시각적 decision model 실험 안내', 'guide'], ['MNIST 문제', 'mnist']])
        ]
      }
    ]
  };
})();

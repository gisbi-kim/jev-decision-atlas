# 강의 원문 대조 · 2026-11-11

8개 카드의 본문을 제작자 원문과 구현에 대조했다. 포켓몬은 서로 다른 두 프로젝트를 한 강의에서 비교하며, 2389의 원문과 Mathiesen의 완주 기록을 구분한다. 글의 길이를 늘리는 것보다 설계의 이유와 실제 관측을 연결하는 데 초점을 뒀다.

## 마지막 구현 방식 비교 · 2026-11-11

`comparison.js`의 12절은 앞선 사례를 마무리하는 비교 해설이다. 출처 36개를 본문과 글 끝에 연결했다. 분류는 공개된 계산 경로를 바탕으로 작성한 편집상의 구분이며, 완전히 배타적인 이론 분류나 제품 순위로 표시하지 않는다.

| 비교 범위 | 확인한 1차 자료 | 구분하여 반영한 내용 |
| --- | --- | --- |
| 포켓몬 / MNIST | 기존 공개 실행 기록, [MNIST 튜토리얼](https://gisbi-kim.github.io/jev-mnist-tutorial/site/index.html) | 생성한 행동 이름과 새 head의 확률, 과제 추가 학습과 기존 사전학습 |
| Vocabulary readout | [AnyJev](https://github.com/nokia-applied-research/AnyJev), SemIf, simple-jev, openjev-sglang, Nimble·Tev1의 README·학습 문서 | Raw logits, 순서·prior 보정, 기존 LM head의 fine-tuning, 한 글자 답 생성과 readout |
| 학습한 readout | [Perplexity v1.2 카드](https://huggingface.co/perplexity-ai/pplx-decider-v1.2), [Baseten 보고서](https://labs.baseten.co/articles/mammoth-1-and-elephant-1-frontier-decision-models), H2O-Lightning·GLiDE-27B 카드 | 축소 readout과 복잡한 새 head를 구분, 질문 marker·attention·전체 학습 |
| 별도 head | [Kev 코드](https://github.com/jaredpalmer/kev/blob/main/kev/model.py), [Clef 공식 설명](https://blog.cloudflare.com/clef-decision-models/), Drex v2.0·Sarvam-Prism 카드, Open-Jev README | Pointer와 joint schema routing, 질문·후보 격리, 배포 모델 사용과 새 head 학습 |
| Encoder | Laya common.py, GLiNER2.5-Decide 공식 설명, Liquid Open d1 발표, GLiFormer 기반 jeff | Decoder와 encoder의 출발점, 명시적 답 조합 제약, 같은 제품군의 다른 backbone |
| 임베딩 매칭 | [CLM heads.py](https://github.com/Contrastive-LM/CLM/blob/main/src/clm/heads.py), [Kakao 모델 카드](https://huggingface.co/kakaocorp/kanana-2-v-decide-3b-2611) | 분리 인코딩·projection·cosine similarity와 후보 표현 재사용 |
| Diffusion | [djev](https://github.com/mmastrac/djev), [Drex DLM 카드](https://huggingface.co/nace-ai/drex-dlm) | Canvas slot의 토큰 readout과 Efficient-DLM + pointer head |
| 제품·배포 | TypeSafe·OpenAI·Microsoft·Upstage·Inception·Snowflake·IBM·Parallel 공식 자료 | API 계약과 공개된 내부 구조, SQL·adapter·검색 통합을 각각 구분 |

계산 예제의 logits는 설명을 위해 지정한 값으로 실제 모델 출력이나 성능 수치가 아니다. 공급자·개인의 학습 데이터와 벤치마크 수치를 새로 재현했다고 표시하지 않는다. 서비스 내부 head가 공개되지 않은 경우 인터페이스만으로 구조를 추정하지 않았다. 새 외부 코드·미디어·가중치는 복사하지 않았으므로 기존 제3자 자료의 라이선스 범위도 확대하지 않는다.

## 사례별 출처와 수정

| 사례 | 기준 원문 | 대조 후 반영한 내용 |
| --- | --- | --- |
| 포켓몬 A | [Michael Sugimura, Jev Plays Pokemon](https://2389.ai/research/writing/jev-plays-pokemon/), 사용자 제공 전문 | GLM–DeepSeek–Jev 계층, 완료 조건, Orrery, RAM/ASCII 관측, BFS와 94% 일치, 정책 선택으로 변경, 전체/최소 입력 비교, 확률 활용 제안, 비용·지연·호출 빈도, 초기 실험과 다음 단계 |
| 포켓몬 B | [Christian Mathiesen README](https://github.com/christianmat/jev-pokemon/blob/main/README.md)와 client.ts/agent.ts | 별도 제작자·실행 날짜·완주 결과, 선택 범위, 경로·메뉴 실행, 상태별 분기, 이름 짓기, 반복 탈출, A와의 비교. 기존 영상은 B의 영상이라고 표시 |
| 팩맨 | [Opper JevMan README](https://github.com/opper-ai/jevman-benchmark/blob/main/README.md)와 brain.ts/decide.ts | joch/jevman에서 이어진 벤치마크라는 출처, 선행 요청과 갈림길 대기, 2초 뒤 대체 행동, 탈출 질문, 경로 특징, 확률 표시, 인간 플레이와 벤치마크 구분, 워밍업·재생·점수 검증 |
| 테트리스 | [trungdq88 README](https://github.com/trungdq88/jev-tetris/blob/main/README.md)와 public/jev.js | Gemini만이 아니라 Haiku와 Laya의 결과, 중력·독립 보드·방해 줄의 차이, Laya의 축소 후보와 CPU 조건, 낙하 시간 예산, 배치 열거와 특징 설명, 네 질문의 역할, 단독 플레이 기록 |
| 마리오 | [fhshaik README](https://github.com/fhshaik/typesafe-mario/blob/main/README.md)와 policy.py/state.py | 일곱 매크로, 일곱 상태 묶음, 지연·접촉·점프 시점 계산, Choice와 표시용 Noul/Score, 행동 유지 간격, state-demo와 로그 분석. 원본에 없는 플레이 영상을 표시하지 않음 |
| DOOM | [TypeSafe 공식 소개의 Doom 절](https://typesafe.ai/blog/introducing-system-one-models-and-jev) | 구조화 상태·지시 반응·초당 약 10회·당시 약 $7/시간을 기준으로 제어 루프 설명. 호출 주기와 지연·관측 나이·목표 변경 실험을 계산 예제로 전개 |
| Wikiracing | [같은 공식 소개의 Wikiracing 절](https://typesafe.ai/blog/introducing-system-one-models-and-jev), [Choice 문서](https://docs.typesafe.ai/primitives/choice) | 실제 링크만 이동, 큰 후보 집합의 평가/선택 분리, 당시 255개 한도, 비교 모델의 추론 설정, 합법적 이동과 목표 도달의 차이, 후보 누락과 경로 시간 계산 |
| 드론 | [RomanSlack README 전체](https://github.com/RomanSlack/jev-drone/blob/main/README.md)와 tactics.py | 다섯 코스·지표·손으로 만든 일곱 장면, 안전 반사의 거부 권한, 높이 입력 수정, 카메라/좌표/제어/시뮬레이션 시간 오류. 원 코스의 Choice 구조와 후속 터널의 두 Score 구조를 분리 |
| 로봇팔 | [Control-derek README](https://github.com/Control-derek/so101-jev/blob/main/README.md), [lessons.md](https://github.com/Control-derek/so101-jev/blob/main/docs/lessons.md), lean_runner.py | 47번 실패 원인, 오래된 관측·큰 프롬프트, 서보 dead band·접촉 부하, 세 실행의 입력 차이, 숫자/단어 재표현, 오프라인 검사와 실제 성공 구분, mailbox와 API, 실행 후 관측과 로그 |

DOOM과 Wikiracing은 제작사의 같은 공개 글에서 소개한 두 데모다. 공개 글에 없는 내부 요청 스키마나 구현을 만들어 원본 코드라고 표시하지 않았다. 계산 예제는 입력을 명시한 독립적인 수업 예제로 표시한다. 다른 사례의 구현 발췌는 파일·커밋·줄 번호로 연결한다.

## 2389 원문 본문 대응

| 원문의 순서 | 강의에서 다루는 절 |
| --- | --- |
| TL;DR / Jev의 1-of-N 성격과 라우터 활용 | 01 같은 포켓몬, 서로 다른 실험 / 04 BFS / 05 정책 |
| 실험 동기, 상태·행동 공간과 장기 계획 | 01 / 02 계층 / 10 두 결과 비교 |
| 실행 대시보드, 목표와 퀘스트 | 02 / 03 RAM 지도 |
| High level: 퀘스트, acceptance criteria, 아이템, map 42 | 02 |
| Orrery 지식베이스와 검색 | 02 |
| Middle layer: 좌표, PyBoy RAM, 타일·충돌, pokered, ASCII | 02 / 03 |
| GLM·DeepSeek 4.1 Flash와 LunaRoute, 모델 교체 가능성 | 02 |
| per-step BFS 힌트와 94% 일치 | 04 |
| shortest / health preservation / farm exp | 05, 실제 choose_policy·tile_cost 발췌와 수치 예제 |
| 전체/최소 입력: 1,324/601, 94%/94%, 0.82/0.87 | 06 입력 비교 |
| 정책 입력 축소, 건강할 때 훈련하고 체력 저하 후 회피 | 05 / 06 |
| confidence와 상위 모델로 넘기는 다음 단계 | 08 확률 |
| 423토큰, 159ms와 146~540ms, 당시 단가와 호출 비용 | 07 비용 |
| 20걸음마다, 분당 25걸음, 약 1.3회/분, 시간당 $0.0014 | 07, 계산식 포함 |
| 10회/초 가정의 $0.64/시간 | 07, DOOM의 실제 비용과 구분 |
| 중간 모델 62토큰·418ms·출력 요금, 전체 2.38초/걸음 | 07 |
| 장기 실행·초반 지역·체육관 전투 계획, 오픈소스 | 01 / 08 / 출처 목록 |

페이지 내 다른 상품 소개·뉴스레터·회사 연락처·사이트 탐색 메뉴는 기술 강의의 대상에서 제외했다. 원문의 실험 결과와 제안한 다음 단계는 완료된 사실로 섞지 않았다.

## 강의 설명에 추가한 계산과 문제

각 강의는 실제 문제에서 출발해 필요한 상태·후보·실행 구조를 설명하고 결과로 돌아온다. 포켓몬의 타일 비용, 팩맨의 선행 요청, 테트리스의 낙하 마감, 마리오의 반응 시간, DOOM의 관측 나이, Wikiracing의 그래프, 드론의 자세 오차를 직접 계산할 수 있다. 생각해 볼 문제에는 접어서 여는 풀이가 있다.

실제 Jev 호출, 게임 플레이, 로봇 실행은 수행하지 않았다. 검증 대상은 정적 강의 사이트, 원문 대응, 코드 발췌 일치, 계산 예제의 출력과 화면 기능이다.


## 입문 튜토리얼과 문장 내 링크 · 2026-11-11

소개 블로그를 출발점으로 공식 System One, State, Choice, Noul, Score, Confidence, AI primer, Fan-out, Companion Noul, Quick start를 대조했다. 게임 상태와 코드는 강의에서 구성한 독립 예제다. DOOM 시간표는 원본 임베디드 영상의 스크립트에서 확인한 00:24, 00:46, 01:10, 01:28 설명에 대응한다. 캡처는 보류했다.

기존 8편의 제작자, 저장소 계보, 실행 페이지, SDK 개념, 인접 발췌의 함수와 필드를 문장 안에서 연결했다. PyBoy, pokered, MuJoCo Menagerie, SO-101 공식 자료도 확인했다. Opper README의 명령 기본값(8게임/300초)과 공개 페이지의 100게임/모델을 구분했다.

외부 목적지 37개를 점검했다. Fan-out의 실제 주소 /patterns/fan-out으로 수정했다. 테트리스 고정 커밋 링크는 HTTP 일시 오류 후 웹 도구로 파일 내용을 확인했다.

## 전체 문장 개정과 자료 보존 대조 · 2026-11-11

입문 12절과 사례 51절의 본문을 다시 썼다. 총 228개 본문 문단에서 먼저 문제 상황과 필요한 정보의 이유를 설명하고, 기존 코드·표·도식으로 이어지도록 구성했다. 서술과 풀이를 문어체로 통일했다. 포켓몬의 이동 방향 질의와 풀밭 회피·훈련 선택을 구체적으로 구분했고, 목적지까지 Jev가 결정했다고 서술하지 않았다.

마리오의 추가 설명은 고정 커밋의 state.py에 있는 _extract_local_grid, navigation_features, to_state와 policy.py의 점프 지침을 대조했다. 11×9 지역 격자, high/low_airborne, last_grounded_preview, crossing_known_gap이 각각 어떤 관측·행동 문제 때문에 필요한지 설명하고 본문에 파일 링크를 붙였다.

개정 직전 자료와 비교해 코드 47개와 모든 결과 표가 그대로임을 확인했다. 이전 URL도 모두 유지했다. 사례 8편의 본문 수치는 빠진 것이 없으며, 입문의 ‘2등 후보’는 ‘차선 후보’로 풀어 썼다. 수치 보존 검사는 문장 의미 검토를 보조하는 검사로 사용했다. 렌더링 기준 본문과 도입 링크는 145곳이다. 오프라인 예제 15개 실행, SDK 예제 문법 검사, 기존 발췌 31개 대조와 SVG 10개 XML 검사를 통과했다.

## 강의자가 제공한 로컬 Qwen 실행 · 2026-11-11

두 첨부 텍스트는 바이트 단위로 동일했다. 포켓몬 글에 사례 C로 다섯 절을 추가했다. 기반 프로젝트는 christianmat/jev-pokemon이고, Ollama qwen3.5:9b와 RTX 5070 Ti Laptop 사용은 제공된 대화 및 사용자 설명에 근거한다. 이 사이트를 수정하면서 게임 서버나 모델을 새로 실행하지 않았다.

첨부에 실린 저장 폴더 구조, 기억 구조, 끊긴 memory.json 출력, losses 예시, 공통 system 메시지, 전투와 이동의 user 메시지 및 응답을 추출했다. `assets/pokemon-local/manifest.json`에 첨부 해시와 파일별 해시를 기록했다. 본문 원문 블록의 내용은 추출 파일과 동일하다. 줄바꿈은 LF로 정규화했다. 대화 끝의 앱 UI 문구와 내부 채팅 식별자는 강의 자료에 포함하지 않았다.

전투 user 메시지의 responseSchema와 여섯 후보는 그대로 보존했다. 이동 user 메시지는 여덟 후보를 포함하지만 첨부에서 응답 스키마 본문은 생략돼 있어 복원하지 않았다. memory.json 출력은 usedTargets의 ROUTE에서 끊긴 앞부분이므로 유효한 완전 JSON인 것처럼 표시하지 않았다. context.ts·ollama.ts·jev-calls.jsonl은 제공된 대화에서 지목한 로컬 파일명이며 공개 저장소의 파일이라고 링크하지 않았다.

기억이 프롬프트에 반영된 증거로 lossesSoFar, 후보의 이전 대사·선택 횟수, 최근 대화와 행동을 해설했다. 전투 출력 Use EMBER가 다음 요청 recentActions에 나타나고 PP가 10에서 9로 바뀌는 연결을 보였다. 이슬에게 재도전한 출력은 그대로 싣되 모델이 이유를 출력한 것처럼 설명하지 않았다. 이동 요청의 864ms는 개별 요청값으로 소개했다.

## 전체 글의 설명 방식 개정 · 2026-11-11

입문·8개 사례·포켓몬 로컬 추가분의 도입과 본문 208곳을 수정했다. 정의되지 않은 대상을 예로 들거나 문단 끝에 같은 교훈을 반복하는 대신, 각 사례의 상황에서 코드와 모델이 실제로 하는 일을 설명했다. 원문의 실험 수치, 코드·실행 기록 56개와 모든 표, 기존 출처 URL을 보존했다. 로봇팔의 ‘100% 성공률’이라는 가정적 표현은 삭제했으며 13/13 오프라인 검사와 실제 집기 기록은 유지했다.

로컬 Qwen의 원문 9개는 변경하지 않았다. 전투의 계산된 피해량과 선택 결과, 다음 이동 요청에 남은 행동·경험치·PP를 연결했다. 이슬 재도전 이유는 출력에 없으므로 모델의 생각을 추정해 덧붙이지 않았다. 드론의 age_s는 원본 tactics.py의 관측 시각 기록에, 포켓몬의 418ms 비교와 0.4초 중앙값은 각각 2389 원문과 Mathiesen README에 다시 대조했다.

## 학생 관점 전체 통독과 교정 · 2026-11-11

입문과 8편의 68절을 코드·표·풀이까지 순서대로 읽고 다음 설명을 보완했다.

| 글 | 처음 읽을 때 막힐 수 있던 부분과 수정 |
| --- | --- |
| 입문 | 첫 예제는 실제 게임을 조작하지 않고 명령을 출력한다는 점, 키와 응답 필드, API/SDK·환경 변수, Score와 confidence·확률 보정, 후속 질문을 미리 보내는 이유 |
| 포켓몬 | RAM·NPC·타일·BFS·Dijkstra·A*의 뜻, 정책 비용과 실제 체력·돈의 차이, 토큰과 중앙값, 마일스톤·이벤트 플래그. A/B라는 표현이 프로젝트 구분과 입력 비교를 혼동시키던 부분도 수정 |
| 포켓몬 로컬 실행 | Ollama와 Qwen의 역할, JSON과 중첩 기억, system/user 메시지, 스키마와 enum, PP의 뜻. NPC의 좌표와 대화할 위치까지의 이동 거리, 패배 횟수와 이번 방문 중 선택 횟수 구분 |
| 팩맨 | 게임 규칙과 파워 펠릿·과일, 갈림길 도착 후 기다리는 시간의 계산 결과, 후보 검증과 요청 당시 갈림길의 관계, 기록 명령의 옵션 |
| 테트리스 | 시드·hard drop·구멍·우물·휴리스틱, 후보 ID의 실제 배치와 예외 처리, 네 질문의 독립성. Laya의 별도 confidence 계산과 비교 조건 |
| 마리오 | 접지·프레임·버튼 매크로, 직전 응답 지연으로 다음 시점을 추정하는 이유, 접촉·착지 관련 필드, 상태 출력과 실제 플레이 명령·JSONL |
| DOOM | 발사·목표·회피 판단을 함께 쓰는 상황, 100ms 요청 간격과 250ms 응답 지연의 시간표, 관측·응답·적용 시각 구분, 명령 변경 전후의 응답 처리 |
| Wikiracing | 현재 페이지에서 갈 수 있는 문서와 전체 그래프의 차이, 코드의 두 출력, 방문 기록을 포함하는 수업 비교, 추론 설정의 뜻 |
| 드론 | 시뮬레이션·안전 반사·Hz, 깊이·세그멘테이션·좌표계·geom/body, 스레드·관측 경과 시간, 센서와 제어 주기 차이, 자세 오차식·측면 위치 추정·p90 |
| 로봇팔 | 그리퍼·서보·역기구학·제어 단위, 비전 좌표와 실제 잡힘의 차이, 파일로 비전 요청을 교환하는 mailbox, 허용 오차·동작 실행·순기구학·적분 보정. 세 실행 설명의 중복 문단 삭제 |

코드·기록의 내용과 출처 표시는 그대로이며 첫 입문 코드의 제목만 실제 동작에 맞게 바꿨다. 원본 실험 수치와 모든 표, 기존 출처 URL을 보존했다. 보완한 제어 설명은 저장한 원문 README·tactics.py·lessons.md에 대조했다. 브라우저에서 9편의 순서 이동, 본문과 코드 표시, 페이지 가로 넘침과 오류 로그를 확인했다.

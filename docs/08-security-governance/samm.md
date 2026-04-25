---
sidebar_position: 10
title: OWASP SAMM
---

# OWASP SAMM
**Software Assurance Maturity Model — SW 보안 보증 성숙도 모델**

## 1. 소프트웨어 개발 전 생애주기에 걸쳐 보안 역량을 측정하고 단계적으로 향상하는 프레임워크, OWASP SAMM의 개요

```mermaid
flowchart LR
    A["보안 활동 임의 수행<br/>역량 측정 기준 부재<br/>개선 방향 불명확"] --"5대 기능<br/>15개 보안 실천"--> B["현재 보안 성숙도<br/>체계적 측정"] --"로드맵 수립<br/>단계적 향상"--> C["소프트웨어 보안<br/>문화 내재화"]

    style A fill:#FFEBEE,stroke:#D32F2F,color:#000
    style B fill:#E3F2FD,stroke:#1976D2,color:#000
    style C fill:#E8F5E9,stroke:#388E3C,color:#000
```

**개념**: OWASP가 개발한 소프트웨어 보안 보증 프레임워크로, 조직의 SW 개발 프로세스 전반에 걸쳐 보안 활동을 **5대 비즈니스 기능·15개 보안 실천** 으로 체계화하고, 각 실천의 성숙도를 0~3단계로 측정하여 현행 역량 진단과 목표 수준 달성을 위한 로드맵을 제공하는 성숙도 모델.

**특징**:
- 개발 방법론(Waterfall·Agile·DevOps) **비종속적** — 어떤 개발 환경에도 적용 가능.
- 조직 규모·업종에 맞게 **선택적 실천** 가능 — 15개 중 우선순위를 정해 점진적 도입.
- BSIMM·ISO/IEC 27034와 상호 보완적으로 활용 가능한 **오픈 소스** 프레임워크.

---

## 2. OWASP SAMM의 핵심 구성 체계

### 가. 5대 비즈니스 기능 및 15개 보안 실천

```mermaid
flowchart TD
    subgraph GOV["거버넌스 (Governance)"]
        direction LR
        G1["전략·메트릭"]
        G2["정책·컴플라이언스"]
        G3["교육·안내"]
    end
    subgraph DES["설계 (Design)"]
        direction LR
        D1["위협 평가"]
        D2["보안 요구사항"]
        D3["보안 아키텍처"]
    end
    subgraph IMP["구현 (Implementation)"]
        direction LR
        I1["안전한 빌드"]
        I2["안전한 배포"]
        I3["결함 관리"]
    end
    subgraph VER["검증 (Verification)"]
        direction LR
        V1["아키텍처 평가"]
        V2["요구사항 기반 테스트"]
        V3["보안 테스트"]
    end
    subgraph OPS["운영 (Operations)"]
        direction LR
        O1["인시던트 관리"]
        O2["환경 관리"]
        O3["운영 관리"]
    end

    style GOV fill:#E3F2FD,stroke:#1976D2,color:#1E3A5F
    style DES fill:#F3E5F5,stroke:#7B1FA2,color:#4A148C
    style IMP fill:#FFF3E0,stroke:#F57C00,color:#E65100
    style VER fill:#FFEBEE,stroke:#D32F2F,color:#B71C1C
    style OPS fill:#E8F5E9,stroke:#388E3C,color:#1B5E20
```

| 비즈니스 기능 | 보안 실천 | 핵심 목적 |
|---|---|---|
| **거버넌스** | 전략·메트릭 | 보안 전략 수립 및 측정 지표 관리 |
| | 정책·컴플라이언스 | 보안 정책 수립 및 규제 준수 체계 |
| | 교육·안내 | 개발자·보안 팀 보안 역량 강화 |
| **설계** | 위협 평가 | 위협 모델링(STRIDE) 및 리스크 식별 |
| | 보안 요구사항 | 기능·비기능 보안 요구사항 정의 |
| | 보안 아키텍처 | 보안 원칙 기반 아키텍처 설계 |
| **구현** | 안전한 빌드 | 취약 컴포넌트 관리·SAST·SBOM |
| | 안전한 배포 | 보안 구성·시크릿 관리·CI/CD 보안 |
| | 결함 관리 | 보안 취약점 추적 및 수정 프로세스 |
| **검증** | 아키텍처 평가 | 설계 단계 보안 검토 및 아키텍처 리뷰 |
| | 요구사항 기반 테스트 | 보안 요구사항 충족 여부 검증 |
| | 보안 테스트 | DAST·펜 테스트·자동화 보안 스캔 |
| **운영** | 인시던트 관리 | 보안 사고 탐지·대응·복구 프로세스 |
| | 환경 관리 | 인프라 보안 설정 및 패치 관리 |
| | 운영 관리 | 운영 중 보안 모니터링 및 개선 |

---

### 나. 성숙도 수준별 보안 역량 평가

```mermaid
flowchart LR
    L0["Level 0<br/>시작 전<br/>보안 활동<br/>미수행"]
    L1["Level 1<br/>초기<br/>기본 보안<br/>인식·실천"]
    L2["Level 2<br/>관리<br/>정형화된<br/>프로세스 운영"]
    L3["Level 3<br/>최적화<br/>지속적 개선<br/>측정·최적화"]

    L0 --> L1 --> L2 --> L3

    style L0 fill:#f5f5f5,stroke:#ccc,color:#555
    style L1 fill:#FFF3E0,stroke:#F57C00,color:#000
    style L2 fill:#E3F2FD,stroke:#1976D2,color:#000
    style L3 fill:#1E3A5F,stroke:#1E3A5F,color:#fff
```

**성숙도 수준별 특징 및 달성 기준**

| 수준 | 명칭 | 특징 | 달성 기준 예시 (안전한 빌드) |
|---|---|---|---|
| **Level 0** | 미수행 | 해당 보안 실천이 전혀 이루어지지 않음 | 의존성 취약점 점검 미수행 |
| **Level 1** | 초기 | 임시방편적·비공식적으로 일부 수행 | 빌드 시 알려진 취약 컴포넌트 식별 |
| **Level 2** | 관리 | 공식 프로세스로 정형화·문서화하여 수행 | CI/CD에 SAST·SCA 자동화 통합 |
| **Level 3** | 최적화 | 지속적 개선·측정 지표 기반 최적화 수행 | SBOM 자동 생성·취약점 SLA 관리 |

**SAMM 평가 절차**

```mermaid
flowchart LR
    S1["현황 평가<br/>15개 실천<br/>수준 측정"]
    S2["점수 산출<br/>비즈니스 기능별<br/>성숙도 점수"]
    S3["목표 수준 설정<br/>조직 전략 반영<br/>우선순위 결정"]
    S4["로드맵 수립<br/>단계별 개선 계획<br/>자원·일정 할당"]
    S5["실행·재평가<br/>주기적 성숙도 측정<br/>지속적 개선"]

    S1 --> S2 --> S3 --> S4 --> S5
    S5 -->|"연 1회 재평가"| S1

    style S1 fill:#E3F2FD,stroke:#1976D2,color:#000
    style S2 fill:#F3E5F5,stroke:#7B1FA2,color:#000
    style S3 fill:#FFF3E0,stroke:#F57C00,color:#000
    style S4 fill:#FFEBEE,stroke:#D32F2F,color:#000
    style S5 fill:#E8F5E9,stroke:#388E3C,color:#000
```

---

## 3. OWASP SAMM 도입의 기대효과 및 활용 방안

| 구분 | 주요 기대효과 | 활용 및 실무 적용 방안 |
|---|---|---|
| **보안 역량 진단** | 현재 SW 보안 수준의 객관적 측정 및 벤치마킹 | 연 1회 SAMM 자가 평가로 성숙도 추이 추적 |
| **DevSecOps 연계** | 구현·검증 기능의 보안 자동화를 CI/CD에 통합 | SAST·DAST·SCA 도구를 파이프라인에 내재화 |
| **경영진 보고** | 비즈니스 언어로 보안 투자 효과 측정·보고 | 5대 기능별 성숙도 레이더 차트로 보안 현황 시각화 |
| **컴플라이언스** | ISMS-P·ISO 27034·PCI-DSS 요건과 SAMM 실천 연계 | 인증 심사 대비 SAMM 증거 자료 활용 |

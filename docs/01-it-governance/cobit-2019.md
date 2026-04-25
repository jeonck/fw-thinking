---
sidebar_position: 8
title: COBIT 2019
---

# COBIT 2019
**Control Objectives for Information and Related Technologies 2019**

## 1. 맞춤형 IT 거버넌스 설계를 위한 프레임워크, COBIT 2019의 개요
```mermaid
flowchart LR
    A["획일적 IT 거버넌스"] -- "맞춤형 엔터프라이즈 거버넌스 전환" --> B["COBIT 2019"]
```
**개념**: 기업의 정보와 기술(I&T) 거버넌스 체계 구축을 위해 비즈니스 목적과 IT 관리를 정렬하는 EGIT(Enterprise Governance of IT) 프레임워크.

**특징**: COBIT 5 기반에 **Design Factors(설계 요인)** 를 도입하여 조직 특성에 맞는 Tailoring(맞춤화)을 강화하고, CMMI 기반 성능 관리를 적용.

---

## 2. COBIT 2019의 구성 체계 및 핵심 메커니즘

### 가. 핵심 구성도 (Core Model)

```mermaid
flowchart TB
    subgraph GOV["거버넌스 영역 (이사회 / 경영진)"]
        EDM["EDM<br/>Evaluate · Direct · Monitor<br/>평가 · 지시 · 모니터링"]
    end

    subgraph MGT["관리 영역 (실무 부서)"]
        APO["APO<br/>Align, Plan & Organize<br/>정렬 · 계획 · 조직화"]
        BAI["BAI<br/>Build, Acquire & Implement<br/>구축 · 획득 · 구현"]
        DSS["DSS<br/>Deliver, Service & Support<br/>제공 · 서비스 · 지원"]
        MEA["MEA<br/>Monitor, Evaluate & Assess<br/>모니터링 · 평가 · 검토"]
    end

    GOV -->|"방향 제시 / 목표 설정"| MGT
    MGT -->|"성과 보고 / 피드백"| GOV
    APO --> BAI --> DSS --> MEA
    MEA -->|"개선 환류"| APO

    style GOV fill:#EFF6FF,stroke:#2563EB,color:#1E3A5F
    style MGT fill:#F0FDF4,stroke:#16A34A,color:#14532D
    style EDM fill:#2563EB,stroke:#1D4ED8,color:#fff
    style APO fill:#16A34A,stroke:#15803D,color:#fff
    style BAI fill:#0891B2,stroke:#0E7490,color:#fff
    style DSS fill:#7C3AED,stroke:#6D28D9,color:#fff
    style MEA fill:#EA580C,stroke:#C2410C,color:#fff
```

| 영역 | 주요 내용 | 비고 |
|---|---|---|
| **EDM** (거버넌스) | Evaluate(평가), Direct(지시), Monitor(모니터링) | 이사회/경영진 수준 |
| **APO/BAI/DSS/MEA** | 계획, 구축, 운영, 성과 평가 | 실무 부서 수준 |

---

### 나. 맞춤형 거버넌스 구현을 위한 주요 구성 요소

#### 맞춤형 설계 흐름 (Tailoring Process)

```mermaid
flowchart LR
    DF["설계 요인 분석<br/>Design Factors<br/>기업 전략 / 위험 프로필<br/>IT 역할 / 규모 (총 11개 요인)"]
    OPT["가이드라인 최적화<br/>Governance System Design<br/>목표 우선순위 도출<br/>프로세스 선택 및 조정"]
    FA["중점 영역 적용<br/>Focus Areas<br/>Cloud · Cybersecurity<br/>DevOps · 기타 특화 지침"]
    CPM["성능 관리<br/>CPM<br/>역량 수준 측정<br/>0 - 5단계"]

    DF --> OPT --> FA --> CPM

    style DF  fill:#2563EB,stroke:#1D4ED8,color:#fff
    style OPT fill:#7C3AED,stroke:#6D28D9,color:#fff
    style FA  fill:#EA580C,stroke:#C2410C,color:#fff
    style CPM fill:#16A34A,stroke:#15803D,color:#fff
```

#### 성능 관리 수준 (CPM: Capability and Performance Management)

```mermaid
flowchart LR
    L0["0<br/>미실행<br/>Incomplete"]
    L1["1<br/>수행됨<br/>Performed"]
    L2["2<br/>관리됨<br/>Managed"]
    L3["3<br/>정의됨<br/>Established"]
    L4["4<br/>정량적 관리<br/>Predictable"]
    L5["5<br/>최적화<br/>Optimizing"]

    L0 --> L1 --> L2 --> L3 --> L4 --> L5

    style L0 fill:#f5f5f5,stroke:#ccc
    style L1 fill:#d4edda,stroke:#28a745
    style L2 fill:#c3e6cb,stroke:#28a745
    style L3 fill:#ffc107,stroke:#e0a800,color:#000
    style L4 fill:#fd7e14,stroke:#e96b02,color:#fff
    style L5 fill:#dc3545,stroke:#c82333,color:#fff
```

| 수준 | 명칭 | 의미 |
|---|---|---|
| **0** | Incomplete | 프로세스 미실행 또는 목적 미달성 |
| **1** | Performed | 목적을 달성하나 관리 체계 미흡 |
| **2** | Managed | 계획·모니터링·조정이 이루어지는 관리 상태 |
| **3** | Established | 프로세스로 정의되어 조직 전반에 적용 |
| **4** | Predictable | 정량적 지표로 예측·통제 가능 |
| **5** | Optimizing | 지속적 개선이 이루어지는 최적화 상태 |

---

#### 6대 원칙

```mermaid
flowchart TD
  ROOT["COBIT 2019 6대 원칙"]
  P1["이해관계자 가치 실현"]
  P2["전사적 접근"]
  P3["동적 거버넌스 시스템"]
  P4["거버넌스와 관리의 분리"]
  P5["요구 조건 기반 맞춤화"]
  P6["종단 간 커버리지"]

  ROOT --> P1
  ROOT --> P2
  ROOT --> P3
  ROOT --> P4
  ROOT --> P5
  ROOT --> P6

  style ROOT fill:#1E3A5F,color:#fff
```

---

## 3. COBIT 2019 도입을 통한 기대효과 및 활용 방안

```mermaid
flowchart TD
    COBIT["COBIT 2019 도입"]

    subgraph STR["전략적"]
        S1["IT-비즈니스 정렬<br/>디지털 전환 전략 수립 시<br/>거버넌스 기준으로 활용"]
    end
    subgraph OPS["운영적"]
        O1["위험 및 자원 최적화<br/>IT 감사 및<br/>컴플라이언스 대응 체계 구축"]
    end
    subgraph CUL["문화적"]
        C1["책임 추적성 확보<br/>RACI 차트를 활용한<br/>IT 조직 내 R&R 명확화"]
    end

    COBIT --> STR
    COBIT --> OPS
    COBIT --> CUL

    style COBIT fill:#1E3A5F,stroke:#1E3A5F,color:#fff
    style STR   fill:#EFF6FF,stroke:#2563EB,color:#1E3A5F
    style OPS   fill:#F0FDF4,stroke:#16A34A,color:#14532D
    style CUL   fill:#FFF7ED,stroke:#EA580C,color:#7C2D12
    style S1    fill:#2563EB,stroke:#1D4ED8,color:#fff
    style O1    fill:#16A34A,stroke:#15803D,color:#fff
    style C1    fill:#EA580C,stroke:#C2410C,color:#fff
```

| 구분 | 주요 기대효과 | 활용 및 실무 적용 방안 |
|---|---|---|
| **전략적** | IT-비즈니스 정렬 | 디지털 전환(DX) 전략 수립 시 거버넌스 기준으로 활용 |
| **운영적** | 위험 및 자원 최적화 | IT 감사(Audit) 및 컴플라이언스 대응 체계 구축 |
| **문화적** | 책임 추적성 확보 | RACI 차트를 활용한 IT 조직 내 R&R 명확화 |

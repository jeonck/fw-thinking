---
sidebar_position: 2
title: SRE (Site Reliability Engineering)
---

# SRE (Site Reliability Engineering)
**Site Reliability Engineering**

## 1. 운영을 소프트웨어 문제로 정의하는, SRE의 개요
```mermaid
flowchart LR
    A["수동적 시스템 운영"] -- "소프트웨어 엔지니어링 기반 운영 전환" --> B["SRE (Site Reliability Engineering)"]
```
**정의**: 구글에서 창안한 개념으로, 소프트웨어 엔지니어링 방법론을 시스템 운영에 적용하여 대규모 서비스의 신뢰성을 극대화하는 실무 방법론.

**특징**:  
 **(DevOps 구현체)** SRE는 DevOps 철학을 구글 방식으로 구체적으로 구현한 엔지니어링 실천법.  
 **(에러 예산)** Error Budget으로 허용 가능한 장애량을 정량화하여 개발 속도와 안정성의 균형을 추구.  
 **(자동화 중심)** 반복적 운영 작업(Toil)을 자동화하여 엔지니어를 고부가 작업에 집중시킴.  

---

## 2. SRE의 핵심 지표 및 에러 예산 메커니즘

### 가. 신뢰성 측정의 3대 지표 (SLI / SLO / SLA)

```mermaid
flowchart LR
    A["전통적 운영<br/>(Manual Ops)"] -->|"도전 과제<br/>(Toil 증가/운영 부하)"| B{"전환 메커니즘"}
    B -->|"데이터 기반"| C["SLI/SLO 측정\n(가용성/지연시간)"]
    B -->|"엔지니어링"| D["에러 예산 운영\n(안정성/속도 균형)"]
    
    C --> E["서비스 신뢰성 극대화\n(Reliability)"]
    D --> E
```

| 지표 | 정의 | 예시 |
|---|---|---|
| **SLI** | 서비스 수준 척도 (실제 측정값) | 성공한 요청 수 / 전체 요청 수 |
| **SLO** | 서비스 수준 목표 (팀 내부 목표) | 가용성 99.9% 이상, 응답속도 200ms 이하 |
| **SLA** | 서비스 수준 협약 (고객과의 계약) | SLO 미달 시 요금 환불 등 법적/재무적 약속 |

---

### 나. 에러 예산(Error Budget)과 운영 원칙

```mermaid
flowchart TD
    subgraph R1["　"]
        direction LR
        G1["에러 예산<br/>(Error Budget)<br/>100% - SLO<br/>허용 가능한 장애 범위"]
        G2["토일 최소화<br/>(Toil)<br/>반복 수동 업무 자동화<br/>50% 룰 적용"]
    end
    subgraph R2["　"]
        direction LR
        G3["분산 시스템 설계<br/>장애 격리·자기 복구<br/>Self-healing 역량"]
        G4["포스트모텀<br/>(Post-mortem)<br/>비난 없는 장애 분석<br/>재발 방지 공유"]
    end

    style G1 fill:#E3F2FD,stroke:#1976D2,color:#000
    style G2 fill:#F3E5F5,stroke:#7B1FA2,color:#000
    style G3 fill:#FFF3E0,stroke:#F57C00,color:#000
    style G4 fill:#E8F5E9,stroke:#388E3C,color:#000
    style R1 fill:none,stroke:none
    style R2 fill:none,stroke:none
```

| 원칙 | 상세 설명 | 비고 |
|---|---|---|
| **에러 예산** | 안정성과 혁신 속도 사이의 정량적 절충점 제공 | 소진 시 안정성 우선 |
| **자동화** | 운영 업무를 소프트웨어로 해결하여 확장성 확보 | 코드를 통한 운영 |
| **관찰 가능성** | 메트릭, 로그, 트레이싱을 통한 시스템 투명성 | Observability 확보 |

---

## 3. SRE 도입의 기대효과 및 활용 전략

| 구분 | 주요 기대효과 | 활용 및 실무 적용 방안 |
|---|---|---|
| **신뢰성 확보** | 정량적 지표 기반의 서비스 품질 관리 | 서비스 성격에 맞는 SLO 설정 및 실시간 모니터링 체계 구축 |
| **조직간 정렬** | 개발팀과 운영팀의 갈등 해소 | 에러 예산을 공유하여 배포 속도와 안정성에 대한 공통 합의 도달 |
| **운영 효율화** | 엔지니어링 중심의 운영으로 전환 | 반복 업무(Toil)를 자동화하여 창의적인 엔지니어링 업무 비중 확대 |

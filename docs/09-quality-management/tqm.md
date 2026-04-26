---
sidebar_position: 1
title: TQM (전사적 품질 관리)
---

# TQM
**Total Quality Management — 전사적 품질 관리**

## 1. 전원 참여로 프로세스·제품 품질을 지속 개선하는 경영 철학, TQM의 개요

```mermaid
flowchart LR
    A["부서별 분절적<br/>품질 관리<br/>결함 사후 처리"] --"전사 구성원<br/>품질 내재화"--> B["고객 중심<br/>지속적 개선<br/>전원 참여 문화"] --"고객 만족<br/>경쟁 우위 확보"--> C["품질 비용 절감<br/>조직 학습 문화"]

    style A fill:#FFEBEE,stroke:#D32F2F,color:#000
    style B fill:#E3F2FD,stroke:#1976D2,color:#000
    style C fill:#E8F5E9,stroke:#388E3C,color:#000
```

**정의**: W. Edwards Deming·Joseph Juran·Kaoru Ishikawa 등의 품질 사상을 기반으로 발전한 경영 철학으로, **고객 만족**을 궁극적 목표로 하여 조직의 전 구성원이 모든 프로세스·제품·서비스의 품질 개선에 참여하고, 데이터 기반의 지속적 개선(Continuous Improvement)을 추구하는 전사적 경영 방식.

**특징**:
- **전원 참여(Total Involvement)**: 최고 경영자부터 현장 작업자까지 품질에 대한 책임과 참여.
- **프로세스 지향**: 결과가 아닌 **프로세스 자체를 개선**하여 결함을 사전에 방지.
- ISO 9001·Six Sigma·Lean과 상호 보완적으로 활용되는 **품질 경영의 이론적 토대**.

---

## 2. TQM의 핵심 구성 체계

### 가. TQM 8대 핵심 원칙

```mermaid
flowchart TD
    subgraph R1["　"]
        direction LR
        P1["고객 중심<br/>Customer Focus<br/>고객 요구 파악·충족<br/>고객 만족이 최우선"]
        P2["전원 참여<br/>Total Involvement<br/>최고경영자~현장<br/>전 직원 품질 책임"]
        P3["프로세스 접근<br/>Process Approach<br/>결과가 아닌 프로세스<br/>개선으로 품질 확보"]
        P4["지속적 개선<br/>Continuous Improvement<br/>PDCA 사이클<br/>끊임없는 향상"]
    end
    subgraph R2["　"]
        direction LR
        P5["사실 기반 의사결정<br/>Fact-based Decision<br/>데이터·측정치 기반<br/>주관적 판단 배제"]
        P6["시스템적 접근<br/>Systems Approach<br/>상호 연관된 프로세스<br/>전체 시스템 최적화"]
        P7["공급자 파트너십<br/>Supplier Partnership<br/>협력사 품질 관리<br/>상호 이익 관계 구축"]
        P8["전략적 리더십<br/>Strategic Leadership<br/>경영진의 품질 비전<br/>문화 조성 주도"]
    end

    style P1 fill:#E3F2FD,stroke:#1976D2,color:#000
    style P2 fill:#F3E5F5,stroke:#7B1FA2,color:#000
    style P3 fill:#FFF3E0,stroke:#F57C00,color:#000
    style P4 fill:#E8F5E9,stroke:#388E3C,color:#000
    style P5 fill:#FFEBEE,stroke:#D32F2F,color:#000
    style P6 fill:#E0F2F1,stroke:#00796B,color:#000
    style P7 fill:#E8EAF6,stroke:#3949AB,color:#000
    style P8 fill:#1E3A5F,stroke:#1E3A5F,color:#fff
    style R1 fill:none,stroke:none
    style R2 fill:none,stroke:none
```

**TQM 구루(Guru)별 핵심 기여**

| 품질 사상가 | 핵심 기여 | 대표 개념 |
|---|---|---|
| **W. Edwards Deming** | 통계적 프로세스 관리·14가지 경영 원칙 | PDCA 사이클, 변동의 원인 분류 |
| **Joseph Juran** | 품질 3부작(계획·통제·개선) | Juran Trilogy, 파레토 원칙 적용 |
| **Philip Crosby** | 무결점(Zero Defects)·품질 비용 개념 | "품질은 무료다(Quality is Free)" |
| **Kaoru Ishikawa** | 분임조(QC Circle)·특성 요인도 | 이시카와 다이어그램, 7가지 품질 도구 |

---

### 나. TQM 구현 모델 및 주요 도구

```mermaid
flowchart LR
    subgraph PDCA["PDCA 개선 사이클"]
        direction TD
        PL["Plan<br/>문제 식별<br/>목표·계획 수립"]
        DO["Do<br/>소규모 파일럿<br/>실행"]
        CH["Check<br/>결과 측정<br/>데이터 분석"]
        AC["Act<br/>표준화·확산<br/>또는 재계획"]
        PL --> DO --> CH --> AC --> PL
    end

    subgraph TOOLS["TQM 7대 품질 도구"]
        direction TB
        T1["체크시트·히스토그램"]
        T2["파레토 차트·특성 요인도"]
        T3["산점도·관리도·층별"]
    end

    PDCA --- TOOLS

    style PDCA fill:#E3F2FD,stroke:#1976D2,color:#1E3A5F
    style TOOLS fill:#E8F5E9,stroke:#388E3C,color:#1B5E20
```

**TQM 주요 도구 및 적용 목적**

| 도구 | 목적 | SW·IT 적용 사례 |
|---|---|---|
| **체크시트** | 결함 유형·빈도 체계적 기록 | 버그 유형별 발생 빈도 일일 수집 |
| **히스토그램** | 데이터 분포·변동성 시각화 | 응답시간 분포 분석·SLA 준수율 확인 |
| **파레토 차트** | 주요 원인 우선순위화(80/20) | 상위 20% 결함 유형 집중 개선 |
| **특성 요인도 (Fishbone)** | 문제 원인 계층적 분석 | 장애 근본 원인 6M 기반 탐색 |
| **산점도** | 두 변수 간 상관관계 파악 | 코드 복잡도와 결함 밀도 상관 분석 |
| **관리도 (Control Chart)** | 프로세스 통계적 안정성 감시 | 배포 빈도·결함률 관리 한계 설정 |
| **층별 (Stratification)** | 데이터를 그룹별로 분류 분석 | 팀·스프린트·모듈별 결함률 비교 |

**TQM vs Six Sigma vs Lean 비교**

| 비교 항목 | TQM | Six Sigma | Lean |
|---|---|---|---|
| **철학** | 전사적 품질 문화 내재화 | 데이터 기반 결함률 최소화 | 낭비 제거·흐름 최적화 |
| **접근법** | 문화·사람·프로세스 통합 | DMAIC 방법론·통계 | 가치 흐름 분석·카이젠 |
| **범위** | 조직 전체 경영 혁신 | 프로젝트 단위 개선 | 프로세스 흐름 개선 |
| **핵심 도구** | 7가지 품질 도구·PDCA | DMAIC·통계 분석 | VSM·5S·칸반 |
| **통합 적용** | TQM 철학 위에 Six Sigma 방법론 + Lean 도구를 결합한 Lean Six Sigma 구현 가능 ||

---

## 3. TQM 도입의 기대효과 및 활용 방안

| 구분 | 주요 기대효과 | 활용 및 실무 적용 방안 |
|---|---|---|
| **품질 비용 절감** | 사전 예방 중심으로 결함·재작업 비용 대폭 감소 | QC 분임조 운영으로 현장 주도 품질 개선 과제 도출 |
| **고객 만족 향상** | 고객 요구 충족률·NPS 개선으로 충성 고객 확보 | VOC(고객의 소리) 체계화하여 제품·서비스 개선 피드백 반영 |
| **조직 문화 혁신** | 품질에 대한 전원 책임 의식·지속 개선 문화 정착 | 스프린트 회고를 PDCA 구조로 운영하여 애자일과 TQM 통합 |
| **ISO 9001 연계** | TQM 원칙이 ISO 9001 품질 경영 시스템의 철학적 기반 | ISO 9001 인증 취득 시 TQM 8대 원칙을 심사 기준으로 활용 |

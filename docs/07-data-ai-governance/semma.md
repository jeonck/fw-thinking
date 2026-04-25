---
sidebar_position: 11
title: SEMMA
---

# SEMMA
**Sample · Explore · Modify · Model · Assess**

## 1. 대용량 데이터에서 표본 추출부터 모델 평가까지, SAS 데이터 마이닝 표준 절차 SEMMA의 개요

```mermaid
flowchart LR
    A["대용량 원천<br/>데이터"] --"표본 추출(S)<br/>→ 탐색(E) → 수정(M)"--> B["분석용 데이터셋<br/>및 예측 모델"] --"평가(A)<br/>비즈니스 검증"--> C["데이터 마이닝<br/>결과 활용"]

    style A fill:#E3F2FD,stroke:#1976D2,color:#000
    style B fill:#FFF3E0,stroke:#F57C00,color:#000
    style C fill:#E8F5E9,stroke:#388E3C,color:#000
```

**개념**: SAS Institute가 제안한 데이터 마이닝 표준 프로세스로, 대용량 데이터에서 **Sample(표본 추출), Explore(탐색), Modify(수정), Model(모델링), Assess(평가)** 의 5단계를 순환 수행하여 예측 모델을 개발·검증하는 방법론.

**특징**:
- 데이터 처리 중심의 **기술적 절차**에 초점 — 비즈니스 이해 단계는 별도 선행 과정으로 분리.
- 각 단계가 독립적으로 반복 가능하여 **대용량 데이터 환경**에서의 분석 효율 극대화.
- SAS Enterprise Miner 도구와 긴밀하게 연동되어 실무 분석 환경에서 널리 적용.

---

## 2. SEMMA의 핵심 구성 체계

### 가. 5단계 분석 절차

```mermaid
flowchart LR
    S["Sample<br/>(표본 추출)<br/>대표성 있는<br/>샘플 추출"]
    E["Explore<br/>(탐색)<br/>통계·시각화<br/>이상치·패턴 파악"]
    M1["Modify<br/>(수정)<br/>변수 변환·생성<br/>결측치·이상치 처리"]
    M2["Model<br/>(모델링)<br/>알고리즘 선택<br/>모델 훈련·검증"]
    A["Assess<br/>(평가)<br/>성능 측정<br/>비즈니스 가치 검토"]

    S --> E --> M1 --> M2 --> A
    A -->|"성능 미달 시<br/>재수행"| S

    style S  fill:#E3F2FD,stroke:#1976D2,color:#000
    style E  fill:#F3E5F5,stroke:#7B1FA2,color:#000
    style M1 fill:#FFF3E0,stroke:#F57C00,color:#000
    style M2 fill:#FFEBEE,stroke:#D32F2F,color:#000
    style A  fill:#E8F5E9,stroke:#388E3C,color:#000
```

| 단계 | 핵심 목적 | 주요 활동 | 주요 기법·도구 |
|---|---|---|---|
| **S — Sample** | 분석 효율을 위한 대표성 있는 표본 추출 | 층화 추출, 무작위 추출, 과표본·저표본 처리 | 랜덤 샘플링, SMOTE, Stratified Sampling |
| **E — Explore** | 데이터 분포·패턴·이상치 파악 | EDA(탐색적 데이터 분석), 상관관계 분석, 시각화 | 히스토그램, 산점도, 상관 행렬 |
| **M — Modify** | 분석에 최적화된 형태로 데이터 변환 | 결측치 대체, 이상치 처리, 피처 엔지니어링, 정규화 | 표준화, 원-핫 인코딩, 파생 변수 생성 |
| **M — Model** | 예측 목적에 맞는 모델 훈련 및 최적화 | 알고리즘 선택, 교차 검증, 하이퍼파라미터 튜닝 | 회귀, 의사결정 트리, SVM, 앙상블 |
| **A — Assess** | 모델 성능 및 비즈니스 가치 최종 평가 | 정확도·AUC·F1 측정, 비즈니스 영향 분석 | ROC Curve, Lift Chart, 이익 행렬 |

---

### 나. CRISP-DM과의 비교 및 적용 방안

```mermaid
flowchart TD
    subgraph R1["　"]
        direction LR
        C1["SEMMA<br/>SAS Institute 제안<br/>데이터 처리 기술 절차 중심<br/>5단계 (S·E·M·M·A)"]
        C2["CRISP-DM<br/>업계 표준 프로세스<br/>비즈니스 맥락 포함<br/>6단계 (BU·DU·DP·M·E·D)"]
    end
    subgraph R2["　"]
        direction LR
        C3["공통점<br/>반복적 수행 구조<br/>데이터 준비·모델링·평가<br/>순환 프로세스"]
        C4["선택 기준<br/>SAS 환경: SEMMA 적합<br/>업무 협업 중심: CRISP-DM<br/>산업 표준 적용 시: CRISP-DM"]
    end

    style C1 fill:#E3F2FD,stroke:#1976D2,color:#000
    style C2 fill:#F3E5F5,stroke:#7B1FA2,color:#000
    style C3 fill:#FFF3E0,stroke:#F57C00,color:#000
    style C4 fill:#E8F5E9,stroke:#388E3C,color:#000
    style R1 fill:none,stroke:none
    style R2 fill:none,stroke:none
```

| 비교 항목 | SEMMA | CRISP-DM |
|---|---|---|
| **제안 주체** | SAS Institute | SPSS·Daimler·NCR 등 업계 컨소시엄 |
| **단계 수** | 5단계 (S·E·M·M·A) | 6단계 (BU·DU·DP·M·E·D) |
| **비즈니스 이해** | 별도 선행 과정 (포함 안 됨) | 1단계로 명시적 포함 |
| **배포 단계** | 포함 안 됨 | Deployment(배포)로 명시 |
| **도구 연동** | SAS Enterprise Miner 최적화 | 도구 독립적 |
| **적합 환경** | SAS 기반 분석 환경, 기술 중심 프로젝트 | 업무-데이터팀 협업, 전사 분석 표준화 |

---

## 3. SEMMA 방법론 적용의 기대효과 및 활용 방안

| 구분 | 주요 기대효과 | 활용 및 실무 적용 방안 |
|---|---|---|
| **분석 체계화** | 데이터 마이닝 프로젝트의 단계별 표준화 | 금융·통신·유통 분야 고객 이탈 예측, 신용 평가 모델 개발 |
| **품질 확보** | Explore·Modify 단계의 철저한 데이터 준비로 모델 신뢰도 향상 | 샘플링 전략 최적화를 통한 클래스 불균형 문제 해소 |
| **반복 개선** | 평가 결과 기반의 순환 수행으로 모델 성능 점진적 향상 | 성능 미달 모델의 원인 단계 소급 분석 및 재수행 |
| **SAS 생태계 활용** | SAS Enterprise Miner와의 완벽한 프로세스 연동 | SAS 기반 조직에서 자동화된 분석 파이프라인 구축 |

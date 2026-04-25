---
sidebar_position: 1
title: Zachman Framework
---

# Zachman Framework
**The Zachman Framework for Enterprise Architecture**

## 1. 전사 아키텍처(EA)의 시조, Zachman 프레임워크의 개요

**개념**: 기업의 복잡한 정보 인프라를 다각도에서 바라보고 분류하기 위해 6개의 관점(Rows)과 6개의 핵심 질문(Columns)으로 구성된 6x6 매트릭스 형태의 분류 체계(Taxonomy).

**특징**: 아키텍처 기술 방법론이 아닌 **분류 체계(Schema)** 로서의 성격이 강하며, 각 셀은 유일하고 상호 배타적인 속성을 가짐.

---

## 2. Zachman 프레임워크의 구성 체계 및 매트릭스 구조

### 가. 6x6 매트릭스 아키텍처 모델

```mermaid
flowchart TD
    subgraph Columns["6 핵심 질문 (Columns)"]
        direction LR
        W1["What<br/>(데이터)"]
        W2["How<br/>(기능)"]
        W3["Where<br/>(네트워크)"]
        W4["Who<br/>(사람)"]
        W5["When<br/>(시간)"]
        W6["Why<br/>(동기)"]
    end
    
    subgraph Rows["6 참여 관점 (Rows)"]
        direction TB
        R1["Planner (범위)"]
        R2["Owner (비즈니스)"]
        R3["Designer (시스템)"]
        R4["Builder (기술)"]
        R5["Sub-contractor (명세)"]
        R6["User (실제 자산)"]
    end

    Columns <-->|"36개 셀(Cell)로 구성된 분류 체계"| Rows

    style Columns fill:#f9f9f9,stroke:#333,stroke-dasharray: 5 5
    style Rows fill:#f9f9f9,stroke:#333,stroke-dasharray: 5 5
```

| 구분 | 질문 (Columns) | 설명 |
|---|---|---|
| **What** | 데이터 (Data) | 비즈니스에 사용되는 중요한 개체 및 정보 (Entity) |
| **How** | 기능 (Function) | 비즈니스 프로세스 및 서비스 활동 (Process) |
| **Where** | 네트워크 (Network) | 비즈니스가 수행되는 지리적 위치 및 연결성 (Node) |
| **Who** | 사람 (People) | 비즈니스 주체 및 조직의 R&R (Agent) |
| **When** | 시간 (Time) | 비즈니스 이벤트 발생 시기 및 순서 (Time) |
| **Why** | 동기 (Motivation) | 비즈니스 목표, 전략 및 비즈니스 규칙 (Rule) |

---

### 나. 관점별(Rows) 상세 아키텍처 수준

```mermaid
flowchart TD
  ROOT["Zachman 관점"]
  R1["Planner (범위)"]
  R2["Owner (비즈니스)"]
  R3["Designer (시스템)"]
  R4["Builder (기술)"]
  R5["Sub-contractor (상세)"]
  R6["User (실제 운영)"]

  ROOT --> R1
  ROOT --> R2
  ROOT --> R3
  ROOT --> R4
  ROOT --> R5
  ROOT --> R6

  R1 --> D1["비즈니스 배경 및 전략적 맥락"]
  R2 --> D2["개념적 비즈니스 엔터티 및 프로세스"]
  R3 --> D3["논리적 시스템 아키텍처 및 데이터 설계"]
  R4 --> D4["물리적 기술 사양 및 구현 환경"]
  R5 --> D5["개별 컴포넌트 및 모듈 상세 명세"]
  R6 --> D6["최종 가동 시스템 및 실제 비즈니스 환경"]

  style ROOT fill:#1E3A5F,color:#fff
```

---

## 3. Zachman 프레임워크의 기대효과 및 활용 방안

| 구분 | 주요 기대효과 | 활용 및 실무 적용 방안 |
|---|---|---|
| **표준화** | 전사 자산의 체계적 분류 | EA 정보의 일관성 유지 및 전사적 의사소통 표준으로 활용 |
| **완전성** | 아키텍처 누락 방지 | 6x6 매트릭스를 활용하여 EA 구축 시 누락된 영역(Gap) 식별 |
| **유연성** | 기술 독립적 아키텍처 | 비즈니스 논리와 구현 기술을 분리하여 변화에 대한 유연한 대응 |

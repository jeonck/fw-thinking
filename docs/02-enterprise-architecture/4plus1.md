---
sidebar_position: 7
title: 4+1 View Model
---

# 4+1 View Model
**Philippe Kruchten의 소프트웨어 아키텍처 다중 관점 모델**

## 1. 5가지 뷰로 이해관계자별 아키텍처 관심사를 분리하여 표현하는 모델, 4+1 View Model의 개요

```mermaid
flowchart LR
    A["단일 다이어그램으로<br/>모든 관심사 표현<br/>(복잡·모호)"] --"5가지 뷰로<br/>관심사 분리"--> B["논리·프로세스·물리<br/>개발·시나리오 뷰"] --"이해관계자별<br/>맞춤 소통"--> C["아키텍처 명확성<br/>및 합의 달성"]

    style A fill:#FFEBEE,stroke:#D32F2F,color:#000
    style B fill:#E3F2FD,stroke:#1976D2,color:#000
    style C fill:#E8F5E9,stroke:#388E3C,color:#000
```

**정의**: Philippe Kruchten이 제안한 소프트웨어 아키텍처 표현 프레임워크로, 복잡한 시스템을 **논리(Logical), 프로세스(Process), 물리(Physical), 개발(Development)** 의 4개 뷰와 이를 검증하는 **시나리오(Scenarios)** 뷰(+1)로 분리하여 이해관계자별 관심사를 체계적으로 전달하는 모델.

**특징**:  
 **(다관점 분리)** 단일 아키텍처를 **여러 관점(View)** 으로 분리하여 각 이해관계자가 필요한 관점만 집중적으로 이해.  
 **(UC 뷰 접착제)** 시나리오(Use Case) 뷰가 나머지 4개 뷰를 연결·검증하는 **접착제(Glue)** 역할 수행.  
 **(UML 연계)** UML 다이어그램과 자연스럽게 연계되어 소프트웨어 설계 문서화의 실무 표준으로 활용.  

---

## 2. 4+1 View Model의 핵심 구성 체계

### 가. 5가지 뷰 구성

```mermaid
flowchart TD
    SC(["시나리오 뷰<br/>(Scenarios / Use Case)<br/>유스케이스 기반<br/>4개 뷰 검증·연결"])

    subgraph R1["　"]
        direction LR
        LV["논리 뷰<br/>(Logical View)<br/>기능 분해·클래스·<br/>객체 관계 설계"]
        PV["프로세스 뷰<br/>(Process View)<br/>런타임 프로세스·<br/>스레드·동시성"]
    end
    subgraph R2["　"]
        direction LR
        PHV["물리 뷰<br/>(Physical View)<br/>서버·네트워크·<br/>배포 인프라"]
        DV["개발 뷰<br/>(Development View)<br/>모듈·컴포넌트·<br/>패키지 구조"]
    end

    SC --> LV
    SC --> PV
    SC --> PHV
    SC --> DV

    style SC  fill:#1E3A5F,stroke:#1E3A5F,color:#fff
    style LV  fill:#E3F2FD,stroke:#1976D2,color:#000
    style PV  fill:#F3E5F5,stroke:#7B1FA2,color:#000
    style PHV fill:#FFF3E0,stroke:#F57C00,color:#000
    style DV  fill:#E8F5E9,stroke:#388E3C,color:#000
    style R1 fill:none,stroke:none
    style R2 fill:none,stroke:none
```

| 뷰 | 관심사 | 주요 표현 요소 | 대상 이해관계자 |
|---|---|---|---|
| **논리 뷰** | 기능적 요구사항 충족 방법, 객체 지향 분해 | 클래스 다이어그램, 시퀀스 다이어그램 | 최종 사용자, 설계자 |
| **프로세스 뷰** | 런타임 동작, 동시성·성능·가용성 | 액티비티 다이어그램, 상태 다이어그램 | 시스템 통합자, 성능 엔지니어 |
| **물리 뷰** | 소프트웨어와 하드웨어의 매핑, 배포 구성 | 배포 다이어그램, 인프라 구성도 | 시스템 엔지니어, DevOps |
| **개발 뷰** | 소프트웨어 모듈 구성, 빌드·관리 용이성 | 컴포넌트 다이어그램, 패키지 구조 | 개발자, 프로젝트 관리자 |
| **시나리오 뷰** | 4개 뷰의 일관성 검증, 유스케이스 기반 검증 | 유스케이스 다이어그램, 시나리오 기술 | 모든 이해관계자 |

---

### 나. 뷰별 이해관계자 및 아키텍처 문서화

```mermaid
flowchart LR
    subgraph STAKE["이해관계자별 관심 뷰"]
        direction TB
        S1["최종 사용자<br/>→ 논리 뷰 + 시나리오"]
        S2["개발자<br/>→ 개발 뷰 + 논리 뷰"]
        S3["시스템 엔지니어<br/>→ 물리 뷰 + 프로세스 뷰"]
        S4["PM·아키텍트<br/>→ 전체 5개 뷰 통합"]
    end

    subgraph DOC["UML 다이어그램 매핑"]
        direction TB
        D1["클래스·시퀀스 다이어그램<br/>(논리 뷰)"]
        D2["액티비티·상태 다이어그램<br/>(프로세스 뷰)"]
        D3["배포 다이어그램<br/>(물리 뷰)"]
        D4["컴포넌트·패키지 다이어그램<br/>(개발 뷰)"]
    end

    STAKE --- DOC

    style STAKE fill:#E3F2FD,stroke:#1976D2,color:#1E3A5F
    style DOC   fill:#E8F5E9,stroke:#388E3C,color:#1B5E20
```

**아키텍처 문서화 실무 적용**

| 단계 | 활동 | 산출물 |
|---|---|---|
| **요구사항 분석** | 이해관계자 식별 및 관심사 목록화 | 이해관계자 목록, 유스케이스 목록 |
| **시나리오 도출** | 핵심 유스케이스 선정 (전체의 10~20%) | 유스케이스 다이어그램, 시나리오 기술서 |
| **뷰별 설계** | 4개 뷰를 시나리오 기반으로 순차 설계 | 뷰별 UML 다이어그램 세트 |
| **일관성 검증** | 시나리오로 4개 뷰 간 충돌·누락 검증 | 아키텍처 검토 보고서 |
| **문서화·배포** | 이해관계자별 맞춤 아키텍처 문서 제공 | SAD(소프트웨어 아키텍처 문서) |

---

## 3. 4+1 View Model 적용의 기대효과 및 활용 방안

| 구분 | 주요 기대효과 | 활용 및 실무 적용 방안 |
|---|---|---|
| **소통 명확화** | 이해관계자별 맞춤 관점 제공으로 오해 최소화 | EA 수립 시 TOGAF ADM과 연계하여 산출물 체계화 |
| **복잡성 관리** | 대형 시스템의 아키텍처를 관심사별로 분리·관리 | MSA 설계 시 서비스별 4+1 뷰 적용으로 의존성 가시화 |
| **품질 검증** | 시나리오 기반 검증으로 설계 누락·충돌 조기 탐지 | 아키텍처 리뷰 체크리스트에 5개 뷰 완전성 기준 반영 |
| **문서 표준화** | UML과의 자연스러운 연계로 일관된 아키텍처 문서 생산 | 프로젝트 착수 시 SAD 템플릿으로 4+1 뷰 구조 제공 |

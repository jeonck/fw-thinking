---
sidebar_position: 3
title: FEAF
---

# FEAF
**Federal Enterprise Architecture Framework**

## 1. 미 연방정부 IT 투자를 전략 정렬하고 부처 간 재사용을 실현하는 EA, FEAF의 개요

```mermaid
flowchart LR
    A["부처별 분산된 IT 투자<br/>중복·비효율·정렬 부재"] --"5대 참조 모델<br/>통합 EA 체계"--> B["FEAF<br/>연방 통합 아키텍처"] --"공유·재사용<br/>성과 측정"--> C["정부 서비스 품질 향상<br/>IT 투자 효율화"]

    style A fill:#FFEBEE,stroke:#D32F2F,color:#000
    style B fill:#E3F2FD,stroke:#1976D2,color:#000
    style C fill:#E8F5E9,stroke:#388E3C,color:#000
```

**정의**: 미국 연방정부가 부처 간 IT 투자의 중복을 방지하고 비즈니스 목표와 IT를 정렬하기 위해 수립한 EA 프레임워크로, **성과·비즈니스·서비스 컴포넌트·데이터·기술** 의 5대 참조 모델(Reference Model)을 통해 정부 전체의 아키텍처를 표준화하는 체계.

**특징**:
- **공유 서비스(Shared Services)** 와 **재사용 가능한 컴포넌트** 식별을 통한 연방 IT 투자 최적화.
- OMB(행정관리예산처) 주도의 연방 IT 투자 심의(CPIC)와 연계하여 예산 배분의 근거로 활용.
- TOGAF·DoDAF와 달리 **정부·공공 부문 특화** — 시민 서비스 제공과 부처 간 협력 중심.

---

## 2. FEAF의 핵심 구성 체계

### 가. 5대 참조 모델 (Reference Models)

```mermaid
flowchart TD
    subgraph R1["　"]
        direction LR
        PRM["성과 참조 모델<br/>Performance RM<br/>정부 성과 목표 측정<br/>KPI·성과 지표 체계"]
        BRM["비즈니스 참조 모델<br/>Business RM<br/>정부 기능·서비스 분류<br/>부처 간 기능 공유 기준"]
        SRM["서비스 컴포넌트 RM<br/>Service Component RM<br/>재사용 가능한 IT 서비스<br/>컴포넌트 목록 관리"]
    end
    subgraph R2["　"]
        direction LR
        DRM["데이터 참조 모델<br/>Data RM<br/>연방 공통 데이터 구조<br/>부처 간 데이터 공유"]
        TRM["기술 참조 모델<br/>Technical RM<br/>표준 기술 스택·플랫폼<br/>상호운용성 기준"]
    end

    style PRM fill:#1E3A5F,stroke:#1E3A5F,color:#fff
    style BRM fill:#E3F2FD,stroke:#1976D2,color:#000
    style SRM fill:#F3E5F5,stroke:#7B1FA2,color:#000
    style DRM fill:#FFF3E0,stroke:#F57C00,color:#000
    style TRM fill:#E8F5E9,stroke:#388E3C,color:#000
    style R1 fill:none,stroke:none
    style R2 fill:none,stroke:none
```

| 참조 모델 | 핵심 목적 | 주요 내용 | 활용 방안 |
|---|---|---|---|
| **성과 참조 모델 (PRM)** | 연방 IT 투자의 성과 측정 체계 수립 | 성과 측정 지표, KPI, 결과 연계 구조 | IT 예산 투자 심의 시 성과 연계 근거 |
| **비즈니스 참조 모델 (BRM)** | 정부 기능·서비스 분류 체계 표준화 | 서비스 영역, 비즈니스 기능 분류 | 부처 간 중복 기능 식별 및 통합 |
| **서비스 컴포넌트 RM (SRM)** | 재사용 가능한 IT 서비스 컴포넌트 목록 | 공통 서비스, 지원 서비스, 접근 채널 | 개별 구축 대신 공유 서비스 활용 |
| **데이터 참조 모델 (DRM)** | 연방 공통 데이터 구조 표준화 | 데이터 설명·맥락·공유 체계 | 부처 간 데이터 교환 표준 |
| **기술 참조 모델 (TRM)** | 연방 표준 기술 스택 및 플랫폼 정의 | 표준 기술, 인터페이스, 보안 규격 | 상호운용성 확보 및 벤더 종속 방지 |

---

### 나. 공공 EA 수립 및 국내 연계

```mermaid
flowchart LR
    subgraph US["미국 FEAF 적용 체계"]
        direction TB
        U1["OMB Circular A-130<br/>연방 IT 관리 기본 정책"]
        U2["CPIC<br/>자본계획 및 투자 통제"]
        U3["FEA 참조 모델<br/>5대 RM 기반 아키텍처"]
    end

    subgraph KR["국내 공공 EA 연계"]
        direction TB
        K1["전자정부법<br/>공공정보화 근거법"]
        K2["범정부 EA<br/>행정안전부 주관"]
        K3["정보화 사업 심사<br/>기획재정부·행안부"]
    end

    US --"방법론 참조<br/>모델 적용"--> KR

    style US fill:#E3F2FD,stroke:#1976D2,color:#1E3A5F
    style KR fill:#E8F5E9,stroke:#388E3C,color:#1B5E20
```

**FEAF vs 국내 범정부 EA 비교**

| 비교 항목 | FEAF (미국) | 범정부 EA (한국) |
|---|---|---|
| **주관 기관** | OMB (행정관리예산처) | 행정안전부 |
| **법적 근거** | Clinger-Cohen Act, OMB A-130 | 전자정부법, 정보화촉진기본법 |
| **참조 모델** | 5대 RM (PRM·BRM·SRM·DRM·TRM) | 범정부 EA 참조 모델 (국내 변용) |
| **예산 연계** | CPIC 통해 IT 예산 배분과 직결 | 정보화 사업 심사·타당성 조사 |
| **성숙도** | 연방 전 부처 의무 적용 | 중앙부처 중심, 지자체 확산 중 |

---

## 3. FEAF 도입의 기대효과 및 활용 방안

| 구분 | 주요 기대효과 | 활용 및 실무 적용 방안 |
|---|---|---|
| **중복 투자 방지** | BRM·SRM 기반 부처 간 공통 기능 식별·통합 | 신규 정보화 사업 착수 전 공유 서비스 활용 가능성 검토 |
| **성과 정렬** | PRM으로 IT 투자와 정책 목표 간 연계 명확화 | 예산 요청 시 성과 지표(KPI) 기반 투자 타당성 입증 |
| **상호운용성** | TRM·DRM으로 부처 간 데이터·시스템 연계 표준화 | 행정 데이터 공동 활용 플랫폼 설계 시 DRM 참조 |
| **공공 서비스 혁신** | 시민 중심 통합 서비스 설계 및 디지털 전환 지원 | 범정부 EA와 연계하여 원스톱 민원 서비스 아키텍처 수립 |

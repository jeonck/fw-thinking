---
sidebar_position: 7
title: Data Mesh
---

# Data Mesh
**Decentralized Data Architecture**

## 1. 중앙 집중형 데이터 관리의 병목을 극복하는 도메인 분산 데이터 아키텍처, 데이터 메시의 개요

```mermaid
flowchart LR
    A["중앙 집중형<br/>데이터 팀 병목<br/>(Data Swamp)"] --"도메인별 분산<br/>소유 및 제품화"--> B["도메인 자율적<br/>데이터 제품 관리"] --"셀프 서비스<br/>플랫폼 + 연합 거버넌스"--> C["데이터 민주화<br/>및 가치 실현 가속"]

    style A fill:#FFEBEE,stroke:#D32F2F,color:#000
    style B fill:#E3F2FD,stroke:#1976D2,color:#000
    style C fill:#E8F5E9,stroke:#388E3C,color:#000
```

**정의**: 데이터를 중앙의 단일 팀이 관리하는 대신, 각 비즈니스 도메인 팀이 자신의 데이터를 직접 소유·관리하고 **데이터 제품(Data Product)** 으로 서비스화하여, 셀프 서비스 플랫폼과 연합 거버넌스 위에서 전사 데이터를 운영하는 탈중앙화 데이터 아키텍처.

**특징**:
- **도메인 주도 설계(DDD)** 원칙을 데이터 관리에 적용하여 비즈니스 현실을 데이터 구조에 반영.
- 중앙 데이터 팀의 병목 없이 도메인 팀이 자율적으로 데이터를 생산·소비.
- 4대 원칙(도메인 소유권·데이터 제품·셀프 서비스·연합 거버넌스)을 기반으로 구현.

---

## 2. 데이터 메시의 핵심 구성 체계

### 가. 4대 핵심 원칙

```mermaid
flowchart TD
    subgraph R1["　"]
        direction LR
        P1["도메인 기반<br/>분산 소유권<br/>현업 도메인이<br/>데이터 직접 소유·관리"]
        P2["제품으로서의<br/>데이터 (DaaP)<br/>소비자 중심 품질 보증<br/>발견 가능·신뢰 가능"]
    end
    subgraph R2["　"]
        direction LR
        P3["셀프 서비스<br/>데이터 플랫폼<br/>인프라 복잡성 추상화<br/>도메인 자율성 지원"]
        P4["연합적 계산<br/>거버넌스<br/>글로벌 표준 + 로컬 자율<br/>상호 운용성 보장"]
    end

    style P1 fill:#E3F2FD,stroke:#1976D2,color:#000
    style P2 fill:#F3E5F5,stroke:#7B1FA2,color:#000
    style P3 fill:#FFF3E0,stroke:#F57C00,color:#000
    style P4 fill:#E8F5E9,stroke:#388E3C,color:#000
    style R1 fill:none,stroke:none
    style R2 fill:none,stroke:none
```

| 원칙 | 핵심 내용 | 기존 중앙 집중형과의 차이 |
|---|---|---|
| **도메인 소유권** | 데이터를 가장 잘 아는 현업 부서가 소유·관리·책임 | 중앙 데이터 팀 → 도메인 팀으로 책임 이전 |
| **Data as a Product** | 데이터를 내부 소비자를 위한 제품처럼 개발·배포·유지 | 파이프라인 산출물 → 발견·신뢰·사용 가능한 제품 |
| **Self-service Platform** | 도메인 팀이 기술 지식 없이도 데이터 인프라 활용 | 중앙 엔지니어 의존 → 플랫폼 추상화로 자율화 |
| **연합 거버넌스** | 전사 공통 표준은 유지하되 도메인 자율성 보장 | 중앙 통제 → 표준화된 규칙 기반 자율 거버넌스 |

---

### 나. 데이터 제품 아키텍처

```mermaid
flowchart LR
    subgraph DP["데이터 제품 (Data Product)"]
        direction TB
        IN["입력 포트<br/>(Input Port)<br/>소스 시스템·이벤트·API"]
        TR["변환 로직<br/>(Transformation)<br/>정제·집계·피처 생성"]
        OUT["출력 포트<br/>(Output Port)<br/>쿼리 API·스트림·파일"]
        IN --> TR --> OUT
    end

    subgraph PLANE["메시 플랫폼 레이어"]
        direction TB
        EXP["경험 플레인<br/>(Experience Plane)<br/>데이터 카탈로그·검색·접근 관리"]
        INF["인프라 플레인<br/>(Infrastructure Plane)<br/>스토리지·컴퓨팅·CI/CD·보안"]
    end

    DP <--> PLANE

    style DP    fill:#E3F2FD,stroke:#1976D2,color:#1E3A5F
    style PLANE fill:#E8F5E9,stroke:#388E3C,color:#1B5E20
```

| 구성 요소 | 역할 | 핵심 기술 |
|---|---|---|
| **입력 포트** | 소스 시스템·이벤트·타 데이터 제품으로부터 데이터 수신 | Kafka, CDC, REST API |
| **변환 로직** | 도메인 비즈니스 규칙에 따른 정제·집계·피처 생성 | dbt, Spark, SQL |
| **출력 포트** | 소비자가 접근하는 인터페이스 (쿼리·스트림·파일) | REST API, Snowflake, S3 |
| **경험 플레인** | 데이터 제품의 검색·발견·접근 관리 지원 | Datahub, Collibra, Apache Atlas |
| **인프라 플레인** | 도메인 팀의 데이터 제품 구축·배포를 위한 공통 인프라 | Terraform, Kubernetes, Airflow |

---

## 3. 데이터 메시 도입의 기대효과 및 활용 방안

| 구분 | 주요 기대효과 | 활용 및 실무 적용 방안 |
|---|---|---|
| **확장성** | 도메인 수에 비례한 데이터 처리 역량 증가 | 도메인별 독립 데이터 제품 팀 구성 및 순차적 도입 |
| **가치 실현 속도** | 중앙 팀 의존 없이 신속한 데이터 분석 | 현업 주도의 셀프 서비스 분석 환경 구축 |
| **데이터 품질** | 소스 시스템 전문가의 직접 데이터 관리 | SLA 기반 데이터 제품 품질 지표(freshness·completeness) 운영 |
| **AI·ML 가속** | 고품질 도메인 데이터 제품 기반 피처 스토어 구성 | 데이터 제품을 ML 피처 파이프라인의 입력으로 활용 |

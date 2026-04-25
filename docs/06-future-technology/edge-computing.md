---
sidebar_position: 3
title: Edge Computing
---

# Edge Computing
**Edge Computing & MEC**

## 1. 데이터 처리의 전진 배치, 에지 컴퓨팅의 개요

**개념**: 데이터를 중앙 클라우드 서버로 보내지 않고, 데이터가 발생한 물리적 장소(에지) 또는 그 근처에서 실시간으로 처리하는 분산 컴퓨팅 기술.

**특징**: **저지연(Low Latency)**, 대역폭 절감, 데이터 프라이버시 강화, 5G/6G 통신 기술과 결합된 MEC(Multi-access Edge Computing)로 진화.

---

## 2. 에지 컴퓨팅의 아키텍처 및 계층 구조

### 가. Cloud-Edge-Device 3계층 모델

```mermaid
flowchart TD
    subgraph CLOUD["중앙 클라우드 (Core)"]
        C1["빅데이터 분석<br/>장기 데이터 보관<br/>복잡한 AI 모델 훈련"]
    end

    subgraph EDGE["에지 계층 (Edge)"]
        E1["에지 게이트웨이<br/>MEC 서버<br/>실시간 데이터 처리"]
    end

    subgraph DEVICE["장치 계층 (Device / IoT)"]
        D1["센서, 카메라, 단말기<br/>데이터 수집 및 전송"]
    end

    DEVICE <-->|"실시간 제어"| EDGE
    EDGE <-->|"요약 데이터 전송"| CLOUD
    CLOUD <-->|"모델/정책 배포"| EDGE

    style EDGE fill:#E3F2FD,stroke:#1976D2,stroke-width:2px
```

| 계층 | 역할 및 주요 기능 | 응답 속도 |
|---|---|---|
| **중앙 클라우드** | 전역적 최적화, 대규모 연산, 백업 | 수백 ms ~ 초 |
| **에지 계층** | 로컬 분석, 필터링, 즉각적 제어 | 수 ms ~ 수십 ms |
| **장치 계층** | 데이터 센싱, 간단한 임계치 판단 | 즉시 (Real-time) |

---

### 나. 에지 컴퓨팅의 핵심 기술 요소

```mermaid
flowchart TD
  EdgeTech["에지 컴퓨팅 기술"] --> Virt["가상화 및 컨테이너"]
  Virt --> LightweightK8sK3s["Lightweight K8s (K3s)"]
  Virt --> Docker["Docker 기반 마이크로서비스"]
  EdgeTech --> Network["네트워크"]
  Network --> 5GMECMultiaccessEdgeComputing["5G MEC (Multi-access Edge Computing)"]
  Network --> SDNNFV["SDN / NFV"]
  EdgeTech --> Data["데이터 관리"]
  Data --> FlinkSpark["스트림 데이터 처리 (Flink, Spark)"]
  Data --> DB["분산 데이터베이스"]
  EdgeTech --> Sec["보안"]
  Sec --> ZT["제로 트러스트 에지 보안"]
  Sec --> FederatedLearning["연합 학습 (Federated Learning)"]
```

| 기술 요소 | 상세 설명 | 비고 |
|---|---|---|
| **MEC** | 이동통신망의 에지에서 컴퓨팅 역량 제공 | 5G 핵심 기술 |
| **Micro-DC** | 소규모 지역 거점 데이터센터 | 물리적 인프라 |
| **Edge AI** | 에지 장치에서 추론(Inference) 수행 | 온디바이스 AI 연계 |

---

## 3. 에지 컴퓨팅의 기대효과 및 주요 유스케이스

| 구분 | 주요 기대효과 | 실무 적용 및 유스케이스 |
|---|---|---|
| **성능 최적화** | 응답 지연 시간의 획기적 단축 | 자율주행차(V2X), 스마트 팩토리 실시간 공정 제어 |
| **비용 절감** | 클라우드 전송 데이터 양 최소화 | 스마트 시티 고화질 CCTV 영상 분석 및 필터링 |
| **프라이버시** | 민감 데이터의 로컬 처리 및 보관 | 의료 데이터 현장 처리, 스마트 홈 프라이버시 보호 |

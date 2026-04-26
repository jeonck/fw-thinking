---
sidebar_position: 5
title: Blockchain
---

# Blockchain
**Distributed Ledger Technology (DLT)**

## 1. 신뢰의 기술, 블록체인의 개요
```mermaid
flowchart LR
    A["중앙 집중형 신뢰"] -- "탈중앙화 및 분산 원장 전환" --> B["블록체인 기술"]
```
**정의**: 거래 정보를 중앙 서버가 아닌 네트워크 참여자들이 공동으로 기록하고 관리하는 **분산 원장 기술(Distributed Ledger Technology)**.

**특징**: **탈중앙화(Decentralization)**, 투명성, 불변성(Immutability), 가용성 확보, 스마트 계약(Smart Contract)을 통한 비즈니스 자동화.

---

## 2. 블록체인의 아키텍처 및 핵심 메커니즘

### 가. 블록 및 체인 구조

```mermaid
flowchart LR
    subgraph BLOCK1["Block N-1"]
        H1["Previous Hash"]
        T1["Transactions"]
        N1["Nonce"]
    end

    subgraph BLOCK2["Block N"]
        H2["Hash (N-1)"]
        T2["Transactions"]
        N2["Nonce"]
    end

    subgraph BLOCK3["Block N+1"]
        H3["Hash (N)"]
        T3["Transactions"]
        N3["Nonce"]
    end

    BLOCK1 --> BLOCK2 --> BLOCK3
    
    style BLOCK2 fill:#E3F2FD,stroke:#1976D2,stroke-width:2px
```

| 구성 요소 | 설명 | 비고 |
|---|---|---|
| **해시 (Hash)** | 블록의 고유 식별자이자 무결성 검증 수단 | 이전 블록 해시를 포함하여 체인 형성 |
| **트랜잭션** | 발생한 거래 정보들의 집합 | 머클 트리(Merkle Tree) 구조로 저장 |
| **합의 알고리즘** | 네트워크 참여자 간 데이터 일치 여부 결정 | PoW, PoS, PBFT 등 |

---

### 나. 합의 알고리즘 및 유형별 분류

```mermaid
flowchart TD
    subgraph R1["　"]
        direction LR
        G1["합의 알고리즘<br/>PoW (작업 증명)<br/>PoS (지분 증명)<br/>BFT (비잔틴 장애 허용)"]
        G2["네트워크 유형<br/>Public (누구나 참여)<br/>Private (허가된 주체)<br/>Consortium (그룹 운영)"]
    end
    subgraph R2["　"]
        direction LR
        G3["핵심 응용<br/>스마트 컨트랙트 (Solidity)<br/>NFT / STO (토큰 증권)<br/>DID (분산 신원 증명)"]
        G4["소프트웨어 플랫폼<br/>이더리움 / 하이퍼레저<br/>Corda / Polygon<br/>Layer 2 솔루션"]
    end

    style G1 fill:#E3F2FD,stroke:#1976D2,color:#000
    style G2 fill:#F3E5F5,stroke:#7B1FA2,color:#000
    style G3 fill:#FFF3E0,stroke:#F57C00,color:#000
    style G4 fill:#E8F5E9,stroke:#388E3C,color:#000
    style R1 fill:none,stroke:none
    style R2 fill:none,stroke:none
```

| 유형 | 참여 제한 | 속도 | 주요 사례 |
|---|---|---|---|
| **Public** | 없음 (Permissionless) | 느림 | 비트코인, 이더리움 |
| **Private** | 허가 필요 (Permissioned) | 빠름 | 하이퍼레저 패브릭, R3 Corda |
| **Consortium** | 사전에 정의된 그룹 | 중간 | 은행 연합망, 물류 추적망 |

---

## 3. 블록체인 도입의 기대효과 및 산업별 활용 방안

| 구분 | 주요 기대효과 | 활용 분야 및 전략 |
|---|---|---|
| **중개 비용 절감** | 신뢰할 수 있는 제3자(TTP) 불필요 | 해외 송금, P2P 거래, 유통 이력 추적 |
| **데이터 무결성** | 조작 불가능한 이력 관리 | 투표 시스템, 저작권 관리, 식품 이력제 |
| **비즈니스 자동화** | 조건 충족 시 자동 거래 체결 | 스마트 계약 기반의 보험금 자동 지급, 공급망 관리 |
| **신원 보안** | 자기 주권 신원 증명 | DID(Decentralized Identifier)를 활용한 모바일 신분증 |

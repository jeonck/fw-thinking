---
sidebar_position: 10
title: MVC Pattern
---

# MVC Pattern
**Model-View-Controller — 사용자 인터페이스와 비즈니스 로직의 관심사 분리 패턴**

## 1. UI·비즈니스 로직·데이터를 세 가지 역할로 분리하여 독립적 개발·변경을 실현하는 패턴, MVC의 개요

```mermaid
flowchart LR
    A["UI·비즈니스 로직·데이터<br/>하나의 코드에 혼재<br/>변경 시 전체 영향"] --"Model·View·Controller<br/>역할 분리"--> B["관심사 분리<br/>독립적 개발·테스트"] --"UI 교체·<br/>비즈니스 로직 재사용"--> C["유지보수성·<br/>재사용성 향상"]

    style A fill:#FFEBEE,stroke:#D32F2F,color:#000
    style B fill:#E3F2FD,stroke:#1976D2,color:#000
    style C fill:#E8F5E9,stroke:#388E3C,color:#000
```

**개념**: 애플리케이션을 **Model(데이터·비즈니스 로직), View(사용자 인터페이스), Controller(요청 처리·흐름 제어)** 의 세 가지 역할로 분리하여, 각 컴포넌트가 독립적으로 개발·변경·테스트될 수 있도록 하는 소프트웨어 아키텍처 패턴.

**특징**:
- 1970년대 Smalltalk에서 기원하여 웹·모바일·데스크톱 애플리케이션 전반에 적용되는 **범용 UI 패턴**.
- Spring MVC, Django, Rails, ASP.NET 등 주요 웹 프레임워크의 기반 설계 패턴.
- View와 Model이 직접 통신하여 **View가 Model 변경을 관찰(Observer)** 하는 구조.

---

## 2. MVC 패턴의 핵심 구성 체계

### 가. Model, View, Controller 역할 분리

```mermaid
flowchart TD
    USER["사용자 (User)"]

    subgraph MVC["MVC 구성 요소"]
        direction TB
        CTR["Controller<br/>요청 수신·흐름 제어<br/>Model 호출·View 선택"]
        MOD["Model<br/>비즈니스 로직·데이터<br/>상태 관리·DB 연동"]
        VIW["View<br/>사용자 인터페이스<br/>Model 데이터 시각화"]
    end

    USER -->|"요청 (Request)"| CTR
    CTR -->|"비즈니스 처리 요청"| MOD
    MOD -->|"데이터·상태 반환"| CTR
    CTR -->|"렌더링 지시"| VIW
    MOD -->|"상태 변경 통보<br/>(Observer)"| VIW
    VIW -->|"응답 (Response)"| USER

    style CTR fill:#E3F2FD,stroke:#1976D2,color:#000
    style MOD fill:#1E3A5F,stroke:#1E3A5F,color:#fff
    style VIW fill:#E8F5E9,stroke:#388E3C,color:#000
```

| 컴포넌트 | 핵심 책임 | 포함 요소 | 변경 유발 요인 |
|---|---|---|---|
| **Model** | 비즈니스 규칙 적용, 데이터 상태 관리, DB 연동 | Entity, Repository, Service, DTO | 비즈니스 규칙·데이터 구조 변경 |
| **View** | 사용자에게 데이터를 시각적으로 표현 | HTML Template, JSP, Thymeleaf, React | UI 디자인·화면 구성 변경 |
| **Controller** | 요청 수신·파라미터 검증·Model 호출·View 선택 | @Controller, @RestController | 요청 흐름·라우팅 변경 |

**MVC 요청 처리 흐름 (Spring MVC 예시)**

| 단계 | 처리 주체 | 설명 |
|---|---|---|
| 1 | **DispatcherServlet** | 모든 HTTP 요청의 진입점 (Front Controller) |
| 2 | **HandlerMapping** | URL 패턴에 맞는 Controller 메서드 탐색 |
| 3 | **Controller** | 비즈니스 로직 호출, ModelAndView 반환 |
| 4 | **ViewResolver** | 논리적 뷰 이름을 실제 View(Template)로 변환 |
| 5 | **View** | Model 데이터를 HTML/JSON으로 렌더링·응답 |

---

### 나. MVC 변형 패턴 (MVP, MVVM)

```mermaid
flowchart TD
    subgraph R1["　"]
        direction LR
        MVC2["MVC<br/>Model-View-Controller<br/>Controller가 View·Model 조율<br/>View가 Model 직접 참조 가능<br/>Spring MVC / Django / Rails"]
        MVP["MVP<br/>Model-View-Presenter<br/>Presenter가 View·Model 완전 중재<br/>View는 Presenter만 참조<br/>Android (전통적) / WinForms"]
    end
    subgraph R2["　"]
        direction LR
        MVVM["MVVM<br/>Model-View-ViewModel<br/>ViewModel이 View 상태 관리<br/>데이터 바인딩으로 자동 동기화<br/>Vue / React / Angular / WPF"]
        FLUX["Flux / Redux<br/>단방향 데이터 흐름<br/>Action → Dispatcher → Store → View<br/>React 생태계 상태 관리"]
    end

    style MVC2 fill:#E3F2FD,stroke:#1976D2,color:#000
    style MVP  fill:#F3E5F5,stroke:#7B1FA2,color:#000
    style MVVM fill:#FFF3E0,stroke:#F57C00,color:#000
    style FLUX fill:#E8F5E9,stroke:#388E3C,color:#000
    style R1 fill:none,stroke:none
    style R2 fill:none,stroke:none
```

**MVC·MVP·MVVM 비교**

| 비교 항목 | MVC | MVP | MVVM |
|---|---|---|---|
| **중재자** | Controller | Presenter | ViewModel |
| **View-Model 관계** | View가 Model 직접 참조 가능 | Presenter가 완전 중재 | 데이터 바인딩으로 자동 동기화 |
| **테스트 용이성** | Controller 단위 테스트 용이 | Presenter 단위 테스트 용이 | ViewModel 단위 테스트 용이 |
| **View 독립성** | 보통 | 높음 (View는 인터페이스만) | 높음 (바인딩으로 분리) |
| **적합 환경** | 서버사이드 렌더링 웹 | Android·데스크톱 앱 | 클라이언트사이드 SPA·WPF |
| **대표 프레임워크** | Spring MVC, Django, Rails | Android MVP, WinForms | Vue, Angular, WPF, Kotlin |

---

## 3. MVC 패턴 적용의 기대효과 및 활용 방안

| 구분 | 주요 기대효과 | 활용 및 실무 적용 방안 |
|---|---|---|
| **관심사 분리** | UI 변경이 비즈니스 로직에 영향 없음 | 디자이너(View)·백엔드(Model)·풀스택(Controller) 병렬 개발 |
| **테스트 용이성** | Model을 UI 없이 독립 단위 테스트 가능 | JUnit으로 Service·Repository 단위 테스트, Mock View 활용 |
| **재사용성** | 동일 Model로 Web·API·모바일 뷰 제공 | REST API 설계 시 Model 재사용, View만 교체 |
| **유지보수성** | 화면 변경 시 View만, 로직 변경 시 Model만 수정 | 레거시 UI 현대화 시 View 교체로 점진적 마이그레이션 |

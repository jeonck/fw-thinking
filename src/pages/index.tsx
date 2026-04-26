import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/it-governance/intro">
            학습 시작하기
          </Link>
        </div>
      </div>
    </header>
  );
}

function WhySection() {
  return (
    <section className={styles.whySection}>
      <div className="container">
        <Heading as="h2">왜 프레임워크 중심의 사고인가?</Heading>
        <p>
          IT 전문가는 방대한 IT 기술 간의 <strong>상호 연결성(Connectivity)</strong>을 파악해야 합니다.
          프레임워크는 개별 기술들을 하나의 논리적 구조 안에 배치하여 다음과 같은 가치를 제공합니다.
        </p>
        <div className="row">
          <div className="col col--4">
            <div className={styles.whyCard}>
              <Heading as="h3">가독성과 설득력</Heading>
              <p>"나는 이 문제를 거시적인 관점에서 구조적으로 파악하고 있다"는 인상을 줍니다.</p>
            </div>
          </div>
          <div className="col col--4">
            <div className={styles.whyCard}>
              <Heading as="h3">누락 없는 분석 (MECE)</Heading>
              <p>Mutually Exclusive, Collectively Exhaustive 원칙에 따라 문제의 원인이나 해결 방안을 빠짐없이 분석할 수 있습니다.</p>
            </div>
          </div>
          <div className="col col--4">
            <div className={styles.whyCard}>
              <Heading as="h3">표준화된 소통</Heading>
              <p>복잡한 아키텍처나 거버넌스 문제를 공통된 가이드라인 안에서 설명함으로써 의사결정의 근거를 명확히 합니다.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const useCases = [
  {
    number: '01',
    title: '전략적 의사결정 및 C-Level 보고',
    color: '#2563EB',
    bg: '#EFF6FF',
    items: [
      {
        subtitle: '인프라 도입 타당성 검토',
        desc: '단순히 "성능이 좋다"가 아니라, 성능·비용·보안·확장성이라는 프레임워크 안에서 누락 없이 비교 분석하여 설득력을 높입니다.',
      },
      {
        subtitle: 'IT 로드맵 제시',
        desc: '개별 프로젝트의 나열이 아닌, 전체 거버넌스 프레임워크 내에서 각 기술이 차지하는 위치와 선후 관계를 시각화하여 보고할 수 있습니다.',
      },
    ],
  },
  {
    number: '02',
    title: 'IT 감사 및 보안 거버넌스',
    color: '#7C3AED',
    bg: '#F5F3FF',
    items: [
      {
        subtitle: '보안 취약점 진단',
        desc: '개별 서버의 설정을 넘어, ISO 27001이나 NIST와 같은 글로벌 프레임워크를 기준으로 조직의 보안 성숙도를 구조적으로 평가합니다.',
      },
      {
        subtitle: '프로세스 표준화',
        desc: '감사 결과 발견된 문제점을 MECE하게 분류하여, 일회성 처방이 아닌 구조적인 개선안을 도출할 때 활용됩니다.',
      },
    ],
  },
  {
    number: '03',
    title: '복잡한 시스템 아키텍처 설계 및 트러블슈팅',
    color: '#EA580C',
    bg: '#FFF7ED',
    items: [
      {
        subtitle: '근본 원인 분석 (RCA)',
        desc: '프레임워크적 사고를 통해 네트워크, 애플리케이션, 데이터베이스, 보안 계층별로 문제를 분리하여 분석함으로써 감에 의존하지 않는 분석이 가능해집니다.',
      },
      {
        subtitle: '신기술 스택 통합',
        desc: '새로운 오픈소스나 클라우드 서비스를 도입할 때 기존 인프라와의 연결성(Connectivity)을 프레임워크상에서 미리 배치해 봄으로써 기술적 충돌을 예방합니다.',
      },
    ],
  },
  {
    number: '04',
    title: '전문 지식의 체계화 및 교육',
    color: '#16A34A',
    bg: '#F0FDF4',
    items: [
      {
        subtitle: '지식 관리 (KM)',
        desc: '학습한 내용을 특정 프레임워크(예: 7-Layer, TOGAF 등)의 구성 요소로 매핑하여 저장하면 나중에 인출(Retrieval)하기가 훨씬 쉬워집니다.',
      },
      {
        subtitle: '팀 온보딩',
        desc: '신규 인력에게 복잡한 시스템 구조를 설명할 때, 전체 프레임워크를 먼저 제시함으로써 빠른 적응을 돕습니다.',
      },
    ],
  },
];

function UseCaseSection() {
  return (
    <section className={styles.useCaseSection}>
      <div className="container">
        <Heading as="h2">프레임워크적 사고의 활용</Heading>
        <p className={styles.useCaseIntro}>
          프레임워크 중심의 사고는 단순한 학습 방법론이 아닙니다. IT 전문가의 실무 전반에 걸쳐 강력한 도구로 작동합니다.
        </p>
        <div className="row">
          {useCases.map((uc) => (
            <div key={uc.number} className="col col--6" style={{marginBottom: '1.5rem'}}>
              <div className={styles.useCaseCard} style={{borderColor: uc.color, backgroundColor: uc.bg}}>
                <div className={styles.useCaseHeader}>
                  <span className={styles.useCaseNum} style={{backgroundColor: uc.color}}>{uc.number}</span>
                  <Heading as="h3" className={styles.useCaseTitle}>{uc.title}</Heading>
                </div>
                {uc.items.map((item, i) => (
                  <div key={i} className={styles.useCaseItem}>
                    <strong>{item.subtitle}</strong>
                    <p>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const groups = [
  {
    label: '거버넌스 & 전략',
    color: '#2563EB',
    categories: [
      {num: '01', name: 'IT 거버넌스 및 전략 경영', order: 'MECE → SWOT → Porter 5F → COBIT → ITIL → ITO …', link: '/docs/it-governance/intro'},
      {num: '02', name: '엔터프라이즈 아키텍처 (EA) 및 설계', order: 'Zachman → TOGAF → FEAF → ITA → 4+1 View → SOA …', link: '/docs/enterprise-architecture/intro'},
      {num: '03', name: '법규 및 컴플라이언스 대응', order: '개인정보보호법 → 전자금융거래법 → GDPR → HIPAA → PCI-DSS …', link: '/docs/legal-compliance/intro'},
    ],
  },
  {
    label: '기술 & 개발',
    color: '#EA580C',
    categories: [
      {num: '04', name: '소프트웨어 공학 및 개발 방법론', order: 'Agile/Scrum → Kanban → Lean → TDD/BDD → DDD → Clean Arch → MSA …', link: '/docs/software-engineering/intro'},
      {num: '05', name: '인프라, 운영 및 신기술 대응', order: 'ITIL 4 Ops → SRE → Cloud Adoption → IaC …', link: '/docs/infrastructure-operations/intro'},
      {num: '06', name: '미래 기술 대응 및 도메인 특화', order: 'Generative AI → Industry 4.0 → Edge → Quantum → Blockchain → Web3 …', link: '/docs/future-technology/intro'},
    ],
  },
  {
    label: '데이터 & 보안',
    color: '#7C3AED',
    categories: [
      {num: '07', name: '데이터 관리 및 AI 거버넌스', order: 'Data Governance → DAMA-DMBOK → DCAM → MDM → Big Data 5V → Data Lake → CRISP-DM …', link: '/docs/data-ai-governance/intro'},
      {num: '08', name: '정보보호 및 보안 거버넌스', order: 'ISO 27001 → ISMS-P → NIST CSF → Zero Trust → IAM → STRIDE → Cyber Kill Chain …', link: '/docs/security-governance/intro'},
    ],
  },
  {
    label: '경영 & 품질',
    color: '#16A34A',
    categories: [
      {num: '09', name: '품질 관리 및 신뢰성', order: 'TQM → PDCA → ISO 25010 → Six Sigma → SLA/SLO → Fishbone → Pareto …', link: '/docs/quality-management/intro'},
      {num: '10', name: '경제성 분석 및 비즈니스 의사결정', order: '기회비용 → ROI/TCO → NPV/IRR → CBA → REI → TEI → IT Portfolio …', link: '/docs/economic-analysis/intro'},
      {num: '11', name: '현대적 조직 및 일하는 방식', order: 'Tuckman → Dunbar → Psychological Safety → Dreyfus → Brooks\' Law → OKR …', link: '/docs/modern-organization/intro'},
    ],
  },
];

function ContentOrderSection() {
  return (
    <section className={styles.orderSection}>
      <div className="container">
        <Heading as="h2">콘텐츠 학습 순서 안내</Heading>
        <p className={styles.orderIntro}>
          각 카테고리는 <strong>개념·기반 → 핵심 프레임워크 → 확장·응용 → 특화 도구</strong> 순으로 배열되어 있습니다.
          처음 접하는 독자는 앞에서부터, 특정 주제가 필요한 독자는 원하는 항목을 바로 찾아볼 수 있습니다.
        </p>
        <div className="row">
          {groups.map((g) => (
            <div key={g.label} className="col col--6" style={{marginBottom: '1.5rem'}}>
              <div className={styles.orderCard} style={{borderColor: g.color}}>
                <div className={styles.orderGroupLabel} style={{backgroundColor: g.color}}>
                  {g.label}
                </div>
                {g.categories.map((cat) => (
                  <div key={cat.num} className={styles.orderRow}>
                    <span className={styles.orderNum} style={{color: g.color}}>{cat.num}</span>
                    <div className={styles.orderContent}>
                      <Link to={cat.link} className={styles.orderName}>{cat.name}</Link>
                      <p className={styles.orderFlow}>{cat.order}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="IT 전문가를 위한 구조적 IT 지식 체계 - 프레임워크적 사고">
      <HomepageHeader />
      <main>
        <WhySection />
        <UseCaseSection />
        <ContentOrderSection />
        <HomepageFeatures />
      </main>
    </Layout>
  );
}

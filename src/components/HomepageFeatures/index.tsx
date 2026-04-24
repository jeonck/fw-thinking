import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

type CategoryItem = {
  num: string;
  title: string;
  description: string;
  to: string;
};

const CategoryList: CategoryItem[] = [
  {num: '01', title: 'IT 거버넌스 및 전략 경영', description: 'COBIT, ITIL, BSC 등 거버넌스 프레임워크', to: '/docs/it-governance/intro'},
  {num: '02', title: '엔터프라이즈 아키텍처 (EA) 및 설계', description: 'TOGAF, Zachman 등 EA 방법론', to: '/docs/enterprise-architecture/intro'},
  {num: '03', title: '법규 및 컴플라이언스 대응', description: '개인정보보호법, GDPR, 전자금융거래법', to: '/docs/legal-compliance/intro'},
  {num: '04', title: '소프트웨어 공학 및 개발 방법론', description: 'Agile, DevOps, CMMI 등 개발 프레임워크', to: '/docs/software-engineering/intro'},
  {num: '05', title: '인프라, 운영 및 신기술 대응', description: 'SRE, Cloud 전환, IaC 자동화', to: '/docs/infrastructure-operations/intro'},
  {num: '06', title: '미래 기술 대응 및 도메인 특화', description: '생성형 AI, 양자 컴퓨팅, 엣지 컴퓨팅', to: '/docs/future-technology/intro'},
  {num: '07', title: '데이터 관리 및 AI 거버넌스', description: 'DAMA-DMBOK, MLOps, AI 거버넌스 체계', to: '/docs/data-ai-governance/intro'},
  {num: '08', title: '정보보호 및 보안 거버넌스', description: 'ISO 27001, NIST CSF, Zero Trust 모델', to: '/docs/security-governance/intro'},
  {num: '09', title: '품질 관리 및 신뢰성', description: 'ISO 25010, Six Sigma, SLA/SLO 관리', to: '/docs/quality-management/intro'},
  {num: '10', title: '경제성 분석 및 비즈니스 의사결정', description: 'ROI/TCO, NPV, IT 투자 포트폴리오', to: '/docs/economic-analysis/intro'},
  {num: '11', title: '현대적 조직 및 일하는 방식', description: 'SAFe, OKR, 디지털 전환 조직 모델', to: '/docs/modern-organization/intro'},
];

function CategoryCard({num, title, description, to}: CategoryItem) {
  return (
    <div className={clsx('col col--4', styles.categoryCard)}>
      <Link to={to} className={styles.cardLink}>
        <div className={styles.cardInner}>
          <span className={styles.cardNum}>{num}</span>
          <Heading as="h3" className={styles.cardTitle}>{title}</Heading>
          <p className={styles.cardDesc}>{description}</p>
        </div>
      </Link>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>주제별 목차</Heading>
        <div className="row">
          {CategoryList.map((props, idx) => (
            <CategoryCard key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

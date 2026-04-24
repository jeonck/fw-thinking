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

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="IT 전문가를 위한 구조적 IT 지식 체계 - 프레임워크적 사고">
      <HomepageHeader />
      <main>
        <WhySection />
        <HomepageFeatures />
      </main>
    </Layout>
  );
}

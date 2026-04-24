import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: '프레임워크적 사고',
  tagline: 'IT 전문가를 위한 구조적 IT 지식 체계',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://jeonck2000.github.io',
  baseUrl: '/fw-thinking/',

  organizationName: 'jeonck2000',
  projectName: 'fw-thinking',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'ko',
    locales: ['ko'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: '프레임워크적 사고',
      logo: {
        alt: '프레임워크적 사고',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'dropdown',
          label: '거버넌스 & 전략',
          position: 'left',
          items: [
            {label: '01. IT 거버넌스 및 전략 경영', to: '/docs/it-governance/intro'},
            {label: '02. 엔터프라이즈 아키텍처 (EA) 및 설계', to: '/docs/enterprise-architecture/intro'},
            {label: '03. 법규 및 컴플라이언스 대응', to: '/docs/legal-compliance/intro'},
          ],
        },
        {
          type: 'dropdown',
          label: '기술 & 개발',
          position: 'left',
          items: [
            {label: '04. 소프트웨어 공학 및 개발 방법론', to: '/docs/software-engineering/intro'},
            {label: '05. 인프라, 운영 및 신기술 대응', to: '/docs/infrastructure-operations/intro'},
            {label: '06. 미래 기술 대응 및 도메인 특화', to: '/docs/future-technology/intro'},
          ],
        },
        {
          type: 'dropdown',
          label: '데이터 & 보안',
          position: 'left',
          items: [
            {label: '07. 데이터 관리 및 AI 거버넌스', to: '/docs/data-ai-governance/intro'},
            {label: '08. 정보보호 및 보안 거버넌스', to: '/docs/security-governance/intro'},
          ],
        },
        {
          type: 'dropdown',
          label: '경영 & 품질',
          position: 'left',
          items: [
            {label: '09. 품질 관리 및 신뢰성', to: '/docs/quality-management/intro'},
            {label: '10. 경제성 분석 및 비즈니스 의사결정', to: '/docs/economic-analysis/intro'},
            {label: '11. 현대적 조직 및 일하는 방식', to: '/docs/modern-organization/intro'},
          ],
        },
        {
          href: 'https://github.com/jeonck2000/fw-thinking',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '주제별 목차',
          items: [
            {label: '01. IT 거버넌스 및 전략 경영', to: '/docs/it-governance/intro'},
            {label: '02. 엔터프라이즈 아키텍처', to: '/docs/enterprise-architecture/intro'},
            {label: '03. 법규 및 컴플라이언스', to: '/docs/legal-compliance/intro'},
            {label: '04. 소프트웨어 공학', to: '/docs/software-engineering/intro'},
            {label: '05. 인프라, 운영 및 신기술', to: '/docs/infrastructure-operations/intro'},
            {label: '06. 미래 기술 대응', to: '/docs/future-technology/intro'},
          ],
        },
        {
          title: '이어서',
          items: [
            {label: '07. 데이터 관리 및 AI 거버넌스', to: '/docs/data-ai-governance/intro'},
            {label: '08. 정보보호 및 보안 거버넌스', to: '/docs/security-governance/intro'},
            {label: '09. 품질 관리 및 신뢰성', to: '/docs/quality-management/intro'},
            {label: '10. 경제성 분석 및 의사결정', to: '/docs/economic-analysis/intro'},
            {label: '11. 현대적 조직 및 일하는 방식', to: '/docs/modern-organization/intro'},
          ],
        },
        {
          title: '더 보기',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/jeonck2000/fw-thinking',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} 프레임워크적 사고. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;

import html from '../../../resources/imgs/skills/frontend/html.png';
import css from '../../../resources/imgs/skills/frontend/css.png';
import js from '../../../resources/imgs/skills/frontend/js.png';
import ts from '../../../resources/imgs/skills/frontend/ts.png';
import react from '../../../resources/imgs/skills/frontend/react.png';
import redux from '../../../resources/imgs/skills/frontend/redux.png';
import stateManagement from '../../../resources/imgs/skills/frontend/state_management.png';
import graphql from '../../../resources/imgs/skills/frontend/graphql.png';
import next from '../../../resources/imgs/skills/frontend/next.png';
import reactNative from '../../../resources/imgs/skills/frontend/react_native.png';
import vue from '../../../resources/imgs/skills/frontend/vue.png';
import angular from '../../../resources/imgs/skills/frontend/angular.png';
import electron from '../../../resources/imgs/skills/frontend/electron.png';
import webComponents from '../../../resources/imgs/skills/frontend/web_components.png';
import jquery from '../../../resources/imgs/skills/frontend/jquery.png';
import ionic from '../../../resources/imgs/skills/frontend/ionic.png';
import cssPreprocessors from '../../../resources/imgs/skills/frontend/css_preprocessors.png';
import stylingTools from '../../../resources/imgs/skills/frontend/styling_tools.png';
import bundlers from '../../../resources/imgs/skills/frontend/bundlers.png';
import jsTestingTools from '../../../resources/imgs/skills/frontend/js_testing_tools.png';
import pwa from '../../../resources/imgs/skills/frontend/pwa.png';

import nodejs from '../../../resources/imgs/skills/backend/nodejs.png';
import php from '../../../resources/imgs/skills/backend/php.png';
import databases from '../../../resources/imgs/skills/backend/databases.png';

import git from '../../../resources/imgs/skills/other/git.png';
import docker from '../../../resources/imgs/skills/other/docker.png';
import ciCd from '../../../resources/imgs/skills/other/ci-cd.png';
import linters from '../../../resources/imgs/skills/other/linters.png';
import infrastructureTools from '../../../resources/imgs/skills/other/infrastructure_tools.png';
import cms from '../../../resources/imgs/skills/other/cms.png';

/* eslint-disable max-len */

const frontendSkills = [
  {
    src: html,
    alt: 'HTML, as well as HTML template engines such as Pug and EJS',
  },
  {
    src: css,
    alt: 'CSS',
  },
  {
    src: js,
    alt: 'JavaScript',
  },
  {
    src: ts,
    alt: 'TypeScript and Flow',
  },
  {
    src: react,
    alt: 'React and Preact',
  },
  {
    src: redux,
    alt:
      'Redux and Redux Toolkit, as well as technologies such as RTKQuery, Redux-Saga and Redux-Thunk',
  },
  {
    src: stateManagement,
    alt: 'State management libraries such as TanStack Query, Zustand, MobX and RxJS',
  },
  {
    src: graphql,
    alt: 'GraphQL and Apollo',
  },
  {
    src: next,
    alt: 'Next.js, as well as SSR & SSG technologies such as Gatsby, Astro, Remix, HTMX and HUGO',
  },
  {
    src: reactNative,
    alt: 'React Native',
  },
  {
    src: vue,
    alt: 'Vue, as well as technologies such as Nuxt.js and Pinia',
  },
  {
    src: angular,
    alt: 'Angular, as well as technologies such as Universal and NgRx',
  },
  {
    src: electron,
    alt: 'Electron and Tauri',
  },
  {
    src: ionic,
    alt: 'Apache Cordova and Ionic',
  },
  {
    src: webComponents,
    alt: 'Web Components such as Lit and Stencil',
  },
  {
    src: jquery,
    alt: 'jQuery',
  },
  {
    src: cssPreprocessors,
    alt: 'CSS preprocessors such as SASS, LESS, Stylus and PostCSS',
  },
  {
    src: stylingTools,
    alt:
      'Styling tools such as Styled Components, Emotion, Material-UI, Ant Design, Tailwind CSS, Bootstrap, Radix UI, shadcn/ui and Headless UI',
  },
  {
    src: bundlers,
    alt: 'Bundlers such as Vite and Webpack',
  },
  {
    src: jsTestingTools,
    alt:
      'JS testing tools such as Jest, Mocha, Vitest, React Testing Library, Enzyme, Playwright, Cypress, Detox, Storybook and Loki',
  },
  {
    src: pwa,
    alt: 'PWA and AMP',
  },
];

const backendSkills = [
  {
    src: nodejs,
    alt: 'Node.js, as well as technologies such as Fastify, NestJS and Express',
  },
  {
    src: php,
    alt: 'PHP and Laravel',
  },
  {
    src: databases,
    alt: 'Databases such as MySQL, PostgreSQL, MongoDB and Firebase',
  },
];

const anotherSkills = [
  {
    src: git,
    alt: 'Git, as well as technologies such as GitHub, GitLab and Bitbucket',
  },
  {
    src: docker,
    alt: 'Docker',
  },
  {
    src: ciCd,
    alt: 'CI/CD tools such as Github Actions, GitLab CI/CD, Jenkins, App Center and Fastlane',
  },
  {
    src: linters,
    alt: 'Linters and code formatters such as ESLint, Stylelint, Prettier, OXLint and Biome.js',
  },
  {
    src: infrastructureTools,
    alt:
      'Infrastructure tools such as Terraform, AWS, Azure, GCP, Firebase, CloudFlare, Nginx and Apache',
  },
  {
    src: cms,
    alt: "CMS's such as WordPress and Strapi",
  },
];

/* eslint-enable */

const skillList = [...frontendSkills, ...anotherSkills, ...backendSkills];

export default skillList;

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
import webComponents from '../../../resources/imgs/skills/frontend/web_components.png';
import jquery from '../../../resources/imgs/skills/frontend/jquery.png';
import storybook from '../../../resources/imgs/skills/frontend/storybook.png';
import htmlTemplateEngines from '../../../resources/imgs/skills/frontend/html_template_engines.png';
import cssPreprocessors from '../../../resources/imgs/skills/frontend/css_preprocessors.png';
import cssTools from '../../../resources/imgs/skills/frontend/css_tools.png';
import bundlers from '../../../resources/imgs/skills/frontend/bundlers.png';
import jsTestingTools from '../../../resources/imgs/skills/frontend/js_testing_tools.png';
import pwa from '../../../resources/imgs/skills/frontend/pwa.png';

import nodejs from '../../../resources/imgs/skills/backend/nodejs.png';
import php from '../../../resources/imgs/skills/backend/php.png';
import laravel from '../../../resources/imgs/skills/backend/laravel.png';
import databases from '../../../resources/imgs/skills/backend/databases.png';

import git from '../../../resources/imgs/skills/other/git.png';
import docker from '../../../resources/imgs/skills/other/docker.png';
import ciCd from '../../../resources/imgs/skills/other/ci-cd.png';
import linters from '../../../resources/imgs/skills/other/linters.png';
import serverlessAndServers from '../../../resources/imgs/skills/other/serverless_&_servers.png';
import cms from '../../../resources/imgs/skills/other/cms.png';

/* eslint-disable max-len */

const frontendSkills = [
  {
    src: html,
    alt: 'HTML',
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
    alt: 'Redux and Redux Toolkit, as well as technologies such as Redux-Saga and Redux-Thunk',
  },
  {
    src: stateManagement,
    alt: 'State management libraries such as MobX, RxJS, Recoil, and Effector',
  },
  {
    src: graphql,
    alt: 'GraphQL and Apollo',
  },
  {
    src: next,
    alt: 'Next.js, as well as SSR & SSG technologies such as Gatsby, HUGO, and Remix',
  },
  {
    src: reactNative,
    alt: 'React Native',
  },
  {
    src: vue,
    alt: 'Vue, as well as technologies such as Nuxt.js and Vuex',
  },
  {
    src: webComponents,
    alt:
      'Web Components, as well as technologies such as Stencil.js, Polymer, Bit, Lit-html, LitElement, FAST, SolidJS, Skate.js, Slim.js and Clarity Core',
  },
  {
    src: jquery,
    alt: 'jQuery',
  },
  {
    src: storybook,
    alt: 'Storybook, as well as technologies such as Loki and JSDoc',
  },
  {
    src: htmlTemplateEngines,
    alt: 'HTML template engines such as Pug, EJS and Blade',
  },
  {
    src: cssPreprocessors,
    alt: 'CSS preprocessors such as SASS, LESS, Stylus and PostCSS',
  },
  {
    src: cssTools,
    alt:
      'CSS tools such as Styled Components, Emotion, Styled JSX, Material-UI, Ant Design, Tailwind CSS, Bootstrap, Materialize, Foundation and Skeleton',
  },
  {
    src: bundlers,
    alt:
      'Bundlers and task managers such as Webpack, Gulp, ESBuild, Rollup.js, Parcel Snowpack and Bower',
  },
  {
    src: jsTestingTools,
    alt:
      'JS testing tools such as Jest, Enzyme, Testing Library (RTL), Cypress, WebdriverIO, Puppeteer, Mocha, Karma, Jasmine and Chai',
  },
  {
    src: pwa,
    alt: 'PWA and AMP',
  },
];

const backendSkills = [
  {
    src: nodejs,
    alt: 'Node.js',
  },
  {
    src: php,
    alt: 'PHP',
  },
  {
    src: laravel,
    alt: 'Laravel',
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
    alt:
      'CI/CD tools such as Github Actions, GitLab CI/CD, Travis CI, Jenkins, App Center, and Fastlane',
  },
  {
    src: linters,
    alt: 'Linters and code formatters such as ESLint, Stylelint and Prettier',
  },
  {
    src: serverlessAndServers,
    alt: 'Serverless and servers such as AWS, Azure, GCP, Firebase, Nginx and Apache',
  },
  {
    src: cms,
    alt: "CMS's such as Expression.Cloud and WordPress",
  },
];

/* eslint-enable */

const skillList = [...frontendSkills, ...anotherSkills, ...backendSkills];

export default skillList;

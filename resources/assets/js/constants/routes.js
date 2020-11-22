import { lazy } from 'react';

import URLS from './urls';

const Skills = lazy(() => import('../components/Skills/Skills'));
const Contact = lazy(() => import('../components/Contact/Contact'));
const Home = lazy(() => import('../components/Home/Home'));
const Portfolio = lazy(
  () =>
    new Promise(resolve =>
      setTimeout(() => resolve(import('../components/Portfolio/Portfolio')), 3000),
    ),
);

const { urlSkills, urlContacts, urlPortfolio, urlHome } = URLS;

const routes = [
  {
    component: Skills,
    path: urlSkills,
  },
  {
    component: Contact,
    path: urlContacts,
  },
  {
    component: Portfolio,
    path: urlPortfolio,
  },
  {
    component: Home,
    path: urlHome,
    exact: true,
  },
];

export default routes;

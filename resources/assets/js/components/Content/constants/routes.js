import { lazy } from 'react';

import URLS from '../../../constants/urls';

const Skills = lazy(() => import('../../Skills/Skills'));
const Contact = lazy(() => import('../../Contact/Contact'));
const Home = lazy(() => import('../../Home/Home'));
const Portfolio = lazy(
  () =>
    new Promise(resolve => setTimeout(() => resolve(import('../../Portfolio/Portfolio')), 3000)),
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

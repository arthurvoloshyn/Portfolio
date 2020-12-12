import URLS from '../../../constants/urls';

const { portfolio, skills, contacts } = URLS;

const menuList = [
  {
    title: 'Home',
    icon: 'home',
  },
  {
    title: 'Portfolio',
    icon: 'trophy',
    page: portfolio,
  },
  {
    title: 'Skills',
    icon: 'graduation-cap',
    page: skills,
  },
  {
    title: 'Contact me',
    icon: 'envelope',
    page: contacts,
  },
];

export default menuList;

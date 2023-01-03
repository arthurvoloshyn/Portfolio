import SOCIAL_NETWORK from '../../../constants/socialNetwork';

const socialNetworkList = [
  {
    id: 'linkedIn',
    link: SOCIAL_NETWORK.linkedIn,
    target: '_blank',
  },
  {
    id: 'git',
    link: SOCIAL_NETWORK.gitHub,
    target: '_blank',
  },
  {
    id: 'email',
    link: `mailto:${SOCIAL_NETWORK.email}`,
    target: '_self',
  },
];

export default socialNetworkList;

import skillList from '../constants/skillList';
import { chunkArray } from './utils';

const getSkills = () => {
  const list = chunkArray(skillList, 16);

  return list.map(subList => chunkArray(subList, 4));
};

export default getSkills;

import chunkArray from '../utils/chunkArray';
import skillList from '../constants/skillList';

const getSkills = () => {
  const list = chunkArray(skillList, 15);

  return list.map(subList => chunkArray(subList, 5));
};

export default getSkills;

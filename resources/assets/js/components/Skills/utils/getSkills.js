import { skillsList } from './skillsList';
import { chunkArray } from './chunkArray';

export const getSkills = () => {
  const list = chunkArray(skillsList, 16);

  const res = list.map(subList => chunkArray(subList, 4));

  return res;
};

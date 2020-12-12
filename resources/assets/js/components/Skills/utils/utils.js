import skillList from '../constants/skillList';

export const chunkArray = (myArray, chunkSize) => {
  const results = [];

  while (myArray.length) {
    const subArray = myArray.splice(0, chunkSize);

    results.push(subArray);
  }

  return results;
};

const getSkills = () => {
  const list = chunkArray(skillList, 16);

  return list.map(subList => chunkArray(subList, 4));
};

export default getSkills;

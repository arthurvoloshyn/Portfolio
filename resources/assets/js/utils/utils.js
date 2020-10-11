export const chunkArray = (myArray, chunkSize) => {
  const results = [];

  while (myArray.length) {
    const subArray = myArray.splice(0, chunkSize);

    results.push(subArray);
  }

  return results;
};

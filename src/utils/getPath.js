const getPath = () => {
  const { href } = window.location;
  const pathName = href.split('/')[3];

  return pathName.split('#');
};

export default getPath;

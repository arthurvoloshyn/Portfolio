export const getStylesList = (type, list) => {
  const styleClasses = {};

  list.forEach(item => {
    let styleClass;

    if (item === 'main' || item === 'skills' || item === 'contacts') {
      styleClass = 'normal';
    } else if (item === 'portfolio' || item === 'first-slide') {
      styleClass = 'linkful';
    } else if (item === 'cherry-pick') {
      styleClass = 'cherry';
    } else if (item === 'compareip') {
      styleClass = 'compareIp';
    } else if (item === 'casino') {
      styleClass = 'neocore';
    } else {
      styleClass = item;
    }

    styleClasses[item] = `${type}-${styleClass}`;
  });

  return styleClasses;
};

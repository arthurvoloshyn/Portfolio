import linkList from '../../../constants/linkList';

const getStylesList = type => {
  const styleClasses = {};

  linkList.forEach(item => {
    let styleClass;

    switch (item) {
      case 'main':
      case 'skills':
      case 'contacts':
        styleClass = 'normal';
        break;
      case 'portfolio':
      case 'first-slide':
        styleClass = 'linkful';
        break;
      case 'cherry-pick':
        styleClass = 'cherry';
        break;
      case 'compareip':
        styleClass = 'compareIp';
        break;
      case 'casino':
        styleClass = 'neocore';
        break;
      default:
        styleClass = item;
    }

    styleClasses[item] = `${type}-${styleClass}`;
  });

  return styleClasses;
};

export default getStylesList;

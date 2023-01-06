const updateItemClasses = selectors => (sectionClassName, withAdding) => {
  const items = document.querySelectorAll(selectors);
  const classMethod = withAdding ? 'add' : 'remove';

  items.forEach(item => item.classList[classMethod](sectionClassName));
};

const defaultFullPageMenuItemSelector = '#fp-nav ul li a span';
export const updateMenuClasses = updateItemClasses(defaultFullPageMenuItemSelector);

export default updateItemClasses;

const updateMenuClasses = (sectionClassName, withAdding) => {
  const menuItems = document.querySelectorAll('#fp-nav ul li a span');
  const classMethod = withAdding ? 'add' : 'remove';

  menuItems.forEach(menuItem => menuItem.classList[classMethod](sectionClassName));
};

export default updateMenuClasses;

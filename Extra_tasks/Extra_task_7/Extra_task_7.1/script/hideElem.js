const hideElem = (event) => {
  const elem = event.target;
  const sibling = elem.nextSibling;

  if (sibling?.tagName === 'UL') {
    sibling.classList.toggle('hide');
  }
};

const hideElem = (event) => {
  const elem = event.target;
  const sibling = elem.nextSibling;

  console.log(sibling?.tagName);
  if (sibling?.tagName === 'UL') {
    sibling.classList.toggle('hide');
  }
};

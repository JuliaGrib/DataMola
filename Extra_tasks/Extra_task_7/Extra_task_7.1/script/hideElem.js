const hideElem = () => {
  const elem = event.target;
  const sibling = elem.nextSibling;
  if (!sibling) {
    return true;
  }
  if (sibling.tagName === 'UL') {
    sibling.classList.toggle('hide');
  }
};

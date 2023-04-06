createList('Заголовок', tree);

const ul = document.querySelector('ul');
ul.addEventListener('click', (event) => {
  const elem = event.target;
  const sibling = elem.nextSibling;

  if (sibling?.tagName === 'UL') {
    sibling.classList.toggle('hide');
  }
});

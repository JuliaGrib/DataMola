const createUl = (arr) => {
  let sum = '';
  arr.forEach((node) => {
    sum += `<li>${node.value}</li>`;

    if (!node.children) {
      return node.value;
    }

    sum += createUl(node.children);
  });

  let ul = `<ul>${sum}</ul>`;

  return ul;
};

const createList = (title, tree) => {
  document.body.innerHTML = `
    <h2>${title}</h2>
    ${createUl(tree)}
    `;
};

createList('Заголовок h2', tree);

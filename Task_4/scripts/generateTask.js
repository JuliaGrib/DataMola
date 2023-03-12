const cols = document.querySelectorAll(".col");

function findValue(elem) {
  return elem.innerHTML;
}

function makeCard(obj, parent) {
  const card = document.createElement("article");
  const cardHeader = document.createElement("div");
  const priority = document.createElement("span");

  priority.innerHTML = obj.priority;

  card.classList.add("card");
  cardHeader.classList.add("card__header");
  priority.classList.add("priority", `priority_${obj.priority.toLowerCase()}`);

  parent.appendChild(card);
  card.appendChild(cardHeader);
  cardHeader.appendChild(priority);
}

cols.forEach((elem) => {
  const titleCol = findValue(elem.querySelector(".title_col"));
  const colWrap = elem.querySelector(".col__wrap");
  const tasks = moduleTasks.getTasks(0, 10, { status: titleCol });
  tasks.forEach((elem) => makeCard(elem, colWrap));
});

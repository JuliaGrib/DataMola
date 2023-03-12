const cols = document.querySelectorAll(".col");

function findValue(elem) {
  return elem.innerHTML;
}

function makeCard(obj, parent) {
  const card = document.createElement("article");
  const cardHeader = document.createElement("div");
  const priority = document.createElement("span");
  const cardTools = document.createElement("div");
  const cardIconChange = document.createElement("a");
  const cardIconDel = document.createElement("a");

  priority.innerHTML = obj.priority;
  cardIconChange.innerHTML = ICONS.icon_change;
  cardIconDel.innerHTML = ICONS.icon_del;
  cardIconChange.href = LINKS.empty;
  cardIconDel.href = LINKS.empty;

  card.classList.add("card");
  cardHeader.classList.add("card__header");
  priority.classList.add("priority", `priority_${obj.priority.toLowerCase()}`);
  cardTools.classList.add("card__tools");
  cardIconChange.classList.add("icon", "icon_change");
  cardIconDel.classList.add("icon", "icon_del");

  parent.appendChild(card);
  card.appendChild(cardHeader);
  cardHeader.appendChild(priority);
  cardHeader.appendChild(cardTools);
  cardTools.appendChild(cardIconChange);
  cardTools.appendChild(cardIconDel);
}

cols.forEach((elem) => {
  const titleCol = findValue(elem.querySelector(".title_col"));
  const colWrap = elem.querySelector(".col__wrap");
  const tasks = moduleTasks.getTasks(0, 10, { status: titleCol });
  tasks.forEach((elem) => makeCard(elem, colWrap));
});

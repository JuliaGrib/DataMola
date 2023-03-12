const cols = document.querySelectorAll(".col");

function findValue(elem) {
  return elem.innerHTML;
}

function makeCard(obj, parent) {
  const card = document.createElement("div");
  card.classList.add("card");
  parent.appendChild(card);
}

cols.forEach((elem) => {
  const titleCol = findValue(elem.querySelector(".title_col"));
  const colWrap = elem.querySelector(".col__wrap");
  const tasks = moduleTasks.getTasks(0, 10, { status: titleCol });
  tasks.forEach((elem) => makeCard(elem, colWrap));
});

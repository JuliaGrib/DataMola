const cols = document.querySelectorAll(".col");

function findValue(elem) {
  return elem.innerHTML;
}

function isPrivate(value) {
  return value ? "Private" : "Public";
}

function makeCard(obj, parent) {
  parent.innerHTML += `
  <article class="card">
    <div class="card__header">
        <span class="priority priority_${obj.priority.toLowerCase()}">
            ${obj.priority}
        </span>
        <div class="card__tools">
            <a href="#" class="icon icon_change">
                ${ICONS.icon_change}
            </a>
            <a href="#" class="icon icon_del">
                ${ICONS.icon_del}
            </a>
        </div>
    </div>
    <div class="card__info">
        <h3 class="title title_card">${obj.name}</h3>
        <p class="card__descr">
          ${obj.description}
        </p>
        <div class="card__additional">
            <span class="card__assignee">
              ${obj.assignee}
            </span>
            <span class="card__line"></span>
            <span class="card__privacy">
                ${isPrivate(obj.isPrivate)}
            </span>
            <span class="card__line"></span>
            <div class="card__comments">
                  ${ICONS.icon_com}
                <span class="card__comment-count">
                  ${obj.comments.length}
                </span>
            </div>
        </div>
    </div>
    <hr class="line line_dashed">
    <div class="card__footer">
        <span class="card__date">
            <time datetime="${obj.createdAt}">
            ${String(obj.createdAt).slice(0, 15)}</time>
        </span>
        <span class="card__status">
            ${obj.status}
        </span>
    </div>
</article>
  `;
}

cols.forEach((elem) => {
  const titleCol = findValue(elem.querySelector(".title_col"));
  const colWrap = elem.querySelector(".col__wrap");
  const tasks = moduleTasks.getTasks(0, 10, { status: titleCol });
  tasks.forEach((elem) => makeCard(elem, colWrap));
});

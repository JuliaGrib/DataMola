const cols = document.querySelectorAll(".col");

function findValue(elem) {
  return elem.innerHTML;
}

function isPrivate(value) {
  return value ? "Private" : "Public";
}

function makeCard(obj, parent) {
  const card = document.createElement(HTML_ELEMENTS.article);
  const cardHeader = document.createElement(HTML_ELEMENTS.div);
  const priority = document.createElement(HTML_ELEMENTS.span);
  const cardTools = document.createElement(HTML_ELEMENTS.div);
  const cardIconChange = document.createElement(HTML_ELEMENTS.a);
  const cardIconDel = document.createElement(HTML_ELEMENTS.a);
  const cardInfo = document.createElement(HTML_ELEMENTS.div);
  const cardTitle = document.createElement(HTML_ELEMENTS.h3);
  const cardDescr = document.createElement(HTML_ELEMENTS.p);
  const cardAdditional = document.createElement(HTML_ELEMENTS.div);
  const cardAssignee = document.createElement(HTML_ELEMENTS.span);
  const cardLine = document.createElement(HTML_ELEMENTS.span);
  const cardLine2 = document.createElement(HTML_ELEMENTS.span);
  const cardPrivacy = document.createElement(HTML_ELEMENTS.span);
  const cardCom = document.createElement(HTML_ELEMENTS.div);
  const cardComIcon = document.createElement(HTML_ELEMENTS.span);
  const cardComCount = document.createElement(HTML_ELEMENTS.span);
  const line = document.createElement(HTML_ELEMENTS.hr);
  const cardFooter = document.createElement(HTML_ELEMENTS.div);
  const cardTime = document.createElement(HTML_ELEMENTS.span);
  const time = document.createElement(HTML_ELEMENTS.time);
  const cardStatus = document.createElement(HTML_ELEMENTS.span);

  priority.innerHTML = obj.priority;
  cardIconChange.innerHTML = ICONS.icon_change;
  cardIconDel.innerHTML = ICONS.icon_del;
  cardIconChange.href = LINKS.empty;
  cardIconDel.href = LINKS.empty;
  cardTitle.innerHTML = obj.name;
  cardDescr.innerHTML = obj.description;
  cardAssignee.innerHTML = obj.assignee;
  cardPrivacy.innerHTML = isPrivate(obj.isPrivate);
  cardComIcon.innerHTML = ICONS.icon_com;
  cardComCount.innerHTML = obj.comments.length;
  time.innerHTML = String(obj.createdAt).slice(0, 15);
  time.setAttribute("datetime", obj.createdAt);
  cardStatus.innerHTML = obj.status;

  card.classList.add(HTML_CLASS.card.card);
  cardHeader.classList.add(HTML_CLASS.card.header);
  priority.classList.add(
    HTML_CLASS.priority,
    `${HTML_CLASS.priority}_${obj.priority.toLowerCase()}`
  );
  cardTools.classList.add(HTML_CLASS.card.tools);
  cardIconChange.classList.add(HTML_CLASS.icon.icon, HTML_CLASS.icon.change);
  cardIconDel.classList.add(HTML_CLASS.icon.icon, HTML_CLASS.icon.del);
  cardInfo.classList.add(HTML_CLASS.card.info);
  cardTitle.classList.add(HTML_CLASS.title.title, HTML_CLASS.title.card);
  cardDescr.classList.add(HTML_CLASS.card.descr);
  cardAdditional.classList.add(HTML_CLASS.card.additional);
  cardAssignee.classList.add(HTML_CLASS.card.assignee);
  cardLine.classList.add(HTML_CLASS.card.line);
  cardLine2.classList.add(HTML_CLASS.card.line);
  cardPrivacy.classList.add(HTML_CLASS.card.privacy);
  cardCom.classList.add(HTML_CLASS.card.com);
  cardComCount.classList.add(HTML_CLASS.comCount);
  line.classList.add(HTML_CLASS.line.line, HTML_CLASS.line.dashed);
  cardFooter.classList.add(HTML_CLASS.card.footer);
  cardTime.classList.add(HTML_CLASS.card.date);
  cardStatus.classList.add(HTML_CLASS.card.status);

  parent.appendChild(card);
  card.appendChild(cardHeader);
  cardHeader.appendChild(priority);
  cardHeader.appendChild(cardTools);
  cardTools.appendChild(cardIconChange);
  cardTools.appendChild(cardIconDel);
  card.appendChild(cardInfo);
  cardInfo.appendChild(cardTitle);
  cardInfo.appendChild(cardDescr);
  cardInfo.appendChild(cardAdditional);
  cardAdditional.appendChild(cardAssignee);
  cardAdditional.appendChild(cardLine);
  cardAdditional.appendChild(cardPrivacy);
  cardAdditional.appendChild(cardLine2);
  cardAdditional.appendChild(cardCom);
  cardCom.appendChild(cardComIcon);
  cardCom.appendChild(cardComCount);
  card.appendChild(line);
  card.appendChild(cardFooter);
  cardFooter.appendChild(cardTime);
  cardTime.appendChild(time);
  cardFooter.appendChild(cardStatus);
}

cols.forEach((elem) => {
  const titleCol = findValue(elem.querySelector(".title_col"));
  const colWrap = elem.querySelector(".col__wrap");
  const tasks = moduleTasks.getTasks(0, 10, { status: titleCol });
  tasks.forEach((elem) => makeCard(elem, colWrap));
});

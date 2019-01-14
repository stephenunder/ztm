const button = document.getElementById("enter");
const input = document.getElementById("userinput");
const ul = document.querySelector("ul");
const listItems = document.getElementsByTagName("li");

function inputLength() {
  return input.value.length
}

function listLength() {
  return listItems.length;
}

function removeParent(event) {
  event.target.parentNode.remove();
}

function createListElement() {
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  input.value = "";

  const delBtn = document.createElement("button");
  delBtn.appendChild(document.createTextNode("Delete!"));
  li.appendChild(delBtn);
  delBtn.addEventListener("click", removeParent);
}

function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement();
  }
}

function addListAfterKeypress(event) {
  if (inputLength() > 0 && event.keyCode === 13) {
    createListElement();
  }
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

ul.addEventListener("click", event => {
  const target = event.target;
  target.classList.toggle("done");
});

function deleteButton() {
  const btn = document.createElement("button");
  btn.appendChild(document.createTextNode("Delete!"));
  listItems[i].appendChild(btn);
  btn.addEventListener("click", removeParent);
}

for (i = 0; i < listLength(); i++) {
  deleteButton();
}
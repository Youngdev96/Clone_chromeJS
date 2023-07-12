const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

// 투두리스트 제거
function deleteToDo(event) {
  const li = event.target.parentElement;
  // event의 속성중 html element인 타켓에서 parentElement(부모요소)인 속성의 값을 실행한다.
  li.remove();
}

// 투두리스트 생성
function paintToDo(newToDo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = newToDo;
  const button = document.createElement("button");
  button.innerText = "삭제";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = "";
  paintToDo(newToDo); //paintToDo 라는 새로운 함수에 값을 보낸다.
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODO_KEY = "todos";

let toDos = [];

// 투두리스트 localStorage에 저장
function saveToDos() {
  localStorage.setItem(TODO_KEY, JSON.stringify(toDos));
}

// 투두리스트 화면상 제거
function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  //toDo.id 와 li.id 의 데이터 타입이 다르기에 parseInt로 li.id를 number 데이터 타입으로 변환.
  // toDo는 toDos DB에 있는 요소 중 하나.
  saveToDos();
}

// 투두리스트 생성
function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const button = document.createElement("button");
  button.innerText = "삭제";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newToDoObj = {
    text: newTodo,
    id: Date.now(),
    // 삭제하기 위해선 text만 설정하는 것이 아니라 date.now로 고유한 값을 id에 넣어서
    // 각각의 li item 을 구별
  };
  toDos.push(newToDoObj);
  paintToDo(newToDoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

// 로컬스토리지에 저장된 데이터를 GET
const savedToDos = localStorage.getItem(TODO_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}

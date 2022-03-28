const toDoForm = document.querySelector('#todo-form');

const toDoInput = toDoForm.querySelector('input');
const toDoList = document.querySelector('#todo-list');

function handleToDoSubmit(event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = '';

  paintTODO(newToDo);
}
function deleteToDo(event){
    
    console.log(event);
}

function paintTODO(newTodo) {
  const li = document.createElement('li');
  const span = document.createElement('span');
  span.innerText = newTodo;
  const button = document.createElement('button');
  //window + . for open emoji
  button.innerText = '❌';
  button.addEventListener('click', deleteToDo);
  li.appendChild(span);
  li.appendChild(button);

  toDoList.appendChild(li);
}

toDoForm.addEventListener('submit', handleToDoSubmit);

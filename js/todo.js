const toDoForm = document.getElementById("todo-form")
const toDoInput = document.querySelector("#todo-form input")
const toDoList = document.getElementById("todo-list")
const todos_key = "todos"
let toDos =[]

function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove()
    toDos = toDos.filter((todo)=> todo.id !== parseInt(li.id))
    saveToDos()
}


function paintTodo(newTodo){
    const li =document.createElement("li")
    li.id= newTodo.id
    const span = document.createElement("span")
    const button = document.createElement("button")
    button.innerText="X"
    button.addEventListener("click", deleteToDo)
    li.appendChild(span)
    li.appendChild(button)
    span.innerText =newTodo.text
    toDoList.appendChild(li)
}
function saveToDos(){
    localStorage.setItem(todos_key,JSON.stringify(toDos))
}


function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = ""
    const newTodoObj = {
        text: newTodo,
        id: Date.now()
    }
    toDos.push(newTodoObj)
    paintTodo(newTodoObj) 
    saveToDos()
}

toDoForm.addEventListener("submit", handleToDoSubmit)

const savedTodos = localStorage.getItem(todos_key);

if (savedTodos !== null){
    const parsedTodos =JSON.parse(savedTodos)
    toDos = parsedTodos
    parsedTodos.forEach(paintTodo);
}
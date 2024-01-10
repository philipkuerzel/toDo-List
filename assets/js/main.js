let todos = [];
const newTask = document.querySelector(".input");

// eventListener that calls the "addTaskToArray" function when enter key is pressed
newTask.addEventListener("keyup" , (event) => {
    if (event.key === "Enter"){
        addTaskToArray()
    }
})

// function to add new tasks as object to the array
const addTaskToArray = () => {
    const newTodo = {text: newTask.value, done: false};

    todos.push(newTodo);
    newTask.value = "";
    displayTasks();
};

// function to show added tasks
const displayTasks = () => {
    const todoList = document.querySelector(".taskItems");
    todoList.innerHTML = "";

    todos.forEach((todo, index) => {
    const task = document.createElement("li");
    task.innerHTML = `
            <input type="checkbox" class="checkbox" ${
                todo.done ? "checked" : ""
            } onchange="taskDone(${index})">
            <span class="taskName" ${
                todo.done ? 'style="text-decoration: line-through;"' : ""
            }>${todo.text}</span>
            <span class="delBtn" onclick="delTask(${index})">🗑️</span>
            `;
        todoList.appendChild(task);
    });
};

// function which toggles the 'done' status of a task in a todo list.
const taskDone = (index) => {
    // Toggle the 'done' property of the task at the specified index in the 'todos' array.
    todos[index].done = !todos[index].done;
    displayTasks();
};

// function to delete tasks from the list
const delTask = (index) => {
    if (todos[index].done) {    //check if the task is done or not
        todos.splice(index, 1); //remove element
        displayTasks();
    }else {
        alert("Bist du dir sicher, dass du diese Aufgabe löschen möchtest?") // alert if the task is not done (checkbox not checked)
    }
};

displayTasks()
const addTaskBtn = document.getElementById('add-task-btn');
const deskTaskInput = document.getElementById('description-task');
const todosWrapper = document.querySelector('.todos-wrapper');

let tasks = [];

function Task(description) {
  this.description = description;
  this.completed = false;
}

addTaskBtn.addEventListener('click', () => {
  tasks.push(new Task(deskTaskInput.value));
  console.log(tasks);
})

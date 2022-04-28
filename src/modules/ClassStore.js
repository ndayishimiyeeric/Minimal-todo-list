export default class Tasks {
  constructor() {
    this.tasksArray = JSON.parse(localStorage.getItem('tasks')) || [];
  }

  displayTasks() {
    const taskDiv = document.querySelector('.todo-tasks');
    taskDiv.innerHTML = '';
    this.tasksArray.sort((taskOne, taskTwo) => { //eslint-disable-line
    return taskOne.index - taskTwo.index; //eslint-disable-line
    }).forEach((task) => {
      const taskElement = document.createElement('div');
      taskElement.classList.add('task');
      taskDiv.appendChild(taskElement);
      taskElement.innerHTML = `
        <input type="checkbox" id="${task.index}" />
        <textarea class="textarea" for="${task.index}">${task.description}</textarea>
        <span class="delete">&cross;</span>
       `;
    });

    const deleteBtn = document.querySelectorAll('.delete');
    deleteBtn.forEach((btn, index) => {
      btn.addEventListener('click', () => {
        this.removeTask(index);
      });
    });
    const textareaEvent = document.querySelectorAll('.textarea');
    for (let i = 0; i < textareaEvent.length; i += 1) {
      textareaEvent[i].addEventListener('focusout', (e) => {
        if (e.target.value) {
          this.updateTask(e.target.parentElement.firstElementChild.id, e.target.value);
        } else return; //eslint-disable-line
      });
    }
  }

  addTask(description) {
    const task = {
      description,
      index: this.tasksArray.length + 1,
      complete: false,
    };
    this.tasksArray.push(task);
    localStorage.setItem('tasks', JSON.stringify(this.tasksArray));
    this.displayTasks();
  }

  removeTask(index) {
    this.tasksArray.splice(index, 1);
    localStorage.setItem('tasks', JSON.stringify(this.tasksArray));
    this.displayTasks();
  }

  updateTask(index, newdescription) {
    for (let task of this.tasksArray) { //eslint-disable-line
      if (task.index == index) {  //eslint-disable-line
        task.description = newdescription;
      }
    }
    localStorage.setItem('tasks', JSON.stringify(this.tasksArray));
  }
}
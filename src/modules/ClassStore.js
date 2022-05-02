/* eslint-disable eqeqeq */
export default class Tasks {
  constructor() {
    this.tasksArray = JSON.parse(localStorage.getItem('tasks')) || [];
  }

  displayTasks() {
    const taskDiv = document.querySelector('.todo-tasks');
    taskDiv.innerHTML = '';
    this.tasksArray.sort((taskOne, taskTwo) => taskOne.index - taskTwo.index).forEach((task) => {
      const taskElement = document.createElement('div');
      taskElement.classList.add('task');
      taskDiv.appendChild(taskElement);
      taskElement.innerHTML = `
        <input class="checkbox" type="checkbox" id="${task.index}" />
        <textarea class="textarea" for="${task.index}">${task.description}</textarea>
        <span class="delete"><i class="fa-solid fa-trash-can"></i></span>
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
        e.target.parentElement.style.background = '#fff';
        if (e.target.value) {
          this.updateTask(e.target.parentElement.firstElementChild.id, e.target.value);
        }
        if (e.target.previousElementSibling.checked) {
          e.target.style.textDecoration = 'line-through';
        }
      });
      textareaEvent[i].addEventListener('focusin', (e) => {
        e.target.parentElement.style.background = '#E9E4F0';
        e.target.style.background = 'transparent';
        e.target.style.textDecoration = 'none';
      });
    }

    const checkboxInputs = document.querySelectorAll('input[type=checkbox]');
    for (let i = 0; i < checkboxInputs.length; i += 1) {
      checkboxInputs[i].addEventListener('change', (e) => {
        for (let task of this.tasksArray) {//eslint-disable-line
          if (task.index == e.target.id) {
            if (e.target.checked) {
              task.complete = true;
              e.target.nextElementSibling.style.textDecoration = 'line-through';
            } else {
              task.complete = false;
              e.target.nextElementSibling.style.textDecoration = 'none';
            }
          }
        }
        localStorage.setItem('tasks', JSON.stringify(this.tasksArray));
      });
    }

    document.addEventListener('DOMContentLoaded', () => {
      const checkedBoxs = document.querySelectorAll('.checkbox');
      for (let i = 0; i < checkedBoxs.length; i += 1) {
        for (let task of this.tasksArray) {//eslint-disable-line
          if (checkedBoxs[i].id == task.index) {
            if (task.complete == true) {
              checkedBoxs[i].checked = true;
            } else {
              checkedBoxs[i].checked = false;
            }
          }
        }
      }
    });
  }

  addTask(description) {
    const task = {
      description,
      index: Date.now().toString(),
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
    for (let task of this.tasksArray) {//eslint-disable-line
      if (task.index == index) {
        task.description = newdescription;
      }
    }
    localStorage.setItem('tasks', JSON.stringify(this.tasksArray));
  }
}

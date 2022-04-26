import './styles/main.scss';

const todoTasks = document.querySelector('.todo-tasks');

const tasks = [
  {
    description: 'Task one',
    complete: false,
    index: 5,
  },

  {
    description: 'Task two',
    complete: false,
    index: 3,
  },

  {
    description: 'Task three',
    complete: false,
    index: 4,
  },
];

tasks.sort((taskOne, taskTwo) => { //eslint-disable-line
  return taskOne.index - taskTwo.index;
}).forEach((task) => {
  const taskElement = document.createElement('div');
  taskElement.classList.add('task');
  todoTasks.appendChild(taskElement);
  taskElement.innerHTML = `
  <input type="checkbox" id="${task.index}" />
  <label for="${task.index}">${task.description}</label>
  <span>&cross;</span>
  `;
});

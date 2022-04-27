import './styles/main.scss';
import Tasks from './modules/ClassStore.js';

const addForm = document.querySelector('#add-task');

const tasksCollection = new Tasks();
tasksCollection.displayTasks();

addForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const inputTaskValue = document.querySelector('#input-add-task').value;
  if (inputTaskValue === null || inputTaskValue === '') return;
  tasksCollection.addTask(inputTaskValue);
  document.querySelector('#input-add-task').value = '';
});

document.querySelector('.reflesh').addEventListener('click', tasksCollection.displayTasks);
const taskInput = document.getElementById('task-input');
const taskTime = document.getElementById('task-time');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');
const dateTimeDisplay = document.getElementById('date-time');
const addDateBtn = document.getElementById('add-date-btn');

function updateDateTime() {
  const now = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
  dateTimeDisplay.textContent = now.toLocaleDateString('en-US', options);
}
setInterval(updateDateTime, 1000);

addTaskBtn.addEventListener('click', addTask);
addDateBtn.addEventListener('click', addDateToTask);

function addTask() {
  const taskText = taskInput.value.trim();
  const taskTimeValue = taskTime.value;
  if (taskText === '') {
    alert('Please enter a task');
    return;
  }

  const taskItem = document.createElement('li');
  taskItem.className = 'task-item';

  const taskTextSpan = document.createElement('span');
  taskTextSpan.textContent = taskTimeValue ? `${taskTimeValue} - ${taskText}` : taskText;

  const taskActions = document.createElement('div');
  taskActions.className = 'task-actions';

  const completeBtn = document.createElement('button');
  completeBtn.innerHTML = '&#10003;';
  completeBtn.className = 'complete-btn';
  completeBtn.addEventListener('click', () => {
    taskItem.classList.toggle('completed');
  });

  const deleteBtn = document.createElement('button');
  deleteBtn.innerHTML = '&#10006;';
  deleteBtn.className = 'delete-btn';
  deleteBtn.addEventListener('click', () => {
    taskList.removeChild(taskItem);
  });

  taskActions.appendChild(completeBtn);
  taskActions.appendChild(deleteBtn);
  taskItem.appendChild(taskTextSpan);
  taskItem.appendChild(taskActions);

  taskList.appendChild(taskItem);
  taskInput.value = '';
  taskTime.value = '';
}

function addDateToTask() {
  const now = new Date();
  const formattedDate = now.toLocaleDateString('en-US');
  taskInput.value += ` [${formattedDate}]`;
}
// script.js
function addTask() {
    const newTaskInput = document.getElementById('new-task');
    const taskList = document.getElementById('task-list');
  
    if (newTaskInput.value.trim() === '') {
      alert('Please enter a valid task.');
      return;
    }
  
    const taskText = document.createTextNode(newTaskInput.value);
  
    const listItem = document.createElement('li');
    listItem.appendChild(taskText);
  
    const deleteButton = document.createElement('button');
    deleteButton.appendChild(document.createTextNode('Delete'));
    deleteButton.className = 'delete-button';
    deleteButton.onclick = function() {
      taskList.removeChild(listItem);
    };
  
    listItem.appendChild(deleteButton);
  
    taskList.appendChild(listItem);
  
    newTaskInput.value = '';
  }
  
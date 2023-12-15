function addTask() {
    const input = document.getElementById('newTaskInput');
    const taskList = document.getElementById('taskList');
    const taskText = input.value.trim();
  
    if (taskText !== '') {
      const li = document.createElement('li');
      li.textContent = taskText;
      taskList.appendChild(li);
      input.value = '';
    } else {
      alert('Please enter a valid task.');
    }
  }
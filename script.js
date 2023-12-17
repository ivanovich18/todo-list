function addTask() {
    var taskInput = document.getElementById('task-input');
    var taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    var tasksList = document.getElementById('tasks');
    var newTask = document.createElement('li');
    newTask.textContent = taskText;
    tasksList.appendChild(newTask);

    // Clear the input field
    taskInput.value = '';
}
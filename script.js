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

function handleTaskClick(event) {
    if (event.target.tagName === 'LI') {
        toggleTaskStatus(event.target);
    }
}

function toggleTaskStatus(task) {
    if (!task.classList.contains('completed')) {
        task.classList.add('completed');
    } else {
        // Double-click deletes the task
        task.remove();
    }
}
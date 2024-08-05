document.addEventListener('DOMContentLoaded', function() {
    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('task-input');
    const prioritySelect = document.getElementById('priority-select');
    const taskList = document.getElementById('task-list');
    const completedList = document.getElementById('completed-list');

    taskForm.addEventListener('submit', addTask);

    function addTask(e) {
        e.preventDefault();
        const taskText = taskInput.value;
        const priority = prioritySelect.value;
        const now = new Date();
        const dateTime = `${now.toLocaleDateString()} ${now.toLocaleTimeString()}`;

        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${taskText} (${dateTime}) - Priority: ${priority}`));

        const completeButton = document.createElement('span');
        completeButton.appendChild(document.createTextNode('Complete'));
        completeButton.className = 'complete';
        completeButton.addEventListener('click', completeTask);

        const editButton = document.createElement('span');
        editButton.appendChild(document.createTextNode('Edit'));
        editButton.className = 'edit';
        editButton.addEventListener('click', editTask);

        const deleteButton = document.createElement('span');
        deleteButton.appendChild(document.createTextNode('Delete'));
        deleteButton.className = 'delete';
        deleteButton.addEventListener('click', deleteTask);

        li.appendChild(completeButton);
        li.appendChild(editButton);
        li.appendChild(deleteButton);
        taskList.appendChild(li);

        taskInput.value = '';
    }

    function completeTask(e) {
        const li = e.target.parentElement;
        li.classList.add('completed');
        completedList.appendChild(li);
        e.target.remove();
    }

    function editTask(e) {
        const li = e.target.parentElement;
        const taskText = prompt('Edit your task', li.firstChild.textContent);
        if (taskText) {
            li.firstChild.textContent = taskText;
        }
    }

    function deleteTask(e) {
        const li = e.target.parentElement;
        li.remove();
    }
});

const taskForm = document.getElementById('task-form');
const taskList = document.getElementById('task-list');
let tasks = [];

taskForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const title = document.getElementById('task-title').value;
    const description = document.getElementById('task-desc').value;
    const dueDate = document.getElementById('task-date').value;
    const editIndex = taskForm.getAttribute('data-edit-index');

    if (editIndex !== null) {
        tasks[editIndex] = { title, description, dueDate };
        taskForm.removeAttribute('data-edit-index');
        taskForm.querySelector('button').textContent = 'Add Task';
    } else {
        const task = { title, description, dueDate };
        tasks.push(task);
    }

    displayTasks();
    taskForm.reset();
});

taskList.addEventListener('click', (e) => {
    if (e.target.classList.contains('edit-btn')) {
        const index = e.target.getAttribute('data-index');
        const task = tasks[index];

        document.getElementById('task-title').value = task.title;
        document.getElementById('task-desc').value = task.description;
        document.getElementById('task-date').value = task.dueDate;

        taskForm.setAttribute('data-edit-index', index);
        taskForm.querySelector('button').textContent = 'Update Task';
    }

    if (e.target.classList.contains('delete-btn')) {
        const index = e.target.getAttribute('data-index');
        if (confirm('Are you sure you want to delete this task?')) {
            tasks.splice(index, 1);
            displayTasks();
        }
    }
});

function displayTasks() {
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        const taskItem = document.createElement('div');
        taskItem.classList.add('task-item');
        taskItem.innerHTML = `
            <h3>${task.title}</h3>
            <p>${task.description}</p>
            <small>Due: ${task.dueDate}</small>
            <button class="edit-btn" data-index="${index}">Edit</button>
            <button class="delete-btn" data-index="${index}">Delete</button>
        `;
        taskList.appendChild(taskItem);
    });
}
function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value;

    if (taskText === "") {
        alert("Please enter a task");
        return;
    }

    let li = document.createElement("li");

    li.innerHTML = `
        <span onclick="completeTask(this)">${taskText}</span>
        <button onclick="deleteTask(this)">X</button>
    `;

    document.getElementById("taskList").appendChild(li);
    taskInput.value = "";
}

function completeTask(task) {
    task.classList.toggle("completed");
}

function deleteTask(btn) {
    btn.parentElement.remove();
}

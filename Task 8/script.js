const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTask");
const taskList = document.getElementById("taskList");
const darkToggle = document.getElementById("darkToggle");
const filters = document.querySelectorAll(".filter");
const progressBar = document.getElementById("progressBar");
const progressText = document.getElementById("progressText");

let currentFilter = "all";

addTaskBtn.onclick = addTask;

function addTask(){
  const text = taskInput.value.trim();
  if(!text) return;

  const li = document.createElement("li");
  li.dataset.status = "pending";

  li.innerHTML = `
    <span class="task-text">${text}</span>
    <div class="actions">
      <span class="complete">✅</span>
      <span class="edit">✏️</span>
      <span class="delete">❌</span>
    </div>
  `;

  taskList.appendChild(li);
  taskInput.value = "";

  li.querySelector(".complete").onclick = () => {
    li.classList.toggle("completed");
    li.dataset.status = li.classList.contains("completed")
      ? "completed" : "pending";
    updateProgress();
    applyFilter();
  };

  li.querySelector(".delete").onclick = () => {
    li.remove();
    updateProgress();
  };

  li.querySelector(".edit").onclick = () => {
    const newText = prompt("Edit task", text);
    if(newText) li.querySelector(".task-text").innerText = newText;
  };

  updateProgress();
}

/* ENTER KEY */
taskInput.addEventListener("keypress", e => {
  if(e.key === "Enter") addTask();
});

/* DARK MODE */
darkToggle.onclick = () => {
  document.body.classList.toggle("dark");
};

/* FILTERS */
filters.forEach(btn => {
  btn.onclick = () => {
    filters.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    currentFilter = btn.dataset.filter;
    applyFilter();
  };
});

function applyFilter(){
  document.querySelectorAll("li").forEach(task => {
    if(currentFilter === "all") task.style.display = "flex";
    else if(task.dataset.status === currentFilter)
      task.style.display = "flex";
    else task.style.display = "none";
  });
}

/* PROGRESS */
function updateProgress(){
  const tasks = document.querySelectorAll("li");
  const completed = document.querySelectorAll("li.completed");

  const percent = tasks.length
    ? Math.round((completed.length / tasks.length) * 100)
    : 0;

  progressBar.style.width = percent + "%";
  progressText.textContent = `${percent}% Completed`;
}

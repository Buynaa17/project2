const task = [];

// const addTask = () => {
//   const tasksElement = document.getElementById("Box").value;
//   console.log(tasksElement);
//   const task = ` <div> ${Title}, ${Desc} </div>`;
//   tasksElement = `<div class = "task"> ${tasksElement}</div>`;
//   tasks.push();
//   console.log(tasks);
//   todoElement.innerHTML = todoElement.innerHTML + taskHtml;
// };

let currentTarget = "Box";
let generatedId = 0;

function renderTask() {
  const taskElement = document.getElementById(currentTarget);
  let result = "";

  for (let i = 0; i < task.length; i++) {
    const task = task[i];

    const taskHtml = `<div>
    ${task.title}, ${task.Desc}, ${task.Priority}
    <button onclick=" removeTask(${i})">remove</button>
    </div>
    `;
    result += taskHtml;
  }
  taskElement.innerHTML = result;
}

function addTask() {
  const title = document.getElementById("taskTitle").value;
  const description = document.getElementById("taskDescription").value;
  const priority = document.getElementById("taskPriority").value;
}

function showModal() {
  const modal = document.getElementById("createModal");
  modal.style.display = "flex";
}

function hideModal() {
  const modal = document.getElementById("createModal");
  modal.style.display = "none";
}

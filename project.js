const tasks = [];

const addTask = () => {
  const tasksElement = document.getElementById("Box").value;
  console.log(tasksElement);
  const task = {
    title: "end title dudaad og",
    desc: "end desc duudaad ug",
  };
  tasksElement = `<div class = "task"> ${tasksElement}</div>`;
  tasks.push();
  console.log(tasks);
};

// const v = () => {
//   const Title = document.getElementById("Title");
//   const valuee = Title.value;
// };

function showModal() {
  const modal = document.getElementById("createModal");
  modal.style.display = "flex";
}

function hideModal() {
  const modal = document.getElementById("createModal");
  modal.style.display = "none";
}

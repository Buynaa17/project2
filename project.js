function showModal() {
  const modal = document.getElementById("createModal");
  modal.style.display = "flex";
  console.log(modal);
}

function hideModal() {
  const modal = document.getElementById("createModal");
  modal.style.display = "none";
}

// function resetForm() {
//   document.getElementById("input").value = "";
//   document.getElementById("input1").value = "";
// }
const input = [
  {

  },
]

Render () {
  const Title = document.getElementById("input");
  console.log(Title);
  // const Description = document.getElementById("input1");
  for (let i = 0; i < input.lenght; i++) {
const input = input[i]

  }

}

// function Addtask() {
//   let CurrentT;
//   const Title = document.getElementById("input").value;
//   const Description = document.getElementById("input1").value;
//   const Priority = document.getElementById("TodoPriority").value;
//   const Status = document.getElementById("TodoStatus").value;
//   const tastHtml = `<div class="task">${Status}: ${Priority}: ${Title} (${Description}) </div>`;
//   const todoElement = document.getElementsByClassName("todoTasks").value;
//   todoElement.innerHTML = "tastHtml";
//   todoElement.append(tastHtml);
//   todoElement.innerHTML = todoElement.innerHTML + tastHtml;
//   hideModal();
//   resetForm();
// }

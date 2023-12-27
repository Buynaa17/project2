function showModal() {
  const modal = document.getElementById("createModal");
  modal.style.display = "flex";
  console.log(modal);
}

function hideModal() {
  const modal = document.getElementById("createModal");
  modal.style.display = "none";
}

function modul() {
  const title = document.getElementById("input").value;
  const Description = document.getElementById("input1").value;

  const tastHtml = `<div class="task"> ${title} (${Description}) </div>`;
  const todoElement = document.getElementsByClassName("todoTasks").value;
  todoElement.innerHTML = "tastHtml";
  //   todoElement.append(tastHtml);
  //   todoElement.innerHTML = todoElement.innerHTML + tastHtml;
  //   hideModal();
  //   resetForm();
}
function resetForm() {
  document.getElementById("input").value = "";
  document.getElementById("input1").value = "";
}

// const Box = document.getElementsByClassName("box")[0].value;
// const Box1 = document.getElementsByClassName("box1")[0].value;
// const Box2 = document.getElementsByClassName("box2")[0].value;
// const Box3 = document.getElementsByClassName("box3")[0].value;
// const boxs = document.getElementById("button").value;

// function myFunc() {
//   console.log(Box.children[0]);
//   console.log(Box1);
//   console.log(Box2);
//   console.log(Box3);
// }
// boxs.onclick = myFunc;

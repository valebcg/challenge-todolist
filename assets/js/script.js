const inputTask = document.getElementById("inputTask"); //input del html
const listTask = document.getElementById("listTask"); //listado de tareas
const button = document.getElementById("button"); //Agrega tareas
const countTask = document.getElementById("countTask"); //Agrega tareas
const idCheck = document.getElementById("cbox1"); //Agrega tareas
const done = document.getElementById("done"); //cuenta tareas realizadas
let statusCheck = "";

const tasks = [
  { id: 1, tarea: "Estudiar", state: false },
  { id: 2, tarea: "Cocinar", state: false },
  { id: 3, tarea: "Comprar", state: false },
   { id: 4, tarea: "Trotar", state: false },
   { id: 5, tarea: "Ordenar Casa", state: false },
   { id: 6, tarea: "Junta Familiar", state: false },

];

let add = function () {
  let html = "";
  for (chore of tasks) {
    if (chore.state == true) {
      statusCheck = "checked";
    } else {
      statusCheck = "";
    }
   
    html += `<li> ${chore.tarea} <input onclick="checked1(${chore.id})" type="checkbox" id="c${chore.id}" value="first_checkbox" ${statusCheck}> <button onclick="deleteTask(${chore.id})"> Delete </button></li>`;
  }

  listTask.innerHTML = html;
  countTask.innerHTML = "Cantidad de Tareas: " + tasks.length;
  done.innerHTML = "Realizadas: " + tasks.filter(({ state }) => state === true).length;
  console.log(tasks);
};


let checked1 = (id) => {
  const index = tasks.findIndex((ele) => ele.id == id);
  if (document.querySelector("#c"+id).checked == true) {
    tasks[index].state= true;
  } else {
    tasks[index].state= false;
  }
  add();
}



button.addEventListener("click", () => {
  const newTask = inputTask.value;
  if(newTask == ""){
    alert("NO HAZ INGRESADO TAREAS")
  }else{
  tasks.push({ id: Date.now(), tarea: newTask, state: false });
  inputTask.value = "";
  add();
  }
});



let deleteTask = (id) => {
  const index = tasks.findIndex((ele) => ele.id == id);
  tasks.splice(index, 1);
  let html = "";
  for (chore of tasks) {
    html += `<li> ${chore.tarea} </p> <input onclick="checked1(${chore.id})" type="checkbox" id="opt1" value="first_checkbox"> <button onclick="deleteTask(${chore.id})"> Delete </button></li>`;
  }
  add()


};
add();

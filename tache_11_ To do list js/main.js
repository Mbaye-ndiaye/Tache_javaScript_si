//Variables

const addTask = document.getElementById('add-task');
const taskContainer = document.getElementById('task-container');
const inputTask = document.getElementById('input-task')


// Event listener for Add Button

addTask.addEventListener('click', function(){

     let task = document.createElement('div');
     task.classList.add('task');
   //creer un element li
     let li = document.createElement('li');
 // l'element li saisi correspon a ce qu'on a ecrit dans l'input
     li.innerText = `${inputTask.value}`;
     task.appendChild(li);
   //creer un  bouton d'ajouter
     let checkButton = document.createElement("button")
     checkButton.innerHTML = '<button>To Do</button>';
     checkButton.classList.add('checkTask');
     task.appendChild(checkButton);

     let doing = document.createElement("button");
     
     doing.innerHTML = '<button>Doing</button>';
     doing.classList.add('deleteTask');

     task.appendChild(doing);

     let done = document.createElement("button");
     done.innerHTML = '<button>Done</button>';
     done.style.borderColor= "red"
     done.classList.add('done');
   //   done.style.border = "none"
     task.appendChild(done);


     if(inputTask.value === "") {
        alert('Please Enter a Task');

     }else {
        taskContainer.appendChild(task)
     }


     inputTask.value = "";


     checkButton.addEventListener('click', function() {

      checkButton.parentElement.style.backgroundColor = "red";

     });

     doing.addEventListener('click', function() {

      doing.parentElement.style.backgroundColor = "orange";
      // let target = e.target;
      

      // target.parentElement.parentElement.remove();

     });

     done.addEventListener('click', function() {
      done.parentElement.style.backgroundColor = "green";
     })
     

     
})
















// addTask.addEventListener('click', function() {

//    let task = document.createElement('div');
//    task.classList.add('task');

//    let li = document.createElement('li');
//    li.innerText = `${inputTask.value}`;
//    task.appendChild(li)
// })

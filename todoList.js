
let addTask = document.getElementById('add-task');
let taskContainer = document.getElementById('task-container');
let inputTask = document.getElementById('input-task');

// event listener for add button

 addTask.addEventListener('click', ()=>
    {   
  let task = document.createElement('div');
  task.classList.add('task');

  let li=document.createElement('li');
  li.innerText = `${inputTask.value}`;
  task.appendChild(li);

  let checkBtn = document.createElement('button');
  checkBtn.innerHTML= `<i class="fa-solid fa-check"></i>`;
  checkBtn.classList.add('checkTask');
  task.appendChild(checkBtn);

  let deleteBtn = document.createElement('button');
  deleteBtn.innerHTML= `<i class="fa-solid fa-trash-can"></i> `;
  deleteBtn.classList.add('deleteTask');
  task.appendChild(deleteBtn);

  if(inputTask.value === ''||inputTask.value === null){
    alert('Please add task! ');
  }else{
    taskContainer.appendChild(task);
  }
  inputTask.value = " ";

   
  checkBtn.addEventListener('click', ()=>{
  
    checkBtn.parentElement.style.textDecoration = "line-through";
  });

   deleteBtn.addEventListener('click', (e)=>{
   
    let target =e.target;
    target.parentElement.parentElement.remove();

    /* target.parentElement.remove();
    when you use this only remove trash button itSelf
     */
    // the first parentElement get's li then the second get'task and remove 
   });
    

      });
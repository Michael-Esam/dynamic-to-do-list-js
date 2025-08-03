document.addEventListener('DOMContentLoaded',function(){
    const addButton = document.getElementById("add-task-btn");
    const taskInput =document.getElementById("task-input" );
    const taskList =document.getElementById("task-list" );
    function addTask (){
       const taskText = taskInput.value.trim();
       if (taskText === ""){
        alert("Please Enter The Task");
       }else{
        let li = document.createElement("li");
        li.textContent = taskText;
        let remove = document.createElement("button");
        remove.textContent="Remove";
        remove.classList.add('remove-btn');
        remove.onclick = function(){
            remove.parentElement.remove()
        }
        li.appendChild(remove)
        taskList.appendChild(li)
        taskInput.value = ""
       }    
    }
    addButton.addEventListener("click", addTask)
})
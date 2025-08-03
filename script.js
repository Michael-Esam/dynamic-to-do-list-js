document.addEventListener('DOMContentLoaded', function () {
    const addButton = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    // Load saved tasks from Local Storage when page loads
    loadTasks();

    // Add Task function (with Local Storage support)
    function addTask(taskText = null, save = true) {
        if (!taskText) {
            taskText = taskInput.value.trim();
        }

        if (taskText === "") {
            alert("Please Enter The Task");
            return;
        }

        // Create <li> element
        const li = document.createElement("li");
        li.textContent = taskText;

        // Create Remove Button
        const remove = document.createElement("button");
        remove.textContent = "Remove";
        remove.classList.add("remove-btn");

        // Remove from DOM and Local Storage on click
        remove.onclick = function () {
            li.remove();
            removeFromStorage(taskText);
        };

        li.appendChild(remove);
        taskList.appendChild(li);

        if (save) {
            saveToStorage(taskText);
        }

        taskInput.value = "";
    }

    // Event listener for add button
    addButton.addEventListener("click", function () {
        addTask();
    });

    // Press Enter to add task
    taskInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            addTask();
        }
    });

    // Load tasks from Local Storage
    function loadTasks() {
        const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
        tasks.forEach(task => addTask(task, false));
    }

    // Save task to Local Storage
    function saveToStorage(task) {
        const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
        tasks.push(task);
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    // Remove task from Local Storage
    function removeFromStorage(taskToRemove) {
        let tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
        tasks = tasks.filter(task => task !== taskToRemove);
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }
});
document addEventListener("DOMContentLoaded", Function() {
    const tasklist = document.getElementById("task-list");
    const newTaskInput = document.getElementById("new-task");
    const addTaskButton = document.getElementById("add-task");

    addTaskButton.addEventListener("Click",function() {
        const taskText = newTaskInput.value.trim();
        if(taskText !== "") {
            addTask(taskText);
            newTaskInput.value = "";
        }
    
    });

    newTaskInput.addEventListener("keyup"),function(event) {
        if (event.key === "Enter") {
            addTaskButton.click();
        });

        function addTask(taskText) {
            const taskItem = document.createElement.("11");
            taskItem.textContent = taskText:

            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Hapus ANJG";
            deleteButton.classList.add("delete-button");

            deleteButton.addEventListener("click",function() {
                tasklist.removeChild.taskItem);
            });

            taskItem.appendChild(deleteButton)
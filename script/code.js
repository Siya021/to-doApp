function addingTask() {
    let taskName = document.querySelector("task-name");
    let tasks = document.querySelector("tasks")

    if (taskName.value === "") {
        alert("Task Missing!!!");
        return
    }
    let task = document.createElement("li");
    let taskDescription= document.createElement(taskName.value);
    task.appendChild(taskDescription);
    tasks.appendChild(task);

    taskName.value= "";
}

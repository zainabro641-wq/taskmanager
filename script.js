function addTask() {
    let taskValue = document.getElementById("task").value;
    if (taskValue == "") {
        alert("Please enter a task");} 
    else {
        document.getElementById("list").innerHTML +=
            "<li>" + 
            "<span>" + taskValue + "</span>" +
            "<div>" +
            "<button class='updateBtn' onclick='updateTask(this)'>Update</button> " +
            "<button class='deleteBtn' onclick='deleteTask(this)'>Delete</button>" +
            "</div>" +
            "</li>";
        document.getElementById("task").value = ""; }}

function deleteTask(button) {
    button.parentElement.parentElement.remove();}

function updateTask(button) {
    let li = button.parentElement.parentElement;
    let taskText = li.querySelector("span").innerText;
    let newTask = prompt("Update your task:", taskText);
    if (newTask != null && newTask != "") {
        li.querySelector("span").innerText = newTask;}
    
    
    
}

let task_list = document.getElementById('task_list');
let button = document.querySelector('button');

function addTask() {
    let input = document.getElementById('to_input');
    let inputTxt = input.value;

    if (inputTxt === "") {
        alert("Nothing to set to goal");
        return; 
    }
    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    let li = document.createElement('li');

    li.appendChild(checkbox);

    li.innerHTML += inputTxt;
    
    

    let edit = document.createElement('button');
    edit.innerHTML = '<img src="./assets/images/edit-button.svg" alt="edit" height="20px" width="20px">';
    
    edit.addEventListener("click", function() {
        edit_task(li);
    });

    let deleteButton = document.createElement('button'); 
    deleteButton.innerHTML = "delete";
    deleteButton.addEventListener("click", function() {
        deleteTask(li);
    });

    li.appendChild(edit);
    li.appendChild(deleteButton);
    

    task_list.appendChild(li);
    input.value = ""; 
}

function edit_task(task) {
    let taskTexte = task.firstChild;
    let newTaskTxt = prompt('Change the goal:', taskTexte.textContent);

    if (newTaskTxt === null || newTaskTxt === "") {
        return;
    }

    taskTexte.textContent = newTaskTxt;
}

function deleteTask(task) { 
    task_list.removeChild(task);
}

let h2 = document.querySelector("h2");
let currentDate = new Date();

let year = currentDate.getFullYear();
let month = currentDate.getMonth() +1;
let day = currentDate.getDate();

let fullDate = day + '-' + month + '-' + year;

h2.textContent = fullDate;

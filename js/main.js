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

    let span = document.createElement('span');
    span.textContent = inputTxt;

    let countdownSpan = document.createElement('span'); 
    countdownSpan.classList.add('countdown'); 
    li.appendChild(span);

    li.appendChild(checkbox);

    li.appendChild(countdownSpan);

    checkbox.addEventListener('change', function() {
        if (this.checked) {
            alert("Task accomplished!");
            
        }
    });

    let edit = document.createElement('button');
    edit.innerHTML = '<i class="fa-solid fa-pen"></i>';
    edit.addEventListener("click", function() {
        edit_task(li);
    });

    let deleteButton = document.createElement('button'); 
    deleteButton.innerHTML = "<i class='fa-solid fa-trash'></i>";
    deleteButton.addEventListener("click", function() {
        deleteTask(li);
    });

    li.appendChild(edit);
    li.appendChild(deleteButton);

    task_list.appendChild(li);
    input.value = ""; 

    startCountdownForTask(countdownSpan);
    
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
let month = currentDate.getMonth() + 1;
let day = currentDate.getDate();

let fullDate = `Aujourd'hui, le ${day} - ${month} - ${year}`;

h2.textContent = fullDate;

function startCountdownForTask(countdownSpan) {
    
    let wantCountdown = confirm('Do you want to set a goal hours? (HH:MM)');

    if (wantCountdown) {
        
        let askUser = prompt('Set the hours of you want to finish your goal');

        if (!askUser) {
            alert('Invalid countdown. Please enter a valid time (HH:MM).');
            return;
        }

        let timeArray = askUser.split(":");
        let hours = parseInt(timeArray[0]);
        let minutes = parseInt(timeArray[1]);

        if (isNaN(hours) || hours < 0 || hours > 23 || isNaN(minutes) || minutes < 0 || minutes > 59) {
            alert('Invalid time format. Please enter a valid time (HH:MM).');
            return;
        }

        let currentTime = new Date();
        let targetTime = new Date();
        targetTime.setHours(hours);
        targetTime.setMinutes(minutes);
        targetTime.setSeconds(0);


        let delay = targetTime - currentTime;

        if (delay <= 0) {
            alert('Impossible to set a cooldown, the time is already passed');
            return;
        }
        let timer = setInterval(function() {
            let remainingTime = targetTime - new Date();
            if (remainingTime <= 0) {
                clearInterval(timer);
                countdownSpan.textContent = 'Countdown is finished!';
            } else {
                let hoursRemaining = Math.floor(remainingTime / (1000 * 60 * 60));
                let minutesRemaining = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
                let secondsRemaining = Math.floor((remainingTime % (1000 * 60)) / 1000);
                countdownSpan.textContent = `${hoursRemaining}h ${minutesRemaining}m ${secondsRemaining}s`;
            }
        }, 1000);
    } else {
        
    }
}

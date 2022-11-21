//DOM Reference:
var buttonEl = document.querySelector("#save-task"); 
var tasksToDoEl = document.querySelector("#tasks-to-do")

var createTaskHandler = function(){
    var listItemEl = document.createElement('li');
    listItemEl.className = 'task-item';
    listItemEl.textContent = "This is a new task.";
    tasksToDoEl.appendChild(listItemEl);
};
buttonEl.addEventListener('click', createTaskHandler);

// dynamically notes! don't delete
// buttonEl.addEventListener('click', function (){
//     // Birthed it |create new element that is housed the variable housing the dom ref for 'li' element (new)
//     var listItemEl = document.createElement('li');
//     //Dressed it | this adds styling to listItemEl
//     listItemEl.className = 'task-item';
//     //Named it | this adds text to listItemEl
//     listItemEl.textContent = "This is a new task.";
//     //Housed it | this adds it to the end of the parent node
//     tasksToDoEl.appendChild(listItemEl);
// });

const addButn = document.querySelector('.add_btn');
const newtask = document.querySelector('.task-text');
const taskContainer = document.querySelector('.Tasks');
console.log(taskContainer.innerHTML);
console.log(taskContainer.newtask);


let comptTask = [];
let pendTask = [];
let taksArray = [];


addButn.addEventListener('click', function (key) {
    creatElem();
});



const creatElem = () => {
    let a = newtask.value;
    const html =
        `<div class="task">
  <div class="tasks__type "> ${newtask.value} </div>
  <div class="btn_task">
     <button class="btn edit_btn"> 🖋</button>
     <button class="btn check_btn"> ✔ </button>
     <button class="btn delete_btn"> 🗑</button>
  </div>
</div>`;
    taksArray.push(html);
    display(taksArray);
    newtask.value = '';
    taskContainer.style.opacity = 100;
}


const display = function (arr) {
    document.querySelector('.Tasks').innerHTML = '';

    if (arr.length == 0) {
        taskContainer.style.opacity = 0;
    }
    for (const task of arr)
        taskContainer.insertAdjacentHTML('beforeend', task);
    butns();
};



const butns = function () {
    for (let i = 0; i < taksArray.length; i++) {
        taskContainer.childNodes[i].childNodes[3].childNodes[5].addEventListener('click', () => {
            taksArray.splice(i, 1);
            display(taksArray);
        })
        taskContainer.childNodes[i].childNodes[3].childNodes[1].addEventListener('click', () => {
            taskContainer.childNodes[i].childNodes[1].innerText = '  ';
            taskContainer.childNodes[i].childNodes[3].childNodes[1].addEventListener('click', () => {
                taskContainer.childNodes[i].childNodes[1].innerText = newtask.value
                newtask.value = '';
            })
        })
        taskContainer.childNodes[i].childNodes[3].childNodes[3].addEventListener('click', () => {
            taskContainer.childNodes[i].style.backgroundColor = "#ffb003";
            comptTask.push(taksArray[i]);
        })
    }
}



function myFunction() {
    var x = Number(document.getElementById("mySelect").value);
    // console.log(x);
    if (x === 1)
        display(taksArray);
    else if (x === 2) {
        display(comptTask);
    }
    else {
        taksArray.filter(ele => {
            if (!comptTask.includes(ele))
                pendTask.push(ele);
        })
        display(pendTask);
    }
}

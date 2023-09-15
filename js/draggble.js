let tasksList = document.querySelector(`.tasks__list`);
let taskElements = tasksList.querySelectorAll(`.tasks__item`);
let frameWidth = window.getComputedStyle(document.querySelector(`.frame`)).width;
let width = 300;
let gap1 = 30;
let moveMax = taskElements.length * width + (taskElements.length - 1) * gap1 - parseInt(frameWidth);
let startX = 0;
let moveX = 0;

tasksList.style.left = 0;

taskElements.forEach(function (item, index) {
    item.draggable = true;
})

tasksList.addEventListener(`touchstart`, (event) => {
    event.target.classList.add(`selected`);
    startX = event.clientX
    console.log('start: ', startX);
});

tasksList.addEventListener(`touchend`, (event) => {
    event.target.classList.remove(`selected`);
    moveX = event.clientX - startX;
    console.log('end: ', event.clientX, '   move: ', moveX,
        '   newX: ', (parseInt(tasksList.style.left) + moveX), '   max: ', moveMax);

    if (parseInt(tasksList.style.left) + moveX > 0) {
        tasksList.style.left = 0;
    } else if (parseInt(tasksList.style.left) + moveX < -moveMax) {
        tasksList.style.left = -moveMax + 'px';
    } else {
        tasksList.style.left = parseInt(tasksList.style.left) + moveX + 'px';
    }

});
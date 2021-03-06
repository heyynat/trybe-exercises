function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

function createDaysOfMonth() {
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  const ulDays = document.querySelector('#days');

  for (let index = 0; index < dezDaysList.length; index += 1) {
    let day = dezDaysList[index];

    let dayListItem = document.createElement('li');

    dayListItem.innerText = day;
    ulDays.appendChild(dayListItem);
    dayListItem.classList.add('day');

    if (index === 25 || index === 26 || index === 32) {
      dayHoliday = document.getElementsByClassName('day')[index];
      dayHoliday.classList.add('holiday');
    }
    if (index === 5 || index === 12 || index === 19 || index === 26) {
      dayFryday = document.getElementsByClassName('day')[index];
      dayFryday.classList.add('friday');
    }
  }
}
createDaysOfMonth();

function createBtnHoliday(buttonName) {
  let buttonsContainer = document.querySelector('.buttons-container');
  let btnHoliday = document.createElement('button');
  btnHoliday.innerHTML = buttonName;

  let buttonID = 'btn-holiday';
  btnHoliday.id = buttonID;
  buttonsContainer.appendChild(btnHoliday);
}
createBtnHoliday('Feriados');

function displayHolidays() {
  let getHolidayButton = document.querySelector('#btn-holiday');
  let getHolidays = document.querySelectorAll('.holiday');
  let backgroundColor = 'rgb(238,238,238)';
  let setNewColor = 'white';

  getHolidayButton.addEventListener('click', function () {
    for (let index = 0; index < getHolidays.length; index += 1) {
      if (getHolidays[index].style.backgroundColor === setNewColor) {
        getHolidays[index].style.backgroundColor = backgroundColor;
      } else {
        getHolidays[index].style.backgroundColor = setNewColor;
      }
    }
  })
}

displayHolidays();

function createFridayButton(buttonName) {
  let buttonContainer = document.querySelector('.buttons-container');
  let newButton = document.createElement('button');
  let newButtonID = 'btn-friday';

  newButton.innerHTML = buttonName;
  newButton.id = newButtonID;
  buttonContainer.appendChild(newButton);
};

createFridayButton('Sexta-feira');

function createFriday() {
  let getFridayButton = document.querySelector('#btn-friday');
  let fridays = document.querySelectorAll('.friday');
  let textFriday = 'SEXTASSE';

  let classFriday = document.querySelectorAll('.friday');
  let text = [];
  for (let i = 0; i < classFriday.length; i += 1) {
    text[i] = classFriday[i].innerText;
  }
  getFridayButton.addEventListener('click', function () {
    for (let i = 0; i < fridays.length; i += 1) {
      if (fridays[i].innerText !== textFriday) {
        fridays[i].innerHTML = textFriday;
      } else {
        fridays[i].innerText = text[i];
      }
    }
  });
}
createFriday();

function zoomDayOver() {
  let dayAll = document.querySelector('#days');
  dayAll.addEventListener('mouseover', function (event) {
    event.target.style.fontSize = "20px";
  });
};

function zoomDayOut() {
  let dayAll = document.querySelector('#days');
  dayAll.addEventListener('mouseout', function (event) {
    event.target.style.fontSize = "60px";
  });
};
zoomDayOver();
zoomDayOut()

function newTaskSpan(task) {

  let tasksContainer = document.querySelector('.my-tasks');
  let taskName = document.createElement('span');

  taskName.innerHTML = task;
  tasksContainer.appendChild(taskName);
};

newTaskSpan('Projeto Pixel Art');

function newTaskDiv(color) {

  let tasksContainer = document.querySelector('.my-tasks');
  let newTask = document.createElement('div');

  newTask.className = 'task';
  newTask.style.backgroundColor = color;
  tasksContainer.appendChild(newTask);
};

newTaskDiv('green');

function setDayColor() {
  let selectedTask = document.getElementsByClassName('task selected');
  let days = document.querySelector('#days');
  let taskDiv = document.querySelector('.task');
  let taskColor = taskDiv.style.backgroundColor;

  days.addEventListener('click', function (event) {
    let eventTargetColor = event.target.style.color;
    if (selectedTask.length > 0 && eventTargetColor !== taskColor) {
      let color = selectedTask[0].style.backgroundColor;
      event.target.style.color = color;
    } else if (eventTargetColor === taskColor && selectedTask.length !== 0) {
      event.target.style.color = 'rgb(119,119,119)';
    }
  });
};

setDayColor();
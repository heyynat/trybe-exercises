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
            dayHaliday = document.getElementsByClassName('day')[index];
            dayHaliday.classList.add('haliday');
        }
        if (index === 5 || index === 12 || index === 19 || index === 26) {
            dayFryday = document.getElementsByClassName('day')[index];
            dayFryday.classList.add('friday');
        }
    }
}
createDaysOfMonth();

function createBtnHoliday(string) {
    string = 'Feriados';
    let buttonsContainer = document.querySelector('.buttons-container');
    let btnHoliday = document.createElement('button');
    btnHoliday.innerText = string;

    buttonsContainer.appendChild(btnHoliday);
}
createBtnHoliday();

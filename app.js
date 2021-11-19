const theBtn = document.querySelector('.toggle');
const theHour = document.querySelector('.hour');
const theMinute = document.querySelector('.minute');
const theSecond = document.querySelector('.second');
const thetime = document.querySelector('.time');
const thedate = document.querySelector('.date');
const html = document.querySelector('html')

theBtn.addEventListener('click', function () {
    if (theBtn.classList.contains('dark')) {
        html.classList.remove('dark');
        theBtn.innerHTML = `Light Mode`;
    } else {
        html.classList.add('dark');
        theBtn.classList.add('dark');
        theBtn.innerHTML = `Dark Mode`;
    }
});
const theBtn = document.querySelector('.toggle');
const theHour = document.querySelector('.hour');
const theMinute = document.querySelector('.minute');
const theSecond = document.querySelector('.second');
const thetime = document.querySelector('.time');
const thedate = document.querySelector('.date');
const html = document.querySelector('html')

theBtn.addEventListener('click', function () {
    if (theBtn.classList.contains('dark')) {
        html.classList.add('dark');
        theBtn.innerHTML = `Light Mode`;
        theBtn.classList.add('dark');
    } else {
        html.classList.remove('dark');
        theBtn.classList.remove('dark');
        theBtn.innerHTML = `Dark Mode`;
    }
});
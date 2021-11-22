const theBtn = document.querySelector('.toggle');
const theHour = document.querySelector('.hour');
const theMinute = document.querySelector('.minute');
const theSecond = document.querySelector('.second');
const thetime = document.querySelector('.time');
const thedate = document.querySelector('.date');
const html = document.querySelector('html')

theBtn.addEventListener('click', function (e) {
    if (theBtn.classList.contains('dark')) {
        html.classList.remove('dark');
        e.target.innerText = 'Dark Mode';
        theBtn.style.backgroundColor = `#fff`;
        theHour.style.backgroundColor = `#fff`;
        theMinute.style.backgroundColor = `#fff`;
    } else {
        html.classList.add('dark');
        e.target.innerText = 'Light Mode';
        theBtn.style.backgroundColor = `#000`;
        theHour.style.backgroundColor = `#000`;
        theMinute.style.backgroundColor = `#000`;
    }
});
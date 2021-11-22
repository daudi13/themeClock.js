const theBtn = document.querySelector('.toggle');
const theHour = document.querySelector('.hour');
const theMinute = document.querySelector('.minute');
const theSecond = document.querySelector('.second');
const thetime = document.querySelector('.time');
const thedate = document.querySelector('.date');
const html = document.querySelector('html')

theBtn.addEventListener('click', function (e) {
    if (theBtn.classList.contains('dark')) {
        theBtn.classList.remove('dark');
        e.target.innerHTML = 'Dark Mode';
        theBtn.style.backgroundColor = `#fff`;
        theHour.style.backgroundColor = `#fff`;
        theMinute.style.backgroundColor = `#fff`;
    } else {
        html.classList.add('dark');
        theBtn.classList.remove('dark');
        theBtn.innerHTML = `Dark Mode`;
    }
});
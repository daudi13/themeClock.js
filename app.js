const theBtn = document.querySelector('.toggle');
const theHour = document.querySelector('.hour');
const theMinute = document.querySelector('.minute');
const theSecond = document.querySelector('.second');
const thetime = document.querySelector('.time');
const thedate = document.querySelector('.date');
const html = document.querySelector('html')

theBtn.addEventListener('click', function (e) {
    if (html.classList.contains('dark')) {
        html.classList.remove('dark');
        e.target.innerText = 'Dark Mode';
        theBtn.style.backgroundColor = `#000`;
        theHour.style.backgroundColor = `#000`;
        theMinute.style.backgroundColor = `#000`;
        theBtn.style.color = `#fff`;
    } else {
        html.classList.add('dark');
        e.target.innerText = 'Light Mode';
        theBtn.style.backgroundColor = `#fff`;
        theHour.style.backgroundColor = `#fff`;
        theMinute.style.backgroundColor = `#fff`;
        theBtn.style.color = `#000`;
    }
});

setInterval(ticktock, 1000)

ticktock()

function ticktock() {
    
    const theTime = new Date();
    const hour = theTime.getHours();
    const minutes = theTime.getMinutes();
    const seconds = theTime.getSeconds();

    theHour.style.transform = `translate(50, -100) rotate(${scale(hour, 0, 11, 0, 360)}deg)`;
    theMinute.style.transform = `translate(50, -100) rotate(${scale(minutes, 0, 59, 0, 360)}deg)`;
    theSecond.style.transform = `translate(50, -100) rotate(${scale(seconds, 0, 59, 0, 360)}deg)`
}


function scale(num, inMin, inMax, outMin, outMax) {
    return (num - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
};
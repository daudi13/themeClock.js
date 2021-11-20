

const toggleBtn = document.querySelector('.toggle');
const html = document.querySelector('html');
const hourEl = document.querySelector('.hour');
const minuteEl = document.querySelector('.minute');
const secondEl = document.querySelector('.second');
const timeEl = document.querySelector('.time');
const dateEl = document.querySelector('.date');

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

toggleBtn.addEventListener('click', function (e) {
    if (html.classList.contains('dark')) {
        html.classList.remove('dark');
        e.target.innerText = 'Dark mode';
        toggleBtn.style.backgroundColor = '#000';
        toggleBtn.style.color = `#fff`;
        hourEl.style.backgroundColor = '#000';
        minuteEl.style.backgroundColor = '#000';
    } else {
        html.classList.add('dark');
        toggleBtn.innerText = 'light mode';
        toggleBtn.style.backgroundColor = `#fff`
        toggleBtn.style.color = `#000`
        hourEl.style.backgroundColor = '#fff';
        minuteEl.style.backgroundColor = '#fff';
    }
});

setInterval(setTime, 1000);

function setTime() {
    const time = new Date();
    const date = time.getDate();
    const month = time.getMonth();
    const day = time.getDay();
    const hours = time.getHours();
    const hoursForClock = hours % 12;
    const minTime = time.getMinutes();
    const seconds = time.getSeconds();
    const ampm = hours <= 12 ? 'AM' : 'PM';

    hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(hoursForClock, 0, 11, 0, 360)}deg)`;
    minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(minTime, 0, 59, 0, 360)}deg)`;
    secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(seconds, 0, 59, 0, 360)}deg)`;
    timeEl.innerText = `${hours<10? `0${hours}`: hours}:${minTime<10? `0${minTime}`: minTime} ${ampm}`;
    dateEl.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`; 


}




function scale(num, inMin, inMax, outMin, outMax) {
    return (num - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
};


///
import '../styles/style.scss';

const clock = document.getElementById('clock');
const daysLeft = clock.querySelector('#days');
const hoursLeft = clock.querySelector('#hours');
const minutesLeft = clock.querySelector('#minutes');
const secondsLeft = clock.querySelector('#seconds');
const dateForm = document.querySelector('#date-form');


function getTimeRemained(timeLeft) {
    const totalTime = Date.parse(timeLeft) - Date.parse(new Date());
    const days = Math.floor(totalTime/(1000*60*60*24));
    const hours = Math.floor((totalTime/(1000*60*60)) % 24);
    const minutes = Math.floor((totalTime/1000/60) % 60);
    const seconds = Math.floor((totalTime/1000) % 60);

    return {
        totalTime,
        days,
        hours,
        minutes,
        seconds
    };
} // get remained time function

function setClock(total) {

    const refreshInterval = setInterval(() => {
        const t = getTimeRemained(total);
        daysLeft.innerHTML = t.days;
        hoursLeft.innerHTML = ('0' + t.hours).slice(-2);
        minutesLeft.innerHTML = ('0' + t.minutes).slice(-2);
        secondsLeft.innerHTML = ('0' + t.seconds).slice(-2);
    
        if(t.totalTime <= 0) {
            clearInterval(refreshInterval)
        } //disabling clock when 0 time remained

    }, 1000); // updating clock function
    
} // initializing clock function

dateForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const dateValue = document.querySelector('#newDate');
    const deadline = dateValue.value;
    setClock(deadline);
});
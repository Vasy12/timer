'use strict';

import {timerValueElem, startButtonElem, stopButtonElem, resetButtonElem} from './controls.js';

let date = new Date('2019/12/2');
let intervalId = null;

startButtonElem.onclick = startTimer;

stopButtonElem.onclick = stopTimer;

resetButtonElem.onclick = function () {

    resetTimer();
    refreshTimerValue();

};


function refreshTimerValue() {

    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const mSec = date.getMilliseconds();

    timerValueElem.innerText = `${getTimeMyFormat(minutes)}:${getTimeMyFormat(seconds)}:${getTimeMyFormat2(mSec)}`;

}

function getTimeMyFormat( value) {
    return value < 10 ? "0" + value : value;
}
function getTimeMyFormat2( value) {
    return value < 100 ? "00" + value : value;
}

function startTimer() {
    if (intervalId) {
        return;
    }
    intervalId = setInterval(incrementMSeconds, 100)
}

function stopTimer() {
    clearInterval(intervalId);
    intervalId = null;
}

function resetTimer() {
    date = new Date('2019/12/2');
}


function incrementSeconds() {
    date.setSeconds(date.getSeconds() + 1);
    refreshTimerValue();
}

function incrementMSeconds() {
    date.setMilliseconds(date.getMilliseconds() + 100);
    refreshTimerValue();
}


refreshTimerValue();



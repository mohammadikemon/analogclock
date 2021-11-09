var hourHand = document.querySelector(".hour");
var minuteHand = document.querySelector(".minute");
var secondHand = document.querySelector(".second-hand");
var timeFormat = document.querySelector(".time-format")

function clock() {

    var date = new Date();
    var secondRatio = date.getSeconds() / 60;
    var minuteRatio = (secondRatio + date.getMinutes()) / 60;
    var hourRatio = (minuteRatio + date.getHours()) / 12;
    var hour = date.getHours()
    var format = "AM"

    if(hour > 12) {
        hour = hour - 12;
        format = "PM"
    }else {
        hour = hour;
        format = format
    }

    setClockRotation(secondHand, secondRatio)
    setClockRotation(minuteHand, minuteRatio)
    setClockRotation(hourHand, hourRatio)

    timeFormat.innerHTML = format

    setInterval(clock, 1000)

}   

clock()

function setClockRotation (element, clockRotationRatio) {

    element.style.setProperty('--rotation', clockRotationRatio * 360)

}
"use script";

const days = document.getElementById(`day__id`);
const hours = document.getElementById(`hour__id`);
const minutes = document.getElementById(`minute__id`);
const seconds = document.getElementById(`second__id`);

let insaydDays = 1;
let insaydHours = 00;
let insaydMinutes = 00;
let insaydSeconds = 00;

let timerInterval = setInterval(() => {
  days.innerHTML = insaydDays;
  hours.innerHTML = insaydHours;
  minutes.innerHTML = insaydMinutes;
  seconds.innerHTML = insaydSeconds;

  insaydSeconds++;


  days.innerHTML = new Date().getDate();
  hours.innerHTML = new Date().getHours();
  minutes.innerHTML = new Date().getMinutes();
  seconds.innerHTML = new Date().getSeconds();
  if (days < 10) {
    days = "0" + days;
  }
  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
}, 1000);

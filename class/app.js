import Time from './time.js';

const now = new Date();

const currentTime = document.querySelector('#current-time');
currentTime.textContent = now.toLocaleString();

const currentDay = document.querySelector('#current-day');
currentDay.textContent = new Time(now).getDay();

const currentMonth = document.querySelector('#current-month');
currentMonth.textContent = new Time(now).getMonth();

const oneSecond = document.querySelector('#one-second');
oneSecond.textContent = new Time(now).addSeconds(1).date.toLocaleTimeString();

const oneMinute = document.querySelector('#one-minute');
oneMinute.textContent = new Time(now).addMinutes(1).date.toLocaleTimeString();

const oneHour = document.querySelector('#one-hour');
oneHour.textContent = new Time(now).addHours(1).date.toLocaleTimeString();

const oneDay = document.querySelector('#one-day');
oneDay.textContent = new Time(now).addDays(1).getDay();

const oneMonth = document.querySelector('#one-month');
oneMonth.textContent = new Time(now).addMonths(1).getMonth();

const oneYear = document.querySelector('#one-year');
oneYear.textContent = new Time(now).addYears(1).date.getFullYear().toString();

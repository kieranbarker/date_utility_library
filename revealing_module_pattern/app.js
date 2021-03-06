'use strict';

const now = new Date();

const currentTime = document.querySelector('#current-time');
currentTime.textContent = now.toLocaleString();

const currentDay = document.querySelector('#current-day');
currentDay.textContent = Time.getDay(now);

const currentMonth = document.querySelector('#current-month');
currentMonth.textContent = Time.getMonth(now);

const oneSecond = document.querySelector('#one-second');
oneSecond.textContent = Time.addSeconds(new Date(now), 1).toLocaleTimeString();

const oneMinute = document.querySelector('#one-minute');
oneMinute.textContent = Time.addMinutes(new Date(now), 1).toLocaleTimeString();

const oneHour = document.querySelector('#one-hour');
oneHour.textContent = Time.addHours(new Date(now), 1).toLocaleTimeString();

const oneDay = document.querySelector('#one-day');
oneDay.textContent = Time.getDay(Time.addDays(new Date(now), 1));

const oneMonth = document.querySelector('#one-month');
oneMonth.textContent = Time.getMonth(Time.addMonths(new Date(now), 1));

const oneYear = document.querySelector('#one-year');
oneYear.textContent = Time.addYears(new Date(now), 1).getFullYear().toString();

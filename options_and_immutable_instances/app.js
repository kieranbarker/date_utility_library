import Time from './time.js';

const locale = 'de';

const now = new Time({
  days: [
    'Sonntag',
    'Montag',
    'Dienstag',
    'Mittwoch',
    'Donnerstag',
    'Freitag',
    'Samstag',
  ],
  months: [
    'Januar',
    'Februar',
    'März',
    'April',
    'Mai',
    'Juni',
    'Juli',
    'August',
    'September',
    'Oktober',
    'November',
    'Dezember'
  ]
});

const currentTime = document.querySelector('#current-time');
currentTime.textContent = now.date.toLocaleString(locale);

const currentDay = document.querySelector('#current-day');
currentDay.textContent = now.getDay();

const currentMonth = document.querySelector('#current-month');
currentMonth.textContent = now.getMonth();

const oneSecond = document.querySelector('#one-second');
oneSecond.textContent = now.addSeconds(1).date.toLocaleTimeString(locale);

const oneMinute = document.querySelector('#one-minute');
oneMinute.textContent = now.addMinutes(1).date.toLocaleTimeString(locale);

const oneHour = document.querySelector('#one-hour');
oneHour.textContent = now.addHours(1).date.toLocaleTimeString(locale);

const oneDay = document.querySelector('#one-day');
oneDay.textContent = now.addDays(1).getDay();

const oneMonth = document.querySelector('#one-month');
oneMonth.textContent = now.addMonths(1).getMonth();

const oneYear = document.querySelector('#one-year');
oneYear.textContent = now.addYears(1).date.getFullYear().toString();

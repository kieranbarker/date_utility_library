import Time from './time.js';

const now = new Time();
const tenYearsAway = now.addYears(10);

document.addEventListener('time:update', function (event) {
  // Only allow dates in the next 10 years
  if (event.detail.time.date >= tenYearsAway.date) {
    event.preventDefault();
    console.warn(`Only dates before ${tenYearsAway.date.toString()} are allowed.`);
  }
});

// This shows a warning
now.addYears(10);

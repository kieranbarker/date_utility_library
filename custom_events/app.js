import Time from './time.js';

// Create a new Time instance
const halloween = new Time(undefined, 'October 31, 2021');
console.log('Halloween', halloween);

// Listen for time update events
document.addEventListener('time:update', function (event) {
  // Update requested
  console.log('Update requested', event.detail);

  // If the year is greater than 2021, don't update
  if (event.detail.time.date.getFullYear() > 2021) {
    event.preventDefault();
    console.warn('Updated canceled', event.detail);
    return;
  }

  // Update complete
  console.log('Update complete', event.detail);
});

// Adjust the date
const yearNotUpdated = halloween.addDays(3).addMonths(1).addYears(1);
console.warn('Year not updated', yearNotUpdated);

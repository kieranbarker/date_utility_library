const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
];

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

/**
 * Get the day of the week as a string.
 * @param {Date} date
 * @returns {string}
 */
function getDay(date = new Date()) {
  const index = date.getDay();
  return days[index];
}

/**
 * Get the month of the year as a string.
 * @param {Date} date
 * @returns {string}
 */
function getMonth(date = new Date()) {
  const index = date.getMonth();
  return months[index];
}

/**
 * Add a number of seconds to a date.
 * @param {Date} date
 * @param {number} numSeconds
 * @returns {Date}
 */
function addSeconds(date = new Date(), numSeconds = 0) {
  const dateCopy = new Date(date);

  const seconds = dateCopy.getSeconds();
  dateCopy.setSeconds(seconds + numSeconds);

  return dateCopy;
}

/**
 * Add a number of minutes to a date.
 * @param {Date} date
 * @param {number} numMinutes
 * @returns {Date}
 */
function addMinutes(date = new Date(), numMinutes = 0) {
  const dateCopy = new Date(date);

  const minutes = dateCopy.getMinutes();
  dateCopy.setMinutes(minutes + numMinutes);

  return dateCopy;
}

/**
 * Add a number of hours to a date.
 * @param {Date} date
 * @param {number} numHours
 * @returns {Date}
 */
function addHours(date = new Date(), numHours = 0) {
  const dateCopy = new Date(date);

  const hours = dateCopy.getHours();
  dateCopy.setHours(hours + numHours);

  return dateCopy;
}

/**
 * Add a number of days to a date.
 * @param {Date} date
 * @param {number} numDays
 * @returns {Date}
 */
function addDays(date = new Date(), numDays = 0) {
  const dateCopy = new Date(date);

  const currentDate = dateCopy.getDate();
  dateCopy.setDate(currentDate + numDays);

  return dateCopy;
}

/**
 * Add a number of months to a date.
 * @param {Date} date
 * @param {number} numMonths
 * @returns {Date}
 */
function addMonths(date = new Date(), numMonths = 0) {
  const dateCopy = new Date(date);

  const currentMonth = dateCopy.getMonth();
  dateCopy.setMonth(currentMonth + numMonths);

  return dateCopy;
}

/**
 * Add a number of years to a date.
 * @param {Date} date
 * @param {number} numYears
 * @returns {Date}
 */
function addYears(date = new Date(), numYears = 0) {
  const dateCopy = new Date(date);

  const currentYear = dateCopy.getFullYear();
  dateCopy.setFullYear(currentYear + numYears);

  return dateCopy;
}

export {
  getDay,
  getMonth,
  addSeconds,
  addMinutes,
  addHours,
  addDays,
  addMonths,
  addYears
};

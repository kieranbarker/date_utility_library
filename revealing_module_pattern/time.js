const Time = (function() {

  'use strict';

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
    const seconds = date.getSeconds();
    date.setSeconds(seconds + numSeconds);
    return date;
  }

  /**
   * Add a number of minutes to a date.
   * @param {Date} date
   * @param {number} numMinutes
   * @returns {Date}
   */
  function addMinutes(date = new Date(), numMinutes = 0) {
    const minutes = date.getMinutes();
    date.setMinutes(minutes + numMinutes);
    return date;
  }

  /**
   * Add a number of hours to a date.
   * @param {Date} date
   * @param {number} numHours
   * @returns {Date}
   */
  function addHours(date = new Date(), numHours = 0) {
    const hours = date.getHours();
    date.setHours(hours + numHours);
    return date;
  }

  /**
   * Add a number of days to a date.
   * @param {Date} date
   * @param {number} numDays
   * @returns {Date}
   */
  function addDays(date = new Date(), numDays = 0) {
    const currentDate = date.getDate();
    date.setDate(currentDate + numDays);
    return date;
  }

  /**
   * Add a number of months to a date.
   * @param {Date} date
   * @param {number} numMonths
   * @returns {Date}
   */
  function addMonths(date = new Date(), numMonths = 0) {
    const currentMonth = date.getMonth();
    date.setMonth(currentMonth + numMonths);
    return date;
  }

  /**
   * Add a number of years to a date.
   * @param {Date} date
   * @param {number} numYears
   * @returns {Date}
   */
  function addYears(date = new Date(), numYears = 0) {
    const currentYear = date.getFullYear();
    date.setFullYear(currentYear + numYears);
    return date;
  }

  return {
    getDay,
    getMonth,
    addSeconds,
    addMinutes,
    addHours,
    addDays,
    addMonths,
    addYears
  };

})();

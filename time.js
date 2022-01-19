// @ts-check

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
   * @param {number} days
   * @returns {Date}
   */
  function addDays(date = new Date(), days = 0) {
    const dateCopy = new Date(date);

    const currentDate = dateCopy.getDate();
    dateCopy.setDate(currentDate + days);

    return dateCopy;
  }

  /**
   * Add a number of months to a date.
   * @param {Date} date
   * @param {number} months
   * @returns {Date}
   */
  function addMonths(date = new Date(), months = 0) {
    const dateCopy = new Date(date);

    const currentMonth = dateCopy.getMonth();
    dateCopy.setMonth(currentMonth + months);

    return dateCopy;
  }

  /**
   * Add a number of years to a date.
   * @param {Date} date
   * @param {number} years
   * @returns {Date}
   */
  function addYears(date = new Date(), years = 0) {
    const dateCopy = new Date(date);

    const currentYear = dateCopy.getFullYear();
    dateCopy.setFullYear(currentYear + years);

    return dateCopy;
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

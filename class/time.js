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

class Time {
  constructor(...args) {
    this.date = new Date(...args);
  }

  getDay() {
    const index = this.date.getDay();
    return days[index];
  }

  getMonth() {
    const index = this.date.getMonth();
    return months[index];
  }

  addSeconds(numSeconds = 0) {
    const seconds = this.date.getSeconds();
    this.date.setSeconds(seconds + numSeconds);
    return this;
  }

  addMinutes(numMinutes = 0) {
    const minutes = this.date.getMinutes();
    this.date.setMinutes(minutes + numMinutes);
    return this;
  }

  addHours(numHours = 0) {
    const hours = this.date.getHours();
    this.date.setHours(hours + numHours);
    return this;
  }

  addDays(numDays = 0) {
    const currentDate = this.date.getDate();
    this.date.setDate(currentDate + numDays);
    return this;
  }

  addMonths(numMonths = 0) {
    const currentMonth = this.date.getMonth();
    this.date.setMonth(currentMonth + numMonths);
    return this;
  }

  addYears(numYears = 0) {
    const currentYear = this.date.getFullYear();
    this.date.setFullYear(currentYear + numYears);
    return this;
  }
}

export default Time;

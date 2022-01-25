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

class Time extends Date {
  constructor(...args) {
    super(...args);
  }

  getDayName() {
    const index = this.getDay();
    return days[index];
  }

  getMonthName() {
    const index = this.getMonth();
    return months[index];
  }

  addSeconds(numSeconds = 0) {
    const seconds = this.getSeconds();
    this.setSeconds(seconds + numSeconds);
    return this;
  }

  addMinutes(numMinutes = 0) {
    const minutes = this.getMinutes();
    this.setMinutes(minutes + numMinutes);
    return this;
  }

  addHours(numHours = 0) {
    const hours = this.getHours();
    this.setHours(hours + numHours);
    return this;
  }

  addDays(numDays = 0) {
    const currentDate = this.getDate();
    this.setDate(currentDate + numDays);
    return this;
  }

  addMonths(numMonths = 0) {
    const currentMonth = this.getMonth();
    this.setMonth(currentMonth + numMonths);
    return this;
  }

  addYears(numYears = 0) {
    const currentYear = this.getFullYear();
    this.setFullYear(currentYear + numYears);
    return this;
  }
}

export default Time;

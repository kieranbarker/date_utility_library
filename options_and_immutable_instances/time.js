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
  constructor(options = {}, ...args) {
    const settings = { days, months, ...options };

    if (settings.days.length !== 7) {
      throw new RangeError('Expected 7 days.');
    }

    if (settings.months.length !== 12) {
      throw new RangeError('Expected 12 months.');
    }

    this.settings = settings;
    this.date = new Date(...args);
  }

  getDay() {
    const index = this.date.getDay();
    return this.settings.days[index];
  }

  getMonth() {
    const index = this.date.getMonth();
    return this.settings.months[index];
  }

  addSeconds(numSeconds = 0) {
    const copy = new Time(this.settings, this.date);

    const seconds = copy.date.getSeconds();
    copy.date.setSeconds(seconds + numSeconds);

    return copy;
  }

  addMinutes(numMinutes = 0) {
    const copy = new Time(this.settings, this.date);

    const minutes = copy.date.getMinutes();
    copy.date.setMinutes(minutes + numMinutes);

    return copy;
  }

  addHours(numHours = 0) {
    const copy = new Time(this.settings, this.date);

    const hours = copy.date.getHours();
    copy.date.setHours(hours + numHours);

    return copy;
  }

  addDays(numDays = 0) {
    const copy = new Time(this.settings, this.date);

    const currentDate = copy.date.getDate();
    copy.date.setDate(currentDate + numDays);

    return copy;
  }

  addMonths(numMonths = 0) {
    const copy = new Time(this.settings, this.date);

    const currentMonth = copy.date.getMonth();
    copy.date.setMonth(currentMonth + numMonths);

    return copy;
  }

  addYears(numYears = 0) {
    const copy = new Time(this.settings, this.date);

    const currentYear = copy.date.getFullYear();
    copy.date.setFullYear(currentYear + numYears);

    return copy;
  }
}

export default Time;

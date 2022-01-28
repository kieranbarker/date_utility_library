import { emitEvent } from './helpers.js';

const eventName = 'time:update';
const privateData = new WeakMap();

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

    privateData.set(this, { settings, date: new Date(...args) });
  }

  get date() {
    return privateData.get(this).date;
  }

  getDay() {
    const { settings, date } = privateData.get(this);
    const index = date.getDay();
    return settings.days[index];
  }

  getMonth() {
    const { settings, date } = privateData.get(this);
    const index = date.getMonth();
    return settings.months[index];
  }

  addSeconds(numSeconds = 0) {
    const { settings, date } = privateData.get(this);
    const copy = new Time(settings, date);

    const seconds = copy.date.getSeconds();
    copy.date.setSeconds(seconds + numSeconds);

    const shouldUpdateTime = emitEvent(eventName, { time: copy }, document);
    return shouldUpdateTime ? copy : this;
  }

  addMinutes(numMinutes = 0) {
    const { settings, date } = privateData.get(this);
    const copy = new Time(settings, date);

    const minutes = copy.date.getMinutes();
    copy.date.setMinutes(minutes + numMinutes);

    const shouldUpdateTime = emitEvent(eventName, { time: copy }, document);
    return shouldUpdateTime ? copy : this;
  }

  addHours(numHours = 0) {
    const { settings, date } = privateData.get(this);
    const copy = new Time(settings, date);

    const hours = copy.date.getHours();
    copy.date.setHours(hours + numHours);

    const shouldUpdateTime = emitEvent(eventName, { time: copy }, document);
    return shouldUpdateTime ? copy : this;
  }

  addDays(numDays = 0) {
    const { settings, date } = privateData.get(this);
    const copy = new Time(settings, date);

    const currentDate = copy.date.getDate();
    copy.date.setDate(currentDate + numDays);

    const shouldUpdateTime = emitEvent(eventName, { time: copy }, document);
    return shouldUpdateTime ? copy : this;
  }

  addMonths(numMonths = 0) {
    const { settings, date } = privateData.get(this);
    const copy = new Time(settings, date);

    const currentMonth = copy.date.getMonth();
    copy.date.setMonth(currentMonth + numMonths);

    const shouldUpdateTime = emitEvent(eventName, { time: copy }, document);
    return shouldUpdateTime ? copy : this;
  }

  addYears(numYears = 0) {
    const { settings, date } = privateData.get(this);
    const copy = new Time(settings, date);

    const currentYear = copy.date.getFullYear();
    copy.date.setFullYear(currentYear + numYears);

    const shouldUpdateTime = emitEvent(eventName, { time: copy }, document);
    return shouldUpdateTime ? copy : this;
  }
}

export default Time;

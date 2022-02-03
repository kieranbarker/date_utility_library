/*! Time 1.0.0 | A simple date utility library | Copyright 2022 | MIT license */
/**
 * Emit a custom event.
 * @param {string} type The event type.
 * @param {*} detail Custom data to be associated with the event.
 * @param {EventTarget} target The event target.
 * @returns {boolean} Whether the event was canceled.
 */
function emitEvent(type, detail = null, target = window) {
  if (typeof type !== 'string') {
    throw new TypeError('Expected a name for the custom event.');
  }

  const event = new CustomEvent(type, {
    detail,
    bubbles: true,
    cancelable: true
  });

  return target.dispatchEvent(event);
}

const privateData = new WeakMap();

const eventPrefix = 'time:';
const eventTarget = document;

const events = {
  ready: eventPrefix + 'ready',
  update: eventPrefix + 'update'
};

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
    emitEvent(events.ready, { time: this }, eventTarget);
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

    const shouldUpdate = emitEvent(events.update, {
      time: copy,
      type: 'seconds',
      number: numSeconds
    }, eventTarget);

    return shouldUpdate ? copy : this;
  }

  addMinutes(numMinutes = 0) {
    const { settings, date } = privateData.get(this);
    const copy = new Time(settings, date);

    const minutes = copy.date.getMinutes();
    copy.date.setMinutes(minutes + numMinutes);

    const shouldUpdate = emitEvent(events.update, {
      time: copy,
      type: 'minutes',
      number: numMinutes
    }, eventTarget);

    return shouldUpdate ? copy : this;
  }

  addHours(numHours = 0) {
    const { settings, date } = privateData.get(this);
    const copy = new Time(settings, date);

    const hours = copy.date.getHours();
    copy.date.setHours(hours + numHours);

    const shouldUpdate = emitEvent(events.update, {
      time: copy,
      type: 'hours',
      number: numHours
    }, eventTarget);

    return shouldUpdate ? copy : this;
  }

  addDays(numDays = 0) {
    const { settings, date } = privateData.get(this);
    const copy = new Time(settings, date);

    const currentDate = copy.date.getDate();
    copy.date.setDate(currentDate + numDays);

    const shouldUpdate = emitEvent(events.update, {
      time: copy,
      type: 'days',
      number: numDays
    }, eventTarget);

    return shouldUpdate ? copy : this;
  }

  addMonths(numMonths = 0) {
    const { settings, date } = privateData.get(this);
    const copy = new Time(settings, date);

    const currentMonth = copy.date.getMonth();
    copy.date.setMonth(currentMonth + numMonths);

    const shouldUpdate = emitEvent(events.update, {
      time: copy,
      type: 'months',
      number: numMonths
    }, eventTarget);

    return shouldUpdate ? copy : this;
  }

  addYears(numYears = 0) {
    const { settings, date } = privateData.get(this);
    const copy = new Time(settings, date);

    const currentYear = copy.date.getFullYear();
    copy.date.setFullYear(currentYear + numYears);

    const shouldUpdate = emitEvent(events.update, {
      time: copy,
      type: 'years',
      number: numYears
    }, eventTarget);

    return shouldUpdate ? copy : this;
  }
}

export { Time as default };

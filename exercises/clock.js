/*

Observations from the test cases:
- need a class clock

- class has static method at that takes hours and minutes and
  returns a clock object
-> class needs constructor

- other class methods work on a clock object (ie. non static):
- add() and subtract() take the amount of minutes and add and subtract them
  from the time of the clock object.

- two clocks are considered the same when they have the same hours and minutes.

- for adding minutes:
  convert time to minutes
  add minutes
  subtract full days from result
  convert to time again

*/


const HOUR = 60;
const DAY = HOUR * 24;

class Clock {
  constructor(hours, minutes = 0) {
    this.hours = hours;
    this.minutes = minutes;
  }

  static at(hours, minutes) {
    return new Clock(hours, minutes);
  }

  toString() {
    return `${String(this.hours).padStart(2, "0")}:${String(this.minutes).padStart(2, "0")}`;
  }

  isEqual(clock) {
    return this.toString() === clock.toString();
  }

  add(minutes) {
    this._setFromMinutes(this._toMinutes() + minutes);
    return this;
  }

  subtract(minutes) {
    this._setFromMinutes(this._toMinutes() - minutes);
    return this;
  }

  _toMinutes() {
    return (this.hours * 60) + this.minutes;
  }

  _setFromMinutes(minutes) {
    minutes %= DAY;
    minutes = minutes > 0 ? minutes : minutes + DAY;
    this.hours = Math.floor(minutes / HOUR);
    this.minutes = minutes % HOUR;
  }
}


module.exports = Clock;
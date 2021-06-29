/*

- Meetup constructor takes year and month
- Meetup method day() takes weekday-string and descriptor-toString
- Day() return date string

*/

const WEEK = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
const ORDER = ["first", "second", "third", "fourth", "fifth"];

class Meetup {
  constructor(year, month) {
    this.year = year;
    this.month = month - 1;
    this.monthLength = (new Date(this.year, this.month + 1, 0)).getDate();
  }

  day(dOWString, descriptor) {
    let dayOfWeek = WEEK.indexOf(dOWString.toLowerCase());
    let count = ORDER.indexOf(descriptor.toLowerCase());
    let day;

    if (descriptor.toLowerCase() === "last") {
      day = this._getLast(dayOfWeek);

    } else {
      day = this._getFirst(dayOfWeek);

      if (count !== -1) {
        day += count * 7;
        if (day > this.monthLength) return null;

      } else {
        do {
          day += 7;
        } while (day < 13);
      }
    }

    return new Date(this.year, this.month, day);
  }

  _getFirst(dayOfWeek) {
    return 1 +
      ((7 + dayOfWeek - (new Date(this.year, this.month, 1)).getDay()) % 7);
  }

  _getLast(dayOfWeek) {
    return this.monthLength -
      ((7 - dayOfWeek + (new Date(this.year, this.month + 1, 0)).getDay()) % 7);
  }
}

module.exports = Meetup;
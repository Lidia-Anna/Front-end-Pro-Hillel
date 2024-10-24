'use strict';

(function () {
  const user = {
    _name: 'Leo',
    _age: '10',
    get ourName() {
      return this._name;
    },
    set ourName(value) {
      this._name = value;
    },
    get ourAge() {
      return this._age;
    },
    set ourAge(value) {
      if (!(typeof value === 'number') || value < 0 || value > 120) { throw new Error('Not a number or <0 or >120'); } else {
        this._age = value;
      }
    },
  };
  console.log(user.ourName);
  user.ourName = 'Lidia';
  console.log(user.ourName);
  console.log(user.ourAge);
  user.ourAge = 30;
  console.log(user.ourAge);
}());

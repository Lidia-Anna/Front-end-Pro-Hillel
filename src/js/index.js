'use strict';

(function () {
  const Student = function (name, surname, birthdayYear) {
    this.name = name;
    this.surname = surname;
    this.birthdayYear = birthdayYear;
    this.arrPresent = [];
    this.arrMark = [];
    this.indexPresent = 0;
    this.indexNote = 0;
  };
  Student.prototype.studenYears = function () {
    const currentYear = new Date().getFullYear();
    return currentYear - this.birthdayYear;
  };
  Student.prototype.present = function () {
    if (this.indexPresent === 10) this.indexPresent = 0;
    this.arrPresent[this.indexPresent] = true;
    this.indexPresent += 1;
  };
  Student.prototype.absent = function () {
    if (this.indexPresent === 10) this.indexPresent = 0;
    this.arrPresent[this.indexPresent] = false;
    this.indexPresent += 1;
  };
  Student.prototype.mark = function (note) {
    if (note < 0 || note > 10) throw new Error('note < 0 or note > 10');
    if (this.indexNote === 10) this.indexNote = 0;
    this.arrMark[this.indexNote] = note;
    this.indexNote += 1;
  };
  Student.prototype.summary = function () {
    let sumNote = 0;
    this.arrMark.forEach((i, value) => { sumNote += value; });
    const avgNote = this.arrMark.length ? sumNote / this.arrMark.length : 0;

    let sumPresent = 0;
    this.arrMark.forEach((i, value) => { sumPresent += value; });
    const avgPresent = this.arrMark.length ? sumPresent / this.arrMark.length : 0;

    if (avgNote > 9 && avgPresent > 0.9) return 'Ух ти, який молодчинка!';
    if (avgNote > 9 || avgPresent > 0.9) return 'Нормально, але можна краще';

    return 'Редька!';
  };
  const student1 = new Student('Alise', 'Mulles', 1990);
  console.log(student1.studenYears());
  student1.present();
  student1.present();
  student1.present();
  student1.mark(5);
  student1.mark(6);
  student1.mark(7);
  student1.mark(8);
  student1.mark(10);
  console.log(student1.summary());
}());

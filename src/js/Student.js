function Student(name, surname, birthdayYear) {
  this.name = name;
  this.surname = surname;
  this.birthdayYear = birthdayYear;
  this.arrPresent = [];
  this.arrMark = [];
  this.indexPresent = 0;
  this.indexNote = 0;
}
Student.prototype.studentYears = function () {
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
  const minNote = 0;
  const maxNote = 10;
  if (note < minNote || note > maxNote) throw new Error(`Note < ${minNote} or Mote > ${maxNote}`);
  if (this.indexNote === 10) this.indexNote = 0;
  this.arrMark[this.indexNote] = note;
  this.indexNote += 1;
};
Student.prototype.summary = function () {
  let sumNote = 0;
  sumNote = this.arrMark.reduce((acc, item) => acc + item);
  const avgNote = this.arrMark.length ? sumNote / this.arrMark.length : 0;

  let sumPresent = 0;
  this.arrMark.forEach((i, value) => { sumPresent += value; });
  const avgPresent = this.arrMark.length ? sumPresent / this.arrMark.length : 0;

  if (avgNote > 9 && avgPresent > 0.9) return 'Ух ти, який молодчинка!';
  if (avgNote > 9 || avgPresent > 0.9) return 'Нормально, але можна краще';

  return 'Редька!';
};

export default Student;

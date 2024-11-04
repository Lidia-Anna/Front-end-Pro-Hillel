import Student from './Student.js';

(function () {
  const student1 = new Student('Alise', 'Muller', 1990);
  console.log(student1.studentYears());
  student1.present();
  student1.present();
  student1.present();
  student1.present();
  student1.absent();
  student1.mark(5);
  student1.mark(6);
  student1.mark(7);
  student1.mark(8);
  student1.mark(10);
  console.log(student1.summary());
}());

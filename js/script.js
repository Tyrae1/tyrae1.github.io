'use strict';
function fillAttendanceRandom(student, presenceProbability = 0.7) {
    for (let i = 0; i < student.lessonsCount; i++) {
        if (Math.random() < presenceProbability) {
            student.present();
        } else {
            student.absent();
        }
    }
}
const student1 = new Student('John', 'Doe', 2000);
const student2 = new Student('Will', 'Smith', 1968);
const student3 = new Student('Geralt', 'of Rivia', 1211);

fillAttendanceRandom(student1, 0.9);
fillAttendanceRandom(student2, 0.7);
fillAttendanceRandom(student3, 0.5);

student1.setMark(95);
student2.setMark(75);
student3.setMark(66);
student1.setMark(90);
student2.setMark(70);
student3.setMark(60);
student1.setMark(95);
student2.setMark(80);
student3.setMark(75);

console.log(student1.getFullName(), student1.getAge(), student1.getAverageMark(), student1.summary());
console.log(student2.getFullName(), student2.getAge(), student2.getAverageMark(), student2.summary());
console.log(student3.getFullName(), student3.getAge(), student3.getAverageMark(), student3.summary());
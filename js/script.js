'use strict';
function fillAttendanceRandom(student, presenceProbability = 0.7) {
    for (let i = 0; i < 25; i++) {
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

student1.studRating.push(95, 99, 85, 90, 84);
student2.studRating.push(75, 70, 90, 80, 97);
student3.studRating.push(66, 68, 68, 70, 65);

console.log(student1.getFullName(), student1.getAge(), student1.getAverageMark(), student1.summary());
console.log(student2.getFullName(), student2.getAge(), student2.getAverageMark(), student2.summary());
console.log(student3.getFullName(), student3.getAge(), student3.getAverageMark(), student3.summary());
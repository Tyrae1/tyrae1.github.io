'use strict';
function Student (firstName, lastName, birthYear) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
    this.studRating = [];
    this.attendance = []/*new Array(25).fill(null)*/;
}
console.log(Student);
Student.prototype.getFullName = function () {
    return this.firstName + " " + this.lastName;
}
Student.prototype.getAge = function () {
    return (new Date().getFullYear() - this.birthYear);
}
Student.prototype.getAverageMark = function () {
    if (this.studRating.length === 0) {
        return 0;
    } else {
        return (this.studRating.reduce((acc, curr) => acc + curr, 0) / this.studRating.length);
    }
}
Student.prototype.present = function () {
    if (this.attendance.length < 25) {
        this.attendance.push(true);
    }
}
Student.prototype.absent = function () {
    if (this.attendance.length < 25) {
        this.attendance.push(false);
    }
}
Student.prototype.summary = function () {
    const attendanceRate = this.attendance.filter(Boolean).length/ this.attendance.length;
    const averageMark = this.getAverageMark();
    if (attendanceRate > 0.9 && averageMark > 90) {
       return  `Молодець!`;
    } else if (attendanceRate > 0.9 || averageMark > 90) {
        return `Добре але можна краще!`;
    } else {
        return `Редиска!`;
    }
}

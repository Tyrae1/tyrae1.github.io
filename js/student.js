'use strict';
class Student {
constructor (firstName, lastName, birthYear) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
    this.studRating = [];
    this.attendance = new Array(25).fill(null);
}
getFullName() {
    return this.firstName + " " + this.lastName;
}
getAge() {
    return (new Date().getFullYear() - this.birthYear);
}
getAverageMark() {
    if (this.studRating.length === 0) {
        return 0;
    } else {
        return (this.studRating.reduce((acc, curr) => acc + curr, 0) / this.studRating.length);
    }
}
present() {
    if (this.attendance.length < 25) {
        this.attendance.push(true);
    }
}
absent() {
    if (this.attendance.length < 25) {
        this.attendance.push(false);
    }
}
summary() {
    const attendanceRate = this.attendance.filter(Boolean).length / this.attendance.length;
    const averageMark = this.getAverageMark();
    if (attendanceRate > 0.9 && averageMark > 90) {
       return  `Молодець!`;
    } else if (attendanceRate > 0.9 || averageMark > 90) {
        return `Добре але можна краще!`;
    } else {
        return `Редиска!`;
    }
}
}
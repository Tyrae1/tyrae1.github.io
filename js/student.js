'use strict';
class Student {
    constructor (firstName, lastName, birthYear, lessonsCount = 25) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthYear = birthYear;
        this.lessonsCount = lessonsCount;
        this.marks = new Array(lessonsCount);
        this.attendances = new Array(lessonsCount);
        this.currentLesson = 1;
        this.minMark = 0;
        this.maxMark = 100;
    }
    getFullName() {
        return this.firstName + " " + this.lastName;
    }
    getAge() {
        return new Date().getFullYear() - this.birthYear;
    }
    _getCurrentLessonIndex () {
        return this.currentLesson - 1;
    }
    getAverageMark() {
        if (this.marks.length === 0) {
            return 0;
        } else {
            return (this.marks.reduce((acc, curr) => acc + curr, 0) / this.marks.length);
        }
    }
    _setAttendance (isPresent) {
        if (typeof isPresent !== 'boolean') {
            throw new Error('isPresent should be a boolean');
        }
        if (this.currentLesson > this.lessonsCount) {
            throw new Error(`lessonsCount must be less than or equal ${this.lessonsCount}`);
        }
        this.attendances[this._getCurrentLessonIndex()] = isPresent;
        this.currentLesson += 1;
    }
    _calcAvgMark() {
        const marksData = this.marks.reduce((acc, mark) => {
             acc.sum += mark;
             acc.count += 1;
            return acc;
        }, {sum: 0, count: 0});
        return Math.floor(marksData.sum / marksData.count);
    }
    _calcAvgAttd() {
        const { visited, count} = this.attendances.reduce((acc, attd) => {
            if (attd) acc.visited += 1;
            if (typeof attd === 'boolean') acc.count += 1;
            return acc;
        }, {visited: 0, count: 0});
        return Number((visited / count).toFixed(2))
    }
    present() {
        this._setAttendance(true);
    }
    absent() {
        this._setAttendance(false);
    }
    setMark(mark) {
        if(typeof mark !== "number" || isNaN(mark) ) throw new Error('mark should be a number');
        if(mark < this.minMark || mark > this.maxMark) throw new Error('mark must be less than 100 and more than 0');

        const currentLessonIndex = this._getCurrentLessonIndex() - 1;
        if(this.attendances[currentLessonIndex]) {
            this.marks[currentLessonIndex] = mark;
        } else {
            console.warn('You cannot set mark for this lesson');
        }
    }
    summary() {
        const attendanceRate = this._calcAvgAttd();
        const averageMark = this._calcAvgMark();
        if (attendanceRate > 0.9 && averageMark > 90) {
            return  `Молодець!`;
        } else if (attendanceRate > 0.9 || averageMark > 90) {
            return `Добре але можна краще!`;
        } else {
            return `Редиска!`;
        }
    }
}
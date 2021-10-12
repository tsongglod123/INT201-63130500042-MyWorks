const grade = {
	A: 4,
	"B+": 3.5,
	B: 3,
	"C+": 2.5,
	C: 2,
	"D+": 1.5,
	D: 1,
	F: 0,
	Fa: 0,
	Fe: 0,
};
class Student {
	constructor(id = 63130500000, name = "unknown", lastName = "unknown") {
		this._id = id;
		this._name = name;
		this._lastName = lastName;
		this._totalScore = 0;
		this._totalCredit = 0;
		this._GPAX = 0;
		this._status = null;
		this._details = {
			y1: [
				{
					// s1
					regisSubjects: {}, // subject : credit
					grade: {}, // subject : grade
					regisCredits: 0, // from regisSubjects
					useForCal: 0,
					score: 0, // A = 4 etc.
					GPA: 0,
				},
				{
					// s2
					regisSubjects: {}, // subject : unit
					grade: {}, // subject : grade
					regisCredits: 0,
					useForCal: 0, // from regisSubjects
					score: 0, // A = 4 etc.
					GPA: 0,
				},
			],
		};
	}
	get stdGPAX() {
		return this._GPAX;
	}
	get details() {
		return this._details;
	}
	addGrade(year, semester, subject, grade) {
		this._details[`y${year}`][semester - 1].grade[subject] = grade;
	}
	addRegisSubject(year, semester, subject, credit) {
		this._details[`y${year}`][semester - 1].regisSubjects[subject] = credit;
	}
	regisCredits(year, semester) {
		let regisSubjects =
			this._details[`y${year}`][semester - 1].regisSubjects;
		let temp = 0;
		for (const subject in regisSubjects) {
			temp += regisSubjects[subject];
		}
		this._details[`y${year}`][semester - 1].regisCredits = temp;
	}
	getRegisCredits(year, semester) {
		return this._details[`y${year}`][semester - 1].regisCredits;
	}
    getScore(year, semester) {
        return this._details[`y${year}`][semester - 1].score;
    }
	totalScore(year, semester) {
		let regisSubjects =
			this._details[`y${year}`][semester - 1].regisSubjects;
		let useForCal = this._details[`y${year}`][semester - 1].grade;
		let temp = null;
		for (const subject in useForCal) {
			temp = useForCal[subject];
			for (const key in grade) {
				if (temp == key) {
					this._details[`y${year}`][semester - 1].score +=
						grade[key] * regisSubjects[subject];
				}
			}
		}
	}
    gpa(year, semester) {
        let score = this.getScore(year, semester);
        let credit = this.getRegisCredits(year, semester);
        this._details[`y${year}`][semester - 1].GPA = score/credit;
    }
    getGPA(year, semester) {
        return this._details[`y${year}`][semester - 1].GPA;
    }
    gpax() {
        for (let y = 1; y <= Object.keys(this._details).length; y++) {
			for (let s = 1; s <= this._details[`y${y}`].length; s++) {
				let temp = this._details[`y${y}`][s - 1].score;
				this._totalScore += temp;
			}
		}
        this._GPAX = this._totalScore/this._totalCredit;
    }
	get totalRegisCredit() {
		for (let y = 1; y <= Object.keys(this._details).length; y++) {
			for (let s = 1; s <= this._details[`y${y}`].length; s++) {
				let temp = this._details[`y${y}`][s - 1].regisCredits;
				this._totalCredit += temp;
			}
		}
		return this._totalCredit;
	}
}

let student = new Student();
student.addRegisSubject(1, 1, "GEN101", 1);
student.addRegisSubject(1, 1, "GEN121", 3);
student.addRegisSubject(1, 1, "LNG220", 3);
student.addRegisSubject(1, 1, "INT114", 3);
student.addRegisSubject(1, 1, "INT101", 3);
student.addRegisSubject(1, 1, "INT100", 3);
student.addRegisSubject(1, 1, "INT102", 1);
student.addRegisSubject(1, 2, "GEN111", 3);
student.addRegisSubject(1, 2, "INT103", 3);
student.addRegisSubject(1, 2, "INT104", 3);
student.addRegisSubject(1, 2, "INT107", 3);
student.addRegisSubject(1, 2, "INT105", 1);
student.addRegisSubject(1, 2, "INT200", 1);
student.addRegisSubject(1, 2, "LNG332", 3);

student.addGrade(1, 1, "GEN121", "A");
student.addGrade(1, 1, "LNG220", "B+");
student.addGrade(1, 1, "GEN101", "B+");
student.addGrade(1, 1, "INT114", "B+");
student.addGrade(1, 1, "INT101", "B+");
student.addGrade(1, 1, "INT100", "A");
student.addGrade(1, 1, "INT102", "A");
student.addGrade(1, 2, "GEN111", "B+");
student.addGrade(1, 2, "INT103", "B+");
student.addGrade(1, 2, "INT104", "A");
student.addGrade(1, 2, "INT107", "B+");
student.addGrade(1, 2, "INT105", "A");
student.addGrade(1, 2, "INT200", "A");
student.addGrade(1, 2, "LNG332", "A");

// already add subjects
student.regisCredits(1, 1);
student.regisCredits(1, 2);
student.totalScore(1, 1);
student.totalScore(1, 2);
student.totalRegisCredit;
student.gpa(1, 1);
student.gpa(1, 2);
student.gpax();
console.log(student);

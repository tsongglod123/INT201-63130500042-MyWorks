class Player {
	constructor(name) {
		if (name === undefined || name === null) {
			this._name = "GUEST";
		} else {
			this._name = name;
		}
		this._score = 0;
		this._answers = {};
	}
	set name(name) {
		this._name = name;
	}
	get name() {
		return this._name;
	}
	get score() {
		return this._score;
	}
	get answers() {
		return this._answers;
	}
	addScore() {
		this._score += 1;
	}
	addAnswer(q, a) {
		this._answers[q] = a;
	}
}

const questions = [
	{
		question: "2 + 2 = ?",
		choices: [99, 69, 0, 4],
		answer: 4,
	},
	{
		question: "6 + 2 = ?",
		choices: [99, 69, 8, 4],
		answer: 3,
	},
	{
		question: "sqrt(sqrt(2^4)) = ?",
		choices: [2, 1, 0, 4],
		answer: 1,
	},
	{
		question: "2x + 1 = 0 then x = ?",
		choices: [0, 0.5, 1, -0.5],
		answer: 4,
	},
	{
		question: "What is the largest 3 digit composite number?",
		choices: [999, 998, 100, 900],
		answer: 1,
	},
];

for (const [key, q] of questions.entries()) {
	console.log(key + 1 + ") " + q.question);
	for (const [key, choice] of q.choices.entries()) {
		console.log("\t " + (key + 1) + ". " + choice);
	}
}

const p1 = new Player();

p1.addAnswer(1, 4);
p1.addAnswer(5, 2);
p1.addAnswer(3, 1);

for (const q in p1.answers) {
    if (questions[q - 1].answer == p1.answers[q]) {
        p1.addScore();
    }
}
console.log(p1);

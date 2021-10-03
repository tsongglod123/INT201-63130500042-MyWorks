// 2 players
// win lose draw

class Player {
	constructor(name) {
		if (name === undefined || name === null) {
			this._name = "GUEST";
		} else {
			this._name = name;
		}
	}
	set name(value) {
		this._name = value;
	}
	get name() {
		return this._name;
	}
}

const game = {
	total_round: 0,
	p1: {
		details: null,
		dice_face: [],
		results: [],
		score: 0,
	},
	p2: {
		details: null,
		dice_face: [],
		results: [],
		score: 0,
	},
	winner: null,
};

const dice = {
	random: () => {
		return Math.floor(Math.random() * 6) + 1;
	},
};

const playDiceGame = (game, dice, round) => {
	if (round <= 0) {
		return -1;
	} else {
		game.total_round = round;
		for (let i = 0; i < round; i++) {
			game.p1.dice_face.push(dice.random());
			game.p2.dice_face.push(dice.random());
			if (game.p1.dice_face[i] > game.p2.dice_face[i]) {
				game.p1.results.push("W");
				game.p1.score += 1;
				game.p2.results.push("L");
			} else if (game.p1.dice_face[i] == game.p2.dice_face[i]) {
				game.p1.results.push("D");
				game.p2.results.push("D");
			} else {
				game.p1.results.push("L");
				game.p2.results.push("W");
				game.p2.score += 1;
			}
		}
		if (game.p1.score > game.p2.score) {
			game.winner = game.p1.details.name;
		} else if (game.p1.score == game.p2.score) {
			game.winner = "DRAW!!!";
		} else {
			game.winner = game.p2.details.name;
		}
		return game;
	}
};

const p1 = new Player();
const p2 = new Player("GOD");

game.p1.details = p1;
game.p2.details = p2;

let round = 5;

console.log(playDiceGame(game, dice, round));

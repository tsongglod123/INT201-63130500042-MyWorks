// (attack * skill) / 500

// Any attacks that have the same attacking card class as the body class will get a 10% bonus.
// For example Imp (110 base damage) on a beast will do 121 damage.

// Every class in Axie Infinity has classes that it gets a 15% damage bonus against,
// and there’s other classes that get a bonus against it.

// https://binaryassets.io/eth-dapps/axie-infinity-damage-shield-explained/

// egg
// https://storage.googleapis.com/axie-cdn/avatars/egg/class1-class2-egg-full-transparent.png

const getAPI_URL = (id) => {
	let url = "https://api.axie.technology/getaxies/";
	return url + id;
};

const getImage = (id) => {
	if (id >= 1 && id < 5) {
		let url =
			"https://storage.googleapis.com/axie-cdn/avatars/larva/meo-larva-full-transparent.png";
		return url;
	} else {
		let url =
			"https://storage.googleapis.com/assets.axieinfinity.com/axies/id/axie/axie-full-transparent.png";
		return url.replace("id", id);
	}
};

const getAxieById = () => {
	const AXIE_ID = document.getElementById("id").value;
	let img = document.getElementById("axie_img");
	img.src = getImage(AXIE_ID);

	const URL = getAPI_URL(AXIE_ID);
	fetch(URL)
		.then((res) => res.json())
		.then((data) => {
			let cards = new Array();
			const skill = {
				cards: {},
			};
			const axie = {
				details: {
					id: 0,
					class: null,
					stats: {},
				},
				cards: {},
			};
			for (let i = 0; i < data.parts.length; i++) {
				if (!(data.parts[i].abilities[0] === undefined)) {
					skill.cards[data.parts[i].abilities[0].name] =
						data.parts[i].abilities[0];
					cards.push(data.parts[i].abilities[0].name);
				}
			}
			axie.details.id = AXIE_ID;
			axie.details.stats = data.stats;
			axie.details.class = data.class;
			axie.cards = skill.cards;
			delete axie.details.stats.__typename;
			for (const name in axie.cards) {
				delete axie.cards[name].backgroundUrl;
				delete axie.cards[name].effectIconUrl;
				delete axie.cards[name].__typename;
				delete axie.cards[name].name;
			}
			document.getElementById("stats").style.display = "block";
			for (const stat in axie.details.stats) {
				document.getElementById(stat).style.width = `${axie.details.stats[stat] * 5}px`;
				document.getElementById(stat).innerHTML = axie.details.stats[stat];
			}
			// for (let i = 1; i <= Object.keys(axie.cards).length; i++) {
			// 	let skill = document.getElementById(`axie_skill_${i}`);
			// 	skill.innerHTML = i;
			// }
			console.log(axie);
		});
};

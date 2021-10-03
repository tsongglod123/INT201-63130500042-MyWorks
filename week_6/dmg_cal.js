// เล่น 2 ใบขึ้นไป + การ์ดตรงธาตุ + แพ้ธาตุ
// {[atk + (atk * 0.1)] * 0.15} + (atk * skill)/500
// เล่น 2 ใบขึ้นไป + การ์ดตรงธาตุ + ไม่แพ้ธาตุ
// [atk + (atk * 0.1)] + (atk * skill)/500
// เล่น 2 ใบขึ้นไป + การ์ดไม่ตรงธาตุ + แพ้ธาตุ
// [atk + (atk * 0.15)] + (atk * skill)/500
// เล่น 2 ใบขึ้นไป + การ์ดไม่ตรงธาตุ + ไม่แพ้ธาตุ
// atk + (atk * skill)/500

// เล่น 1 ใบ + การ์ดตรงธาตุ + แพ้ธาตุ
// [atk + (atk * 0.1)] * 0.15
// เล่น 1 ใบ + การ์ดตรงธาตุ + ไม่แพ้ธาตุ
// atk + (atk * 0.1)
// เล่น 1 ใบ + การ์ดไม่ตรงธาตุ + แพ้ธาตุ
// atk + (atk * 0.15)
// เล่น 1 ใบ + การ์ดไม่ตรงธาตุ + ไม่แพ้ธาตุ
// atk

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
			console.log(data);
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
					let id = data.parts[i].abilities[0].id;
					skill.cards[id] = data.parts[i].abilities[0];
					cards.push(id);
				}
			}
			axie.details.id = AXIE_ID;
			axie.details.stats = data.stats;
			axie.details.class = data.class;
			axie.cards = skill.cards;
			delete axie.details.stats.__typename;
			for (const id in axie.cards) {
				delete axie.cards[id].__typename;
				delete axie.cards[id].id;
			}
			document.getElementById("stats").style.display = "block";
			for (const stat in axie.details.stats) {
				let score = document.getElementById(stat);
				score.style.width = `${axie.details.stats[stat] * 5}px`;
				score.innerHTML = axie.details.stats[stat];
			}

			let bg_url = new Array(4);
			let ef_url = new Array(4);
			let desc = new Array(4);
			let energy = new Array(4);
			let card_name = new Array(4);

			for (let i = 0; i < Object.keys(axie.cards).length; i++) {
				if (cards[i].includes("mouth")) {
					const index = 0;
					bg_url[index] = axie.cards[cards[i]].backgroundUrl;
					ef_url[index] = axie.cards[cards[i]].effectIconUrl;
					desc[index] = axie.cards[cards[i]].description;
					energy[index] = axie.cards[cards[i]].energy;
					card_name[index] = axie.cards[cards[i]].name;
				}
				if (cards[i].includes("horn")) {
					const index = 1;
					bg_url[index] = axie.cards[cards[i]].backgroundUrl;
					ef_url[index] = axie.cards[cards[i]].effectIconUrl;
					desc[index] = axie.cards[cards[i]].description;
					energy[index] = axie.cards[cards[i]].energy;
					card_name[index] = axie.cards[cards[i]].name;
				}
				if (cards[i].includes("back")) {
					const index = 2;
					bg_url[index] = axie.cards[cards[i]].backgroundUrl;
					ef_url[index] = axie.cards[cards[i]].effectIconUrl;
					desc[index] = axie.cards[cards[i]].description;
					energy[index] = axie.cards[cards[i]].energy;
					card_name[index] = axie.cards[cards[i]].name;
				}
				if (cards[i].includes("tail")) {
					const index = 3;
					bg_url[index] = axie.cards[cards[i]].backgroundUrl;
					ef_url[index] = axie.cards[cards[i]].effectIconUrl;
					desc[index] = axie.cards[cards[i]].description;
					energy[index] = axie.cards[cards[i]].energy;
					card_name[index] = axie.cards[cards[i]].name;
				}
			}

			if (AXIE_ID >= 5) {
				document.getElementById("skills").style.display = "grid";
			} else {
				document.getElementById("skills").style.display = "none";
			}
			for (let i = 1; i <= Object.keys(axie.cards).length; i++) {
				let bg = document.getElementById(`axie_skill_${i}`);
				let icon = document.getElementById(`eff_icon_${i}`);
				let desc_skill = document.getElementById(`desc_${i}`);
				let en = document.getElementById(`energy_${i}`);
				let name = document.getElementById(`name_${i}`);
				bg.src = bg_url[i - 1];
				icon.src = ef_url[i - 1];
				desc_skill.innerHTML = desc[i - 1];
				en.innerHTML = energy[i - 1];
				name.innerHTML = card_name[i - 1];
			}
			console.log(axie);
		})
		.catch((error) => {
			console.error(error);
		});
};

function change(total_money, cost) {
	const change = {
		total_money: total_money,
		cost: cost,
		change: total_money - cost,
		banks: {},
	};
	if (change.change == 0) {
        delete change.banks;
		return change;
	} else if (change.change < 0) {
		return -1;
	} else {
		const banks = [500, 100, 50, 20, 10, 5, 2, 1];
		let temp = 0;
		let total_change = change.change;
		for (const note of banks) {
			temp = total_change % note;
			total_change -= temp;
			change.banks[`${note}`] = total_change / note;
			total_change = temp;
		}
		return change;
	}
}

console.log(change(1500, 1257));

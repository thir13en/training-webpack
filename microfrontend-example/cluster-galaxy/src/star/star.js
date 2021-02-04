export default class Star {

	render(parentId) {
		const random = Math.random();
		const babyStar = document.createElement('div');
		babyStar.classList.add('star');

		if (random <= .33) {
			console.log('generate white dwarf');
			babyStar.classList.add('white-dwarf');
		} else if (random <= .66) {
			console.log('generate yellow star');
			babyStar.classList.add('yellow');
		} else {
			console.log('generate blue giant');
			babyStar.classList.add('blue-giant');
		}

		document
			.querySelector(parentId)
			.append(babyStar);
	}

}

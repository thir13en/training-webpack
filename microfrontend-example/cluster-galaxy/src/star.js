export default class Star {

	generateStar(babyStar) {
		const random = Math.random();
		babyStar = document.createElement('div');

		if (random <= .33) {
			console.log('generate white dwarf');
			babyStar.style.width = '55px';
			babyStar.style.height = '55px';
			babyStar.style.borderRadius = '5em';
			babyStar.style.border = '2px solid #333';
		} else if (random <= .66) {
			console.log('generate yellow star');
			babyStar.style.width = '55px';
			babyStar.style.height = '55px';
			babyStar.style.borderRadius = '5em';
			babyStar.style.border = '2px solid #333';
		} else {
			console.log('generate blue giant');
			babyStar.style.width = '55px';
			babyStar.style.height = '55px';
			babyStar.style.borderRadius = '5em';
			babyStar.style.border = '2px solid #333';
		}
		document.querySelector('#galaxy').append(babyStar);

	}

	render(star) {
		const babyStar = document.createElement('div');
		
		for (let i=0; i<222; i++) {
			this.generateStar(babyStar);
		}
	}

}

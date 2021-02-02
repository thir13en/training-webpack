class Star {

	generateStar(babyStar) {
		const random = Math.random();

		if (random <= .33) {
			console.log('generate white dwarf');
		} else if (random <= .66) {
			console.log('generate yellow star');
		} else {
			console.log('generate blue giant');
		}

	}

	render() {
		const babyStar = document.createElement('div');
		
		for (let i=0; i<222; i++) {
			this.generateStar(babyStar);
		}
	}

}

const star = new Star();

star.render();
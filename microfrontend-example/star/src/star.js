import BlueGiant from '../img/star.jpeg';

class Star {

	render() {
		const img = document.createElement('img');
		img.alt = 'blue giant';
		img.width = 333;
		img.src = BlueGiant;

		const body = document.querySelector('body');

		body.appendChild(img);
	}

}

const star = new Star();

star.render();
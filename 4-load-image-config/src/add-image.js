import Irmao from '../img/irmao.jpeg';

export default function addImage() {
	const img = document.createElement('img');
	img.alt = 'Irmao Jorel';
	img.width = 333;
	img.src = Irmao;

	const body = document.querySelector('body');

	body.appendChild(img);
}
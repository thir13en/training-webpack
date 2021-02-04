import Star from './star/star.js'
import style from './style.scss';

console.log('wooohoo!');

const star = new Star();

for (let i=0; i<222; i++) {
	star.render('#galaxy');
}

import style from './style.scss';
import('Star/Star')
	.then(StarModule => {
		const Star = StarModule.default;
		const star = new Star();

		for (let i=0; i<222; i++) {
			star.render('#galaxy');
		}
	});

console.log('wooohoo!');

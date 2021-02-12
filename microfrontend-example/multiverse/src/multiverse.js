import style from './multiverse.scss';

const url = window.location.pathname;

if (url === '/galaxy') {
	import ('Galaxy/Galaxy').then(GalaxyRemote => {
		const Galaxy = GalaxyRemote.default;
		const galaxy = new Galaxy();
		galaxy.render();
	});
}
if (url === '/cluster-galaxy') {
	import ('ClusterGalaxy/ClusterGalaxy').then(ClusterGalaxyRemote => {
		const ClusterGalaxy = ClusterGalaxyRemote.default;
		const clusterGalaxy = new ClusterGalaxy();
		clusterGalaxy.render();
	});
}
	import ('Galaxy/Galaxy').then(GalaxyRemote => {
		const Galaxy = GalaxyRemote.default;
		const galaxy = new Galaxy();
		galaxy.render();
	});
console.log('connected...');
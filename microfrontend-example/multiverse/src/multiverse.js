import './multiverse.scss';

const url = window.location.pathname;

if (url === '/galaxy') {
	const GalaxyRemote = async () => await import ('Galaxy/Galaxy');
	const Galaxy = GalaxyRemote().default;
	const galaxy = new Galaxy();
	galaxy.render();
}
if (url === '/cluster-galaxy') {
	const ClusterGalaxyRemote = async () => await import ('ClusterGalaxy/ClusterGalaxy');
	const ClusterGalaxy = ClusterGalaxyRemote().default;
	const clusterGalaxy = new ClusterGalaxy();
	clusterGalaxy.render();
}

const galaxyButton = document.querySelector('.nav-button__galaxy');
const clusterGalaxyButton = document.querySelector('.nav-button__cluster-galaxy');

galaxyButton.addEventListener('click', () => window.location.href = 'galaxy');
clusterGalaxyButton.addEventListener('click', () => window.location.href = 'cluster-galaxy');
console.log(clusterGalaxyButton);

console.log('connected...');
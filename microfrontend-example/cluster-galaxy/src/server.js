const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

app.use('/static', express.static(path.resolve(__dirname, '../dist')));

app.get('/', (req, res) => {
	const htmlFilePath = path.resolve(__dirname, '../dist/cluster-galaxy.html');
	const contentFromHTMLFile = fs.readFileSync(htmlFilePath, 'utf-8');

	res.send(contentFromHTMLFile);
});

app.listen(3000, () => console.log('Init Cluster Galaxy!'));
const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

// With this, we need to append the /static path to all our static HTML imports
app.use('/', express.static(path.resolve(__dirname, '../dist')));

app.get('*', (req, res) => {
	const htmlFilePath = path.resolve(__dirname, '../dist/cluster-galaxy.html');
	const contentFromHTMLFile = fs.readFileSync(htmlFilePath, 'utf-8');

	res.send(contentFromHTMLFile);
});

app.listen(3000, () => console.log('App connected!'));
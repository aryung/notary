const express = require('express');
const bodyParser	= require('body-parser');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Serve static assets
// app.use(express.static(path.resolve(__dirname, 'demos')));
app.use(express.static(path.resolve(__dirname, '')));




// Always return the main index.html, so react-router render the route in the client
app.get('*', (req, res) => {
  res.redirect('index.html');
});



app.listen(PORT, () => {
	console.log(`Listening on ${ PORT }`);
});
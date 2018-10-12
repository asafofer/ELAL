const path = require('path');
const express = require('express');

const app = express();

app.use('/assets', express.static('assets'));

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));


app.get('*', (req, res) => res.redirect('/'));

const PORT = process.env.PORT || 1337;
app.listen(PORT, () => {
  console.log('ELAL is up and running');
});

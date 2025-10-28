const express = require('express');

const app = express();

const HOST= "0.0.0.0";
const PORT = 80;

app.get('/', (req, res) => {
  res.json({
    players: ['Billy', 'John', 'Julie']
  });
});

app.listen(PORT, HOST);
console.log(`App listening on http://${HOST}:${PORT}`)

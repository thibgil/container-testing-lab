const express = require('express');
const { Pool } = require('pg');

const app = express();
const HOST = "0.0.0.0";
const PORT= 80;

const pool = new Pool({ user: 'postgres', host: 'db' });

app.get('/', (req, res) => {
  pool.query('SELECT * FROM apparel', (error, response) => {
    res.json(response.rows);
  });
});

app.listen(PORT, HOST);
console.log(`App listening on http://${HOST}:${PORT}`);

const express = require('express')
const app = express()
const HOST = "0.0.0.0"
const PORT= 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(PORT, HOST);
console.log(`Example app listening on http://${HOST}:${PORT}`);

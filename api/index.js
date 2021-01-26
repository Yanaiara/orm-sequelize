const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.status(200).send({message: 'welcome baby'})
})

app.listen(PORT, () => console.log('rodando'));

module.exports = app;
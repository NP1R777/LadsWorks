/* const express = require("express");

const app = express();

const host = 'localhost';
const port = 8080;
const storageName = 'stocks.json';

const handler = (req, res) => {
    res.writeHead(200);
    res.end('I write server on node.js!');
}

const readJson = (fileName) => {
    const file = fs.readFileSync(path.join(__dirname, fileName), "utf8");
    const json = JSON.parse(file);

    return json;
}



app.get('/music', (req, res) => {
    res.end('Я слушаю только Radiohead!');
})

app.get('/course', (req, res) => {
    res.json({'course': 'ПСП'});
})

app.get('/stocks', (req, res) => {
    const stocks = readJson(storageName);
    res.end(stocks);
})

app.get('/stocks/:id', (req, res) => {
    const id = req.params.id;

    const numberId = Number.parseInt(id);
    if (Number.isNaN(numberId)) {
        res.status(400).send({status: 'Bad request', message: `not found stocks with id ${numberId}`});
    }
})



app.listen(port, host, () => {
    console.log(`Сервер запущен по адресу http://${host}:${port}`);
});
 */

const express = require('express');

const stocks = require('./internal/stocks');

const app = express();

const host = 'localhost';
const port = 8080;

app.use('/stocks', stocks);

app.listen(port, host, () => {
    console.log(`Сервер запущен по адресу http://${host}:${port}`);
})

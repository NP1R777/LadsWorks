/* class Urls {
    constructor() {
        this.url = 'https://api.vk.com/method'
        this.commonInfo = `access_token=vk1.a.e1JvM1Y-XtiioUnmZRREIohe5TWkL8TTlVTGFifhC-1dUY7WvzG6OnILZPa3q_jmc1lqBzr4LRbYHLtle5NMq9ojZpYcRZmblUsdF-IDrR0tEtxuDlJfN_p50S4F44WbkHNL3taMBJIsGc1Ofiy1wqmvnlE9e9A0Cpr-KkUBoDORU3l4mvSSUilClQnHbqJGSvY-F61ETJ_xTzccqeUIBw&v=5.199`
    }

    getGroupMembers() {
        return `${this.url}/groups.getMembers?group_id=228075838&fields=photo_400_orig&${this.commonInfo}`
    }
}


const express = require('express');

const app = express();

const host = 'localhost';
const port = 8080;

app.use(express.json())

app.get('/getData', (req, res) => {
    const url = new Urls();
    const urlData = url.getGroupMembers();
    res.send(fetch(urlData)
    .then(res => res.json())
    .then(out => out.response.items)
    .catch(err => console.log(err)))

    async function Fetching() {
        const response = await fetch(urlData);
        const jsonData = await response.json();
        console.log(jsonData);
    }

    res.send(Fetching())


})

app.listen(port, host, () => {
    console.log(`Сервер запущен по адресу http://${host}:${port}`);
});
 */

const express = require('express');

const cards = require('./internal/cards/index.js');

const app = express();

const host = 'localhost';
const port = 8080;

app.use(express.json());

app.use('/cards', cards);

app.listen(port, host, () => {
    console.log(`Сервер запущен по адресу http://${host}:${port}`);
});

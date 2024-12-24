const { StocksService } = require('./StocksService.js');

class StocksController {
    static findStocks(req, res) {
        try {
            res.send(StocksService.findStocks());
        } catch (err) {
            res.status(400).send({status: 'Bad request', message: err.message});
        }
    }

    static findStocksById(req, res) {
        try {
            const id = Number.parseInt(req.params.id);
            res.send(StocksService.findStocks(id));
        } catch (err) {
            res.status(400).send({status: "Bad request", message: err.message});
        }
    }

    static addStock(req, res) {
        try {
            res.send(StocksService.addStock(req.body));
        } catch (err) {
            res.status(400).send({status: 'Bad request', message: err.message})
        }
    }

    static deleteStock(req, res) {
        try {
            const id = Number.parseInt(req.params.id);
            res.send(StocksService.deleteStock(id));
        } catch (err) {
            res.status(400).send({status: 'Bad request', message: err.message})
        }
    }
}

module.exports = {
    StocksController
}

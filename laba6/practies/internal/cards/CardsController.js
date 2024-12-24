const { CardsService } = require('./CardsServices.js');

class CardsController {
    static findCards(req, res) {
        try {
            res.send(CardsService.findCards());
        } catch (err) {
            res.status(400).send({status: 'Bad request', message: err.message});
        }
    }

    static findCardsById(req, res) {
        try {
            const id = Number.parseInt(req.params.id);
            res.send(CardsService.findCards(id));
        } catch (err) {
            res.status(400).send({status: "Bad request", message: err.message});
        }
    }

    static addCard(req, res) {
        try {
            res.send(CardsService.addCard(req.body));
        } catch (err) {
            res.status(400).send({status: 'Bad request', message: err.message})
        }
    }

    static deleteCard(req, res) {
        try {
            const id = Number.parseInt(req.params.id);
            res.send(CardsService.deleteCard(id));
        } catch (err) {
            res.status(400).send({status: 'Bad request', message: err.message})
        }
    }
}

module.exports = {
    CardsController
}

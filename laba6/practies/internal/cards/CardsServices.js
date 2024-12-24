const { CardsDAO } = require('./CardsDAO.js');

class CardsService {
    static findCards(id) {
        if (id !== undefined) {
            return CardsDAO.findById(id).toJSON();
        }
        
        return CardsDAO.find().map((people) => people.toJSON());
    }

    static addCard(people) {
        return CardsDAO.insert(people).toJSON();
    }

    static deleteCard(id) {
        return CardsDAO.delete(id).map((people) => people.toJSON());
    }
}

module.exports = {
    CardsService
};

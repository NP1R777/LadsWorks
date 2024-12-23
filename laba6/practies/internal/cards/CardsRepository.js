const { DBConnector } = require('../../modules/DBConnector.js')

class CardsRepository {
    static db = new DBConnector('people.json')

    static read() {
        const file = this.db.readFile();

        return JSON.parse(file)
    }

    static write(json) {
        this.db.writeFile(JSON.stringify(json));
    }
}

module.exports = {
    CardsRepository
};

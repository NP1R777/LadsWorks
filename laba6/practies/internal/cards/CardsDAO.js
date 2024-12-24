const { CardsRepository } = require('./CardsRepository.js')

class CardsDAO {
    constructor(id, photo_400_orig, first_name,
                last_name, can_access_closed, is_closed) {
        this.id = id;
        this.photo_400_orig = photo_400_orig;
        this.first_name = first_name;
        this.last_name = last_name;
        this.can_access_closed = can_access_closed;
        this.is_closed = is_closed;
    }

    static _validate(people) {
        if (
            people.id === undefined ||
            people.photo_400_orig === undefined ||
            people.first_name === undefined ||
            people.last_name === undefined ||
            people.can_access_closed === undefined ||
            people.is_closed === undefined
        ) {
            throw new Error('invalidated people data');
        }

        this._validateId(people.id);
    }

    static find() {
        const peoples = CardsRepository.read();

        return peoples.map(({id, photo_400_orig, first_name,
            last_name, can_access_closed, is_closed}) => {
            return new this(id, photo_400_orig, first_name,
                last_name, can_access_closed, is_closed);
        });
    }

    static findById(id) {
        this._validateId(id);

        const peoples = CardsRepository.read();
        const people = peoples.find((s) => s.id === id);

        return new this(people.id, people.photo_400_orig, people.first_name,
            people.last_name, people.can_access_closed, people.is_closed
        );
    }

    static insert(people) {
        this._validate(people);

        const peoples = CardsRepository.read();
        CardsRepository.write([...peoples, people]);

        return new this(people.id, people.photo_400_orig, people.first_name,
            people.last_name, people.can_access_closed, people.is_closed);
    }

    static delete(id) {
        this._validateId(id);

        const peoples = CardsRepository.read();
        const filteredPeoples = peoples.filter((s) => s.id !== id);

        CardsRepository.write(filteredPeoples);

        return filteredPeoples.map(({id, photo_400_orig, first_name,
            last_name, can_access_closed, is_closed}) => {
            return new this(id, photo_400_orig, first_name,
                last_name, can_access_closed, is_closed);
        });
    }

    toJSON() {
        return {
            id: this.id,
            photo_400_orig: this.photo_400_orig,
            first_name: this.first_name,
            last_name: this.last_name,
            can_access_closed: this.can_access_closed,
            is_closed: this.is_closed
        }
    }
}

module.exports = {
    CardsDAO
};

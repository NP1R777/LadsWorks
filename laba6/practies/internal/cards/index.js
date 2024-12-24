const express = require('express');
const { CardsController } = require('./CardsController.js');

const router = express.Router();

router.get('/', CardsController.findCards);
router.get('/:id', CardsController.findCardsById);
router.get('/', CardsController.addCard);
router.get('/:id', CardsController.deleteCard);

module.exports = router;

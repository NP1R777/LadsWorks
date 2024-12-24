const express = require('express');
const { StocksController } = require('./StocksController.js');

const router = express.Router();

router.get('/', StocksController.findStocks);
router.get('/:id', StocksController.findStocksById);
router.get('/', StocksController.addStock);
router.get('/:id', StocksController.deleteStock);

module.exports = router;

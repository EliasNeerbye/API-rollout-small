const router = require('express').Router();

const logger = require('../middleware/logger');

const { getStatus } = require('../controllers/statusController');
const { getAllItems, createItem, deleteItem } = require('../controllers/itemController');

router.use(logger);

router.get('/status', getStatus);
router.get('/items', getAllItems);
router.post('/items', createItem);
router.delete('/items/:id', deleteItem);

module.exports = router;
const { Router } = require('express');
const getAllEvents = require('./getAllEvents');
const getFirstEventsController = require('./getFirstEventsController');
const getMLHEventsController = require('./getMLHEventsController');
const getFirstMLHEventsController = require('./getFirstMLHEventsController');

const router = Router();
router.post('/', getFirstEventsController);
router.get('/all', getAllEvents);
router.post('/mlh', getFirstMLHEventsController);
router.get('/mlh/all', getMLHEventsController);

module.exports = router;

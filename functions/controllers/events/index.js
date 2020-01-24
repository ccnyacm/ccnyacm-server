const { Router } = require('express');
const getAllEvents = require('./getAllEvents');
const getFirstEventsController = require('./getFirstEventsController');
const getMLHEventsController = require('./getMLHEventsController');
const getFirstMLHEventsController = require('./getFirstMLHEventsController');

const router = Router();
router.get('/', getFirstEventsController);
router.get('/all', getAllEvents);
router.get('/mlh', getFirstMLHEventsController);
router.get('/mlh/all', getMLHEventsController);

module.exports = router;

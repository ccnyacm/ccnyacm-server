const { Router } = require('express');
const getAllEvents = require('./getAllEvents');
const getFirstEventsController = require('./getFirstEventsController');

const router = Router();
router.get('/', getFirstEventsController);
router.get('/all', getAllEvents);

module.exports = router;

const { Router } = require('express');
const getAllMembersController = require('./getAllMembersController');
const getMemberByIdController = require('./getMessageByIdController');

const router = Router();

router.post('/id', getMemberByIdController);
router.get('/all', getAllMembersController);

module.exports = router;
const Express = require('express');
  getAboutInfo = require('./about');
  getThingsWeDoInfo = require('./thingsWedo');

const router = Express.Router();

router.get('/about', getAboutInfo);
router.get('/thingswedo', getThingsWeDoInfo);

module.exports = router;

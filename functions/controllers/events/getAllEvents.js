const { getEvents } = require('../../services/eventServices');
const { OK, INTERNAL_SERVER_ERROR } = require('http-status');

/**
 * This function calls the getEvents functions when http request is made
 */
module.exports = async function getAllEvents(req, res) {
  try {
    const events = await getEvents();
    return res.status(OK).json(events);
  }catch (error) {
    return res.status(INTERNAL_SERVER_ERROR).json({ message: error.message });
  }
}
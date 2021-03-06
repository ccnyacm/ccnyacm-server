const { getFirstMLHEvents } = require('../../services/MLHEventServices');
const { OK, INTERNAL_SERVER_ERROR } = require('http-status');

/**
 * This function calls the getFirstMLHEvents method and pass parameters
 * in the body of http request
 */
module.exports = async function getFirstEventsController(req, res) {
  try {
    const { body } = req;
    const { num } = body
    const hackathons = await getFirstMLHEvents(num);
    return res.status(OK).json(hackathons);
  } catch (error) {
    return res.status(INTERNAL_SERVER_ERROR).json({ message: error.message });
  }
}
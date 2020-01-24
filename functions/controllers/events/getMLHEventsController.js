const { getMLHEvents } = require('../../services/MLHEventServices');
const { OK, INTERNAL_SERVER_ERROR } = require('http-status');

module.exports = async function getMLHEventsController(req, res) {
  try {
    const hackathons = await getMLHEvents();
    return res.status(OK).json(hackathons);
  } catch(error) {
    return res.status(INTERNAL_SERVER_ERROR).json({ message: error.message });
  }
}
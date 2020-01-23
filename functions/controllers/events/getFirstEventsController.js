const { getFirstEvents } = require('../../services/eventServices');
const { OK, INTERNAL_SERVER_ERROR } = require('http-status');

/**
 * This function calls the getFirstEvents method and pass parameters
 * in the body of http request
 */
module.exports = async function getFirstEventsController(req, res) {
    try {
        const { body } = req;
        const { num } = body
        const events = await getFirstEvents(num);
        return res.status(OK).json(events);
    } catch (error) {
        return res.status(INTERNAL_SERVER_ERROR).json({ message: error.message });
    }
}
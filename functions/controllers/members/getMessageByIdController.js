const { getMemberById } = require('../../services/memberServices');
const { OK, INTERNAL_SERVER_ERROR } = require('http-status');

module.exports = async function getMemberByIdController(req, res) {
  try {
    const { body } = req;
    const { id } = body;
    const member = await getMemberById(id);
    return res.status(OK).json(member);
  } catch (error) {
    return res.status(INTERNAL_SERVER_ERROR).json({ message: error.message })
  }
}

const { getAllMembers } = require('../../services/memberServices');
const { OK, INTERNAL_SERVER_ERROR } = require('http-status');

module.exports = async function getAllMembersController(req, res) {
  try {
    const members = await getAllMembers();
    return res.status(OK).json(members);
  } catch (error) {
    return res.status(INTERNAL_SERVER_ERROR).json({ message: error.message });
  }
}

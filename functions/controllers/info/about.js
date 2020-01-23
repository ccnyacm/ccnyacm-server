const getInfo = require('../../services/infoServices');
httpStatus = require('http-status');

module.exports = async function getAboutInfo(req, res) {
  try {
    const response = await getInfo('about');
    return res.status(httpStatus.OK).json(response);
  } catch (error) {
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: error.message });
  }
}
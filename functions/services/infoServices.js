const admin = require('../config/firebaseConfig');

const db = admin.firestore();

module.exports = async function getInfo(docId) {
  try {
    const doc = await db.collection('generalInfo').doc(docId).get();
    if (doc.exists) {
      return doc.data();
    } else {
      throw new Error('The requested data doesn\'t exists');
    }
  } catch (error) {
    throw error;
  }
}
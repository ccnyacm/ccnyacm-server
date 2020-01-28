const admin = require('../config/firebaseConfig');

const db = admin.firestore();
const boardMembers = db.collection('boardMembers');

async function getAllMembers() {
  try {
    const querySnapshot = await boardMembers.get();
    const members = [];
    querySnapshot.forEach((doc) => {
      if(doc.exists) {
        members.push(doc.data());
      }
    });
    return members;
  } catch (error) {
    throw error;
  }
}

async function getMemberById(id) {
  try {
    const doc = await boardMembers.doc(id).get();
    if(doc.exists) {
      return doc.data();
    } else {
      throw new Error(`Could not find member with id ${id}`);
    }
  } catch (error) {
    throw error;
  }
}

module.exports = { getAllMembers, getMemberById };

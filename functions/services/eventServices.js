const admin = require('../config/firebaseConfig');

const db = admin.firestore();

/**
 * This function gets all the events in our collection
 */
async function getEvents() {
  try {
      const now = new Date();
      const querySnapshot = await db.collection('events')
        .where('startDate', '>=', now)
        .get();
      const events = [];
      querySnapshot.forEach((doc) => {
        if (doc.exists) {
          events.push(doc.data());
        }
      });
      return events;
  } catch (error) {
    throw error;
  }
}

/**
 * This function gets first num elements in our events collection
 */
async function getFirstEvents(num) {
  try {
    const now = new Date();
    const querySnapshot = await db.collection('events')
      .where('startDate', '>=', now)
      .limit(num)
      .get();
    const events = [];
    querySnapshot.forEach((doc) => {
      if (doc.exists) {
        events.push(doc.data());
      }
    });
    return events;
  } catch (error) {
    throw error;
  }
}

module.exports = { getEvents, getFirstEvents };
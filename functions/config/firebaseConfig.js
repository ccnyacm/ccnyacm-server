const admin = require('firebase-admin'),
  serviceAccount = require('./serviceAccount.json');

module.exports = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://ccnyacm-bb351.firebaseio.com"
});
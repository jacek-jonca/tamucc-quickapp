const admin = require('./functions/node_modules/firebase-admin');
const serviceAccount = require("./service-key.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://tamucc-quickapp.firebaseio.com"
});

var db = admin.firestore();

const data = require("./fakedb.json");

data.forEach(function(obj) {
    db.collection('data').doc(obj.userId).add({
        userId: obj.userId,
        email: obj.email,
        first: obj.first,
        middle: "NA",
        last: obj.last,
        suffix: "NA",
        birthDate: "09-01-1939",
        gender: "Female",
        race: "Hispanic",
        phone: obj.phone,
        street1: obj.street1,
        street2: obj.street2,
        city: obj.city,
        state: obj.state,
        zip: obj.zip,
        country: "US",
        citizenship: "yes",
        birthPlace: "San Antonio, TX",
        major: "PSYC",
        semester: "202101",
        nameUni10: "Empty",
        fromUni10: "Empty",
        toUni10: "Empty",
        nameUni1: obj.nameUni1,
        fromUni1: "Empty",
        toUni1: "Empty",
        nameUni2: "Empty",
        fromUni2: "Empty",
        toUni2: "Empty",
        nameUni3: "Empty",
        fromUni3: "Empty",
        toUni3: "Empty",
        nameUni4: "Empty",
        fromUni4: "Empty",
        toUni4: "Empty",
        nameUni5: "Empty",
        fromUni5: "Empty",
        toUni5: "Empty",
        nameUni6: "Empty",
        fromUni6: "Empty",
        toUni6: "Empty",
        nameUni7: "Empty",
        fromUni7: "Empty",
        toUni7: "Empty",
        nameUni8: "Empty",
        fromUni8: "Empty",
        toUni8: "Empty",
        nameUni9: "Empty",
        fromUni9: "Empty",
        toUni9: "Empty",
        timestamp: admin.firestore.Timestamp.now()
        }).then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
});
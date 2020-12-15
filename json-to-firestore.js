const firebase = require('./functions/node_modules/firebase-admin');
const serviceAccount = require("./service-key.json");

firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount),
  databaseURL: "https://tamucc-quickapp.firebaseio.com"
});

var db = firebase.firestore();

var data =[
  {
    "userId": "0031R00002JCMCJ",
    "first": "DanetteTest",
    "last": "Gutierrez",
    "street1": "6300 Ocean Dr",
    "street2": "SSC 100",
    "city": "Corpus Christi",
    "state": "TX",
    "zip": "78412",
    "phone": "(214) 335-4195",
    "email": "danette.gutierrez@tamucc.edu",
    "nameUni1": "Unknown School"
  },
  {
    "userId": "0031R00002JCMBz",
    "first": "DustinTest",
    "last": "Meiron",
    "street1": "6300 Ocean Dr",
    "street2": "SSC 200",
    "city": "Corpus Christi",
    "state": "TX",
    "zip": "78412",
    "phone": "(254) 485-4551",
    "email": "dustin.meiron@tamucc.edu",
    "nameUni1": "Unknown School"
  },
  {
    "userId": "0033600001S191e",
    "first": "LindaLeighTest",
    "last": "BarbatoTest",
    "street1": "6300 Ocean Drive",
    "street2": "Unit 5771",
    "city": "Corpus Christi",
    "state": "TX",
    "zip": "78412",
    "phone": "361-825-5923",
    "email": "lindalramon@yahoo.com",
    "nameUni1": "TEXAS TECH UNIVERSITY"
  },
  {
    "userId": "0033600001LPjFo",
    "first": "LindaTest",
    "last": "Barbato",
    "street1": "4430 Lake Superior Dr",
    "street2": " ",
    "city": "Corpus Christi",
    "state": "TX",
    "zip": "78413-5774",
    "phone": "361-549-2282",
    "email": "lindybarbato@gmail.com",
    "nameUni1": "RICHARD KING HIGH SCHOOL"
  },
  {
    "userId": "0031R00002JCMCd",
    "first": "LoidaTest",
    "last": "Utley",
    "street1": "6300 Ocean Dr",
    "street2": "SSC 300",
    "city": "Corpus Christi",
    "state": "TX",
    "zip": "78412",
    "phone": "(361) 455-6105",
    "email": "loida.utley@tamucc.edu",
    "nameUni1": "Unknown School"
  },
  {
    "userId": "0031R00002GsWSn",
    "first": "TestMaggie",
    "last": "TestCano",
    "street1": "6300 Ocean Dr",
    "street2": "Islander Visitors Center",
    "city": "Corpus Christi",
    "state": "TX",
    "zip": "78412-5503",
    "phone": "(361) 455-6105",
    "email": "maggie.cano@tamucc.edu",
    "nameUni1": "Unknown School"
  },
  {
    "userId": "00336000011fT8V",
    "first": "MaggieTest",
    "last": "CanoTest",
    "street1": "4657 Ocean Dr.",
    "street2": "#119",
    "city": "Corpus Christi",
    "state": "TX",
    "zip": "78412",
    "phone": "409-554-1622",
    "email": "maggie.cano39@yahoo.com",
    "nameUni1": "UVALDE HIGH SCHOOL"
  },
  {
    "userId": "0031R00002JBduk",
    "first": "OscarTest",
    "last": "ReynaTest",
    "street1": "6300 Ocean Drive",
    "street2": "Unit 5771",
    "city": "Corpus Christi",
    "state": "TX",
    "zip": "78412",
    "phone": "(361) 813-0321",
    "email": "oscar.reyna@tamucc.edu",
    "nameUni1": "ROY MILLER SENIOR HIGH SCHOOL"
  },
  {
    "userId": "0031R00002GtBCT",
    "first": "ReneTest",
    "last": "ZamoraTest",
    "street1": "610 W Blackburn St",
    "street2": " ",
    "city": "Mathis",
    "state": "TX",
    "zip": "78368",
    "phone": "361-877-6597",
    "email": "rene.zamora@tamucc.edu",
    "nameUni1": "MATHIS HIGH SCHOOL"
  },
  {
    "userId": "0031R00002JCMCs",
    "first": "RobertTest",
    "last": "Benavides",
    "street1": "6300 Ocean Dr",
    "street2": "SSC 201",
    "city": "Corpus Christi",
    "state": "TX",
    "zip": "78412",
    "phone": "(956) 367-1028",
    "email": "robert.benavides@tamucc.edu",
    "nameUni1": "Unknown School"
  },
  {
    "userId": "0031R00002JCMCY",
    "first": "SantosTest",
    "last": "Pagan",
    "street1": "6300 Ocean Dr",
    "street2": "SSC 201",
    "city": "Corpus Christi",
    "state": "TX",
    "zip": "78412",
    "phone": "(864) 321-9645",
    "email": "santos.pagan@tamucc.edu",
    "nameUni1": "Unknown School"
  }
]

data.forEach(function(obj) {
    console.log(db.collection('data').doc(obj.userId));
    db.collection('data').doc(obj.userId).set({
        userId: obj.userId,
        email: obj.email,
        first: obj.first,
        middle: " ",
        last: obj.last,
        suffix: " ",
        birthDate: "1939-09-01",
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
        semester: "20212",
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
        timestamp: firebase.firestore.Timestamp.now()
        }).then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
});
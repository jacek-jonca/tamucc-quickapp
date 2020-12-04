// 'use strict';

//grab a form, the . (dot) indicates a css/html class
//const form = document.querySelector('.section_1');

var firebaseConfig = {
    apiKey: "AIzaSyDZXbfuL17GbKVJ0Mdlgk9ouFPkVXNDYf0",
    authDomain: "tamucc-quickapp.firebaseapp.com",
    databaseURL: "https://tamucc-quickapp.firebaseio.com",
    projectId: "tamucc-quickapp",
    storageBucket: "tamucc-quickapp.appspot.com",
    messagingSenderId: "1090008470366",
    appId: "1:1090008470366:web:1af562cc2cb9e0b2a175cf",
    measurementId: "G-XJ2H42HPRM"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();
//var db = firebase.firestore();
var userId = getUrlVars()["id"];
var userId = decodeURI(userId);

//
// FETCH FROM FIREBASE
//

var fetch_from_firebase = function (userId) {
    //    var database = firebase.database();
    var db = firebase.firestore();
    //var database = firebase.database().ref('/prospects/' + userId);

    // pulling TYPED data from the form

    //          var email = document.getElementById('email').value;
    //          var first = document.getElementById('first').value;
    //          var middle = document.getElementById('middle').value;
    //          var last = document.getElementById('last').value;
    //          var suffix = document.getElementById('suffix').value;
    //          var birthDate = document.getElementById('birthDate').value;
    //          var gender = document.getElementById('gender').value;
    //          var race = document.getElementById('race').value;
    //          var phone = document.getElementById('phone').value;
    //          var street1 = document.getElementById('street1').value;
    //          var street2 = document.getElementById('street2').value;
    //          var city = document.getElementById('city').value;
    //          var state = document.getElementById('state').value;
    //          var zip = document.getElementById('zip').value;
    //          var country = document.getElementById('country').value;
    //          var citizenship = document.getElementById('citizenship').value;
    //          var birthPlace = document.getElementById('birthPlace').value;
    //          var major = document.getElementById('major').value;
    //          var semester = document.getElementById('semester').value;
    //          var nameUni1 = document.getElementById('nameUni1').value;
    //          var fromUni1 = document.getElementById('fromUni1').value;
    //          var toUni1 = document.getElementById('toUni1').value;

    // Retrieve information into the fields already filled in Database
    const docRef = db.collection("data").doc(userId)
        .onSnapshot(function (doc) {
            //    console.log("Current data: ", doc.data());
            var data = doc.data();
            var email = data.email;
            var first = data.first;
            var middle = data.middle;
            var last = data.last;
            var suffix = data.suffix;
            var birthDate = data.birthDate;
            var gender = data.gender;
            var race = data.race;
            var phone = data.phone;
            var street1 = data.street1;
            var street2 = data.street2;
            var city = data.city;
            var state = data.state;
            var zip = data.zip;
            var country = data.country;
            var citizenship = data.citizenship;
            var birthPlace = data.birthPlace;
            var major = data.major;
            var semester = data.semester;
            var zip = data.zip;
            var country = data.country;
            var nameUni1 = data.nameUni1;
            var fromUni1 = data.fromUni1;
            var toUni1 = data.toUni1;
            document.getElementById("email").value = email;
            document.getElementById("first").value = first;
            document.getElementById("middle").value = middle;
            document.getElementById("last").value = last;
            document.getElementById("suffix").value = suffix;
            document.getElementById("birthDate").value = birthDate;
            document.getElementById("gender").value = gender;
            document.getElementById("race").value = race;
            document.getElementById("phone").value = phone;
            document.getElementById("street1").value = street1;
            document.getElementById("street2").value = street2;
            document.getElementById("city").value = city;
            document.getElementById("state").value = state;
            document.getElementById("zip").value = zip;
            document.getElementById("country").value = country;
            document.getElementById("citizenship").value = citizenship;
            document.getElementById("birthPlace").value = birthPlace;
            document.getElementById("major").value = major;
            document.getElementById("semester").value = semester;
            document.getElementById("zip").value = zip;
            document.getElementById("country").value = country;
            document.getElementById("nameUni1").value = nameUni1;
            document.getElementById("fromUni1").value = fromUni1;
            document.getElementById("toUni1").value = toUni1;
            //        console.log(first);    
        });
    //const doc = docRef.get();
    //console.log(doc);
    //    if (!doc.exists) {
    //        console.log('No such document!');
    //    } else {
    //        console.log('Document data:', doc.data());
    //    }
    //let items = doc.data();
    /* Make data suitable for rendering */
    //items = JSON.stringify(items);
    //console.log(items);
    //      database.on('value', function(snapshot) {
    //          var email = snapshot.val().email;
    //          var first = snapshot.val().first;
    //          var middle = snapshot.val().middle;
    //          var last = snapshot.val().last;
    //          var suffix = snapshot.val().suffix;
    //          var birthDate = snapshot.val().birthDate;
    //          var gender = snapshot.val().gender;
    //          var race = snapshot.val().race;
    //          var phone = snapshot.val().phone;
    //          var street1 = snapshot.val().street1;
    //          var street2 = snapshot.val().street2;
    //          var city = snapshot.val().city;
    //          var state = snapshot.val().state;
    //          var zip = snapshot.val().zip;
    //          var country = snapshot.val().country;
    //          var citizenship = snapshot.val().citizenship;
    //          var birthPlace = snapshot.val().birthPlace;
    //          var major = snapshot.val().major;
    //          var semester = snapshot.val().semester;
    //          var zip = snapshot.val().zip;
    //          var country = snapshot.val().country;
    //          var nameUni1 = snapshot.val().nameUni1;
    //          var fromUni1 = snapshot.val().fromUni1;
    //          var toUni1 = snapshot.val().toUni1;
};
fetch_from_firebase(userId);
//
// PUSH TO FIREBASE
//

var push_to_firebase = function (data) {
    //      alert("Thank you for applying to Texas A&M University-Corpus Christi. We'll be in touch soon!")
    var db = firebase.firestore();

    db.collection("data").doc(userId).set({
            //db.collection("data").add({
            userId: data["userId"],
            email: data["email"],
            first: data["first"],
            middle: data["middle"],
            last: data["last"],
            suffix: data["suffix"],
            birthDate: data["birthDate"],
            gender: data["gender"],
            race: data["race"],
            phone: data["phone"],
            street1: data["street1"],
            street2: data["street2"],
            city: data["city"],
            state: data["state"],
            zip: data["zip"],
            country: data["country"],
            citizenship: data["citizenship"],
            birthPlace: data["birthPlace"],
            major: data["major"],
            semester: data["semester"],
            nameUni10: data["nameUni10"],
            fromUni10: data["fromUni10"],
            toUni10: data["toUni10"],
            nameUni1: data["nameUni1"],
            fromUni1: data["fromUni1"],
            toUni1: data["toUni1"],
            nameUni2: data["nameUni2"],
            fromUni2: data["fromUni2"],
            toUni2: data["toUni2"],
            nameUni3: data["nameUni3"],
            fromUni3: data["fromUni3"],
            toUni3: data["toUni3"],
            nameUni4: data["nameUni4"],
            fromUni4: data["fromUni4"],
            toUni4: data["toUni4"],
            nameUni5: data["nameUni5"],
            fromUni5: data["fromUni5"],
            toUni5: data["toUni5"],
            nameUni6: data["nameUni6"],
            fromUni6: data["fromUni6"],
            toUni6: data["toUni6"],
            nameUni7: data["nameUni7"],
            fromUni7: data["fromUni7"],
            toUni7: data["toUni7"],
            nameUni8: data["nameUni8"],
            fromUni8: data["fromUni8"],
            toUni8: data["toUni8"],
            nameUni9: data["nameUni9"],
            fromUni9: data["fromUni9"],
            toUni9: data["toUni9"],
            timestamp: firebase.firestore.Timestamp.now()
        })
        .then(function (docRef) {
            console.log("Application submitted. Want to learn more about TAMUCC?");
            alert("Voila " + data['first'] + "! We received youir application and will be in touch soon! Would you like to learn more about TAMUCC?");
            //console.log("Application submitted, ID: ", docRef.id);
            //location.reload();
            location.href = "https://www.tamucc.edu";
        })
        .catch(function (error) {
            console.error("Application could not be submitted: ", error);
            alert("Application could not be submitted: ", error);
        });
}

//---------------------------------------
// SUBMIT BUTTON HANDLER
//---------------------------------------

//document.getElementById('submit').addEventListener('submit', check);

function check(e) {
    e.preventDefault();

    //and now anything else you want to do.
    //Gets Value of form HTML elements
    //      var id = getUrlVars()["id"];
    //      var id = decodeURI(id);
    var email = document.getElementById('email').value;
    var first = document.getElementById('first').value;
    var middle = document.getElementById('middle').value;
    var last = document.getElementById('last').value;
    var suffix = document.getElementById('suffix').value;
    var birthDate = document.getElementById('birthDate').value;
    var gender = document.getElementById('gender').value;
    var race = document.getElementById('race').value;
    var phone = document.getElementById('phone').value;
    var street1 = document.getElementById('street1').value;
    var street2 = document.getElementById('street2').value;
    var city = document.getElementById('city').value;
    var state = document.getElementById('state').value;
    var zip = document.getElementById('zip').value;
    var country = document.getElementById('country').value;
    var citizenship = document.getElementById('citizenship').value;
    var birthPlace = document.getElementById('birthPlace').value;
    var major = document.getElementById('major').value;
    var semester = document.getElementById('semester').value;

    if (!document.getElementById('nameUni1')) {
        var nameUni1 = "Empty";
    } else {
        var nameUni1 = document.getElementById('nameUni1').value;
    }
    if (!document.getElementById('nameUni2')) {
        var nameUni2 = "Empty";
    } else {
        var nameUni2 = document.getElementById('nameUni2').value;
    }
    if (!document.getElementById('nameUni3')) {
        var nameUni3 = "Empty";
    } else {
        var nameUni3 = document.getElementById('nameUni3').value;
    }
    if (!document.getElementById('nameUni4')) {
        var nameUni4 = "Empty";
    } else {
        var nameUni4 = document.getElementById('nameUni4').value;
    }
    if (!document.getElementById('nameUni5')) {
        var nameUni5 = "Empty";
    } else {
        var nameUni5 = document.getElementById('nameUni5').value;
    }
    if (!document.getElementById('nameUni6')) {
        var nameUni6 = "Empty";
    } else {
        var nameUni6 = document.getElementById('nameUni6').value;
    }
    if (!document.getElementById('nameUni7')) {
        var nameUni7 = "Empty";
    } else {
        var nameUni7 = document.getElementById('nameUni7').value;
    }
    if (!document.getElementById('nameUni8')) {
        var nameUni8 = "Empty";
    } else {
        var nameUni8 = document.getElementById('nameUni8').value;
    }
    if (!document.getElementById('nameUni9')) {
        var nameUni9 = "Empty";
    } else {
        var nameUni9 = document.getElementById('nameUni9').value;
    }
    if (!document.getElementById('nameUni10')) {
        var nameUni10 = "Empty";
    } else {
        var nameUni10 = document.getElementById('nameUni10').value;
    }
    if (!document.getElementById('fromUni1')) {
        var fromUni1 = "Empty";
    } else {
        var fromUni1 = document.getElementById('fromUni1').value;
    }
    if (!document.getElementById('fromUni2')) {
        var fromUni2 = "Empty";
    } else {
        var fromUni2 = document.getElementById('fromUni2').value;
    }
    if (!document.getElementById('fromUni3')) {
        var fromUni3 = "Empty";
    } else {
        var fromUni3 = document.getElementById('fromUni3').value;
    }
    if (!document.getElementById('fromUni4')) {
        var fromUni4 = "Empty";
    } else {
        var fromUni4 = document.getElementById('fromUni4').value;
    }
    if (!document.getElementById('fromUni5')) {
        var fromUni5 = "Empty";
    } else {
        var fromUni5 = document.getElementById('fromUni5').value;
    }
    if (!document.getElementById('fromUni6')) {
        var fromUni6 = "Empty";
    } else {
        var fromUni6 = document.getElementById('fromUni6').value;
    }
    if (!document.getElementById('fromUni7')) {
        var fromUni7 = "Empty";
    } else {
        var fromUni7 = document.getElementById('fromUni7').value;
    }
    if (!document.getElementById('fromUni8')) {
        var fromUni8 = "Empty";
    } else {
        var fromUni8 = document.getElementById('fromUni8').value;
    }
    if (!document.getElementById('fromUni9')) {
        var fromUni9 = "Empty";
    } else {
        var fromUni9 = document.getElementById('fromUni9').value;
    }
    if (!document.getElementById('fromUni10')) {
        var fromUni10 = "Empty";
    } else {
        var fromUni10 = document.getElementById('fromUni10').value;
    }
    if (!document.getElementById('toUni1')) {
        var toUni1 = "Empty";
    } else {
        var toUni1 = document.getElementById('toUni1').value;
    }
    if (!document.getElementById('toUni2')) {
        var toUni2 = "Empty";
    } else {
        var toUni2 = document.getElementById('toUni2').value;
    }
    if (!document.getElementById('toUni3')) {
        var toUni3 = "Empty";
    } else {
        var toUni3 = document.getElementById('toUni3').value;
    }
    if (!document.getElementById('toUni4')) {
        var toUni4 = "Empty";
    } else {
        var toUni4 = document.getElementById('toUni4').value;
    }
    if (!document.getElementById('toUni5')) {
        var toUni5 = "Empty";
    } else {
        var toUni5 = document.getElementById('toUni5').value;
    }
    if (!document.getElementById('toUni6')) {
        var toUni6 = "Empty";
    } else {
        var toUni6 = document.getElementById('toUni6').value;
    }
    if (!document.getElementById('toUni7')) {
        var toUni7 = "Empty";
    } else {
        var toUni7 = document.getElementById('toUni7').value;
    }
    if (!document.getElementById('toUni8')) {
        var toUni8 = "Empty";
    } else {
        var toUni8 = document.getElementById('toUni8').value;
    }
    if (!document.getElementById('toUni9')) {
        var toUni9 = "Empty";
    } else {
        var toUni9 = document.getElementById('toUni9').value;
    }
    if (!document.getElementById('toUni10')) {
        var toUni10 = "Empty";
    } else {
        var toUni10 = document.getElementById('toUni10').value;
    }

    //Stores those values in a object
    var data = {
        "userId": userId,
        "email": email,
        "first": first,
        "middle": middle,
        "last": last,
        "suffix": suffix,
        "birthDate": birthDate,
        "gender": gender,
        "race": race,
        "phone": phone,
        "street1": street1,
        "street2": street2,
        "city": city,
        "state": state,
        "zip": zip,
        "country": country,
        "citizenship": citizenship,
        "birthPlace": birthPlace,
        "major": major,
        "semester": semester,
        "nameUni10": nameUni10,
        "fromUni10": fromUni10,
        "toUni10": toUni10,
        "nameUni1": nameUni1,
        "fromUni1": fromUni1,
        "toUni1": toUni1,
        "nameUni2": nameUni2,
        "fromUni2": fromUni2,
        "toUni2": toUni2,
        "nameUni3": nameUni3,
        "fromUni3": fromUni3,
        "toUni3": toUni3,
        "nameUni4": nameUni4,
        "fromUni4": fromUni4,
        "toUni4": toUni4,
        "nameUni5": nameUni5,
        "fromUni5": fromUni5,
        "toUni5": toUni5,
        "nameUni6": nameUni6,
        "fromUni6": fromUni6,
        "toUni6": toUni6,
        "nameUni7": nameUni7,
        "fromUni7": fromUni7,
        "toUni7": toUni7,
        "nameUni8": nameUni8,
        "fromUni8": fromUni8,
        "toUni8": toUni8,
        "nameUni9": nameUni9,
        "fromUni9": fromUni9,
        "toUni9": toUni9
    }

    push_to_firebase(data);
};

//---------------------------------------
// GET ID VALUE FROM URL
//---------------------------------------

function getUrlVars() {
    var urlvars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
        urlvars[key] = value;
    });
    return urlvars;
}
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
// PUSH TO FIREBASE
//

var push_to_firebase = function (data) {
    //      alert("Thank you for applying to Texas A&M University-Corpus Christi. We'll be in touch soon!")
    var db = firebase.firestore();

    db.collection("data").doc(userId).set({
            rightsNotification: data["rightsNotification"],
            termsNotification: data["termsNotification"],
            discriminationNotification: data["discriminationNotification"]
        }, { merge: true })
        .then(function (docRef) {
            console.log("Application submitted. Want to learn more about TAMUCC?");
            alert("Voila! We have received your application and will be in touch soon! Would you like to learn more about TAMUCC?");
            console.log("Application submitted");
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
    var rightsNotification = document.getElementById('rightsNotification').value;
    var termsNotification = document.getElementById('termsNotification').value;
    var discriminationNotification = document.getElementById('discriminationNotification').value;

// Biographical data make sure it is not empty
    if (!document.getElementById('rightsNotification')) {
        var email = "Empty";
    } else {
        var email = document.getElementById('rightsNotification').value;
    }
    if (!document.getElementById('termsNotification')) {
        var first = "Empty";
    } else {
        var first = document.getElementById('termsNotification').value;
    }
    if (!document.getElementById('discriminationNotification')) {
        var middle = "Empty";
    } else {
        var middle = document.getElementById('discriminationNotification').value;
    }

    //Stores those values in a object
    var data = {
        "rightsNotification": rightsNotification,
        "termsNotification": termsNotification,
        "discriminationNotification": discriminationNotification
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
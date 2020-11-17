'use strict';

//grab a form, the . (dot) indicates a css/html class
const form = document.querySelector('.section_1');

//grab an input,  the # (hash/pound) indicates an html id
const inputEmail = form.querySelector('#inputEmail');

//config your firebase push
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

//create a functions to push
    function firebasePush(input) {


        //prevents from braking
        if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig);
        }

        //push itself
        var mailsRef = firebase.database().ref('emails').push().set(
            {
                mail: input.value
            }
        );

    }

//push on form submit
    if (form) {
        form.addEventListener('submit', function (evt) {
            evt.preventDefault();
            firebasePush(inputEmail);

            //shows alert if everything went well.
            return alert('Data Successfully Sent to Realtime Database');
        })
    }
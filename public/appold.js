'use strict';

//grab a form, the . (dot) indicates a css/html class
const form = document.querySelector('.section_1');

//grab an input,  the # (hash/pound) indicates an html id
//const inputEmail = form.querySelector('#inputEmail');

//config your firebase push
var config = {
    apiKey: "AIzaSyDZXbfuL17GbKVJ0Mdlgk9ouFPkVXNDYf0",
    authDomain: "tamucc-quickapp.firebaseapp.com",
    databaseURL: "https://tamucc-quickapp.firebaseio.com",
    projectId: "tamucc-quickapp",
    storageBucket: "tamucc-quickapp.appspot.com",
    messagingSenderId: "1090008470366",
    appId: "1:1090008470366:web:1af562cc2cb9e0b2a175cf",
    measurementId: "G-XJ2H42HPRM"
  };

  firebase.initializeApp(config);
  firebase.analytics();

  

  //---------------------------------------
  // GET ID VALUE FROM URL
  //---------------------------------------

  function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}


//-----------------------------------------
// POPULATE FORM DATA
//-----------------------------------------

function populate(frm, data) {   
    $.each(data, function(key, value) {  
        var ctrl = $('[name='+key+']', frm);  
        switch(ctrl.prop("type")) { 
            case "radio": case "checkbox":   
                ctrl.each(function() {
                    if($(this).attr('value') == value) $(this).attr("checked",value);
                });   
                break;  
            default:
                ctrl.val(value); 
        }  
    });  
}


var app_submit = function(){

    //Gets Value of form HTML elements
    var id = getUrlVars()["id"];
    var id = decodeURI(id);
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
    var nameUni1 = document.getElementById('nameUni1').value;
    var fromUni1 = document.getElementById('fromUni1').value;
    var toUni1 = document.getElementById('toUni1').value;
      
    //Stores those values in a object
    var data = {
        "id": id,
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
        "nameUni1": nameUni1,
        "fromUni1": fromUni1,
        "toUni1": toUni1        
    }
  
    //Passes values to be pushed to Firebase
    push_to_firebase(data);
  
  }

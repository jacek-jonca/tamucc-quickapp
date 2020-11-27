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

    var push_to_firebase = function(data){
      alert("Thank you for applying to Texas A&M University-Corpus Christi. We'll be in touch soon!")
      var db = firebase.firestore();

      db.collection("data").add({
          id: data["id"],
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
          eduHistory: {
            nameUni1: data.eduHistory["nameUni1"],
            fromUni1: data.eduHistory["fromUni1"],
            toUni1: data.eduHistory["toUni1"],
            nameUni2: data.eduHistory["nameUni2"],
            fromUni2: data.eduHistory["fromUni2"],
            toUni2: data.eduHistory["toUni2"],
            nameUni3: data.eduHistory["nameUni3"],
            fromUni3: data.eduHistory["fromUni3"],
            toUni3: data.eduHistory["toUni3"],
            nameUni4: data.eduHistory["nameUni4"],
            fromUni4: data.eduHistory["fromUni4"],
            toUni4: data.eduHistory["toUni4"],
            nameUni5: data.eduHistory["nameUni5"],
            fromUni5: data.eduHistory["fromUni5"],
            toUni5: data.eduHistory["toUni5"],
            nameUni6: data.eduHistory["nameUni6"],
            fromUni6: data.eduHistory["fromUni6"],
            toUni6: data.eduHistory["toUni6"]
          }
      })
      .then(function(docRef) {
          console.log("Application submitted, ID: ", docRef.id);
          location.reload();
      })
      .catch(function(error) {
          console.error("Application could not be submitted: ", error);
      });
    }

    document.getElementById('Submit').addEventListener('Submit', check);

function check(e){
        e.preventDefault();
          //and now anything else you want to do.
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
      var nameUni2 = document.getElementById('nameUni2').value;
      var fromUni2 = document.getElementById('fromUni2').value;
      var toUni2 = document.getElementById('toUni2').value;
      var nameUni3 = document.getElementById('nameUni3').value;
      var fromUni3 = document.getElementById('fromUni3').value;
      var toUni3 = document.getElementById('toUni3').value;
      var nameUni4 = document.getElementById('nameUni4').value;
      var fromUni4 = document.getElementById('fromUni4').value;
      var toUni4 = document.getElementById('toUni4').value;
      var nameUni5 = document.getElementById('nameUni5').value;
      var fromUni5 = document.getElementById('fromUni5').value;
      var toUni5 = document.getElementById('toUni5').value;
      var nameUni6 = document.getElementById('nameUni6').value;
      var fromUni6 = document.getElementById('fromUni6').value;
      var toUni6 = document.getElementById('toUni6').value;

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
          "eduHistory": {
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
            "toUni6": toUni6
          }
      }
      push_to_firebase(data);
    };

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

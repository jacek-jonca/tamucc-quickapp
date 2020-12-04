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
//      var db = firebase.firestore();

//      db.collection("data").add({
//      db.collection("prospects")
//      .doc([id])
//      .collection("data").add({
//          id: data["id"],
//          email: data["email"],
//          first: data["first"],
//          middle: data["middle"],
//          last: data["last"],
//          suffix: data["suffix"],
//          birthDate: data["birthDate"],
//          gender: data["gender"],
//          race: data["race"],
//          phone: data["phone"],
//          street1: data["street1"],
//          street2: data["street2"],
//          city: data["city"],
//          state: data["state"],
//          zip: data["zip"],
//          country: data["country"],
//          citizenship: data["citizenship"],
//          birthPlace: data["birthPlace"],
//          major: data["major"],
//          semester: data["semester"]
//      });
      var linkid = getUrlVars()["id"];
      var linkid = decodeURI(linkid);
      const dataRef = firebase.database().ref("applicants/" + linkid);
      //const dataRef = admin.database().ref('data');
      const newRef = dataRef.push();
      const id = newRef.key;
      return newRef.set({
          linkid: data["linkid"],
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
          semester: data["semester"]
      })
//      .then( () => {
//        data.context.set({
//          name: "reportInfo",
//          lifespan: 5,
//          parameters: {
//            id: id
//          }
//        });
//      });
      
//      const reportInfoContext = data.context.get('reportInfo');
//      const id = reportInfoContext.parameters.id;
      //const ref = admin.database().ref('data').child(id);
      const ref = firebase.database().ref("applicants/" + linkid).child(id);
      var formInputLen = $("input[id*='nameUni']").length;
      var nameNameUni;
      var nameUniFrom;
      var nameUniTo;
      for (i = 0; i < formInputLen; i++) {
          var nameNameUni = 'nameUni' + i;
          var nameUniFrom = 'fromUni' + i;
          var nameUniTo = 'toUni' + i;
          return ref.update({
              [nameNameUni] : data['nameUni' + i],
              [nameFromUni] : data['fromUni' + i],
              [nameToUni] : data['toUni' + i]
          })
          .then(function(docRef) {
            console.log('Part' + i + 'Application submitted, ID: ', docRef.id);
            location.reload();
        })
        .catch(function(error) {
            console.error("Application could not be submitted: ", error);
        });
        }      
    }

    document.getElementById('Submit').addEventListener('Submit', check);

function check(e){
        e.preventDefault();
          //and now anything else you want to do.
      //Gets Value of form HTML elements
      var linkid = getUrlVars()["id"];
      var linkid = decodeURI(linkid);
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
//      var nameUni1 = document.getElementById('nameUni1').value;
//      var fromUni1 = document.getElementById('fromUni1').value;
//      var toUni1 = document.getElementById('toUni1').value;
//      var nameUni2 = document.getElementById('nameUni2').value;
//      var fromUni2 = document.getElementById('fromUni2').value;
//      var toUni2 = document.getElementById('toUni2').value;
//      var nameUni3 = document.getElementById('nameUni3').value;
//      var fromUni3 = document.getElementById('fromUni3').value;
//      var toUni3 = document.getElementById('toUni3').value;
//      var nameUni4 = document.getElementById('nameUni4').value;
//      var fromUni4 = document.getElementById('fromUni4').value;
//      var toUni4 = document.getElementById('toUni4').value;
//      var nameUni5 = document.getElementById('nameUni5').value;
//      var fromUni5 = document.getElementById('fromUni5').value;
//      var toUni5 = document.getElementById('toUni5').value;
//      var nameUni6 = document.getElementById('nameUni6').value;
//      var fromUni6 = document.getElementById('fromUni6').value;
//      var toUni6 = document.getElementById('toUni6').value;
for (i = 0; i < formInputLen; i++) {
//    console.log( eval("var nameUni" + i + " = document.getElementById('nameUni'" + i + ").value;") );
    //console.log( eval("document.getElementById('nameUni'" + i + ").value;") );
    //var nameUniArray = [];
    //var fromUniArray = [];
    //var toUniArray = [];
    nameUniVar = 'nameUni' + i;
    console.log(nameUniVar);
    //console.log([nameUniVar]);
    //nameUniArray[i] = document.getElementById('nameUni' + i).value;
    //fromUniArray[i] = document.getElementById('fromUni' + i).value;
    //toUniArray[i] = document.getElementById('toUni' + i).value;
    //console.log(nameUniArray);
//    eval("var nameUni" + i + " = document.getElementById('nameUni'" + i + ").value;");
//    eval("var fromUni" + i + " = document.getElementById('fromUni'" + i + ").value;");
//    eval("var toUni" + i + " = document.getElementById('toUni'" + i + ").value;");
//  ['nameUni' + i] = document.getElementById('nameUni' + i).value;
//  ['fromUni' + i] = document.getElementById('fromUni' + i).value;
//  ['toUni' + i] = document.getElementById('toUni' + i).value;
}

  //Stores those values in a object
      var data = {
          "linkid": linkid,
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
          "semester": semester
      }
      var formInputLen = $("input[id*='nameUni']").length;
      for (i = 0; i < formInputLen; i++) {
//          console.log( ['nameUni' + i] );
//          var valNameUni = document.getElementById('nameUni' + i);
//          console.log( valNameUni );
//        data['nameUni' + i] = document.getElementById('nameUni' + i).value;
//        data['fromUni' + i] = document.getElementById('fromUni' + i).value;
//        data['toUni' + i] = document.getElementById('toUni' + i).value;
//        eval("data['nameUni'" + i + " = 'nameUni'" + i + ";");
//        eval("data['fromUni'" + i + " = 'fromUni'" + i + ";");
//        eval("data['toUni'" + i + " = 'toUni'" + i + ";");
//        data['nameUni' + i] = ['nameUni' + i];
//        data['fromUni' + i] = ['fromUni' + i];
//        data['toUni' + i] = ['toUni' + i];
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

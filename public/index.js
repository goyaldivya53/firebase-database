 // Initialize Firebase
 var config = {
    apiKey: "AIzaSyCs3tVUKeiPefk05WhZg_7T8dktD95EGkg",
    authDomain: "web-start-e0f28.firebaseapp.com",
    databaseURL: "https://web-start-e0f28.firebaseio.com",
    projectId: "web-start-e0f28",
  };
  firebase.initializeApp(config);

  
 

  //Get a reference to the database service
  var db=firebase.database();
  
  //onclick function
  function signMe(name,email,city,phone,gender){
     
    //get elements by id
    var name=document.getElementById("form-name").value;
    var email=document.getElementById("form-email").value;
    var city=document.getElementById("form-city").value;
    var phone=document.getElementById("form-phone").value;
    var gender=document.querySelector('input[name="gender"]:checked').value;
    //Replacing . by comma
    let emailComma = email.replace(/\./g, ',');
    let ref = db.ref('email/' + emailComma);
    //storing the values
     ref.set({
        name:name,
        email:email,
        city:city,
        phone:phone,
        gender:gender
    }, function(err){
        if (err) {
            alert("something went wrong!")
        
        } else {
           alert("thank you for registeration")
        }
    });
  }
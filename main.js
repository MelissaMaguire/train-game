var config = {
    apiKey: "AIzaSyDK71Z_Fp92zFHvKRUCyr8GZ4PCOdZtTKogNW9x90uXnX6XZ4uqE5QjkUY",
    authDomain: "train-a5f4e.firebaseapp.com",
    databaseURL: "https://train-a5f4e.firebaseio.com",
    storageBucket: "train-a5f4e.appspot.com",
    messagingSenderId: "295565243412"
  };
  
  firebase.initializeApp(config);
  
  // Create a variable to reference the database
  var database = firebase.database();



  database.ref("fake").on("value", function(snapshot){
    console.log(snapshot.val());
  })

  var $submit = $("#submit");

    $submit.click(function(e){
        e.preventDefault();
        var payload = {
            trainName: $("train-name"),
            destination: $("#destination").val().trim(),
            frequency: $("#")

        }
    })

function submit(ref,obj){
    database.ref(ref).set(obj)
}


var firebaseConfig = {
    apiKey: "AIzaSyDdfCtRF8i_-vAgxwLHb7k8GUIqS6GgJgs",
    authDomain: "daily-notes-7c1a3.firebaseapp.com",
    databaseURL: "https://daily-notes-7c1a3-default-rtdb.firebaseio.com",
    projectId: "daily-notes-7c1a3",
    storageBucket: "daily-notes-7c1a3.appspot.com",
    messagingSenderId: "669533646140",
    appId: "1:669533646140:web:bf678e5500fe5abfb7c239",
    measurementId: "G-6W7S85VJ4C"
  };
  
  firebase.initializeApp(firebaseConfig);
  user_name = localStorage.getItem("user_name");
  
note_name = localStorage.getItem("note_name");
note_name_up=note_name.toUpperCase()

document.getElementById("note_name").innerHTML = "NOTE :- "+note_name_up;

var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function voicetype(){
    document.getElementById("textbox").innerHTML="";
    recognition.start();
}
recognition.onresult=function(event){
    console.log(event);
    var Content = event.results[0][0].transcript;
    console.log(Content);
    texts=document.getElementById("textbox").value
    document.getElementById("textbox").value =texts+" "+Content;
    
}
function speak(){
    var synth=window.speechSynthesis;
    speak_data=document.getElementById("textbox").value;
    var utterThis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
}
function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
        window.location = "index.html";
    }
   

function save(){
    
    note=document.getElementById("textbox").value;
    function send(){
        firebase.database().ref("/"+user_name+"/"+note_name).update({"note":note});}
      send();
    document.getElementById("save").innerText="Saved!";
    setInterval(function() {document.getElementById("save").innerText="Save";}, 2000);
    }    

function getData() { firebase.database().ref("/"+user_name+"/"+note_name).on('value', function(snapshot) { document.getElementById("textbox").value = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
        firebase_message_id = childKey;
        message_data = childData;
//Start code
        console.log(firebase_message_id);
          console.log(message_data);
          document.getElementById("textbox").value=message_data;
          
//End code
     } });  }); }
     getData()

    
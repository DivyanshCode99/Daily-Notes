user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
document.getElementById("user_name").style="color: white;font-family: 'Yeon Sung';font-size: 45px;letter-spacing: 10px;margin-top: 50px;";

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



function addNote()
{
  note_name = document.getElementById("note_name").value;
  console.log(note_name);

  firebase.database().ref("/"+user_name).child(note_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("note_name", note_name);
    
    //window.location = "note_page.html";
    document.getElementById("note_name").value
}

function getData() {  firebase.database().ref("/"+user_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
      note_name = childKey;
       
      row = "<div class='room_name' id="+note_name+" onclick='redirectToRoomName(this.id)' >"+ note_name+"</div><hr>";
      row_not_to_add= "<div class='room_name' id="+"password"+" onclick='redirectToRoomName(this.id)' >"+ note_name+"</div><hr>";
      if(row !=row_not_to_add){
      document.getElementById("output").innerHTML += row;}
    });
  });

}

getData();

function redirectToRoomName(name)
{
  localStorage.setItem("note_name", name);
  

    window.location = "note_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}
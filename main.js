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

function login(){
    user=document.getElementById("user_name").value;
    user_name=user.toLowerCase();
    password=document.getElementById("password").value;

if ((user_name=="") || (password=="")){
    window.alert("Please fill in the boxes.")
}
else{
  function getData() { firebase.database().ref("/"+user_name).on('value', function(snapshot) { snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    password_data = childData;

    console.log(firebase_message_id);
    console.log(password_data);
    password_cloud= password_data['password'];
   
   if(firebase_message_id=="password"){
   if(password_data==""){
    window.alert("Wrong user Id");
   }
   else{

       if (password_data==password){
      localStorage.setItem("user_name",user_name);
      window.location="notes_list.html";
      console.log("verification done")
     }
     else{
      console.log("Not Matched");
      window.alert("Password incorrect");
     }

   }
  }
   
 } });  }); }
getData();
}
}    

function new_account(){
  window.location="account.html";
  
}

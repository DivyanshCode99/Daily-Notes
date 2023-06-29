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





function getData() { 
firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
firebase_message_id = childKey;
message_data = childData;

    } });  }); }


//firebase.database().ref(room_name).child(message_id).update({like:updated_likes});



function create_account(){
    user=document.getElementById("user_name").value;
    user_name=user.toLowerCase();
    password=document.getElementById("password").value;
    repassword=document.getElementById("repassword").value;
    password_char=password.length;

    if (user_name != ""){

        if (password !=""){

            if (repassword !=""){

                if (password==repassword){

                    if (password_char >=7){

                        console.log(password_char);
                        localStorage.setItem("user_name",user_name);
                        console.log(user_name);
                        function send(){firebase.database().ref("/").child(user_name).update({"password":password});;}
                        send();
                         setInterval(function() {window.location="index.html";}, 2000)
                         

                    }
                    else{
                        window.alert("Please keep your password more than 8 Characters");
                    }          
                }
                else{
                    window.alert("Please check your confirm password");
                }   
         
            } else{
                window.alert("Please fill in the boxes.");
              
            }
        } else{
            window.alert("Please fill in the boxes.");
          
        }   
    } else{
        window.alert("Please fill in the boxes.");
      
    }
    

}

function addUser() {
   
        user_name = document.getElementById("user_name").value;
    
        localStorage.setItem("user_name" , user_name);
    
        window.location = "kwitter_room.html"
   
}

var firebaseConfig = {
      apiKey: "AIzaSyAoefDNOBhQzKwlQIbFl31R4TKlU0C95r4",
      authDomain: "chat-sapp-add49.firebaseapp.com",
      projectId: "chat-sapp-add49",
      storageBucket: "chat-sapp-add49.appspot.com",
      messagingSenderId: "298690167057",
      appId: "1:298690167057:web:74e610b5f8c9c5c8de4cb0",
      measurementId: "G-H744RM1Q39"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
  
//ADD YOUR FIREBASE LINKS HERE
user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome "  +  user_name  + "!";

function addRoom(){
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name" , room_name);

      window.loctaion = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey =
childSnapshot.key;
 Room_names = childKey;
 //Start code
 //End code
 });});}
getData()

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
       row = "<div class='room_name' id="+Room_names+" onclick=' redirectToRoomName(this.id)' >#"+ Room_names + "</div><hr>";
       document.getElementById("output").innerHTML+= row;

      });});}
       function redirectToRoomName(name){
console.log(name);
localStorage,setItem("room_name" , name);
window.location = "kwitter_room.html";
       }


       function updateLike(){
             console.log("clicked on like button - " + message_id);
             button_id = message_id ; 
             likes = document.getElementById(button_id).value;
            update_likes = Number(likes) + 1 ; 
            console.log(update_likes);

            firebase.database().ref(room_name).child(message_id).update({ like : update_likes});
       }

       function logout(){
             localStorage.removeItem("user_name");
             localStorage.removeItem("room_name");
             window.location.replace("kwitter.html");
       }

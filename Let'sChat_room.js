var username=localStorage.getItem("user_name");
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDVxm-Zs--YUvXg41q-b_H9WnfLSBLwSNE",
  authDomain: "c-94-project.firebaseapp.com",
  databaseURL: "https://c-94-project-default-rtdb.firebaseio.com",
  projectId: "c-94-project",
  storageBucket: "c-94-project.appspot.com",
  messagingSenderId: "23593219528",
  appId: "1:23593219528:web:10150b3e9a29f42703bcfd"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
function addRoom()
{
  roomName=document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purpose:"Adding room"
  });
  localStorage.setItem("room_name", room_name);
  window.location="Let'sChat_chat.html";
}
function getData() 
 {
  firebase.database().ref("/").on('value', 
  function(snapshot) 
  {
  document.getElementById("output").value = "";
  snapshot.forEach(function(childSnapshot) 
  {
    childKey  = childSnapshot.key;
       room_names = childKey;
      //Start code
      console.log("Room" + room_names);
      row="<div class='room' id="+room_names+" onclick='showChat(this.id)'># + room_names + </div><hr>"
      document.getElementById("output").innerHTML+=row;
      //End code
      });
    });
  }
getData();
function showChat(Name)
{
  console.log(Name);
  localStorage.setItem("room_name", Name);
  window.location="Let'sChat_chat.html";
}
function signOut()
{
  window.location="index.html";
  localStorage.removeItem("User Name");
  localStorage.removeItem("room_name");
}
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyD_RVhk36Oq6D0-aWv7KuA32sg3hIlXTOg",
    authDomain: "kwittwit.firebaseapp.com",
    databaseURL: "https://kwittwit-default-rtdb.firebaseio.com",
    projectId: "kwittwit",
    storageBucket: "kwittwit.appspot.com",
    messagingSenderId: "601731185376",
    appId: "1:601731185376:web:a4180f33b492679454ae85"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  function send()
  {
   msg=document.getElementById("msg").value;
   firebase.database().ref(room_name).push(
        {
         name:userName, message:msg, like:0
        });
        document.getElementById("mag").value="";
  }
function getData()
{
      firebase.database().ref("/").on('value', function(snapshot)
      {
       document.getElementById("output").innerHTML = "";
       snapshot.forEach(function(childSnapshot)
       { childKey  = childSnapshot.key;
         childData = childSnapshot.val();
         if(childKey != "purpose") 
         {
         firebase_message_id = childKey;
         message_data = childData;
 //Start code
 console.log(firebase_message_id);
 console.log(message_data);
 name=message_data['name'];
 message=message_data['message'];
 like=message_data['like'];
 nameWithTags="<h4>"+ name + "<img class='userTick' src='tick.png'></h4>";
 messageWithTags="<h4 class='message'>" + message +"</h4>";
 likeBtn="<button class='btn-info' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
 span="<span class='glyphicon glyphicon-thumds-up>Likes:"+like+"</span></button><hr>";
 row=nameWithTags+messageWithTags+likeBtn+span;
 document.getElementById("output").innerHTML+=row;
 //End code
      }
 });
  });
 }
getData();
function updateLike(message_id)
{
  console.log("User liked message" + message_id);
  btnID=message_id;
  likes=document.getElementById(btnID).value;
  updateLikes=Number(likes)+1;
  console.log(updateLikes);
   firebase.database().ref(roomName).child(message_id).update({
    likes:updateLikes
  }
  );
}
function logOut()
{
   window.location="index.html";
   localStorage.removeItem("Room Name");
   localStorage.removeItem("User name");
}
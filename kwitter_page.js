var firebaseConfig = {
      apiKey: "AIzaSyC8zIMGSPiwbVWyAgMGXtK89FZ9tIgmax4",
      authDomain: "kwitter-dcdfb.firebaseapp.com",
      databaseURL: "https://kwitter-dcdfb-default-rtdb.firebaseio.com",
      projectId: "kwitter-dcdfb",
      storageBucket: "kwitter-dcdfb.appspot.com",
      messagingSenderId: "36711200805",
      appId: "1:36711200805:web:a81992f58ae307c79427cc"
    };
    
    // Initialize Firebase
   firebase.initializeApp(firebaseConfig);

    function send()
    {
          msg= document.getElementById("msg").value;
          firebase.database().ref(room.name).push({
                name:user_name,
                message:msg,
                like:0
             })
             document.getElementById("msg").value ="";
    }
     firebase.database().ref(room_name).push({
           name:user_name,
           message:msg,
           like:0
     })

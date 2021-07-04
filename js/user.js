(function() {

    firebase.auth().onAuthStateChanged(firebaseUser => {
        if (firebaseUser) {
            // document.getElementById("userGreeting").innerHTML = '<h1>' + firebaseUser.displayName + ', Welcome to Cyber Netty! </h1>';
            //document.getElementById("progressRep").innerHTML = '';
            /*
            loggedIn.classList.remove('hide');
            activities.classList.remove('hide');
            progress.classList.remove('hide');
            joinNetty.classList.add('hide');
            btnLogout.classList.remove('hide');
            btnWriteToDB.classList.remove('hide');
            btnLogin.classList.add('hide');
            btnSignUp.classList.add('hide');
            */
            console.log('Logged in');
        } else {
            /*
            loggedIn.classList.add('hide');
            activities.classList.add('hide');
            progress.classList.add('hide');
            joinNetty.classList.remove('hide');
            btnLogout.classList.add('hide');
            btnWriteToDB.classList.add('hide');
            btnLogin.classList.remove('hide');
            btnSignUp.classList.remove('hide');
            */
            console.log('Logged out');
        }
    });

    /*
    const Join = document.getElementById('joinNetty');
    const btnLogin = document.getElementById('btnLogin');
    const btnSignUp = document.getElementById('btnSignUp');
    const btnLogout = document.getElementById('btnLogout');
    const btnWriteToDB = document.getElementById('btnWriteToDB');
    const btnReadFromDb = document.getElementById('btnReadFromDb');
    const txtEmail = document.getElementById('email');
    const txtPassword = document.getElementById('password');
    */

    //////////////////////////////////////////
    // Log in
    //////////////////////////////////////////
    /*
    btnLogin.addEventListener('click', e => {
        const email = txtEmail.value;
        const password = txtPassword.value;
        const auth = firebase.auth();

        auth.signInWithEmailAndPassword(email, password).catch(e => {
            console.log(e);
        });
    });

    //////////////////////////////////////////
    // Sign up
    //////////////////////////////////////////
    btnSignUp.addEventListener('click', e => {
        const email = txtEmail.value;
        const password = txtPassword.value;
        ``
        const auth = firebase.auth();

        auth.createUserWithEmailAndPassword(email, password).catch(e => {
            console.log(e);
        });
    });

    //////////////////////////////////////////
    // log out
    //////////////////////////////////////////
    btnLogout.addEventListener('click', e => {
        firebase.auth().signOut();
    })

    //////////////////////////////////////////
    // write to db (user id needed)
    //////////////////////////////////////////
    btnWriteToDB.addEventListener('click', e => {
        // Get a reference to the database service
        const data = {
            complete: true,
            score: 78,
            date: '01/01/1990'
        };
        writeUserData(9, data);
        // save the user's profile into Firebase so we can list users,
        // use them in Security and Firebase Rules, and show profiles
    });


    //////////////////////////////////////////
    // read from db once
    //////////////////////////////////////////
    btnReadFromDb.addEventListener('click', e => {
        readUserData();
    });


    //////////////////////////////////////////
    // More read stuff
    //////////////////////////////////////////
    /*
      // get elements
      const preObject = document.getElementById('object');
  
      // create references
      const dbRefObject = firebase.database().ref().child('user');
      const interestsRefObject = dbRefObject.child('interests');
      // Live sync data
      dbRefObject.on('value', snap => {
        console.log(snap.val());
        const user = snap.val();
        const output = document.getElementById('output');
        output.innerHTML += user.name;
        output.innerHTML += '<br/>';
        
        output.innerHTML += user.age;
        output.innerHTML += '<br/>';
        
        output.innerHTML += user.address;
        output.innerHTML += '<br/>';
      });
  
      interestsRefObject.on('child_added', snap => {
        // value
        console.log(snap.val());
        // key
        console.log(snap.key);
  
        const interestsOutput = document.getElementById('interests');
        interestsOutput.innerHTML += (`<p id="i${snap.key}">${snap.val()}</p>`);
      });
  
      interestsRefObject.on('child_changed', snap => {
        const interestElement = document.getElementById(`i${snap.key}`);
        interestElement.innerHTML = `${snap.val()}`;
      });
  
      interestsRefObject.on('child_removed', snap => {
        const interestElement = document.getElementById(`i${snap.key}`);
        interestElement.remove();
      });
    */
}());
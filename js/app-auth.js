//Authentication
(function() {
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyBgO9w0fHIK2mB7oCD1O4bIe_LvA76Ov_w",
        authDomain: "cybernetty-df98a.firebaseapp.com",
        projectId: "cybernetty-df98a",
        storageBucket: "cybernetty-df98a.appspot.com",
        messagingSenderId: "480836825199",
        appId: "1:480836825199:web:2b95733fec458f4c8b5d9a",
        measurementId: "G-CGEQ7VM9T9"
      };
    firebase.initializeApp(config);

    //Get elements
    const Email = document.getElementById("txtEmail");
    const Password = document.getElementById("txtPassword");
    const Join = document.getElementById("joinNetty");
    const loggedIn = document.getElementById("loggedIn");


    //Add Login event
    btnLogin.addEventListener('click', e => {
        //Get email and password
        const email = txtEmail.value;
        const pass = txtPassword.value;
        const auth = firebase.auth();
        //Sign in
        const promise = auth.signInWithEmailAndPassword(email, pass);
        promise.catch(e => {
            console.log(e.message);
        })
    })

    //Add Sign Up event
    btnSignUp.addEventListener('click', e => {
        const email = txtEmail.value;
        const pass = txtPassword.value;
        const auth = firebase.auth();
        //Sign in
        const promise = auth.createUserWithEmailAndPassword(email, pass);
        promise.catch(e => {
            console.log(e.message);
        })
    })

    //Add Log Out event
    btnLogout.addEventListener('click', e => {
        firebase.auth().signOut();
    })

    //Add a realtime listener
    firebase.auth().onAuthStateChanged(firebaseUser => {
        if (firebaseUser) {
            console.log(firebaseUser);
            loggedIn.classList.remove('hide');
            //btnLogout.classList.remove('hide');
        } else {
            console.log('not logged in');
            loggedIn.classList.add('hide');
            //btnLogout.classList.add('hide');
        }
    })
});
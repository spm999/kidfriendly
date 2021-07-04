(function() {

    const navLoggedIn = document.getElementById('loggedIn');
    const navJoinNetty = document.getElementById('joinNetty');
    const navLogout = document.getElementById('btnLogout');

    firebase.auth().onAuthStateChanged(firebaseUser => {
        if (firebaseUser) {
            console.log('Logged in');
            document.getElementById("userGreeting").innerHTML = '<h3>Hi ' + firebaseUser.displayName + ', join Friendly on a quest to discover the online world!</h3>';

            navLoggedIn.classList.remove('hide');
            navJoinNetty.classList.add('hide');
            navLogout.addEventListener('click', e => {
                firebase.auth().signOut();
            });
        } else {
            console.log('Logged out');
            navLoggedIn.classList.add('hide');
            navJoinNetty.classList.remove('hide');
        }
    });

}());
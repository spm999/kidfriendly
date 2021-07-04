(function() {

    const navLoggedIn = document.getElementById('loggedIn');
    const navJoinNetty = document.getElementById('joinNetty');
    const navLogout = document.getElementById('btnLogout');

    firebase.auth().onAuthStateChanged(firebaseUser => {
        if (firebaseUser) {
            console.log('Logged in');

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
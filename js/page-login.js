(function () {
  firebase.auth().onAuthStateChanged(firebaseUser => {
    if (firebaseUser) {
      console.log('Logged in');
    } else {
      console.log('Logged out');
    }
  });
})();
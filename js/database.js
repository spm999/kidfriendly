function writeUserData(activityId, data) {
    var userId = firebase.auth().currentUser.uid;
    firebase.database().ref('users/' + userId + '/activity/' + activityId).set(data);
}

function writeUserQuizData(data) {
    var userId = firebase.auth().currentUser.uid;
    return firebase.database().ref('users/' + userId + '/quiz/').set(data);
}

function readUserData() {
    var userId = firebase.auth().currentUser.uid;
    return firebase.database().ref('users/' + userId).once('value')
        .then(function(snapshot) {
            console.log(snapshot.val());
        })
        .catch(e => {
            console.log(e);
        });
}

function readUserActivityData() {
    var userId = firebase.auth().currentUser.uid;
    return firebase.database().ref('users/' + userId + '/activity/').once('value');
}

function readUserQuizData() {
    var userId = firebase.auth().currentUser.uid;
    return firebase.database().ref('users/' + userId + '/quiz/').once('value');
}
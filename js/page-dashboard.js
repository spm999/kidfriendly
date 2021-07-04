(function() {
    firebase.auth().onAuthStateChanged(firebaseUser => {
        if (firebaseUser) {
            console.log('Logged in');
            readUserQuizData().then(snapshot => {
                const quizArea = document.getElementById('quiz');
                let quiz = snapshot.val();
                if (quiz == null) {
                    quiz = [];
                    quizArea.innerHTML = '<h3>You have not added any questions.</h3>';
                } else {
                    writeOutQuestions(quiz);
                }
                const questionTitle = document.getElementById('questionTitle');
                const questionAnswerOne = document.getElementById('questionAnswerOne');
                const questionAnswerTwo = document.getElementById('questionAnswerTwo');
                const questionAnswerThree = document.getElementById('questionAnswerThree');
                const questionAnswerCorrect = document.getElementById('questionAnswerCorrect');
                document.getElementById("submit").addEventListener('click', function() {
                    const question = {
                        "question": questionTitle.value,
                        "answer1": questionAnswerOne.value,
                        "answer2": questionAnswerTwo.value,
                        "answer3": questionAnswerThree.value,
                        "correctAnswer": questionAnswerCorrect.value,
                        "complete": false,
                        "correct": false
                    };
                    quiz.push(question);
                    writeUserQuizData(quiz).then(response => {
                        writeOutQuestions(quiz);
                    });
                });
            })
        } else {
            console.log('Logged out');
        }
    });
}());

function removeQuestion(quiz, index) {
    quiz.splice(index, 1);

    writeUserQuizData(quiz).then(response => {
        writeOutQuestions(quiz);
    });
}

function writeOutQuestions(quiz) {
    const quizArea = document.getElementById('quiz');
    quizArea.innerHTML = '';
    for (let i = 0; i < quiz.length; i++) {
        quizArea.innerHTML += ('<h3>' + quiz[i].question + '</h3> <button id="q' + i + '"> x Remove</button>');

    }
    for (let i = 0; i < quiz.length; i++) {
        document.getElementById('q' + i).addEventListener('click', function() {
            removeQuestion(quiz, i);
        })
    }
}
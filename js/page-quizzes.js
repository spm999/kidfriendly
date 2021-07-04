(function() {
    firebase.auth().onAuthStateChanged(firebaseUser => {
        if (firebaseUser) {
            console.log('Logged in');
            readUserQuizData().then(snapshot => {
                const quizArea = document.getElementById('quiz');
                let quiz = snapshot.val();
                if (quiz == null) {
                    quiz = [];
                    quizArea.innerHTML = '<h3>You have not added any questions yet. Add some below!</h3>';
                } else {
                    quiz.forEach(question => {
                        quizArea.innerHTML += (
                            `<h2>${question.question}</h2>
                        <input type="radio" name="${question.question}" value="${question.answer1}" checked> ${question.answer1}
                        <br>
                        <input type="radio" name="${question.question}" value="${question.answer2}"> ${question.answer2}
                        <br>
                        <input type="radio" name="${question.question}" value="${question.answer3}"> ${question.answer3}
                        <br>

              
                        `
                        );
                    })
                    document.getElementById('buttonSubmit').addEventListener('click', function() {
                        let score = 0;
                        quiz.forEach(question => {
                            const answers = document.getElementsByName(question.question);
                            let answer;
                            for (var i = 0; i < answers.length; i++) {
                                if (answers[i].checked) {
                                    answer = answers[i].value;
                                }
                            }
                            question.complete = true;
                            if (question.correctAnswer == answer) {
                                question.correct = true;
                                score++;

                                document.getElementById('after_submit').style.visibility = "visible";
                                document.getElementById('number_correct').innerHTML = "You got " + score + " question correct!";
                            }
                        });
                        writeUserQuizData(quiz).then(response => {
                            alert("Complete!");
                        });
                    });
                }
            })
        } else {
            console.log('Logged out');
        }
    });
}());
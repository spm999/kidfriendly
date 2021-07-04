// JavaScript Document
"use strict";

function setUpListeners() {
    document.getElementById('a1').addEventListener("click", StrangerDangerActivity, false);
    document.getElementById('a2').addEventListener("click", TheInternetActivity, false);
    document.getElementById('a3').addEventListener("click", SharingActivity, false);
    document.getElementById('a4').addEventListener("click", PersonalInformationActivity, false);
    document.getElementById('a5').addEventListener("click", CyberBullyingActivity, false);
    document.getElementById('a6').addEventListener("click", ProtocolActivity, false);
    //document.getElementById('home').innerHTML = "Click on the sections below to complete some fun activities with Netty!"
}

// When Activity1 button is clicked
function StrangerDangerActivity() {
    var one = document.getElementById('home');
    one.innerHTML = `

    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-118121632-1"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag() { dataLayer.push(arguments); }
        gtag('js', new Date());

        gtag('config', 'UA-118121632-1');

    </script>

    <form id="quiz" name="quiz">

    <p class="questions">Question 1: _______ of people you talk to or interact with online</p>
    <input id="mc" type="radio" name="question1" value="take care">Take Care<br>
    <input id="mc" type="radio" name="question1" value="beware">Beware<br>
    <input id="mc" type="radio" name="question1" value="think">Think<br>

    <p class="questions">Question 2: Some people use the internet as a _____ to hide behind to be destructive to others</p>
    <input id="mc" type="radio" name="question2" value="hat">Hat<br>    
    <input id="mc" type="radio" name="question2" value="beach ball">Beach Ball<br>
    <input id="mc" type="radio" name="question2" value="mask">Mask<br>

    <p class="questions">Question 3: You should never meet anyone you met online in person</p>
    <input id="mc" type="radio" name="question3" value="true">True<br>
    <input id="mc" type="radio" name="question3" value="false">False<br>

    <input id="button" type="button" class="btn btn-info" value="Submit" onclick="StrangerDanger()">
    </form>

    <div id="after_submit">
    <p id="number_correct">
    <p id="message"></p>

    `;
}

function StrangerDanger() {

    var question1 = document.quiz.question1.value;
    var question2 = document.quiz.question2.value;
    var question3 = document.quiz.question3.value;
    var correct = 0;

    if (question1 == "beware") {
        correct++;
    }

    if (question2 == "mask") {
        correct++;
    }

    if (question3 == "true") {
        correct++;
    }

    var messages = ["You did it!", "Not quite!", "Try again"];

    var score;

    if (correct < 1) {
        score = 2;
    }
    if (correct > 0 && correct < 3) {
        score = 1;
    }
    if (correct > 2) {
        score = 0;
    }

    const data = {
        complete: true,
        score: correct
    };
    writeUserData(1, data);

    document.getElementById('after_submit').style.visibility = "visible";
    document.getElementById('number_correct').innerHTML = "You got " + correct + "/3 correct";
    document.getElementById('message').innerHTML = messages[score];
}

// When Activity2 button is clicked
function TheInternetActivity() {
    var two = document.getElementById('home');
    two.innerHTML = `

    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-118121632-1"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag() { dataLayer.push(arguments); }
        gtag('js', new Date());

        gtag('config', 'UA-118121632-1');

    </script>       

    <form id="quiz" name="quiz">

    <h3>Suggested words:</h3>
    <pre id="suggest">communicate     massive network     internet     connects millions of computers together</pre>
    
    <p class="questions">Question:</p>        
    <p>The Internet is a <input id="textbox" type="text" name="question1"/> of networks, a networking infrastructure. It <input id="textbox" type="text" name="question2"/> globally, forming a network in which any computer can <input id="textbox" type="text" name="question3"/> with any other computer, as long as they are both connected to the <input id="textbox" type="text" name="question4"/>.</p>

    <input id="button" type="button" value="Submit" onclick="TheInternet()">

    </form>

    <div id="after_submit">
    <p id="number_correct">
    <p id="message"></p>
    </div>

    `;
}

function TheInternet() {

    var question1 = document.quiz.question1.value;
    var question2 = document.quiz.question2.value;
    var question3 = document.quiz.question3.value;
    var question4 = document.quiz.question4.value;
    var correct = 0;

    if (question1 == "massive network") {
        correct++;
    }

    if (question2 == "connects millions of computers together") {
        correct++;
    }

    if (question3 == "communicate") {
        correct++;
    }

    if (question4 == "internet") {
        correct++;
    }

    var messages = ["You did it!", "Almost there..", "Three more..", "Try again"];

    var score;

    if (correct < 1) {
        score = 3;
    }
    if (correct > 0 && correct < 4) {
        score = 2;
    }
    if (correct > 2) {
        score = 1;
    }
    if (correct > 1) {
        score = 0;
    }

    const data = {
        complete: true,
        score: correct
    };
    writeUserData(2, data);


    document.getElementById('after_submit').style.visibility = "visible";
    document.getElementById('number_correct').innerHTML = "You got " + correct + "/4 correct";
    document.getElementById('message').innerHTML = messages[score];
}

// When Activity3 button is clicked
function SharingActivity() {
    var three = document.getElementById('home');
    three.innerHTML = `
    
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-118121632-1"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag() { dataLayer.push(arguments); }
        gtag('js', new Date());

        gtag('config', 'UA-118121632-1');

    </script>

    <form id="quiz" name="quiz">

    <p class="questions">Question: The internet is like.. </p>
    <input id="mc" type="radio" name="question1" value="option1">Floating through the sky in a hot air balloon<br>
    <input id="mc" type="radio" name="question1" value="option2">Hanging out with Friendly on the beach<br>
    <input id="mc" type="radio" name="question1" value="option3">Standing on the street, shouting into a microphone<br>

    <input id="button" type="button" value="Submit" onclick="Share()">
    
    </form>

    <div id="after_submit">
    <p id="number_correct">
    <p id="message"></p>

    `;
}

function Share() {
    var question1 = document.quiz.question1.value;

    var correct = 0;

    if (question1 == "option3") {
        correct++;
    }

    var messages = ["You did it!"];

    var score;

    if (correct) {
        score = 1;
    }

    const data = {
        complete: true,
        score: correct
    };
    writeUserData(3, data);

    document.getElementById('after_submit').style.visibility = "visible";
    document.getElementById('number_correct').innerHTML = "You got " + correct + "/1 correct";
    document.getElementById('message').innerHTML = messages[score];
}

// When Activity4 button is clicked
function PersonalInformationActivity() {
    var four = document.getElementById('home');
    four.innerHTML = `

    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-118121632-1"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag() { dataLayer.push(arguments); }
        gtag('js', new Date());

        gtag('config', 'UA-118121632-1');

    </script>

    <form id="quiz" name="quiz">

    <p class="questions">Question 1: True or False, it's okay to give your password to your friends </p>
    <input id="mc" type="radio" name="question1" value="true">True<br>
    <input id="mc" type="radio" name="question1" value="false">False<br>

    <p class="questions">Question 2: Why must you never share your important details online?</p>
    <input id="mc" type="radio" name="question2" value="identity">Someone could steal your identity<br>    
    <input id="mc" type="radio" name="question2" value="disappear">Your information will disappear<br>

    <p class="questions">Question 3: What important details should you never put online</p>
    <input id="mc" type="radio" name="question3" value="option1">Shoe size, best friend, favourite food<br>
    <input id="mc" type="radio" name="question3" value="option2">Full name, date of birth, address and password<br>
    <input id="mc" type="radio" name="question3" value="option3">Favourite colour, favourite game<br>

    <input id="button" type="button" value="Submit" onclick="PInfo()">
    </form>

    <div id="after_submit">
    <p id="number_correct">
    <p id="message"></p>

    `;
}

function PInfo() {
    var question1 = document.quiz.question1.value;
    var question2 = document.quiz.question2.value;
    var question3 = document.quiz.question3.value;
    var correct = 0;

    if (question1 == "false") {
        correct++;
    }

    if (question2 == "identity") {
        correct++;
    }

    if (question3 == "option2") {
        correct++;
    }

    var messages = ["You did it!", "Not quite!", "Try again"];

    var score;

    if (correct < 1) {
        score = 2;
    }
    if (correct > 0 && correct < 3) {
        score = 1;
    }
    if (correct > 2) {
        score = 0;
    }

    const data = {
        complete: true,
        score: correct
    };
    writeUserData(4, data);

    document.getElementById('after_submit').style.visibility = "visible";
    document.getElementById('number_correct').innerHTML = "You got " + correct + " correct";
    document.getElementById('message').innerHTML = messages[score];
}

// When Activity5 button is clicked
function CyberBullyingActivity() {
    var five = document.getElementById('home');
    five.innerHTML = `

    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-118121632-1"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag() { dataLayer.push(arguments); }
        gtag('js', new Date());

        gtag('config', 'UA-118121632-1');

    </script>

    <form id="quiz" name="quiz">

    <p class="questions">Question:</p>
    <p>A Cyber Bullying is the use of </p>
    <input id="textbox" type="text" name="question1"/>
    <p> to harass, threaten, embarrass, or </p>
    <input id="textbox" type="text" name="question2"/>
    <p>another person.</p>

    <h3>Suggested words:</h3>
    <pre id="suggest">target   technology</pre>
    
    <input id="button" type="button" value="Submit" onclick="CyberBully()">
    </form>

    <div id="after_submit">
    <p id="number_correct">
    <p id="message"></p>
    
    `;
}

function CyberBully() {
    var question1 = document.quiz.question1.value;
    var question2 = document.quiz.question2.value;
    var correct = 0;

    if (question1 == "technology") {
        correct++;
    }

    if (question2 == "target") {
        correct++;
    }

    var messages = ["You did it!", "Try again"];

    var score;

    if (correct < 1) {
        score = 2;
    }
    if (correct > 0 && correct < 2) {
        score = 1;
    }

    const data = {
        complete: true,
        score: correct
    };
    writeUserData(5, data);

    document.getElementById('after_submit').style.visibility = "visible";
    document.getElementById('number_correct').innerHTML = "You got " + correct + " correct";
    document.getElementById('message').innerHTML = messages[score];
}

// When Activity6 button is clicked
function ParentActivity() {
    /*var six = document.getElementById('home');
    six.innerHTML = `<h1>ProtocolActivity</h1>
    
    `;*/
    //document.getElementById("a6").addEventListener('click', function() {
    window.location.assign("page-quizzes.html");
    //});
}
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

            readUserActivityData()
                .then(function(snapshot) {
                    var progress = snapshot.val();
                    console.log(progress);

                    if (progress == null) {
                        // Error message for no activities completed yet
                        document.getElementById('progressRep').innerHTML = "No Progress";
                    } else {
                        var content = '';

                        if (progress['1'] === undefined) {

                            content += `
                                <div class="feature-left">
                                    <i class="fa fa-exclamation-circle icon"></i>
                                    <div class="copy">
                                        <div class="incomplete">
                                            <h3>Stranger Danger</h3>
                                            <p>Incomplete</p>
                                        </div>
                                    </div>
                                </div>
                                <hr>
                                `;

                        } else {
                            content += //progress1.complete;
                                //content += progress1.score;
                                `
                                <div class="feature-left">
                                    <i class="fa fa-trophy icon"></i>
                                    <div class="copy">
                                        <div class="complete">
                                            <h3>Stranger Danger</h3>
                                            <p>Complete!</p>
                                            <p>You got ` + progress['1'].score + `/3</p>
                                        </div>
                                    </div>
                                </div>
                                <hr>
                                `
                        }
                        if (progress['2'] === undefined) {
                            content += `
                            <div class="feature-left">
                            <i class="fa fa-exclamation-circle icon"></i>
                                <div class="copy">
                                    <div class="incomplete">
                                        <h3>The Internet</h3>
                                        <p>Incomplete</p>
                                    </div>
                                </div>
                            </div>
                            <hr>`;

                        } else {
                            content +=
                                `<div class="feature-left">
                                    <i class="fa fa-trophy icon"></i>
                                    <div class="copy">
                                        <div class="complete">
                                            <h3>The Internet</h3>
                                            <p>Complete!</p>
                                            <p>You got ` + progress['2'].score + `/4</p>
                                        </div>
                                    </div>
                                </div>
                                <hr>`
                        }
                        if (progress['3'] === undefined) {
                            content += `
                            <div class="feature-left">
                            <i class="fa fa-exclamation-circle icon"></i>
                                <div class="copy">
                                    <div class="incomplete">
                                        <h3>Sharing</h3>
                                        <p>Incomplete</p>
                                    </div>
                                </div>
                            </div>
                            <hr>`;

                        } else {
                            content +=
                                `<div class="feature-left">
                                    <i class="fa fa-trophy icon"></i>
                                    <div class="copy">
                                        <div class="complete">
                                            <h3>Sharing</h3>
                                            <p>Complete!</p>
                                            <p>You got ` + progress['3'].score + `/1</p>
                                        </div>
                                    </div>
                                </div>
                                <hr>`
                        }
                        if (progress['4'] === undefined) {
                            content += `
                            <div class="feature-left">
                            <i class="fa fa-exclamation-circle icon"></i>
                                <div class="copy">
                                    <div class="incomplete">
                                        <h3>Personal Information</h3>
                                        <p>Incomplete</p>
                                    </div>
                                </div>
                            </div>
                            <hr>`;

                        } else {
                            content +=
                                `<div class="feature-left">
                                    <i class="fa fa-trophy icon"></i>
                                    <div class="copy">
                                        <div class="complete">
                                            <h3>Personal Information</h3>
                                            <p>Complete!</p>
                                            <p>You got ` + progress['4'].score + `/3</p>
                                        </div>
                                    </div>
                                </div>
                                <hr>`
                        }
                        if (progress['5'] === undefined) {
                            content += `
                            <div class="feature-left">
                            <i class="fa fa-exclamation-circle icon"></i>
                                <div class="copy">
                                    <div class="incomplete">
                                        <h3>Cyber Bullying</h3>
                                        <p>Incomplete</p>
                                    </div>
                                </div>
                            </div>
                            <hr>`;

                        } else {
                            content +=
                                `<div class="feature-left">
                                    <i class="fa fa-trophy icon"></i>
                                    <div class="copy">
                                        <div class="complete">
                                            <h3>Cyber Bullying</h3>
                                            <p>Complete!</p>
                                            <p> You got ` + progress['5'].score + `/2</p>
                                        </div>
                                    </div>
                                </div>
                                <hr>`
                        }
                        if (progress['6'] === undefined) {
                            content += `
                            <div class="feature-left">
                            <i class="fa fa-exclamation-circle icon"></i>
                                <div class="copy">
                                    <div class="incomplete">
                                        <h3>Parent Activity</h3>
                                        <p>Incomplete</p>
                                    </div>
                                </div>
                            </div>
                                `;

                        } else {
                            content +=
                                `<div class="feature-left">
                                    <i class="fa fa-trophy icon"></i>
                                    <div class="copy">
                                        <div class="complete">
                                            <h3>Parent Activity</h3>
                                            <p>Complete!</p>
                                            <p>You got ` + progress['6'].score + `</p>
                                        </div>
                                    </div>
                                </div>`
                        }

                        document.getElementById('progressRep').innerHTML = content;

                    }
                })

        } else {
            console.log('Logged out');
            navLoggedIn.classList.add('hide');
            navJoinNetty.classList.remove('hide');
        }
    });

})();
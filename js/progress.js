alert("progress page is reading");

(function() {
    readUserActivityData()
        .then(function(snapshot) {
            var progress = snapshot.val();

            var content = '';

            var progress1 = progress['1'];
            var progress2 = progress['2'];
            var progress3 = progress['3'];
            var progress4 = progress['4'];
            var progress5 = progress['5'];
            var progress6 = progress['6'];

            if (progress1 === undefined) {
                content += `<div class="incomplete">
        <h2>Stranger Danger</h2>
        <p>Incomplete</p>
        </div>`;

            } else {
                content += //progress1.complete;
                    //content += progress1.score;
                    `<div class="complete">
        <h2>Stranger Danger</h2>
        <p>Complete!</p>
        <p>You got ` + progress1.score + `/3</p>
        </div>`
            }
            if (progress2 === undefined) {
                content += `<div class="incomplete">
        <h2>The Internet</h2>
        <p>Incomplete</p>
        </div>`;

            } else {
                content +=
                    `<div class="complete">
        <h2>The Internet</h2>
        <p>Complete!</p>
        <p>You got ` + progress2.score + `/4</p>
        </div>`
            }
            if (progress3 === undefined) {
                content += `<div class="incomplete">
        <h2>Sharing</h2>
        <p>Incomplete</p>
        </div>`;

            } else {
                content +=
                    `<div class="complete">
        <h2>Sharing</h2>
        <p>Complete!</p>
        <p>You got ` + progress3.score + `/1</p>
        </div>`
            }
            if (progress4 === undefined) {
                content += `<div class="incomplete">
        <h2>Personal Information</h2>
        <p>Incomplete</p>
        </div>`;

            } else {
                content +=
                    `<div class="complete">
        <h2>Personal Information</h2>
        <p>Complete!</p>
        <p>You got ` + progress4.score + `/3</p>
        </div>`
            }
            if (progress5 === undefined) {
                content += `<div class="incomplete">
        <h2>Cyber Bullying</h2>
        <p>Incomplete</p>
        </div>`;

            } else {
                content +=
                    `<div class="complete">
        <h2>Cyber Bullying</h2>
        <p>Complete!</p>
        <p> You got ` + progress5.score + `/2</p>
        </div>`
            }
            if (progress6 === undefined) {
                content += `<div class="incomplete">
        <h2>Protocol</h2>
        <p>Incomplete</p>
        </div>`;

            } else {
                content +=
                    `<div class="complete">
        <h2>Protocol</h2>
        <p>Complete!</p>
        <p>You got ` + progress6.score + `</p>
        </div>`
            }

            //            document.getElementById('progressRep').innerHTML = content;
            document.getElementById('progressRep').innerHTML = "Hi Joanne!";

        })
        .catch(e => {
            console.log(e);
        });
})();
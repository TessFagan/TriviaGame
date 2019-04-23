var state = 1
var intervalId;
console.log(state)
var maxtime = 15
// FOR NOW ITS 15 FOR MY SANITY

// toggle states
$("#startbutton").click(function () {
    $("#state2").toggleClass("off")
    $("#state1").toggleClass("off")
    state = 2
    console.log(state);
    generatequiz()
    console.log("hello");

    var counter = maxtime

    intervalId = setInterval(function () {
        counter--;
        if (counter >= 0) {
            $("#seconds").text(counter);
        }
        else if (counter <= 0) {
            alert("sorry, out of time");
            clearInterval(intervalId);
            $("#state2").toggleClass("off")
            $("#state3").toggleClass("off")
            state = 3
            $("#seconds").text(maxtime);
        }
    }, 1000);
});

$("#donebutton").click(function () {
    clearInterval(intervalId);
    $("#seconds").text(maxtime);
    $("#state2").toggleClass("off");
    $("#state3").toggleClass("off");
    state = 3
    console.log(state)
});

$("#playagainbutton").click(function () {
    $("#state1").toggleClass("off")
    $("#state3").toggleClass("off")
    state = 1
    console.log(state)
});


// question objects:
var q1 = {
    questiontext: ["Is dungeons and dragons awesome?", true],
    choice1: ["Yes", true],
    choice2: ["No", false],
    choice3: ["What is dungeons and dragons?", false]
};

var q2 = {
    questiontext: ["What does DM stand for?", true],
    choice1: ["Dragon Master", false],
    choice2: ["Dungeon Master", true],
    choice3: ["Dead Mummy", false]
};

var q3 = {
    questiontext: ["What is the highest level a player can be in Dungeons and Dragons?", true],
    choice1: ["20", true],
    choice2: ["30", false],
    choice3: ["40", false]
};

var q4 = {
    questiontext: ["What do you call a quest that you make yourself?", true],
    choice1: ["Original Content", false],
    choice2: ["Creative Campaign", false],
    choice3: ["Homebrew", true]
};

var q5 = {
    questiontext: ["Which of the following is the demon lord of ooze?", true],
    choice1: ["Juiblex", true],
    choice2: ["Asmodeus", false],
    choice3: ["Orcus", false]
};

var arrayofquestions = [q1, q2, q3, q4, q5]

// LOGIC if(q1.choice1 ===true) 

// function captureselectedchoices() {

// }

// function checkifchoicescorrect() {



//     for (i = 0; i < arrayofquestions.length; i++) {

//         selectedchoice = 

//         if (arrayofquestions[i].questiontext[1] === selectedchoice) {
//             return true
//         }
//         else {
//             return false
//         }
//     }
// }

// dynamically create quiz questions  with jquery
function generatequiz() {

    for (var i = 0; i < arrayofquestions.length; i++) {
        $("#quizcontent").append(`
        <div class="form-check">
            <p> Question: ${arrayofquestions[i].questiontext[0]}</p>
            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1"
            value="option1" checked>
            <label class="form-check-label" for="exampleRadios1">
            Option 1: ${arrayofquestions[i].choice1[0]}
            </label>
        </div>
        <div class="form-check">
            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1"
            value="option1" checked>
            <label class="form-check-label" for="exampleRadios1">
            Option 2: ${arrayofquestions[i].choice2[0]}
            </label>
        </div>
        <div class="form-check">
            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1"
            value="option1" checked>
            <label class="form-check-label" for="exampleRadios1">
            Option 3: ${arrayofquestions[i].choice3[0]}
            </label>
        </div>
        <br>
        `)
    }
}
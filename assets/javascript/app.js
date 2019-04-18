var state = 1
var intervalId;
console.log(state)
var maxtime = 5
// FOR NOW ITS 5 FOR MY SANITY

// toggle states
$("#startbutton").click(function () {
    $("#state2").toggleClass("off")
    $("#state1").toggleClass("off")
    state = 2
    console.log(state)
    generatequiz()
    console.log($("#hello"))

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
    $("#state2").toggleClass("off")
    $("#state3").toggleClass("off")
    state = 3
    console.log(state)
    clearInterval(intervalId);
    $("#seconds").text(maxtime);
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

// console.log(q1)
// console.log(arrayofquestions[1].questiontext[1])

// dynamically create quiz questions  with jquery

 //   <td>`+ response.Title + `</td>
    //   <td>`+ response.Year + `</td>
    //   <td>`+ response.Actors + `</td>



    // input type="radio" id="q1.1" value =` + q1.choice1[1] + `">` + q1.choice1[0] + `</input>
    //         <input type="radio" id="q1.2" value =` + q1.choice2[1] + `">` + q1.choice2[0] + `</input>
    //         <input type="radio" id="q1.3" value =` + q1.choice3[1] + `">` + q1.choice3[0] + `</input>





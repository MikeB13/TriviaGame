// Creata a var for the timer as well as the inerval for it
var number = 10;
var intervalId;

// Create the questions variable as well the answers options for the user to select from
// along with the correct choice
var myListofQuestions = [{
        question: "Which NYC Borough is Spider-Man From?",
        choices: ["Manhattan", "Brooklyn", "Queens", "Bronx"],
        correctChoice: "Queens"
    },
    {
        question: "Which Sport is considered Americas pasttime?",
        choices: ["Basketball", "Baseball", "Hockey", "Golf"],
        correctChoice: "Baseball"
    },
    {
        question: "Who was the second President of the United States",
        choices: ["John Adams", "George W. Bush", "Benjamin Franklin", "Samuel Adams"],
        correctChoice: "John Adams"
    },
    {
        question: "What is the term for a nine sided object?",
        choices: ["Decagon", "Octagon", "Nonagon", "Pentagon"],
        correctChoice: "Nonagon"
    }
];

// create a function that starts the game
function startGame() {
    $("#startGameButton").toggleClass("hidden");
    $("#gameWrapper").toggleClass("hidden");

    //write out questions
    myQuestion = "";


    //Create The forEach() method to call a provided function once for each element in an array, in order.
    myListofQuestions.forEach(function(obj, idx) {

        myQuestion = myQuestion + "<p class='bold'>" + obj.question + "</p>";

        obj.choices.forEach(function(choice) {
            myQuestion = myQuestion + "<input type='radio' name=" + idx + " value=" + choice + ">" + choice + "<br>";

            console.log(myQuestion);

        })

    })

    $("#myForm").append(myQuestion);

    run();

}
// Create the funtion that provides the user with the correct and incorrect answers
function gradeMe() {

    stop();

    var numCorrectAnswers = 0;
    var unanswered = 0;
    var incorrect = 0;

    //show choice
    for (var i = 0; i < myListofQuestions.length; i++) {

        var isItChecked = $("input[name =" + i + "]:checked").val();
        //alert(isItChecked);

        if (isItChecked === myListofQuestions[i].correctChoice) {
            numCorrectAnswers++;
        } else if (isItChecked === "undefined") {
            unanswered++;
        } else {
            incorrect++;
        }
    }


    $("#correct").html(numCorrectAnswers);
    $("#incorrect").html(incorrect);
    $("#unanswered").html(unanswered);
    $("#resultsWrapper").toggleClass("hidden");
    $("#gameWrapper").toggleClass("hidden");

}


// function to set one second intervals for the timer countdown

function run() {
    intervalId = setInterval(decrement, 1000);
}
// 
function decrement() {
    number--;
    // creates a stop on the timer once the user has completed all the questions
    $("#showNumber").html(number);
    if (number === 0) {
        gradeMe();
    }
}
// time up function
function stop() {
    clearInterval(intervalId);
}
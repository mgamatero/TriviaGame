// JavaScript function that wraps everything


$(document).ready(function () {
    var triviaQuestion = [{
        question: "What is the largest bone in the human body?",
        answers: ["Femur", "Lemur", "Radius", "Ulna"],
        correct: 0,
        image: "https://giphy.com/embed/IPArCs6qsnN84",
    },

    {
        question: "What is the largest two digit prime number?",
        answers: ["97", "67", "37", "91"],
        correct: 0,
        image: ""
    },

    {
        question: "Which pop album is the best selling of all time?",
        answers: ["Sgt. Pepper's Lonely Hearts Club Band", "Thriller", "Jagged Little Pill", "The Chronic"],
        correct: 1,
        image: ""
    },
    {
        question: "Which of the following can NOT be said of Will in “Good Will Hunting?",
        answers: ["He has been in trouble with the law", "He has trouble holding jobs", "He comes from a good family", "He is a Genius"],
        correct: 2,
        image: ""
    },
    {
        question: "In “Inception,” the spinning top is an example of a/an:",
        answers: ["Idol", "Hex", "Good Luck Charm", "Totem"],
        correct: 3,
        image: ""
    },
    {
        question: "What happens when Aaron gets a shot at anchoring the nightly news on “Broadcast News?",
        answers: ["He is unable to speak", "The teleprompter breaks", "There is a power outage at the studio", "He has a sweating attack"],
        correct: 3,
        image: ""
    },
    {
        question: "What is the most common element on Earth?",
        answers: ["Hydrogen", "Gold", "Sodium", "Silver"],
        correct: 0,
        image: ""
    },
    {
        question: "Which Ocean goes to the deepest depths?",
        answers: ["Pacific", "Atlantic", "Indian", "Arctic"],
        correct: 0,
        image: ""
    },
    {
        question: "How many sides does a heptagon have?",
        answers: ["5", "3", "7", "9"],
        correct: 2,
        image: ""
    },
    {
        question: "What does HTML stand for?",
        answers: ["Hot Tamales Meal Large", "Hey There My Lady", "Typer Hex Markup Language", "Hyper Text Markup Language"],
        correct: 3,
        image: ""
    },
    {
        question: "Which is the most populous state?",
        answers: ["New York", "Utah", "Oregon", "California"],
        correct: 3,
        image: ""
    },
    {
        question: "Who is trying to seduce Benjamin in The Graduate?",
        answers: ["Mr. Robinson", "Ms. Robinson", "Mrs. Robinson", "Robinson Crusoe"],
        correct: 2,
        image: ""
    },

    {
        question: "Entomology is the branch of science that studies what?",
        answers: ["Plants", "Music", "Animals", "Insects"],
        correct: 3,
        image: ""
    },
    {
        question: "What is the square root of 256?",
        answers: ["36", "16", "14", "17"],
        correct: 1,
        image: ""
    }
    ]

    //Fisher-Yates Shuffle, shuffles array contents
    function shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }

    //initialize --
    triviaQuestion = shuffle(triviaQuestion) //This shuffles the questions
    $("#questions").hide()
    $("#finalResult").hide()

    var totalCorrect = 0
    var totalWrong = 0
    var timer = 8
    //---------------

    
    //This section deals hides the 
    $("#splashButton").on("click", function () {
        $("#splash").hide()
        $("#questions").show()
    })

    //function to load questions
    function loadQuestion(qNum, randQnum) {
        timer = 8
        questionTimer = setInterval(countdown, 1000)
        $("#questionNum").html(qNum)
        $("#actualQuestion").html(triviaQuestion[randQnum].question)
        $("#firstQuestion").html("A) " + triviaQuestion[randQnum].answers[0])
        $("#secondQuestion").html("B) " + triviaQuestion[randQnum].answers[1])
        $("#thirdQuestion").html("C) " + triviaQuestion[randQnum].answers[2])
        $("#fourthQuestion").html("D) " + triviaQuestion[randQnum].answers[3])
    }

    //function countdown - decrements global var timer by 1, displays to html
    function countdown() {
        timer--
        if (timer <= 0) {
            $("#timeRemaining").html("Time's Up!")
            timer=0
            totalWrong++
            clearInterval(questionTimer)
        }
        else{
            $("#timeRemaining").html(timer)
        }
        
        console.log(timer)
    }

    function finalTally() {
        $("#finalResult").show()
        $("#totalQuestions").html(totalCorrect + totalWrong)
        $("#totalCorrect").html(totalCorrect)
        $("#totalWrong").html(totalWrong)
    }



    var randQuestionNum = Math.floor(Math.random() * triviaQuestion.length)
    var questionTimer
    var questionNumber = 1


    loadQuestion(questionNumber, randQuestionNum)

    $(".answer").on("click", function () {

        if (parseInt($(this).attr("value")) === triviaQuestion[randQuestionNum].correct) {
            totalCorrect++
        }
        if (parseInt($(this).attr("value")) !== triviaQuestion[randQuestionNum].correct) {
            totalWrong++
        }
        if (questionNumber > 9) {
            $("#questions").hide()
            finalTally()
            return
        }
        else {
            randQuestionNum = Math.floor(Math.random() * triviaQuestion.length)
            questionNumber++
            loadQuestion(questionNumber, randQuestionNum)
        }

    })
});


















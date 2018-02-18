// JavaScript function that wraps everything


$(document).ready(function () {
    var triviaQuestion = [{
        question: "What is the largest bone in the human body?",
        answers: ["Femur", "Lemur", "Radius", "Ulna"],
        correct: 0,
        image: "assets/images/femur.gif",
    },

    {
        question: "What is the largest two digit prime number?",
        answers: ["97", "67", "37", "91"],
        correct: 0,
        image: "assets/images/prime.gif"
    },

    {
        question: "Which pop album is the best selling of all time?",
        answers: ["Sgt. Pepper's Lonely Hearts Club Band", "Thriller", "Jagged Little Pill", "The Chronic"],
        correct: 1,
        image: "assets/images/thriller.gif"
    },
    {
        question: "Which of the following can NOT be said of Will in “Good Will Hunting?",
        answers: ["He has been in trouble with the law", "He has trouble holding jobs", "He comes from a good family", "He is a Genius"],
        correct: 2,
        image: "assets/images/goodwillhunting.gif"
    },
    {
        question: "In “Inception,” the spinning top is an example of a/an:",
        answers: ["Idol", "Hex", "Good Luck Charm", "Totem"],
        correct: 3,
        image: "assets/images/totem.gif"
    },
    {
        question: "What happens when Aaron gets a shot at anchoring the nightly news on “Broadcast News?",
        answers: ["He is unable to speak", "The teleprompter breaks", "There is a power outage at the studio", "He has a sweating attack"],
        correct: 3,
        image: "assets/images/sweat.gif"
    },
    {
        question: "What is the most common element on Earth?",
        answers: ["Hydrogen", "Gold", "Sodium", "Silver"],
        correct: 0,
        image: "assets/images/hydrogen.gif"
    },
    {
        question: "Which Ocean goes to the deepest depths?",
        answers: ["Pacific", "Atlantic", "Indian", "Arctic"],
        correct: 0,
        image: "assets/images/pacific.gif"
    },
    {
        question: "How many sides does a heptagon have?",
        answers: ["5", "3", "7", "9"],
        correct: 2,
        image: "assets/images/heptagon.gif"
    },
    {
        question: "What does HTML stand for?",
        answers: ["Hot Tamales Meal Large", "Hey There My Lady", "Typer Hex Markup Language", "Hyper Text Markup Language"],
        correct: 3,
        image: "assets/images/html.gif"
    },
    {
        question: "Which is the most populous state?",
        answers: ["New York", "Utah", "Oregon", "California"],
        correct: 3,
        image: "assets/images/california.gif"
    },
    {
        question: "Who is trying to seduce Benjamin in The Graduate?",
        answers: ["Mr. Robinson", "Ms. Robinson", "Mrs. Robinson", "Robinson Crusoe"],
        correct: 2,
        image: "assets/images/mrsrobinson.gif"
    },
    {
        question: "Who interrupted Taylor Swift's acceptance speech at the 2009 Video Music Awards?",
        answers: ["Snoop", "Jay-Z", "Kanye", "Britney Spears"],
        correct: 2,
        image: "assets/images/kanye.gif"
    },
    {
        question: "How many items are in a bakers dozen?",
        answers: ["13", "12", "11", "14"],
        correct: 0,
        image: "assets/images/bakersdozen.gif"
    },
    {
        question: "Entomology is the branch of science that studies what?",
        answers: ["Plants", "Music", "Animals", "Insects"],
        correct: 3,
        image: "assets/images/entomology.gif"
    },
    {
        question: "What is the traditional fermented Korean side dish made with seasoned vegetables and salt?",
        answers: ["Kimchi", "Bulgogi", "Galbi", "Bibimbap"],
        correct: 0,
        image: "assets/images/kimchi.gif"
    },
    {
        question: "What is the square root of 256?",
        answers: ["36", "16", "14", "17"],
        correct: 1,
        image: "assets/images/squareroot.gif"
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
    $("#transition").hide()
    $("#finalResult").hide()

    var totalCorrect = 0
    var totalWrong = 0
    var timer
    var randQuestionNum = 0
    var questionTimer //variable for setInterval
    var questionNumber = 1

    //function countdown - decrements global var timer by 1, displays to html
    function countdown(counter) {
        counter--
        if (counter <= 0) {
            $("#timeRemaining").html("Time's Up!")
            
            //totalWrong++
            clearInterval(questionTimer)
        }
        else {
            $("#timeRemaining").html(counter)
        }
    }

    //function to load questions
    function loadQuestion(qNum, randQnum) {
        timer = 11
        questionTimer = setInterval(countdown(timer), 1000)

        $("#questionNum").html(qNum)
        $("#actualQuestion").html(triviaQuestion[randQnum].question)
        $("#firstQuestion").html("A) " + triviaQuestion[randQnum].answers[0])
        $("#secondQuestion").html("B) " + triviaQuestion[randQnum].answers[1])
        $("#thirdQuestion").html("C) " + triviaQuestion[randQnum].answers[2])
        $("#fourthQuestion").html("D) " + triviaQuestion[randQnum].answers[3])
    }

    function answerAnimation(currQuest, correct, img) {
        $("#questions").hide()
        $("#transition").show()

        $("#transitionQuestion").html(currQuest)
        $("#correctAnswer").html(correct)
        $('#transitionImg').attr("src", img)

        var answerAnimationDelay = setTimeout(function () {
            $("#transition").hide()
            $("#questions").show()
            clearTimeout(answerAnimationDelay)
        }, 3000)
    }

    // function displays results
    function finalTally() {

        $("#totalQuestions").html(totalCorrect + totalWrong)
        $("#totalCorrect").html(totalCorrect)
        $("#totalWrong").html(totalWrong)
    }

    //This section hides the splash screen and starts the questions
    $("#splashButton").on("click", function () {
        $("#splash").hide()
        $("#questions").show()
    })

    //Main logic that runs the game
    loadQuestion(questionNumber, randQuestionNum)


    //Click function to capture answer 
    $(".answer").on("click", function () {
        if (questionNumber > 10) {
            $("#questions").hide()
            $("#finalResult").show()
            finalTally()
        }
        else if (parseInt($(this).attr("value")) === triviaQuestion[randQuestionNum].correct) {
            $("#rightWrongTimeout").html("CORRECT!")
            answerAnimation(triviaQuestion[randQuestionNum].question,triviaQuestion[randQuestionNum].answers[triviaQuestion[randQuestionNum].correct], triviaQuestion[randQuestionNum].image)

            totalCorrect++
            randQuestionNum++
            questionNumber++

            if (questionNumber <= 10) {
                loadQuestion(questionNumber, randQuestionNum)
            }
        }
        else if (parseInt($(this).attr("value")) !== triviaQuestion[randQuestionNum].correct) {
            $("#rightWrongTimeout").html("WRONG!")
            answerAnimation(triviaQuestion[randQuestionNum].question,triviaQuestion[randQuestionNum].answers[triviaQuestion[randQuestionNum].correct], triviaQuestion[randQuestionNum].image)

            totalWrong++
            randQuestionNum++
            questionNumber++

            if (questionNumber <= 10) {
                loadQuestion(questionNumber, randQuestionNum)
            }
        }

    })//end click function
});  //close document.ready


















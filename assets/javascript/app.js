// JavaScript function that wraps everything


$(document).ready(function () {
    var triviaQuestion = [{
        question: "What is the largest bone in the human body?",
        answers: ["Femur", "Lemur", "Radius", "Ulna"],
        correct: 0,
        image: ""
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


    var questionTimer

    $("#splashButton").on("click", function () {

        $("#splashScreen").hide()


        $("#questions").show()
        var randQuestionNum = Math.floor(Math.random()*triviaQuestion.length)
        var questionTimer
        var i = 10

        $("#actualQuestion").html(triviaQuestion[randQuestionNum].question)
        $("#firstQuestion").html("A) " + triviaQuestion[randQuestionNum].answers[0])
        $("#secondQuestion").html("B) " + triviaQuestion[randQuestionNum].answers[1])
        $("#thirdQuestion").html("C) " + triviaQuestion[randQuestionNum].answers[2])
        $("#fourthQuestion").html("D) " + triviaQuestion[randQuestionNum].answers[3])

        $(".answer").on("click", function () {

            console.log("value: " + $(this).attr("value"))
            console.log("correct answer: " + triviaQuestion[randQuestionNum].correct)

            if (parseInt($(this).attr("value")) === triviaQuestion[randQuestionNum].correct) {
                alert("Correct")
            }
            else {
                alert("Wrong")
            }



        })


        // questionTimer = setInterval(function () {
        //     $("#timeRemaining").html(i)
        //     i--
        //     if (i<0){
        //         clearInterval(questionTimer)
        //             }
        // }, 1000)









        $("#questionNum").html(i)

        $("#correctAnswer").on("click", function () {
            $("#questions").hide()

        })
        // setTimeout($("#animation").show())

    })
});









    //   $("#questions").on("click", function(){
    //     $("#questions").toggle()
    //   })







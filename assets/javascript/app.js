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
    }
    ]


    var questionTimer

    $("#splashButton").on("click", function () {

        $("#splashScreen").hide()


        $("#questions").show()

        var questionTimer
        var i = 10

        $("#actualQuestion").html(triviaQuestion[0].question)
        $("#firstQuestion").html("A) " + triviaQuestion[0].answers[0])
        $("#secondQuestion").html("B) " + triviaQuestion[0].answers[1])
        $("#thirdQuestion").html("C) " + triviaQuestion[0].answers[2])
        $("#fourthQuestion").html("D) " + triviaQuestion[0].answers[3])

        $(".answer").on("click", function () {

            console.log("value: " + $(this).attr("value"))
            console.log("correct answer: " + triviaQuestion[0].correct)

            if (parseInt($(this).attr("value")) === triviaQuestion[0].correct) {
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







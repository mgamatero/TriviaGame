// JavaScript function that wraps everything


$(document).ready(function () {
    var questionTimer

    $("#splashButton").on("click", function () {

        $("#splashScreen").hide()


        $("#questions").show()

        var questionTimer
        var i = 30

        questionTimer = setInterval(function () {
            console.log(i)
            i--
        }, 1000)




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







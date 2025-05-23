//$(document).ready(function(){

    let buttonColours = ["red", "blue", "green", "yellow"];
    let gamePattern = [];

    let randomNumber = nextSequence();
    function nextSequence(){
        let randomNumber = Math.floor(Math.random() * 4);
        return randomNumber;
    }

    let randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    $("#" + randomChosenColour).fadeOut(100).fadeIn(100); // to add animation to the chosen button
    $("#" + randomChosenColour);

    playSound(randomChosenColour);

    // i learnt here that trying to do this   $("#" + randomChosenColour).playSound();   will not work, because playSound(); is not built
    //jquery method or function, and this will throw an error rather i should just call the function lik that after taging the id

    function playSound(randomChosenColour){
        var audio = new Audio('sounds/' + randomChosenColour + '.mp3');
        audio.play();
    }
//});
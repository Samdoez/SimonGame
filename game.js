//$(document).ready(function(){

    let level = 0; //used to change the h1 heading
    var started = false;
    let buttonColours = ["red", "blue", "green", "yellow"];
    let gamePattern = [];
    let randomChosenColour;
    let userClickedPattern = []; // this is what the user clicked even after showing you the pattern to be clicked after

    function nextSequence(){
        
        userClickedPattern = [];
        randomNumber = Math.floor(Math.random() * 4);
        randomChosenColour = buttonColours[randomNumber];
        gamePattern.push(randomChosenColour); //pushing into the array

        $("#" + randomChosenColour).fadeOut(100).fadeIn(100); // to add animation to the chosen button
    // i learnt here that trying to do this   $("#" + randomChosenColour).playSound();   will not work, because playSound(); is not built
    //jquery method or function, and this will throw an error rather i should just call the function lik that after taging the id
        playSound(randomChosenColour);
        
        level++;
        $("#level-title").text("Level " + level); // searching and updating the h1 heading
    }

    function playSound(userChosenColour){
        var audio = new Audio("sounds/" + userChosenColour + ".mp3"); // note: chrome does not allow auto play of sounds and thats why i needed to pass the sound after an event had happened
        audio.play();
    }

    $(".btn").click(function(event){ //bro i had issues here for lik 3hrs, tring to debug whatwas wronghere only for me to see that it is a dot that was missing, bro
        var userChosenColour = event.target.id; // to get the id (which is an attribute of the button clicked) or i can do this also   let userChosenColour = $(this).attr("id");
        userClickedPattern.push(userChosenColour); //   adding to the array
        playSound(userChosenColour); // here i am passing the color(from the deduced ID i got above) of the button pressed to play the equivalent sound
        animatePress(userChosenColour);

        checkAnswer(userClickedPattern.length-1);
    });

    function animatePress(currentColour){
        $("." + currentColour).addClass("pressed");

        setTimeout(function(){
            $("." + currentColour).removeClass("pressed");
        }, 200);
    }

    $(document).keydown(function(){ //to detect when a key is been pressed, when a the game is juststarting and if it is continue
        if (!started){
            $("#level-title").text("Level " + level);
            nextSequence();
            started =  true;
        }
    });
    function checkAnswer(currentLevel) {

        if (gamePattern[currentLevel] === userClickedPattern[currentLevel]){
            if (userClickedPattern.length === gamePattern.length){
                setTimeout(function () {
                nextSequence();
                }, 1000);
            }
        } else {
            playSound("wrong");
            $("body").addClass("game-over");
            $("#level-title").text("Game Over, Press Any Key to Restart");

            setTimeout(function () {
                $("body").removeClass("game-over");
            }, 200);

            startOver();
        }
    }

    function startOver() {
        level = 0;
        gamePattern = [];
        started = false;
}
//});




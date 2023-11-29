var gamePattern = [];
var userClickedPattern = [];
var buttonColors = ["green","red","yellow","blue"];
var level = 1;


$(document).keypress(function(){
   if(level == 1){
    nextSequence();
    }
});


// setTimeout(function(){
    $(".btn").click(function () {
        var userChoosenColor = $(this).attr("id");
        userClickedPattern.push(userChoosenColor);
        console.log(userClickedPattern);
        makeSound(userChoosenColor);
        btn_animate(userChoosenColor);
        checkAnswer(userClickedPattern.length-1);
        });
// },3000);


function nextSequence(){
    setTimeout(function(){
        $("h1").text("level "+level);
        var randomNumber = Math.floor(Math.random()*4);
        randomChosenColor = buttonColors[randomNumber];
        gamePattern.push(randomChosenColor);
        $("#"+randomChosenColor).fadeOut(100).fadeIn(100);
        makeSound(randomChosenColor);
        level++;
    },1000);
}

function checkAnswer(currentLevel){
    if(gamePattern[currentLevel] == userClickedPattern[currentLevel]){
        if (currentLevel == (gamePattern.length)-1) {
            userClickedPattern = [];
            setTimeout(nextSequence(),2000);
        }
    }else{
        gameOver();
    }
}

function gameOver(){
    $("h1").text("Game over!!!")
    $("body").addClass("game-over");
    setTimeout(function(){
        $("body").removeClass("game-over");
    },2000);
    level = 1;
    userClickedPattern = [];
    gamePattern = [];
    $("h1").text("Press any key to play again...");
}

function makeSound(key){
    var audio = new Audio("sounds/"+key+".mp3");
    audio.play();
}

function btn_animate(color) {
    var clr_id = "#"+color;
    $(clr_id).addClass("pressed");
    setTimeout(my_timeout, 500,clr_id);
}

function my_timeout(clr_id){
    $(clr_id).removeClass("pressed");
}
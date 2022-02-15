// var spacedPressed = false;
// var jPressed = false;
// var kPressed = false;
// var lPressed = false;
// var semiColonPressed = false;

// stores key code values for easy easier development 
var KeyboardHelper = {
    left: 37,
    up: 38,
    right: 39,
    down: 40, 
    enter: 13,
    space: 32,
    j:74,
    k:75,
    l: 76,
    semicolon:186
};

// listens to all keydown events and decides what to do with them.
document.addEventListener('keydown', keyDownHandler, false);
function keyDownHandler(event) {
    if (event.keyCode == KeyboardHelper.space) {
        spacedPressed = true;
        if (gameStarted == false) {
            gameStart();
        } else {
            gameFinish();
        }
        
    } else if(event.keyCode == KeyboardHelper.j){
        gameTurn(event)
    }else if(event.keyCode == KeyboardHelper.k){
        gameTurn(event)
    }else if(event.keyCode == KeyboardHelper.l){
        gameTurn(event)
    }else if(event.keyCode == KeyboardHelper.semicolon){
        gameTurn(event)     
    }
}


// document.addEventListener('keyup', keyUpHandler, false);
// function keyUpHandler(event) {
//     if(event.keyCode == KeyboardHelper.space) {
//         spacedPressed = false;
//     }
// }

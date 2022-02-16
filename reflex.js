let current_block_num = null
let  gameStarted = false
let points = 0
let timeLimit;


let time; 

//changes which block is highlighed randomly
function block_change(){

    let new_block_num = null
    do{
        new_block_num = Math.floor(Math.random() * 4);
    }while(new_block_num == current_block_num);
    current_block_num = new_block_num

    console.log("new block is block number %d ",new_block_num)

    document.getElementById("block" + new_block_num).style.backgroundColor = 'black';
    document.getElementById("block" + new_block_num+"Letter").style.color = 'white';
    for(i =0; i < 4;i++){
        if(i != new_block_num){
        document.getElementById("block" + i).style.backgroundColor = 'white';
        document.getElementById("block" + i+"Letter").style.color = 'black';
        }
    }
    window.clearInterval(time);
    // time limit to press button decreases by function of current score
    timeLimit = 1000*(Math.pow(2.75, (-0.05) * points) + 0.5);
    console.log("time limit" + timeLimit);
    time = window.setInterval(turnFail,timeLimit);

}

let x;
function gameTurn(keyEvent){
    console.log(keyEvent);
    x = keyEvent.code;
    console.log(x);
    if(gameStarted == true){
        if(x =='KeyJ' && current_block_num == 0){
            window.clearInterval(time);
            points =points +1;
            document.getElementById('points').textContent ="Points: " + points;
            block_change();
        }else if(x =='KeyK' && current_block_num == 1){
            window.clearInterval(time);
            points =points +1;
            document.getElementById('points').textContent ="Points: " + points;
            block_change();
        }else if(x =='KeyL'&& current_block_num == 2){
            window.clearInterval(time);
            points =points +1;
            document.getElementById('points').textContent ="Points: " + points;
            block_change();
        }else if(x =='Semicolon'&& current_block_num == 3){
            
            window.clearInterval(time);
            points =points +1;
            document.getElementById('points').textContent ="Points: " + points;
            block_change();
        }
        else{
            turnFail()
        }
    }

}
function turnFail(){
    window.clearInterval(time);
    points = points - 5;
    document.getElementById('points').textContent ="Points: " + points;
    block_change()
}

function gameStart() {
    // let startButton = document.getElementById('startStopButton');
    // startButton.setAttribute("onClick", "javascript: gameFinish();");
    // startButton.textContent = "Stop";
    
    document.getElementById('points').textContent = "Points: " + points;
    console.log("start");
    gameStarted = true;
    block_change();
    // document.addEventListener('keypress',gameTurn);
    
}

function gameFinish() {
    
    window.clearInterval(time); 
    console.log("end");
    gameStarted = false;
    // document.removeEventListener('keypress',gameTurn);
    document.getElementById("points").textContent = "Final Score: " + points ;
    points = 0;

    document.getElementById("block" + current_block_num).style.backgroundColor = 'white';
    document.getElementById("block" + current_block_num + "Letter").style.color = 'black';
    
    // let startButton = document.getElementById('startStopButton');
    // startButton.setAttribute("onClick", "javascript: gameStart();");
    // startButton.textContent = "Start";
    
}
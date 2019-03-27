
let game = new Game(10, 10);

function setup(){
    createCanvas(401, 401);
    //game.start();
}


function draw(){

    background(255);
    
    if(!game.ended()){
        game.show();
    }
}

function mousePressed(){
    game.clicked(mouseX, mouseY);
}
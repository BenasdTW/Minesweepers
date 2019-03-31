let x = 20;
let y = 20
let game = new Game(x, y, 50);

function setup(){
    createCanvas(x*40 + 1, y*40 + 1);
    //game.start();
}


function draw(){

    background(255);
    
    game.show();
    
}

function mousePressed(){
    game.clicked(mouseX, mouseY);
}

class Game{
    constructor(w, h){
        self.w = w;
        self.h = h;

        self.grid = new Array(w);
        for(let i=0;i<w;i++){
            self.grid[i] = new Array(h);
        }

        for(let i=0;i<w;i++){
            for(let j=0;j<h;j++){
                let new_bomb = new Bomb(i, j);
                self.grid[i][j] = new_bomb;
            }
        }
        self.grid[0][0] = new Bomb(0, 0);
    }
    
    show(){
        noFill();
        for(let i=0;i<self.w;i++){
            for(let j=0;j<self.h;j++){
                
                self.grid[i][j].show();
            }
        }
    }

    clicked(x, y){

    }

    ended(){
        return false;
    }
}

class Game{
    constructor(w, h){
        this.w = w;
        this.h = h;

        this.grid = new Array(w);
        for(let i=0;i<w;i++){
            this.grid[i] = new Array(h);
            for(let j=0;j<h;j++){
                this.grid[i][j] = new Bomb(i, j);
            }
        }
    }
    
    show(){
        noFill();
        for(let i=0;i<this.w;i++){
            for(let j=0;j<this.h;j++){
                
                this.grid[i][j].show();
            }
        }
    }

    clicked(x, y){
        if(x>400 || y>400 || x<0 || y<0){
            return;
        }
        else{
            let i = Math.floor(x/40);
            let j = Math.floor(y/40);
            this.grid[i][j].reveal();
        }
    }

    ended(){
        return false;
    }
}
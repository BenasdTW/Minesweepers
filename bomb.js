
class Bomb{
    constructor(i, j){
        this.i = i;
        this.j = j;
        this.number = 0;
        this.bomb = true;
        this.revealed = false;
    }

    show(){
        if(!this.revealed){
            noFill();
            
            rect(this.i*40, this.j*40, 40, 40);
        }
        else{

        }
    }

    reveal(){
        if(this.revealed){
            return;
        }
        else{
            this.revealed = true;
        }
    }
}

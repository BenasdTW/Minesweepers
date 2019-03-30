
class Bomb{
    constructor(i, j){
        this.i = i;
        this.j = j;
        this.number = 9;
        this.bomb = false;
        this.revealed = false;
    }

    set_bomb(){
        this.bomb = true;
    }

    is_bomb(){
        return this.bomb;
    }

    set_number(num){
        this.number = num;
    }

    show(){
        if(!this.revealed){
            noFill();
            rect(this.i*40, this.j*40, 40, 40);
        }
        else if(this.revealed && this.bomb){
            fill(170, 170, 170);
            rect(this.i*40, this.j*40, 40, 40);
            fill(100, 100, 100);
            ellipse(this.i*40+21, this.j*40+21, 22, 22);
        }
        else{
            fill(150, 150, 150);
            rect(this.i*40, this.j*40, 40, 40);
            fill(0, 0, 0);
            if(this.number != 0){
                textSize(25);
                text(this.number, this.i*40+14, this.j*40+28);
            }
        }
    }

    reveal(){
        if(this.revealed){
            return false;
        }
        else{
            this.revealed = true;
            return (this.number == 0);
        }
    }
}

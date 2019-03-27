
class Bomb{
    constructor(i, j){
        self.i = i;
        self.j = j;
        self.number = 0;
        self.bomb = true;
        self.revealed = false;
    }

    show(){
        if(!self.revealed){
            noFill();
            
            rect(self.i*40, self.j*40, 40, 40);
        }
        else{

        }
    }

    reveal(){
        if(self.revealed){
            return;
        }
        else{
            self.revealed = true;
        }
    }
}

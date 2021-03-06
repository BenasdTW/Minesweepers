
class Game{
    constructor(w, h, bombs){
        this.w = w;
        this.h = h;
        this.losed = false;

        this.grid = new Array(w);
        for(let i=0;i<w;i++){
            this.grid[i] = new Array(h);
            for(let j=0;j<h;j++){
                this.grid[i][j] = new Bomb(i, j);
            }
        }


        //random spot
        let temp_arr = Array();

        for(let i=0;i<w;i++){
            for(let j=0;j<h;j++){
                temp_arr.push([i, j]);
            }
        }
        
        for(let i=0;i<bombs;i++){
            let pos = Math.floor((Math.random() * (w*h-i)));
            let choice = temp_arr[pos];
            temp_arr.splice(pos, 1);
            // if the spot is already been chosen to bomb then reset it
            
            this.grid[choice[0]][choice[1]].set_bomb();
        }


        // set number
        for(let i=0;i<w;i++){
            for(let j=0;j<h;j++){
                let num = 0;
                if(this.grid[i][j].is_bomb()){
                    continue;
                }

                for(let x_in=-1;x_in<=1;x_in++){
                    for(let y_in=-1;y_in<=1;y_in++){
                        if((x_in == 0 && y_in == 0) || i+x_in<0 || j+y_in<0 || i+x_in>w-1 || j+y_in>h-1){
                            continue;
                        }
                        else if(this.grid[i+x_in][j+y_in].is_bomb()){
                            num++;
                        }
                    }
                }
                
                this.grid[i][j].set_number(num);
            
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
        if(x>this.w*40 || y>this.h*40 || x<0 || y<0){
            return;
        }
        else{
            let i = Math.floor(x/40);
            let j = Math.floor(y/40);
            this.reveal(i, j);
            if(this.grid[i][j].is_bomb()){
                for(let i=0;i<this.w;i++){
                    for(let j=0;j<this.h;j++){
                        this.reveal(i, j);
                        //console.log(1);
                    }
                }
                this.losed = true;
            }
        }
    }

    reveal(i, j){
        if(this.grid[i][j].reveal()){
            
            for(let x_in=-1;x_in<=1;x_in++){
                for(let y_in=-1;y_in<=1;y_in++){
                    if((x_in == 0 && y_in == 0) || i+x_in<0 || j+y_in<0 || i+x_in>this.w-1 || j+y_in>this.h-1){
                        continue;
                    }
                    else{
                        this.reveal(i+x_in, j+y_in);
                    }
                }
            }
                    
        }
    }

    ended(){
        return this.losed;
    }
}
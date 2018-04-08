class Super1 extends header {
    constructor(x, y, index, multiply, eatCount, energy, tiv) {
        super(x, y, index);
        this.x = x;
        this.y = y;
        this.multiply = 0;
        this.eatCount = 0;
        this.energy = 3;
        this.tiv = 4;
        this.number = 4;
    }

    newDirections() {
        this.directions = [
            [this.x + 2,this.y],
            [this.x - 2,this.y],
            [this.x + 2,this.y + 1],
            [this.x - 2,this.y + 1],
            [this.x + 2,this.y + 2],    
            [this.x + 1,this.y + 2],
            [this.x,this.y + 2],
            [this.x - 1,this.y + 2],
            [this.x - 2,this.y + 2],
            [this.x + 2,this.y - 1],
            [this.x - 2,this.y - 1],
            [this.x + 2,this.y - 2],
            [this.x + 1,this.y - 2],
            [this.x,this.y - 2],
            [this.x - 1,this.y - 2],
            [this.x - 2,this.y - 2],
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }


    getDirections(t) {
        
        return super.getDirections(t);
    }


  move(ch) {
       
       return super.move(ch)
    }

    eat() {

        var emptyCord1 = this.getDirections(1);
        var emptyCord2 = this.getDirections(2);
        var emptyCord3 = this.getDirections(3);

        var cord1 = random(emptyCord1);
        var cord2 = random(emptyCord2);
        var cord3 = random(emptyCord3);

        if (cord1) {
            this.multiply++;
            this.energy++;
            var x = cord1[0];
            var y = cord1[1];

            matrix[y][x] = 4;
            matrix[this.y][this.x] = 0;

            this.x = x;
            this.y = y;
            statistics.eatsuper++;
                changeView(statistics);

            for (var i in xotArr) {
                if (x == xotArr[i].x && y == xotArr[i].y) {
                    xotArr.splice(i, 1);
                }
            }
            
        }

        if (cord2) {
            this.multiply++;
            this.energy++;
            var x = cord2[0];
            var y = cord2[1];

            matrix[y][x] = 4;
            matrix[this.y][this.x] = 0;

            this.x = x;
            this.y = y;
            statistics.eatsuper++;
            changeView(statistics);

            for (var i in eatArr) {
                if (x == eatArr[i].x && y == eatArr[i].y) {
                    eatArr.splice(i, 1);
                }
            }
            

        }

        if (cord3) {
            this.multiply++;
            this.energy++;
            var x = cord3[0];
            var y = cord3[1];

            matrix[y][x] = 4;
            matrix[this.y][this.x] = 0;

            this.x = x;
            this.y = y;
            statistics.eatsuper++;
            changeView(statistics);


            for (var i in preArr) {
                if (x == preArr[i].x && y == preArr[i].y) {
                    preArr.splice(i, 1);
                }
            }
            
        }


         else {
            this.move();
            
        }
    }
}


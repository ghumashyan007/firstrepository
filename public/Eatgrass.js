class Eatgrass extends header {
    constructor(x, y, index, multiply, eatCount, energy, tiv, number) {
        super(x, y, index);
        this.x = x;
        this.y = y;
        this.multiply = 0;
        this.eatCount = 0; 
        this.energy = 3;
        this.tiv = 2;
        this.number = 2;
    }

    newDirections() {
        return super.newDirections();
    }


    getDirections(t) {
        
        return super.getDirections(t);

    }


    move(ch) {
       
       return super.move(ch)
    }



    eat() {

        var emptyCord = this.getDirections(1);

        var cord = random(emptyCord);

        if (cord) {
            this.multiply++;
            this.energy++;
            var x = cord[0];
            var y = cord[1];

            matrix[y][x] = 2;
            matrix[this.y][this.x] = 0;

            this.x = x;
            this.y = y;
            statistics.eateatgrass++;
                changeView(statistics);

            for (var i in xotArr) {
                if (x == xotArr[i].x && y == xotArr[i].y) {
                    xotArr.splice(i, 1);
                    break;
                }
            }
            if (this.multiply == 4) {
                this.mul()
                this.multiply = 0;
                
            }

        } else {
            this.move();
            this.energy--;
            if (this.energy < 3) {
                this.die();
                statistics.dieeatgrass++;
                changeView(statistics);
                //this.energy = 10;
            }
        }
    }

    mul() {
        var emptyCord = this.getDirections(0);
        var cord = random(emptyCord);
        

        if (cord) {
            var x = cord[0];
            var y = cord[1];

            this.multiply++;

            var norXotaker = new Eatgrass(x, y, this.index);
            eatArr.push(norXotaker);

            matrix[y][x] = 1;
            this.multiply = 0;

            statistics.muleatgrass++;
                changeView(statistics);
        }
    }

    die() {
        matrix[this.y][this.x] = 0;
        for (var i in eatArr) {
            if (this.x == eatArr[i].x && this.y == eatArr[i].y) {
                eatArr.splice(i, 1);

                break;
            }
        }
    }

}

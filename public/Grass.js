class Grass extends header {
    constructor(x, y, index, multiply, eatCount, energy, tiv, number, name, surname, xArr) {
        super(x, y, index);
        this.x = x;
        this.y = y;
        this.energy = 5;
        this.multiply = 0;
        this.number = 1;
    }

    newDirections() {
        
        return super.newDirections();

    }

    getDirections(t) {
       
       return super.getDirections(t);

    }


     mul() {
        this.multiply++;
        if (this.multiply == 1) {
            var emptyCord = this.getDirections(0);

            var cord = random(emptyCord);
            if (cord) {
                var x = cord[0];
                var y = cord[1];

                var norXot = new Grass(x, y, this.index);
                xotArr.push(norXot);

                matrix[y][x] = 1;
                this.multiply = 0;
            }
        }
    }

}
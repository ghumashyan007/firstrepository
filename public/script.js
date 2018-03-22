var matrix = []
var side = 10;
var xotArr = [];
var eatArr = [];
var preArr = [];
var supArr = [];
var grassCount = 1200;
var eatgrassCount = 700;
var predatorCount = 150;
var super1Count = 5;
var erk = 50;
var bar = 50;


function setup() {

for(var i = 0; i < bar; i++){
        matrix.push([]);
        for(var j = 0; j < erk; j++){
            matrix[i][j] = 0;
        }
    }
var h = 0; 
while(h < grassCount){
    var x = Math.floor(random(0, erk));
    var y = Math.floor(random(0, bar));
    if(matrix[y][x]==0){
        matrix[y][x] = 1;
        h++;
    }
}
var h = 0; 
while(h < eatgrassCount){
    var x = Math.floor(random(0, erk));
    var y = Math.floor(random(0, bar));
    if(matrix[y][x]==0){
        matrix[y][x] = 2;
        h++;
    }
}
var h = 0; 
while(h < predatorCount){
    var x = Math.floor(random(0, erk));
    var y = Math.floor(random(0, bar));
    if(matrix[y][x]==0){
        matrix[y][x] = 3;
        h++;
    }
}
var h = 0; 
while(h < super1Count){
    var x = Math.floor(random(0, erk));
    var y = Math.floor(random(0, bar));
    if(matrix[y][x]==0){
        matrix[y][x] = 4;
        h++;
    }
}
    
       noStroke()
    frameRate(10);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');


 for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] == 2) {
                var eatgrass = new Eatgrass(j, i, 2);
                eatArr.push(eatgrass);
            } else if (matrix[i][j] == 1) {
                var grass = new Grass(j, i, 1);
                xotArr.push(grass);
            }
            else if (matrix[i][j] == 3){
                var predator = new Predator(j, i, 3);
                preArr.push(predator); 
            } 
            else if (matrix[i][j] == 4){
                var super1 = new Super1(j, i, 4);                                    
                supArr.push(super1);
        }
    }

}


}

   



function draw() {
    background('#acacac');
    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] == 1) {
                fill("green");
                rect(j * side, i * side, side, side);
            } else if (matrix[i][j] == 2) {
                fill("orange");
                rect(j * side, i * side, side, side);
            } else if (matrix[i][j] == 0) {
                fill('#acacac');
                rect(j * side, i * side, side, side);
            } else if (matrix[i][j] == 3) {
                fill("red");
                rect(j * side, i * side, side, side);
            } else if (matrix[i][j] == 4) {
                fill('#000000');
                rect(j * side, i * side, side, side);
            }
        }
    }


    for (var i in xotArr) {
        xotArr[i].mul();
    }

    for (var i in eatArr) {
        eatArr[i].eat();
    }

    for (var i in preArr) {
        preArr[i].eat();
    }

    for (var i in supArr){
        supArr[i].eat();
    }
}







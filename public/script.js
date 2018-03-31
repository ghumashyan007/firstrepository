var matrix = []
var side = 10;
var xotArr = [];
var eatArr = [];
var preArr = [];
var supArr = [];
var patArr = [];
var grassCount = 700;
var eatgrassCount = 400;
var predatorCount = 100;
var super1Count = 5;
var patneshCount = 300;
var erk = 70;
var bar = 70;
var tacktCount = 0;


function setup() {

for(var i = 0; i < bar; i++){
        matrix.push([]);
        for(var j = 0; j < erk; j++){
            matrix[i][j] = 0;
        }
    }
    

    fillChars(grassCount, 1);
    fillChars(eatgrassCount, 2)
    fillChars(predatorCount, 3)
    fillChars(super1Count, 4)
    fillChars(patneshCount, 5)


       noStroke()
    frameRate(30);
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
          else if (matrix[i][j] == 5){
                var patnesh = new Patnesh(j, i, 4);                                    
                patArr.push(patnesh);
        }
    }

}


}

   



function draw() {
    tacktCount++;
    text(tacktCount, width / 2, height / 2);
    background('#E1C682');


    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] == 1) {
                fill("green");
                rect(j * side, i * side, side, side);
            } else if (matrix[i][j] == 2) {
                fill("orange");
                rect(j * side, i * side, side, side);
            } else if (matrix[i][j] == 0) {
                fill('#E1C682');
                rect(j * side, i * side, side, side);
            } else if (matrix[i][j] == 3) {
                fill("red");
                rect(j * side, i * side, side, side);
            } else if (matrix[i][j] == 4) {
                fill('#000000');
                rect (j * side, i * side, side, side);
            } else if (matrix[i][j] == 5) {
                fill('#734d26');
                rect(j * side, i * side, side, side);
            }
        }
    }

if(tacktCount < 10){
        gr1Color = "green";
        dark5Color = "darkgreen";
    }
    else if(tacktCount < 20){
        gr1Color = "lightgreen";
        dark5Color = "green";
    }
    else if(tacktCount < 30){
        gr1Color = "orange";
        dark5Color = "darkorange";
    }
    else if(tacktCount < 40){
        gr1Color = "white";
        dark5Color = "#DCDDDD";
    }



    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix[i].length; j++) {

            

                if (matrix[i][j] == 1) {
                    fill(gr1Color);
                    rect(j * side, i * side, side, side);
                } else if (matrix[i][j] == 2) {
                    fill("yellow");
                    rect(j * side, i * side, side, side);
                } else if (matrix[i][j] == 0) {
                    fill('#8C8C8C');
                    rect(j * side, i * side, side, side);
                } else if (matrix[i][j] == 3) {
                    fill("red");
                    rect(j * side, i * side, side, side);
                }
                else if (matrix[i][j] == 4) {
                    fill("blue");
                    rect(j * side, i * side, side, side);
                }
                else if (matrix[i][j] == 5) {
                    fill(dark5Color);
                    rect(j * side, i * side, side, side);
                }
                else if (matrix[i][j] == 6) {
                    fill("black");
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




function fillChars(charCount, charType) {
    var h = 0;
    while (h < charCount) {
        var x = Math.floor(random(0, erk));
        var y = Math.floor(random(0, bar));
        if (matrix[y][x] == 0) {
            matrix[y][x] = charType;
            h++;
        }
    }
}





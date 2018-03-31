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
    background('#e1d2b7');


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
                var patnesh = new Patnesh(j, i, 5);                                    
                patArr.push(patnesh);
            }
        }

    }

}

   



function draw() {
    tacktCount++;
    text(tacktCount, width / 2, height / 2);
    
 var h = document.getElementById("pElement");
    if (tacktCount < 10) {
        h.innerText = "Spring " ;
    }
    else if (tacktCount < 20) {
        h.innerText = "Summer " ;
    }
    else if (tacktCount < 30) {
        h.innerText = "Autumn " ;
    }
    else if (tacktCount < 40) {
        h.innerText = "Winter " ;
    }
    else {
        tacktCount = 0;
    }


if(tacktCount < 10){
        grassColor = "#40a542";
        eatgrassColor = "#3db5c2";
        preColor = "#f63f23";
        supColor = "#1a1a1a";
        patColor = "#803300";
        hatakColor = "#e1d2b7";
    }
    else if(tacktCount < 20){
        grassColor = "#39933b";
        eatgrassColor = "#2b7e88";
        preColor = "#f52f0f";
        supColor = "#000000";
        patColor = "#803300";
        hatakColor = "#e1d2b7";
    }
    else if(tacktCount < 30){
        grassColor = "#44c33d";
        eatgrassColor = "#51bcc8";
        preColor = "#f1ab27";
        supColor = "#666666";
        patColor = "#803300";
        hatakColor = "#e1d2b7";
    }
    else if(tacktCount < 40){
        grassColor = "#90c884";
        eatgrassColor = "#77cbd4";
        preColor = "#f9716c";
        supColor = "#a2e19d";
        patColor = "#ffffff";
        hatakColor = "#ffffff";
    }



    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix[i].length; j++) {

            

                if (matrix[i][j] == 1) {
                    fill(grassColor);
                    rect(j * side, i * side, side, side);
                } else if (matrix[i][j] == 2) {
                    fill(eatgrassColor);
                    rect(j * side, i * side, side, side);
                } else if (matrix[i][j] == 0) {
                    fill(hatakColor);
                    rect(j * side, i * side, side, side);
                } else if (matrix[i][j] == 3) {
                    fill(preColor);
                    rect(j * side, i * side, side, side);
                }
                else if (matrix[i][j] == 4) {
                    fill(supColor);
                    rect(j * side, i * side, side, side);
                }
                else if (matrix[i][j] == 5) {
                    fill(patColor);
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





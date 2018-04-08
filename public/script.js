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
var erk = 80;
var bar = 80;
var frameCount = 0;
var weather = "   Խոտ             Խոտակեր          Գիշատիչ       Super կենդանի       Պատնեշ";
var statistics = {
    "timestamp": "",
    "eateatgrass": 0,
    "eatpredator": 0,
    "eatsuper": 0,
    "mulgrass": 0,
    "muleatgrass": 0,
    "mulpredator": 0,
    "dieeatgrass": 0,
    "diepredator": 0
}



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
    frameRate(60);
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
    frameCount++;
    text(frameCount, width / 2, height / 2);
    time.innerText = (new Date()).toString();
    
 var h = document.getElementById("pElement");
    if (frameCount < 15) {
        h.innerText = "Spring (ԳԱՐՈՒՆ Է)" ;
    }
    else if (frameCount < 30) {
        h.innerText = "Summer (ԱՄԱՌ Է)" ;
    }
    else if (frameCount < 45) {
        h.innerText = "Autumn (ԱՇՈՒՆ Է)" ;
    }
    else if (frameCount < 60) {
        h.innerText = "Winter (ՁՄԵՌ Է)" ;
    }
    else  {   
        frameCount = 0;
    }

console.log(frameCount)



    document.getElementById("myBtn").addEventListener("click",displayDate );
    function displayDate() {
    document.getElementById("demo").innerHTML = Date();
        }




var d1 = document.getElementById("div1");
    if (frameCount < 15) {
        d1.style.backgroundColor= "#40a542";
    }
    else if (frameCount < 30) {
       d1.style.backgroundColor = "#39933b";
    }
    else if (frameCount < 45) {
        d1.style.backgroundColor = "#44c33d";
    }
    else if (frameCount < 60) {
        d1.style.backgroundColor = "#90c884";
    }
   

var d2 = document.getElementById("div2");
    if (frameCount < 15) {
        d2.style.backgroundColor= "#3db5c2";
    }
    else if (frameCount < 30) {
       d2.style.backgroundColor = "#2b7e88";
    }
    else if (frameCount < 45) {
        d2.style.backgroundColor = "#51bcc8";
    }
    else if (frameCount < 60) {
        d2.style.backgroundColor = "#77cbd4";
    }
    
var d3 = document.getElementById("div3");
    if (frameCount < 15) {
        d3.style.backgroundColor= "#f63f23";
    }
    else if (frameCount < 30) {
       d3.style.backgroundColor = "#f52f0f";
    }
    else if (frameCount < 45) {
        d3.style.backgroundColor = "#f1ab27";
    }
    else if (frameCount < 60) {
        d3.style.backgroundColor = "#f9716c";
    }
    
var d4 = document.getElementById("div4");
    if (frameCount < 15) {
        d4.style.backgroundColor= "#1a1a1a";
    }
    else if (frameCount < 30) {
       d4.style.backgroundColor = "#000000";
    }
    else if (frameCount < 45) {
        d4.style.backgroundColor = "#666666";
    }
    else if (frameCount < 60) {
        d4.style.backgroundColor = "#a2e19d";
    }
   

var d5 = document.getElementById("div5");
    if (frameCount < 15) {
        d5.style.backgroundColor= "#803300";
    }
    else if (frameCount < 30) {
       d5.style.backgroundColor = "#803300";
    }
    else if (frameCount < 45) {
        d5.style.backgroundColor = "#803300";
    }
    else if (frameCount < 60) {
        d5.style.backgroundColor = "#ffffff";
    }
    






if(frameCount < 15){
        grassColor = "#40a542";
        eatgrassColor = "#3db5c2";
        preColor = "#f63f23";
        supColor = "#1a1a1a";
        patColor = "#803300";
        hatakColor = "#e1d2b7";
    }
    else if(frameCount < 30){
        grassColor = "#39933b";
        eatgrassColor = "#2b7e88";
        preColor = "#f52f0f";
        supColor = "#000000";
        patColor = "#803300";
        hatakColor = "#e1d2b7";
    }
    else if(frameCount < 45){
        grassColor = "#44c33d";
        eatgrassColor = "#51bcc8";
        preColor = "#f1ab27";
        supColor = "#666666";
        patColor = "#803300";
        hatakColor = "#e1d2b7";
    }
    else if(frameCount < 60){
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
    statistics.frameCount = frameCount;
    statistics.timestamp = (new Date()).toString();
    socket.emit("send data", statistics);


}


function fillChars(charCount, charType) {
    var c = 0;
    while (c < charCount) {
        var x = Math.floor(random(0, erk));
        var y = Math.floor(random(0, bar));
        if (matrix[y][x] == 0) {
            matrix[y][x] = charType;
            c++;
        }
    }
}


function changeView(stat) {
    var eateatgrass = document.getElementById("eateatgrass");
    var eatpredator = document.getElementById("eatpredator");
    var eatsuper = document.getElementById("eatsuper");
    var mulgrass = document.getElementById("mulgrass");
    var muleatgrass = document.getElementById("muleatgrass");
    var mulpredator = document.getElementById("mulpredator");
    var dieeatgrass = document.getElementById("dieeatgrass");
    var diepredator = document.getElementById("diepredator");
    eateatgrass.innerHTML = stat.eateatgrass;
    eatpredator.innerHTML = stat.eatpredator;
    eatsuper.innerHTML = stat.eatsuper;
    mulgrass.innerHTML = stat.mulgrass;
    muleatgrass.innerHTML = stat.muleatgrass;
    mulpredator.innerHTML = stat.mulpredator;
    dieeatgrass.innerHTML = stat.dieeatgrass;
    diepredator.innerHTML = stat.diepredator;
}





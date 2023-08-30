var stro = [], points = [], Points = [];

let graphics;
let ggraphics;
let rgraphics;
let bgraphiccs;
let cgraphics;
let mgraphics;
let ygraphiccs;
var galpha = [];
var balpha = [];
var ralpha = [];
var calpha = [];
var malpha = [];
var yalpha = [];
var st = [];
var jita,a,b, alphaLim;


function setup() {
noCursor();
  alphaLim = 100;
// noCursor();
     for (i = 0; i < 100; i++){
    ralpha[i] = random(360);
       galpha[i] = random(360);
          balpha[i] = random(360);  
       calpha[i] = random(360);  
       malpha[i] = random(360); 
       yalpha[i] = random(360); 
stro[i] = random(50);  
       points[i] = [];
    Points[i] = points[i];
       
  }


 

  createCanvas(windowWidth, windowHeight);
 cgraphics = createGraphics(windowWidth, windowHeight);
rgraphics = createGraphics(windowWidth, windowHeight);
ygraphics = createGraphics(windowWidth, windowHeight);
  mgraphics = createGraphics(windowWidth, windowHeight);
  bgraphics = createGraphics(windowWidth, windowHeight);
  ggraphics = createGraphics(windowWidth, windowHeight);
  //    jita = 1;
   imageMode(CORNER);
  angleMode(DEGREES);
 jit = random(2);
   jita = 1;

  wigs();



  
   for (i = 0; i < points.length; i++){
    Points[i] = points[i];
     print(Points[1][2][3],points[1][2][3] )
  }
 
  
  
  
   
}

function draw() {
 
  rectMode(CENTER);
    blendMode(BLEND);

   yellowplate();
  
  


   
   blendMode(MULTIPLY);
greenPlate();
  

          redplate();
   blueplate();
  
 
   magentaplate();

  cyanplate();
  

 
//blendMode(MULTIPLY);
  

  

    
 
 
 
}



function mousePressed() {
  let fs = fullscreen;
  fullscreen(fs);
 // noCursor();
      setup();
   
}

function keyTyped(){
  if(key === 'a')
    {print(mouseX/a, mouseY/b);
    }
    if(key === 'b')
    {
   
ygraphics.save("yell.png");
      ggraphics.save("gree.png");
       rgraphics.save("re.png");
       bgraphics.save("blu.png");
       mgraphics.save("mag.png");
       cgraphics.save("cya.png");
      
               }
}
function windowResized() {
 resizeCanvas(width, height);
}


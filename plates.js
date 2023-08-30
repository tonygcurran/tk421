function yellowplate() {
  ygraphics.blendMode(BLEND);

   ygraphics.noStroke();
 
 ygraphics.fill(255, 255, yalpha[0]);
 ygraphics.rect(-100, -100, width * 2, height * 2);


  ygraphics.noFill();
yellowWig(1);
  yellowWig(7);
  yellowWig(13);
    yellowWig(19);
  
  yellowWig(25);
  
   for (i = 0; i < yalpha.length; i++){
    yalpha[i] += random(-jita, jita);
      yalpha[i] = abs(yalpha[i]);
      
       if (yalpha[i] > 360 || yalpha[i] < 10){
        yalpha[i] = random(360);
      }
      
        if (yalpha[0] < alphaLim|| yalpha[0] > 255){
        yalpha[0] = random(255);
      }
 
  }


  
  image(ygraphics, 0,0,width,height);
  ygraphics.blendMode(MULTIPLY);
 
  
  
}

function greenPlate() {
  
ggraphics.blendMode(BLEND);
   ggraphics.noStroke();
 ggraphics.fill(galpha[0], 255, galpha[0]);
 ggraphics.rect(-100, -100, width * 2, height * 2);


  ggraphics.noFill();
greenWig(2);
greenWig(8);
greenWig(14);
  greenWig(20);
    greenWig(26);
  
 for (i = 0; i < galpha.length; i++){
    galpha[i] += random(-jita, jita);
      galpha[i] = abs(galpha[i]);
      
       if (galpha[i] > 360 || galpha[i] < 10){
        galpha[i] = random(360);
      }
      
        if (galpha[0] < alphaLim|| galpha[0] > 255){
        galpha[0] = random(255);
      }
 
  }


  
  image(ggraphics, 0,0,width,height);
  ggraphics.blendMode(MULTIPLY);
  

}

function redplate(){
  rgraphics.blendMode(BLEND);

   rgraphics.noStroke();
 rgraphics.fill(255, ralpha[0], ralpha[0]);
 rgraphics.rect(-100, -100, width * 2, height * 2);

  rgraphics.noFill();

redWig(3);
  redWig(9);
    redWig(15);
   redWig(21);
     redWig(27);
 for (i = 0; i < ralpha.length; i++){
    ralpha[i] += random(-jita, jita);
      ralpha[i] = abs(ralpha[i]);
      
       if (ralpha[i] > 360 || ralpha[i] < 10){
        ralpha[i] = random(360);
      }
      
        if (ralpha[0] < alphaLim|| ralpha[0] > 255){
        ralpha[0] = random(255);
      }
 
  }

  
  image(rgraphics, 0,0,width,height);
  rgraphics.blendMode(MULTIPLY);
 
  
  
}



function blueplate() {
  bgraphics.blendMode(BLEND);

   bgraphics.noStroke();
 bgraphics.fill(balpha[0], balpha[0], 255);
 bgraphics.rect(-100, -100, width * 2, height * 2);

 bgraphics.noFill();
 
blueWig(4);
  blueWig(10);
 blueWig(16);
   blueWig(22);
     blueWig(28);
 for (i = 0; i < balpha.length; i++){
    balpha[i] += random(-jita, jita);
      balpha[i] = abs(balpha[i]);
      
       if (balpha[i] > 360 || balpha[i] < 10){
        balpha[i] = random(360);
      }
      
        if (balpha[0] < alphaLim|| balpha[0] > 255){
        balpha[0] = random(255);
      }
 
  }


  
  image(bgraphics, 0,0,width,height);
  bgraphics.blendMode(MULTIPLY);
  

}
function magentaplate() {
  mgraphics.blendMode(BLEND);

   mgraphics.noStroke();
 mgraphics.fill(255, malpha[0], 255);
 mgraphics.rect(-100, -100, width * 2, height * 2);

  mgraphics.noFill();

magWig(5);
  magWig(11);
    magWig(17);
      magWig(23);
        magWig(29);
 //cgraphics.blendMode(BLEND);

 
 
   for (i = 0; i < malpha.length; i++){
    malpha[i] += random(-jita, jita);
      malpha[i] = abs(malpha[i]);
      
       if (malpha[i] > 360 || malpha[i] < 10){
        malpha[i] = random(360);
      }
      
        if (malpha[0] < alphaLim|| malpha[0] > 255){
        malpha[0] = random(255);
      }
 
  }


  
  image(mgraphics, 0,0,width,height);
  mgraphics.blendMode(MULTIPLY);
 
  
  
}

function cyanplate() {
  cgraphics.blendMode(BLEND);

   cgraphics.noStroke();
 cgraphics.fill(calpha[0], 255, 255);
 cgraphics.rect(-100, -100, width * 2, height * 2);

 
 
  cgraphics.noFill();
cyanWig(6);
 cyanWig(12);
   cyanWig(18);
     cyanWig(24);
    cyanWig(30);
//  cgraphics.strokeWeight(st[0]);


  
  
  
   for (i = 0; i < calpha.length; i++){
    calpha[i] += random(-jita, jita);
      calpha[i] = abs(calpha[i]);
      
       if (calpha[i] > 360 || calpha[i] < 10){
        calpha[i] = random(360);
      }
      
        if (calpha[0] < alphaLim|| calpha[0] > 255){
        calpha[0] = random(255);
      }
 
  }


  
  image(cgraphics, 0,0,width,height);
  cgraphics.blendMode(MULTIPLY);
 
  
  
}

function yellowWig(j){
ygraphics.strokeWeight(stro[j]);
  ygraphics.stroke(255, 255, yalpha[j]);
 ygraphics.beginShape();

  for (i = 0; i < points[j][1].length; i++) {
 ygraphics.curveVertex(points[j][1][i], points[j][2][i]);
  }
  ygraphics.endShape();

 for (i = 0; i < points[j][1].length; i++) {
   
    points[j][1][i] += random(-jita, jita);
   points[j][2][i] += random(-jita, jita);
             if (points[j][1][i] > Points[j][0][1]-stro[j] || points[j][1][i] < Points[j][0][0]) { 
            
                     wigs();
               
             }
  
  
  if(points[j][2][i] > Points[j][0][3]  || points[j][2][i] < Points[j][0][2]){
    
wigs();
    
  }
 }
  
  if (stro[j] < 5){  stro[j] = random((points[j][0][1]-points[j][0][0]+points[j][0][3]-points[j][0][2])/points[j][1].length);  
                   
                   if (stro[j] > (points[j][0][1]-points[j][0][0]+points[j][0][3]-points[j][0][2])/points[j][1].length){
       stro[j] = stro[j]/2;
      }

}
  
}

function redWig(j){
  rgraphics.strokeWeight(stro[j]);
    rgraphics.stroke(255, ralpha[j], ralpha[j]);
  rgraphics.noFill();
 rgraphics.blendMode(BLEND);
 
 rgraphics.beginShape();

  for (i = 0; i < points[j][1].length; i++) {
rgraphics.curveVertex(points[j][1][i], points[j][2][i]);
  }
  rgraphics.endShape();


for (i = 0; i < points[j][1].length; i++) {
   
    points[j][1][i] += random(-jita, jita);
   points[j][2][i] += random(-jita, jita);
             if (points[j][1][i] > Points[j][0][1]|| points[j][1][i] < Points[j][0][0]) { 
            
                     wigs();
               
             }
  
  
  if(points[j][2][i] > Points[j][0][3]  || points[j][2][i] < Points[j][0][2]){
    
wigs();
    
  }
 }
  
  if (stro[j] < 5){  stro[j] = random((points[j][0][1]-points[j][0][0]+points[j][0][3]-points[j][0][2])/points[j][1].length);  
                   
                   if (stro[j] > (points[j][0][1]-points[j][0][0]+points[j][0][3]-points[j][0][2])/points[j][1].length){
       stro[j] = stro[j]/2;
      }

}

}

function greenWig(j){
 ggraphics.strokeWeight(stro[j]);

  ggraphics.stroke(galpha[j], 255, galpha[j]);
  ggraphics.noFill();
 ggraphics.blendMode(BLEND);
 
 ggraphics.beginShape();

  for (i = 0; i < points[j][1].length; i++) {
ggraphics.curveVertex(points[j][1][i], points[j][2][i]);
  }
  ggraphics.endShape();
for (i = 0; i < points[j][1].length; i++) {
   
    points[j][1][i] += random(-jita, jita);
   points[j][2][i] += random(-jita, jita);
             if (points[j][1][i] > Points[j][0][1]|| points[j][1][i] < Points[j][0][0]) { 
            
                     wigs();
               
             }
  
  
  if(points[j][2][i] > Points[j][0][3]  || points[j][2][i] < Points[j][0][2]){
    
wigs();
    
  }
 }
  
   if (stro[j] < 5){  stro[j] = random((points[j][0][1]-points[j][0][0]+points[j][0][3]-points[j][0][2])/points[j][1].length);  
                   
                   if (stro[j] > (points[j][0][1]-points[j][0][0]+points[j][0][3]-points[j][0][2])/points[j][1].length){
       stro[j] = stro[j]/2;
      }

}


 
      
}

function blueWig(j){
 bgraphics.strokeWeight(stro[j]);
    bgraphics.stroke(balpha[j], balpha[j], 255);
  bgraphics.noFill();
 bgraphics.blendMode(BLEND);
 
 bgraphics.beginShape();

  for (i = 0; i < points[j][1].length; i++) {
bgraphics.curveVertex(points[j][1][i], points[j][2][i]);
  }
  bgraphics.endShape();


for (i = 0; i < points[j][1].length; i++) {
   
    points[j][1][i] += random(-jita, jita);
   points[j][2][i] += random(-jita, jita);
             if (points[j][1][i] > Points[j][0][1]|| points[j][1][i] < Points[j][0][0]) { 
            
                     wigs();
               
             }
  
  
  if(points[j][2][i] > Points[j][0][3]  || points[j][2][i] < Points[j][0][2]){
    
wigs();
    
  }
 }
  if (stro[j] < 5){  stro[j] = random((points[j][0][1]-points[j][0][0]+points[j][0][3]-points[j][0][2])/points[j][1].length);  
                   
                   if (stro[j] > (points[j][0][1]-points[j][0][0]+points[j][0][3]-points[j][0][2])/points[j][1].length){
       stro[j] = stro[j]/2;
      }

}

}

function magWig(j){
 mgraphics.strokeWeight(stro[j]);
    mgraphics.stroke(255, malpha[j], 255);
  mgraphics.noFill();
 mgraphics.blendMode(BLEND);
 
 mgraphics.beginShape();

  for (i = 0; i < points[j][1].length; i++) {
mgraphics.curveVertex(points[j][1][i], points[j][2][i]);
  }
  mgraphics.endShape();


 for (i = 0; i < points[j][1].length; i++) {
   
    points[j][1][i] += random(-jita, jita);
   points[j][2][i] += random(-jita, jita);
             if (points[j][1][i] > Points[j][0][1] || points[j][1][i] < Points[j][0][0]) { 
            
                     wigs();
               
             }
  
  
  if(points[j][2][i] > Points[j][0][3]  || points[j][2][i] < Points[j][0][2]){
    
wigs();
    
  }
 }
  
  if (stro[j] < 5){  stro[j] = random((points[j][0][1]-points[j][0][0]+points[j][0][3]-points[j][0][2])/points[j][1].length);  
                   
                   if (stro[j] > (points[j][0][1]-points[j][0][0]+points[j][0][3]-points[j][0][2])/points[j][1].length){
       stro[j] = stro[j]/2;
      }

}


}

function cyanWig(j){
 cgraphics.strokeWeight(stro[j]);
    cgraphics.stroke(calpha[j], 255, 255);
  cgraphics.noFill();
 cgraphics.blendMode(BLEND);
 
 cgraphics.beginShape();

 for (i = 0; i < points[j][1].length; i++) {
cgraphics.curveVertex(points[j][1][i], points[j][2][i]);
  }
  cgraphics.endShape();


for (i = 0; i < points[j][1].length; i++) {
   
    points[j][1][i] += random(-jita, jita);
   points[j][2][i] += random(-jita, jita);
             if (points[j][1][i] > Points[j][0][1]|| points[j][1][i] < Points[j][0][0]) { 
            
                     wigs();
               
             }
  
  
  if(points[j][2][i] > Points[j][0][3]  || points[j][2][i] < Points[j][0][2]){
    
wigs();
    
  }
 }
  
  if (stro[j] < 5){  stro[j] = random((points[j][0][1]-points[j][0][0]+points[j][0][3]-points[j][0][2])/points[j][1].length);  
                   
                   if (stro[j] > (points[j][0][1]-points[j][0][0]+points[j][0][3]-points[j][0][2])/points[j][1].length){
       stro[j] = stro[j]/2;
      }

}


}
function setup() {
  noLoop();
  createCanvas(windowWidth, windowHeight);
}

function draw() {

  //rettangoli piccoli
  fill("black");
  noStroke();

  gutter=12
  squareSize=30
  padding=30

  let columns=(windowWidth-2*padding)/(squareSize+gutter);
  let rows=(windowHeight-2*padding)/(squareSize+gutter);

  for(let i=0; i<columns; i++){
   for(let r=0; r<rows; r++){

    let xPos=padding + i*(squareSize+gutter) //+ random(-2.5, 2.5)
    let yPos=padding + r*(squareSize+gutter) //+ random(-2.5, 2.5)
    
    push(); // salva lo stato di trasformazione corrente

    // Trasla al centro del quadrato
    translate(xPos + squareSize/2, yPos + squareSize/2);

    // Condizione per ruotare random il quadrato di 45 gradi
    if (random() < 0.5) { // 50% di probabilità di rotazione
      rotate(PI / 4); // 45 gradi
    }

    // Disegna il rettangolo ruotato o non ruotato
    rectMode(CENTER); // disegna il quadrato dal centro
    rect(0, 0, squareSize, squareSize);
    
    pop(); // ripristina lo stato di trasformazione
 
   }

  }
}
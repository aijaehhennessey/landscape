// put in setup whatever needs to be done to get things started
function setup() {

    // this line creates a virtual canvas and attaches it to your HTML
    createCanvas(640, 480).parent('p5')
    noloop()

}

// put in draw everything you want to draw to the canvas
function draw() {

    // start off with a background
    background(200,240,12)
    stroke(0,0,0)

    beginShape()
    vertex(75,80)
    vertex(120,303)
    vertex(241,244)
    endShape(CLOSE)

    // draw here!
    // if you're getting an error : go to chrome : more tools , developer tools , console to identify errors and it tells you the line where the error is
    // also in the same page , if you click on screen , it'll tell you the coordinates
    strokeWeight(1)
    point(300,300)
    point(100,400)
    line(200,50, 500,340)
    line(320,0,320,480)
    line(0,240,640,240)
    rect(50,360,200,117)
    strokeWeight(0)
    ellipse(50,50,50,50)
    strokeWeight(.5)
    line (0,0,600,400)
    strokeWeight(1)
    arc(50, 50, 80, 80, 0, PI + QUARTER_PI);
}

// this function will print coordinates to the console whenever you click
function mouseClicked() {
    print(int(mouseX), int(mouseY))
}

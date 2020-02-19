function setup() {

    // this line creates a virtual canvas and attaches it to your HTML
    createCanvas(800,500).parent('p5')


}

// put in draw everything you want to draw to the canvas
function draw() {

    // start off with a background
    background(147, 183, 207,128)

    stroke(220, 230, 245)

strokeWeight(.5)

beginShape()
fill(192, 196, 145,200)
curveVertex(800,232)
curveVertex(800,232)
curveVertex(698,304,)
curveVertex(617,282)
curveVertex(568,315)
curveVertex(477,352)
curveVertex(528,388)
curveVertex(480,412)
curveVertex(800,436)
curveVertex(800,436)
endShape()

beginShape()
fill(168, 155, 123,120)
curveVertex(800,232)
curveVertex(800,232)
curveVertex(698,304,)
curveVertex(617,282)
curveVertex(568,315)
curveVertex(477,352)
curveVertex(528,388)
curveVertex(480,412)
curveVertex(800,436)
curveVertex(800,436)
endShape()

beginShape()
fill(171, 131, 79,200)
curveVertex(1,276)
curveVertex(1,276)
curveVertex(90,224)
curveVertex(74,271)
curveVertex(126,278)
curveVertex(98,322)
curveVertex(157,338)
curveVertex(162,344)
curveVertex(146,367)
curveVertex(161,379)
curveVertex(104,500)
curveVertex(0,500)
curveVertex(0,276)
endShape()

beginShape()
fill(140,79,0,50)
curveVertex(1,276)
curveVertex(1,276)
curveVertex(90,224)
curveVertex(74,271)
curveVertex(126,278)
curveVertex(98,322)
curveVertex(157,338)
curveVertex(162,344)
curveVertex(146,367)
curveVertex(161,379)
curveVertex(104,500)
curveVertex(0,500)
curveVertex(0,276)
endShape()


beginShape()
fill(180, 206, 222,170)
vertex(0,0)
vertex(800,0)
vertex(800,172)
vertex(569,190)
vertex(569,159)
vertex(0,192)
endShape()

beginShape()
fill(219, 215, 222,200)
vertex(0,0)
vertex(800,0)
vertex(800,172)
vertex(569,190)
vertex(569,159)
vertex(0,192)
endShape()

beginShape()
fill(110, 102, 150,50)
curveVertex(800,0)
curveVertex(800,0)
curveVertex(580,0)
curveVertex(800,130)
curveVertex(800,3)
curveVertex(800,0)
endShape()




}

    // this function will print coordinates to the console whenever you click
    function mouseClicked() {
        print(int(mouseX), int(mouseY))
    }

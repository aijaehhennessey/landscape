function setup() {

    // this line creates a virtual canvas and attaches it to your HTML
    createCanvas(800,500).parent('p5')


}

// put in draw everything you want to draw to the canvas
function draw() {

    // start off with a background
    background(162, 176, 171,128)

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
fill(255,47,0,90)
rect(0,75,800,75)
endShape()

beginShape()
fill(0,0,0,120)
rect(0,0,800,75)

endShape()

beginShape()
fill(255, 204, 0, 75)
circle(400,75,75)
endShape()

beginShape()
fill(110, 102, 150,100)
curveVertex(800,0)
curveVertex(800,0)
curveVertex(580,0)
curveVertex(800,130)
curveVertex(800,3)
curveVertex(800,0)
endShape()

beginShape()
fill(188, 189, 168)
curveVertex(800,500)
curveVertex(800,500)
curveVertex(796,458)
curveVertex(796,458)
curveVertex(592,470)
curveVertex(424,442)
curveVertex(318,376)
curveVertex(166,374)
curveVertex(112,492)
curveVertex(116,500)
curveVertex(800,500)
endShape()

beginShape()
fill(159, 189, 152)
curveVertex(700,178)
curveVertex(700,178)
curveVertex(700,214)
curveVertex(398,290)
curveVertex(260,250)
curveVertex(168,216)
curveVertex(0,226)
curveVertex(2,190)
curveVertex(560,147)
curveVertex(690,169)
curveVertex(700,178)
endShape()

beginShape()
fill(115, 73, 37)
curveVertex(728,464)
curveVertex(688,498)
curveVertex(714,408)
curveVertex(696,370)
curveVertex(706,366)
curveVertex(718,382)
curveVertex(792,328)
curveVertex(772,366)
curveVertex(794,368)
curveVertex(762,386)
curveVertex(702,474)
curveVertex(752,492)
curveVertex(728,464)
endShape()



}

    // this function will print coordinates to the console whenever you click
    function mouseClicked() {
        print(int(mouseX), int(mouseY))
    }

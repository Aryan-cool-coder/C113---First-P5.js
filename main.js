function preload() {

}


function setup() {
    canvas = createCanvas(800, 550);
    canvas.position(500,225);
    video = createCapture(VIDEO);
    video.hide();
}


function draw() {
    image(video, 50,50,700,450);

    rect(0, 0, 50, 550);
    rect(0, 0, 800, 50);
    rect(0, 500, 800, 50);
    rect(750, 0, 50, 550);
    fill("red");


    circle(25,25, 100);
    circle(775,25, 100);
    circle(25,525, 100);
    circle(775,525, 100);
    fill("green");
}

function snap() {
    save("TakenPicture.png");    
}
function preload(){

}

function setup(){
    canvas = createCanvas(720, 530);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();

    tint_colour = "";

}

function draw() {
    image(video, 0, 0, 640, 480);
    
    
    circle(680, 40, 80);
    circle(680, 490, 80);
    circle(40, 490, 80);
    tint(tint_colour);
    
}

function take_snapshot(){
    save('student_name.png');
}

function filter_tint()
{
    tint_colour = document.getElementById("colour_name").value;
}
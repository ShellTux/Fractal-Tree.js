var angle = 0;
var slider;
var x = 0;
var i = 0;
var texto;

function setup() {
    createCanvas(400, 200);
    angle = PI / 4;
    slider = createSlider(0, TWO_PI, 0.35, 0.01);
    //texto = createP();
};

function draw() {
    background(51);
    var len = 50;
    angle = slider.value();
    stroke(255);
    translate(70, height);
    branch(len);
}

function branch(length) {
    line(0, 0, 0, -length);
    translate(0, -length);
    if (length > 3) {
        push();
        rotate(angle);
        branch(length * (2 / 3));
        pop();
        push();
        rotate(-angle);
        branch(length * (2 / 3));
        pop();
    };
};

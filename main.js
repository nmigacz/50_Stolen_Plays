//code used is from Github user: AlessioMaddaluno
//link to github for bouncing DVD: https://github.com/AlessioMaddaluno/bouncing-dvd-logo

let speed = 70;
let scale = .40; // Image scale (I work on 1080p monitor)
let canvas;
let ctx;
let logoColor;

let dvd = {
    x: 200,
    y: 300,
    xspeed: 10,
    yspeed: 10,
    img: new Image()
};

(function main(){
    canvas = document.getElementById("tv-screen");
    ctx = canvas.getContext("2d");
    dvd.img.src = 'dvd_logo.png';

    //Draw the "tv screen"
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;

    pickColor();
    update();
    menuClick();
    document.body.style.background = 'index.html(' + canvas.toDataURL() + ')';
})();

function update() {
    setTimeout(() => {
        //Draw the canvas background
        ctx.fillStyle = '#050506';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        //Draw DVD Logo and his background
        ctx.fillStyle = logoColor;
        ctx.fillRect(dvd.x, dvd.y, dvd.img.width*scale, dvd.img.height*scale);
        ctx.drawImage(dvd.img, dvd.x, dvd.y, dvd.img.width*scale, dvd.img.height*scale);
        //Move the logo
        dvd.x+=dvd.xspeed;
        dvd.y+=dvd.yspeed;
        //Check for collision 
        checkHitBox();
        update();   
    }, speed)
}

//Check for border collision
function checkHitBox(){
    if(dvd.x+dvd.img.width*scale >= canvas.width || dvd.x <= 0){
        dvd.xspeed *= -1;
        pickColor();
    }
        
    if(dvd.y+dvd.img.height*scale >= canvas.height || dvd.y <= 0){
        dvd.yspeed *= -1;
        pickColor();
    }    
}

//Pick a random color in RGB format
function pickColor(){
    r = Math.random() * (254 - 0) + 0;
    g = Math.random() * (254 - 0) + 0;
    b = Math.random() * (254 - 0) + 0;

    logoColor = 'rgb('+r+','+g+', '+b+')';
}

function menuClick(){
    dvd.img.onclick = function () {
        location.href = "2002.html";
    };
}


// Get the modal
var modal = document.getElementById("myModal" || "myModal2");

// Get the button that opens the modal
var btn = document.getElementById("myBtn" || "myBTn2");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close" || "close2")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

/*
let x;
let y;

let xspeed;
let yspeed;

let dvd;

let r, g, b;
let htmlCanvas = document.getElementById('c'),

function preload() {
  dvd = loadImage('dvd_logo-min.png');
}

function setup() {
  htmlCanvas = createCanvas(windowWidth, windowHeight);
  x = random(width);
  y = random(height);
  xspeed = 10;
  yspeed = 10;
  pickColor();
}

function pickColor() {
  r = random(100, 256);
  g = random(100, 256);
  b = random(100, 256);
}

function draw() {
  background(0);
  // rect(x, y, 80, 60);
  // Draw the DVD logo
  tint(r, g, b);
  image(dvd, x, y);

  x = x + xspeed;
  y = y + yspeed;

  if (x + dvd.width >= width) {
    xspeed = -xspeed;
    x = width - dvd.width;
    pickColor();
  } else if (x <= 0) {
    xspeed = -xspeed;
    x = 0;
    pickColor();
  }

  if (y + dvd.height >= height) {
    yspeed = -yspeed;
    y = height - dvd.height;
    pickColor();
  } else if (y <= 0) {
    yspeed = -yspeed;
    y = 0;
    pickColor();
  }
} */
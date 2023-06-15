// Setup Canvas and Graphics Context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

// Global Variables
let cirMouse = {
  color: "blue",
  r: 35,
  x: 200,
  y: 300,
};

let mouseX, mouseY;
let speed = 5; // Adjust the speed as desired

requestAnimationFrame(draw);
function draw() {
  // Update Variables
  if (
    mouseX >= 0 &&
    mouseX <= cnv.width &&
    mouseY >= 0 &&
    mouseY <= cnv.height
  ) {
    let dx = mouseX - cirMouse.x;
    let dy = mouseY - cirMouse.y;
    let distance = Math.sqrt(dx * dx + dy * dy);

    // Check if the circle is not yet at the mouse position
    if (distance > cirMouse.r) {
      let ratio = speed / distance;
      let vx = dx * ratio;
      let vy = dy * ratio;

      // Update circle's position
      cirMouse.x += vx;
      cirMouse.y += vy;
    }
  }

  // Clear Background
  ctx.clearRect(0, 0, cnv.width, cnv.height);

  // Draw Circle Blue Mouse
  ctx.fillStyle = cirMouse.color;
  ctx.beginPath();
  ctx.arc(cirMouse.x, cirMouse.y, cirMouse.r, 0, 2 * Math.PI);
  ctx.fill();

  // Request Animation Frame
  requestAnimationFrame(draw);
}

// Event Key
document.addEventListener("mousemove", mouseMoveHandler);

// Getting mouse coordinates
function mouseMoveHandler(event) {
  let cnvRect = cnv.getBoundingClientRect();
  mouseX = event.x - cnvRect.x;
  mouseY = event.y - cnvRect.y;
}
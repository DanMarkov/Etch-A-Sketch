document.addEventListener('DOMContentLoaded', () => {

  let interface = document.createElement('div');
  interface.classList.add("interface");

  document.body.append(interface);

  let settings = document.createElement('div');
  settings.classList.add("settings");
  interface.appendChild(settings);

  let clearBtn = document.createElement("button");
  clearBtn.textContent = "Clear Grid";
  clearBtn.classList.add("clear");
  clearBtn.classList.add("btn");
  settings.appendChild(clearBtn);

  let rainbowBtn = document.createElement("button");
  rainbowBtn.textContent = "Rainbow Colour";
  rainbowBtn.classList.add("rainbow");
  rainbowBtn.classList.add("btn");
  settings.appendChild(rainbowBtn);

  let shadeBtn = document.createElement("button");
  shadeBtn.textContent = "Shading";
  shadeBtn.classList.add("shade");
  shadeBtn.classList.add("btn");
  settings.appendChild(shadeBtn);

  let container = document.createElement("div");
  container.classList.add("container");
  settings.appendChild(container);

  function createGrid(size) {
    container.innerHTML = "";
    for (i = 0; i < size * size; i++) {
      const square = document.createElement("div");
      square.classList.add("square");
      container.appendChild(square);
    }
    container.style.width = `${size * 60}px`;
    addMouseoverToGrids();
  }


  shadeBtn.addEventListener('click', () => {
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => {
       square.addEventListener('mouseover', darkenPencilColor());

        });
  });


function addMouseoverToGrids() {
  const squares = document.querySelectorAll('.square');
  if (rainbowColorIsOn == true) {
      rainbowBtn.style.backgroundColor = "LightGreen";
      squares.forEach(square => square.addEventListener('mouseover', changePencilColor(randomColor())));
  } else {
    rainbowBtn.style.backgroundColor = "";
      squares.forEach(square => square.addEventListener('mouseover', changePencilColor('rgb(0, 0, 0)')));
  }
}

function changePencilColor(color) {
  return function(e) {
      e.target.style.backgroundColor = color;
  }
}

  let rainbowColorIsOn = false;

  rainbowBtn.addEventListener('click', () => {
    rainbowColorIsOn = !rainbowColorIsOn
    addMouseoverToGrids();
  });

  shadeBtn.addEventListener('click', darkenPencilColor);

  function darkenPencilColor() {
    let dark = 255;
    return function(e) {
        dark -= 25;
        e.target.style.backgroundColor = `rgb(${dark}, ${dark}, ${dark})`;
    }
  }



  clearBtn.addEventListener("click", () => {
    const newSize = +prompt("Create a new canvas", 16);
    const size = Math.min(Math.max(parseInt(newSize) || 16, 1), 100);
    createGrid(size);
  });

  createGrid(16);


  function randomColor() {
      let r = Math.floor(Math.random() * 255) + 1;
      let g = Math.floor(Math.random() * 255) + 1;
      let b = Math.floor(Math.random() * 255) + 1;
      return rgb = "rgb(" + r + " " + g + " " + b + ")";
  }



  // dots is an array of Dot objects,
  // mouse is an object used to track the X and Y position
    // of the mouse, set with a mousemove event listener below
    let dots = [],
      mouse = {
        x: 0,
        y: 0
      };

  // The Dot object used to scaffold the dots
  let Dot = function() {
    this.x = 0;
    this.y = 0;
    this.node = (function(){
      let node = document.createElement("div");
      node.className = "trail";
      node.style.backgroundColor = randomColor();
      document.body.appendChild(node);
      return node;
    }());
  };
  // The Dot.prototype.draw() method sets the position of 
    // the object's <div> node
  Dot.prototype.draw = function() {
    this.node.style.left = this.x + "px";
    this.node.style.top = this.y + "px";
  };

  // Creates the Dot objects, populates the dots array
  for (let i = 0; i < 50; i++) {
    let d = new Dot();
    dots.push(d);
  }

  // This is the screen redraw function
  function draw() {
    // Make sure the mouse position is set everytime
      // draw() is called.
    let x = mouse.x,
        y = mouse.y;
    
    // This loop is where all the 90s magic happens
    dots.forEach(function(dot, index, dots) {
      let nextDot = dots[index + 1] || dots[0];
      
      dot.x = x;
      dot.y = y;
      dot.draw();
      x += (nextDot.x - dot.x) * .6;
      y += (nextDot.y - dot.y) * .6;

    });
  }

  addEventListener("mousemove", function(event) {
  //   event.preventDefault();
    mouse.x = event.pageX;
    mouse.y = event.pageY;
  });

  // animate() calls draw() then recursively calls itself
    // everytime the screen repaints via requestAnimationFrame().
  function animate() {
    draw();
    requestAnimationFrame(animate);
  }

  // And get it started by calling animate().
  animate();

});


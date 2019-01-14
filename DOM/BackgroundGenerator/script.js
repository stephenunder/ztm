const css = document.querySelector("h3");
const color1 = document.querySelector("#color1");
const color2 = document.querySelector("#color2");
const body = document.getElementById("gradient");
const randomBtn = document.querySelector("#random");

function setGradient() {
  body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
  css.textContent = body.style.background + ";";
}

function randomize() {
  color1.value = randomColor();
  color2.value = randomColor();
  setGradient();
}

function randomColor() {
  // create 3 random numbers for the RGB values
  var r = Number(Math.floor(Math.random() * 255 + 1)).toString(16);
  var g = Number(Math.floor(Math.random() * 255 + 1)).toString(16);
  var b = Number(Math.floor(Math.random() * 255 + 1)).toString(16);
  // concat rgb to Hex
  let rgb = "#" + r + g + b;
  console.log(rgb);
  //   In case random number returns 0 we just add 1
  if (rgb.length <= 6) {
      rgb = rgb + 1;
      return rgb;
  } else {
      return rgb;
  }
}

randomize();
randomBtn.addEventListener("click", randomize);
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
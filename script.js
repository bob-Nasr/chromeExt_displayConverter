document.addEventListener("DOMContentLoaded", function () {
  const pixelsInput = document.getElementById("pixels");
  const inchesInput = document.getElementById("inches");

  pixelsInput.addEventListener("input", convertPixelsToInches);
  inchesInput.addEventListener("input", convertInchesToPixels);
});

function convertPixelsToInches() {
  const pixels = parseFloat(document.getElementById("pixels").value);
  if (!isNaN(pixels)) {
    const inches = pixels / window.devicePixelRatio;
    document.getElementById("inches").value = inches.toFixed(2);
  }
}

function convertInchesToPixels() {
  const inches = parseFloat(document.getElementById("inches").value);
  if (!isNaN(inches)) {
    const pixels = inches * window.devicePixelRatio;
    document.getElementById("pixels").value = pixels.toFixed(2);
  }
}

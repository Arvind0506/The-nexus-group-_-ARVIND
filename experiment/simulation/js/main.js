const lamp = document.getElementById('lamp');
const ibSlider = document.getElementById('ibSlider');
const ibDisplay = document.getElementById('ibDisplay');
const meter = document.getElementById('multimeter');
const typeBtn = document.getElementById('typeBtn');
const switchSound = document.getElementById('switchSound');
let graphCtx = document.getElementById('graph').getContext('2d');

let isPNP = false;
let dataPoints = [];

function toggleType() {
  isPNP = !isPNP;
  typeBtn.innerText = isPNP ? "PNP" : "NPN";
  document.getElementById("arrowHead").setAttribute("points", isPNP ? "60,33,66,42,70,32" : "60,67,66,58,70,68");
  updateCircuit();
  switchSound.play();
}

function updateCircuit() {
  const ib = parseFloat(ibSlider.value);
  ibDisplay.innerText = ib;

  let vbe, vce, ic, mode;
  if (ib < 5) {
    vbe = 0.0; vce = 5.0; ic = 0.0; mode = "CUT-OFF";
    lamp.classList.add('on');
  } else if (ib < 60) {
    vbe = 0.7; vce = 1.0; ic = ib * 50; mode = "ACTIVE";
    lamp.classList.add('on');
  } else {
    vbe = 0.8; vce = 0.2; ic = ib * 100; mode = "SATURATION";
    lamp.classList.remove('on');
  }

  if (isPNP) {
    vbe *= -1;
    vce *= -1;
    ic *= -1;
  }

  meter.innerHTML = `V<sub>BE</sub>: ${vbe.toFixed(2)}V | V<sub>CE</sub>: ${vce.toFixed(2)}V | I<sub>B</sub>: ${ib.toFixed(1)}uA | I<sub>C</sub>: ${ic.toFixed(1)}uA<br>Mode: ${mode}`;
  plotGraph(vce, ic);
}

function plotGraph(vce, ic) {
  dataPoints.push({ x: vce, y: ic });
  if (dataPoints.length > 100) dataPoints.shift();

  graphCtx.clearRect(0, 0, 600, 300);
  graphCtx.beginPath();
  graphCtx.moveTo(0, 300);
  for (let point of dataPoints) {
    let x = 600 * (5 + point.x) / 10;
    let y = 300 - (point.y + 5000) / 10000 * 300;
    graphCtx.lineTo(x, y);
  }
  graphCtx.strokeStyle = "blue";
  graphCtx.stroke();
}

updateCircuit();

import App from './components/App.html';
var Chartist = require('chartist');

const AppComponent = new App({
  target: document.querySelector('#root'),
  data: { name: 'princess' },
});

new Chartist.Line(
  '#chart4',
  {
    labels: [
      'C',
      'C',
      'A',
      'C',
      'G',
      'C',
      'A',
      'T',
      'C',
      'A',
      'A',
      'T',
      'T',
      'G',
      'C',
    ],
    series: [
      [5, 0, 6, 0, 0, 5, 0, 5, 0, 0, 5, 0, 0, 5, 0, 5],
      [2, 1, 3.5, 7, 3, 2, 1, 3.5, 7, 3, 2, 1, 3.5, 7, 3],
      [1, 3, 4, 5, 6, 2, 1, 3, 5, 7, 3, 2, 1, 3.5, 7, 3],
    ],
  },
  {
    fullWidth: true,
    chartPadding: {
      right: 40,
    },
  }
);

var base = 350;
var width = 20;

function draw(i, oldbase, color, value, letter) {
  var deviation = 50;
  var newBase = base + deviation * Math.random();
  var height = value * base + deviation * Math.random();

  var start_pnt_X = 0 + i * width;
  var start_pnt_Y = oldbase;
  var cntrl_pnt_X = width / 2 + i * width;
  var cntrl_pnt_Y = height - deviation + deviation * Math.random();
  var end_pnt_X = width + i * width;
  var end_pnt_Y = newBase;

  context.beginPath();
  context.lineWidth = 2;
  if (value) {
    letter = '';
    deviation = 0;
    cntrl_pnt_Y = height - deviation + deviation * Math.random();
  }
  context.moveTo(start_pnt_X, start_pnt_Y);
  context.quadraticCurveTo(cntrl_pnt_X, cntrl_pnt_Y, end_pnt_X, end_pnt_Y);
  context.strokeStyle = color;
  context.stroke();
  context.lineWidth = 1;
  context.strokeText(letter, cntrl_pnt_X, 410);
  return newBase;
}

var code = [2, 2, 1, 2, 3, 2, 1, 4, 2, 1, 1, 4, 4, 3, 2];
var a = [1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 0, 1, 1, 1, 1];
var c = [0, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0];
var g = [1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1];
var t = [1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1];
var canvas = document.getElementById('CanvasOfGeeks');
var context = canvas.getContext('2d');

var oldbaseA = base;
var oldbaseC = base;
var oldbaseG = base;
var oldbaseT = base;

for (let i = 0; i < code.length; i++) {
  oldbaseT = draw(i, oldbaseT, '#000000', t[i], 'T');
  oldbaseC = draw(i, oldbaseC, '#008800', c[i], 'C');
  oldbaseG = draw(i, oldbaseG, '#000088', g[i], 'G');
  oldbaseA = draw(i, oldbaseA, '#FF0000', a[i], 'A');
}
context.font = '100px Courier';
context.strokeText('PRINC', 0, 150);

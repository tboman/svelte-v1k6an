import App from './components/App.html';
var Chartist = require('chartist');

const AppComponent = new App({
  target: document.querySelector('#root'),
  data: { name: 'princess' }
});



new Chartist.Line('#chart4', {
  labels: [
    'C','C','A','C','G','C','A','T','C','A','A','T','T','G','C'],
  series: [
    [5, 0, 6, 0, 0, 5, 0, 5, 0, 0, 5,0, 0, 5, 0, 5],
    [2, 1, 3.5, 7, 3, 2, 1, 3.5, 7, 3, 2, 1, 3.5, 7, 3],
    [1, 3, 4, 5, 6,2, 1, 3,5, 7, 3,2, 1, 3.5, 7, 3]
  ]
}, {
  fullWidth: true,
  chartPadding: {
    right: 40
  }
});
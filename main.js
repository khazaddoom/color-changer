
var colorValue = '#FF1'

document.getElementById('color-btn').addEventListener('click', function() {


   var divTarget = document.getElementsByClassName('contentArea');
   
   divTarget[0].style.background = colorValue++;



});
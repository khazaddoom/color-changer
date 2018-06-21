
// var colorValue = '#FF1'

// document.getElementById('color-btn').addEventListener('click', function() {


//    var divTarget = document.getElementsByClassName('contentArea');
   
//    divTarget[0].style.background = colorValue++;



// });

for(var i = 0; i < 10; i++) {
    console.log(i);
    setTimeout(function() {
      console.log('The number is ' + i);
    }, 1000);
}
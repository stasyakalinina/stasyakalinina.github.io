//menu.onclick = function myFunction() {
//    var x = document.getElementById('myTopnav');
//    if(x.className === "topnav"){
//        x.classList.add('responsive');
//    } else{
//        x.classList === "topnav";
//    }
//    
//}

window.onload = function () {
  document.getElementById('menu').onclick = function () {
   var  x = document.getElementById('myTopnav');
   if (x.className === "topnav") {
    x.className += " responsive";
   } else {
    x.className = "topnav";
   }
  }
 }
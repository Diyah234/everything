let count = 0;
document.getElementById("minus").addEventListener("click" , function(){
    count--;
    document.getElementById("label").innerHTML = count;

    if (count < 0) {
        count = 0;
        document.getElementById("label").innerHTML = count;
    }
})

document.getElementById("plus").addEventListener("click" , function(){
    count++;
    document.getElementById("label").innerHTML = count;
})

 let iscartBox = false
document.getElementById("cart").addEventListener("click", function(){
    if(iscartBox === false){
    document.getElementById("cart-box").style.display = "none";
    
    }else{
        document.getElementById("cart-box").style.display = "block";
    }
    iscartBox = !iscartBox;
})

document.getElementById("add").addEventListener("click", function(){
    document.getElementById("cart-box2").style.display = "block";
    document.getElementById("number").style.display = "block";
    document.getElementById("number").innerHTML = count;
    document.getElementById("number2").innerHTML = count;
})
document.getElementById("del").addEventListener("click", function(){
    document.getElementById("cart-box2").style.display = "none";
    document.getElementById("number").style.display = "none";
})

// slide
function openModal() {
    document.getElementById("final").style.display = "block";
  }
  
  function closeModal() {
    document.getElementById("final").style.display = "none";
  }
  
  var slideIndex = 1;
  showSlides(slideIndex);
  
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("bigs");
    var dots = document.getElementsByClassName("demo");

    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
  }

var menu = document.getElementById("menu");
var close = document.getElementById("close2");

menu.addEventListener("click", function(){
  document.getElementById("nav").style.display = "block";
  close.style.display = "block";
  menu.style.display = "none";
})
close.addEventListener("click", function(){
  document.getElementById("nav").style.display = "none";
  close.style.display = "none";
  menu.style.display = "block";

})
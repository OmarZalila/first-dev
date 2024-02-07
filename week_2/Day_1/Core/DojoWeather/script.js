function Loading(){
    alert('Loading weatherreport... ')
}

var removeMessage= document.querySelector(".message")
function Dismiss(){
    removeMessage.remove()
}
var x1 = document.querySelector(".hot");
var y1 = document.querySelector(".cold");
var x2 = document.querySelector(".hot1");
var y2 = document.querySelector(".cold1");
var x3 = document.querySelector(".hot2");
var y3 = document.querySelector(".cold2");
var x4 = document.querySelector(".hot3");
var y4 = document.querySelector(".cold3");
function convert(){
    x1.innerText="75°";
    y1.innerText="65°";
    x2.innerText="80°";
    y2.innerText="66°";
    x3.innerText="69°";
    y3.innerText="61°";
    x4.innerText="78°";
    y4.innerText="70°";
}

console.log("page loaded...");

var newName=document.querySelector(".card-body h1");
var newPhoto=document.querySelector(".card-header img");
function changeName(){
    newName.innerText="Todd E";
    newPhoto.src="images/todd-s.jpg";
}

var removeClass=document.querySelector(".card-list-item");
function hide(){
    removeClass.remove();
}
var classRemove=document.querySelector("#phiphi");
function removeThis (){
    classRemove.remove();
}
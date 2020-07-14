var link1=document.querySelector("#link1");
 var link2=document.querySelector("#link2");
var link3=document.querySelector("#link3");
var link4=document.querySelector("#link4");
var loc=document.querySelector("#loc");
 var heads=document.querySelector("#heads");
var register=document.querySelector("#register");
var loc2=document.querySelector("#loc2");
var heads2=document.querySelector("#heads2");
var register2=document.querySelector("#register2");
var loc3=document.querySelector("#loc3");
var heads3=document.querySelector("#heads3");
var register3=document.querySelector("#register3");
link1.addEventListener("mouseover",function(){
  link1.style.color="black";
})
link1.addEventListener("mouseout",function(){
  link1.style.color="white";
})
link2.addEventListener("mouseover",function(){
  link2.style.color="black";
})
link2.addEventListener("mouseout",function(){
  link2.style.color="white";
})
link3.addEventListener("mouseover",function(){
  link3.style.color="black";
})
link3.addEventListener("mouseout",function(){
  link3.style.color="white";
})
link4.addEventListener("mouseover",function(){
  link4.style.color="black";
})
link4.addEventListener("mouseout",function(){
  link4.style.color="white";
})

var popup=document.querySelector("#popup");
link3.addEventListener("click",function(){
  popup.style.display="flex";

})
var close=document.querySelector("#close");
close.addEventListener("click",function(){
  popup.style.display="none";
})
var popup2=document.querySelector("#popup2");
link4.addEventListener("click",function(){
  popup2.style.display="flex";

})
var close2=document.querySelector("#close2");
close2.addEventListener("click",function(){
  popup2.style.display="none";
})

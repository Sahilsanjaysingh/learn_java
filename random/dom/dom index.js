
//slection of an element 
var a=document.querySelector("h1")
//changing html
a.innerHTML= "changed html"
//changing css
a.style.color="black"
//in camel case 
a.style.backgroundColor="red"
// event listner 
a.addEventListener("click",function(){
    a.innerHTML="i am changed liked ur ex"
    a
})

console.log(a)





var bulb = document.querySelector("#bulb")
var btn = document.querySelector("button")


var flag=0
 btn.addEventListener("click", function(){
    if (flag==0){
    bulb.style.backgroundColor = "yellow"
    console.log("on")
    flag=1
    }
    else {
        bulb.style.backgroundColor = "Transparent"
        console.log("of")
    flag=0
    }
})
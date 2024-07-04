var flag = true;
var count = 0;
var ref = "";
function movement(event){
var car = document.getElementById("car")    
var btn = event.target;
if(flag){
btn.id = "start"
btn.innerText = "Start"
clearInterval(ref)
flag = false;
}
else{
    btn.id = "stop";
    btn.innerText = "Stop";
   ref = setInterval(function (){
    count += 10
    car.style.left = count + "px"
}, 100)

    flag = true;
}

}
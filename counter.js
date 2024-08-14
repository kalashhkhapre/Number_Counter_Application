const decrease=document.getElementById("DecreaseBtn");
const reset=document.getElementById("ResetBtn");
const increase=document.getElementById("IncreaseBtn");
const counter=document.getElementById("CounterLabel");
let count=0;

increase.onclick = function(){
    count++;
    counter.textContent=count;
}
decrease.onclick = function(){
    count--;
    counter.textContent=count;
}
reset.onclick = function(){
    count=0;
    counter.textContent=count;
}
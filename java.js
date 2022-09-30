const mic = document.getElementById('initialMic')
if(mic){
    console.log("hi")
}
console.log(mic);
mic.addEventListener('click',function(){
    console.log("shrinking")
    mic.classList.add("shrink");
})
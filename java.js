/*const mic = document.getElementById('initialMic')
if(mic){
    console.log("hi")
}
console.log(mic);
mic.addEventListener('click',function(){
    console.log("shrinking")
    mic.classList.add("shrink");
})
*/



window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
const button = document.querySelector('#mic');
const textbox = document.querySelector('#textbox');
const input = document.querySelector('input');
const result = document.querySelector('#result');
const go = document.querySelector('#go');
const gif = document.querySelector('#gif.giphy-embed');
recognition.interimResults = true;
gif.style.display="none";

console.log("running");
//on recognition start
recognition.addEventListener("result", (e) => {
    console.log("listneing")
  const text = Array.from(e.results)
    .map((result) => result[0])
    .map((result) => result.transcript)
    .join("");
  console.log(input.value)
  input.value =text;
   }
);

//on button click
button.addEventListener('click', function(){
    console.log("clickity clack");
    recognition.start();
    gif.style.display="none";
    gif.src="";
})

//when a recording finishes, the record button comes back up and u can overwrite if needed
recognition.addEventListener('end',()=>{
    //wat to do on end
})


go.addEventListener('click',(event)=>{
  console.log("weeooo")
  if(input.value.toLowerCase()=="hello"){
    console.log("hi")
    gif.src="https://giphy.com/embed/3o7TKNKOfKlIhbD3gY";
    gif.style.display="inline";
  }else if(input.value.toLowerCase()=="how are you doing"){
    console.log("gif")
    gif.src="https://giphy.com/embed/26FLgm33ve3iUexZC"
    gif.style.display="inline";
  }else if(input.value.toLowerCase()=="i like it"){
    gif.src="https://giphy.com/embed/26FLetDV4MHaixWHm"
    gif.style.display="inline";
  }else if(input.value.toLowerCase()=="i dont like this"){
    gif.src="https://giphy.com/embed/l4Jzdp8TJ2DDxeVna"
    gif.style.display="inline";
  }else if(input.value.toLowerCase()=="i dont know"){
    gif.src="https://giphy.com/embed/26FLfRk8VOFZOem9G"
    gif.style.display="inline"; 
   }else if(input.value.toLowerCase()=="i know"){
    gif.src="https://giphy.com/embed/l4JzhcsNiEKmhekhO"
    gif.style.display="inline"; 
   }else if(input.value.toLowerCase()=="i dont understand"){
    gif.src="https://giphy.com/embed/26FL0X4d3Epuecpj2"
    gif.style.display="inline"; 
   }else if(input.value.toLowerCase()=="im fine"){
    gif.src="https://giphy.com/embed/l4Jzd71ci3msO66ac"
    gif.style.display="inline"; 
   }else if(input.value.toLowerCase()=="yes"){
    gif.src="https://giphy.com/embed/26FLfRk8VOFZOem9G"
    gif.style.display="inline";   
   }else if(input.value.toLowerCase()=="maybe"){
    gif.src="https://giphy.com/embed/l4Jzdw22eZ8QEKCKQ"
    gif.style.display="inline";
   }else if(input.value.toLowerCase()=="no"){
    gif.src="https://giphy.com/embed/l4Jz4faxuS1FiSEV2"
    gif.style.display="inline";
   }else if(input.value.toLowerCase()=="are you okay"){
    gif.src="https://giphy.com/embed/26FL0kXeJG1UShgje"
    gif.style.display="inline";
   }else if(input.value.toLowerCase()=="what are you doing"){
    gif.src="https://giphy.com/embed/26FLcXu6TYYAc39vO"
    gif.style.display="inline"; 
   }else if(input.value.toLowerCase()=="good morning"){
    gif.src="https://giphy.com/embed/26FLchGgqamznV64E"
    gif.style.display="inline"; 
   }else if(input.value.toLowerCase()=="good afternoon"){
    gif.src="https://giphy.com/embed/l4JzaRsX52k8glIFa"
    gif.style.display="inline"; 
   }else if(input.value.toLowerCase()=="good evening"){
    gif.src="https://giphy.com/embed/l4JzdrbDeU2lMMrde"
    gif.style.display="inline"; 
   }else if(input.value.toLowerCase()=="good night"){
    gif.src="https://giphy.com/embed/l4Jz5WK4Uddr8KsSc"
    gif.style.display="inline";  
   }else if(input.value.toLowerCase()=="cool"){
    gif.src="https://giphy.com/embed/l4Jz9e2dMN38YXYc0"
    gif.style.display="inline";
   }else if(input.value.toLowerCase()=="today"){
    gif.src="https://giphy.com/embed/l0HlMjs6qD8oPdFS0"
    gif.style.display="inline"; 
   }else if(input.value.toLowerCase()=="tommorow"){
    gif.src="https://giphy.com/embed/l0HlVIYwcKAplTzsQ"
    gif.style.display="inline"; 
   }else if(input.value.toLowerCase()=="morning"){
    gif.src="https://giphy.com/embed/3o6ZtrcJ9GCXGGw0ww"
    gif.style.display="inline"; 
   }else if(input.value.toLowerCase()=="afternoon"){
    gif.src="https://giphy.com/embed/3o6Ztf9STnFqeMPrZC"
    gif.style.display="inline"; 
   }else if(input.value.toLowerCase()=="evening"){
    gif.src="https://giphy.com/embed/l0HlMsC7b9AdKviZG"
    gif.style.display="inline";  
   }
})

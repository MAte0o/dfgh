var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
function start(){
document.getElementById("textbox").innerHTML="";
recognition.start();


}
recognition.onresult = function(hola) {

    console.log(hola); 

   var Content =hola.results[0][0].transcript;

   document.getElementById("textbox").innerHTML = Content;
   console.log(Content);
       speak();
}
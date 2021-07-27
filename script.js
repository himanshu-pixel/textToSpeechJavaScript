var speechRecognition = window.webkitSpeechRecognition;

var recognition = new speechRecognition();

var textBox = $('#textbox')

var instruction = $('#instruction')

var content ='';

recognition.continuous = true;

//recogniton startes

recognition.onstart = function(){
    instruction.text("Voice Recognition is ON, Speak Now🔊")
}
recognition.onspeechend = function(){
    instruction.text("No activity🔇")
}

recognition.onerror = function(){
    instruction.text("Try Again😵")
}
recognition.onresult = function(e){
    var current = e.resultIndex;
    var transcript = e.results[current][0].transcript

    content +=transcript
    textBox.val(content)
}

$('#start-btn').click(function(e){
    if(content.length){
        content+='';
    }
    recognition.start()
})

textBox.on('input',function(){
    content = $(this).val()
})
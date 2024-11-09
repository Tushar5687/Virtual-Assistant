const btn = document.querySelector("#btn");
const content = document.querySelector("#content")
const voice = document.querySelector("#voice")
function speak (text){
    let text_speak = new SpeechSynthesisUtterance(text)
    text_speak.rate = 1
    text_speak.pitch = 1
    text_speak.volume = 1
    window.speechSynthesis.speak(text_speak)
}

function wishMe(){
    let day = new Date()
    let hours = day.getHours()
    if(hours>=0 && hours<12){
        speak("Good Morning Sir")
    }
    else if(hours>=12 && hours<16){
        speak("Good Afternoon sir")
    }
    else{
        speak("Good Evening sir")
    }
    
}
window.addEventListener('load',wishMe())
let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition = new SpeechRecognition()
recognition.onresult = (event)=>{
     console.log(event);
     let currentIndex =  event.resultIndex
     let transcript = event.results[currentIndex][0].transcript
     content.innerText = transcript
     takeCommand(transcript.toLowerCase())
}
btn.addEventListener('click',()=>{
    recognition.start()
    btn.style.display="none"
    voice.style.display="block"
})
function takeCommand(message){
     btn.style.display="flex"
    voice.style.display="none"
    if(message.includes("hello") || message.includes("hey")|| message.includes("hi")){
        speak("hello friend, how can i help you?")
    }
    else if(message.includes("who are you")){
        speak("I am your Virtual Assistant developed by   Tushar Sahni")
    }
    else if(message.includes("open youtube") || message.includes("open YouTube")){
        speak("Opening Youtube....")
        window.open('https://www.youtube.com/')
    }
    else if(message.includes("open youtube") || message.includes("open YouTube")){
        speak("Opening Youtube....")
        window.open('https://www.youtube.com/')
    }
    else if(message.includes("open calculator")){
        speak("opening calculator")
        window.open("calculator://")
    }
    else if(message.includes("open whatsapp")){
        speak("opening whatsapp")
        window.open("whatsapp://")
    }
    else if(message.includes("time")){
        let time = new Date().toLocaleString(undefined,{hour:"numeric",minute:"numeric"})
        speak(time)
    }
    else if(message.includes("date")){
        let time = new Date().toLocaleString(undefined,{day:"numeric",month:"short"})
        speak(time)
    }
    else{
        let ft = message.replace("nila","").replace("neela","").trim()
        let res = `Here's what I found on the internet for ${ft} `
               speak(res)
        window.open(`https://www.google.com/search?q=${encodeURIComponent(ft)} `,"_blank")
    }
    }


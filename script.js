// LocalStorage Get Element
let lstorage = localStorage.getItem('jimjim')
if(!lstorage){
    localStorage.setItem("jimjim",JSON.stringify([]))
}
// LocalStorage Set Element
localStorage.setItem("jimjim",JSON.stringify([
    { 
        syllable : "ba",
        word : "bake", 
        sentence : "Can you bake cupcakes?"
    },
    { 
        syllable : "ba",
        word : "band", 
        sentence : "He works in a music band."
    },
    { 
        syllable : "ba",
        word : "bark", 
        sentence : "My dog doesn’t bark at night."
    },
    { 
        syllable : "be",
        word : "become", 
        sentence : "She will become a teacher."
    },
]))

let initBtn = (index)=>{ 
    document.getElementById("syllable").value = JSON.parse(localStorage.getItem('jimjim'))[index].syllable
    document.getElementById("word").value = JSON.parse(localStorage.getItem('jimjim'))[index].word
    document.getElementById("sentence").value = JSON.parse(localStorage.getItem('jimjim'))[index].sentence
}
let count = 0
initBtn(count)

let rate = 1, pitch = 1, voices = [] , inputTxt;
let synth = window.speechSynthesis;
let sendText=(data)=>{
    inputTxt = data
    console.log(inputTxt.value)
    speak(inputTxt.value)
    inputTxt = null
}
let sendTextNext=(data)=>{
    inputTxt = data
    console.log(inputTxt.value)
    speak(inputTxt.value)
    inputTxt = null
    count +=1
    if (count == 4){ 
        count = 0
    }
    initBtn(count)
}

let speak=(text)=>{
    if (synth.speaking) {
        console.log(synth.speaking)
        console.error('speechSynthesis.speaking');
        return;
    }
    if (text !== '') {
    let utterThis = new SpeechSynthesisUtterance(text);
    utterThis.onend = (event) =>{
        console.log('SpeechSynthesisUtterance.onend');
    }
    utterThis.onerror = (event) =>{
        console.error('SpeechSynthesisUtterance.onerror');
    }
    utterThis.lang = 'en-US';
    utterThis.pitch = pitch
    utterThis.rate = rate
    synth.speak(utterThis);
  }
}

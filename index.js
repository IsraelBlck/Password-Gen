const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let output1El = document.getElementById("output1")
let output2El = document.getElementById("output2")
let passwordLength = document.getElementById("length-el")
function generateRandomPassword() {
    let suggestPass1 = ""
    let suggestPass2 = ""
    for(let i = 0; i < passwordLength.value; i++){
       suggestPass1 += characters[Math.floor(Math.random() * characters.length)]
       suggestPass2 += characters[Math.floor(Math.random() * characters.length)]
    }
    output1El.textContent = suggestPass1
    output2El.textContent = suggestPass2
}
function subtract(){
    passwordLength.value--
}
function add(){
    passwordLength.value++
}

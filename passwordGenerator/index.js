const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"
,"a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0"
, "1", "2", "3", "4", "5", "6", "7", "8", "9",
"~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];
let password = document.getElementById("password")
let password2 = document.getElementById("password2")
let pass
let chars = []
let chars2 = []
function generate(){
    for(let i = 0; i<15; i++){
        if(chars.length < 15){
            pass = characters[Math.floor(Math.random()* 91)]
            chars.push(pass)
            password.textContent += pass
        }       
    }
    for(let i = 0; i<15; i++){
        if(chars2.length < 15){
            pass = characters[Math.floor(Math.random()* 91)]
            chars2.push(pass)
            password2.textContent += pass
        }       
    }
}

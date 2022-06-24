// Generates random numbers
function randomNo(x,y){
    var min = x;
    var max = y;
    
    var randomNo = Math.floor(Math.random()*(max-min+1)+min);
    
    return randomNo;
}

// Generates random letter
var codebaseAlpha = "abcdefghijklmnopqrstuvwxyz".split("");
var randomAlpha = codebaseAlpha[randomNo(0,25)];

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  // The part where a password is generated
  function generatePassword(){
    var passLength = prompt("Please specify a length between 8 to 128 characters.");
    if(passLength >= 8 && passLength <= 128){
        alert("Guess it worked.");
    }else{
        alert("Your specified length is either too long or too short, please enter another number.");
        return(generatePassword());
    }
    
}
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

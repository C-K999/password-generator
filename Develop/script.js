// Generates random numbers
function randomNo(x,y){
    var min = x;
    var max = y;
    
    var randomNo = Math.floor(Math.random()*(max-min+1)+min);
    
    return randomNo;
}

// Generates random letters and special characters
var codebaseAlpha = "abcdefghijklmnopqrstuvwxyz".split("");
var randomAlpha = codebaseAlpha[randomNo(0,25)];

var codebaseSpecial = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~".split("");
var randomSpecial = codebaseSpecial[randomNo(0,codebaseSpecial.length-1)];

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  // The part where a password is generated
  function generatePassword(){
    var passLength = prompt("Please specify a length between 8 to 128 characters.");
    if(passLength >= 8 && passLength <= 128){

        var lowerCase = confirm("First of all, would you like to include lowercase letters?");
        //var upperCase = confirm("It shall be done. What about uppercases?")
        //var numCase = confirm("I see. Would you like to include numbers?");
        //var specialCase = confirm("Lastly, would you like your password to have special characters?\n"+"Special characters includes !#$%&'()*+,-./:;<=>?@[]^_`{|}~");

        var passwordProg = ["dummy"];
        for (var i = 0; i < passLength; i++) {
            var randomAlpha = codebaseAlpha[randomNo(0,25)];
            passwordProg.unshift(randomAlpha);
            console.log("The amount of times this loop ran: "+(i+1));
        }
        passwordProg.pop();
        console.log(passwordProg.join(""));

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

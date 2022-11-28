var generateBtn = document.querySelector("#generate");

function generatePassword() {
    // data set 
    var letters = 'abcdefghijklmnopqrstuvwxyz';
    var numbers = '0123456789';
    var special = '!#$%&()*+,-./:;<=>?@[\]^_`{|}~';
    var upperLetters = letters.toUpperCase();
    var lowerLetters = letters.toLowerCase();
    var chooseFrom = '';
    
    var isUpperCase = confirm ('Would you like to use uppercase?');
    var isLowerCase = confirm ('Would you like to use lowercase?');
    var isNumber = confirm ('Would you like to use numbers?');
    var isSpecial = confirm ('Would you like to use special characters?');
    
    // conditions

    if (isUpperCase){
        // use uppercase letters
        console.log ('uppercase')
      }
      if (isLowercase){
        // use lowercase letters
        console.log ('lowercase')
      }
      if (isNumber){
        console.log ('number')
      }
      if (isSpecial){
        console.log ('special')
      }

    return '';
}

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    
    passwordText.value = password;
    
  }

  // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
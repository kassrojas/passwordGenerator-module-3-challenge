// Steps to create password generator: 
// asked to confirm if you want to select
    // upper
    // lower
    // numbers
    // special characters
// asked to INPUT length of password 
    // at least 8, no more than 128
//input is validated and at least one character type should be selected
//password is generated at RANDOM
//password is displayed in an alert




var generateBtn = document.querySelector("#generate");

function generatePassword(length) {
    // data set 
    var letters = 'abcdefghijklmnopqrstuvwxyz';
    var numbers = '0123456789';
    var special = '!#$%&()*+,-./:;<=>?@[\]^_`{|}~';
    var upperLetters = letters.toUpperCase();
    var lowerLetters = letters.toLowerCase();
    var chooseFrom = '';
    var passwordLength = length; 

    var isUpperCase = confirm ('Would you like to use uppercase?');
    var isLowerCase = confirm ('Would you like to use lowercase?');
    var isNumber = confirm ('Would you like to use numbers?');
    var isSpecial = confirm ('Would you like to use special characters?');
    
    // conditions

    if (isUpperCase){
        // use uppercase letters
        console.log ('uppercase')
      }
      else if (isLowercase){
        // use lowercase letters
        console.log ('lowercase')
      }
      else if (isNumber){
        console.log ('number')
      }
      else if (isSpecial){
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
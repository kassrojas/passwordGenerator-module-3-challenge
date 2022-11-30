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
    console.log(length);
    var isUpperCase = confirm ('Would you like to use uppercase?');
    var isLowerCase = confirm ('Would you like to use lowercase?');
    var isNumber = confirm ('Would you like to use numbers?');
    var isSpecial = confirm ('Would you like to use special characters?');
    
    // conditions

    if (isUpperCase){
        chooseFrom += upperLetters;
      }
      if (isLowerCase){
        chooseFrom += lowerLetters;
      }
      if (isNumber){
        chooseFrom += numbers;
      }
      if (isSpecial){
        chooseFrom += special;
      }
       
      
      var random = Math.floor(Math.random() * chooseFrom.length);
      console.log(random);
      console.log(chooseFrom.length);
      var password = '12345678';
      return password;
}

// Write password to the #password input
function writePassword() {
    var passwordLength = prompt("Please input length of password between 8 and 128 characters.")
    var password = generatePassword(passwordLength);
    var passwordText = document.querySelector("#password");
    
    passwordText.value = password;
    
  }

  // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
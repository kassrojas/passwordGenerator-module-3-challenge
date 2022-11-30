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
// prompt(message) displays pop up and takes in user input
// alert(message) pop up and OK button
// confirm(message) pop up with OK and CANCEL button


var generateBtn = document.querySelector("#generate");

function generatePassword(length) {
    // data set 
    var letters = 'abcdefghijklmnopqrstuvwxyz';
    var numbers = '0123456789';
    var special = '!#$%&()*+,-./:;<=>?@[\]^_`{|}~';
    var upperLetters = letters.toUpperCase();
    var lowerLetters = letters.toLowerCase();
    var passOption = '';
    var passwordLength = length; 
    // console.log(length);

    // confirm will give a boolean value to use in if statement later
    var isUpperCase = confirm ('Would you like to use uppercase?'); 
    var isLowerCase = confirm ('Would you like to use lowercase?');
    var isNumber = confirm ('Would you like to use numbers?');
    var isSpecial = confirm ('Would you like to use special characters?');
    var randomizer = Math.floor(Math.random() * passOption.length);
    
    // conditions

    if (isUpperCase){   // takes in boolean value from var isUpperCase
        passOption += upperLetters;
      }
      if (isLowerCase){
        passOption += lowerLetters;
      }
      if (isNumber){
        passOption += numbers;
      }
      if (isSpecial){
        passOption += special;
      }

    if (!isUpperCase && !isLowerCase && !isNumber && !isSpecial){
        alert('')
        return;
    }

    if (passwordLength < 8 || passwordLength > 128){
        alert('Please enter a valid character count between 8 and 128 characters.');
    } else {
        // collect passwordLength and pass this value to passOptions?
    }
       
    for (var i = 0; i < passOption.length; i++) {
        // run some code
    }
      
      
      
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
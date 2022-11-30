// prompt(message) displays pop up and takes in user input
// alert(message) pop up and OK button
// confirm(message) pop up with OK and CANCEL button
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

// Write password to the #password input
function writePassword() {
    var passwordLength = prompt("Please input a length of password between 8 and 128 characters.");

    if (passwordLength < 8 || passwordLength > 128){
        alert('Please input a length of password between 8 and 128 characters.');
        writePassword();
    } 
    
    var password = generatePassword(passwordLength);
    var passwordText = document.querySelector("#password");
    
    passwordText.value = password;
  }



function generatePassword(passwordLength) {
    // data set 
    var letters = 'abcdefghijklmnopqrstuvwxyz';
    var numbers = '0123456789';
    var special = '!#$%&()*+,-./:;<=>?@[\]^_`{|}~';
    var upperLetters = letters.toUpperCase();
    var lowerLetters = letters.toLowerCase();
    var chooseFrom = '';
    var password = '';
    // var passwordLength = length; 
    console.log(passwordLength);
    var isUpperCase = confirm ('Would you like to use uppercase?');
    var isLowerCase = confirm ('Would you like to use lowercase?');
    var isNumber = confirm ('Would you like to use numbers?');
    var isSpecial = confirm ('Would you like to use special characters?');
    
    // conditions

    if (isUpperCase){
        console.log('isUpperCase');
        chooseFrom += upperLetters;
      }
      if (isLowerCase){
        console.log('isLowerCase');
        chooseFrom += lowerLetters;
      }
      if (isNumber){
        console.log('isNumber');
        chooseFrom += numbers;
      }
      if (isSpecial){
        console.log('isSpecial');
        chooseFrom += special;
      }
      
    if (!isUpperCase && !isLowerCase && !isNumber && !isSpecial){
        alert('You have chosen to not generate a password. Please try again.')
        writePassword();
    }
    
    for (i = 0; i < passwordLength; i++){

        var random = Math.floor(Math.random() * chooseFrom.length);
        password += chooseFrom[random];
        console.log(password);

    }
     
      return password;
}


  // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordLength;
var passwordCharacters;
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numericChar = "0123456789";
var specialChar = '`~!@#$%^&*()_+-=?;:/|';

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordLength.prompt("was is your desired password length?");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

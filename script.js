// Assignment Code
var generateBtn = document.querySelector("#generate");
var password = document.querySelector("#password");
var passwordLength = 0;
var passwordCharacters = "";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numericChar = "0123456789";
var specialChar = '`~!@#$%^&*()_+-=?;:/|';
var includeUpper = false;
var includeNum = false;
var includeSpecial = false;

// Write password to the #password input

passwordLength = prompt("What is your desired password length?");
includeNum = confirm("Should I include numbers?");
includeUpper = confirm("Should I include uppercase characters?");
includeSpecial = confirm("Should I include special characters?");

passwordCharacters += lowerCase;

if (includeUpper) {
  passwordCharacters += upperCase;
}
if (includeSpecial) {
  passwordCharacters += specialChar;
}
if (includeNum) {
  passwordCharacters += numericChar;
}

console.log(passwordLength);
console.log(includeNum);
console.log(includeSpecial);
console.log(includeUpper);
console.log(passwordCharacters);

function writePassword(event) {
    event.preventDefault();
    var pass = "";
    for (let i = 0; i < passwordLength; i++) {
      var char = Math.floor(Math.random() * passwordCharacters.length);
      pass += passwordCharacters.charAt(char);
    }
  password.textContent = pass;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Assignment Code
var generateBtn = document.querySelector("#generate");
var upperCaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split ("")
var lowerCaseCharacters = "abcdefghijklmnopqrstuvwxyz".split ("")
var numberCharacters = "1234567890".split ("")
var specialCharacters = "!@#$%^&*(){}[]<>?/~".split ("")
var userChoice = []
function generatePassword(){
var passwordLength = prompt ("How many characters would you like your password to be?")
console.log (passwordLength)
if (passwordLength < 8|| passwordLength > 128){
  alert ("Please chose an accepted password length.")
  var passwordLength = prompt ("How many characters would you like your password to be?")

}
var upperCaseCon = confirm ("Would you like to add upper case character to you password?")
if (upperCaseCon) {
  userChoice = userChoice.concat (upperCaseCharacters)
  console.log (userChoice)

}
var lowerCaseCon = confirm ("Would you like to add lower case character to you password?")
if (lowerCaseCon) {
  userChoice = userChoice.concat (lowerCaseCharacters)
  console.log (userChoice)

}
var numberCon = confirm ("Would you like to add number character to you password?")
if (numberCon) {
  userChoice = userChoice.concat (numberCharacters)
  console.log (userChoice)

}
var specialCon = confirm ("Would you like to add special character to you password?")
if (specialCon) {
  userChoice = userChoice.concat (specialCharacters)
  console.log (userChoice)

}
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  

  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

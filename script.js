/**
 * DONE:
 * page loads
 * user is prompted password length & characters (Uc lc spc num)
 * click generate password
 * complete javascript
 * capture & save preferences
 * create character arrays (Uc lc spc num)
 * four if statements - does the user want ? if yes then give me that & add it to final psswrd
 * repeat for up-sp-num
 * password + = random character 
 * final password length matches length user asked for
 * length captured is a typed number typeof password length (make sure you get a number)
 * TODO:
 * connect password generate button with readonly box
 * fix copy to clipboard function
 * fix slider feature
 * fix previous passwords area
 */

const lowerChars = "abcdefghijklmnopqrstuvwxyz".split("");
const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const specialChars = "!#$%&()*+,-./:;<=>?@[]^_`{|}~".split("");
const numberChars = "0123456789".split("");

let lower = confirm("Do you want any lowercase characters in your password?")
let upper = confirm("Do you want any uppercase characters in your password?")
let special = confirm("Do you want any special characters in your password?")
let number = confirm("Do you want any numbers in your password?")
let passwordlength = prompt('How long do you want your password to be?')
// let passwordlength = document.getElementById("slider").value;
console.log(passwordlength)

function generatePassword() {
  let finalPassword = "";
  let finalPasswordArray = []
  var allcharacters =""
  if (lower) {
    allcharacters += lowerChars
  }
  if (upper) {
    allcharacters += upperChars
  }
  if (special) {
    allcharacters += specialChars
  }
  if (number) {
    allcharacters += numberChars
  }
  var arrayAllCharacters = allcharacters.split(',')
  var randomIndex = Math.floor(Math.random() * arrayAllCharacters.length)
  passwordlength = passwordlength * 1
  for (let i = 0; i < passwordlength; i++) {
    var randomIndex = Math.floor(Math.random() * arrayAllCharacters.length)
    var randomCharacter = arrayAllCharacters[randomIndex]
    finalPasswordArray.push(randomCharacter)
  }
  console.log(finalPasswordArray)
    
  return finalPassword;
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

} 

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Found out how to add this with my Google skills and thought it would make a nice edition 
function copyPassword(){
  document.getElementById("display").select();
  document.execCommand("Copy");
  alert("Copied.")
}
// not sure if it is working yet

// Found out how to add this with my Google skills - This makes the "Previous Passwords" appear below
document.getElementById("lastNums").innerHTML += password + "br />";
// not working

// Setting the default password length to "14" on the slider (does not affect the default option - just for show)
document.getElementById('length').innerHTML = "Length: 14";
// works!

// Found out how to add this with my Google skills and thought it would make the character length prompt more interactive
document.getElementById("slider").oninput = function(){

  if(document.getElementById("slider").value > 0){
    document.getElementById("length").innerHTML = "Length: " + document.getElementById("slider").value;
  }
  else{
    document.getElementById("length").innerHTML = "Length: 1";
  }

}
// works in theory - doesn't set length yet




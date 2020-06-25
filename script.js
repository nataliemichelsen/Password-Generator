// consts
const lowerChars = "abcdefghijklmnopqrstuvwxyz".split("");
const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const specialChars = "!#$%&()*+,-./:;<=>?@[]^_`{|}~".split("");
const numberChars = "0123456789".split("");

// generate password
function generatePassword() {
  let finalPassword = "";
  let finalPasswordArray = []
  let lower = confirm("Do you want any lowercase characters in your password?")
  let upper = confirm("Do you want any uppercase characters in your password?")
  let special = confirm("Do you want any special characters in your password?")
  let number = confirm("Do you want any numbers in your password?")
  let passwordlength = prompt('How long do you want your password to be?')
  var allcharacters = ""
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
  for (let i = 0; i < finalPasswordArray.length; i++) {
    finalPassword += finalPasswordArray[i]
  }
  console.log(finalPassword)
  var passwordText = document.querySelector("#password");
  passwordText.value = finalPassword;

  return finalPassword;
}

// Add event listener to generate button
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", generatePassword);

// copy to clipboard
function copy() {
  var copyText = document.querySelector("#password");
  copyText.select();
  document.execCommand("copy");
}

document.querySelector("#copy").addEventListener("click", copy);

// previous passwords list
document.getElementById("lastNums").innerHTML += password + "br />";

// Setting the default password length to "14" on the slider (does not affect the default option - just for show)
document.getElementById('length').innerHTML = "Length: 14";
// works!

// slider function for password length
document.getElementById("slider").oninput = function () {

  if (document.getElementById("slider").value > 0) {
    document.getElementById("length").innerHTML = "Length: " + document.getElementById("slider").value;
  }
  else {
    document.getElementById("length").innerHTML = "Length: 1";
  }
}




// Assignment Code
var generateBtn = document.querySelector("#generate");

function randomInt(min, max) {
  if (!max) {
    max = min
    min = 0
  }
  var rand = Math.random()
  return Math.floor(min*(1 - min) + rand*max)
}

function randomItem(list) {
  return list[randomInt(list.length)]
}


function generatePassword() {
  
  var userinput = window.prompt("How long do you want the password to be?")

  var passwordLength = parseInt(userinput)

  if (isNaN(passwordLength)) {
    window.alert("Thats not a number!")
    return
  } 

  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Password Length must be between 8 and 128 characters")
    return
  }

  var userNumbers = window.confirm("Would you want your password to have numbers?")
  var usersymbols = window.confirm("Would you want your password to have symbols?") 
  var userLowercase = window.confirm("Would you want your password to have lowercase letters?") 
  var userUppercase = window.confirm("Would you want your password to have upper case?") 

  var numberList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
  var symbolList = ["!", "@", "#", "$", "%", "^", "&", "*", "+", ":"]
  var lowercaseList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  var uppercaseList = []

  var optionlist = []

  for (var i = 0; i < lowercaseList.length; i++) {
    uppercaseList[i] = lowercaseList[i].toUpperCase()
  }

  if (userNumbers === true) {
    optionlist.push(numberList)
  }

  if (usersymbols === true) {
    optionlist.push(symbolList)
  }

  if (userLowercase === true) {
    optionlist.push(lowercaseList)
  }

  if (userUppercase === true) {
    optionlist.push(uppercaseList)
  }

  if (optionlist.length ===0) {
    optionlist.push(numberList)
  }

  var generatedPassword = ""

  for (var i = 0; i < passwordLength; i++) {
    var randomlist = randomItem(optionlist)
    var randomchar = randomItem(randomlist)
    generatedPassword += randomchar
  }
  
  return generatedPassword
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

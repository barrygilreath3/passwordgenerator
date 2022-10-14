// Variable Declarations and Assignments
// arrays - not presently using
var uppercaseletters = ["A", "B", "C", "D", "E", "F", "G", "H", "I","J", "K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowercaseletters = ["a", "b", "c", "d", "e", "f", "g", "h", "i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var symbols = ["!", '"', "#", "$", "%", "&", '(', ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "'", "`", "{", "}", "|", "~"];
var numbers = [0,1,2,3,4,5,6,7,8,9];
var possiblearray = [];

// declaration of variables that will be the user's answers to prompts
var characterLength;
var caps;
var NumericInclusion;
var SpecialCharacterInclusion;

function UppercaseQuestion () {
  caps = window.confirm("Do you want your password to include UPPERCASE characters?  Click 'OK' to confirm or 'CANCEL' for only lowercase.");
  
  if (caps) {
    possiblearray=possiblearray.concat(uppercaseletters);
  }

  LowercaseQuestion();
}

function LowercaseQuestion () {  
  var lowercaseInclusion = window.confirm("Do you want your password to include LOWERCASE characters? Click OK to confirm or Cancel to decline.");

  if (lowercaseInclusion) {
    possiblearray=possiblearray.concat(lowercaseletters);
  }

  NumberQuestion();
}

/* Question to ask about numbers*/
function NumberQuestion () {
  NumericInclusion = window.confirm("Do you want your password to include NUMBERS?  Click 'OK' to confirm or 'CANCEL'.");
  
  if (NumericInclusion) {
    possiblearray=possiblearray.concat(numbers);
  }

  SpecialCharacterQuestion();
}

// Question to ask about special characters
function SpecialCharacterQuestion () {
  SpecialCharacterInclusion = window.confirm("Do you want your password to include any SPECIAL CHARACTERS/SYMBOLS (ex: $&#!~, etc.)?  Click 'OK' to confirm or 'CANCEL'.");

  if (SpecialCharacterInclusion) {
    possiblearray=possiblearray.concat(symbols);
  }

  console.log(possiblearray);

  validate();

}

function validate () {
  if (!caps && !lowercaseInclusion && !SpecialCharacterInclusion && !NumericInclusion) {
    window.alert("Uh-oh!  Try again.  You must use one of the character types to generate a new password");
    console.log("The user must try again.");
    UppercaseQuestion();
  }

  randomizePassword();

}

function randomizePassword () {
  for (var i=0; i < characterLength; i++) {
    var index = Math.floor(Math.random()* possiblearray.length);
    var character = possiblearray[index];
    solution += character;
  }

  return solution;

}

// what the computer will spit out
var solution = ""


function generatePassword () {

  /* Question to ask about desired password length*/
    characterLength = parseInt(window.prompt("How many characters would you like your password to contain (range: 8-128 characters?"));
    if (!characterLength) {
      return;
    }
    if (characterLength > 128 || characterLength < 8) {
      window.alert("Please enter a number between 8-128.")
      return;
    }

    UppercaseQuestion();

  return;

}

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  generatePassword();

  // Assigns password to generatePassword the result of geneeratePassword function
  var password = randomizePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
// When the generate button is clicked, the "writePassword" function "listens" and registers
generateBtn.addEventListener("click", writePassword);
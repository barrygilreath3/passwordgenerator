// Hints for Homework 3

// function generatePassword () {
//   write logic of code here
//   whatever value is returned from thisfunction will be stored in the password variable

//    math.random "rps?"

//   one array for numbers
//   one array for special characters
//   one array for uppercase
//   one array for lowercase

//   How do I hold this data together to come up with a new password?
//   Hint:  look up what += means
//    it is when you are looking to add a value to an already existing variable.
//    


/*

```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
```

*/



// }

// Variable Declarations and Assignments
// arrays - not presently using
// var uppercaseletters = ["A", "B", "C", "D", "E", "F", "G", "H", "I","J", "K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
// var lowercaseletters = ["a", "b", "c", "d", "e", "f", "g", "h", "i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
// var symbols = [" ", "!", '"', "#", "$", "%", "&", '(', ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "'", "`", "{", "}", "|", "~"];


// var strings - uppcaseletters, lowercase, and symbols
var uppercaseletters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercaseletters = "abcdefghijklmnopqrstuvwxyz";
var symbols = " !;#$%&()*+,-./:;<>=?@[]^_'`{}|~"
var numbers = "0123456789"
var randomnumber = Math.floor(Math.random () *10) + 1;

console.log ("UPPERCASE Index - ", uppercaseletters.length, " letters: " ,uppercaseletters);
console.log ("lowercase 9ndex - ", lowercaseletters.length, "letters: ", lowercaseletters);
console.log ("Symbol Index - ", symbols.length, " possible symbols: ", symbols);
console.log ("Number Index - ", numbers.length, " possible numbers:", numbers);
console.log ("Random Number Generator- ", randomnumber);

function generatePassword () {

  /* Question to ask about desired password length*/
  function CharacterQuestion () {
    let characterlength = window.prompt("How many characters would you like your password to contain (range: 8-128 characters?");
     
    if (!characterlength) {
      return;
    }
    else if (characterlength > 128 || characterlength < 8) {
      window.alert("Please enter a number between 8-128.")
      CharacterQuestion();
    }
    else {
      // CharacterQuestion = CharacterQuestion.toArray();
      console.log(eval(characterlength.valueOf()))
      // Converting string to number
      console.log ("There are ", characterlength.valueOf(), "characters in this password.");
      UppercaseQuestion();
    }
  }

  CharacterQuestion ();

  /* Question to ask about uppercase*/
  function UppercaseQuestion () {
    let caps = window.confirm("Do you want your password to include UPPERCASE characters?  Click 'OK' to confirm or 'CANCEL' for only lowercase.");
    
    if (caps) {
      console.log ("There should be UPPERCASE letters in this password.", uppercaseletters);
    }
    else {
      console.log ("No lowercase letters should be included.");
    }

    NumberQuestion();
  }
  
  /* Question to ask about numbers*/
  function NumberQuestion () {
    let NumericInclusion = window.confirm("Do you want your password to include NUMBERS?  Click 'OK' to confirm or 'CANCEL'.");
    
    if (NumericInclusion) {
      console.log ("There should be numbers in this password.");
    }
    else {
      console.log ("Numbers should not be included.");
    }

    SpecialCharacterQuestion ();
  }

  /* Question to ask about special characters*/
  function SpecialCharacterQuestion () {
    let SpecialCharacterInclusion = window.confirm("Do you want your password to include any SPECIAL CHARACTERS/SYMBOLS (ex: $&#!~, etc.)?  Click 'OK' to confirm or 'CANCEL'.");

    if (SpecialCharacterInclusion) {
        console.log ("Special characters should be included in this password.", symbols);
    } else {
        console.log ("No symbols or special characters should not be included.");
        validate ();
      }
  }

  // at least one character type should be selected
  function validate () {
    if (!UppercaseQuestion.caps && !SpecialCharacterQuestion.SpecialCharacterInclusion && !NumberQuestion.NumericInclusion) {
    window.alert("Uh-oh!  Try again.  You must use one of the character types to generate a new password");
    console.log("Form recycled due to all cancels.");
    UppercaseQuestion();
    } else {
      console.log ("The user data was submitted succesfully.");
      stringitalltogether();
    }
  }
  
  function stringitalltogether () {
    if (UppercaseQuestion && NumberQuestion && SpecialCharacterQuestion) {
      console.log("All true.");
    }
    else {
      console.log("One of these is false");
    }
  }
  
  //   This is where I will add it all together
  // How do I hold this data together to come up with a new password?
  //   Hint:  look up what += means
  //   it is when you are looking to add a value to an already existing variable.

  // for (let i = 0; i < characterlength.valueOf(); i++) {
    
  //   password = [Math.floor(Math.random() * words.length)];
    
  //   uppercaseletters
  //   lowercaseletters
  //   symbols
  //   number
  // }

  // var testing = Math.floor(Math.random() * uppercaseletters.length);
  
  // console.log (uppercaseletters.length);

  // // var computerChoice = options[index];


}
// 

// THEN a password is generated that matches the selected criteria is either displayed in an alert or written to the page




// Assignment Code
// Me:  This code assigns a variable called 'generateBtn' to the #generate class of HTML [i.e. the generate button]
//      Will need to refer to variable "generateBtn" later
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  // Assigns password to generatePassword the result of geneeratePassword function
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
// When the generate button is clicked, the "writePassword" function "listens" and registers
generateBtn.addEventListener("click", writePassword);
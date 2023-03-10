// Assignment Code
var generateBtn = document.querySelector("#generate");

// Set the default password length to 8
var NumOfChar = 8;
var charcount = 0;
var pwLength  = 0;
let  newpw = "";
// Write password to the #password input
function writePassword() {
     
    generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = "";
    passwordText.value = newpw;
    console.log("here" + newpw);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var selection = {
    // Properties are made up of key-value pairs
    lower: ["abcdefghijklmnopqrstuvwxyz"],

    upper: ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"],
 
    Numb: [0123456789] ,
   
    SpecChar: ["!@#$%^&*()"]
  };
  
// Arrays of options for random characters for passwords
var chartype = ["Upper","Lower","SpecChar","Numb"];

function generatePassword() {
  // Ask user for their choice
  var pwLength = window.prompt("Choose a password length between 8 and 128:");
  var userSel = "";
  var userSel2 = "";
 
  // If user pressed Cancel, immediately end function
  if (!pwLength) {
    return;
  }
  // check to see how many characters,if the user did NOT enter a number then ask them to try again
  else if (isNaN(pwLength))  {
    window.alert("You did not select a numeric value. Please try again." + NumOfChar);
  }
  else {
  NumOfChar = pwLength;
    // check to see how many characters if it is not between 8 and 128 then ask them to try again

    if (NumOfChar < 8)  {
        window.alert("You selected an invalid number. Please try again, selecting a value between 8 and 128." + NumOfChar);
    }
    else if (NumOfChar > 128)  {
        window.alert("You selected an invalid number. Please try again, selecting a value between 8 and 128." + NumOfChar);
    }
    else {
  // check what types of characters they want to include, and start creating a list of those characters to include that we will randomly select from when we generate the password- these will be 'usable' characters for generating the password 

    lcconfirm = window.confirm("Do you want to include lower case?");
   //if they indicated they want lowercase, add the set of lowercase letters to the global variable
    if (lcconfirm) { userSel = selection.lower; }
//if they indicated they want uppercase, add the set of uppercase letters to the global variable
    ucconfirm = window.confirm("Do you want to include upper case?");
   
    if (ucconfirm) {  userSel = (userSel + selection.upper);  }
  //if they indicated they want numbers, add the set of numbers (0-9) to the global variable
 
    numconfirm = window.confirm("Do you want to include numbers?");

    if (numconfirm) {  userSel = (userSel + selection.Numb)};
  //if they indicated they want special characters, add the set of spec chars to the global variable
 
    scconfirm = window.confirm("Do you want to include special characters?");
    if (scconfirm) {  userSel = (userSel + selection.SpecChar)};
    console.log(userSel,userSel.length);
    ;

    //clear out any old password  value stored in the global variable
    newpw = "";
    //now execute this loop based on the number of characters entered by the user to append characters to build the password using the list of usable characters we created from the user inputs
    for (var i = 0; i < NumOfChar; i++) { 
        
        var index = Math.floor(Math.random() * chartype.length);
        var choice = chartype[index];
        var index2 = Math.floor(Math.random() * userSel.length);
        var randchar = userSel.substring(index2,index2+1);
        // console.log(randchar);
       newpw = newpw.concat(randchar);
         console.log(newpw);
        // console.log(index2,randchar);

    }

    }
}
}

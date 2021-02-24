// Assignment Code
var generateBtn = document.querySelector("#generate");

function keys() {
  

var upperCase =[ 'A', 'B', 'C', 'D', 'E', 'F','G','H','I','J','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'] ;
var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var numbers = ['0','1','2','3','4','5','6','7','8','9']
var specialChar = ['!','#','$','%','&','(',')','*','+','-','.','/',':',';','<','=','>','?','@','[','^','_','`','{','|','}','~']

}
//Steps To Do
//Create Arrays 
//Creeate a function that will showcase your prompts and options
// // // example 
function Testing_PromptTs(){
  //this prompt will allow the user to determine the length of their password
  var length = parseInt (
    prompt("How many characters do you want to have in your password")
  )
  //check to assure the length is more than 8 
    if(length < 8 || length > 128){
      alert("Password must be longer than 8 but less than 128 characters!");
      return;
    }
 //less than 128 
    /*if (lenth > 128) {
      alert('Password must be less than 128')
      return;
    }*/
 
var lowerCaseLetter = confirm(
  'Do you want lower case letters?'
  
)
if (lowerCaseLetter===false) {
  alert('Must have a lower case letter');
  
}
  //and is a number
  var numbers = confirm(' Do you want numbers?')
  if(numbers ===false)
  alert('Must have a Number!')

  //create next prompt or qestion
  var upperCaseLetter = confirm(
    "Do you want upper case letters?"
  ) 
  if (upperCaseLetter === false) {
    alert('Must have a uppercase letter!')
    
  }

// special key question
  var specialChar = confirm('Do you want special keys')
  if (specialChar=== false) {
      alert('must have a Special Keys!')
  }
  
  
  //include a conditional statement witin the Testing_Prompt method -> the conditional sould check if the user 
// // has included in special characters (i.e the arrays)

if(upperCaseLetter === false && lowerCaseLetter === false && specialChar ===false && numbers) {
  alert("Must select at least one");
  return;
}


//Grab the options selected by user

var ClietnSelections = {
  length: length,
  upperCaseLetter: upperCaseLetter,
  lowerCaseLetter: lowerCaseLetter,
  specialChar: specialChar,
  numbers: numbers

}
}
Testing_PromptTs();


//randomize the users choice 
//Math.floor() && Math.random() - 
//place the results inside of a variable
function Randomize (arr) {
  var randomize = Math.floor(Math.random()* keys.length);
var randomResults = keys[randomize];

return Randomize;

}


function CreatePasword (uppercase, lowerCase, numbers, specialChar) {
   //execute the Prompts
  var ClientOptions = Testing_PromptTs;

  
 
  //create store results
  var result = []
  //create a var that will include possible options
  var possibleOptions = [];


  //guranteed - these are the options that were picked based on the options available
  var forSureOption = [];

  //Create a condtional for all possible outcomes
  if(ClientOptions.upperCaseLetter){
    possibleOptions = possibleOptions.concat(upperCase);
    forSureOption.push(Randomize(upperCase));
  }



  //loop through all data from the forSureOptions
for ( i= 0; i < length; i++) {
  const element = randomResults(keys);
  
}
  return CreatePasword;
}
/*CreatePasword();
  //join the results
  return result.join("");*/

  /*function generatePassword(uppercase, lowercase, numbers, specialChar, length){
    let generatedPassword = "";

    const typesCount = uppercase + lowercase + numbers + specialChar;

    //console.log(typesCount);

    const typesArr = [{uppercase}, {lowercase}, {numbers}, {specialChar}].filter(ClietnSelections=> Object.values(ClietnSelections)[0]);

    if(typesCount === 0) {
        return '';
    }

    for(let i=0; i<length; i+=typesCount) {
        typesArr.forEach(type => {
            const funcName = Object.keys(type)[0];
            generatedPassword += randomFunc[funcName]();
        });
    }

    const password = generatedPassword.slice(0, length);


    return generatePassword;
}*/

  





// Write password to the #password input
function writePassword() {
 // var password = generatePassword();
 var password = Randomize();
  var passwordText = document.querySelector("#password");

   passwordText.value = password;
return writePassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
//i think i need a function for submit
//generateBtn.addEventListener('click', generate)
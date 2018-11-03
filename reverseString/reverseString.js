const reverseString = function(phrase) {
	/*1. Create an array with letter from the phrase
		2. Create an empty resulting string	  
	  3. Use loop to get from the end to start of the array
	  4. In every iteration of the array push each letter to the end of the resulting string
	  5. Return resulting string*/

	  let letters = phrase.split("");
	  let reversedString = '';

	  for(let i=letters.length-1; i>=0; i--) {
	  	reversedString += letters[i];
	  }

	  return reversedString;

}

module.exports = reverseString

const reverseString = function(phrase) {

	  let letters = phrase.split("");
	  let reversedString = '';

	  for(let i=letters.length-1; i>=0; i--) {
	  	reversedString += letters[i];
	  }

	  return reversedString;

}

module.exports = reverseString

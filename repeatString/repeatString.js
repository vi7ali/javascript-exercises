const repeatString = function(word, times) {
	
	repeatingString = '';

	if(times<0) {
		repeatingString = 'ERROR';
	}
	for(let i=0;i<times;i++) {
		repeatingString += word;
	}

	return repeatingString;
}

module.exports = repeatString

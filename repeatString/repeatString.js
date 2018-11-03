const repeatString = function(repeatingString, numberOfTimes) {
	
	let tempString = repeatingString;
	if(numberOfTimes>0) {
		for(let i=0;i<numberOfTimes-1;i++) {
			repeatingString = repeatingString+tempString;
		}
	}
	else if(numberOfTimes<0)	{
		repeatingString = 'ERROR';
	}
	else {
		repeatingString='';
	}

	return repeatingString;
}

module.exports = repeatString

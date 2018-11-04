const sumAll = function(startNumber, endNumber) {
	let sum = 0;
	if (startNumber>endNumber) {
		let temp = startNumber;
		startNumber = endNumber;
		endNumber = temp;
	}

	if(startNumber<0 || endNumber<0) {
		return 'ERROR';
	}

	if(typeof startNumber!=='number' || typeof endNumber!=='number') {
		return 'ERROR';
	}

	for (let i=startNumber; i<=endNumber; i++) {
		sum+=i;
	}

	return sum;

}

module.exports = sumAll

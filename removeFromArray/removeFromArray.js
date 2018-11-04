const removeFromArray = function() {
	let args = [...arguments];
	let input = args[0];

	for(let i=1;i<args.length;i++) {
		for (let j=0; j<input.length; j++) {
			if(input[j]==args[i]) {
				input.splice(j, 1);
			}
		}		
	}
	return input;
}

module.exports = removeFromArray

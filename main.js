function perform() {
	var param1 = perform.arguments[0];
	var param2 = perform.arguments[1];

	var result = param2.call(null, param1);
	this.then = function (param2) {
		return perform(result, param2)
	};

	return this
}

perform(null, function() {
	var param = 1;
	console.log(param); // 1
	return param;
})
	.then(function(param) { // param === 1
		console.log(++param); // 2
		return param;
	})
	.then(function(param) { // param === 2
		console.log(++param); // 3
		return param ;
	});
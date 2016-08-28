(function() {
	var isValidNumber = function(valuess) {
		var numberFormats = [
			new RegExp(/^(\d*)+$/), // 132654987
			new RegExp(/^\d{1,3}(\,\d{2,3})*(\.\d*)?$/), // 132,13,12,123.32
			new RegExp(/^\d{1,3}(\.\d{2,3})*(\,\d*)?$/) // 213.321.321,321
		]
		var result = false;
		for (var i = 0; i < formats.length; i++) {
			result = values.reduce(function(previous, current) {
				return previous && formats[i].test(current);
			}, true);
			if (result) {
				break;
			}
		}
		return result;
	}

	var isValidDateFormat = function(values) {
		var formats = [
			new RegExp(/^[A-Za-z]* \d{1,2}\, \d{4}$/),		//March 21, 2012
			new RegExp(/^\d{1,2}-[A-z][a-z]{2}-\d{4}$/),	//12-Aug-1990
			new RegExp(/^\d{1,2}\/[A-z][a-z]{2}\/\d{4}$/),	//12/Aug/1991
			new RegExp(/^\d{1,2}\/\d{1,2}\/\d{4}$/),		//12/08/1991
		];
		var result = true;
		for (var i = 0; i < formats.length; i++) {
			result = values.reduce(function(previous, current) {
				return previous && formats[i].test(current);
			}, true);
			if (result) {
				break;
			}
		}
		return result;
	}
})();
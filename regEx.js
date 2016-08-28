(function() {
	isValidNumber = function(valuess) {
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
})();
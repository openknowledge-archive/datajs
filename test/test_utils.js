module('utils');

test('formatNumber', function() {
	var testset = [
		[9000, '9k'],
		[9000000, '9m'],
		[9000000000, '9bn'],
		[-9000, '-9k'],
		[-9000000, '-9m'],
	];
	for(var i in testset) {
		equals(OpenSpending.Utils.formatAmount(testset[i][0]), testset[i][1]);
	}
});

test('formatNumberWithCommas', function() {
	var testset = [
		[9000, '9,000'],
		[9000000, '9,000,000'],
		[9000000000, '9,000,000,000'],
		[-9000, '-9,000'],
		[-9000000, '-9,000,000'],
	];
	for(var i in testset) {
		equals(OpenSpending.Utils.formatAmountWithCommas(testset[i][0]), testset[i][1]);
	}
	var testset = [
		[9000, '9,000.00'],
		[-9000, '-9,000.00'],
	];
	for(var i in testset) {
		equals(OpenSpending.Utils.formatAmountWithCommas(testset[i][0], 2), testset[i][1]);
	}
});


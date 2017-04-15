
let tests = 0;
let passes = 0;

module.exports = {
	testr,
	suite,
	report
};

function testr(testStr, testFn) {
	tests++;
	try {
		testFn();
		passes++;
	} catch(err) {
		console.log(`[testr] Error in test: [${testStr}]: ${err}`);
	}
}

function suite(suiteName, suiteFn) {
	suiteFn();
	report();
}

function report() {
	console.log(`Passed ${passes} of ${tests} tests`);
}


// Practicing functional JS after John's workshop!

// Is this a pure function?
// ========================================================

function savingsIncrease(weeks) {
	var originalBalance = 5000;
	var savingsRate = 200;
	var newBalance = originalBalance + savingsRate * weeks;
	//console.log(newBalance);
}
savingsIncrease(52);


// What about this one?!?
// ========================================================
function savingsIncrease(originalBalance, savingsRate, weeks) {
	var newBalance = originalBalance + savingsRate * weeks;
	//console.log(newBalance);
}
savingsIncrease(5000, 200, 52);


// What about this one?!?
// ========================================================
function savingsIncrease(originalBalance, savingsRate, weeks) {
	return originalBalance + savingsRate * weeks;
}

//console.log(savingsIncrease(5000, 200, 52));
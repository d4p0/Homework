function getInputValueFromId (idName) {
	var inputObject = document.getElementById(idName);
	var inputValue = inputObject.value;
	return inputValue;




function sumUpTwoNumbers(firstNumber, secondNumber = 0) {
	var result = Number(firstNumber) + Number(secondNumber);
	return result;
}


function writeTextToElementById (textToInsert = '', idName) {
	//var textToInsert = sumUpTwoNumbers(29, 2);
	document.getElementById(idName).innerHTML = textToInsert;
}

function writeTextToConsole(TextToConsole = 'Failed to write to console'){
	console.log(TextToConsole);
}



/* function mainFlow {
	1. gautu skaiciu reiksmes.
	2. sudeti tuos skaicius
	3. irasyti tuos skaicius i main-content
	4. i console irasyti sekmes pranesima.

} */
function mainFlow() {
	var firstInputValue = getInputValueFromId('first-number');
	var secondInputValue = getInputValueFromId('second-number');
	
	var sumUpResult = sumUpTwoNumbers(firstInputValue, secondInputValue);

	 writeTextToElementById(sumUpResult, 'sum-up-result');
	
	writeTextToConsole('Our result saved succesfully');
}
	

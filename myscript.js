function calculate(){
	//debugger;		//if you want to stop the code for debugging in chrome dev tools/console
	var frontLine = 45;
	var newCasePrice = 0;
	var casePrice;
	var unitPrice = 0;
	var buy = parseInt(document.getElementById('number1-input').value);
	var get = parseInt(document.getElementById('number2-input').value);

	if(buy >= 2 && buy <= 6){
		casePrice = 41;
	}
	else if (buy > 6){
		casePrice = 38;
	}
	else{
		casePrice = frontLine;
	}

	newCasePrice = (buy * casePrice)/(buy + get);

	unitPrice = newCasePrice/12;

	document.getElementById('case-price-span').textContent = casePrice;

	document.getElementById('new-case-price-span').textContent = newCasePrice; 

	document.getElementById('unit-price-span').textContent = unitPrice;
}
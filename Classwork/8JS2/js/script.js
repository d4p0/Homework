/* sukurkite kintamaji auksto ivedimui. 2. kintamaui priskirti prompt 3. gauta rezultata ivesti i paragrafa.*/

var floorNumberFromPrompt, counter;
var maxFloortoLive = 100;
var namePromptValue = '';
var isNameTest = false;
var disallowWord = 'test';
//floorNumberFromPrompt = prompt('In which floor You love?', '1');


/* jeigu ivestas aukstas yra maziau 0 ir daugiau 100, vel ismesti prompt, kol ives tinkama skaiciu */

while (floorNumberFromPrompt < 0 || floorNumberFromPrompt > 100) {
	
	//floorNumberFromPrompt=prompt('In which floor do you live?');
	
	if (Number.isInteger(floorNumberFromPrompt)) {
	console.log('Prompt value >> ' + floorNumberFromPrompt);
	document.getElementsByClassName('in-which-floor-user-live')[0].innerHTML = floorNumberFromPrompt;
		break;
	
	}
}

counter = 0; // 0
counter++; // 1
counter = counter +1 // 2
counter--; //1
--counter; //0

for (counter = 10; counter > 0; counter--) {
	console.log(counter);
	
	(counter === 8) ? console.log('last') : '' ;
}

/*sukurti nauja prompta. Ivesti varda. Jei vardas trumpesnis nei 4 sym	bols ismesti alert ('ivesk pilna vard') jeigu zmogus ivede varda 'test' ismesti alert ('ivesk savo varda); */

namePromptValue = prompt('Please enter Your name');

if (isNameLenghtenough) {
	alert('ivesk pilna varda');
}

indexofNameTest = namePromptValue.indexOf(disallowWord);
(indexOfNameTest > -1)? isNameTest = true : '' ;

if (isNameTest) {
	alert('ivesk savo tikra varda');
}


document.getElementById('short-description').innerHTML = '<u>Just some text inserted with javascript</u>';



let popupBtn = document.querySelector('.heading_form_white');
let popupWrap = document.querySelector('.index_popup_cont');
let childSum = document.getElementById('childSum');
let childMinus = document.getElementById('childMinus');
let childPlus = document.getElementById('childPlus');
let childCounter = Number(childSum.value);

function showHidden() {
	event.preventDefault();
	popupWrap.classList.toggle('visually-hidden');
}


popupBtn.addEventListener('click', showHidden);

let calendarBtn = document.querySelectorAll('.calendar');
let adultSum = document.getElementById('adultSum');
let adultPlus = document.getElementById('adultPlus');
let adultMinus = document.getElementById('adultMinus');
let adultCounter = 2;

adultPlus.onclick = function() {
	adultCounter = adultCounter + 1;
	adultSum.value = adultCounter;
}

adultMinus.onclick = function() {
	if (adultCounter > 0) {
		adultCounter = adultCounter - 1;
	} else {
		adultCounter = 0;
	}
	adultSum.value = adultCounter;
}

childPlus.onclick = function() {
		childCounter++;
		childSum.value = childCounter;
}

childMinus.onclick = function() {
	if (childCounter > 0) {
		childCounter--;
	} else {
		childCounter = 0
	};
	childSum.value = childCounter;
}



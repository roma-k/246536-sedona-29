let popupBtn = document.querySelector('.heading_form_white');
let popupWrap = document.querySelector('.index_popup_cont');
let indexForm = document.querySelector('.popup_form');
let childSum = document.getElementById('childSum');
let childMinus = document.getElementById('childMinus');
let childPlus = document.getElementById('childPlus');
let childCounter = Number(childSum.value);


popupBtn.addEventListener('click', function(evt) {
	evt.preventDefault();
	popupWrap.classList.toggle('visually-hidden');
	popupWrap.classList.toggle('modal-open');
});

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


//   ===== map =====

ymaps.ready(init);
function init() {
	var myMap = new ymaps.Map("map", {
		center: [34.869497, -111.760186],
		zoom: 10
	});
	myMap.controls.remove('zoomControl');
	myMap.controls.remove('geolocationControl');
	myMap.controls.remove('searchControl');
	myMap.controls.remove('trafficControl');
	myMap.controls.remove('typeSelector');
	myMap.controls.remove('fullscreenControl');
	myMap.controls.remove('zoomControl');
	myMap.controls.remove('rulerControl');
	


var myGeoObject = new ymaps.GeoObject({
    geometry: {
        type: "Point", 
        coordinates: [34.869497, -111.760186]
    }
});

myMap.geoObjects.add(myGeoObject); 


};



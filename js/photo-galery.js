const photoGalery = document.getElementById("photoGalery");
const fullImg     = document.getElementById('full_img');
const backGround  = document.getElementById('background');

document.addEventListener('scroll', Dell);
backGround.addEventListener('click', Dell);

photoGalery.addEventListener('click', function (evt) {
    if (evt.target.tagName == 'IMG') {
        backGround.style.visibility = 'visible';
        backGround.style.top = window.pageYOffset + 'px';
        fullImg.src = evt.target.src;
    }
});

function Dell() {
    backGround.style.visibility = 'hidden';
    fullImg.src = 'img/checkbox-off.svg';

}
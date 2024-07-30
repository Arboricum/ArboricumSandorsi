//mainDivVar, textDiv dichiarata in index.html



function pageContatti() {
document.body.addEventListener("webkitAnimationEnd", chngBckGrnd2);
document.body.addEventListener("animationEnd", chngBckGrnd2);
document.body.classList.add('anBody4');
mainDivVar[0].style.display = 'none';
contDiv[0].style.display = 'block';
clearAltMenu();
clearSuon();
change_my_url('contatti');
imgAlt[3].classList.add('imgMenuAltVis');
altMenuDiv[0].style.display = 'block';
}

function chngBckGrnd2() {
document.body.classList.remove('anBody4');
document.body.classList.remove('body2');
document.body.classList.remove('body3');
document.body.classList.remove('body4');
document.body.classList.remove('body6');
document.body.classList.add('body5');
document.body.removeEventListener("webkitAnimationEnd", chngBckGrnd2);
document.body.removeEventListener("animationend", chngBckGrnd2);
}

function pageContatti2() {
clearLibro();
clearMusSub();
clearCont();
clearArbo();
change_my_url('contatti');
setTimeout (function() {contDiv[0].style.display = 'block';
                       document.body.addEventListener("webkitAnimationEnd", chngBckGrnd2);
					   document.body.addEventListener("animationEnd", chngBckGrnd2);
                       document.body.classList.add('anBody4');}, 100);
mainDivVar[0].style.display = 'none';
clearAltMenu();
clearSuon();
imgAlt[3].classList.add('imgMenuAltVis');
altMenuDiv[0].style.display = 'block';
}

function clearCont() {
contDiv[0].style.display = 'none';
}
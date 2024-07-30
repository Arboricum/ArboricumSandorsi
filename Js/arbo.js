function pageArbo() {
document.body.addEventListener("webkitAnimationEnd", chngBckGrnd3);
document.body.addEventListener("animationEnd", chngBckGrnd3);
document.body.classList.add('anBody5');
mainDivVar[0].style.display = 'none';
arboDiv[0].style.display = 'block';
clearAltMenu();
clearSuon();
change_my_url('presentazione');
imgAlt[4].classList.add('imgMenuAltVis');
altMenuDiv[0].style.display = 'block';
}

function chngBckGrnd3() {
document.body.classList.remove('anBody5');
document.body.classList.remove('body2');
document.body.classList.remove('body3');
document.body.classList.remove('body4');
document.body.classList.remove('body5');
document.body.classList.add('body6');
document.body.removeEventListener("webkitAnimationEnd", chngBckGrnd3);
document.body.removeEventListener("animationend", chngBckGrnd3);
}

function pageArbo2() {
clearLibro();
clearMusSub();
clearCont();
clearArbo();
change_my_url('presentazione');
setTimeout (function() {arboDiv[0].style.display = 'block';
                       document.body.addEventListener("webkitAnimationEnd", chngBckGrnd3);
					   document.body.addEventListener("animationEnd", chngBckGrnd3);
                       document.body.classList.add('anBody5');}, 100);
mainDivVar[0].style.display = 'none';
clearAltMenu();
clearSuon();
imgAlt[4].classList.add('imgMenuAltVis');
altMenuDiv[0].style.display = 'block';
}

function clearArbo() {
arboDiv[0].style.display = 'none';
}
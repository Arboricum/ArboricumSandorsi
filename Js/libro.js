

function pageLibro() {
document.body.addEventListener("webkitAnimationEnd", chngBckGrnd1);
document.body.addEventListener("animationEnd", chngBckGrnd1);
document.body.classList.add('anBody3');	
mainDivVar[0].style.display = 'none';
libroDiv[0].style.display = 'block';
clearAltMenu();
clearSuon();
change_my_url('libri');
imgAlt[2].classList.add('imgMenuAltVis');
altMenuDiv[0].style.display = 'block';
}
function chngBckGrnd1() {
document.body.classList.remove('anBody3');
document.body.classList.remove('body2');
document.body.classList.remove('body3');
document.body.classList.remove('body5');
document.body.classList.remove('body6');
document.body.classList.add('body4');
document.body.removeEventListener("webkitAnimationEnd", chngBckGrnd1);
document.body.removeEventListener("animationend", chngBckGrnd1);
}
function pageLibro2() {
clearLibro();
clearMusSub();
clearCont();
clearArbo();
change_my_url('libri');
setTimeout (function() {libroDiv[0].style.display = 'block';
                       document.body.addEventListener("webkitAnimationEnd", chngBckGrnd1);
					   document.body.addEventListener("animationEnd", chngBckGrnd1);
                       document.body.classList.add('anBody3');}, 100);
mainDivVar[0].style.display = 'none';
 for (i = 0; i < tit.length; i++) {
	 tit[i].style.display = 'block';
	 
 }
libroDiv[0].style.display = 'block';
clearAltMenu();
clearSuon();
imgAlt[2].classList.add('imgMenuAltVis');
altMenuDiv[0].style.display = 'block';
}

function clearLibro() {
libroDiv[0].style.display = 'none';
document.getElementById('sone').style.display = 'none';
}
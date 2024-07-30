

function pagePiano() {
document.body.addEventListener("webkitAnimationEnd", chngBckGrnd);
document.body.addEventListener("animationEnd", chngBckGrnd);
document.body.classList.add('anBody2');
mainDivVar[0].style.display = 'none';
pianoDiv[0].style.display = 'block';
clearAltMenu();
clearSuon();
change_my_url('musica');
imgAlt[1].classList.add('imgMenuAltVis');
altMenuDiv[0].style.display = 'block';

musSub[0].addEventListener('click', radioOpen);
musSub[1].addEventListener('click', tvOpen);
musSub[2].addEventListener('click', spartOpen);
musSub[3].addEventListener('click', cellOpen);
//document.getElementById('test').addEventListener('click', tvOpen);
}

function chngBckGrnd() {
document.body.classList.remove('anBody2');
document.body.classList.remove('body2');
document.body.classList.remove('body4');
document.body.classList.remove('body5');
document.body.classList.remove('body6');
document.body.classList.add('body3');
document.body.removeEventListener("webkitAnimationEnd", chngBckGrnd);
document.body.removeEventListener("animationend", chngBckGrnd);
}

function pagePiano2() {
clearMusSub();
clearLibro();
clearCont();
clearArbo();
pianoDiv[0].style.display = 'none';
setTimeout (function() {pianoDiv[0].style.display = 'block';
                       document.body.addEventListener("webkitAnimationEnd", chngBckGrnd);
					   document.body.addEventListener("animationEnd", chngBckGrnd);
                       document.body.classList.add('anBody2');}, 100);
mainDivVar[0].style.display = 'none';
//pianoDiv[0].style.display = 'block';
clearAltMenu();
clearSuon();
change_my_url('musica');
imgAlt[1].classList.add('imgMenuAltVis');
altMenuDiv[0].style.display = 'block';
musSub[0].addEventListener('click', radioOpen);
musSub[1].addEventListener('click', tvOpen);
musSub[2].addEventListener('click', spartOpen);
musSub[3].addEventListener('click', cellOpen);

//document.getElementById('test').addEventListener('click', tvOpen);
}

function radioOpen() {
	clearMusSub2();
	clearSuon();
	change_my_url('musica/audio');
	document.getElementsByClassName('radioDiv')[0].style.display = 'block';
var i = 0;
 for (i = 0; i < musSub.length; i++) {
	 musSub[i].classList.remove('.imgMenu');
 musSub[i].classList.add('imgMusSubMenu');
 console.log('menoradio');
 }
 radio2();
}

function tvOpen() {
	clearMusSub2();
	clearSuon();
	change_my_url('musica/video');
	document.getElementsByClassName('tvDiv')[0].style.display = 'block';
var i = 0;
 for (i = 0; i < musSub.length; i++) {
	 musSub[i].classList.remove('.imgMenu');
 musSub[i].classList.add('imgMusSubMenu');
 console.log('menotv');
 }
 pl1();
}

function spartOpen() {
	clearMusSub2();
	clearSuon();
	change_my_url('musica/spartiti');
	document.getElementsByClassName('spartitiDiv')[0].style.display = 'block';
var i = 0;
 for (i = 0; i < musSub.length; i++) {
	 musSub[i].classList.remove('.imgMenu');
 musSub[i].classList.add('imgMusSubMenu');
 console.log('menotv');
 }
}

function cellOpen() {
	clearMusSub2();
	clearSuon();
	change_my_url('musica/suonerie');
	createSuonPage();
	document.getElementsByClassName('cellDiv')[0].style.display = 'block';
var i = 0;
 for (i = 0; i < musSub.length; i++) {
	 musSub[i].classList.remove('.imgMenu');
 musSub[i].classList.add('imgMusSubMenu');
 console.log('menotv');
 }
var t = 0;
  for (t = 0; t < extM.length; t++) {
  extM[t].addEventListener('click', altM);
  }
var s = 0;
 for (s = 0; s < imgPlay.length; s++) {
 imgPlay[s].addEventListener('click', playSuon);
 }
console.log(imgPlay[0]);
}

function altM() {
var x = event.target;
var y = document.getElementById(x.id);
y.nextElementSibling.style.display = 'block';
y.removeEventListener('click', altM);
y.addEventListener('click', function() {
  this.nextElementSibling.style.display = 'none';
  this.removeAttribute('onclick');
  this.addEventListener('click', altM);
  })
}

function clearSuon() {
	var i = 0;
	for (i = 0; i < suonerie.length; i++) {
	suonerie[i].style.display = 'none';	
	}
}

 //class = imgPlay ->imgPlay = document.getElementsByClassName('imgPlay')
function playSuon() {
var xx = event.target;
var yy = xx.previousElementSibling;
yy.play();
xx.src = 'stop.png';
var i = 0;
 for (i = 0; i < imgPlay.length; i++) {
 imgPlay[i].removeEventListener('click', playSuon);
 }
xx.addEventListener('click', function () {yy.pause(); 
                                         xx.src = 'play.png'; 
										 yy.load();
										  var i = 0;
                                          for (i = 0; i < imgPlay.length; i++) {
										  imgPlay[i].addEventListener('click', playSuon);
										  }
										 });
yy.addEventListener('pause', function () {xx.src = 'play.png';
	                                      var i = 0;
                                          for (i = 0; i < imgPlay.length; i++) {
										  imgPlay[i].addEventListener('click', playSuon);
										  }
										});
}


function clearMusSub() {
document.getElementsByClassName('radioDiv')[0].style.display = 'none';
document.getElementsByClassName('tvDiv')[0].style.display = 'none';	
document.getElementsByClassName('spartitiDiv')[0].style.display = 'none';
document.getElementsByClassName('cellDiv')[0].style.display = 'none';
pianoDiv[0].style.display = 'none';
//pianoDiv[0].style.width = '1050px';
	var i = 0;
 for (i = 0; i < musSub.length; i++) {
musSub[i].classList.remove('imgMusSubMenu');
musSub[i].classList.add('imgMenu');
 }
}

function clearMusSub2() {
document.getElementsByClassName('radioDiv')[0].style.display = 'none';
document.getElementsByClassName('tvDiv')[0].style.display = 'none';	
document.getElementsByClassName('spartitiDiv')[0].style.display = 'none';
document.getElementsByClassName('cellDiv')[0].style.display = 'none';
}



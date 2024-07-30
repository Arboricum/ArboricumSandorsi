
let params;//controllano la query dell'url
var page;
/*
page = ''; -> primo load, sta su landing
page = home; -> load successivi, va su home
page = piano
page = audio (radio)
page = video
page = spartiti
page = suonerie
page = libro
page = sonetti
page = contatti
page = arbo
*/
//bottoni iniziali:
var a;
var tbtn1;
var tbtn2;
var tbtn1txt;
var tbtn2txt;
var tbtn1Img;
var tbtn2Img;

function startPage() {
//controlla se la landing è già stata caricata una volta
params = new URLSearchParams(document.location.search);
page = params.get('page');
console.log(page);
 if (page == 'home') {
 //se landing caricata
 setTimeout (hideLand2, 200);
 console.log('h2');
 } else if (page == '' || page == null) {
 //se landing NON già caricata
 tbtn1 = document.createElement('button');
 tbtn2 = document.createElement('button');
 tbtn1txt = document.createTextNode("ENTRA");
 tbtn2txt = document.createTextNode("ENTRA");
 tbtn1Img = document.createElement('img');
 tbtn1Img.setAttribute('alt', 'sound on');
 tbtn1Img.setAttribute('src', 's_on2.png');
 tbtn1Img.classList.add('imgBtn');
 tbtn2Img = document.createElement('img');
 tbtn2Img.setAttribute('alt', 'sound off');
 tbtn2Img.setAttribute('src', 's_off.png');
 tbtn2Img.classList.add('imgBtn');
 tbtn1.appendChild(tbtn1txt);
 tbtn2.appendChild(tbtn2txt);
 tbtn1.appendChild(tbtn1Img);
 tbtn2.appendChild(tbtn2Img);
 tbtn1.classList.add("btn1");
 tbtn1.classList.add("buttonIni");
 tbtn2.classList.add("btn2");
 tbtn2.classList.add("buttonIni");
 document.body.appendChild(tbtn1);
 document.body.appendChild(tbtn2);
 a = document.getElementsByClassName('buttonIni');
 lstnclick();
 } else if (page == 'musica') {
	 mainDiv();
	 pagePiano();
 } else if (page == 'musica/audio') {
	 mainDiv();
	 pagePiano2();
	 radioOpen();
 } else if (page == 'musica/video') {
	 mainDiv();
	 pagePiano2();
	 tvOpen();
 } else if (page == 'musica/spartiti') {
	 mainDiv();
	 pagePiano2();
	 spartOpen();
 } else if (page == 'musica/suonerie') {
	 mainDiv();
	 pagePiano2();
	 cellOpen();
 } else if (page == 'libri') {
	 mainDiv();
	 pageLibro2();
 } else if (page == 'libri/sonetti') {
	 mainDiv();
	 pageLibro2();
	 hideTit();
 } else if (page == 'contatti') {
	 mainDiv();
	 pageContatti2();
 } else if (page == 'presentazione') {
	 mainDiv();
	 pageArbo2();
 }
}

//se landing NON già caricata
function lstnclick() {
a[0].addEventListener('click',link1);
a[1].addEventListener('click',link2);
console.log('iniziato');
aud1.load();
}

//se landing NON già caricata parte audio
function link1() {
hideLand();
audioStart();
}

//se landing NON già caricata NON parte audio
function link2() {
audioStop();
hideLand();
}

//con landing
function hideLand() {
a[0].style.display = 'none';
a[1].style.display = 'none';
a[0].removeEventListener('click',link1);
a[1].removeEventListener('click',link2);
document.body.addEventListener("webkitAnimationEnd", mainDiv);
document.body.addEventListener("animationend", mainDiv);
document.body.classList.add('anBody');
}

//senza landing
function hideLand2() {
document.body.addEventListener("webkitAnimationEnd", mainDiv);
document.body.addEventListener("animationend", mainDiv);
document.body.classList.add('anBody');
console.log('fine animazione');

}

var pageLinks = document.getElementsByClassName('imgMenu1');



function mainDiv() {

document.body.classList.remove('anBody');
document.body.classList.remove('body1');
document.body.classList.add('body2');
document.body.removeEventListener("webkitAnimationEnd", mainDiv);
document.body.removeEventListener("animationend", mainDiv);

document.getElementById('main').style.display = 'block';
audioStop();
change_my_url('home');
pageLinks[0].addEventListener('click',pagePiano);
pageLinks[1].addEventListener('click', pageLibro);
pageLinks[2].addEventListener('click', pageContatti);
pageLinks[3].addEventListener('click', pageArbo);


document.getElementsByClassName('imgMenuAlt')[0].addEventListener('click', function() {setTimeout(startPage2, 1000);});
document.getElementsByClassName('imgMenuAlt')[1].addEventListener('click', pagePiano2);
document.getElementsByClassName('imgMenuAlt')[2].addEventListener('click', pageLibro2);
document.getElementsByClassName('imgMenuAlt')[3].addEventListener('click', pageContatti2);
document.getElementsByClassName('imgMenuAlt')[4].addEventListener('click', pageArbo2);
}

var stateObj = { foo: "bar" }; 
function change_my_url(page) { 
history.pushState(stateObj, "page 2", "?page="+page); 
} 

function startPage2() {
console.log('immagine');
document.body.classList.remove('body2');
document.body.classList.remove('body3');
document.body.classList.remove('body4');
document.body.classList.remove('body5');
document.body.classList.remove('body6');
document.body.classList.add('body1');
document.getElementById('main').style.display = 'none';
clearMusSub();
clearAltMenu();
clearSuon();
mainDivVar[0].style.display = 'block';
contDiv[0].style.display = 'none';
pianoDiv[0].style.display = 'none';
clearArbo();
clearLibro();
altMenuDiv[0].style.display = 'none';
change_my_url('home');
startPage();
}

function clearAltMenu() {
	console.log('clear alt menu');
var i = 0;
 for (i = 0; i < imgAlt.length; i++) {
	 imgAlt[i].classList.remove('imgMenuAltVis');
 }
}


//fa partire l'audio
function audioStart() {
audioBtn.innerHTML = 'Disattiva musica<br> di sottofondo';
audioBtn.removeEventListener('click', audioStart);
audioBtn.addEventListener('click', audioStop);
aud1.play();
aud1.addEventListener('pause', audioStart);
}
//ferma l'audio
function audioStop() {
audioBtn.innerHTML = 'Attiva musica<br> di sottofondo';
audioBtn.removeEventListener('click', audioStop);
audioBtn.addEventListener('click', audioStart);
aud1.pause();
aud1.load();
}

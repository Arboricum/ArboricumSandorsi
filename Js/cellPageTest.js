import {soundList} from "./suonerieData.js";

const drin1 = soundList["Drin 1"].map((sound) => (
  `<div style="margin-top:12px">
    <span>
      <p class="suonerie">${sound.name}
        <audio><source src=${sound.src} type="audio/mpeg"></audio>
        <img src="play.png" class="imgPlay">
        <a href=${sound.src} download class="downL">Download</a>
      </p>
    </span>
  </div>`
)).join('');

const drin2 = soundList["Drin 2"].map((sound) => (
  `<div style="margin-top:12px">
    <span>
      <p class="suonerie">${sound.name}
        <audio><source src=${sound.src} type="audio/mpeg"></audio>
        <img src="play.png" class="imgPlay">
        <a href=${sound.src} download class="downL">Download</a>
      </p>
    </span>
  </div>`
)).join('');

const breve1 = soundList["Breve 1"].map((sound) => (
  `<div style="margin-top:12px">
    <span>
      <p class="suonerie">${sound.name}
        <audio><source src=${sound.src} type="audio/mpeg"></audio>
        <img src="play.png" class="imgPlay">
        <a href=${sound.src} download class="downL">Download</a>
      </p>
    </span>
  </div>`
)).join('');

const breve2 = soundList["Breve 2"].map((sound) => (
  `<div style="margin-top:12px">
    <span>
      <p class="suonerie">${sound.name}
        <audio><source src=${sound.src} type="audio/mpeg"></audio>
        <img src="play.png" class="imgPlay">
        <a href=${sound.src} download class="downL">Download</a>
      </p>
    </span>
  </div>`
)).join('');

const sms1 = soundList["Sms 1"].map((sound) => (
  `<div style="margin-top:12px">
    <span>
      <p class="suonerie">${sound.name}
        <audio><source src=${sound.src} type="audio/mpeg"></audio>
        <img src="play.png" class="imgPlay">
        <a href=${sound.src} download class="downL">Download</a>
      </p>
    </span>
  </div>`
)).join('');

const sms2 = soundList["Sms 2"].map((sound) => (
  `<div style="margin-top:12px">
    <span>
      <p class="suonerie">${sound.name}
        <audio><source src=${sound.src} type="audio/mpeg"></audio>
        <img src="play.png" class="imgPlay">
        <a href=${sound.src} download class="downL">Download</a>
      </p>
    </span>
  </div>`
)).join('');

const sample = soundList["Sample"].map((sound) => (
  `<div style="margin-top:12px">
    <span>
      <p class="suonerie">${sound.name}
        <audio><source src=${sound.src} type="audio/mpeg"></audio>
        <img src="play.png" class="imgPlay">
        <a href=${sound.src} download class="downL">Download</a>
      </p>
    </span>
  </div>`
)).join('');

const space = soundList["Space"].map((sound) => (
  `<div style="margin-top:12px">
    <span>
      <p class="suonerie">${sound.name}
        <audio><source src=${sound.src} type="audio/mpeg"></audio>
        <img src="play.png" class="imgPlay">
        <a href=${sound.src} download class="downL">Download</a>
      </p>
    </span>
  </div>`
)).join('');

const ambient = soundList["Ambient"].map((sound) => (
  `<div style="margin-top:12px">
    <span>
      <p class="suonerie">${sound.name}
        <audio><source src=${sound.src} type="audio/mpeg"></audio>
        <img src="play.png" class="imgPlay">
        <a href=${sound.src} download class="downL">Download</a>
      </p>
    </span>
  </div>`
)).join('');

function createSuonPage() {
  document.getElementsByClassName('cellDiv')[0].innerHTML = `
  <h2 id = "top22"><i>Suonerie per telefono</i></h2><br>
  <p class="titMain" id="m2">Drin 1</p>
  <div class="suon2" style="display:none;width:300px">
    ${drin1}
  </div>
  <p class="titMain" id="m3">Drin 2</p>
  <div class="suon2" style="display:none;width:300px">
    ${drin2}
  </div>
  <p class="titMain" id="m4">Breve 1</p>
  <div class="suon2" style="display:none;width:300px">
    ${breve1}
  </div>
  <p class="titMain" id="m5">Breve 2</p>
  <div class="suon2" style="display:none;width:300px">
    ${breve2}
  </div>
  <p class="titMain" id="m6">Sms 1</p>
  <div class="suon2" style="display:none;width:300px">
    ${sms1}
  </div>
  <p class="titMain" id="m7">Sms 2</p>
  <div class="suon2" style="display:none;width:300px">
    ${sms2}
  </div>
  <p class="titMain" id="m8">Samples</p>
  <div class="suon2" style="display:none;width:300px">
    ${sample}
  </div>
  <p class="titMain" id="m9">Space 1</p>
  <div class="suon2" style="display:none;width:300px">
    ${space}
  </div>
  <p class="titMain" id="m1">Ambient</p>
  <div class="suon2" style="display:none;width:300px">
    ${ambient}
  </div>
  <div style="text-align:center">
    <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
      <input type="hidden" name="cmd" value="_s-xclick" />
      <input type="hidden" name="hosted_button_id" value="6MS3G64Q7B2D8" />
      <input type="image" src="https://www.paypalobjects.com/it_IT/IT/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Fai una donazione con il pulsante PayPal" />
      \<img alt="" border="0" src="https://www.paypal.com/it_IT/i/scr/pixel.gif" width="1" height="1" />
    </form>
  </div><br><br><br>;
  `
}

window.createSuonPage = createSuonPage;
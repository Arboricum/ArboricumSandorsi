import soundList from "./suonerieData";

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
))

function createSuonPage() {
  document.getElementsByClassName('cellDiv')[0].innerHTML = `
  <h2 id = "top22"><i>Suonerie per telefono</i></h2><br><br><br>
  <p class="titMain" id="m2">Drin 1</p>
  <div class="suon2" style="display:none;width:300px">
    ${drin1}
  </div>
  `
}
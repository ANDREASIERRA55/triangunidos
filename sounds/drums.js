let drums = [
  {
    name: "crash",
    id: "crash",
    src: "./sounds/drums/crash.wav",
    type: "audio/wav",
    key: "A",
  },
  {
    name: "hiHat",
    id: "hiHat",
    src: "./sounds/drums/hi-hat.wav",
    type: "audio/wav",
    key: "S",
  },
  {
    name: "kalimba",
    id: "kalimba-b",
    src: "./sounds/kalimba/kalimba-b.mp3",
    type: "audio/mp3",
    key: "B",
  },
];

const crash = document.getElementById("crash");
const hiHat = document.getElementById("hiHat");
const kalimba = document.getElementById("kalimba-b");
const drumsElement = document.getElementById("drums");
let drumsDiv = "";

{
  /* <div onclick="playAudio(crash)" style="cursor: pointer;">
<audio id="crash">
  <source src="./sounds/drums/crash.wav" type="audio/wav">
</audio>
<p>A</p>
</div> */
}

for (let i = 0; i < drums.length; i++) {
  const drum = drums[i];
  drumsDiv += `<div onclick="playAudio(${drum.name})" >
  <audio id="${drum.id}">
    <source src="${drum.src}" type="${drum.type}">
  </audio>
  <p>${drum.key}</p>
  </div>`;
}
drumsElement.innerHTML = drumsDiv;
function playAudio(note) {
  note.play();
}

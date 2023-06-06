let drums = [
  {
    id: "crash",
    src: "./sounds/drums/crash.wav",
    type: "audio/wav",
    key: "A",
  },
  {
    id: "hihat",
    src: "./sounds/drums/hi-hat.wav",
    type: "audio/wav",
    key: "S",
  },
  {
    id: "roll",
    src: "./sounds/drums/roll.wav",
    type: "audio/wav",
    key: "D",
  },
  {
    id: "tom",
    src: "./sounds/drums/tom.wav",
    type: "audio/wav",
    key: "F",
  },
  {
    id: "tom1",
    src: "./sounds/drums/tom1.wav",
    type: "audio/wav",
    key: "G",
  },
  {
    id: "tom2",
    src: "./sounds/drums/tom2.wav",
    type: "audio/wav",
    key: "H",
  },
  {
    id: "tom3",
    src: "./sounds/drums/tom3.wav",
    type: "audio/wav",
    key: "J",
  },
  {
    id: "tom4",
    src: "./sounds/drums/tom4.wav",
    type: "audio/wav",
    key: "k",
  }
];
let kalimbas = [
  {
    id: "kalimbab",
    src: "./sounds/kalimbas/kalimba-b.mp3",
    type: "audio/mp3",
    key: "B",
  },
  {
    id: "kalimbac",
    src: "./sounds/kalimbas/kalimba-c.mp3",
    type: "audio/mp3",
    key: "C",
  },
  {
    id: "kalimbacoma",
    src: "./sounds/kalimbas/kalimba-coma.mp3",
    type: "audio/mp3",
    key: ",",
  },
  {
    id: "kalimbam",
    src: "./sounds/kalimbas/kalimba-m.mp3",
    type: "audio/mp3",
    key: "M",
  },
  {
    id: "kalimban",
    src: "./sounds/kalimbas/kalimba-n.mp3",
    type: "audio/mp3",
    key: "N",
  },
  {
    id: "kalimbav",
    src: "./sounds/kalimbas/kalimba-v.mp3",
    type: "audio/mp3",
    key: "V",
  },
  {
    id: "kalimbax",
    src: "./sounds/kalimbas/kalimba-x.mp3",
    type: "audio/mp3",
    key: "X",
  },
  {
    id: "kalimbaz",
    src: "./sounds/kalimbas/kalimba-z.mp3",
    type: "audio/mp3",
    key: "Z"
  }
]
const drumsElement = document.getElementById("drums");
let drumsDiv = "";
const kalimbaElement = document.getElementById("kalimbas");
let kalimbasDiv = "";

for (let i = 0; i < drums.length; i++) {
  const drum = drums[i];
  drumsDiv += ` <div onclick="playAudio('${drum.id}')">
  <audio id="${drum.id}">
    <source src="${drum.src}" type="${drum.type}">
  </audio>
  <p>${drum.key}</p>
  </div>`;
}
for (let i = 0; i < kalimbas.length; i++) {
  const kalimba = kalimbas[i];
  kalimbasDiv += `<div onclick="playaudio('${kalimba.id}')">
  <audio id="${kalimba.id}">
    <source src="${kalimba.src}" type="${kalimba.type}">
  </audio>
  <p>${kalimba.key}</p>
  </div>`;
  
}

drumsElement.innerHTML = drumsDiv;
kalimbaElement.innerHTML = kalimbasDiv;



function playAudio(note) {
  const audio = document.getElementById(note);
  audio.play();
}




document.addEventListener("keydown", function (event) {
  const key = event.key.toUpperCase();
  const drum = drums.find((drum) => drum.key === key);
  if (drum) {
    playAudio(drum.id);
  }
});

document.addEventListener("keydown", function (event) {
  const key = event.key.toUpperCase();
  const kalimba = kalimbas.find((kalimba) => kalimba.key === key);
  if (kalimba) {
    playAudio(kalimba.id);
  }
});
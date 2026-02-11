const createButton = document.getElementById("createButton");
const gameSection = document.getElementById("gameSection");
//const missionButton = document.getElementById("missionButton");
const buildPlayer = document.getElementById("buildPLayer");
const division = document.getElementById("division");


createButton.addEventListener("click", function () {
  const playerName = document.getElementById("playerName");
  const playerSurname = document.getElementById("playerSurname");
  const myPlayer = new Gato(catName.value, catColor.value);
  
  buildPlayer.style.display="none";
  division.style.display="none";

  const texto = Gato.showData();

  gameSection.innerHTML = texto;
});


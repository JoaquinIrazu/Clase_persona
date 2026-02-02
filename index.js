const createButton = document.getElementById("createButton");
const gameSection = document.getElementById("gameSection");
//const missionButton = document.getElementById("missionButton");


createButton.addEventListener("click", function () {
  const catName = document.getElementById("catName");
  const catColor = document.getElementById("catColor");
  const miGato = new Gato(catName.value, catColor.value);

  const texto = miGato.showData();

  gameSection.innerHTML = texto;
});

/*missionButton.addEventListener("click", function(){
  const missions = ["Cazar ratones", "Parkour", "Cazar pajaros"];
const randomMission = Math.random()*missions.length;

gameSection.innerHTML = randomMission

que gaste energia; cazar, jugar, parkour
que recupere energia; desansar y comer
})*/

const createButton = document.getElementById("createButton");
const gameSection = document.getElementById("gameSection");
//const missionButton = document.getElementById("missionButton");
const buildCat = document.getElementById("buildCat");
const division = document.getElementById("division");


createButton.addEventListener("click", function () {
  const catName = document.getElementById("catName");
  const catColor = document.getElementById("catColor");
  const miGato = new Gato(catName.value, catColor.value);
  
  buildCat.style.display="none";
  division.style.display="none";
  
  
});

/*missionButton.addEventListener("click", function(){
  const missions = ["Cazar ratones", "Parkour", "Cazar pajaros"];
const randomMission = Math.random()*missions.length;

gameSection.innerHTML = randomMission

que gaste energia; cazar, jugar, parkour
que recupere energia; desansar y comer
})*/

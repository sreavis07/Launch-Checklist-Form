// Write your JavaScript code here!
window.addEventListener("load", function () {

   
   let form = document.querySelector("form");
   form.addEventListener("submit", function (event) {
      event.preventDefault()
      let pilotNameInput = document.getElementById("pilotName");
      let coPilotNameInput = document.querySelector("input[name=copilotName]");
      let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
      let cargoMassInput = document.querySelector("input[name=cargoMass]");
      let faultyItems = document.getElementById("faultyItems");
      let launchStatus = document.getElementById("launchStatus");
      let pilotStatus = document.getElementById("pilotStatus");
      let copilotStatus = document.getElementById("copilotStatus");
      let fuelStatus = document.getElementById("fuelStatus");
      let cargoStatus = document.getElementById("cargoStatus");

      if (pilotNameInput.value === "" || coPilotNameInput.value === "" || fuelLevelInput.value === "" || cargoMassInput.value === "") {
         alert("All fields are required!");
      } else if (Number(pilotNameInput.value) || Number(coPilotNameInput.value) || isNaN(Number(fuelLevelInput.value)) || isNaN(Number(cargoMassInput.value))) {
         // let flightArray = [pilotNameInput, coPilotNameInput, fuelLevelInput, cargoMassInput];
         // for(let i = 0;i < flightArray.length; i++) {
         //    if {flightArray[i] === Number(pil)}
         alert(`"Please enter correct type. ${pilotNameInput.name.toUpperCase()}/${coPilotNameInput.name.toUpperCase()} should only use letters!
            ${fuelLevelInput.name.toUpperCase()}/${cargoMassInput.name.toUpperCase()} should only be numbers."`)
      } else alert("Required Information Received")

      if (fuelLevelInput.value < 10000) {

         faultyItems.style.visibility = "visible";
         // faultyItems.innerHTML = `
         // // <ol>
         // //      <li id="pilotStatus">${pilotNameInput.value} Ready</li>
         // //      <li id="copilotStatus">${copilotNameInput.value} Ready</li>
         // //      <li id="fuelStatus">Fuel Level ${fuelLevelInput.value}L too low. 10,000L required!</li>
         // //      <li id="cargoStatus">Cargo mass low enough for launch</li>
         // // </ol>
         // // `;

         pilotStatus.innerHTML = `${pilotNameInput.value.toUpperCase()} is Ready`;
         copilotStatus.innerHTML = `${coPilotNameInput.value.toUpperCase()} is Ready`;
         fuelStatus.innerHTML = `Fuel Level of ${fuelLevelInput.value}L too low. 10,000L required!`;
         launchStatus.style.color = "red";
         launchStatus.innerHTML = "Shuttle not ready for launch";

         event.preventDefault();
      } else if (cargoMassInput.value > 10000) {
         faultyItems.style.visibility = "visible";
         pilotStatus.innerHTML = `${pilotNameInput.value.toUpperCase()} is Ready`;
         copilotStatus.innerHTML = `${coPilotNameInput.value.toUpperCase()} is Ready`;
         cargoStatus.innerHTML = `Cargo Mass of ${cargoMassInput.value}kg is too high. 10,000kg or less required!`;
         launchStatus.style.color = "red";
         launchStatus.innerHTML = "Shuttle not ready for launch";

      } else {
         faultyItems.style.visibility = "visible";
         pilotStatus.innerHTML = `${pilotNameInput.value.toUpperCase()} is Ready`;
         copilotStatus.innerHTML = `${coPilotNameInput.value.toUpperCase()} is Ready`;
         launchStatus.style.color = "green";
         launchStatus.innerHTML = "Shuttle is ready for Launch!";
      }
      event.preventDefault();
      
   })

   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
      response.json().then(function (json) {
         let missionTarget = document.getElementById("missionTarget");
         missionTarget.innerHTML = `
         <h2>Mission Destination</h2>
            <ol>
            <li>Name: ${json[3].name}</li>
            <li>Diameter: ${json[3].diameter}</li>
            <li>Star: ${json[3].star}</li>
            <li>Distance from Earth: ${json[3].distance}</li>
            <li>Number of Moons: ${json[3].moons}</li>
            </ol>
         <img src="${json[3].image}">`;
                                             });
   });
})

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/

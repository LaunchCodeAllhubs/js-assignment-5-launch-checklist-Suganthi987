// Write your JavaScript code here!

window.addEventListener("load", function() {
    let formSubmit = document.getElementById("formSubmit");

    formSubmit.addEventListener("click",function(event){
        event.preventDefault();
        let pilotName = document.querySelector("input[name = pilotName]");
        let copilotName = document.querySelector("input[name = copilotName]");
        let fuelLevel = document.querySelector("input[name = fuelLevel]");
        let cargoMass = document.querySelector("input[name = cargoMass]");
        let list = document.getElementById("faultyItems"); `<div  id="faultyItems" data-testid="faultyItems">
        <ol>
            <li id="pilotStatus" data-testid="pilotStatus" >${pilotName} Ready</li>
            <li id="copilotStatus" data-testid="copilotStatus" >${copilotName} Ready</li>
            <li id="fuelStatus" data-testid="fuelStatus" >Fuel level ${fuelLevel}</li>
            <li id="cargoStatus" data-testid="cargoStatus" >Cargo mass ${cargoMass}</li>
        </ol>
    </div>`;
        if(pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === ""){
            alert("All fields required!");
            
        }
        else {
    formSubmission(document,list,pilotName.value,copilotName.value,fuelLevel.value,cargoMass.value);
    
        }
    });
   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   //listedPlanetsResponse.then(function (result) {

    //   listedPlanets = result;
    //   console.log(listedPlanets);
  // }).then(function () {
   //    console.log(listedPlanets);
        //Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
   //    let planet = pickPlanet();
   //    addDestinationInfo(document,listedPlanets[planet].name,listedPlanets[planet].diameter,listedPlanets[planet].star,listedPlanets[planet].distance,listedPlanets[planet].moons,listedPlanets[planet].image);


  // });
  //let listedPlanets;
  // Set listedPlanetsResponse equal to the value returned by calling myFetch()
  //let listedPlanetsResponse= myFetch();
  listedPlanetsResponse.then(function (result) {
      listedPlanets = result;
      console.log(listedPlanets);
  }).then(function () {
      console.log(listedPlanets);
      let planetIndex = pickPlanet(listedPlanets);
       addDestinationInfo(document, planetIndex.name, planetIndex.diameter, planetIndex.star, planetIndex.distance, planetIndex.moons, planetIndex.image);
      // Below this comment call the appropriate helper functions to pick a planet from the list of planets and add that information to your destination.
  })
  
});

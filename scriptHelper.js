
// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   const missionTarget = document.getElementById("missionTarget");
             missionTarget.innerHTML= `
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name:${name} </li>
                    <li>Diameter:${diameter} </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth:${distance} </li>
                    <li>Number of Moons:${moons} </li>
                </ol>
                <img src="${imageUrl}">`
   
}

function validateInput(testInput) {
    if (isNaN(testInput)){
            return "Is a string";
        }else{
        return "Is a number";
    
    
    }   
}


function formSubmission(document,list, pilot, copilot, fuelLevel, cargoLevel) {
    const launchStatusCheck = document.getElementById("launchStatusCheck");
    const faultyItems = document.getElementById("faultyItems");
    faultyItems.style.visibility = "visible";
    if (validateInput(pilot) === "Is a number"){ 
        launchStatusCheck.innerHTML = `
        <h2 id="launchStatus" data-testid="launchStatus">Awaiting Information Before Launch</h2>
            <ol>
                <li id="pilotStatus" data-testid="pilotStatus">${pilot} is not Ready</li>
                <li id="copilotStatus" data-testid="copilotStatus">${copilot} Ready</li>
                <li id="fuelStatus" data-testid="fuelStatus">Fuel level high enough for launch</li>
                <li id="cargoStatus" data-testid="cargoStatus">Cargo mass low enough for launch</li>
            </ol>`;

    }
    else if (validateInput(copilot) === "Is a number"){
        launchStatusCheck.innerHTML = 
        `<h2 id="launchStatus" data-testid="launchStatus">Awaiting Information Before Launch</h2>
            <ol>
                <li id="pilotStatus" data-testid="pilotStatus">${pilot} is Ready</li>
                <li id="copilotStatus" data-testid="copilotStatus">${copilot} is not Ready</li>
                <li id="fuelStatus" data-testid="fuelStatus">Fuel level high enough for launch</li>
                <li id="cargoStatus" data-testid="cargoStatus">Cargo mass low enough for launch</li>
            </ol>`;

    }
    else if (validateInput(fuelLevel) === "Is a string"){
       // alert("Invalid fuel Level!");
       launchStatusCheck.innerHTML = `
        <h2 id="launchStatus" data-testid="launchStatus">Awaiting Information Before Launch</h2>
            <ol>
                <li id="pilotStatus" data-testid="pilotStatus">${pilot} is Ready</li>
                <li id="copilotStatus" data-testid="copilotStatus">${copilot} is Ready</li>
                <li id="fuelStatus" data-testid="fuelStatus">FuelLevel invalid for launch</li>
                <li id="cargoStatus" data-testid="cargoStatus">Cargo mass low enough for launch</li>
            </ol>`;
    }
    else if(validateInput(cargoLevel) === "Is a string"){
        //alert("Invalid cargoLevel!");
        launchStatusCheck.innerHTML = `
        <h2 id="launchStatus" data-testid="launchStatus">Awaiting Information Before Launch</h2>
        
            <ol>
                <li id="pilotStatus" data-testid="pilotStatus">${pilot} is Ready</li>
                <li id="copilotStatus" data-testid="copilotStatus">${copilot} is Ready</li>
                <li id="fuelStatus" data-testid="fuelStatus">Fuel level high enough for launch</li>
                <li id="cargoStatus" data-testid="cargoStatus">Cargo mass invalid for launch</li>
            </ol>`;

    }
else{
    
if(fuelLevel<10000){
    launchStatusCheck.style.color = "red";
    launchStatusCheck.innerHTML = `
    <h2 id="launchStatus" data-testid="launchStatus" color ="red">Fuel level too low to launch!</h2>
    
        <ol>
            <li id="pilotStatus" data-testid="pilotStatus">${pilot} Ready</li>
            <li id="copilotStatus" data-testid="copilotStatus">${copilot} Ready</li>
            <li id="fuelStatus" data-testid="fuelStatus">Fuel level ${fuelLevel}</li>
            <li id="cargoStatus" data-testid="cargoStatus">Cargo mass low enough for launch</li>
        </ol>`;
}
else if(cargoLevel>10000){
    launchStatusCheck.style.color = "#C7254E";
    launchStatusCheck.innerHTML = `
    <h2 id="launchStatus" data-testid="launchStatus" color ="#C7254E">Cargo too heavy to launch!</h2>
    
        <ol>
            <li id="pilotStatus" data-testid="pilotStatus">${pilot} Ready</li>
            <li id="copilotStatus" data-testid="copilotStatus">${copilot} Ready</li>
            <li id="fuelStatus" data-testid="fuelStatus">Fuel level ${fuelLevel}</li>
            <li id="cargoStatus" data-testid="cargoStatus">Cargo mass ${cargoLevel}</li>
        </ol>`;
}
else{
    
    launchStatusCheck.style.color = "#419F6A";
    launchStatusCheck.innerHTML = `
    <h2 id="launchStatus" data-testid="launchStatus" color = "#419F6A">Cargo ready to launch!</h2>
        <ol>
            <li id="pilotStatus" data-testid="pilotStatus" >${pilot} Ready</li>
            <li id="copilotStatus" data-testid="copilotStatus" >${copilot} Ready</li>
            <li id="fuelStatus" data-testid="fuelStatus" >Fuel level ${fuelLevel}</li>
            <li id="cargoStatus" data-testid="cargoStatus" >Cargo mass ${cargoLevel}</li>
        </ol>`;

}
}
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {  
    response.json().then(function(data){
       let pickone = pickPlanet();
       addDestinationInfo(document,data[pickone].name,data[pickone].diameter,data[pickone].star,data[pickone].distance,data[pickone].moons,data[pickone].image);
    });
});
    
    return planetsReturned;
}

function pickPlanet() {
    
    return Math.round(Math.ceil( Math.random() *10));
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;

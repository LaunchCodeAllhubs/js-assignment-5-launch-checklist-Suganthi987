
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
            return "Not a Number";
        }else{
        return "Is a Number";
    
    
    }   
}


function formSubmission(document,list, pilot, copilot, fuelLevel, cargoLevel) {
    const launchStatusCheck = document.getElementById("launchStatusCheck");
    const faultyItems = document.getElementById("faultyItems");
    faultyItems.style.visibility = "visible";
    if (validateInput(pilot) === "Is a Number"){ 
        launchStatusCheck.innerHTML = `
        <h2 id="launchStatus" data-testid="launchStatus">Awaiting Information Before Launch</h2>
            <ol>
                <li id="pilotStatus" data-testid="pilotStatus">Pilot ${pilot} is not ready</li>
                <li id="copilotStatus" data-testid="copilotStatus">Co-pilot ${copilot} is ready</li>
                <li id="fuelStatus" data-testid="fuelStatus">Fuel level high enough for launch</li>
                <li id="cargoStatus" data-testid="cargoStatus">Cargo mass low enough for launch</li>
            </ol>`;

    }
    else if (validateInput(copilot) === "Is a Number"){
        launchStatusCheck.innerHTML = 
        `<h2 id="launchStatus" data-testid="launchStatus">Awaiting Information Before Launch</h2>
            <ol>
                <li id="pilotStatus" data-testid="pilotStatus">Pilot ${pilot} is ready</li>
                <li id="copilotStatus" data-testid="copilotStatus">Co-pilot ${copilot} is not ready</li>
                <li id="fuelStatus" data-testid="fuelStatus">Fuel level high enough for launch</li>
                <li id="cargoStatus" data-testid="cargoStatus">Cargo mass low enough for launch</li>
            </ol>`;

    }
    else if (validateInput(fuelLevel) === "Not a Number"){
       // alert("Invalid fuel Level!");
       launchStatusCheck.innerHTML = `
        <h2 id="launchStatus" data-testid="launchStatus">Awaiting Information Before Launch</h2>
            <ol>
                <li id="pilotStatus" data-testid="pilotStatus">Pilot ${pilot} is ready</li>
                <li id="copilotStatus" data-testid="copilotStatus">Co-pilot ${copilot} is ready</li>
                <li id="fuelStatus" data-testid="fuelStatus">FuelLevel invalid for launch</li>
                <li id="cargoStatus" data-testid="cargoStatus">Cargo mass low enough for launch</li>
            </ol>`;
    }
    else if(validateInput(cargoLevel) === "Not a Number"){
        //alert("Invalid cargoLevel!");
        launchStatusCheck.innerHTML = `
        <h2 id="launchStatus" data-testid="launchStatus">Shuttle Not Ready for Launch</h2>
        
            <ol>
                <li id="pilotStatus" data-testid="pilotStatus">Pilot ${pilot} is ready</li>
                <li id="copilotStatus" data-testid="copilotStatus">Co-pilot ${copilot} is ready</li>
                <li id="fuelStatus" data-testid="fuelStatus">Fuel level high enough for launch</li>
                <li id="cargoStatus" data-testid="cargoStatus">Cargo mass invalid for launch</li>
            </ol>`;

    }
else{
    
if(fuelLevel<10000){
    launchStatusCheck.style.color = "rgb(199, 37, 78)";
    launchStatusCheck.innerHTML = `
    <h2 id="launchStatus" data-testid="launchStatus" color ="rgb(199, 37, 78)">Shuttle Not Ready for Launch</h2>
    
        <ol>
            <li id="pilotStatus" data-testid="pilotStatus">Pilot ${pilot} is ready for launch</li>
            <li id="copilotStatus" data-testid="copilotStatus">Co-pilot ${copilot} is ready for launch</li>
            <li id="fuelStatus" data-testid="fuelStatus">Fuel level low for launch</li>
            <li id="cargoStatus" data-testid="cargoStatus">Cargo mass ${CargoLevel}</li>
        </ol>`;
}
else if(cargoLevel>10000){
    launchStatusCheck.style.color = "#C7254E";
    launchStatusCheck.innerHTML = `
    <h2 id="launchStatus" data-testid="launchStatus" color ="#C7254E">Cargo too heavy for launch</h2>
    
        <ol>
            <li id="pilotStatus" data-testid="pilotStatus">Pilot ${pilot} is ready</li>
            <li id="copilotStatus" data-testid="copilotStatus">Co-pilot ${copilot} is ready</li>
            <li id="fuelStatus" data-testid="fuelStatus">Fuel level ${fuelLevel}</li>
            <li id="cargoStatus" data-testid="cargoStatus">Cargo mass too heavy for launch</li>
        </ol>`;
}
else{
    
    launchStatusCheck.style.color = "#419F6A";
    launchStatusCheck.innerHTML = `
    <h2 id="launchStatus" data-testid="launchStatus" color = "#419F6A">Cargo ready to launch!</h2>
        <ol>
            <li id="pilotStatus" data-testid="pilotStatus" >Pilot ${pilot} is ready</li>
            <li id="copilotStatus" data-testid="copilotStatus" >Co-pilot ${copilot} is ready</li>
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

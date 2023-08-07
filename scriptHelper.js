
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
    if (validateInput(pilotNameInput.value) === 'Empty'|| validateInput(coPilotNameInput.value) === 'Empty'|| 
    validateInput(fuelLevelInput.value) === 'Empty'||validateInput(cargoMassInput.value) === 'Empty') {
        alert('All fields are required');
        launchStatus.innerHTML = 'Awaiting Information Before Launch';
        launchStatus.style.color = 'rgb(0, 0, 0)';
        list.style.visibility = 'hidden';
    }
      //check that fuelLevel and cargoLevel are numbers and pilot and co-pilot are strings
    else if (
        validateInput(fuelLevelInput.value) === 'Not a Number' || 
        validateInput(cargoMassInput.value) === 'Not a Number'||
        validateInput(pilotNameInput.value)==='Is a Number'||
        validateInput(coPilotNameInput.value)==='Is a Number') {
            alert(`Please enter text for names and numbers for fuel and cargo.`);
            launchStatus.innerHTML = 'Awaiting Information Before Launch';
            launchStatus.style.color = 'rgb(0, 0, 0)';
            list.style.visibility = 'hidden';
        }else{
        formSubmission(document,list,pilotNameInput.value,coPilotNameInput.value,fuelLevelInput.value,cargoMassInput.value);
        }
    }

    let list = document.getElementById("faultyItems");
    list.style.visibility='hidden';
    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");
    let launchStatus = document.getElementById("launchStatus");

    pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
    copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
    list.style.visibility = 'hidden';
    //    faultyItems.style.visibility = "visible";
//     if (validateInput(pilot) === "Is a Number"){ 
//         launchStatusCheck.innerHTML = `
//         <h2 id="launchStatus" data-testid="launchStatus">Awaiting Information Before Launch</h2>
//             <ol>
//                 <li id="pilotStatus" data-testid="pilotStatus">Pilot ${pilot} is not ready</li>
//                 <li id="copilotStatus" data-testid="copilotStatus">Co-pilot ${copilot} is ready</li>
//                 <li id="fuelStatus" data-testid="fuelStatus">Fuel level ${fuelLevel} high enough for launch</li>
//                 <li id="cargoStatus" data-testid="cargoStatus">Cargo mass ${cargoLevel} low enough for launch</li>
//             </ol>`;

//     }
//     else if (validateInput(copilot) === "Is a Number"){
//         launchStatusCheck.innerHTML = 
//         `<h2 id="launchStatus" data-testid="launchStatus">Awaiting Information Before Launch</h2>
//             <ol>
//                 <li id="pilotStatus" data-testid="pilotStatus">Pilot ${pilot} is ready</li>
//                 <li id="copilotStatus" data-testid="copilotStatus">Co-pilot ${copilot} is not ready</li>
//                 <li id="fuelStatus" data-testid="fuelStatus">Fuel level ${fuelLevel} high enough for launch</li>
//                 <li id="cargoStatus" data-testid="cargoStatus">Cargo mass ${cargoLevel} low enough for launch</li>
//             </ol>`;

//     }
//     else if (validateInput(fuelLevel) === "Not a Number"){
//        // alert("Invalid fuel Level!");
//        launchStatusCheck.innerHTML = `
//         <h2 id="launchStatus" data-testid="launchStatus">Awaiting Information Before Launch</h2>
//             <ol>
//                 <li id="pilotStatus" data-testid="pilotStatus">Pilot ${pilot} is ready</li>
//                 <li id="copilotStatus" data-testid="copilotStatus">Co-pilot ${copilot} is ready</li>
//                 <li id="fuelStatus" data-testid="fuelStatus">FuelLevel invalid for launch</li>
//                 <li id="cargoStatus" data-testid="cargoStatus">Cargo mass ${cargoLevel} low enough for launch</li>
//             </ol>`;
//     }
//     else if(validateInput(cargoLevel) === "Not a Number"){
//         //alert("Invalid cargoLevel!");
//         launchStatusCheck.innerHTML = `
//         <h2 id="launchStatus" data-testid="launchStatus">Awaiting Information Before Launch</h2>
        
//             <ol>
//                 <li id="pilotStatus" data-testid="pilotStatus">Pilot ${pilot} is ready</li>
//                 <li id="copilotStatus" data-testid="copilotStatus">Co-pilot ${copilot} is ready</li>
//                 <li id="fuelStatus" data-testid="fuelStatus">Fuel level ${fuelLevel}</li>
//                 <li id="cargoStatus" data-testid="cargoStatus">Cargo mass invalid for launch</li>
//             </ol>`;

//     }
// else{
    
// if(fuelLevel<10000){
//     launchStatusCheck.style.color = "rgb(199, 37, 78)";
//     launchStatusCheck.innerHTML = `
//     <h2 id="launchStatus" data-testid="launchStatus" color ="rgb(199, 37, 78)">Shuttle Not Ready for Launch</h2>
    
//         <ol>
//             <li id="pilotStatus" data-testid="pilotStatus">Pilot ${pilot} is ready for launch</li>
//             <li id="copilotStatus" data-testid="copilotStatus">Co-pilot ${copilot} is ready for launch</li>
//             <li id="fuelStatus" data-testid="fuelStatus">Fuel level low for launch</li>
//             <li id="cargoStatus" data-testid="cargoStatus">Cargo mass ${CargoLevel}</li>
//         </ol>`;
// }
// else if(cargoLevel>10000){
//     launchStatusCheck.style.color = "#C7254E";
//     launchStatusCheck.innerHTML = `
//     <h2 id="launchStatus" data-testid="launchStatus" color ="#C7254E">Shuttle Not Ready for launch</h2>
    
//         <ol>
//             <li id="pilotStatus" data-testid="pilotStatus">Pilot ${pilot} is ready</li>
//             <li id="copilotStatus" data-testid="copilotStatus">Co-pilot ${copilot} is ready</li>
//             <li id="fuelStatus" data-testid="fuelStatus">Fuel level ${fuelLevel}</li>
//             <li id="cargoStatus" data-testid="cargoStatus">Cargo mass too heavy for launch</li>
//         </ol>`;
// }
// else{
    
//     launchStatusCheck.style.color = "#419F6A";
//     launchStatusCheck.innerHTML = `
//     <h2 id="launchStatus" data-testid="launchStatus" color = "#419F6A">Cargo Ready for Launch!</h2>
//         <ol>
//             <li id="pilotStatus" data-testid="pilotStatus" >Pilot ${pilot} is ready</li>
//             <li id="copilotStatus" data-testid="copilotStatus" >Co-pilot ${copilot} is ready</li>
//             <li id="fuelStatus" data-testid="fuelStatus" >Fuel level ${fuelLevel}</li>
//             <li id="cargoStatus" data-testid="cargoStatus" >Cargo mass ${cargoLevel}</li>
//         </ol>`;

// }
// }


async function myFetch() {
    let planetsReturned;

     planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json()
});
//.then( function(response) {  
    // response.json().then(function(data){
    //    let pickone = pickPlanet();
    //    addDestinationInfo(document,data[pickone].name,data[pickone].diameter,data[pickone].star,data[pickone].distance,data[pickone].moons,data[pickone].image);
   // });
//});
    
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

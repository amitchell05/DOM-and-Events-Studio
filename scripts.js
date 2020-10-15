// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", function() {

    let takeoff = document.getElementById("takeoff");
    let landing = document.getElementById("landing");
    let missionAbort = document.getElementById("missionAbort");

    let flightStatus = document.getElementById("flightStatus");
    let shuttleBackground = document.getElementById("shuttleBackground");
    let spaceShuttleHeight = document.getElementById("spaceShuttleHeight");

    // let rocket = document.getElementById("rocket");

    takeoff.addEventListener("click", function() {
        let response = window.confirm("Are you sure the shuttle is ready for takeoff?");
        if (response) {
            flightStatus.innerHTML = 'Shuttle in flight.';
            shuttleBackground.style.background = 'blue';
            spaceShuttleHeight.innerHTML = Number(spaceShuttleHeight.innerHTML) + 10000; 
        }
    });

    landing.addEventListener("click", function() {
        window.alert("The shuttle is landing. Landing gear engaged.");
        flightStatus.innerHTML = 'The shuttle has landed.';
        shuttleBackground.style.background = 'green';
        spaceShuttleHeight.innerHTML = '0';
        // rocket.style.bottom = 0;
    });

    missionAbort.addEventListener("click", function() {
        let response = window.confirm("Are you sure you want to abort the mission?");
        if (response) {
            flightStatus.innerHTML = 'Mission aborted.';
            shuttleBackground.style.background = 'green';
            spaceShuttleHeight.innerHTML = '0';  
            // rocket.style.bottom = 0;  
        }
    });

});

// let rocket = document.getElementById("rocket");

// function down() {
//     let movement = parseInt(rocket.style.bottom) - 10 + 'px';
//     rocket.style.bottom = movement;
//     spaceShuttleHeight.innerHTML = Number(spaceShuttleHeight.innerHTML) - 10000; 
// }

// function up() {
//     let movement = parseInt(rocket.style.bottom) + 10 + 'px';
//     rocket.style.bottom = movement;
//     spaceShuttleHeight.innerHTML = Number(spaceShuttleHeight.innerHTML) + 10000; 
// }

// function right() {
//     let movement = parseInt(rocket.style.left) + 10 + 'px';
//     rocket.style.left = movement;
// }

// function left() {
//     let movement = parseInt(rocket.style.left) - 10 + 'px';
//     rocket.style.left = movement;
// }
window.addEventListener("load", function () {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function (response) {
        response.json().then(function (astronauts) {
            console.log(astronauts);
            document.getElementById('titleWithNumber').innerHTML += ` (${astronauts.length})`;
            astronauts.sort((a, b) => {
                return b.hoursInSpace - a.hoursInSpace;
                });

            //astronauts = mergeSort(astronauts);
            const div = document.getElementById("container");
            let i = 2;
            for (i = 0; i < astronauts.length; i++) {
                let astronautClass = "astronaut" + String(i + 1);
                // Add HTML that includes the JSON data for each astronaut
                div.innerHTML += `
<div class="astronaut" astronautClass="${astronautClass}">
   <div class="bio">
      <h3>${astronauts[i].firstName} ${astronauts[i].lastName}</h3>
      <ul>
         <li>Hours in space: ${astronauts[i].hoursInSpace}</li>
         <li>Active: <span class="${astronauts[i].active ? "active" : "inactive"}">${astronauts[i].active}</span>
         <li>Skills: ${astronauts[i].skills.join(", ")}</li>
      </ul>
   </div>
   <img class="avatar" src="${astronauts[i].picture}">
</div>

`;
            }
            
            div.innerHTML += `
<div class="bonusMissions">
    <h3>Bonus Missions</h3>
    <ol>
        <li>Display the astronauts sorted from most to least time in space. ✅</li>
        <li>Make the "Active: true" text green, for astronauts that are still active (active is true). ✅</li>
        <li>Add a count of astronauts to the page. ✅</li>
    </ol>
</div>
`;

        });
    });
}); 
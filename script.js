window.addEventListener("load", function () {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function (response) {
        response.json().then(function (astronauts) {
            console.log(astronauts);
            astronauts = mergeSort(astronauts);
            console.log(astronauts);
            const div = document.getElementById("container");
            let i = 2;
            for (i = 0; i < astronauts.length; i++) {
                let astronautClass = "astronaut" + String(i + 1);
                // Add HTML that includes the JSON data
                div.innerHTML += `
<div class="astronaut" astronautClass="${astronautClass}">
   <div class="bio">
      <h3>${astronauts[i].firstName} ${astronauts[i].lastName}</h3>
      <ul>
         <li>Hours in space: ${astronauts[i].hoursInSpace}</li>
         <li>Active: ${astronauts[i].active}</li>
         <li>Skills: ${astronauts[i].skills}</li>
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
        <li>Display the astronauts sorted from most to least time in space.</li>
        <li>Make the "Active: true" text green, for astronauts that are still active (active is true).</li>
        <li>Add a count of astronauts to the page.</li>
    </ol>
</div>
`;

        });
    });
});

function merge(left, right) {
    let arr = [];
    while (left.length && right.length) {
        if (left[0].hoursInSpace > right[0].hoursInSpace) {
            arr.push(left.shift());
        } else {
            arr.push(right.shift());
        }
    }

    return [...arr, ...left, ...right];
}

function mergeSort(array) {
    const half = array.length / 2;

    if (array.length < 2) {
        return array;
    }

    const left = array.splice(0, half);
    return merge(mergeSort(left), mergeSort(array));
}

// 

// 1. 
// 2. 
// 3. 
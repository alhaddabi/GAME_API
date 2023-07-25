// fetch("http://localhost:8080/api/v1/player")
//     .then((response) => { return response.json() })
//     .then((parsedResponse) => {
//         console.log(parsedResponse);
//         let lopObj = document.getElementById("lop");

//         parsedResponse.forEach(element => {
//             let newListItem = document.createElement("li");
//             newListItem.textContent = element.id + " -- " + element.name;
//             lopObj.appendChild(newListItem);
//         });
//     })


// let playerRegForm = document.getElementById("playerRegForm");
// playerRegForm.addEventListener("submit", (event) => {
//     event.preventDefault();

//     let PlayerID = document.getElementById("PlayerID").value;
//     let PlayerName = document.getElementById("PlayerName").value;

//     console.log(PlayerID);
//     console.log(PlayerName);

//     var myHeaders = new Headers();
//     myHeaders.append("Content-Type", "application/json");

//     var raw = JSON.stringify({
//         "id": PlayerID,
//         "name": PlayerName
//     });

//     var requestOptions = {
//         method: 'POST',
//         headers: myHeaders,
//         body: raw,
//         redirect: 'follow'
//     };

//     fetch("http://localhost:8080/api/v1/player", requestOptions)
//         .then(response => response.text())
//         .then(result => console.log(result))
//         .catch(error => console.log('error', error));

// });

// let playerUpForm = document.getElementById("playerUpForm");
// playerUpForm.addEventListener("submit", (event) => {
//     event.preventDefault();

//     let PlayerID = document.getElementById("PlayerID").value;
//     let PlayerName = document.getElementById("playerName").value;

//     console.log(PlayerID);
//     console.log(playerName);

//     var myHeaders = new Headers();
//     myHeaders.append("Content-Type", "application/json");

//     var raw = JSON.stringify({
//         "id": PlayerID,
//         "name": playerName
//     });

//     var requestOptions = {
//         method: 'PUT',
//         headers: myHeaders,
//         body: raw,
//         redirect: 'follow'
//     };

//     fetch("http://localhost:8080/api/v1/player/" + PlayerID, requestOptions)
//         .then(response => response.text())
//         .then(result => console.log(result))
//         .catch(error => console.log('error', error));

// });

// let playerDelForm = document.getElementById("playerDelForm");
// playerDelForm.addEventListener("submit", (event) => {
//     event.preventDefault();

//     let PlayerID = document.getElementById("PlayerID").value;
//     let playerName = document.getElementById("playerName").value;

//     console.log(PlayerID);
//     console.log(playerName);

//     var myHeaders = new Headers();
//     myHeaders.append("Content-Type", "application/json");

//     var raw = JSON.stringify({
//         "id": PlayerID,
//         "name": playerName
//     });

//     var requestOptions = {
//         method: 'DELETE',
//         headers: myHeaders,
//         body: raw,
//         redirect: 'follow'
//     };

//     fetch("http://localhost:8080/api/v1/player/" + PlayerID, requestOptions)
//         .then(response => response.text())
//         .then(result => console.log(result))
//         .catch(error => console.log('error', error));

// });








// // Function to fetch all players and display them on the page
// function fetchAndDisplayPlayers() {
//   fetch("http://localhost:8080/api/v1/player")
//       .then((response) => response.json())
//       .then((parsedResponse) => {
//           console.log(parsedResponse);
//           let playerCardsContainer = document.getElementById("player-cards-container");
//           playerCardsContainer.innerHTML = ""; // Clear the player cards
//           parsedResponse.forEach((element) => {
//               let playerCard = document.createElement("div");
//               playerCard.classList.add("col-md-4", "mb-3");
//               let cardContent = `
//                   <div class="card">
//                       <div class="card-body">
//                           <h5 class="card-title">${element.name}</h5>
//                           <p class="card-text">ID: ${element.id}</p>
//                           <button class="btn btn-primary btn-update" data-player-id="${element.id}" onclick="updateDataForId('${element.id}', '${element.name}')">Update</button>
//                           <button class="btn btn-danger btn-delete" data-player-id="${element.id}" onclick="deleteDataForId('${element.id}')">Delete</button>
//                       </div>
//                   </div>
//               `;
//               playerCard.innerHTML = cardContent;
//               playerCardsContainer.appendChild(playerCard);
//           });
//       })
//       .catch((error) => console.log("Error fetching players:", error));
// }

// // Function to add a new player
// function addPlayer(playerId, playerName) {
//   var myHeaders = new Headers();
//   myHeaders.append("Content-Type", "application/json");
//   var raw = JSON.stringify({
//       id: playerId,
//       name: playerName,
//   });
//   var requestOptions = {
//       method: "POST",
//       headers: myHeaders,
//       body: raw,
//       redirect: "follow",
//   };
//   fetch("http://localhost:8080/api/v1/player", requestOptions)
//       .then((response) => response.json())
//       .then((result) => {
//           console.log(result);
//           fetchAndDisplayPlayers(); // Fetch and display players again after adding
//       })
//       .catch((error) => console.log("Error adding player:", error));
// }

// // Function to handle the "Submit" button click
// function submitData() {
//   let playerId = document.getElementById("PlayerID").value;
//   let playerName = document.getElementById("PlayerName").value;
//   if (playerId !== "" && playerName !== "") {
//       addPlayer(playerId, playerName);
//   } else {
//       alert("Please enter both Player ID and Player Name.");
//   }
// }

// // Function to delete an existing player
// function deletePlayer(playerId) {
//   var myHeaders = new Headers();
//   myHeaders.append("Content-Type", "application/json");
//   var requestOptions = {
//       method: "DELETE",
//       headers: myHeaders,
//       redirect: "follow",
//   };
//   fetch(`http://localhost:8080/api/v1/player/${playerId}`, requestOptions)
//       .then((response) => response.json())
//       .then((result) => {
//           console.log(result);
//           fetchAndDisplayPlayers(); // Fetch and display players again after deleting
//       })
//       .catch((error) => console.log("Error deleting player:", error));
// }

// // Function to handle the "Delete" button click
// function deleteData() {
//   let playerId = prompt("Enter the ID of the player you want to delete:");
//   if (playerId !== null && playerId !== "") {
//       deletePlayer(playerId);
//   }
// }

// // Function to update an existing player
// function updatePlayer(playerId, playerName) {
//   var myHeaders = new Headers();
//   myHeaders.append("Content-Type", "application/json");
//   var raw = JSON.stringify({
//       id: playerId,
//       name: playerName,
//   });
//   var requestOptions = {
//       method: "PUT",
//       headers: myHeaders,
//       body: raw,
//       redirect: "follow",
//   };
//   fetch(`http://localhost:8080/api/v1/player/${playerId}`, requestOptions)
//       .then((response) => response.json())
//       .then((result) => {
//           console.log(result);
//           fetchAndDisplayPlayers(); // Fetch and display players again after updating
//       })
//       .catch((error) => console.log("Error updating player:", error));
// }

// // Function to handle the "Update" button click
// function updateData() {
//   let playerId = prompt("Enter the ID of the player you want to update:");
//   if (playerId !== null && playerId !== "") {
//       let playerName = prompt("Enter the updated player name:");
//       if (playerName !== null && playerName !== "") {
//           updatePlayer(playerId, playerName);
//       }
//   }
// }

// // Function to handle the "Update" button click for a specific ID
// function updateDataForId(playerId, playerName) {
//   let newPlayerName = prompt(`Enter the updated name for Player ID ${playerId}:`, playerName);
//   if (newPlayerName !== null && newPlayerName !== "") {
//       updatePlayer(playerId, newPlayerName);
//   }
// }

// // Function to handle the "Delete" button click for a specific ID
// function deleteDataForId(playerId) {
//   if (confirm(`Are you sure you want to delete Player ID ${playerId}?`)) {
//       deletePlayer(playerId);
//   }
// }

// // Fetch and display players initially
// fetchAndDisplayPlayers();


// Function to fetch and display players
function fetchAndDisplayPlayers() {
    fetch("http://localhost:8080/api/v1/player")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((parsedResponse) => {
        let playerCardsContainer = document.getElementById("player-cards-container");
        playerCardsContainer.innerHTML = ""; // Clear the player cards
        parsedResponse.forEach((element) => {
          let playerCard = document.createElement("div");
          playerCard.classList.add("col-md-4", "mb-3");
          let cardContent = `
              <div class="card">
                  <div class="card-body">
                      <h5 class="card-title">${element.name}</h5>
                      <p class="card-text">ID: ${element.id}</p>
                      <button class="btn btn-primary btn-update" data-player-id="${element.id}" onclick="updateDataForId('${element.id}', '${element.name}')" style="background-color: blue; color: white; padding: 10px 20px; font-size: 16px; border: none; border-radius: 5px; cursor: pointer;">Update</button>
                      <button class="btn btn-danger btn-delete" data-player-id="${element.id}" onclick="deleteDataForId('${element.id}')" style="background-color: red; color: white; padding: 10px 20px; font-size: 16px; border: none; border-radius: 5px; cursor: pointer;">Delete</button> 
                  </div>
              </div>
          `;
          playerCard.innerHTML = cardContent;
          playerCardsContainer.appendChild(playerCard);
        });
      })
      .catch((error) => console.log("Error fetching players:", error));
  }

// Function to add a new player
function addPlayer(playerId, playerName) {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({
      id: playerId,
      name: playerName,
    });
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    fetch("http://localhost:8080/api/v1/player", requestOptions)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error adding player");
        }
        return response.json();
      })
      .then((result) => {
        console.log(result);
        fetchAndDisplayPlayers(); // Fetch and display players again after adding
      })
      .catch((error) => console.log("Error adding player:", error));
  }

// Function to handle the "Submit" button click
function submitData() {
  let playerId = document.getElementById("PlayerID").value;
  let playerName = document.getElementById("PlayerName").value;
  if (playerId !== "" && playerName !== "") {
      addPlayer(playerId, playerName);
  } else {
      alert("Please enter both Player ID and Player Name.");
  }
}

// Function to delete an existing player
function deletePlayer(playerId) {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  var requestOptions = {
      method: "DELETE",
      headers: myHeaders,
      redirect: "follow",
  };
  fetch(`http://localhost:8080/api/v1/player/${playerId}`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
          console.log(result);
          fetchAndDisplayPlayers(); // Fetch and display players again after deleting
      })
      .catch((error) => console.log("Error deleting player:", error));
}

// Function to handle the "Delete" button click
function deleteData() {
  let playerId = prompt("Enter the ID of the player you want to delete:");
  if (playerId !== null && playerId !== "") {
      deletePlayer(playerId);
  }
}

// Function to update an existing player
function updatePlayer(playerId, playerName) {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  var raw = JSON.stringify({
      id: playerId,
      name: playerName,
  });
  var requestOptions = {
      method: "PUT",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
  };
  fetch(`http://localhost:8080/api/v1/player/${playerId}`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
          console.log(result);
          fetchAndDisplayPlayers(); // Fetch and display players again after updating
      })
      .catch((error) => console.log("Error updating player:", error));
}

// Function to handle the "Update" button click
function updateData() {
  let playerId = prompt("Enter the ID of the player you want to update:");
  if (playerId !== null && playerId !== "") {
      let playerName = prompt("Enter the updated player name:");
      if (playerName !== null && playerName !== "") {
          updatePlayer(playerId, playerName);
      }
  }
}

// Function to handle the "Update" button click for a specific ID
function updateDataForId(playerId, playerName) {
  let newPlayerName = prompt(`Enter the updated name for Player ID ${playerId}:`, playerName);
  if (newPlayerName !== null && newPlayerName !== "") {
      updatePlayer(playerId, newPlayerName);
  }
}

// Function to handle the "Delete" button click for a specific ID
function deleteDataForId(playerId) {
  if (confirm(`Are you sure you want to delete Player ID ${playerId}?`)) {
      deletePlayer(playerId);
  }
}

// Fetch and display players initially
fetchAndDisplayPlayers();
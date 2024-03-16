function readData() {
    const tableContainer = document.getElementById("attendance-table-container");
    tableContainer.innerHTML = ""; // Clear previous content
  
    const searchValue = document.getElementById("search").value.toLowerCase(); // Convert search value to lowercase for case-insensitive comparison
  
    firebase.database().ref("Member/").once("value")
      .then(function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
          // Retrieve data from each child node
          var eventData = childSnapshot.val();
  
          // Check if the attendance matches the search value
          if (eventData.attendanceV.toLowerCase() === searchValue) {
            // Create table row
            const row = document.createElement("tr");
  
            // Create and append table cells for each data attribute
            const eventCell = document.createElement("td");
            eventCell.textContent = eventData.eventsV;
            row.appendChild(eventCell);
  
            const dateCell = document.createElement("td");
            dateCell.textContent = eventData.dateV;
            row.appendChild(dateCell);
  
            const attendanceCell = document.createElement("td");
            attendanceCell.textContent = eventData.attendanceV;
            row.appendChild(attendanceCell);
  
            // Append the row to the table container
            tableContainer.appendChild(row);
          }
        });
      })
      .catch(function(error) {
        console.error("Error reading data from Firebase:", error);
      });
  }
  
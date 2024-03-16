var eventsV, dateV, attendanceV;

function readFom() {
  eventsV = document.getElementById("events").value;
  dateV = document.getElementById("date").value;
  attendanceV = document.getElementById("attendance").value;
  
  console.log(eventsV, dateV, attendanceV);
}

document.getElementById("submit").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("Member/" + eventsV)
    .set({
      eventsV: eventsV,
      dateV: dateV,
      attendanceV: attendanceV,
      
    })
    .then(function() {
      alert("Data Inserted");
      document.getElementById("events").value = "";
      document.getElementById("date").value = "";
      document.getElementById("attendance").value = "";
    })
    .catch(function(error) {
      console.error("Error writing to Firebase:", error);
    });
};

//Used to reference and change the HTML with the DOM.
//EventListener used for an event. Basically some sort of action I want to taake place.
document.getElementById("addCityForm").addEventListener('submit', event => {
    event.preventDefault();
  
    //The document.getElementById("cityInput").value allows for the new city to be added
    const city = document.getElementById("cityInput").value;
    const state = document.getElementById("stateInput").value;
  
    const tableBody = document.getElementById("cityTableBody");
    const rowCount = tableBody.rows.length + 1;
  //insertRow allows a new row to be created. The () is empty because i can pass any value added through it.
    const newRow = tableBody.insertRow();
    newRow.innerHTML = `<th scope="row">${rowCount}</th><td>${city}</td><td>${state}</td>`;
  //getElementById used to target the element by the Id. Tags or classes can be used.
    document.getElementById("cityInput").value = '';
    document.getElementById("stateInput").value = '';
  });
  
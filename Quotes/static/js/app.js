// from data.js
var tableData = data;
datalist(tableData);

// YOUR CODE HERE!
// Get a reference to the table body
function  datalist(weatherList){

    var tbody = d3.select("tbody");
    tbody.html("");


// Console.log the weather data from data.js
    console.log(data);


// Refactor to use Arrow Functions!
    weatherList.forEach((ufoReport) => {
      var row = tbody.append("tr");
      Object.entries(ufoReport).forEach(([key, value]) => {
      var cell = tbody.append("td");
      cell.text(value);
  });
});
}

// Select the submit button
var submit = d3.select("#filter-btn");

submit.on("click", function() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");
  var inputCity = d3.select("#city");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");
  var inputValue2 = inputCity.property("value");
  

  console.log(inputValue);
  console.log(tableData );

  var filteredData = tableData.filter(tableData =>((tableData.datetime === inputValue)&&(tableData.city === inputValue2))); 
  
  console.log(filteredData);
  datalist(filteredData);
});
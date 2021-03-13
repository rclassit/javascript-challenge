// from data.js
var tableData = data;

// View data from data.js 
console.log(tableData);

//references

var tbody = d3.select("tbody");

// for loop for each column 
tableData.forEach(function(ufoSighting) {
    console.log(ufoSighting);
    // Append one table row `tr` for each UFO Sighting object
    var row = tbody.append("tr");

    // Use `Object.entries` to console.log each UFO Sighting value
    Object.entries(ufoSighting).forEach(function([key, value]) {
      console.log(key, value);
      // Append a cell to the row for each value
      var cell = row.append("td");
      cell.text(value);
    });
  });

//Event listener 
button.on("click", () => {
    d3.event.preventDefault();

    var inputDate = inputFieldDate.property("value").trim();
    // console.log(inputDate)

    var inputCity = inputFieldCity.property("value").toLowerCase().trim();
    // console.log(inputCity)
    // Other types of inputs
    // var inputState = inputFieldState.property("value").toLowerCase().trim();
    // var inputCountry = inputFieldCountry.property("value").toLowerCase().trim();
    // var InputShape = inputFieldShape.property("value").toLowerCase().trim();

    var filterDate = tableData.filter(tableData => tableData.datetime === inputDate);
    // console.log(filterDate)
    var filterCity = tableData.filter(tableData => tableData.city === inputCity);
    // console.log(filterCity)
    // other filter inputs 
    // filterState = tableData.filter(tableData => tableData.state === inputState);
    // filterCountry = tableData.filter(tableData => tableData.country === inputCountry;
    // filterShape = tableData.filter(tableData => tableData.state === inputShape);

    var filterCombined = tableData.filter(tableData => tableData.datetime === inputDate && tableData.city === inputCity);
    // var filterCombinedData = tableData.filter(tableData => tableData.datetime === inputDate && tableData.city === inputCity && tableData.state === inputState && tableData.country === inputCountry && tableData.shape === inputShape);
    // var filterCombinedDateState = tableData.filter(tableData => tableData.datetime === inputDate && tableData.state === inputState);

    $tbody.html("");

    let response = {
        filterDate, filterCity, filterCombined
    }

     // let response = {
    //     filterDate, filterCity, filterCombinedData, filterState, filterCountry, filterShape
    // }

    // if(response.filterDate.length !== 0) {
    //     Data(filterDate);
    // }


    if(response.filterCombined.length !==0 ) {
        Data(filterCombined);
    }

        else if(response.filterCombined.length === 0 && ((response.filterDate.length !== 0 || response.filterCity.length !== 0))) {
            Data(filterDate) || Data(filterCity);
        }

        else {
            $tbody.append("tr").append("td").text("No UFO Sightings");
        }
})
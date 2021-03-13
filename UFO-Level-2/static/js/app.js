// from data.js
var tableData = data;

// View data from data.js 
console.log(tableData);

//references

var $tbody = d3.select("tbody");
var button = d3.select("#filter-btn");
var inputFieldDate = d3.select("#datetime");
var inputFieldCity = d3.select("#city");
var columns = ["datetime","city","state","country","shape","durationMinutes","comments"]

//input data for HTML 

var Data = (datainput) => {
    datainput.forEach(ufoSightings => {
        var row = $tbody.append("tr");
        columns.forEach(column => row.append("td").text(ufoSightings[column]))
    });
}

Data(tableData);

//Event listener 
button.on("click", () => {
    d3.event.preventDefault();

    var inputDate = inputFieldDate.property("value").trim()
    // console.log(inputDate)

    var filtered = tableData.filter(tableData => tableData.datetime === inputDate);

    $tbody.html("");

    let response = {
        filtered
    }

    if(response.filtered.length !==0 ) {
        Data(filtered);
    }

        else{
            $tbody.append("tr").append("td").text("No UFO Sightings");
        }
})
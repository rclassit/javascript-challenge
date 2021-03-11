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

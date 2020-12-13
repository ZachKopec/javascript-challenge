// from data.js
var tableData = data;

// YOUR CODE HERE!
var button = d3.select("#filter-btn")
var form = d3.select("#form")

button.on("click", submission);
form.on("submit", submission);

function submission() {

    d3.event.preventDefault();

    var inputElement = d3.select("#datetime")
    var inputValue = inputElement.property("value")

    console.log(inputValue)
    console.log(tableData)

    var filteredData = tableData.filter(item => item.datetime === inputValue);

    console.log(filteredData);

    var list = d3.select("#tbody");

    list.html("");
    
    filteredData.forEach((data) => {
        var row = list.append("tr");
        Object.entries(data).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });

}
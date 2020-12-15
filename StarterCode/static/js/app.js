// from data.js
var tableData = data;

// YOUR CODE HERE!
var button = d3.select("#filter-btn")
var form = d3.select("#form")

button.on("click", submission);
form.on("submit", submission);

function submission() {

    d3.event.preventDefault();

    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");

    var inputElement2 = d3.select("#city");
    var inputValue2 = inputElement2.property("value");

    var inputElement3 = d3.select("#city");
    var inputValue3 = inputElement3.property("value");

    var inputElement4 = d3.select("#city");
    var inputValue4 = inputElement4.property("value");

    var inputElement5 = d3.select("#city");
    var inputValue5 = inputElement5.property("value");

    console.log(inputValue);
    console.log(inputValue2);
    console.log(inputValue3);
    console.log(inputValue4);
    console.log(inputValue5);
    console.log(tableData);
    
    if (inputValue.length > 0 && inputValue2.length > 0) {
        var filteredData = tableData.filter(item => item.datetime === inputValue && item.city === inputValue2);
    } else if (inputValue.length > 0 && inputValue2.length === 0) {
        var filteredData = tableData.filter(item => item.datetime === inputValue);
    } else if (inputValue.length === 0 && inputValue2.length > 0) {
        var filteredData = tableData.filter(item => item.city === inputValue2);
    }
    // var filteredData2 = tableData.filter(item => item.city === inputValue2);

    console.log(filteredData);
    // console.log(filteredData2);

    // if (filteredData.length < 1) {
    //     alert("No recorded instances for this date.")
    // };

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
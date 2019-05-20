"use strict";
function generateEmptyTable() {
    var element = document.getElementById('top_table');
    for (var i = 0; i < 5; i++) {
        var row = element.insertRow(-1);
        var newCell = row.insertCell(0);
        var newCell2 = row.insertCell(1);
        newCell.innerHTML = "random" + i.toString();
        newCell2.innerHTML = (500 - (i * 3)).toString();
    }
}
function min(a, b) {
    if (a < b)
        return b;
    else
        return a;
}
function findNameLength(name) {
    for (var i = 0; i < name.length; i++) {
        if (name[i] == '/')
            return i;
    }
    return -1;
}
function generateTable(results) {
    var element = document.getElementById('top_table');
    for (var i = 0; i < min(10, results.length); i++) {
        var row = element.insertRow(-1);
        var newCell = row.insertCell(0);
        var newCell2 = row.insertCell(1);
        var length_of_name = findNameLength(results[i][1]);
        newCell.innerHTML = results[i][1].substr(0, length_of_name);
        newCell2.innerHTML = results[i][0].toString();
    }
}
function compare(a, b) {
    return b[0] - a[0];
}
function setResultTable() {
    // localStorage.clear();
    var results = new Array();
    for (var i = 0, len = localStorage.length; i < len; ++i) {
        results.push([Number(localStorage.getItem(localStorage.key(i))), localStorage.key(i)]);
        console.log(localStorage.getItem(localStorage.key(i)));
    }
    results.sort(compare);
    if (results.length == 0) {
        generateEmptyTable();
    }
    else {
        generateTable(results);
    }
}
setResultTable();

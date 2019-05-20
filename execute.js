"use strict";
var startTime = new Date().getTime();
var gameDuration = 300 * 1000;
var player_name = new URL(window.location.href).searchParams.get("nickname");
document.getElementById("time").innerHTML = "left time: " + gameDuration / 1000;
function insertName() {
    document.getElementById("name").innerHTML = "Player name: " + player_name;
}
var account_value;
var test_result = 100;
function finish() {
    window.localStorage.setItem(player_name + "/" + account_value.toString(), account_value.toString());
    window.location.href = "finish.html?" + "result=" + account_value.toString();
}
insertName();
var interval = setInterval(function () {
    var now = new Date().getTime();
    var distance = Math.ceil((gameDuration - (now - startTime)) / 1000);
    document.getElementById("time").innerHTML = "left time: " + distance;
    if (distance == 0) {
        clearInterval(interval);
        finish();
    }
}, 1000);

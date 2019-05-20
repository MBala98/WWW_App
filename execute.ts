let startTime = new Date().getTime();
const gameDuration = 300 * 1000;
let player_name = new URL(window.location.href).searchParams.get("nickname");
(document.getElementById("time") as HTMLElement).innerHTML = "left time: " + gameDuration / 1000;


function insertName() {
    (document.getElementById("name") as HTMLElement).innerHTML = "Player name: " + player_name;
}
let account_value: number;
let test_result = 100;
function finish() {
    window.localStorage.setItem(player_name + "/" + account_value.toString(), account_value.toString());
      window.location.href = "finish.html?" + "result=" + account_value.toString();
}
insertName();
let interval = setInterval(() => {
    let now = new Date().getTime();
    var distance = Math.ceil((gameDuration - (now - startTime)) / 1000);
    (document.getElementById("time") as HTMLElement).innerHTML = "left time: " + distance;
    if (distance == 0) {
        clearInterval(interval);
        finish();
    }
}, 1000);


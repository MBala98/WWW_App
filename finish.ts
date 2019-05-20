
let message = document.createElement('p');
let result = new URL(window.location.href).searchParams.get("result");
message.innerHTML = "Thank you for playing the game. Your result is " + result.toString();
document.body.appendChild(message);


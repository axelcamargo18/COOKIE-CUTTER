// var bakeryWelcome = prompt("Welcome to the bakery ");

// /

let clicks = 0;

function increment() {
  if (clicks >= 10) {
    clicks += 10;
    document.getElementById("level-info").innerText = "🔥 LEVEL UP!! 🔥";
  } else {
    console.log("Default value");
    clicks++;
  }

  counter.innerHTML = clicks;
}

function reset() {
  clicks = 0;
  counter.innerHTML = clicks;
}

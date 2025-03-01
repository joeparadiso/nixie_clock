function updateClock() {
  const clockElement = document.getElementById("clock");
  clockElement.innerHTML = "";

  const now = new Date();
  const minutes = now.getMinutes().toString().padStart(2, "0");

  for (let i = 0; i < 2; i++) {
    const digitContainer = document.createElement("div");
    digitContainer.classList.add("digit-container");

    for (let j = 0; j < 10; j++) {
      const digitElement = document.createElement("div");
      digitElement.classList.add("digit");
      digitElement.textContent = j;

      if (j == minutes[i]) {
        digitElement.classList.add("illuminated");
      }

      digitContainer.appendChild(digitElement);
    }

    clockElement.appendChild(digitContainer);
  }
}

setInterval(updateClock, 1000);
updateClock();


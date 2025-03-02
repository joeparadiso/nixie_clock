/**
 * Function to update the clock display every second
 */
function updateClock() {
  // Get the current time
  const now = new Date();

  // Convert 24-hour time to 12-hour format and ensure it never shows "0" for 12 AM/PM
  let hours = now.getHours() % 12 || 12;
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  // Convert each time component into two digits for proper display
  const timeParts = [
    Math.floor(hours / 10), // Tens place of hours
    hours % 10, // Ones place of hours
    Math.floor(minutes / 10), // Tens place of minutes
    minutes % 10, // Ones place of minutes
    Math.floor(seconds / 10), // Tens place of seconds
    seconds % 10, // Ones place of seconds
  ];

  // List of digit container IDs corresponding to hours, minutes, and seconds
  const digitContainers = [
    "hours-tens",
    "hours-ones",
    "minutes-tens",
    "minutes-ones",
    "seconds-tens",
    "seconds-ones",
  ];

  /**
   * Loop through each digit container and update the displayed number.
   *
   * Each container holds 10 possible numbers (0-9), with only one being "illuminated"
   * to represent the current time.
   */
  digitContainers.forEach((id, index) => {
    const container = document.getElementById(id); // Get the container element by ID
    container.innerHTML = ""; // Clear previous digits to prevent duplication

    // Loop through numbers 0-9 to create the Nixie tube effect
    for (let i = 0; i < 10; i++) {
      const digitElement = document.createElement("div"); // Create a div for each number
      digitElement.classList.add("digit"); // Apply base styling

      digitElement.textContent = i; // Set the digit’s number value

      // Highlight the correct number based on the current time
      if (i === timeParts[index]) {
        digitElement.classList.add("illuminated"); // Apply glowing effect
      }

      container.appendChild(digitElement); // Add the digit to the container
    }
  });
}

// Run the updateClock function every second to keep the clock in sync
setInterval(updateClock, 1000);

// Call the function once on page load so the clock displays immediately
updateClock();

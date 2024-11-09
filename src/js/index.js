const baseValue = 20; // The primary progress percentage
const minFluctuation = 14; // Minimum limit
const maxFluctuation = 23; // Maximum limit
const progressBar = document.getElementById("progress-bar");
function updateProgress() {
  // Generate a random fluctuation value within the specified range
  const randomFluctuation = Math.random() * (maxFluctuation - minFluctuation) + minFluctuation;
  
  // Apply a slight random upward or downward direction to make it more dynamic
  const direction = Math.random() < 0.5 ? -1 : 1;
  const newValue = Math.min(maxFluctuation, Math.max(minFluctuation, baseValue + direction * randomFluctuation));
  // Update the width of the progress bar
  progressBar.style.width = `${newValue}%`;
}
// Set an interval to update the progress every second
setInterval(updateProgress, 500);
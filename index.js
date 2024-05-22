const moodButtons = document.querySelectorAll(".mood-button");
const moodList = document.getElementById("mood-list");

// Add ebvent listener to eah mood button
moodButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const mood = button.getAttribute("data-mood");
    addMoodToHistory(mood);
  });
});

function addMoodToHistory(mood) {
  const moodItem = document.createElement("li");
  const now = new Date();
  const date = now.toLocaleDateString();
  const time = now.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  moodItem.innerHTML = `<span>${mood}</span><span>${date} ${time}</span>`;
  moodList.appendChild(moodItem);
}

const calendar = document.getElementById("calendar");
const modal = document.getElementById("modal");
const noteInput = document.getElementById("noteInput");
const saveNote = document.getElementById("saveNote");

let selectedDate = null;

function generateCalendar() {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  calendar.innerHTML = "";

  for (let i = 1; i <= daysInMonth; i++) {
    const day = document.createElement("div");
    day.classList.add("day");
    day.textContent = i;

    const dateKey = `${year}-${month + 1}-${i}`;
    if (localStorage.getItem(dateKey)) {
      day.style.background = "#f0f0f0";
    }

    day.addEventListener("click", () => {
      selectedDate = dateKey;
      noteInput.value = localStorage.getItem(dateKey) || "";
      modal.classList.remove("hidden");
    });

    calendar.appendChild(day);
  }
}

saveNote.addEventListener("click", () => {
  if (selectedDate) {
    localStorage.setItem(selectedDate, noteInput.value);
    modal.classList.add("hidden");
    generateCalendar();
  }
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.add("hidden");
  }
});

generateCalendar();

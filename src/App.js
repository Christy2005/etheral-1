
const saveButton = document.getElementById('save-entry');
const entriesList = document.getElementById('entries-list');
const newEntryInput = document.getElementById('new-entry');

// Example storage for entries (you can replace this with a backend later)
let entries = JSON.parse(localStorage.getItem('entries')) || [];

function updateEntries() {
  entriesList.innerHTML = '';
  entries.forEach(entry => {
    const li = document.createElement('li');
    li.textContent = entry;
    entriesList.appendChild(li);
  });
}

saveButton.addEventListener('click', () => {
  const newEntry = newEntryInput.value.trim();
  if (newEntry) {
    entries.push(newEntry);
    localStorage.setItem('entries', JSON.stringify(entries)); // Save to localStorage
    newEntryInput.value = ''; // Clear input field
    updateEntries(); // Update the displayed list
  }
});

// Initial load of entries
updateEntries();

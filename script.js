const colorSelect = document.getElementById('colorSelect');
  const removeButton = document.querySelector('input[type="button"]');

  removeButton.addEventListener('click', () => {
    // Get the index of the selected option
    const selectedIndex = colorSelect.selectedIndex;

    // Check if an option is selected
    if (selectedIndex !== -1) {
      // Remove the selected option from the dropdown
      colorSelect.remove(selectedIndex);
    }
  });
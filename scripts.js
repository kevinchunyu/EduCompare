function submitForm() {
    const checkboxes = document.querySelectorAll('input[name="boxes"]:checked');
    const selectedBoxes = [];
    checkboxes.forEach((checkbox) => {
        selectedBoxes.push(checkbox.value);
    });

    const resultDiv = document.getElementById('result');
    if (selectedBoxes.length > 0) {
        resultDiv.textContent = 'You selected: ' + selectedBoxes.join(', ');
    } else {
        resultDiv.textContent = 'No boxes selected';
    }
}

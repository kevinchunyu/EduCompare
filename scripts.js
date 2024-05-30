function submitForm() {
    const checkboxes = document.querySelectorAll('input[name="boxes"]:checked');
    const selectedBoxes = [];
    checkboxes.forEach((checkbox) => {
        selectedBoxes.push(checkbox.value);
    });

    // Logic to check if Duolingo versus Classroom-Setting 
    duo = 0;
    classroom = 0; 
    for(let i = 0; i < selectedBoxes.length; i++) {
        if(selectedBoxes[i] == 'Time' || selectedBoxes[i] == 'Flexibility'  || selectedBoxes[i] == 'Entertainment') {
            duo += 1;
        } else {
            classroom += 1;
        }
    }

    recommendation = "";
    if(duo > classroom) {
        recommendation = "Duolingo"
    } else {
        recommendation = "Classroom"
    }

    const resultDiv = document.getElementById('result');
    if (selectedBoxes.length > 0) {
        resultDiv.textContent = 'You selected: ' + selectedBoxes.join(', ') + 
        '. We recommend you to use ' + recommendation + ' for your langauge learning journey! :)';
    } else {
        resultDiv.textContent = 'No boxes selected';
    }
}

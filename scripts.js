document.addEventListener('DOMContentLoaded', () => {
    const checkboxes = document.querySelectorAll('input[name="boxes"]');
    const submitBtn = document.querySelector('button[onclick="submitForm()"]');
    const warningDiv = document.getElementById('warning');

    checkboxes.forEach((checkbox) => {

        checkbox.addEventListener('click', () => {
            checkbox.parentElement.classList.toggle('toggled-border');
        })

        checkbox.addEventListener('change', () => {
            const resultDiv = document.getElementById('result');
            resultDiv.textContent = '';
            const selectedCount = document.querySelectorAll('input[name="boxes"]:checked').length;

            if (selectedCount > 3) {
                submitBtn.disabled = true;
                warningDiv.textContent = 'You can only select up to 3 options.';
            } else if (selectedCount < 3) {
                submitBtn.disabled = true;
                warningDiv.textContent = 'You must pick 3 options.';
            } else {
                submitBtn.disabled = false;
                warningDiv.textContent = '';
            }
        });
    });
});

function submitForm() {
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = '';
    const checkboxes = document.querySelectorAll('input[name="boxes"]:checked');
    const selectedBoxes = [];
    checkboxes.forEach((checkbox) => {
        selectedBoxes.push(checkbox.value);
    });

    // Logic to check if Duolingo versus Classroom-Setting 
    let duo = 0;
    let classroom = 0; 
    selectedBoxes.forEach((value) => {
        if(value === 'Time' || value === 'Flexibility' || value === 'Entertainment') {
            duo += 1;
        } else {
            classroom += 1;
        }
    });

    let recommendation = '';
    if(duo > classroom) {
        recommendation = 'Duolingo';
    } else {
        recommendation = 'Classroom';
    }

    if (selectedBoxes.length > 0) {
        resultDiv.textContent = 'You selected: ' + selectedBoxes.join(', ') + 
        '. We recommend you to use ' + recommendation + ' for your language learning journey! :)';
    } else {
        resultDiv.textContent = 'No boxes selected';
    }
}

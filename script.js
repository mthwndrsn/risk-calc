document.getElementById('risk-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const numEmployees = parseInt(document.getElementById('numEmployees').value);
    const dataSensitivity = document.getElementById('dataSensitivity').value;
    const itInfrastructure = document.getElementById('itInfrastructure').value;

    let riskScore = 0;

    // Calculate risk based on number of employees
    if (numEmployees < 10) {
        riskScore += 1;
    } else if (numEmployees < 50) {
        riskScore += 2;
    } else {
        riskScore += 3;
    }

    // Calculate risk based on data sensitivity
    switch (dataSensitivity) {
        case 'low':
            riskScore += 1;
            break;
        case 'medium':
            riskScore += 2;
            break;
        case 'high':
            riskScore += 3;
            break;
    }

    // Calculate risk based on IT infrastructure complexity
    switch (itInfrastructure) {
        case 'simple':
            riskScore += 1;
            break;
        case 'moderate':
            riskScore += 2;
            break;
        case 'complex':
            riskScore += 3;
            break;
    }

    // Determine risk level
    let riskLevel;
    if (riskScore <= 3) {
        riskLevel = 'Low';
    } else if (riskScore <= 6) {
        riskLevel = 'Medium';
    } else {
        riskLevel = 'High';
    }

    // Display the result
    document.getElementById('risk-result').innerText = `Risk Level: ${riskLevel}`;
});

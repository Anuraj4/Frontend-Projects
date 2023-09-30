function calculateAverage() {
    // Get input values
    var subject1 = parseFloat(document.getElementById('subject1').value);
    var subject2 = parseFloat(document.getElementById('subject2').value);
    var subject3 = parseFloat(document.getElementById('subject3').value);

    // Check if inputs are valid numbers
    if (isNaN(subject1) || isNaN(subject2) || isNaN(subject3)) {
        alert('Please enter valid numerical values for all subjects.');
        return;
    }

    // Calculate average
    var average = (subject1 + subject2 + subject3) / 3;
    

    // Display the result
    document.getElementById('result').innerText = 'Average Marks: ' + average.toFixed(2);
}

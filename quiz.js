// Function to check the user's answer
function checkAnswer() {
    // Declare the correct answer
    const correctAnswer = "4";
    
    // Get the selected radio button
    const selectedChoice = document.querySelector('input[name="quiz"]:checked');
    
    // Get the feedback element
    const feedback = document.getElementById("feedback");
    
    // Check if an answer was selected
    if (!selectedChoice) {
        feedback.textContent = "Please select an answer!";
        return;
    }
    
    // Get the user's answer
    const userAnswer = selectedChoice.value;
    
    // Compare the answers
    if (userAnswer === correctAnswer) {
        feedback.textContent = "Correct! Well done.";
    } else {
        feedback.textContent = "That's incorrect. Try again!";
    }
}

// Add event listener when the DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
    // Get the submit button
    const submitButton = document.getElementById("submit-answer");
    
    // Add click event listener to the submit button
    if (submitButton) {
        submitButton.addEventListener("click", checkAnswer);
    }
});

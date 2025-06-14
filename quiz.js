// Function to check the user's answer
function checkAnswer() {
    // Declare the correct answer
    const correctAnswer = "4";
    
    // Get the selected radio button
    const selectedChoice = document.querySelector('input[name="quiz"]:checked');
    
    // Get the feedback element
    const feedback = document.getElementById("feedback");
    
    // Get the user's answer
    const userAnswer = selectedChoice ? selectedChoice.value : null;
    
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
    
    // Add click event listener
    submitButton.addEventListener("click", checkAnswer);
});

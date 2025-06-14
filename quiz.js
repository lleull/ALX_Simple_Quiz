document.addEventListener("DOMContentLoaded", () => {
  // Declare the correct answer
  const correctAnswer = "4";
  
  function checkAnswer() {
    // Get the selected radio button
    const selectedChoice = document.querySelector('input[name="quiz"]:checked');
    const feedback = document.getElementById("feedback");
    
    // Check if an answer was selected
    if (!selectedChoice) {
      feedback.style.color = "red";
      feedback.textContent = "Please select an answer!";
      return;
    }
    
    // Get the user's answer
    const userAnswer = selectedChoice.value;
    
    // Compare the answers
    if (userAnswer === correctAnswer) {
      feedback.style.display = "block";
      feedback.textContent = "Correct! Well done.";
      feedback.style.color = "green";
    } else {
      feedback.style.display = "block";
      feedback.style.color = "red";
      feedback.textContent = "That's incorrect. Try again!";
    }
  }

  // Get the form element
  const form = document.getElementById("quiz-app");
  
  // Add submit event listener
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    checkAnswer();
  });
});

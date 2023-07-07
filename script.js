function revealSecret(secretId) {
    const secret = document.getElementById(secretId);
    secret.style.display = "block";
  }
  
  document.getElementById('quiz-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Get the user's answers
    const answer1 = document.querySelector('input[name="question1"]:checked').value;
    const answer2 = document.querySelector('input[name="question2"]:checked').value;
    const answer3 = document.querySelector('input[name="question3"]:checked').value;
    // Add more answer variables for additional questions
  
    // Count the number of A and B answers
    let countA = 0;
    let countB = 0;
  
    if (answer1 === 'A') {
      countA++;
    } else if (answer1 === 'B') {
      countB++;
    }
  
    if (answer2 === 'A') {
      countA++;
    } else if (answer2 === 'B') {
      countB++;
    }
  
    if (answer3 === 'A') {
      countA++;
    } else if (answer3 === 'B') {
      countB++;
    }
  
    // Determine the reality based on the majority of answers
    let reality;
    if (countA > countB) {
      reality = 'reality-a.html';
    } else {
      reality = 'reality-b.html';
    }
    // Add more conditions to determine other realities
  
    // Redirect the user to the resulting reality page
    window.location.href = reality;
  });
  

    function calculateGrade() {
        // Prompt user for input
        let studentMarks = prompt("Enter student marks (between 0 and 100):");
    
        // Validate input
        if (isNaN(studentMarks) || studentMarks < 0 || studentMarks > 100) {
            alert("Invalid input. Please enter a valid number between 0 and 100.");
            return;}
    
        // Convert input to a number
        studentMarks = Number(studentMarks);
    
        // Determine grade
        let grade;
        if (studentMarks > 79) {
            grade = 'A';
        } else if (studentMarks >= 60 && studentMarks <= 79) {
            grade = 'B';
        } else if (studentMarks >= 50 && studentMarks <= 59) {
            grade = 'C';
        } else if (studentMarks >= 40 && studentMarks <= 49) {
            grade = 'D';
        } else {
            grade = 'E';
        }
    
        // Output the grade
        alert("Student Grade: " + grade);
    }
    
    // Call the function
    calculateGrade();
    

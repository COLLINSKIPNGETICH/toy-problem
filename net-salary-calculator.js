// promt use for input
function calculateNetSalary(){
    // Constants - Replace with actual values from the provided link
    const TAX_RATE = 0.15;  // Placeholder value for income tax rate
    const NHIF_RATE = 0.05;  // Placeholder value for NHIF rate
    const NSSF_RATE = 0.06;  // Placeholder value for NSSF rate

    // Prompt user for input
    let basicSalary = parseFloat(prompt("Enter basic salary:"));
    let benefits = parseFloat(prompt("Enter benefits:"));

    // Validate input
    if (isNaN(basicSalary) || isNaN(benefits) || basicSalary < 0 || benefits < 0) {
        alert("Invalid input. Please enter valid numbers for basic salary and benefits.");
        return;
    }

    // Calculate gross salary
    let grossSalary = basicSalary + benefits;

    // Calculate deductions
    let tax = grossSalary * TAX_RATE;
    let nhifDeduction = grossSalary * NHIF_RATE;
    let nssfDeduction = grossSalary * NSSF_RATE;

    // Calculate net salary
    const netSalary = grossSalary - tax - nhifDeduction - nssfDeduction;

    // Output results
    console.log("Basic Salary: " + basicSalary);
    console.log("Benefits: " + benefits);
    console.log("Gross Salary: " + grossSalary);
    console.log("Tax (PAYE): " + tax);
    console.log("NSSF Deduction: " + nssfDeduction);
    console.log("Net Salary: " + netSalary);
}

// Call the function
calculateNetSalary();

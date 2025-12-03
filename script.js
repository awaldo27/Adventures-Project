$(document).ready(function() {
    console.log("jQuery is loaded and script is running!"); // Debugging line

    $("#lob-button").click(function() {
        console.log("LOB button clicked!"); // Debugging line

        let linesOfBusiness = [
            { insurancetype: "General Liability", statename: "South Carolina" },
            { insurancetype: "Worker’s Compensation", statename: "North Carolina" },
            { insurancetype: "Fire, Theft, Property", statename: "All States except Hawaii" }
        ];

        for (let i = 0; i < linesOfBusiness.length; i++) {
            alert("Line of Business: " + linesOfBusiness[i].insurancetype + "\nCovered in: " + linesOfBusiness[i].statename);
        }
    });
});

/* General script for contact form */
// Wait for the document to be fully loaded
$(document).ready(function() {
    // Form validation function
    $("#submitBtn").click(function() {
        // Get form values
        var firstName = $("#firstName").val().trim();
        var lastName = $("#lastName").val().trim();
        var email = $("#email").val().trim();
        
        // Check required fields
        if (!firstName || !lastName || !email) {
            alert("Please fill out all required fields.");
            return false;
        }
        
        // Check if at least one contact method is selected
        var emailChecked = $("#contactEmail").is(":checked");
        var phoneChecked = $("#contactPhone").is(":checked");
        
        if (!emailChecked && !phoneChecked) {
            alert("Please select a contact method (email or phone).");
            return false;
        }
        
        // Check if ONLY one contact method is selected
        if (emailChecked && phoneChecked) {
            alert("Please select only one contact method (email or phone).");
            return true;
        }
        
        // If all validation passes, show success message with the user's name
        var contactMethod = emailChecked ? "email" : "phone";
        alert("Thank you for your feeback, " + firstName + ". Someone will contact you shortly by " + contactMethod + ".");
        
        // Submit the form to thankyou.html
        $("#contactForm").submit();
    });
});
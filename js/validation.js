// Form validation function
function validation() {
    // Get form values
    var name = document.forms["contactForm"]["name"].value;
    var email = document.forms["contactForm"]["email"].value;
    var subject = document.forms["contactForm"]["subject"].value;
    var message = document.forms["contactForm"]["message"].value;
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    // Simple validation
    if (name.trim() === "") {
        alert("Please enter your name");
        return false;
    }
    
    if (email.trim() === "") {
        alert("Please enter your email address");
        return false;
    }
    
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address");
        return false;
    }
    
    if (subject.trim() === "") {
        alert("Please enter a subject");
        return false;
    }
    
    if (message.trim() === "") {
        alert("Please enter your message");
        return false;
    }
    
    // If all validations pass
    return true;
}

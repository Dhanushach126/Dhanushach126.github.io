<?php
// Initialize error reporting for development (remove in production)
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Create a logs directory if it doesn't exist
if (!is_dir('logs')) {
    mkdir('logs', 0755);
}

// Log file for debugging
$logFile = 'logs/contact_form_' . date('Y-m-d') . '.log';

function logMessage($message) {
    global $logFile;
    file_put_contents($logFile, date('[Y-m-d H:i:s] ') . $message . PHP_EOL, FILE_APPEND);
}

// Check if form was submitted
if (isset($_POST["submit"])) {
    // Log form submission
    logMessage("Form submitted");
    
    // Collect form data
    $name = trim(strip_tags($_POST['name']));
    $email = trim(strip_tags($_POST['email']));
    $subject = trim(strip_tags($_POST['subject']));
    $message = trim(strip_tags($_POST['message']));
    $to = 'dhanusha621@gmail.com'; // Your Gmail address
    
    // Format email content
    $email_content = "
    <html>
    <head>
        <title>$subject</title>
    </head>
    <body>
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> $name</p>
        <p><strong>Email:</strong> $email</p>
        <p><strong>Subject:</strong> $subject</p>
        <p><strong>Message:</strong></p>
        <p>" . nl2br($message) . "</p>
    </body>
    </html>
    ";
    
    // Set email headers
    $headers = "From: contact@" . $_SERVER['HTTP_HOST'] . "\r\n";  // Use server domain as FROM
    $headers .= "Reply-To: $email" . "\r\n";
    $headers .= "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8" . "\r\n";
    
    // Attempt to send email using PHP mail()
    $success = mail($to, "Contact Form: $subject", $email_content, $headers);
    
    // Log the result
    if ($success) {
        logMessage("Email sent successfully");
        // Redirect to thank you page
        header("Location: thank-you.html");
        exit;
    } else {
        // Log the error
        $errorMessage = error_get_last() ? error_get_last()["message"] : "Unknown error";
        logMessage("Email sending failed: " . $errorMessage);
        
        // Fallback: Save the message to a file
        $savedMessage = "Name: $name\nEmail: $email\nSubject: $subject\nMessage: $message\nDate: " . date('Y-m-d H:i:s') . "\n\n";
        file_put_contents('messages.txt', $savedMessage, FILE_APPEND);
        
        // Redirect to thank you page anyway (the message is saved)
        header("Location: thank-you.html");
        exit;
    }
}

?>
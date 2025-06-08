<?php
// Initialize error reporting for development (comment this out in production)
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Create logs directory if it doesn't exist
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
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Log form submission
    logMessage("Form submitted");
    
    // Get form data and sanitize it
    $name = filter_var(trim($_POST['name']), FILTER_SANITIZE_STRING);
    $email = filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL);
    $subject = filter_var(trim($_POST['subject']), FILTER_SANITIZE_STRING);
    $message = filter_var(trim($_POST['message']), FILTER_SANITIZE_STRING);
    
    // Validate email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        logMessage("Invalid email format: $email");
        echo json_encode(['status' => 'error', 'message' => 'Invalid email format']);
        exit;
    }
    
    // Recipient email - change this to your email
    $to = 'dhanusha621@gmail.com';
    
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
    
    // Try multiple FROM email formats to improve deliverability
    $server_name = isset($_SERVER['SERVER_NAME']) ? $_SERVER['SERVER_NAME'] : 'example.com';
    $from_email = "contact@" . $server_name;
    
    // Set email headers
    $headers = "From: Portfolio Contact <$from_email>\r\n";
    $headers .= "Reply-To: $name <$email>\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();
    
    // Always save the message to a file as backup
    $savedMessage = "Name: $name\nEmail: $email\nSubject: $subject\nMessage: $message\nDate: " . date('Y-m-d H:i:s') . "\n\n";
    file_put_contents('messages.txt', $savedMessage, FILE_APPEND);
    
    // Attempt to send email using PHP mail()
    $mail_sent = @mail($to, "Portfolio Contact: $subject", $email_content, $headers);
    
    // Log the result
    if ($mail_sent) {
        logMessage("Email sent successfully");
        echo json_encode(['status' => 'success', 'message' => 'Your message has been sent!']);
    } else {
        // Log the error
        $error = error_get_last();
        $errorMessage = $error ? $error["message"] : "Unknown error";
        logMessage("Email sending failed: " . $errorMessage);
        
        // Return error but mention message was saved
        echo json_encode([
            'status' => 'partial', 
            'message' => 'Email could not be sent, but your message has been saved. We will contact you soon!'
        ]);
    }
} else {
    // Not a POST request
    echo json_encode(['status' => 'error', 'message' => 'Invalid request method']);
}
?>

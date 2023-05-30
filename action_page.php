<?php

// Get the email address from the POST request
$email = $_POST["email"];

// Get the first name from the POST request
$fname = $_POST["fname"];

// Get the last name from the POST request
$lname = $_POST["lname"];

// Get the subject from the POST request
$subject = $_POST["subject"];

// Set your email address
$to = "travishill1980@hotmail.com";

// Get the message from the POST request
$message = $_POST["message"];

// Send the email
mail($email, $subject, $message);

// Redirect the user back to the contact form
header("Location: /contact.php");

?>

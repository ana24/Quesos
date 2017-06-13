<?php
// Emails form data to you and the person submitting the form
// This version requires no database.
// Set your email below
$myemail = "centroartesanalnorte@gmil.com"; // Replace with your email, please

// Receive and sanitize input
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$message = $_POST['message'];

// set up email
$msg = "New contact form submission!\nName: " . $name . "\nEmail: " . $email . "\nPhone: " . $phone . "\nEmail: " . $email;
$msg = wordwrap($msg,70);
mail($myemail,"Nuevo formulario de envío",$msg);
mail($email,"Gracías por enviar el formulario",$msg);
echo 'Gracias por tu envío.  Por favor <a href="inicio.html">Click aquí para regresar a nuestra página.';

?>

<?php

switch ($_SERVER['REQUEST_METHOD']) {
    case ("OPTIONS"): //Allow preflighting to take place.
        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Methods: POST");
        header("Access-Control-Allow-Headers: content-type");
        exit;
    case("POST"): //Send the email;
        header("Access-Control-Allow-Origin: *");

        // Get the JSON input
        $json = file_get_contents('php://input');
        $params = json_decode($json);

        // Extract the form data
        $email = $params->email;
        $name = $params->name;
        $message = $params->message;

        // Prepare the email
        $recipient = 's_nastos@icloud.com';  
        $subject = "Contact From <$email>";
        $message = "From: " . $name . "<br>" . $message ;

        $headers = array();
        $headers[] = 'MIME-Version: 1.0';
        $headers[] = 'Content-type: text/html; charset=utf-8';
        $headers[] = "From: info@stavros-nastos.com"; // Verwende deine Domain

        // Try to send the email
        $success = mail($recipient, $subject, $message, implode("\r\n", $headers));

        // Check if mail was sent
        if ($success) {
            error_log("E-Mail wurde erfolgreich gesendet.");
            echo json_encode(['status' => 'success', 'message' => 'E-Mail wurde erfolgreich gesendet.']);
        } else {
            error_log("Fehler beim Senden der E-Mail.");
            echo json_encode(['status' => 'error', 'message' => 'Fehler beim Senden der E-Mail.']);
        }
        break;
    default: //Reject any non POST or OPTIONS requests.
        header("Allow: POST", true, 405);
        exit;
}

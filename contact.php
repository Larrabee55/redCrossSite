<?php
  $email_to = 'cameronlarrabee@yahoo.com';
	$email_subject = 'Schedule';
	// $confirmation_message = 'Thank you for writing to us.';
  $email_message =  'Name: ' . $_POST['firstName'] . ' ' . $_POST['lastName'] . "\r\n" .
                    'Phone Number: ' . $_POST['phoneNumber'] . "\r\n" .
                    'Email Address: ' . $_POST['email'] . "\r\n" . 
                    'Address: ' . $_POST['address'] . ' ' . $_POST['address2'] . "\r\n" . 
                    'City: ' . $_POST['city'] . "\r\n" . 
                    'State: ' . $_POST['state'] . "\r\n" .
                    'Zip Code' . $_POST['zipCode'];
	$error = '';
	if( ! empty( $_POST ) ) {  
	  $email_from = $_POST['email'];
	  $email_header = 'From: ' . $email_from . "\r\n" . 'Reply-To: ' . $email_from . "\r\n" . 'X-Mailer: PHP/' . phpversion() . "\r\n" . 'MIME-Version: 1.0' . "\r\n" . 'Content-type: text/plain; charset=UTF-8' . "\r\n";
	  $submit_button_name = 'submit'; // The correct name is needed so that we don't display the button in the e-mail.
	
	  if( isset( $_SERVER['HTTPS'] ) )
		$protocol = 'https://';
	  else
		$protocol = 'http://';
	
	  // Required fields
    if( empty( $_POST['FirstName'] ) || empty( $_POST['lastName'] ) || empty( $_POST['phoneNumber'] ) || empty( $_POST['email'] ) || 
    empty( $_POST['address'] ) || empty( $_POST['city'] ) || empty( $_POST['state'] ) || empty( $_POST['zipCode'] ) ){
		$error .= 'Missing required field .\n';
	  }
	  else if( ! filter_var( $_POST['contact_email'], FILTER_VALIDATE_EMAIL ) ) {
		$error .= 'Email is invalid.\n';
	  }
	
	  // If there are no errors, send the e-mail
	  if( empty( $error ) ) {
		// e-mail the form
		mail( $email_to, $email_subject, $email_message, $email_header );
                $emailSent = true;
		
                if($emailSent) {
                 header('Location: index.html');
		 exit();
                }
	  } 
	  else {
		header('Location: index.html?error='.$error);
	  }
	}
?>

<?php
$to = "cameronlarrabee@yahoo.com";
$subject = "Free Smoke Alarm";
$txt = 'Name: ' . $_POST['firstName'] . ' ' . $_POST['lastName'] . "\r\n" .
                    'Phone Number: ' . $_POST['phoneNumber'] . "\r\n" .
                    'Email Address: ' . $_POST['email'] . "\r\n" . 
                    'Address: ' . $_POST['address'] . ' ' . $_POST['address2'] . "\r\n" . 
                    'City: ' . $_POST['city'] . "\r\n" . 
                    'State: ' . $_POST['state'] . "\r\n" .
                    'Zip Code: ' . $_POST['zipCode'] . "\r\n" .
                    'Day: ' . $_POST['dayOfWeek'] . ' ' . $_POST['time'] . ' ' . $_POST['chapterEmail'];
$headers = "From: " . $_POST['email'];

mail($to,$subject,$txt,$headers);
header('Location: confirmationPage.html');
?>
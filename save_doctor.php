<?php
include('db_connection.php');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $firstName = $_POST['doctorFirstName'];
    $lastName = $_POST['doctorLastName'];
    $specialty = $_POST['doctorSpecialty'];
    $office = $_POST['doctorOffice'];
    $email = $_POST['doctorEmail'];

    $firstName = mysqli_real_escape_string($connection, $firstName);
    $lastName = mysqli_real_escape_string($connection, $lastName);
    $specialty = mysqli_real_escape_string($connection, $specialty);
    $office = mysqli_real_escape_string($connection, $office);
    $email = mysqli_real_escape_string($connection, $email);

    $query = "INSERT INTO doctors (first_name, last_name, specialty, office, email) 
              VALUES ('$firstName', '$lastName', '$specialty', '$office', '$email')";

    mysqli_query($connection, $query);
}

mysqli_close($connection);
?>

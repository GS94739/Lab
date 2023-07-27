<?php
include('db_connection.php');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $firstName = $_POST['patientFirstName'];
    $lastName = $_POST['patientLastName'];
    $patientID = $_POST['patientID'];
    $age = $_POST['patientAge'];
    $phone = $_POST['patientPhone'];

    $firstName = mysqli_real_escape_string($connection, $firstName);
    $lastName = mysqli_real_escape_string($connection, $lastName);
    $patientID = mysqli_real_escape_string($connection, $patientID);
    $age = mysqli_real_escape_string($connection, $age);
    $phone = mysqli_real_escape_string($connection, $phone);

    $query = "INSERT INTO patients (first_name, last_name, patient_id, age, phone) 
              VALUES ('$firstName', '$lastName', '$patientID', '$age', '$phone')";

    mysqli_query($connection, $query);
}

mysqli_close($connection);
?>

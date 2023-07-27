<?php
include('db_connection.php');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $patientID = $_POST['appointmentPatientID'];
    $specialty = $_POST['appointmentSpecialty'];

    $patientID = mysqli_real_escape_string($connection, $patientID);
    $specialty = mysqli_real_escape_string($connection, $specialty);

    $query = "INSERT INTO appointments (patient_id, specialty) 
              VALUES ('$patientID', '$specialty')";

    mysqli_query($connection, $query);
}

mysqli_close($connection);
?>
        
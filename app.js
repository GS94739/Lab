function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validateDoctorForm() {
    const firstName = document.getElementById("doctorFirstName").value.trim();
    const lastName = document.getElementById("doctorLastName").value.trim();
    const specialty = document.getElementById("doctorSpecialty").value;
    const office = document.getElementById("doctorOffice").value.trim();
    const email = document.getElementById("doctorEmail").value.trim();

    if (firstName === "" || lastName === "" || office === "" || email === "") {
        alert("Por favor, complete todos los campos.");
        return false;
    }

    if (!isValidEmail(email)) {
        alert("Ingrese un correo válido.");
        return false;
    }

    return true;
}

function handleDoctorFormSubmit(event) {
    event.preventDefault();
    if (validateDoctorForm()) {
        const formData = new FormData(document.getElementById("doctorForm"));
        fetch('save_doctor.php', {
            method: 'POST',
            body: formData
        })
        .then(response => response.text())
        .then(message => {
            alert(message);
        })
        .catch(error => {
            console.error('Error al enviar el formulario:', error);
        });
    }
}

function validatePatientForm() {
    const firstName = document.getElementById("patientFirstName").value.trim();
    const lastName = document.getElementById("patientLastName").value.trim();
    const patientID = document.getElementById("patientID").value.trim();
    const patientAge = document.getElementById("patientAge").value.trim();
    const patientPhone = document.getElementById("patientPhone").value.trim();

    if (firstName === "" || lastName === "" || patientID === "" || patientAge === "" || patientPhone === "") {
        alert("Por favor, complete todos los campos.");
        return false;
    }

    return true;
}

function handlePatientFormSubmit(event) {
    event.preventDefault();
    if (validatePatientForm()) {
        const formData = new FormData(document.getElementById("patientForm"));
        fetch('save_patient.php', {
            method: 'POST',
            body: formData
        })
        .then(response => response.text())
        .then(message => {
            alert(message);
        })
        .catch(error => {
            console.error('Error al enviar el formulario:', error);
        });
    }
}

function validateAppointmentForm() {
    const patientID = document.getElementById("appointmentPatientID").value.trim();

    if (patientID === "") {
        alert("Por favor, ingrese el número de documento del paciente.");
        return false;
    }

    return true;
}

function handleAppointmentFormSubmit(event) {
    event.preventDefault();
    if (validateAppointmentForm()) {
        const formData = new FormData(document.getElementById("appointmentForm"));
        fetch('save_appointment.php', {
            method: 'POST',
            body: formData
        })
        .then(response => response.text())
        .then(message => {
            alert(message);
        })
        .catch(error => {
            console.error('Error al enviar el formulario:', error);
        });
    }
}

document.getElementById("doctorForm").addEventListener("submit", handleDoctorFormSubmit);
document.getElementById("patientForm").addEventListener("submit", handlePatientFormSubmit);
document.getElementById("appointmentForm").addEventListener("submit", handleAppointmentFormSubmit);

function validateForm(event) {
    event.preventDefault();
    var nameInput = document.getElementById("name");
    var emailInput = document.getElementById("email");
    var passwordInput = document.getElementById("password");
    var confirmPasswordInput = document.getElementById("confirmPassword");

    if (nameInput.value === "") {
        alert("Пожалуйста, введите имя.");
        return false;
    }

    if (emailInput.value === "") {
        alert("Пожалуйста, введите email.");
        return false;
    }

    if (passwordInput.value === "") {
        alert("Пожалуйста, введите пароль.");
        return false;
    }

    if (passwordInput.value !== confirmPasswordInput.value) {
        alert("Пароли не совпадают.");
        return false;
    }

    alert("Форма успешно отправлена!");
    return true;
}

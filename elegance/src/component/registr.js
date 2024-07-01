
const reg = () => {
    const registr = `
      <form id="registrationForm" action="registration.php" method="post" class="reg">
        <h2>регистрация</h2>
        <div class="reg__line">
          <img src="../img/fly.png">
          <div class="reg__box">
            <label>Имя</label>
            <input type="text" id="name" name="name">
            <div id="nameError" class="error-message"></div>
            <label>Почта</label>
            <input type="email" id="email" name="email" required>
            <div id="emailError" class="error-message"></div>
            <label>Пароль</label>
            <input type="password" id="password" name="password" required>
            <div id="passwordError" class="error-message"></div>
            <label>Повторите пароль</label>
            <input type="password" id="confirmPassword" name="confirmPassword"> 
            <div id="confirmPasswordError" class="error-message"></div>
          </div>
          <img src="../img/image.png">
        </div>
        <button type="submit" class="btnvalid">Зарегестрироваться</button>
        <div class="reg__log">
            <a class="reg__link" href="../html/login.html">Уже существует аккаунт? Войдите</a>
        </div>
      </form>
    `;
  
    setTimeout(() => {
      document.querySelector('.reg').addEventListener('submit', function (event) {
          event.preventDefault();
          validateForm();
      });
  }, 0);

    return registr;
  };
  const validateForm = () => {
    const email = document.getElementById('email').value.trim();
    const name = document.getElementById('name').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirmPassword').value.trim();
    let isValid = true;

    clearErrors();

    // Проверка email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        showError('email', 'Введите корректный адрес электронной почты.');
        isValid = false;
    }

    // Проверка имени
    const namePattern = /^[A-Za-zА-Яа-яЁё\\s]+$/;
    if (!namePattern.test(name)) {
        showError('name', 'Имя должно содержать только буквы.');
        isValid = false;
    }

    // Проверка пароля
    if (password.length < 6) {
        showError('password', 'Пароль должен содержать не менее 6 символов.');
        isValid = false;
    }

    // Проверка подтверждения пароля
    if (password !== confirmPassword) {
        showError('confirmPassword', 'Пароли не совпадают.');
        isValid = false;
    }

    if (isValid) {
        const xmlhttp = new XMLHttpRequest();
        xmlhttp.open("POST", "http://localhost/elegance/registration.php"); //обращение к адресу сервера 
        xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); // показывает что пересылаем форму (которая потом будет прочитана)
        xmlhttp.send(`name=${name}&email=${email}&password=${password}`);
        xmlhttp.onload = function () {
            if (xmlhttp.status == 201) {
                alert("Успех");
                document.getElementById('name').value = '';
                document.getElementById('email').value = '';
                document.getElementById('password').value = '';
                document.getElementById('confirmPassword').value = '';
                window.location.href = "../html/login.html";
            } else if (xmlhttp.status == 400) {
                alert("Ошибка");
            }
        };
    }
};

const showError = (fieldId, message) => {
    const field = document.getElementById(fieldId);
    const errorDiv = document.getElementById(fieldId + 'Error');
    field.classList.add('error');
    errorDiv.textContent = message;
    errorDiv.style.display = 'block';
};

const clearErrors = () => {
    const errorFields = document.querySelectorAll('.error');
    errorFields.forEach(field => {
        field.classList.remove('error');
    });

    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(errorMessage => {
        errorMessage.textContent = '';
        errorMessage.style.display = 'none';
    });
};

const clearFormFields = () => {
    document.getElementById('email').value = '';
    document.getElementById('name').value = '';
    document.getElementById('password').value = '';
    document.getElementById('confirmPassword').value = '';
};

  export default reg;
  
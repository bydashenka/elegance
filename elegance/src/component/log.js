const log = () => {
    return `
      <form id="loginForm" class="login">
        <h2>Авторизация</h2>
        <div class="login__line">
          <img src="../img/fly.png">
          <div class="login__box">
            <label>Почта</label>
            <input type="email" id="email" name="email" required>
            <label>Пароль</label>
            <input type="password" id="password" name="password" required>
          </div>
          <img src="../img/image.png">
        </div>
        <br/>
        <div class="g-recaptcha" data-sitekey="6LemWfwpAAAAANvrJRRfpKLZvy2eSFWqskD1fd2v"></div>
        <input class="btnvalid" type="submit" value="Войти">
        <div class="login__link">
          <a href="../html/reg.html">Не создан аккаунт? Зарегистрируйтесь</a>
        </div>
      </form>`;
  };
  
  const initLoginForm = () => {
    document.querySelector('#loginForm').addEventListener('submit', function (event) {
      event.preventDefault();
      validateAuthForm();
    });
  };
  
  const validateAuthForm = () => {
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const recaptchaResponse = grecaptcha.getResponse();
  
    clearErrors();
  
    let isValid = true;
  
    if (email === '') {
      showError('email', 'Введите почту.');
      isValid = false;
    }
    if (password === '') {
      showError('password', 'Пароль обязателен.');
      isValid = false;
    }
    if (!recaptchaResponse) {
      showError('g-recaptcha-response', 'Пройдите рекапчу.');
      isValid = false;
    }
  
    if (isValid) {
      const formData = new FormData(document.querySelector('#loginForm'));
      formData.append('g-recaptcha-response', recaptchaResponse);
  
      const xmlhttp = new XMLHttpRequest();
      xmlhttp.open("POST", "http://localhost/elegance/login.php");
      xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
      xmlhttp.onload = function () {
        if (xmlhttp.status === 200) {
          try {
            const response = JSON.parse(xmlhttp.responseText);
            if (response.error) {
              alert(response.error);
            } else {
              alert("Успех: " + response.message);
              window.location.href = `account.html?name=${encodeURIComponent(response.name)}`;
            }
          } catch (e) {
            alert("Ошибка при обработке ответа: " + e.message);
          }
        } else {
          alert("Ошибка при обработке ответа. Статус: " + xmlhttp.status);
        }
      };
      xmlhttp.onerror = function () {
        alert("Ошибка сети");
      };
  
      xmlhttp.send(new URLSearchParams(formData).toString());
    }
  };
  document.addEventListener('DOMContentLoaded', () => {
    const checkReCaptchaLoaded = setInterval(() => {
        const recaptchaElement = document.querySelector('.g-recaptcha');
        if (typeof grecaptcha !== 'undefined' && grecaptcha.render && recaptchaElement) {
            clearInterval(checkReCaptchaLoaded);
            // Проверяем, была ли уже отрисована reCAPTCHA в этом элементе
            if (recaptchaElement.hasAttribute('data-rendered')) {
                grecaptcha.reset(); // Сбрасываем reCAPTCHA, если она уже была отрисована
            }
            grecaptcha.render(recaptchaElement, {
                'sitekey': '6LemWfwpAAAAANvrJRRfpKLZvy2eSFWqskD1fd2v'
            });
            initLoginForm();
            // Устанавливаем атрибут, указывающий на то, что reCAPTCHA была отрисована
            recaptchaElement.setAttribute('data-rendered', 'true');
        }
    }, 100);
});
  const showError = (fieldId, message) => {
    const field = document.getElementById(fieldId);
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = message;
    field.parentNode.insertBefore(errorDiv, field.nextSibling);
  };
  
  const clearErrors = () => {
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(errorMessage => {
      errorMessage.remove();
    });
  };
  




  
  export default log;
  
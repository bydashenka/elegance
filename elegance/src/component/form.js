const form = () => {
    const feedback = `
    <form id="form" action="feedback.php" method="post" class="form">
      <p class="form__question">Если у вас остались вопросы, то можете направить его нам, заполнив форму.</p>
      <div class="form__box">
          <p class="form__connection">свяжитесь с нами</p>
          <label>Имя</label>
          <input type="text" id="name" name="name">
          <div id="nameError" class="error-message"></div>
          <label>Почта</label>
          <input type="email" id="email" name="email" required>
          <div id="emailError" class="error-message"></div>
          <label>Сообщение</label>
          <input type="text" id="message" name="message" style='height: 80px;' required>
      </div>
      <button type="submit" class="btnvalid">Отправить</button>
    </form>
    `;
    setTimeout(() => {
      document.querySelector('.form').addEventListener('submit', function (event) {
        event.preventDefault();
        validateForm();
      });
    }, 0);
    return feedback;
  };
  
  const validateForm = () => {
    const email = document.getElementById('email').value.trim();
    const name = document.getElementById('name').value.trim();
    const message = document.getElementById('message').value.trim();
    let isValid = true;
    clearErrors();
  
    // Проверка email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      showError('email', 'Введите корректный адрес электронной почты.');
      isValid = false;
    }
  
    // Проверка имени
    const namePattern = /^[A-Za-zА-Яа-яЁё\s]+$/; // Исправлен паттерн
    if (!namePattern.test(name)) {
      showError('name', 'Имя должно содержать только буквы.');
      isValid = false;
    }
  
    if (isValid) {
      const xmlhttp = new XMLHttpRequest();
      xmlhttp.open("POST", "http://localhost/elegance/feedback.php");
      xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
      xmlhttp.send(`name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}&message=${encodeURIComponent(message)}`); // Исправлено
  
      xmlhttp.onload = function () {
        console.log(xmlhttp.status); // Добавлен вывод статуса
        console.log(xmlhttp.responseText); // Добавлен вывод ответа
        if (xmlhttp.status == 201) {
          // Обработка успешного ответа
          const response = JSON.parse(xmlhttp.responseText);
          alert(response.message);
          clearFormFields();
        } else if (xmlhttp.status == 400) {
          // Обработка ошибки
          alert("Ошибка отправки сообщения");
        } else {
          // Добавлен обработчик для других кодов ответа
          alert('Произошла ошибка при отправке сообщения');
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
    document.getElementById('message').value = '';
  };
  
  export default form;

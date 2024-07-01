let container;

const record = async () => {
  container = document.createElement('div');
  container.className = 'container';
  const online = `
    <div class="record">
        <h2>онлайн-запись</h2>
        <div class="record__online">
            <div class="record__list">
                <p class="record__text">Введите вашу почту</p>
                  <div class="record__email">
                    <input type="email" id="email" name="email" required>
                    <div id="emailError" class="error-message"></div>
                  </div> 
            </div>
            <div class="record__list">
                <p class="record__text">Выберите услугу</p>
                <select id="serviceSelect" name="service" required></select>
            </div>
            <div class="record__list">
                <p class="record__text">Выберите мастера</p>
                <select id="masterSelect" name="master" required></select>
            </div>
            <div class="record__list">
                <p class="record__text">Выберите дату</p>
                <input type="date" id="dateSelect" name="date" required>
            </div>
        </div>
        <button id="submit" class="btnvalid">Записаться</button>
    </div>
  `;
  
  container.innerHTML = online;

  const loadOptions = async (selectElementId, url) => {
    try {
      const response = await fetch(url);
      const options = await response.json();
      const selectElement = container.querySelector(`#${selectElementId}`);
      selectElement.innerHTML = options.map(option => `<option value="${option}">${option}</option>`).join('');
    } catch (error) {
      console.error('Ошибка при загрузке опций:', error);
    }
  };

  await Promise.all([
    loadOptions('serviceSelect', 'http://localhost/elegance/get_services.php'),
    loadOptions('masterSelect', 'http://localhost/elegance/get_masters.php')
  ]);

  container.querySelector('#submit').addEventListener('click', () => {
    submitApplication(container);
  });

  return container;
};

const submitApplication = async (container) => {
  const service = container.querySelector('#serviceSelect').value;
  const master = container.querySelector('#masterSelect').value;
  const date = container.querySelector('#dateSelect').value;
  const email = container.querySelector('#email').value.trim();
  let isValid = true;
  clearErrors(); // Вызываем clearErrors() перед проверкой

  const data = {
    service: service,
    master: master,
    date: date,
    email: email
  };

  // Проверка email
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    showError('email', 'Введите корректный адрес электронной почты.');
    isValid = false;
  }

  if (!isValid) {
    return;
  }

  try {
    const response = await fetch('http://localhost/elegance/record.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
  
    const responseData = await response.json();
    console.log(responseData.message);
  
    // Показать сообщение пользователю
    alert('Запись отправлена.');
  
  } catch (error) {
    console.error('Ошибка при отправке данных на сервер:', error);
  }
};

function clearErrors() {
  const errorMessages = document.querySelectorAll('.error-message');
  errorMessages.forEach(message => message.remove());
}

function showError(fieldId, errorMessage) {
  const fieldElement = document.getElementById(fieldId);
  const errorElement = document.createElement('div');
  errorElement.className = 'error-message';
  errorElement.textContent = errorMessage;
  fieldElement.parentNode.insertBefore(errorElement, fieldElement.nextSibling);
}

export default record;

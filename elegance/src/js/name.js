document.addEventListener('DOMContentLoaded', () => {
    const name = localStorage.getItem('name');
    if (name) {
        document.getElementById('name').textContent = 'Добро пожаловать, ' + name + '!';
    } else {
        // Если имя не найдено, можно перенаправить пользователя на страницу входа
        // window.location.href = "../html/login.html";
    }
});
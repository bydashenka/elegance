const contact = () =>{
    return `
<div class="contact">
        <h2>контакты</h2>
        <div class="contact__box">
            <img class="contact__img" src="../img/contact.png">
            <div class="contact__about">
                <div class="contact__address">
                    <p class="contact__text">Адрес:</p>
                    <p class="contact__text">г. Москва, ул. Профсоюзная 1, ст.11, 2 этаж</p>
                    <p class="contact__text">Метро Академическая</p>
                </div>
                <div class="contact__number">
                    <p class="contact__text">Телефон:</p>
                    <p class="contact__text">+7 (900) 456 77 11</p>
                </div>
                <div class="contact__time">
                    <p class="contact__text">Время работы:</p>
                    <p class="contact__text">с 9:00 до 21:00</p>
                    <p class="contact__text">обед с 13:00 до 14:00</p>
                </div>
                <div class="contact__sm">
                    <p class="contact__text">Наши социальные сети</p>
                    <div class="contact__icons">
                        <img class="contact__icon" src="../img/telegram.png">
                        <img class="contact__icon" src="../img/vk.png">
                        <img class="contact__icon" src="../img/insta.png">
                    </div>
                    <p class="contact__text">Подписывайтесь, чтобы не пропускать акции и новинки!</p>
                </div>
            </div>
        </div>
    </div>
    `


}

export default contact
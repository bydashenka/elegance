const footer = () =>{
    return `
    <footer>
      <div class="container">
          <nav class="footmenu">
              <ul class="footmenu__left">
                <li class="footmenu__items"><a href="services.html" class="footmenu__link"><p class="menu__text">Услуги</p></a></li>
                <li class="footmenu__items"><a href="master.html" class="footmenu__link"><p class="menu__text">Мастера</p></a></li>
                <li class="footmenu__items"><a href="sale.html" class="footmenu__link"><p class="menu__text">Акции</p></a></li>
              </ul>

              <div class="footmenu__center">
                <p class="footmenu__salon">© Салон красоты Elegance</p>
              </div>

              <div class="footmenu__right">
                <li class="footmenu__items"><a href="contacts.html" class="footmenu__link"><p class="footmenu__text">Контакты</p></a></li>
                  <div class="footmenu__contact">
                    <img class="footmenu__icon" src="../img/telegram.png">
                    <img class="footmenu__icon" src="../img/vk.png">
                    <img class="footmenu__icon" src="../img/insta.png">
                    <p class="footmenu__number">+7 (900) 456 77 11</p>
                </div>
              </div>
          </nav>
      </div>
    </footer>
    `
}
export default footer
const header = () =>{
    return `
    <header>
      <div class="container">
          <nav class="menu">
              <ul class="menu menu__left">
                  <li class="menu__items"><a href="index.html" class="menu__link"><img class="menu__logo" src="../img/logo.png"></a></li>
              </ul>

              <ul class="menu__center">
                  <li class="menu__items"><a href="services.html" class="menu__link"><p class="menu__text">Услуги</p></a></li>
                  <li class="menu__items"><a href="master.html" class="menu__link"><p class="menu__text">Мастера</p></a></li>
                  <li class="menu__items"><a href="sale.html" class="menu__link"><p class="menu__text">Акции</p></a></li>
                  <li class="menu__items"><a href="contacts.html" class="menu__link"><p class="menu__text">Контакты</p></a></li>
              </ul>

              <div class="menu menu__right">
                  <a href="account.php" class="menu__link"><img class="menu__log" src="../img/login.png"></a>
              </div>
          </nav>
  </header>
    `


}

export default header
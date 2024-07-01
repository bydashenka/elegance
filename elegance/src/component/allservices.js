const allservices = () =>{
    return `
    <div class="box">
        <h2>Услуги</h2>
      <div class="box__line">
          <a href="../html/hair.html" class="box__link"><div class="box__block">
              <img class="box__img" src="../img/hair.png">
              <p class="box__name">Парикмахерские услуги</p>
          </div></a>
          <a href="../html/mp.html" class="box__link"><div class="box__block">
              <img class="box__img" src="../img/hands.png">
              <p class="box__name">Маникюр и педикюр</p>
          </div></a>
          <a href="../html/epil.html" class="box__link"><div class="box__block">
              <img class="box__img" src="../img/epil.png">
              <p class="box__name">Эпиляция</p>
          </div></a>
      </div>
          <div class="box__linetwo">
          <a href="../html/makeup.html" class="box__link"><div class="box__block">
              <img class="box__img" src="../img/makeup.png">
              <p class="box__name">Макияж</p>
          </div></a>
          <a href="../html/spa.html" class="box__link"><div class="box__block">
              <img class="box__img" src="../img/spa.png">
              <p class="box__name">SPA-процедуры</p>
          </div></a>
          <a href="../html/massage.html" class="box__link"><div class="box__block">
              <img class="box__img" src="../img/massag.png">
              <p class="box__name">Массаж</p>
          </div></a>
      </div>
    </div>
    `
}

export default allservices
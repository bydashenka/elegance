const slider = () =>{
    return `
    <div class="slide">
        <button class="slider__buttonback"><p class="buttontext"><</p></button>
        <div class="slider">
            <div class="slider__images">
                <div class="slider__box">
                    <p class="slider__text">скидка -15% в честь дня рождения!</p>
                    <img class="slider__img" src="../img/bant.png">
                </div>
                <div class="slider__box">
                    <p class="slider__text">скидка -1о% для новых клиентов!</p>
                    <img class="slider__img" src="../img/ruka.png">
                </div>
                <div class="slider__box">
                    <p class="slider__text">Скидка 50% </p>
                    <p class="slider__text">при покупке абонемента 
                        (от 5 и более сеансов) 
                        на любые зоны эпиляции тела</p>
                    <img class="slider__img" src="../img/babochka.png">
                </div>

            </div>
        </div>
        <button class="slider__button"><p class="buttontext">></p></button>
    </div>
    `
}
export default slider

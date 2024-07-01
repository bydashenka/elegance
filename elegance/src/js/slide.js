let offset = 0; //объявляет переменную `offset` для хранения смещения элемента от левого края (начальное значение - 0).
const slide = document.querySelector('.slider__images'); //получает ссылку на элемент с классом `slider__images`, который, предположительно, содержит изображения слайдера.

document.querySelector('.slider__button').addEventListener('click', function(){ //добавляет обработчик события `click` на кнопку с классом `slider__button`. При клике на эту кнопку:
    offset = offset + 1100; // увеличивает `offset` на 1100 пикселей, тем самым сдвигая элемент `slider__images` вправо.
    if (offset > 2200){ 
        offset = 0; //если `offset` превышает 2200, то сбрасывает его в 0, чтобы вернуть слайд в исходное положение.
    }
    slide.style.left = -offset + 'px'; //устанавливает свойство `left` элемента `slider__images` равным `-offset`, тем самым перемещая его.

});

document.querySelector('.slider__buttonback').addEventListener('click', function(){ //добавляет обработчик события `click` на кнопку с классом `slider__buttonback`. При клике на эту кнопку:
    offset = offset - 1100; // уменьшает `offset` на 1100 пикселей, сдвигая элемент `slider__images` влево.
    if (offset < 0){
        offset = 2200; //если `offset` становится меньше 0, то устанавливает его равным 2200, чтобы перейти на последний слайд.
    }
    slide.style.left = -offset + 'px'; //устанавливает свойство `left` элемента `slider__images`, двигая его влево.

});
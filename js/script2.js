//действия с элементами на странице(43 тема)
"use strict";

const box = document.getElementById('box'),
    btns = document.getElementsByTagName('button'),
    circles = document.getElementsByClassName('circle'),
    hearts = document.querySelectorAll('.heart'),
    oneHeart = document.querySelector('.heart');

    //смотрим на элемент в качестве объекта
    console.dir(box);//вывод: div#box.box

    //1 - меняем стиль и ширину у объекта
    //что мы делаем это inline стили(у них самый высокий приоритет(т.е. они перебьют стили в файле css))
    // box.style.backgroundColor = 'blue';
    // box.style.width = '500px';

    btns[1].style.borderRadius = '100%';
    circles[0].style.backgroundColor = 'red';

    //назначение сразу нескольких свойств у элемента
    box.style.cssText = 'background-color:blue; width:500px';//где тире пробелы не ставить!!!
    //можно так   `background-color:blue; width:${переменная}px`;

    //если над несколькими элементами хотим сделать изменения(массив) то делаем с поощью цикла это
    //если массив получен с помощъю querySelectorAll - то можно использовать foeEach

    //2 - создание элемента
    const div = document.createElement('div');//эл-с создан, но сущ в js сейчас только

    //3 - создание эл-та без оболочки тега(редко используется)
    const text = document.createTextNode('I am here');

    //4 - хотим застелизовать наш созданный элемент(редко применяют это)
    div.classList.add('black');

    //5 - СПОСОБЫ ДОБАВЛЕНИЯ ЭЛЕМЕНТА НА СТРАНИЦУ(пока они все в работе, стработает только последний!!!)
    //a) добавим div в конец body
    document.body.append(div);
    //b) добавим div в конец wrapper
    document.querySelector('.wrapper').append(div);
    //c) обратный метод: вставляет в начало родительского
    const wrapper = document.querySelector('.wrapper');
    wrapper.prepend(div);
    //d) поставить после (after) и перед (before) каким то элементом
    hearts[0].before(div);
    hearts[0].after(div);


    //6 - удаление элемента со страницы
    circles[0].remove();

    //7 - замена 1го элемента на другой(сначала пишем какой эл-т хотим заменить, а потом на какой)
    hearts[1].replaceWith(circles[0]);

    //старые методы:
    // 1 - аналог append - appendChild
    // 2 - аналог (prefered, before и after) - insertBefore(вставить до)
    // пример: wrapper.insertBefore(div, heart[0]); (div - это блок котор вставляем)
    //3 - remove - removeChild (пример wrapper.removeChild(hearts[1]))
    //4 - replaceWith - replaceChild (пример wrapper.replaceChild(circles[1], heart[0]))

    //8 - добавление текста или html кода прямо в элементы
    div.innerHTML = "Hello world";
    //можно так
    div.innerHTML = "<h5>Hello world!</h5>";//так можно задать размер букв

    //так работает только с текстом
    div.textContent = "Hello";

    //комбинация всех методов выше(вставим html кусок кода перед определенным местом)
    div.insertAdjacentHTML("beforebegin",'<h5>Hello world!</h5>');
    //другме ключевые слова кроме как beforebegin
    //afterbegin - вставим html кусок кода после определенного места
    //beforeend - в конце всего элемента
    //afterend

    //нюанс у нас есть class wrapper с сердцами - мы можем получить wrapper и из него достать сердца

    const heartsss = wrapper.querySelectorAll('.heart');
    const oneHeartt = wrapper.querySelector('.heart');

    

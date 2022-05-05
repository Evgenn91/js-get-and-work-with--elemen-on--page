//получение элементво со страницы(42 тема)
//есть такое понятие DOM (объектая модель документа)
//когда документ сформирован, мы его может представить в виде объекта (называется document)

"use strict";

//методы для получ элементов делятся на 2 категории(появились недавно и существовали давно)
//СТАРЫЕ МЕТОДЫ:
//1 - получ по id(в VS код не будет работать, запускать только в браузере)
const box1 = document.getElementById('box');
console.log(box1); //вывод: <div class="box" id="box"></div>

//2 - получ по тегу (одинак тегов может быть много и по\тому мы получим ответ - псевдомассив)
const btns1 = document.getElementsByTagName('button');
console.log(btns1); //вывод:HTMLCollection(5) [button, button, button, button, button]
//получ 1 элемент из этого массива
console.log(btns1[0]);//вывод: <button>1</button>

//3 - получ по классу
const circles1 = document.getElementsByClassName('circle');
console.log(circles1); //вывод: HTMLCollection(3) [div.circle, div.circle, div.circle]

//НОВЫЕ МЕТОДЫ:
//4 - получ по CSS селектору и у получ массива будет метод forEach(у других массивов от др методов его небудет!!!!)
const heart1 = document.querySelectorAll('.heart');
console.log(heart1); //вывод: NodeList(3) [div.heart, div.heart, div.heart]
heart1.forEach(item => { console.log(item); });
//вывод: <div class="heart"></div>
//       <div class="heart"></div>
//       <div class="heart"></div>

//5 - получ тоже по CSS селек, то только уже первого элемента
const firstHeart1 = document.querySelector('.heart');
console.log(firstHeart1); //вывод: <div class="heart"></div>



    
    




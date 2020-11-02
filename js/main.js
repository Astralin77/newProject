// отлавливаем ошибки в своем коде

"use strict";

const box = document.getElementById('box'),
    btn = document.getElementsByTagName('button');
const hearts = document.querySelectorAll('.heart'),
      wrapper = document.querySelector('.wrapper'),
      circle = document.querySelectorAll('.circle');    

// console.log(box);
// box.style.backgroundColor = "yellow";
// box.style.width = "500px";

let num = '700px';
let color = '#cdcdcd';

box.style.cssText = `background-color:${color}; width: ${num};`;


btn[1].style.borderRadius = "100%";


hearts.forEach(item => {
   item.style.backgroundColor = "gold"; 
});

const div = document.createElement('div');

div.classList.add('black');

//document.body.append(div);

wrapper.append(div); // вставляем элемент в конце родителя
// wrapper.appendChild(div); //более старый метод

//wrapper.prepend(div); // Вставляем элемент в начале родителя

//hearts[1].before(div); //вставляем перед элементом
 //hearts[1].after(div); //вставляем после элемента

 //wrapper.insertBefore(div, hearts[1]); более старый метод добавления перед элементом
 

 //circle[1].remove(); //удаление элемента.

 //hearts[0].replaceWith(circle[1]); // заменяет элемент
 //wrapper.replaceChild(circle[0], hearts[0]);// заменяет эл-т

 //div.innerHTML = "<h1>Hello World</h1>"; //добовляем внутрь элемента любые HTML элементы

 //div.textContent = "Hello!"; // Помещаем внутрь только текст

 //div.insertAdjacentHTML("beforebegin",'<h3>Hello World</h3>'); //вставляет код перед элементом
 //div.insertAdjacentHTML("beforeend",'<h3>Hello World</h3>'); //вставляет код спащу перед закрывающим тегом
 //div.insertAdjacentHTML("afterbegin",'<h3>Hello World</h3>');// вставляет код сразу после открывающего тега 
//div.insertAdjacentHTML("afterend",'<h3>Hello World</h3>');// вставляет код сразу после закрывающего тега

"use strict";

/*
let res = confirm("True or false?");

alert(res);
*/

/*
let answer = +prompt("Enter your age.", "0");

alert(answer);
alert(typeof (answer));
alert(answer + 5);
*/

/*
const answers = [];

answers[0] = prompt("Enter your name.", "");
answers[1] = prompt("Enter your soname.", "");
answers[2] = prompt("Enter your age.", "");
answers[3] = prompt("Enter your favorite color.", "");
answers[4] = prompt("Enter year you was born.", "");

document.write(answers);

alert(typeof (answers[0]));
*/

/*
const type = "running";
const user = "Ilya";

alert('http://url.com/' + type);
alert(`http://url.com/${type}`);
alert(`Hello,${user}.`);
*/

/*
alert(5 + "juice");
alert(5 + +"juice");
alert(5 + +"3");
*/

/*
let incr = 5,
	decr = 10;

alert(`Increment = ${incr};`);
alert(`Decrement = ${decr};`);

//постфиксный
incr++;
decr--;

//префиксный
++incr;
--decr;

alert(`Increment = ${incr};`);
alert(`Decrement = ${decr};`);
*/

/*
const str = 'test text';
const arr = [1, 3, 4, 5, 4, 54, 2];

alert(str.length);
alert(str[3]);
alert(arr.length);
*/

/*LESSON 17 Методы и свойства строк и чисел*/

/*
const basket = "some fruits";

alert(basket.indexOf('t'));
alert(basket.slice(3));
alert(basket.substring(3, 8));
alert(basket.substr(3, 8));
*/

/*
const num = 13.6;

alert(Math.round(num)); //возвращает округленное значение

const test = "16.7 px";

console.log(parseInt(test)); //возвращает int
console.log(parseFloat(test)); //возвращает float
*/

/*LESSON 19 Callback- функции*/

/*
function first() {
	setTimeout(function () {
		alert(1);
	});
}

function second() {
	alert(2);
}

first();
second();

function learnJS(lang, callback) {
	alert(`Im study: ${lang}`);
	callback();
}

function endLesson() {
	alert('Lesson completed!');
}

learnJS('JavaScript', endLesson);
*/

/*LESSON 20 Объекты, деструктуризация объектов (ES6)*/

/*
const info = {
	name: 'Ilya',
	soname: 'Dorogan',
	age: 20,
	colors: {
		main: 'white',
		border: 'lands',
		dots: 'green'
	},
	showText: function () {
		alert(`Text.`);
	}
};
*/

/*
const {
	main,
	border,
	dots
} = info.colors; //деструктуризация вложенного объекта colors 

alert(border);
*/

//info.showText(); //вызов метода showText обьекта info

//alert(Object.keys(info).length); //массив ключей, при помощи .length можно получить количество

/*
let count = 0;
for (let key in info) {
	if (typeof (info[key]) === 'object') {
		for (let i in info[key]) {
			alert(`Property ${i} is: ${info[key][i]}.`); //перебор эл. объекта и вложенного объекта 
			count++;
		}
	} else {
		alert(`Property ${key} is: ${info[key]}.`);
		count++;
	}
}

alert(`Keys: ${count}.`); //количество ключей
*/

/*LESSON 21 021 Массивы и псевдомассивы*/

/*
const array = [0, 2, 26, 14, 1, 9];

array.sort(compareNum);
alert(array);

function compareNum(a, b) {
	return a - b; //помогает отсотрировать числа
}
*/

/*
array.forEach(function (item, i, array) {
	console.log(`${i}: ${item} in array ${array}`); //перебор массива
});
*/

//console.log(array.length);

/*
array.pop(); //удалить последний эллемент.
array.push(10); //добавить эллемент в конец

console.log(array);
*/

/*
for (let i = 0; i < array.length; i++) {
	console.log(array[i]); //перебор массива
}
*/

/*
for (let value of array) {
	console.log(value); //перебор для массивоподобных сущностей
}

const str = prompt("", "");
const products = str.split(", ");
products.sort();
alert(products.join('; '));
*/

/*LESSON 22 Передача по ссылке или по значению, Spread оператор (ES6-ES9)*/

/*
let a = 5,
	b = a;

b = b + 5;

console.log(a);
console.log(b);

const obj = {
	a: 5,
	b: 1,
};

console.log(obj);

const copy = obj; //передаем ссылку на obj
copy.a = 10;

console.log(copy);
*/

/*
function copyObj(mainObj) { //поверхностное копирование
	let objCopy = {};
	let key;

	for (key in mainObj) {
		objCopy[key] = mainObj[key];
	}
	return objCopy;
}

const numbers = {
	a: 3,
	b: 6,
	c: 0,
	x: {
		y: 4,
		z: 8,
	}
};

const newNumbers = copyObj(numbers);

newNumbers.a = 22;
newNumbers.x.z = 666;

// console.log(numbers);
// console.log(newNumbers);

const add = {
	d: 9,
	e: 234,
};

console.log(Object.assign(numbers, add)); // слияние

const clone = Object.assign({}, add); //поверхностная копия add в clone

clone.d = 9119;

// console.log(add);
// console.log(clone);

const oldArr = [0, 1, 2, 3];
const newArr = oldArr.slice(); //копия массива 

newArr[2] = 'wadawdwad';

console.log(newArr);
console.log(oldArr);
*/

/*
const video = ['youtube', 'vimeo', 'vine', 'tiktok'],
	blogs = ['DTF', 'blogger', 'lifejournal'],
	internet = [...video, ...blogs, 'vk', 'inst', 'fb'];

console.log(internet);
*/

/*
function log(a, b, c) {
	console.log(a);
	console.log(b);
	console.log(c);
}

const num = [2, 5, 7];

log(...num);
*/

/*
const arr = ['a', 'b', 'c'];

const newArr = [...arr];

const objSpread = {
	one: 1,
	two: 2,
};

const newObj = {
	...objSpread
};
*/

/*LESSON 23 023 Основы ООП, прототипно-ориентированное наследование*/

/*
const soldier = {
	health: 400,
	armor: 150,
	weapon: true,
};

const jack = Object.create(soldier);

console.log(jack.weapon);
console.log(jack.armor);

const alex = {
	health: 200,
};

Object.setPrototypeOf(alex, soldier);

console.log(alex.weapon);
console.log(alex.armor);
*/

/*LESSON 25 Отлавливаем ошибки в своем коде при помощи консоли разработчика. Breakpoints.*/

/*LESSON 26 Динамическая типизация в JS*/

/*
// To String
// 1)

let str = null;

console.log((String(str)));
console.log(typeof (String(str)));

// 2)

console.log(typeof (str + ''));

const num = 5;

console.log('https://vk.com/friends/' + num);

const fontSize = 16 + 'px';
*/

/*
// To Number
// 1)

console.log(typeof (Number('4')));

// 2)

console.log(typeof (+'88'));

//3)

console.log(typeof (parseInt('138px', 10)));

let answer = +prompt('Enter your age', '');

console.log(typeof (answer));
*/

/*
//To Boolean
//ALWAYS false: 0, '', undefined, NaN

//1)

let switcher = null;

if (switcher) {
	console.log('Work.');
} else {
	console.log('Dont work.') // switcher is false
}

switcher = 1;

if (switcher) {
	console.log('Work.'); // switcher is true
} else {
	console.log('Dont work.')
}

// 2)

console.log(Boolean(null)); //false
console.log(Boolean('4')); //true

// 3)

console.log(!!NaN); //false
console.log(!!45); //true
*/

/*LESSON 27 Задачи с собеседований на понимание основ*/

/*
let x = 5;
alert(x++); // 5 

console.log([] + false - null + true); //NaN

let y = 1;
let x = y = 2; // x=y y=2
alert(x); // x=2

console.log([] + 1 + 2); // 12

alert("1" [0]); //1

console.log(2 && 1 && null && 0 && undefined); // остановиться и вернет null

console.log(!!(a && b) === (a && b)); // !!( a && b ) - преобразуеться в true

alert(null || 2 && 3 || 4); // запнеться и вернет 

let a = [1, 2, 3];
let b = [1, 2, 3]; // эти массивы не равны

alert(+"Infinity"); //Infinity

console.log("Ёжик" > "яблоко"); //false

console.log(0 || "" || 2 || undefined || true || falsе); // 2
*/

/*LESSON 28 Получение элементов со страницы*/

/*
const box = document.getElementById('box');
console.log(box);

const btns = document.getElementsByTagName('button'); //псевдомассив button
console.log(btns);
console.log(btns[3]);
console.log(btns[1]);

const circles = document.getElementsByClassName('circle');
console.log(circles);

const hearts = document.querySelectorAll('.heart');
console.log(hearts);

hearts.forEach(item => {
	console.log(item);
});

const oneHeart = document.querySelector('.heart');
console.log(oneHeart); //first element
*/

/*LESSON 29 Действия с элементами на странице*/

/*
const box = document.getElementById('box'),
	btns = document.getElementsByTagName('button'), //псевдомассив button
	circles = document.getElementsByClassName('circle'),
	wrapper = document.querySelector('.wrapper'),
	hearts = wrapper.querySelectorAll('.heart'), //внитри wrapper
	oneHeart = wrapper.querySelector('.heart'); //внитри wrapper

// box.style.backgroundColor = 'blue';
// box.style.width = '350px';

box.style.cssText = 'background-color:blue; width: 350px';

btns[2].style.borderRadius = '75%';

circles[1].style.backgroundColor = 'green';

// for (let i = 0; i < hearts.length; i++) {
// 	hearts[i].style.backgroundColor = 'pink';
// }

hearts.forEach(item => {
	item.style.backgroundColor = 'black';
});

const div = document.createElement('div'); //существует только в JS
// const text = document.createTextNode('Killroy was here!');

div.classList.add('black');

//document.body.append(div);
wrapper.append(div);
//wrapper.appendChild(div);

// wrapper.prepend(div);

// wrapper.insertBefore(div, hearts[1]);

//hearts[0].before(div);
// hearts[0].after(div);

//circles[0].remove();
// wrapper.removeChild(hearts[0]);

// hearts[2].replaceWith(circles[0]);
// wrapper.replaceChild(circles[0], hearts[2]);

div.innerHTML = '<h1>Hello world!</h1>'; //можно добавлять HTML

// div.textContent = 'Hello!'; //только текст

div.insertAdjacentHTML('beforebegin', '<h2>Im here!</h2>');
*/

/*LESSON 31 События и их обработчики*/

/*
const btns = document.querySelectorAll('button'),
	overlay = document.querySelector('.overlay');

let i = 0;

const delleteElement = (e) => {
	console.log(e.currentTarget);
	console.log(e.type);

	// i++;
	// if (i == 1) {
	// 	btn.removeEventListener('click', delleteElement);
	// }
};

btns.forEach(btn => {
	btn.addEventListener('click', delleteElement, {
		once: true // 1 раз
	});
});

// btn.addEventListener('click', delleteElement);

// btn.addEventListener('mouseenter', () => {
// 	console.log('HOVER WORK!');
// });


// overlay.addEventListener('click', delleteElement);
// overlay.addEventListener('click', delleteElement);
*/
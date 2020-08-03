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
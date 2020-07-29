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


// function first() {
// 	setTimeout(function () {
// 		alert(1);
// 	});
// }

// function second() {
// 	alert(2);
// }

// first();
// second();

// function learnJS(lang, callback) {
// 	alert(`Im study: ${lang}`);
// 	callback();
// }

// function endLesson() {
// 	alert('Lesson completed!');
// }

// learnJS('JavaScript', endLesson);

const info = {
	name: 'Ilya',
	soname: 'Dorogan',
	age: 20,
	colors: {
		main: 'white',
		border: 'red',
		dots: 'green'
	}
};

for (let key in info) {
	if (typeof (info[key]) === 'object') {
		for (let i in info[key]) {
			alert(`Property ${i} is: ${info[key][i]}.`); //перебор объекта и обьекта внутри объкта
		}
	} else {
		alert(`Property ${key} is: ${info[key]}.`);
	}
}
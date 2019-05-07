// #26 Поле ввода пароля



// #25 Клавиши клавиатуры - onkeypress

{/* <input type="text" id="test"> */}


// document.onkeypress = function(event) {
//   console.log(event);
//   if (event.shiftKey) {
//     console.log('Press shift!!');
//   }
// }

// document.querySelector('#test').onkeypress = function(event) {
//   // console.log(event);
//   if (event.keyCode < 48 || event.keyCode > 57) {
//     console.log('not digit');
//     return false;
//   }
// }

// #24 Таймеры и интервалы

{/* <div id="test"></div>
<button id="stop">Stop</button>
<p id="out"></p> */}

// #test {
//   width: 50px;
//   height: 50px;
//   background: orange;
// }

// let sdvig = 0;
// let timer;

// let test = document.querySelector('#test');


// // setInterval(function_name, time)
// // move();

// function move() {
//   test.style.marginLeft = sdvig + 'px';
//   sdvig = sdvig + 5;
//   timer = setTimeout(move, 50);// убираем let чтоб сделать его глобально
// }

// // let timer = setInterval(move, 50); // 1s = 1000ms

// document.querySelector('#stop').onclick = function() {
//   // clearInterval(timer); // Остановка анимации
//   clearTimeout(timer); 
// }

// setTimeout(move, 5000);

// Таймер отсчета

// let a = 5;

// obr();

// function obr() {
//   document.querySelector('#out').innerHTML = a;
//   a--;
//   if (a < 0) {
//     clearTimeout(timer);
//     alert('Таймер отключен');
//   } else {
//     timer = setTimeout(obr, 1000);
//   }
// }

// #23 Классный эффект переключения между фото

{/* <div id="myslide">
    <div id="one">
      <img src="/example/img/slide_1.png" alt="">
    </div>
    <div id="two">
      <img src="/example/img/slide_2.png" alt="">
    </div>
  </div> */}

//CSS

// #myslide {
//   width: 375px;
//   height: 400px;
//   border: 3px solid black;
//   position: relative;
// }

// #one, #two {
//   overflow: hidden;
//   width: 375px;
//   height: 400px;
//   position: absolute;
//   left: 0;
//   top: 0;
// }

// #one {
//   background: yellow;
// }

// #two {
//   background: blue;
// }

// document.querySelector('#myslide').onmousemove = function(event) {
//   let x = event.offsetX; // относительно родителя;
//   console.log(x);
//   document.querySelector('#two').style.width = x + 'px';
// }

// document.querySelector('#myslide').onmouseleave = function(event) {
//   document.querySelector('#two').style.transition = "all 1s";
//   document.querySelector('#two').style.width = '178px';
// }

// document.querySelector('#myslide').onmouseenter = function(event) {
//   document.querySelector('#two').style.transition = 'all 0s';
// }


// 22 Кошка гоняется за мышкой

// document.onmousemove = function() {
//   document.querySelectorAll('body') [0].insertAdjacentHTML('beforeEnd', '<img src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/cat-48.png" id="cat">');
//   let cat = document.querySelector('#cat');
//   cat.style.position = 'fixed';


//   document.onmousemove = function(event) {
//     cat.style.left = event.clientX + 20 + 'px';
//     cat.style.top = event.clientY + 20 + 'px';
//   }
// }



//#21 События мыши

{/* <div id="one"></div> */}

// onclick

// let block = document.querySelector('#one').onclick = function() {
//   this.style.background = 'green';
//   this.onclick = null;

// dblclick

// let block = document.querySelector('#one').ondblclick = function() {
//     this.style.background = 'red';
// }

// правой кнопкой мыши

// let block = document.querySelector('#one').oncontextmenu = function() {
//   this.style.background = 'black';
//   return false;
// }
// document,oncontextmenu = function() {
//   return false; 
// }

// мышь входит на элемент

// let block = document.querySelector('#one').onmouseenter = function() {
//   console.log('Enter');
// }

//#20 Функции и работа с ними
// Сумма 2 чисел
{/* <button id="sum">Summa</button> */}
// function summa(a, b) {
//   a = a || 10;
//   b = b || 20;
//   alert(a + b);
// }

// document.querySelector('#sum').onclick = function() {
//   summa(12, 5);
// }


// #19 Выводим товар на страницу

{/* <p id="out"></p> */}
// let goods = {
//   "28292" : {
//     "name" : "Banan",
//     "cost" : 30,
//     "img" : "https://cdn4.iconfinder.com/data/icons/materia-flat-fruits/24/027_045_banana_banan_plant_herb_fruit_food-128.png",
//     "sklad" : "yes"
//   },
//   "23729" : {
//     "name" : "Tomato",
//     "cost" : 40,
//     "img" : "https://cdn2.iconfinder.com/data/icons/food-icons-6/200/food_tomato-128.png",
//     "sklad" : "yes"
//   }
// };

// console.log(goods);

// let out = "";
// for (let key in goods) {
//   out += 'Название: '+goods[key].name + '<br>';
//   out += 'Цена: '+goods[key].cost + '<br>';
//   out += 'Наличие: '+goods[key].sklad + '<br>';
//   // <img src=''>
//   out += '<img src="'+goods[key].img+'">';
//   out += '<hr>';
// }
// document.querySelector('#out').innerHTML = out;

// #18 Ассоциативные массивы

//#1 

// let man = {
//   "name" : "Alex",
//   "age" : 67,
//   "id" : "273897218",
//   "sex" : "male"
// };

// console.log(man);
// console.log(man.name);

// let man2 = {
//   "name" : "Alex",
//   "age" : 31,
//   "id" : "273897218",
//   "sex" : "male",
//   "year" : function() {
//     return 2019 - this.age;
//   }
// };

// console.log (man2.year());

//#3

// let man = {
//   "name" : "Alex",
//   "mas" : [5, 6],
//   "sum" : function() {
//     let sum = 0;
//     for (let i = 0; i < this.mas.length; i++) {
//       sum = sum + this.mas[i];
//     }
//     return sum;
//   }
// };

// console.log(man.sum());

// №15 Radio button

{/* <p><input type="radio" name="prim" value="яблоки"> Яблоки</p>
	<p><input type="radio" name="prim" value="груши"> Груши</p>
	<p><input type="radio" name="prim" value="сливы"> Сливы</p>
	<button id="one">Жми</button> */}

  // var radio = document.getElementsByName('prim');

  // for (var i=0; i<radio.length; i++) {
  //   radio[i].onchange = testRadio;
  // }
  
  // function testRadio(){
  //   console.log (this.value);
  // }
  
  // document.getElementById('one').onclick = checkRadio;
  
  // function checkRadio(){
  //   var m = document.getElementsByName('prim');
  //   for( var i=0; i<m.length; i++){
  //     if ( m[i].checked ) {
  //       alert( m[i].value );
  //       break;
  //     }
  //   }
  // }

// Работа с функциями 1

// function colorChange() {
//   let div = document.querySelectorAll('p');
//   for (i = 0; i < div.length; i++){
//     style = div[i].style;
//     style.color = 'red';
//   }
// }
// colorChange();
  
// Знакомство с массивами

// <hr>
// <input type="text" id="i1">
// <button onclick="p1 ()">Push</button>
// <button onclick="p2 ()">Pop</button>
// <hr>
// <p id="out"></p> 

// let m1 = [99, 33, 'Hello'];
// m1[3] = 444;
// m1[4] = 44444;

// for (let i = 0; i < m1.length; i++) {
//   document.querySelector('#out').innerHTML += m1[i] + '<br>';
// }

// function masOut() {
//   let p = document.querySelector('#out');
//   let str = '';
//   for (let i = 0; i < m1.length; i++) {
//     str += i +'---' + m1[i] + '<br>';
//   }
//   p.innerHTML = str;
// }

// masOut();

// function p1() {
//   let i1 = document.querySelector('#i1').value;
//   m1.push(i1);
//   masOut();
// }

// function p2() {
//   m1.pop();
//   masOut();
// }

//Угадай число на Javascript

// <p>Введите число: <input type="text" id="mynum"></p>
// <button onclick="f1 ()">Угадать</button>
// <hr>
// <p id="out"></p>
// <p id="tempout"></p>

//   let prNum;
//   let tempOut;

//   prNum = Math.floor((Math.random() * 10) + 1);
//   // Не видно что загадала программа
//   // tempOut = document.querySelector('#tempout');
//   // tempOut.innerHTML = prNum;
//   console.log(prNum);

// function f1() {
//   var num, out;

//   // Если оставлять внутри функции, то не видно числа которое загадала программа
//   // prNum = Math.floor((Math.random() * 10) + 1);
//   // tempOut = document.querySelector('#tempout');
//   // tempOut.innerHTML = prNum;

//   num = document.querySelector('#mynum').value;
//   out = document.querySelector('#out');

//   if (num == prNum) {
//     out.innerHTML = 'Вы угадали!!!';
//   } else if (num > prNum) {
//     out.innerHTML = 'Вы ввели число больше чем нужно!!';
//   } else {
//     out.innerHTML = 'Вы ввели число меньше чем нужно!!';
//   }
// }

// Ветвление в Javascript

// <p>Введите число <input type="text" id="num1"></p>
// <button onclick="f1 ()">Рассчитать</button>
// <p id="out"></p>

// function f1() {
//   let n;
//   let p;
//   p = document.querySelector('#out');
//   n = document.querySelector('#num1').value;
//   n = parseInt(n);
//   if (n === 100) {
//     p.innerHTML = 'Число равно 100';
//   } else if (n < 100) {
//     p.innerHTML = 'Число меньше 100';
//   } else if (n > 100) {
//     p.innerHTML = 'Число больше 100';
//   } else {
//     p.innerHTML = 'Введите число еще раз';
//   }
// }

// Задача о протеине

// const days = 9; // Дней в периоде
// const period = 3; // Как часто я ем протеин (раз в три дня)
// const workDayAmount = 200; // Количество протеина в будни
// const weekendAmount = 100; // Количество протеина в выходные

// let total = 0;
// let count = 1;
// for (let i = 1; i <= days; i++) {
//   if (count == period) {
//     if (i % 6 == 0 || i % 7 == 0) total += weekendAmount;
//     else total += workDayAmount;
//     count = 0;
//   }
//   count++;
// }

// console.log(total);

// Пропущенные элементы массива

// let mas = [-1, 4];
// let result = [];

// for (let i = mas[0]; i <= mas[1]; i++){
//   result.push(i);
// }

// console.log(result);

// Массивы, чистим массив чисел

// let size = ['15px', '12pt', '34em', '-3px', '2%'];

// function toNum(arr) {
//   let out = [];
//   for (let i = 0; i < arr.length; i++){
//     arr[i] = parseFloat(arr[i]);
//     if (arr[i] >= 0) out.push(arr[i]);
//   }
//   out.sort(function(a,b) {
//     return a-b;
//   });
//   return out;
// }

// function toNum2(arr){
//   let newArr = arr.map(function(sz){
//     return parseFloat(sz);
//   });

//   newArr = newArr.filter(function(sz){
//     if (sz > 0) return sz;
//   });

//   newArr.sort(function(a,b) {
//     return a-b;
//   });

//   return newArr;
// }

// console.log(toNum2(size));

// Решаем задачи на циклы №14

// let out = document.querySelector('#out');
// let tmp = '';

// for (let i = 4; i <= 13; i=i+3) {
//   tmp = tmp + i +  ' ';
// }

// for (let i = 654; i >= 0 ; i--) {
//   tmp = tmp + i +  ' ';
// }

// for (let i = 1; i <= 9 ; i++) {
//   tmp = tmp  +7 + ' * '+i+' = ' +7*i  + '</br>';
// }

// for (let i = 1000; i <= 2000 ; i++) {
//   tmp = tmp  + '&#' + i + ' ';
// }

//Сумма чисел от 0 до 100

// let sum = 0;
// for (let i = 1; i <= 100; i++) {
//   sum = sum + i;
// }

// console.log(sum);

//Произведение чисел

// let sum = 1;
// for (let i = 1; i <= 50; i++) {
//   sum = sum * i;
// }

// console.log(sum);

// out.innerHTML = tmp;

// Дэбаггинг №13

// <a href="#">First</a>
// <a href="http://javascript.kiev.ua">First</a>
// <a href="#">Five</a>
// <a href="http://w3.org.ua">Six</a>

// let h = document.getElementsByTagName('a'); //h коллекция

// for (let i = 0;i < h.length; i++) {
//   // console.log(h[i].href);
//   if (h[i].getAttribute('href') == '#') {
//     h[i].style.color = 'red';
//   }
// }
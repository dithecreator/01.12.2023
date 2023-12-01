function sayError(){
    alert("Some error ocurred!");
}

//sayError();


function showError(x){
alert("Error " + x + " ocurred!");
}

// showError("Out of memory");

function createHeaders(N){
for(let i = 1; i < N + 1; i++){
    document.write("<h2> " + "header" + i + "</h2>");
}
}

//createHeaders(5);


function checkPassword(X){

if(X === "Step" || X ==="Web" || X === "JavaScript"){
    document.write("true");
    return true;
}
else{
    document.write("false");
    return false; 
}

}

//checkPassword("Step");

function sign(x){
    if(x < 0){
        return -1;
    }

    if(x > 0){
        return 1;
    }

    if(x === 0){
        return 0;
    }
}

// sign(7);

function days(){
let days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
for(let i = 0; i < days.length; i++){
    document.write(i + " - " + days[i] + "<br>");
}
}

//days();


function waterCheck(){
    let valueWater = parseInt(prompt("введите количество воды в литрах: "));
    let procent = (valueWater / 100) * 10;
let days = 0;
   while(valueWater >= 10){
    valueWater -= procent;
    days++;
   }

   document.write("этого хватит на " + days + " дней");
}

// waterCheck();


//ДОП ЗАДАНИЯ


// 1. Создайте функцию stringFrom(...), возвращающую строку, состоящую из значе-
// ний всех переданных аргументов. Например, вызов stringFrom(' have', 5,
// 'apples') вернет строку «I have 5 apples»; вызов stringFrom('X value is', true) вер-
// нет строку «Х value is true».

function stringFrom(){
let array = [];

for(let i = 0; i < arguments.length; i++){
    array[i] = arguments[i];
}

let result = array.join(" ");
document.write(result);
}



//stringFrom("x value is", true);




// 2. Создайте функцию, возвращающую значение минимального из всех передан
// ных аргументов.

function getMin(...spread){

let min = spread[0];
        for(let i = 1; i < spread.length; i++){
                if(spread[i] < min){
                 min = spread[i];
                }
            
        }
        document.write("min: " + min + "<br>");
    
}

// getMin(2, 4, 5, 8);




// 3. Создайте функцию numbers(), которая будет подсчитывать количество передан
// ных числовых аргументов. Например, numbers(1, 2, "a") вернет значение 2,
// numbers (true, 2, false) — 1, numbers() — 0.

function numbers(...spread){
for(let i = 0; i < spread.length; i++){
    if (typeof spread[i] === 'number' && !isNaN(args[i])) {
        count++;
    }
}
return count;
}


// 4. Создайте функцию mean(), которая рассчитает среднее значение от всех число-
// вых аргументов, игнорируя аргументы нечислового типа. Например, mean (1, 2,
// "a") вернет значение 1.5 (среднее 1 и 2), mean(true, 2, false) — 2, mean() — 0.

function mean(){
    let sum = 0;
    for(let i = 0; i < spread.length; i++){
        if (typeof spread[i] === 'number' && !isNaN(args[i])) {
            sum += spread[i];
        }
    }
    sum /= spread.length;
    return sum;
}



// 5. Напишите рекурсивную функцию, которая проверяет, является ли переданный
// аргумент степенью двойки (например, числа 8=23,
// 3, 32=25 — это степени двойки,
// а числа 7 или 12 — нет). Подсказка: если число «х» делится на два, то нужно
// проверить, является ли число «х/2» степенью двойки.

function recursive(x){


    if (num === 1) {
        return true;
    }

    if (x % 2 !== 0 || x === 0) {
        return false;
    }

    return recursive(x / 2);


}




// 6. Напишите рекурсивную функцию, которая выводит число N «справа налево», то
// есть последняя цифра числа становится первой, предпоследняя - второй и т.д.
// (например, ввод N=123, вывод 321; ввод N= 12, вывод 21). Обеспечьте ввод
// пользователем числа N и вывод его «справа налево» вызовом функции. Под-
// сказка: последняя цифра числа «х» это остаток от деления на 10 (×%10), а
// остальные цифры можно отделить, поделив «х» на 10 нацело (parselnt(x/10)).

function reverseNumber(n){
    if (n < 10) {
        document.write(n);
    } else {
        document.write(n % 10);
        reverseNumber(Math.floor(n / 10));
    }
}

reverseNumber(112);
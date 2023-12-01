function Sum(a, b){
    return a + b;
}

function Multi(a, b){
    return a * b;
}

function Min(a, b){
    return a - b;
}

//sprerad оператор
function SumArr(...spread){
    let sum = 0;
    for(let i in spread){
        sum += spread[i];
    }
    return sum;
}

//rest оператор, определяет, что в начале что-то есть
function SumRest(a, b, ...rest){
    let sum = 0;
    sum = a + b;
    for(let i in rest){
        sum += rest[i];
    }
    return sum;
}

//передача аргументов в функцию
//spread оператор - позволяет передать в функцию бесконечное количество аргументов
//rest оператор - делает обязательной передачу некоторых аргументов
//при передаче через rest оператор - он должен находиться в самом конце
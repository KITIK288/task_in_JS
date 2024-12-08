// Задача: Напишите рекурсивную функцию, которая принимает целое число и возвращает его факториал.

function factorial(n) {
    summa = 0
    for (i = 1; i < (n + 1); i++) {
        summa += i
    }
    console.log(summa);
}

factorial(2);

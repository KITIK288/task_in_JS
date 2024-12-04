// Задача: Напишите функцию factorial,
// которая принимает неотрицательное целое число и возвращает его факториал.

function factorial(n) {
    fac = 1
    for (i = 1; i < n + 1; i++) {
        fac *= i;
    }
    console.log(fac)
}

factorial(5)

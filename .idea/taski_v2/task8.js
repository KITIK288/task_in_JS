// Описание: Напишите функцию, которая вычисляет n-ное число Фибоначчи.
//
// Для увеличения производительности реализуйте кеширование результатов,
//
// чтобы избежать повторных вычислений.

function task2(counter) {
    let num1 = 1;
    let num2 = 2;
    counter_program = 0

    while (counter_program !== counter) {
        num3 = num1 + num2;
        console.log(num3)
        num1 = num2;
        num2 = num3;
        counter_program++;
    }
}

task2(5);
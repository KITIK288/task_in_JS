// Задача: Напишите функцию addNumbers, которая принимает массив чисел и возвращает их сумму.

function addNumbers(numbers) {
    const summa = numbers.reduce((acc, num) => acc + num, 0);
    console.log(summa);
}

addNumbers([0, 0, 0, 1, 2]);

// мяу
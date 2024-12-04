// Задача: Напишите функцию addNumbers, которая принимает массив чисел и возвращает их сумму.

function addNumbers(numbers) {
    return(numbers.reduce((acc, num) => acc + num, 0));
}

addNumbers([0, 0, 0, 1, 2]);

// мяу
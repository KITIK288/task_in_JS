// Задача: Напишите функцию addNumbers, которая принимает массив чисел и возвращает их сумму.

function addNumbers(numbers) {
    summa = 0
    for (i = 0; i < numbers.length; i++) {
        summa += numbers[i];
    }
    console.log(summa);
}

addNumbers([0, 0, 0, 1, 2])

// мяу
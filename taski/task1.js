// Задача: Напишите функцию addNumbers, которая принимает массив чисел и возвращает их сумму.

function addNumbers(numbers) {

    summa  = 0

    for (i = 0; i < numbers.length; i++) {
        summa += i;
    }
    console.log(summa);
}

addNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

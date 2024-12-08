// Задача: Напишите функцию, которая принимает массив чисел и возвращает их сумму.

function sumArray(arr) {
    summa = 0;
    for (i = 0; i < arr.length; i++) {
        summa += arr[i];
    }
    console.log(summa);
}

sumArray([1, 2, 3, 4, 5]);

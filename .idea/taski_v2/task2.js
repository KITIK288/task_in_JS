// Задача:
// Напишите функцию, которая принимает массив чисел и возвращает максимальное число в этом массиве.

function findMax(arr) {
    max = 0
    for (i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
    }
    console.log(max)
}

findMax([1, 2, 4, 3, 1488, 66, 777])

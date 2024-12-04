// Задача: Напишите функцию findMax,
// которая принимает массив чисел и возвращает максимальное значение.

function findMax(numbers) {

    max = 0;

    for (i = 0; i < numbers.length; i++) {
        if (max < numbers[i]) {
            max = numbers[i];
        }
    }
    console.log("Максимально число массива -", max)
}

findMax([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 1, 3, 1444, 3, 5, 7, 12131241242])

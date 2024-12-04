// Задача: Напишите функцию filterEvenNumbers,
// которая принимает массив чисел и возвращает новый массив, содержащий только четные числа.

function filterEvenNumbers(numbers) {
    new_array = [];
    for (i = 0; i < numbers.length; i++) {
        if (i % 2 === 0) {
            new_array.push(i);
        }
    }
    console.log(new_array);
}


filterEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
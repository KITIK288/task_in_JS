// Описание: Напишите функцию, которая принимает массив чисел и возвращает новый массив,
//
// содержащий только четные числа.

function task5(array) {
    new_array = [];
    for (i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            new_array.push(array[i]);

        }
    }
    console.log(new_array);
}

task5([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])


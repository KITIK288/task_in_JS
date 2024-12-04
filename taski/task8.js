// Задача: Напишите функцию sortArray,
// которая принимает массив чисел и возвращает новый массив, отсортированный по возрастанию.

function sortArray(numbers) {
    numbers.sort((a, b) => a - b);
    numbers = numbers.join(", ");
    console.log(numbers);
}

sortArray([1, 2, 3, 4, 1, 2, 7 ,8, 9, 12123, 1241])
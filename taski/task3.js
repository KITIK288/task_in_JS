// Напишите функцию reverseString, которая принимает строку и возвращает её в обратном порядке.

function reverseString(str) {
    console.log("Исходная строка -", str)
    const result = str
        .split('')
        .reverse()
        .join('');
        console.log("Строка в обратном порядке символов -", result)
}

reverseString("я котик")
// Задача: Напишите функцию countWords,
// которая принимает строку и возвращает количество слов в ней (слова разделены пробелами).

function countWords(str) {
    let counter = 0;
    const array = str.split(/[ .!?:;()-]+/);

    for (let i = 0; i < array.length; i++) {
        if (array[i] !== '') {
            counter++;
        }
    }
    console.log("Количество слов в строке:", counter);
}

countWords("Котик китик китяра косик");
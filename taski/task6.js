// Задача: Напишите функцию generateTQuads,
// которая принимает число n и генерирует массив строк в формате "T-1", "T-2", ..., "T-n".

function generateTQuads(n) {
    array = [];
    for (i = 1; i < (n + 1); i++) {
        array.push(`T-${i}`);
    }
    console.log(array)
}

generateTQuads(488);

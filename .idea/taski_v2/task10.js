// Описание: Найдите медиану двух отсортированных массивов.
//
// Это задача имеет сложность O(log(min(n, m))) во временной сложности.

function task10(array1, array2) {
    new_array = [];
    for (i = 0; i < array1.length; i++) {
        new_array.push(array1[i]);
    }
    for (i = 0; i < array2.length; i++) {
        new_array.push(array2[i]);
    }

    const midIndex = Math.floor(new_array.length / 2);

    if (new_array.length % 2 === 0) {
        a = new_array.length / 2
        console.log(new_array[a - 1]);
        console.log(new_array[a]);
    } else {
        console.log(new_array[midIndex - 1]);
    }

}

task10([1, 2, 3, 4, 5], [6, 7, 8, 9, 10])

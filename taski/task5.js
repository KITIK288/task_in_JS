// Задача: Напишите функцию isPalindrome, которая принимает строку и возвращает true,
// если она является палиндромом, и false в противном случае.

function isPalindromeNumber(num) {
    const strNum = num.toString();
    const reversedNum = strNum.split('').reverse().join('');

    if (strNum === reversedNum) {
        return true;
    }
}

// Примеры использования
console.log(isPalindromeNumber(121));
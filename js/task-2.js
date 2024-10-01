/**Объяви функцию formatMessage(message, maxLength),
 * которая принимает строку (параметр message) и проверяет ее длину
 * в соответствии с заданной максимальной длиной (параметр maxLength).
 * Дополни код функции таким образом, что:
 * - Если длина строки равна или меньше maxLength,
 * то функция возвращает исходную строку без изменений.
 * - Если длина превышает maxLength, то функция обрезает строку
 * до maxLength символов, добавляет точку "..."
 * в конце и возвращает обрезанную версию. */

function formatMessage(message, maxLength) {
  if (message.length <= maxLength) {
    return message;
  } else {
    return message.slice(0, maxLength) + '...';
  }
}
console.log(formatMessage('Curabitur ligula sapien', 16)); // "Curabitur ligula..."
console.log(formatMessage('Curabitur ligula sapien', 23)); // "Curabitur ligula sapien"
console.log(formatMessage('Vestibulum facilisis purus nec', 20)); // "Vestibulum facilisis..."
console.log(formatMessage('Vestibulum facilisis purus nec', 30)); // "Vestibulum facilisis purus nec"
console.log(formatMessage('Nunc sed turpis a felis in nunc fringilla', 15)); // "Nunc sed turpis..."
console.log(formatMessage('Nunc sed turpis a felis in nunc fringilla', 41)); // "Nunc sed turpis a felis in nunc fringilla"

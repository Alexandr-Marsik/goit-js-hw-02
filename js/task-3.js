/**Функция checkForSpam(message) принимает строку (параметр message),
 * проверяет ее на содержание запрещенных слов spam и sale,
 * и возвращает результат проверки. Слова в строке параметра message
 * могут быть в произвольном регистре, например SPAM или sAlE.
 * Дополни код функции таким образом, что:
 * - Если найдено запрещенное слово (spam или sale),
 * то функция возвращает буль true
 * - Если в строке отсутствуют запрещенные слова,
 * функция возвращает буль false */

function checkForSpam(message) {
  if (
    message.toLowerCase().includes('spam') ||
    message.toLowerCase().includes('sale')
  ) {
    return true;
  } else {
    return false;
  }
}
console.log(checkForSpam('Latest technology news')); // false
console.log(checkForSpam('JavaScript weekly newsletter')); // false
console.log(checkForSpam('Get best sale offers now!')); // true
console.log(checkForSpam('Amazing SalE, only tonight!')); // true
console.log(checkForSpam('Trust me, this is not a spam message')); // true
console.log(checkForSpam('Get rid of sPaM emails. Our book in on sale!')); // true
console.log(checkForSpam('[SPAM] How to earn fast money?')); // true

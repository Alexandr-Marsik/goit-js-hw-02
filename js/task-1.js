/*  Станция по продаже ремонтных дроидов готова к запуску,
 * осталось написать программное обеспечение для отдела продаж.
 * Объяви функцию makeTransaction(quantity, pricePerDroid, customerCredits),
 * которая составляет и возвращает сообщение о покупке ремонтных дроидов.
 * Она объявляет три параметра, значения которых будут задаваться при ее вызове:
 * - quantity - количество заказанных дроидов
 * - pricePerDroid - цена одного дроида
 * - customerCredits - сумма средств на счету клиента Дополни функцию следующим образом:
 * - Объяви переменную для хранения общей суммы заказа
 * (общая стоимость всех заказанных дроидов) и задай ей выражение расчета этой суммы.
 * - Добавь проверку, сможет ли клиент оплатить заказ:
 * - если сумма к оплате превышает количество кредитов на счету клиента,
 * функция должна возвращать строку "Insufficient funds!"
 * - в противном случае функция должна возвращать строку
 * "You ordered <quantity> droids worth <totalPrice> credits!",
 * где <quantity> это количество заказанных дроидов, а <totalPrice>
 * это их общая стоимость. */

function makeTransaction(quantity, pricePerDroid, customerCredits) {
  const totalPrice = pricePerDroid * quantity;
  if (totalPrice > customerCredits) {
    return 'Insufficient funds!';
  } else {
    return `'You ordered ${quantity} droids worth ${totalPrice} credits!'`;
  }
}
console.log(makeTransaction(5, 3000, 23000)); // "You ordered 5 droids worth 15000 credits!"
console.log(makeTransaction(3, 1000, 15000)); // "You ordered 3 droids worth 3000 credits!"
console.log(makeTransaction(10, 5000, 8000)); // "Insufficient funds!"
console.log(makeTransaction(8, 2000, 10000)); // "Insufficient funds!"
console.log(makeTransaction(10, 500, 5000)); // "You ordered 10 droids worth 5000 credits!"

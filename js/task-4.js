/**Объяви функцию getShippingCost(country),
 * которая должна проверять возможность доставки товара
 * в страну пользователя (параметр country)
 * и возвращать сообщение о результате.
 * Обязательно используй инструкцию switch.
 * Формат возвращаемой строки
 * "Shipping to <country> will cost <price> credits",
 * где вместо <country> и <price> необходимо подставить
 * соответствующие значения. Список стран и стоимость доставки:
 * - China - 100 кредитов
 * - Chile - 250 кредитов
 * - Australia - 170 кредитов
 * - Jamaica - 120 кредитов Из списка видно,
 * что доставка возможна не везде.
 * Если указанная страна отсутствует в списке,
 * то функция должна вернуть строку
 * "Sorry, there is no delivery to your country". */

function getShippingCost(country) {
  let price = 0;
  switch (country) {
    case 'China':
      price = 100;
      break;
    case 'Chile':
      price = 250;
      break;
    case 'Australia':
      price = 170;
      break;
    case 'Jamaica':
      price = 120;
      break;
    default:
      return 'Sorry, there is no delivery to your country';
  }
  return `Shipping to ${country} will cost ${price} credits`;
}

console.log(getShippingCost('Australia')); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost('Germany')); // "Sorry, there is no delivery to your country"
console.log(getShippingCost('China')); // "Shipping to China will cost 100 credits"
console.log(getShippingCost('Chile')); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost('Jamaica')); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost('Sweden')); // "Sorry, there is no delivery to your country"

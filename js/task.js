//console.log('parsedSum:', parsedSum);
//console.log('parsedSum:', parsedSum);
//function checkAge(age) {
//  if (age >= 18) {
//    return `You are an adult`;
//  }
//}
//console.log(checkAge);
//
//function checkStorage(available, ordered) {
//  if (available > ordered) {
//    return (checkStorage = `Order is processed, our manager will contact you`);
//  } else {
//    return (checkStorage = `Not enough goods in stock!`);
//  }
//}
//console.log(checkStorage);
//
////function checkStorage(available, ordered) {
////  if (ordered == 0) {
////    return `There are no products in the order!`;
////  } else if (ordered > available) {
////    return `Your order is too large, there are not enough items in stock!`;
////  } else if (available == ordered) {
////    return `The order is accepted, our manager will contact you`;
////  } else {
////    return `The order is accepted, our manager will contact you`;
////  }
////}
////console.log(checkStorage);
//
//function checkPassword(password) {
//  const correctPassword = 'jqueryismyjam';
//  return password === correctPassword
//    ? `Access granted`
//    : `Access denied, wrong password!`;
//}
//console.log(checkPassword);
//
//function getSubscriptionPrice(type) {
//  switch (type) {
//    case 'starter':
//      return 0;
//      break;
//    case 'professional':
//      return 20;
//      break;
//    case 'organization':
//      return 50;
//      break;
//    default:
//      return 'Invalid subscription type!';
//      break;
//  }
//}
//console.log(getSubscriptionPrice);
//
//function isNumberInRange(start, end, number) {
//  return number >= start && number <= end;
//}
//
//function checkAccess(subType) {
//  if (subType === 'pro' || subType === 'vip') {
//    return true;
//  } else if (subType === 'starter' || subType === 'free') {
//    return false;
//  }
//}
//
//function getSubstring(string, length) {
//  return string.slice(0, length);
//}
//
//function normalizeInput(input, to) {
//  if (to === 'upper') {
//    return input.toUpperCase();
//  } else if (to === 'lower') {
//    return input.toLowerCase();
//  }
//}
//
//function checkForName(fullName, firstName) {
//  const normalizedFullName = fullName.toLowerCase();
//  const normalizedFirstName = firstName.toLowerCase();
//  return normalizedFullName.includes(normalizedFirstName);
//}
//
//function checkFileExtension(fileName, ext) {
//  return fileName.endsWith(ext)
//    ? 'File extension matches'
//    : 'File extension does not match';
//}
//
//function getFileName(file) {
//  const dotPos = file.indexOf('.');
//  if (dotPos === -1) {
//    return file;
//  } else {
//    return file.slice(0, dotPos);
//  }
//}
//
//function createFileName(name, ext) {
//  return `${name.trim()}.${ext}`;
//}
//
//function calculateTotal(number) {
//  let sum = 0;
//  for (let i = 0; i <= number; i++) {
//    sum += i;
//  }
//  return sum;
//}
//console.log(calculateTotal);

//let msg;
//const input = confirm('do you have access?');
//if (input) {
//  msg = 'connected to DataBase';
//} else {
//  msg = 'connention failed';
//}
//console.log(msg);
//input;
//console.log(typeof input);
//let msg;
//const username = 'Mango';
//const getUserName = prompt('What is your nicname?');
//
//if (getUserName === 'Mango') {
//  msg = `Welcom, ${getUserName}`;
//} else if (getUserName === 'Poly') {
//  msg = `Welcom, ${getUserName}`;
//} else if (getUserName === 'Ajax') {
//  msg = `Welcom, ${getUserName}`;
//} else {
//  msg = `Sorry, access dennied`;
//}
//console.log(msg);

//function getRandomPoints() {
//  //let points;
//  const randomNumber = Math.random();
//  if (randomNumber > 0.7) {
//    points = Namber.parseInt(randomNumber * 1000 + 1000);
//  } else if (randomNumber > 0.4) {
//    points = Namber.parseInt(randomNumber * 1000);
//  } else {
//    points = Namber.parseInt(randomNumber * 100);
//  }
//  return points;
//}
//const points = getRandomPoints();
//console.log('points:', points);
//if (points <= 100) {
//  console.log('you have 100 points');
//} else if (points > 100 && points <= 1000) {
//  console.log('you have 1000 points');
//} else {
//  console.log('you have 2000 points');
//}
//

//if (balance >= 0) {
//  message = 'Positive';
//} else {
//  message = 'Negative';
//}
//message = balance >= 0 ? 'Positive' : 'Negative';

//********************************************//
//const balance = -1000;
//let message;
//message = balance >= 0 ? showPositiveBalance() : showNegativeBalance();
//
//function showPositiveBalance() {
//  return 'You have positive balance';
//}
//function showNegativeBalance() {
//  return 'You have negative balance';
//}
//balance >= 0
//  ? 'Positive'
//  : balance > 999
//  ? 'you are rich'
//  : balance < 100 && balance > 0
//  ? 'you have some money'
//  : 'Negative';
//console.log(message);
//********************************************//
//function showC() {
//  const c = 15;
//  console.log(c);
//}
//showC();
//****************************************//
//          запись if else            //
//const hours = 14;
//const minutes = 26;
//let timestring = '';
//if (minutes === 0) {
//  timestring = `${hours} г.`;
//} else {
//  timestring = `${hours} г. ${minutes} хв.`;
//}
//         запись тернарный оператор       //
//timestring = `${hours} г. ` + (minutes > 0 ? `${minutes} хв.` : '');
//console.log(timestring);
//************************************//
//const daysUntilDeadline = 2;
//
//if (daysUntilDeadline === 0) {
//  console.log('today');
//} else if (daysUntilDeadline === 1) {
//  console.log('tomorrow');
//} else if (daysUntilDeadline === 2) {
//  console.log('overmorrow');
//} else {
//  console.log('date in the future');
//}
//*******    Оператор switch            */
//const daysUntilDeadline = 0;
//switch (daysUntilDeadline) {
//  case 0:
//    console.log('today');
//    break;
//  case 1:
//    console.log('tomorrow');
//    break;
//  case 2:
//    console.log('overmorrow');
//    break;
//  default:
//    console.log('date in the future');
//}
//*******    логічні оператори         */
//const sub = 'pro';
//const hasAccess = sub === 'pro' || sub === 'vip';
//console.log('Does user get access?', hasAccess);
//const username = 'Jacob Marcer';
//const copyOfUsername = username.slice(0, 8);
//console.log('copyOfUsername:', copyOfUsername);
//********************************** */
//const word = 'I Love js';
//for (let index = 0; index < 10; index++) {
//  console.log('index:', index);
//  console.log(`${word} ${index} times`);
//}
//********************************* */
//let a = 10;
//let b = ++a;
//console.log('a:', a);
//console.log('b:', b);
//****************************

//********       практика       **********/
//const checkSum = prompt(`input check sum please`);
//const tip = prompt(`input % of the tips pleas`);
//if (checkSum === null || tip === null) {
//  alert(`canceled`);
//} else {
//  const parsedSum = Number.parseFloat(checkSum);
//  const parsedTip = Number.parseFloat(tip);
//  if (
//    Number.isNaN(parsedSum) ||
//    Number.isNaN(parsedTip) ||
//    parsedSum < 0 ||
//    parsedTip > 100 ||
//    parsedTip < 0
//  ) {
//    alert(`invalid data`);
//  } else {
//    const tipSum = (parsedSum * parsedTip) / 100;
//    const totalSum = tipSum + parsedSum;
//    const message = `check sum: ${parsedSum}
//Tip: ${parsedTip}%
//Tip amount: ${tipSum.toFixed(2)}
//Total sum to pay: ${totalSum.toFixed(2)}`;
//    alert(message);
//  }
//}
//*******    ***   ***   ***    */
//const max = 50;
//const min = 23;
//for (let a = max; a >= 23; a -= 1) {
//  if (a % 2 == 0) {
//    console.log(a);
//  }
//}

//const word = prompt(`Enter word`);
//if (word === null || word.trim() === '') {
//  alert(`Canceled.`);
//} else {
//  const amount = word.length;
//  if (amount % 2 == 0) {
//    const firstIndex = amount / 2 - 1;
//    const secondIndex = amount / 2 + 1;
//    const cubString = word.slice(firstIndex, secondIndex);
//    alert(cubString);
//  } else {
//    const firstIndex = (amount - 1) / 2;
//    const secondIndex = firstIndex + 1;
//    const cubString = word.slice(firstIndex, secondIndex);
//    alert(cubString);
//  }
//}
//*******    ***   ***   ***    */
//console.log(2 + 5 + '' + 1 + 0 - 10);
//console.log('' + 1 - 0);
//console.log(true + false);
//console.log(true + '');
//console.log(true + 'folse');
//console.log(true - 'folse');
//console.log(6 / '3');
//console.log('2' * '3');
//console.log('4' - 2);
//console.log('4px' - 2);
////**  **  **  **  **  **  **  **   */
//console.log(null == 0);
//console.log(undefined == 0);
//console.log(undefined == null);
//console.log('123' == 123);
//console.log(true == '1');
//console.log(NaN == NaN);
//console.log('4' != 4);
//console.log('4' !== 4);
//console.log(null > 0);
//console.log(null >= 0);
//******************************** */
//*****    начало      ******** */
//console.log(true && 3);
//console.log(false && 3);
//console.log(false && false);
//console.log(true && 4 && 'kiwi');
//console.log(true && '' && 'kiwi');
//console.log(true && ' ' && 'kiwi');
//console.log(true && 0 && 'kiwi');
//console.log(true || 3);
//console.log(true || 3 || 4);
//console.log(true || false || 7);
//console.log(false || true || 7);
//console.log(null || 2 || undefined);
//console.log((1 && null && 2) > 0);
//console.log(null || (2 && 3) || 4);
//console.log(null || (null && 3) || 4);

const jimmyChooPrice = 900;
const jimmyChooWeight = 1.5;

const chanelPrice = 1000;
const chanelWeight = 1.5;

const basket = jimmyChooPrice * 2 + chanelPrice * 1; // Basket price
const basketWeight = jimmyChooWeight * 2 + chanelWeight * 1; // Basket weight

const isFreeShipping = basket >= 3000;
isFreeShipping && alert('The delivery will be free for you!');

const isNearFreeShipping =
  basket >= 3000 - 200 &&
  !isFreeShipping &&
  alert("If you take one more article, you'll get free shipping!");

const userAge = 25;
const hasBuyInLastMonth = true;
const hasAlreadyBuyShoes = false;
const hasRegisteredCard = false;
const hasAppleProduct = true;

const has10PercentReduction =
  userAge >= 18 &&
  hasBuyInLastMonth &&
  (hasAlreadyBuyShoes || hasRegisteredCard || hasAppleProduct) &&
  alert('Congratulations ! You are eligible to a 10% discount.');

const has5PercentReduction =
  userAge >= 18 &&
  hasAlreadyBuyShoes &&
  hasRegisteredCard &&
  !has10PercentReduction &&
  alert('Congratulations ! You are eligible to a 5% discount.');

const has2PercentReduction =
  (hasAppleProduct ||
    hasRegisteredCard ||
    hasAlreadyBuyShoes ||
    (hasAlreadyBuyShoes && userAge >= 18)) &&
  alert('Congratulations ! You are eligible to a 2% discount.');

console.log('Final total price: ' + basket + '$');
console.log('The client end up with a 10% ans a 2% discount.');

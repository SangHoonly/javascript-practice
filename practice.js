const prices = ['1.0', 'negotiable', '2.15'];

const formattedPrices = 
  prices.filter(price => parseFloat(price)).map(price => parseFloat(price));
console.log(formattedPrices);

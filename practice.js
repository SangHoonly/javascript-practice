const fetch = require("node-fetch");
async function loadData() {
  const url = 'https://eatgo-customer-api.ahastudio.com/regions';
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
}


  // const url = 'https://eatgo-customer-api.ahastudio.com/regions';

// fetch("https://jsonplaceholder.typicode.com/posts/1").then((response) =>
//   console.log(response)
// )

// const data = loadData();
// console.log(data);
loadData();
console.log(3);

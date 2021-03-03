// const discounter = (discount) => price => price * (1 - discount);

// const lsh = (age) => () => console.log(`Age is ${age}`);

// const sayAge = lsh(28);
// console.log(sayAge);
// sayAge();

const lshName = {
  name: 'lsh',
}

const lshAddress = {
  address: '성남시 분당구',
}

const lshAge = {
  age: 28,
}

const setLshInformation = (information) => {
  console.log(`information ${added}`);
  return {...information};
}

const nameAdded = setLshInformation(lshName);


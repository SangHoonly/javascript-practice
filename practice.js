const discounter = (discount) => price => price * (1 - discount);

const lsh = (age) => () => console.log(`Age is ${age}`);

const sayAge = lsh(28);
console.log(sayAge);
sayAge();

// const tenPercentOff = discounter(0.1);
// console.log(tenPercentOff(100));

//화살표 함수 괄호 중괄호 연습
//화살표 함수 고차함수 연습
//https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions/Arrow_functions

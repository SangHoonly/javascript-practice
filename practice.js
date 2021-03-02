const discounter = (discount) => price => price * (1 - discount);

const lsh = (age) => () => console.log(`Age is ${age}`);

const sayAge = lsh(28);
console.log(sayAge);
sayAge();

const building = {
  hours: '8am ~ 8pm',
  address: '대구시 수성구',
};

const manager = {
  name: '이상훈',
  phone: '01031325664',
}

const program = {
  name: '프로그램',
  room: '321',
  hours: '22 ~ 22',
}

function mergeProgramInformation(building, manager) {
  const { hours, address } = building;
  const { name, phone } = manager;
  const defaults = {
    hours,
    address,
    contact: name,
    phone,
  };

  return program => {
    return { ...defaults, ...program };
  };
}

const programInfo = mergeProgramInformation(building, manager)(program);
console.log(programInfo);

// const tenPercentOff = discounter(0.1);
// console.log(tenPercentOff(100));

//화살표 함수 괄호 중괄호 연습
//화살표 함수 고차함수 연습
//https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions/Arrow_functions

const dogs = [
  {
    이름: '맥스',
    크기: '소형견',
    견종: '보스턴테리어',
    색상: '검정색',
  },
  {
    이름: '도니',
    크기: '대형견',
    견종: '래브라도레트리버',
    색상: '검정색',
  },
  {
  이름: '섀도',
  크기: '중형견',
  견종: '래브라도레트리버',
  색상: '갈색',
  },
];
// 갈색 색상만 빼고 나머지 색깔 출력
const colors = dogs.reduce((colors, dog) => {
  // console.log(dog.색상);
  // if (dog.색상 === '갈색') {
  //   return 
  // }
  return (dog.색상 !== '갈색' ? [...colors, dog['색상']] : colors);
}, []);

console.log(colors);

import practiceFunction from './practice';

test('practiceFunction', () => {
  const result = practiceFunction(10);

  expect(result(10)).toBe(11);
});

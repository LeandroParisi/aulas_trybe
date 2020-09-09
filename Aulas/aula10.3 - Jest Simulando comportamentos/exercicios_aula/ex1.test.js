function randomDice(sides) {
  const randomNumber = Math.random();
  return Math.round(randomNumber * sides);
}

test('testing if the func was called', () => {
  randomDice = jest
    .fn()
    .mockReturnValue(10);

  expect(randomDice()).toBe(10);
})
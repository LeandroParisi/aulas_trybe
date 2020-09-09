const stats = require('./ex2-mock');

jest.mock('./ex2-mock');

test('testing funcion call, timed called, parameters and returns', () => {
  stats.hp.mockImplementation((a) => a * 8);
  stats.hp(5);

  expect(stats.hp).toHaveBeenCalled();
  expect(stats.hp).toHaveBeenCalledTimes(1);
  expect(stats.hp).toHaveBeenCalledWith(5);
  expect(stats.hp(5)).toBe(40);
})

test('testing dex func call, times called, parameters and returns', () => {
  stats.dex.mockImplementation((a) => a * 2.4);
  stats.dex(10);

  expect(stats.dex).toHaveBeenCalled();
  expect(stats.dex).toHaveBeenCalledTimes(1);
  expect(stats.dex).toHaveBeenCalledWith(10);
  expect(stats.dex(10)).toBe(24);
})

const stats = require('./ex2-mock');

test('testing funcion call, timed called, parameters and returns', () => {
  const spyHp = jest.spyOn(stats, 'hp');
  
  spyHp(5);

  expect(spyHp).toHaveBeenCalled();
  expect(spyHp).toHaveBeenCalledTimes(1);
  expect(spyHp).toHaveBeenCalledWith(5);
  expect(spyHp(10)).toBe(120);
  expect(spyHp).toHaveBeenCalledTimes(2);


  const spyStr = jest.spyOn(stats, 'str');

  spyStr(5);
  expect(spyStr).toHaveBeenCalled();
  expect(spyStr).toHaveBeenCalledTimes(1);
  expect(spyStr).toHaveBeenCalledWith(5);
  expect(spyStr(10)).toBe(30);
  expect(spyStr).toHaveBeenCalledTimes(2);
});

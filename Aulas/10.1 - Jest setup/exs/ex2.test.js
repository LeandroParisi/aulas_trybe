const allNames = require('./ex2');
const { TestScheduler } = require('jest');

console.log(allNames);

allNames();

test('should return Nomes: George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft.', () => {
  expect(allNames()).toBe("Nomes: George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft.");
})

// teste
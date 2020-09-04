const uppercase = (str, callback) => {
  callback(str.toUpperCase());
}

describe('test async func', () => {
  it('should return ABC', (done) => {
    uppercase('abc', (toUpperCase) => {
      expect(toUpperCase).toBe('ABC');
      done()
    })
  })
})
const users = {
  4: { name: 'Mark' },
  5: { name: 'Paul' }
  };
  
  const findUserById = (id) => {
    return new Promise((resolve, reject) => {
        if (users[id]) {
          return resolve(users[id]);
        }
  
        return reject({ error: 'User with ' + id + ' not found.' });
    });
  }
  
  const getUserName = (userID) => {
    return findUserById(userID).then(user => user.name);
  }



  describe('testing resolves on promise', () => {
    it('should return MARK', () => {
      expect.assertions(1);
      return getUserName(4).then(data => expect(data).toBe('Mark'));
    })

    it('should return paul', () => {
      expect.assertions(1);
      return getUserName(5).then(data => expect(data).toBe('Paul'));
    })
  })

  describe('testing reject on promise', () => {
    it('should return an error', () => {
      expect.assertions(1);
      return getUserName(3).catch(error => {
        expect(error).toEqual({ error: 'User with 3 not found.' })
      })
    })
  })
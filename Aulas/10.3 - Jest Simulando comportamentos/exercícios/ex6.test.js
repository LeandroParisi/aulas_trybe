const service = require('./ex6');
const { fetchDogPhoto } = require('./ex6');

describe('testando requisição', () => {
  service.fetchDogPhoto = jest.fn();

  const fetchDogMocked = service.fetchDogPhoto;

  beforeEach(() => {
    fetchDogMocked.mockReset()
  })

  it('Simulando resolve', () => {
    fetchDogMocked.mockResolvedValue('Requisição resolvida com sucesso');

    expect(fetchDogMocked()).resolves.toBe("Requisição resolvida com sucfdsesso");
  })
})
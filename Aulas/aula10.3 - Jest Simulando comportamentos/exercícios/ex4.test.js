// 4.2 Faça o mock do arquivo. Faça uma nova implementação para a primeira função, mas agora ela deve retornar a string em caixa baixa. Para a segunda função, uma nova implementação deve retornar a última letra de uma string. A terceira deve receber três strings e concatená-las.

const service = require('./ex4');

jest.mock('./ex4');

describe('testando inversão da implementação das funções', () => {
  it('mockando a primeira função - toCaps', () => {
    const toCapsMock = service.toCaps;
    
    toCapsMock.mockImplementation((a) => a.toLowerCase());
    
    expect(toCapsMock).not.toHaveBeenCalled();
    expect(toCapsMock('EU')).toBe('eu');
    expect(toCapsMock).toHaveBeenCalledTimes(1);
    expect(toCapsMock).toHaveBeenCalledWith('EU');
  })

  it('mockando a segunda função - firstLetter', () => {
    const mockedFirstLetter = service.firstLetter;

    mockedFirstLetter.mockImplementation((string) => string.charAt(string.length - 1));

    expect(mockedFirstLetter).not.toHaveBeenCalled();
    expect(mockedFirstLetter('leandro')).toBe('o');
    expect(mockedFirstLetter).toHaveBeenCalledTimes(1);
    expect(mockedFirstLetter).toHaveBeenCalledWith('leandro');
  })

  it('mockando a terceira função - concatenate', () => {
    const mockedConcatenate = service.concatenate;

    mockedConcatenate.mockImplementation((a, b, c) => `${a}${b}${c}`);

    expect(mockedConcatenate).not.toHaveBeenCalled();
    expect(mockedConcatenate('a', 'b', 'v')).toBe('abv');
    expect(mockedConcatenate).toHaveBeenCalledTimes(1);
    expect(mockedConcatenate).toHaveBeenCalledWith('a', 'b', 'v');
  })
})
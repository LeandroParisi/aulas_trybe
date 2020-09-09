// 5. Utilizando as mesmas funções do exercício anterior, repita a implementação para a primeira função. Após repetir a implementação, restaure a implementação original e crie os testes necessários para validar.

const service = require("./ex4");

describe("testando implementações", () => {
  test("mockando função para receber um parâmetro e retornar em caixa baixa", () => {
    const first = jest
      .spyOn(service, "toCaps")
      .mockImplementation(a => a.toLowerCase());

    expect(first("UPPERCASE")).toBe("uppercase");
    expect(first).toHaveBeenCalled();
    expect(first).toHaveBeenCalledTimes(1);
    expect(first).toHaveBeenCalledWith("UPPERCASE");

    service.toCaps.mockRestore();

    expect(service.toCaps("lowercase")).toBe("LOWERCASE");
  });
});
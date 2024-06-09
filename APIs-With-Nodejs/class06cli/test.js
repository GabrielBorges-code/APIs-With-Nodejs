const { deepEqual, ok } = require("assert");
const database = require("./database");

const DEFAULT_ITEM_CADASTRADO = { nome: "Flash", poder: "Velocidade", id: 1 };

describe("Suite de manipulação de heróis", () => {
  it("deve cadastrar um herói, usando arquivos", async () => {
    const expected = DEFAULT_ITEM_CADASTRADO;
    const [resultado] = await database.listar(expected.id);

    deepEqual(resultado, expected);
  });
});

const { randomUUID } = require("crypto");

class ControleEstoque {
  constructor(dadosEstoque) {
    this.produtos = new Map();
    this.movimentacoes = [];

    for (const p of dadosEstoque.estoque) {
      this.produtos.set(p.codigoProduto, {
        descricaoProduto: p.descricaoProduto,
        estoque: Number(p.estoque)
      });
    }
  }

  movimentar(codigoProduto, quantidade, descricaoMovimentacao) {
    if (!this.produtos.has(codigoProduto)) {
      throw new Error("Produto não encontrado.");
    }
    if (quantidade === 0) {
      throw new Error("Quantidade não pode ser zero.");
    }

    const prod = this.produtos.get(codigoProduto);
    const novoEstoque = prod.estoque + quantidade;

    if (novoEstoque < 0) {
      throw new Error(
        `Estoque insuficiente. Atual=${prod.estoque}, saída=${-quantidade}`
      );
    }

    const id = randomUUID();
    prod.estoque = novoEstoque;

    this.movimentacoes.push({
      id,
      codigoProduto,
      descricaoMovimentacao,
      quantidade,
      estoqueFinal: novoEstoque
    });

    return { id, estoqueFinal: novoEstoque };
  }

  consultarEstoque(codigoProduto) {
    if (!this.produtos.has(codigoProduto)) return null;
    return this.produtos.get(codigoProduto).estoque;
  }

  historico() {
    return this.movimentacoes;
  }
}

// ====== TESTE ======
const dadosEstoque = {
  estoque: [
    { codigoProduto: 101, descricaoProduto: "Caneta Azul", estoque: 150 },
    { codigoProduto: 102, descricaoProduto: "Caderno Universitário", estoque: 75 },
    { codigoProduto: 103, descricaoProduto: "Borracha Branca", estoque: 200 },
    { codigoProduto: 104, descricaoProduto: "Lápis Preto HB", estoque: 320 },
    { codigoProduto: 105, descricaoProduto: "Marcador de Texto Amarelo", estoque: 90 }
  ]
};

const ce = new ControleEstoque(dadosEstoque);

console.log("Entrada 30 Caneta 101:", ce.movimentar(101, 30, "Compra fornecedor"));
console.log("Saída 50 Lápis 104:", ce.movimentar(104, -50, "Pedido cliente"));

console.log("Estoque final 101:", ce.consultarEstoque(101));
console.log("Histórico:", ce.historico());

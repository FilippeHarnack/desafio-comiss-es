# Como testar o desafio (JavaScript / Node.js)

Este projeto possui 3 arquivos de teste:

- `comissãoVendas.js` → calcula comissão por vendedor  
- `estoque.js` → realiza movimentações e mostra estoque final  
- `juros.js` → calcula juros por atraso (2,5% ao dia)

---

## ✅ Requisitos

Ter o Node.js instalado.

Verifique com:

```bash
node -v
npm -v
```

---

## 🚀 Passo a passo para testar

Abra o terminal na pasta do projeto:

```bash
cd "C:\Users\Euro Info\Documents\desafio comissões"
```

### 1) Testar comissão

Execute:

```bash
node "comissãoVendas.js"
```

Saída esperada:

```txt
{
  'João Silva': 495.68,
  'Maria Souza': 465.95,
  'Carlos Oliveira': 379.37,
  'Ana Lima': 404.98
}
```

---

### 2) Testar estoque

Execute:

```bash
node estoque.js
```

O script já faz testes automáticos:
- entrada de 30 unidades no produto 101
- saída de 50 unidades no produto 104
- imprime o estoque final e o histórico de movimentações

Exemplo de saída:

```txt
Entrada 30 Caneta 101: { id: '...', estoqueFinal: 180 }
Saída 50 Lápis 104: { id: '...', estoqueFinal: 270 }
Estoque final 101: 180
Histórico: [ ... ]
```

---

### 3) Testar juros

Execute:

```bash
node juros.js
```

O script calcula:
- dias em atraso
- juros simples de 2,5% ao dia
- total atualizado

Exemplo de saída:

```txt
{ diasAtraso: 25, juros: 625, totalAtualizado: 1625 }
```

---

## 🔧 Como testar com outros valores

### Comissão
Edite o objeto `dadosVendas` dentro do `comissãoVendas.js`.

### Estoque
Edite o objeto `dadosEstoque` e/ou os comandos:
```js
ce.movimentar(codigo, quantidade, "descrição")
```

### Juros
Mude o valor e a data:
```js
const valor = 1000;
const vencimento = "2025-11-01";
```

---

## Observação
Os IDs gerados no estoque são únicos e mudam a cada execução.

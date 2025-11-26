function calcularJurosSimples(valor, dataVencimentoStr) {
  const vencimento = new Date(dataVencimentoStr + "T00:00:00");
  const hoje = new Date();
  hoje.setHours(0, 0, 0, 0);

  const msPorDia = 24 * 60 * 60 * 1000;
  const diasAtraso = Math.floor((hoje - vencimento) / msPorDia);

  if (diasAtraso <= 0) {
    return { diasAtraso: 0, juros: 0, totalAtualizado: Number(valor.toFixed(2)) };
  }

  const juros = valor * 0.025 * diasAtraso;
  const totalAtualizado = valor + juros;

  return {
    diasAtraso,
    juros: Number(juros.toFixed(2)),
    totalAtualizado: Number(totalAtualizado.toFixed(2))
  };
}

// ====== TESTE ======
const valor = 1000;
const vencimento = "2025-11-01"; // mude pra testar

console.log(calcularJurosSimples(valor, vencimento));

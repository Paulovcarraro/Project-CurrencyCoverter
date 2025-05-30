document
  .getElementById("currency-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Obter valores de entrada

    const valor = document.getElementById("amount").value;
    const daMoeda = document.getElementById("daMoeda").value;
    const paraMoeda = document.getElementById("paraMoeda").value;

    // Definir taxas de cambio

    const exenchangeRates = {
      USD: { BRL: 5.73, EUR: 0.88 },
      BRL: { USD: 0.17, EUR: 0.15 },
      EUR: { USD: 1.13, BRL: 6.5 },
    };

    let valorConvertido;
    if (daMoeda === paraMoeda) {
      valorConvertido = valor;
    } else {
      valorConvertido = valor * exenchangeRates[daMoeda][paraMoeda];
    }

    const conversao = document.getElementById("conversao");
    conversao.textContent = `Resultado ${valorConvertido} ${paraMoeda}`;
  });

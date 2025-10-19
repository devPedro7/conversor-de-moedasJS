//COTACAO DAS MOEDAS
const PRICEDOLLAR = 5.41;
const PRICEEURO = 6.29;
const PRICELIBRA = 7.23;

//MAPEANDO O INPUT E DO SELECT E FORMULARIO
let form = document.querySelector("form");
let amount = document.getElementById("amount");
let currency = document.getElementById("currency");

//OBTENDO O VALOR DIGITADO NO INPUT
amount.addEventListener("input", () => {
  //PEGANDO CARACTERES
  const hasCaractereRegexp = /\D+/g;

  //TROCANDO OS VALORES CARACTERES POR NADA
  amount.value = amount.value.replace(hasCaractereRegexp, "");
});

//CAPTURANDO O EVENTO DE SUBMIT (ENVIAR) DO FORMULARIO
form.onsubmit = (event) => {
  event.preventDefault();

  // console.log(currency.value)

  //IDENTIFICANDO A MOEDA SELECIONADA
  switch (
    currency.value //PASSANDO A MOEDA SELECIONADA
  ) {
    case "USD":
      convertCurrency(amount.value, PRICEDOLLAR, "US$");
      console.log("Escolheu dólar");
      break;

    case "EUR":
      convertCurrency(amount.value, PRICEEURO, "€");
      break;

    case "GBP":
      convertCurrency(amount.value, PRICELIBRA, "£");
      break;
  }
};

//FUNÇÃO PARA CONVERTER A MOEDA
function convertCurrency(valorTotal, precoMoeda, simboloMoeda) {

  console.log(valorTotal, precoMoeda, simboloMoeda);
}



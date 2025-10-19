//COTACAO DAS MOEDAS
const PRICEDOLLAR = 5.41;
const PRICEEURO = 6.29;
const PRICELIBRA = 7.23;

//MAPEANDO O INPUT E DO SELECT E FORMULARIO E FOOTER E RESULTADO
let form = document.querySelector("form");
let amount = document.getElementById("amount");
let currency = document.getElementById("currency");
let footer = document.querySelector("main footer")
let descitption = document.getElementById("description")

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

  //console.log(valorTotal, precoMoeda, simboloMoeda);

  try {

    descitption.textContent = `${simboloMoeda} 1 = R$ ${precoMoeda}`
    
    //APLICANDO CLASSE QUE EXIBE O FOOTER PARA MOSTRAR O RESULTADO
    footer.classList.add('show-result')


  } catch (error) {

    //caso der erro no footer, remover
    footer.classList.remove()
    console.log(error);
    alert("Não foi possível converter a moeda: " + error)
  }
}






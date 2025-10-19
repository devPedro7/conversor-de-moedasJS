//MAPEANDO O INPUT E DO SELECT E FORMULARIO
let form = document.querySelector("form")
let amount = document.getElementById("amount")
let currency = document.getElementById("currency")

//OBTENDO O VALOR DIGITADO NO INPUT
amount.addEventListener("input", ()=>{

    //PEGANDO CARACTERES
    const hasCaractereRegexp = /\D+/g

  //TROCANDO OS VALORES CARACTERES POR NADA
  amount.value = amount.value.replace(hasCaractereRegexp, "")
})


//CAPTURANDO O EVENTO DE SUBMIT (ENVIAR) DO FORMULARIO
form.onsubmit = (event)=>{
  event.preventDefault()

  console.log(currency.value)
}
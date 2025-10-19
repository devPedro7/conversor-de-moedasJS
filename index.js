//MAPEANDO O INPUT
let amount = document.getElementById("amount")

//OBTENDO O VALOR DIGITADO NO INPUT
amount.addEventListener("input", ()=>{

    //PEGANDO CARACTERES
    const hasCaractereRegexp = /\D+/g

  //TROCANDO OS VALORES CARACTERES POR NADA
  amount.value = amount.value.replace(hasCaractereRegexp, "")
})

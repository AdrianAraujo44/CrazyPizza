function formatarCEP(campo){
    campo.value=campo.value.replace(/\D/g,"")
    campo.value=campo.value.replace(/^(\d{5})(\d)/,"$1-$2")
  }

function formatarTelefone(campo) {
    campo.value = campo.value.replace(/(\d)(\d{4})$/,"$1-$2") 
}
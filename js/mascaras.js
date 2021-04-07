function apenasNumeros(evt) {
    var theEvent = evt || window.event;
    var key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode( key );
    //var regex = /^[0-9.,]+$/;
    var regex = /^[0-9.]+$/;
    if( !regex.test(key) ) {
       theEvent.returnValue = false;
       if(theEvent.preventDefault) theEvent.preventDefault();
    }
 }

function formatarCEP(campo) {
    campo.value = campo.value.replace(/\D/g, "")
    campo.value = campo.value.replace(/^(\d{5})(\d)/, "$1-$2")
}

function formatarTelefone(campo) {
    campo.value = campo.value.replace(/(\d)(\d{4})$/, "$1-$2")
}
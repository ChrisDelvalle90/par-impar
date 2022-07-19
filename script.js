function verificar() {
    let valor = document.getElementById("numero").value
    resto = valor % 2

    if (resto == 0) {
        alert("PAR!")
    }
    else {
        alert("ÍMPAR!")
    }
    document.getElementById("numero").value = ""
}


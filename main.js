var seccRespuesta = document.querySelector(".respuesta")
var seccSinRespuesta = document.querySelector(".sin-resultado")
var entrada = document.querySelector("#entrada")
var info = document.querySelector(".informacion")
var btnEncriptar = document.querySelector("#encriptar")
var btnDesencriptar = document.querySelector("#desencriptar")
var salida = document.querySelector("#salida")
var btnCopiar = document.querySelector("#copiar")


function comprobacion() {
    var regex = /[A-Z]|[ẃéŕýúíóṕáśǵḱĺźćǘńḿ]/g
    var result = regex.test(entrada.value)

    if (result) {
        info.style.color = "red"
        info.style.fontSize = "1.1em"
        entrada.style.color = "red"
        return true
    } else {
        info.style.fontSize = ".8em"
        info.style.color = "#495057"
        entrada.style.color = "#0A3871"
        return false
    }
}

function mostrarSalida(texto) {
    if (texto == "" || comprobacion()) {
        seccSinRespuesta.style.display = 'flex'
        seccRespuesta.style.display = 'none'
    } else {
        salida.innerHTML = texto
        seccSinRespuesta.style.display = 'none'
        seccRespuesta.style.display = 'flex'
    }
}

function encriptar() {
    var texto = entrada.value
    var encript = {
        "a": "ai",
        "e": "enter",
        "i": "imes",
        "o": "ober",
        "u": "ufat"
    }

    var salida = texto.replace(/[aeiou]/g, vocal => encript[vocal])
    mostrarSalida(salida)
}

function desencriptar() {
    var texto = entrada.value
    var desencript = {
        "ai": "a",
        "enter": "e",
        "imes": "i",
        "ober": "o",
        "ufat": "u"
    }

    var salida = texto.replace(/ai|enter|imes|ober|ufat/g, encript => desencript[encript])
    mostrarSalida(salida)
}

function copiar() {
    navigator.clipboard.writeText(salida.innerHTML)
}


btnEncriptar.onclick = encriptar
btnDesencriptar.onclick = desencriptar
btnCopiar.onclick = copiar
entrada.onkeyup = comprobacion
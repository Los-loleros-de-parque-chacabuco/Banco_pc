
var usuario
var contrasena

// window.onload = function incio_r() {

//     alert("¡B I E N V E N I D @ S!")
//     alert("Registrese o inicie sesión, por favor")
// }

function incio_r() {
    alert("¡B I E N V E N I D @ S!")
    alert("Registrese o inicie sesión, por favor")
}

function registrarse() {
    usuario = window.prompt("Ingrese un usuario")
    contrasena = window.prompt("Ingrese un contraseña")
    alert("Te registraste con éxito.")
}

function iniciar_sesion() {
    let i_usuario = window.prompt("Ingrese su usario")
    let i_contrasena = window.prompt("Ingrese su contraseña")
    if (i_usuario == usuario && i_contrasena == contrasena) {
        alert("Ha ingresado con éxito.")
        window.location.replace("./pagina_principal.html")
    } else {
        alert("Su usuario o contraseña son incorrectos")
    }
}

var retiro
var saldo = 50000
var deposito

function ver_saldo() {
    alert("Su saldo es de " + saldo)
}

function retirar() {
    retiro = window.prompt("¿Cúanto desea retirar?")
    if (retiro <= saldo) {
        alert("Se retiró: " + retiro)
        saldo = saldo - parseInt(retiro)
    }
    else {
        alert("No se puede retirar esa suma")
    }
}

function depositar() {
    deposito = window.prompt("¿Cúanto desea depositar?")
    if (deposito < 20000) {
        alert("Se depositó: " + deposito)
        saldo = saldo + parseInt(deposito)
    }
    else {
        alert("No se puede depositar esa suma")
    }
}

function menu() {
    window.location.replace("index.html")
}

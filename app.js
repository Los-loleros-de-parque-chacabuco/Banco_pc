alert ("¡B I E N V E N I D @ S!")
alert ("Registrese o inicie sesión, por favor")

// V A R I A B L E S
var usuario
var contrasena
var verSaldo
var saldo = 50000


function registrarse(){
    usuario = window.prompt("Ingrese un usuario")
    contrasena = window.prompt("Ingrese un contraseña")
    alert ("Te registraste con éxito.")
}


function iniciar_sesion(){
    let i_usuario = window.prompt("Ingrese su usario")
    let i_contrasena = window.prompt("Ingrese su contraseña")
        if (i_usuario == usuario && i_contrasena == contrasena) { 
            alert("Ha ingresado con éxito.")
            window.location.replace("./pagina_principal.html")
        } else {
            alert("Su usuario o contraseña son incorrectos")
}
}

function ver_saldo(){
    verSaldo alert("Su saldo es de " + saldo)
}


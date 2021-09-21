alert ("¡B I E N V E N I D @ S!")
alert ("Registrese, por favor")

// V A R I A B L E S

let usuario = window.prompt("Ingrese un usuario")
let contraseña = window.prompt("Ingrese un contraseña")
alert ("Te registraste con éxito.")

let i_usuario = window.prompt("Ingrese su usario")
let i_contraseña = window.prompt("Ingrese su contraseña")
if (usuario === i_usuario && contraseña === i_contraseña) {
    window.location.replace("./pagina_principal.html")
} else {
    alert("Su usuario o contraseña son incorrectos")
}
/* Encabezado*/
document.getElementById("idheader").innerHTML = `
<nav class="nav">        
    <a href="index.html" class="logo nav-link">Gbeer </a>
      <img height="70" width="60"  src="img/GB.png" alt="Gbeer" >
         
       
    <button class="nav-toggle" aria-label="Click Aqui!"> 
        <i class="fas fa-bars"></i>
    </button>
    <ul class="nav-menu nav-menu_visible">
       <li class="nav-menu-item"><a href="nosotros.html" class="nav-menu-link nav-link">Nosotros</a></li>
       <li class="nav-menu-item"><a href="cervezas.html" class="nav-menu-link nav-link">Cervezas</a></li>
       <li class="nav-menu-item"><a href="Amigos.html" class="nav-menu-link nav-link">Amigos</a></li>
       <li class="nav-menu-item"><a href="contacto.html" class="nav-menu-link nav-link nav-menu-link_active">contacto</a></li> 
    </ul>
</nav>
`
/* Pie de pagina*/
document.getElementById("idfooter").innerHTML = `
    <a class="redsoc" href="https://www.twitter.com" target="_blank"><i class="fa fa-twitter"
        aria-hidden="true" style="font-size:24px;color:green"></i></a>
    <a class="redsoc" href="https://www.facebook.com/" target="_blank"><i class="fa fa-facebook"
        aria-hidden="true" style="font-size:24px;color:green"></i></a>
    <a class="redsoc" href="https://ar.pinterest.com/" target="_blank"><i class="fa fa-pinterest"
        aria-hidden="true" style="font-size:24px;color:green"></i></a>
    <a class="redsoc" href="https://www.instagram.com/?hl=es" target="_blank"><i class="fa fa-instagram"
        aria-hidden="true" style="font-size:24px;color:green"></i></a>
          <p>Derechos reservados @2022 </p>
`

 
//Validación de un formulario de contacto con Javascript

function validar_contacto() {
    //valido el nombre
    if (document.fvalida.nombre.value.length == 0) {
        alert("Tiene que escribir su nombre")
        document.fvalida.nombre.focus()
        return 0;
    }

     //valido el Apellido
 if (document.fvalida.apellido.value.length == 0) {
  alert("Tiene que escribir su Apellido")
  document.fvalida.nombre.focus()
  return 0;
}

    //valido la edad. tiene que ser entero mayor que 18
    edad = document.fvalida.edad.value
    edad = validarEntero(edad)
    document.fvalida.edad.value = edad
    if (edad == "") {
        alert("Tiene que introducir un número entero en su edad.")
        document.fvalida.edad.focus()
        return 0;
    } else {
        if (edad < 18) {
            alert("Lo siento, debe ser mayor de 18 años.")
            document.fvalida.edad.focus()
            return 0;
        }
    }

    //valido que estilo le gusta
    if (document.fvalida.estilo.selectedIndex == 0) {
        alert("Debe seleccionar un motivo de su contacto.")
        document.fvalida.interes.focus()
        return 0;
    }

    //el formulario se envia
    alert("Muchas gracias por enviar el formulario")
    document.fvalida.submit()
}

function validarEntero(valor) {
    valor = parseInt(valor)
    //Compruebo si es un valor numérico
    if (isNaN(valor)) {
        //entonces (no es numero) devuelvo el valor cadena vacia
        return ""
    } else {
        //En caso contrario (Si era un número) devuelvo el valor
        return valor
    }
}
 
function mostrarSeccion(id) {
    // Ocultar todas las secciones
    var secciones = document.querySelectorAll('section');
    secciones.forEach(function(seccion) {
        seccion.style.display = 'none';
    });

    // Mostrar la sección con el id dado
    var seccionAMostrar = document.getElementById(id);
    seccionAMostrar.style.display = 'block';
}

function mostrarAlert() {
    document.getElementById("miAlert").style.display = "block";
  }
  function cerrarAlert() {
    document.getElementById("miAlert").style.display = "none";
}


function enviarCorreo() {
    var email = '1994rct@gmail.com';
    window.location.href = 'mailto:' + email;
}

function enviarMensaje() {
    var numero = '695677389'; // Reemplaza con tu número de WhatsApp
    window.location.href = 'https://wa.me/' + numero;
}

function irAInstagram() {
    var usuario = 'roberbarbas'; // Reemplaza con tu nombre de usuario de Instagram
    window.location.href = 'https://www.instagram.com/' + usuario;
}
document.querySelectorAll('.printbutton').forEach(function(element) {
    element.addEventListener('click', function() {
        print();
    });
  });
  function mostrarSeccion(id) {
    // Oculta todas las secciones
    let secciones = document.querySelectorAll('section');
    secciones.forEach(function(seccion) {
        seccion.style.display = 'none';
    });

    // Muestra la sección con el ID dado
    let seccionAMostrar = document.getElementById(id);
    seccionAMostrar.style.display = 'block';
}
window.onload = function() {
    mostrarSeccion('DatosPersonales');
};
function toggleNav() {
    var navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active'); // Alternar la clase 'active' en el menú
}
  function imprimir() {
    let secciones = document.querySelectorAll('section')
    secciones.forEach(seccion=> seccion.style.display='block')

   window.print();
 }

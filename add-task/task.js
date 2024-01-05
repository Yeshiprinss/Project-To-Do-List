function agregarDatos(event) {
    event.preventDefault(); // Evitar que el formulario se envíe

    // Obtener los valores del formulario
    var tarea = document.getElementById('tareaInput').value;
    var fecha = document.getElementById('dateInput').value;
    var mensaje = document.getElementById('mensajeInput').value;

    // Crear la URL con los parámetros
    var url = 'pagina-datos.html?tarea=' + tarea + '&fecha=' + fecha + '&mensaje=' + mensaje;

    // Redireccionar a la página de lista con los datos
    window.location.href = url;
  }
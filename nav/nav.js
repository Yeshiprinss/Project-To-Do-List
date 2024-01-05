function mostrarPagina(category) {
    // Ocultar todas las páginas de tareas
    const paginasTareas = document.querySelectorAll('.pagina-tarea');
    paginasTareas.forEach(pagina => {
      pagina.classList.add('oculto');
    });
  
    // Mostrar la página de la categoría seleccionada
    const paginaSeleccionada = document.getElementById(categoria);
    paginaSeleccionada.classList.remove('oculto');
  }
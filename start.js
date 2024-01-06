// Define la estructura de almacenamiento para las categorías y sus tareas
var categoriasTareas = {
  Work: [],
  Personal: [],
  Birthday: [],
  Medical: []
  // Puedes agregar más categorías aquí si es necesario
};

function redirectToPage() {
  setTimeout(() => {
    window.location.href = 'nav.html';
  }, 1000);
}

function mostrarPagina(categoria) {
  switch (categoria) {
    case 'Work':
      window.location.href = 'work.html'; // Cambia 'work.html' por la ruta de tu página para la categoría de trabajo
      break;
    case 'Personal':
      window.location.href = 'personal.html'; // Cambia 'personal.html' por la ruta de tu página para la categoría personal
      break;
    case 'Birthday':
      window.location.href = 'birthday.html'; // Cambia 'birthdays.html' por la ruta de tu página para la categoría de cumpleaños
      break;
    case 'Medical':
      window.location.href = 'medical.html'; // Cambia 'medical.html' por la ruta de tu página para la categoría médica
      break;
    default:
      // Acción por defecto si no coincide con ninguna categoría conocida
      break;
  }
}

function mostrarTareas(categoria) {
  // Aquí deberías manejar la lógica para mostrar las tareas de la categoría seleccionada
  // Utiliza la estructura categoriasTareas para acceder a las tareas de esa categoría
  // Actualiza el contenido HTML con las tareas correspondientes a la categoría seleccionada
  // El código para mostrar las tareas según la categoría debería ir aquí
}

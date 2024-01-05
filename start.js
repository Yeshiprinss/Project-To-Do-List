function redirectToPage() {
  setTimeout(() => {
    window.location.href = 'nav.html';
  }, 1000)
}

function mostrarPagina(categoria) {
  switch (categoria) {
    case 'Work':
      window.location.href = 'work.html'; // Cambia 'work.html' por la ruta de tu página para la categoría de trabajo
      break;
    case 'Personal':
      window.location.href = 'personal.html'; // Cambia 'personal.html' por la ruta de tu página para la categoría personal
      break;
    case 'Birthdays':
      window.location.href = 'birthdays.html'; // Cambia 'birthdays.html' por la ruta de tu página para la categoría de cumpleaños
      break;
    case 'Medical':
      window.location.href = 'medical.html'; // Cambia 'medical.html' por la ruta de tu página para la categoría médica
      break;
    default:
      // Acción por defecto si no coincide con ninguna categoría conocida
      break;
  }
}
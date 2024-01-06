// Define la estructura de almacenamiento para las categorías y sus tareas
var categoriasTareas = {
  Work: [],
  Personal: [],
  Birthday: [],
  Medical: []
  // Puedes agregar más categorías aquí si es necesario
};

function mostrarTareasEnPagina(categoria) {
  var listaTareas = document.getElementById('tareasList');
  listaTareas.innerHTML = '';

  categoriasTareas[categoria].forEach(function (tarea) {
    var li = document.createElement('li');
    li.textContent = `${tarea.descripcion} [${tarea.fecha}]`;

    var completarCheckbox = document.createElement('input');
    completarCheckbox.type = 'checkbox';
    completarCheckbox.checked = tarea.completada;

    completarCheckbox.addEventListener('change', function () {
      tarea.completada = completarCheckbox.checked;
      actualizarTareas();
    });

    li.appendChild(completarCheckbox);
    listaTareas.appendChild(li);
  });
}

function mostrarPagina(categoria) {
  window.location.href = categoria.toLowerCase() + '.html';
}

function mostrarTareas(categoria) {
  mostrarTareasEnPagina(categoria);
}

function actualizarTareas() {
  // Lógica para actualizar las tareas en el almacenamiento (LocalStorage)
  // Puedes implementar aquí la lógica para guardar las tareas actualizadas
  // en el almacenamiento local.
}

// Obtener referencias a los botones en el HTML y agregar listeners
var btnWork = document.getElementById('btnWork');
var btnPersonal = document.getElementById('btnPersonal');
var btnBirthday = document.getElementById('btnBirthday');
var btnMedical = document.getElementById('btnMedical');

btnWork.addEventListener('click', function () {
  mostrarTareas('Work');
});

btnPersonal.addEventListener('click', function () {
  mostrarTareas('Personal');
});

btnBirthday.addEventListener('click', function () {
  mostrarTareas('Birthday');
});

btnMedical.addEventListener('click', function () {
  mostrarTareas('Medical');
});

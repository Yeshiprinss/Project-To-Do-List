var categoriasTareas = {
  Work: [],
  Personal: [],
  Birthday: [],
  Medical: []
};

function guardarTareasEnLocalStorage() {
  localStorage.setItem('categoriasTareas', JSON.stringify(categoriasTareas));
}


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
}


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
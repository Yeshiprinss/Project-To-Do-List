let categoriasTareas = {
  Work: [],
  Personal: [],
  Birthday: [],
  Medical: []
};

 function guardarTareasEnLocalStorage() {
  localStorage.setItem('categoriasTareas', JSON.stringify(categoriasTareas));
} 


function mostrarTareasEnPagina(categoria) {
  let listaTareas = document.getElementById('tareasList');
  listaTareas.innerHTML = '';

  categoriasTareas[categoria].forEach(function (tarea) {
    let li = document.createElement('li');
    li.textContent = `${tarea.descripcion} [${tarea.fecha}]`;

    let completarCheckbox = document.createElement('input');
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
  window.location.href = 'src/html/' + categoria.toLowerCase() + '.html';
}


function mostrarTareas(categoria) {
  mostrarTareasEnPagina(categoria);
}

function actualizarTareas() {
}

let btnPersonal = document.getElementById('btnPersonal');
let btnBirthday = document.getElementById('btnBirthday');
let btnMedical = document.getElementById('btnMedical');

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
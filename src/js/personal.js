function redirectToPage() {
    window.location.href = '/src/html/task-personal.html';
}

function redirectToHome() {
    window.location.href = '/index.html';
}

let tareas = JSON.parse(localStorage.getItem('tareas')) || [];
let listaTareas = document.getElementById('tareasList');

tareas.forEach(function (tarea) {
    var li = document.createElement('li');
    li.textContent = `${tarea.tarea} [${tarea.fecha}]`;
    listaTareas.appendChild(li);
});

function actualizarTareas() {
    localStorage.setItem('tareas', JSON.stringify(tareas));
}

function eliminarTarea(index) {
    tareas.splice(index, 1);
    actualizarTareas();
    actualizarListaTareas();
}

function marcarComoCompletada(index) {
    tareas[index].completada = !tareas[index].completada;
    actualizarTareas();
    actualizarListaTareas();
}

function actualizarListaTareas() {
    listaTareas.innerHTML = '';

    tareas.forEach(function (tarea, index) {
        let li = document.createElement('li');
        let completarCheckbox = document.createElement('input');
        let borrarBtn = document.createElement('button');

        completarCheckbox.type = 'checkbox';
        completarCheckbox.checked = tarea.completada;
        borrarBtn.textContent = 'Borrar';

        li.textContent = `${tarea.tarea} [${tarea.fecha}]`;

        completarCheckbox.addEventListener('change', function () {
            marcarComoCompletada(index);
        });

        li.addEventListener('dblclick', function () {
            let nuevaTarea = prompt('Editar tarea:', tarea.tarea);
            if (nuevaTarea !== null && nuevaTarea.trim() !== '') {
                tarea.tarea = nuevaTarea;
                actualizarTareas();
                actualizarListaTareas();
            }
        });

        borrarBtn.addEventListener('click', function () {
            eliminarTarea(index);
        });

        li.appendChild(completarCheckbox);
        li.appendChild(borrarBtn);

        listaTareas.appendChild(li);
    });
}

actualizarListaTareas();
function agregarDatos(event) {
    event.preventDefault();
  
    let tarea = document.getElementById("tareaInput").value;
    let fecha = document.getElementById("dateInput").value;
  
    let nuevaTarea = {
      tarea: tarea,
      fecha: fecha,
    };
    let tareas = JSON.parse(localStorage.getItem('tareas')) || [];
    tareas.push(nuevaTarea);
    localStorage.setItem('tareas', JSON.stringify(tareas));
    window.location.href = '../html/personal.html';
  }
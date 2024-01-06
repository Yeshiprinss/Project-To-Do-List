function agregarDatos(event) {
    event.preventDefault();
  
    var tarea = document.getElementById("tareaInput").value;
    var fecha = document.getElementById("dateInput").value;
  
    var nuevaTarea = {
      tarea: tarea,
      fecha: fecha,
    };
    var tareas = JSON.parse(localStorage.getItem('tareas')) || [];
    tareas.push(nuevaTarea);
    localStorage.setItem('tareas', JSON.stringify(tareas));
    window.location.href = 'birthday.html';
  }
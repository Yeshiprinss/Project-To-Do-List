document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const toggleForms = document.getElementById('toggleForms');
  
    toggleForms.addEventListener('click', function() {
      loginForm.style.display = loginForm.style.display === 'none' ? 'block' : 'none';
      registerForm.style.display = registerForm.style.display === 'none' ? 'block' : 'none';
    });
  
    loginForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const loginEmail = document.getElementById('loginEmail').value;
      const loginPassword = document.getElementById('loginPassword').value;
      // Aquí puedes agregar la lógica de inicio de sesión con el backend
      console.log('Iniciar sesión:', loginEmail, loginPassword);
    });
  
    registerForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const registerEmail = document.getElementById('registerEmail').value;
      const registerPassword = document.getElementById('registerPassword').value;
      // Aquí puedes agregar la lógica de registro con el backend
      console.log('Registrarse:', registerEmail, registerPassword);
    });
  });
// Función para mostrar el menú
function mostrarMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.add('mostrar');
  }
  
  // Función para ocultar el menú
  function ocultarMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.remove('mostrar');
  }
  
  // Selecciona el botón "Explorar"
  const botonExplorar = document.querySelector('.button');
  
  // Selecciona el menú
  const menu = document.querySelector('.menu');
  
  // Agrega un event listener para el evento "mouseenter" (pasar el ratón sobre el botón)
  botonExplorar.addEventListener('mouseenter', mostrarMenu);
  
  // Agrega un event listener para el evento "mouseleave" (salir del área del menú)
  menu.addEventListener('mouseleave', ocultarMenu);
  
  // Agrega un event listener para el evento "mouseleave" del botón (salir del área del botón)
  botonExplorar.addEventListener('mouseleave', function(event) {
    // Verifica si el mouse no está sobre el menú
    const isMouseOutsideMenu = !menu.contains(event.relatedTarget);
    if (isMouseOutsideMenu) {
      ocultarMenu();
    }
  });
  
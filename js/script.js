const hamburguesa = document.querySelector('.hamburguesa');
const menu = document.querySelector('.menu');

hamburguesa.addEventListener('click', function() {
  menu.classList.toggle('activo');
  hamburguesa.classList.toggle('activo');
});

const enlaces = document.querySelectorAll('.menu a');
enlaces.forEach(function(enlace) {
  enlace.addEventListener('click', function() {
    menu.classList.remove('activo');
    hamburguesa.classList.remove('activo');
  });
});


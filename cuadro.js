
const formulario = document.getElementById('miFormulario');


formulario.addEventListener('submit', function(event) {

  event.preventDefault();

  alert('La información ha sido enviada correctamente');

  
  formulario.reset();
});

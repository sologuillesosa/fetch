const formulario = document.querySelector('#formulario');
const respuesta = document.querySelector('#respuesta');

const alertBootstrap = (tipo, msg) => `
	<div class="alert alert-${tipo}" role="alert">
		${msg}
	</div>
`;

formulario.addEventListener('submit', function(e){
	e.preventDefault();

	const datos = new FormData(formulario);
	// console.log(datos.get('usuario'));
	// console.log(datos.get('pass'));

	fetch('php/index.php', {
		method: 'POST',
		body: datos,
	})
	.then((res) => res.json())
	.then((data) => {
		// console.log(data);
		// debugger;
		if (data === 'error') {
			respuesta.innerHTML = alertBootstrap('danger', 'Llena todos los campos');
		} else {
			respuesta.innerHTML = alertBootstrap('primary', data);
		}
	});

});
const MisHabilidades = [
	{
		idHablidad: 1,
		imagen: "img/HTML.svg",
		Nombre: "Html"
	},
	{
		idHablidad: 2,
		imagen: "img/CSS.svg",
		Nombre: "CSS"
	},
	{
		idHablidad: 3,
		imagen: "img/JS.svg",
		Nombre: "JavaScript"
	},
	{
		idHablidad: 4,
		imagen: "img/SQL.svg",
		Nombre: "SQL"
	},
	{
		idHablidad: 5,
		imagen: "img/cSharp.svg",
		Nombre: "C#"
	},
	{
		idHablidad: 6,
		imagen: "img/cMas.png",
		Nombre: "C++"
	},
	{
		idHablidad: 7,
		imagen: "img/excel.svg",
		Nombre: "Excel"
	},
	{
		idHablidad: 8,
		imagen: "https://upload.wikimedia.org/wikipedia/commons/0/08/Microsoft_Word_logo_%282013-2019%29.png?20131212130336",
		Nombre: "Word"
	}
];

const renderHabilidades =()=>{
	const divHabilidades = document.querySelector('#habilidades .ContHabilidades');
	const HabilidadesData = MisHabilidades;
	let divGrupoHabilidad
	HabilidadesData.forEach((habilidad,index) => {
		if(index%4==0){
			divGrupoHabilidad = document.createElement('div');
			divGrupoHabilidad.className = 'grupoHabilidades';
			divHabilidades.appendChild(divGrupoHabilidad);
		}
		// div contenedor de cada Habilidad
		const divHabilidad = document.createElement('div');
		divHabilidad.classList = 'caja';
		divHabilidad.innerHTML = `
		<img src=${habilidad.imagen}>
		<h2>${habilidad.Nombre}</h2>
		`;

		// agrego el div habilidad
		divGrupoHabilidad.appendChild(divHabilidad);
	});
}

renderHabilidades(); 

/*Secction Proyectos*/
const btnCerrar = document.getElementById("btnCerrar");
const modalFondo = document.getElementById("modalFondo");

const misTrabajos = [
	{
		id: 1,
		titulo: "GlobeTrotter",
		descripcion: "Landing Page sobre vuelos y turismo",
		image: "img/pagina6.png",
		detalle: "Este proyecto es de una pagina de turismo y vuelos, la hice como parte de un trabajo practico en el curso de Argentina Programa",
		url_repositorio: "",
		url_pagina: ""
	},
	{
		id: 2,
		titulo: "Norway",
		descripcion: "Landing Page sobre turismo en Noruega",
		image: "img/pagina5.png",
		detalle: "Este es un proyecto",
		url_repositorio: "",
		url_pagina: ""
	},
	{
		id: 3,
		titulo: "Deports News",
		descripcion: "Landing Page sobre noticias deportivas",
		image: "img/pagina4.png",
		detalle: "",
		url_repositorio: "",
		url_pagina: ""
	},
	{
		id: 4,
		titulo: "Fun Petz",
		descripcion: "Landing Page sobre animales",
		image: "img/pagina3.png",
		detalle: "",
		url_repositorio: "",
		url_pagina: ""
	},
	{
		id: 5,
		titulo: "Presentacion",
		descripcion: "Hero Page en ruso para presentarse",
		image: "img/pagina2.png",
		detalle: "",
		url_repositorio: "",
		url_pagina: ""
	},
	{
		id: 6,
		titulo: "Login Page",
		descripcion: "Pagina para registrarse y ingresar",
		image: "img/pagina1.png",
		detalle: "",
		url_repositorio: "",
		url_pagina: ""
	},
];

const renderProyectos = () => {
	const divProyectos = document.querySelector('#proyectos .contProyecto');
	const proyectosData = misTrabajos;
	let divGrupoProyecto;
	proyectosData.forEach((proyecto, index) => {
		if(index%3 == 0) {
			divGrupoProyecto = document.createElement('div');
			divGrupoProyecto.className = 'grupoProyecto';
			divProyectos.appendChild(divGrupoProyecto);
		}
		// div contenedor de cada proyecto
		const divProyecto = document.createElement('div');
		divProyecto.classList = 'cajaProyecto proy';
		divProyecto.style.backgroundImage = `url(${proyecto.image})`;

		// div contenedor de la info de la miniatura
		const divContInfo = document.createElement('div');
		divContInfo.className = 'contInfo';

		divContInfo.innerHTML = `
		<h2>${proyecto.titulo}</h2>
		<p>${proyecto.descripcion}</p>
		<button>Más Info<i class="bi bi-box-arrow-in-right"></i></button>
		`;
		const button = divContInfo.querySelector('button');
		button.onclick = function () {
			openModal(proyecto);
		};
		// Agregamos el contenedor de la miniatura al contenedor de cada proyecto
		divProyecto.appendChild(divContInfo);

		// Agregamos todo el div al grupo
		divGrupoProyecto.appendChild(divProyecto);
	});
}

const openModal = (proyectoToRender) => {
	const modalContent = modalFondo.querySelector('.contModal');
	modalContent.querySelector('#contModal_titulo').innerHTML = proyectoToRender.titulo;
	modalContent.querySelector('#contModal_detalle').innerHTML = proyectoToRender.detalle;
	modalContent.querySelector('#contModal_url_repositorio').href = proyectoToRender.url_repositorio ?? '#';
	modalContent.querySelector('#contModal_url_repositorio').target = proyectoToRender.url_repositorio ? '_blank' : '';
	modalContent.querySelector('#contModal_url_pagina').href = proyectoToRender.url_pagina ?? '#';
	modalContent.querySelector('#contModal_url_pagina').target = proyectoToRender.url_pagina ? '_blank' : '';
	modalFondo.classList.add("show");
}
btnCerrar.addEventListener("click", () => {
  modalFondo.classList.remove("show");
});

renderProyectos();

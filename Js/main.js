const BotonMenu = document.querySelector('.listaResponsive');
const Menu = document.querySelector('.links');

BotonMenu.addEventListener('click',()=>{
	Menu.classList.toggle('mostrarLista');
	BotonMenu.classList.toggle('rotarLista');
})

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
		idHablidad:4,
		imagen: "img/Bootstrap.png",
		Nombre: "Bootstrap"
	},
	{
		idHablidad: 5,
		imagen: "img/react.png",
		Nombre: "React"
	},
	{
		idHablidad: 6,
		imagen: "img/SQL.svg",
		Nombre: "SQL Server"
	},
	{
		idHablidad: 7,
		imagen: "img/cSharp.svg",
		Nombre: "C#"
	},
	{
		idHablidad: 8,
		imagen: "img/NET-Framework.png",
		Nombre: ".Net Framework"
	},
	{
		idHablidad: 9,
		imagen: "img/cMas.png",
		Nombre: "C++"
	},
	{
		idHablidad: 10,
		imagen: "img/excel.svg",
		Nombre: "Excel"
	},
	{
		idHablidad: 11,
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
		titulo: "Clases Particulares",
		descripcion: "Pagina para reservar una clase particular conmigo",
		image: "img/clases.png",
		detalle: "Esta es una pagina web para que los alumnos puedan informarse de como son las clases y para que puedan reservar una clase conmigo",
		url_repositorio: "https://github.com/JairAle25/ClasesParticulares",
		url_pagina: "https://jairale25.github.io/ClasesParticulares/"
	},
	{
		id: 2,
		titulo: "Conecta 4",
		descripcion: "Pagina para Jugar conecta 4",
		image: "img/conecta4.png",
		detalle: "Esta en una pagina donde podemos jugar con un amigo al juego clasico Conecta 4",
		url_repositorio: "https://github.com/JairAle25/Conecta-4",
		url_pagina: "https://conecta-4-jair.netlify.app/"
	},
	{
		id: 3,
		titulo: "GlobeTrotter",
		descripcion: "Landing Page sobre vuelos y turismo",
		image: "img/pagina6.png",
		detalle: "Este proyecto es de una pagina de turismo y vuelos, si estas interasdo en viajar en esta pagina podes comprar paquetes de vuelos hacia distintos al rededor del mundo",
		url_repositorio: "https://github.com/JairAle25/Landin-Page-GlobeTrotter",
		url_pagina: "https://jairale25.github.io/Landin-Page-GlobeTrotter/"
	},
	{
		id: 4,
		titulo: "Norway",
		descripcion: "Landing Page sobre turismo en Noruega",
		image: "img/pagina5.png",
		detalle: "Esta es una pagina de turismo sobre Noruega, si estas interesado en ir a Noruega y no sabes que lugares podrias visitar, esta es la pagina que tenes que visitar , te mostramos los tres lugares mas lindos y turisticos del pais para que puedas vistitarlos",
		url_repositorio: "https://github.com/JairAle25/Landing-Page-Norway",
		url_pagina: "https://jairale25.github.io/Landing-Page-Norway/"
	},
	{
		id: 5,
		titulo: "Deports News",
		descripcion: "Landing Page sobre noticias deportivas",
		image: "img/pagina4.png",
		detalle: "Esta una Landing Page de noticas deportivas, en esta pagina te contamos las ultimas noticias del deporte, los traspasos , los rumores , los fichajes , todo sobre deportes lo encontramos en esta pagina",
		url_repositorio: "https://github.com/JairAle25/Landing-Page-Deports",
		url_pagina: "https://jairale25.github.io/Landing-Page-Deports/"
	},
	{
		id: 6,
		titulo: "Fun Petz",
		descripcion: "Landing Page sobre animales",
		image: "img/pagina3.png",
		detalle: "Esta es una Landing Page acerca de animales, donde tenemos informacion sobre productos y juguetes para cualquier mascota, hecho con unos colores llamativos para que se vea una pagina divertida para el cliente",
		url_repositorio: "https://github.com/JairAle25/Lading-Page-FunPetz",
		url_pagina: "https://jairale25.github.io/Lading-Page-FunPetz/"
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
	modalContent.classList.add("animacion");
}
btnCerrar.addEventListener("click", () => {
	const modalContent = modalFondo.querySelector('.contModal');
  	modalFondo.classList.remove("show");
  	modalContent.classList.remove("animacion");
});

renderProyectos();

//COPIAR LO QUE ESTA EN MAIL Y TELEFONO
const divMail = document.getElementById("mail");
const divTelefono = document.getElementById("telefono");
divMail.addEventListener('click',()=>{
	const texto = divMail.querySelector("p").textContent;
	navigator.clipboard.writeText(texto);
});
divTelefono.addEventListener('click',()=>{
	const texto = divTelefono.querySelector("p").textContent;
	navigator.clipboard.writeText(texto);
});
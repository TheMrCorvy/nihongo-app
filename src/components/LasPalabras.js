import ToOmou from "./Sections/Palabras/ToOmou";
import PalabrasUtiles from "./Sections/Palabras/PalabrasUtiles";

const LasPalabras = {
	Elementos: [
		{
			titulo: "comida y bebida",
			bgColor:
				"linear-gradient(87deg, rgb(45, 206, 137) 0px, rgb(45, 206, 204) 100%)",
			sombra: "rgba(45, 206, 137, 0.6) 0px 5px 25px 0px",
			textColor: "text-white",
			elementos: [
				{
					tituloElemento: "comida",
					url: "ejemplo",
				},
				{
					tituloElemento: "bebida",
					url: "ejemplo",
				},
				{
					tituloElemento: "frutas y verduras",
					url: "ejemplo",
				},
				{
					tituloElemento: "dulces",
					url: "ejemplo",
				},
				{
					tituloElemento: "cocina",
					url: "ejemplo",
				},
			],
		},
		{
			titulo: "viajes",
			bgColor:
				"linear-gradient(87deg, rgb(17, 205, 239) 0px, rgb(17, 113, 239) 100%)",
			sombra: "rgba(44, 168, 255, 0.6) 0px 5px 25px 0px",
			textColor: "text-white",
			elementos: [
				{
					tituloElemento: "transporte",
					url: "ejemplo",
				},
				{
					tituloElemento: "vocabulario de aeropuerto",
					url: "ejemplo",
				},
				{
					tituloElemento: "vacaciones",
					url: "ejemplo",
				},
				{
					tituloElemento: "lugares y ubicaciones",
					url: "ejemplo",
				},
				{
					tituloElemento: "lugares de japón",
					url: "ejemplo",
				},
			],
		},
		{
			titulo: "ropa",
			bgColor:
				"linear-gradient(87deg, rgb(247, 165, 153) 0px, rgb(235, 172, 163) 100%)",
			sombra: "rgba(247, 165, 153, 0.7) 0px 5px 25px 0px",
			textColor: "text-white",
			elementos: [
				{
					tituloElemento: "partes del cuerpo",
					url: "ejemplo",
				},
				{
					tituloElemento: "ropa",
					url: "ejemplo",
				},
				{
					tituloElemento: "vestirse",
					url: "ejemplo",
				},
			],
		},
		{
			titulo: "los adverbios",
			bgColor: "linear-gradient(87deg,#172b4d 0,#1a174d 100%)",
			sombra: "0px 5px 25px 0px rgba(26, 23, 77, 0.6)",
			textColor: "text-white",
			elementos: [
				{
					tituloElemento: "derivados de los adjetivos",
					url: "ejemplo",
				},
				{
					tituloElemento: "adverbios verdaderos",
					url: "ejemplo",
				},
				{
					tituloElemento: "la forma て como adverbio",
					url: "ejemplo",
				},
				{
					tituloElemento: "de frecuencia",
					url: "ejemplo",
				},
				{
					tituloElemento: "de tiempo",
					url: "ejemplo",
				},
				{
					tituloElemento: "de modo",
					url: "ejemplo",
				},
				{
					tituloElemento: "de lugar",
					url: "ejemplo",
				},
				{
					tituloElemento: "de cantidad",
					url: "ejemplo",
				},
				{
					tituloElemento: "de duda",
					url: "ejemplo",
				},
			],
		},
		{
			titulo: "sin grupo",
			textColor: "text-white",
			elementos: [
				{
					tituloElemento: "los animales",
					url: "ejemplo",
					icono: "paw",
				},
				{
					tituloElemento: "decir, creer, pensar",
					url: "/decir-creer-pensar",
					icono: "lightbulb",
				},
				{
					tituloElemento: "palabras útiles",
					url: "/palabras-utiles",
					icono: "tools",
				},
				{
					tituloElemento: "vocabulario de trabajo",
					url: "/vocabulario-trabajo",
					icono: "toolbox",
				},
			],
		},
	],
	Componentes: [
		{
			url: "decir-creer-pensar",
			componente: ToOmou,
		},
		{
			url: "palabras-utiles",
			componente: PalabrasUtiles,
		},
	],
};

export default LasPalabras;

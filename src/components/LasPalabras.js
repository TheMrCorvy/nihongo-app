//Componentes
import PalabrasDeUtilidad from "components/Jsons/Secciones de las Palabras/Palabras Utiles.json";
import Trabajo from "components/Jsons/Secciones de las Palabras/Trabajo.json";
import Animales from "components/Jsons/Secciones de las Palabras/Animales.json";
import Adverbios from "components/Jsons/Secciones de las Palabras/Adverbios.json";

//jsons
import ToOmou from "./Sections/Palabras/ToOmou";
import VocabularioTrabajo from "./Sections/Palabras/VocabularioTrabajo";
import AdverbiosDerivadosDeAdjetivos from "./Sections/Palabras/AdverbiosDerivadosDeAdjetivos";
import AdverbiosVerdaderos from "./Sections/Palabras/AdverbiosVerdaderos";
import VocabularioDeAdverbios from "components/Sections/Palabras/VocabularioDeAdverbios";

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
				{
					tituloElemento: "el clima",
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
					tituloElemento: "derivados de adjetivos",
					url: "adverbios-derivados-de-adjetivos",
				},
				{
					tituloElemento: "adverbios verdaderos",
					url: "adverbios-verdaderos",
				},
				{
					tituloElemento: "clasificación adverbios",
					url: "vocabulario-de-adverbios",
				},
			],
		},
		{
			titulo: "sin grupo",
			textColor: "text-white",
			elementos: [
				{
					tituloElemento: "animales",
					url: "animales",
					icono: "paw",
				},
				{
					tituloElemento: "decir, creer, y pensar",
					url: "decir-creer-pensar",
					icono: "lightbulb",
				},
				{
					tituloElemento: "palabras útiles",
					url: "palabras-utiles",
					icono: "tools",
				},
				{
					tituloElemento: "vocabulario de trabajo",
					url: "vocabulario-trabajo",
					icono: "toolbox",
				},
			],
		},
	],
	Componentes: [
		{
			url: "decir-creer-pensar",
			ComponenteIndividual: true,
			componente: ToOmou,
			Array: {},
		},
		{
			url: "vocabulario-trabajo",
			ComponenteIndividual: true,
			componente: VocabularioTrabajo,
			Array: Trabajo.VocabularioTrabajo,
		},
		{
			url: "adverbios-derivados-de-adjetivos",
			ComponenteIndividual: true,
			componente: AdverbiosDerivadosDeAdjetivos,
			Array: Adverbios.DerivadosAdjetivos,
		},
		{
			url: "adverbios-verdaderos",
			ComponenteIndividual: true,
			componente: AdverbiosVerdaderos,
			Array: Adverbios.AdverbiosVerdaderos,
		},
		{
			url: "vocabulario-de-adverbios",
			ComponenteIndividual: true,
			componente: VocabularioDeAdverbios,
			Array: Adverbios.Clasificaciones,
		},
		{
			url: "palabras-utiles",
			ComponenteIndividual: false,
			Array: PalabrasDeUtilidad.PalabrasUtiles,
			Titulo: "Palabras Útiles",
			Icono: "tools",
			Layout: 3,
		},
		{
			url: "animales",
			ComponenteIndividual: false,
			Array: Animales.VocabularioAnimales,
			Titulo: "algunos animales",
			Icono: "paw",
			Layout: 3,
		},
	],
};

export default LasPalabras;

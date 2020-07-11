//componentes
import ToOmou from "./Sections/Palabras/ToOmou";
import VocabularioTrabajo from "./Sections/Palabras/VocabularioTrabajo";
import AdverbiosDerivadosDeAdjetivos from "./Sections/Palabras/AdverbiosDerivadosDeAdjetivos";
import AdverbiosVerdaderos from "./Sections/Palabras/AdverbiosVerdaderos";
import VocabularioDeAdverbios from "components/Sections/Palabras/VocabularioDeAdverbios";
import Vestirse from "components/Sections/Palabras/Vestirse";

//jsons
import PalabrasDeUtilidad from "components/Jsons/Secciones de las Palabras/Palabras Utiles.json";
import Trabajo from "components/Jsons/Secciones de las Palabras/Trabajo.json";
import Animales from "components/Jsons/Secciones de las Palabras/Animales.json";
import Adverbios from "components/Jsons/Secciones de las Palabras/Adverbios.json";

//comida
import Comidas from "components/Jsons/Secciones de las Palabras/Comida/Comida.json";
import Cocina from "components/Jsons/Secciones de las Palabras/Comida/Cocina.json";
import Frutas from "components/Jsons/Secciones de las Palabras/Comida/FrutasYVerduras.json";
import Bebidas from "components/Jsons/Secciones de las Palabras/Comida/Bebidas.json";
import Dulces from "components/Jsons/Secciones de las Palabras/Comida/Dulces.json";

//viajes
import Clima from "components/Jsons/Secciones de las Palabras/Viajes/Clima.json";
import Lugares from "components/Jsons/Secciones de las Palabras/Viajes/Lugares.json";
import LugaresJapon from "components/Jsons/Secciones de las Palabras/Viajes/LugaresJapon.json";
import Transporte from "components/Jsons/Secciones de las Palabras/Viajes/Transporte.json";
import Vacaciones from "components/Jsons/Secciones de las Palabras/Viajes/Vacaciones.json";
import VocabularioAeropuerto from "components/Jsons/Secciones de las Palabras/Viajes/VocabularioAeropuerto.json";

//ropa
import Ropa from "components/Jsons/Secciones de las Palabras/Ropa/Ropa.json";
import PartesDelCuerpo from "components/Jsons/Secciones de las Palabras/Ropa/PartesDelCuerpo.json";
// import Vestirse from "components/Jsons/Secciones de las Palabras/Ropa/Vestirse.json";
import Sustantivos from "components/Jsons/Sustantivos.json";

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
					url: "comida",
				},
				{
					tituloElemento: "bebida",
					url: "bebida",
				},
				{
					tituloElemento: "frutas y verduras",
					url: "frutas-verduras",
				},
				{
					tituloElemento: "dulces",
					url: "dulces",
				},
				{
					tituloElemento: "cocina",
					url: "cocina",
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
					url: "transportes",
				},
				{
					tituloElemento: "vocabulario de aeropuerto",
					url: "vocabulario-aeropuerto",
				},
				{
					tituloElemento: "vacaciones",
					url: "vacaciones",
				},
				{
					tituloElemento: "la calle",
					url: "lugares",
				},
				{
					tituloElemento: "lugares de japón",
					url: "lugares-japon",
				},
				{
					tituloElemento: "el clima",
					url: "clima",
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
					url: "partes-del-cuerpo",
				},
				{
					tituloElemento: "ropa",
					url: "ropa",
				},
				{
					tituloElemento: "vestirse",
					url: "vestirse",
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
			url: "vestirse",
			ComponenteIndividual: true,
			componente: Vestirse,
			Array: {},
		},
		{
			url: "sustantivos",
			ComponenteIndividual: false,
			Array: Sustantivos.Sustantivos,
			Titulo: "Vocabulario: sustantivos",
			Icono: "camera-retro",
			Layout: 1,
		},
		{
			url: "comida",
			ComponenteIndividual: false,
			Array: Comidas.Comidas,
			Titulo: "Vocabulario de Comidas",
			Icono: "hamburger",
			Layout: 1,
		},
		{
			url: "bebida",
			ComponenteIndividual: false,
			Array: Bebidas.Bebidas,
			Titulo: "Vocabulario de Bebidas",
			Icono: "beer",
			Layout: 1,
		},
		{
			url: "frutas-verduras",
			ComponenteIndividual: false,
			Array: Frutas.Verduras,
			Titulo: "Vocabulario de Comidas: Frutas y Verduras",
			Icono: "seedling",
			Layout: 1,
		},
		{
			url: "dulces",
			ComponenteIndividual: false,
			Array: Dulces.Dulces,
			Titulo: "Vocabulario de Comidas: Dulces y Postres",
			Icono: "cookie-bite",
			Layout: 1,
		},
		{
			url: "cocina",
			ComponenteIndividual: false,
			Array: Cocina.Cocina,
			Titulo: "Vocabulario de Cocina",
			Icono: "hamburger",
			Layout: 1,
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
		{
			url: "clima",
			ComponenteIndividual: false,
			Array: Clima.Clima,
			Titulo: "El clima",
			Icono: "cloud-sun-rain",
			Layout: 1,
		},
		{
			url: "lugares",
			ComponenteIndividual: false,
			Array: Lugares.Lugares,
			Titulo: "en la calle",
			Icono: "directions",
			Layout: 1,
		},
		{
			url: "lugares-japon",
			ComponenteIndividual: false,
			Array: LugaresJapon.LugaresJapon,
			Titulo: "lugares turísticos de japón",
			Icono: "map-signs",
			Layout: 1,
		},
		{
			url: "transportes",
			ComponenteIndividual: false,
			Array: Transporte.Transportes,
			Titulo: "Transportes",
			Icono: "bus",
			Layout: 1,
		},
		{
			url: "vacaciones",
			ComponenteIndividual: false,
			Array: Vacaciones.LugaresParaVacacionar,
			Titulo: "lugares típicos de vacaciones",
			Icono: "volleyball-ball",
			Layout: 1,
		},
		{
			url: "vocabulario-aeropuerto",
			ComponenteIndividual: false,
			Array: VocabularioAeropuerto.VocabularioAeropuerto,
			Titulo: "utilidades para turístas",
			Icono: "torii-gate",
			Layout: 1,
		},
		{
			url: "ropa",
			ComponenteIndividual: false,
			Array: Ropa.Ropa,
			Titulo: "ropa",
			Icono: "mitten",
			Layout: 1,
		},
		// {
		// 	url: "vestirse",
		// 	ComponenteIndividual: false,
		// 	Array: Vestirse.Vestirse,
		// 	Titulo: "verbos para vestirse",
		// 	Icono: "socks",
		// 	Layout: 1,
		// },
		{
			url: "partes-del-cuerpo",
			ComponenteIndividual: false,
			Array: PartesDelCuerpo.PartesDelCuerpo,
			Titulo: "las partes del cuerpo",
			Icono: "hand-spock",
			Layout: 1,
		},
	],
};

export default LasPalabras;

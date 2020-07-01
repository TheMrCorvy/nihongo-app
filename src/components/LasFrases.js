import Jikushoukan from "./Sections/Construir Frases/Jikushoukan";
import KokoYDore from "./Sections/Construir Frases/KokoYDore";
import ImaImasu from "./Sections/Construir Frases/ImaImasu";
import NakerebaNarimasen from "./Sections/Construir Frases/NakerebaNarimasen";
import Kudasai from "./Sections/Construir Frases/Kudasai";
import FutsuuKei from "./Sections/Construir Frases/FutsuuKei";
import UnirPalabras from "./Sections/Construir Frases/UnirPalabras";
import Comparaciones from "./Sections/Construir Frases/Comparaciones";
import OracionesSubordinadas from "./Sections/Construir Frases/OracionesSubordinadas";

const LasFrases2 = {
	// frasesCortas: [
	// 	{
	// 		titulo: "ser capaz de...",
	// 		componente: "",
	// 		url: "dekiru",
	// 	},
	// 	{
	// 		titulo: "eventos y accidentes",
	// 		componente: "",
	// 		url: "eventos-accidentes",
	// 	},
	// 	{
	// 		titulo: "demo... algo mas",
	// 		componente: "",
	// 		url: "demo",
	// 	},
	// 	{
	// 		titulo: "igaito, por mas que no lo parezca",
	// 		componente: "",
	// 		url: "igaito",
	// 	},
	// 	{
	// 		titulo: "cantidades amari",
	// 		componente: "",
	// 		url: "cantidades",
	// 	},
	// 	{
	// 		titulo: "justificacion kara",
	// 		componente: "",
	// 		url: "desukara",
	// 	},
	// 	{
	// 		titulo: "mochiron",
	// 		componente: "",
	// 		url: "mochiron",
	// 	},
	// ],
	sinGrupo: [
		{
			titulo: "Presentación inicial",
			componente: Jikushoukan,
			url: "jikushoukan",
			icono: "id-card",
		},
		{
			titulo: "ubicaciones y preguntas",
			componente: KokoYDore,
			url: "koko-soko-asoko",
			icono: "map-marked-alt",
		},
		{
			titulo: "actualmente estoy en...",
			componente: ImaImasu,
			url: "imasu",
			icono: "thumbtack",
		},
		{
			titulo: "obligaciones y opcionales",
			componente: NakerebaNarimasen,
			url: "nakerebanarimasen",
			icono: "exclamation",
		},
		{
			titulo: 'peticiones "por favor"',
			componente: Kudasai,
			url: "kudasai",
			icono: "praying-hands",
		},
		{
			titulo: "discurso normal 普通形",
			componente: FutsuuKei,
			url: "futsuukei",
			icono: "jedi",
		},
		{
			titulo: "unir palabras",
			componente: UnirPalabras,
			url: "unir-palabras",
			icono: "link",
		},
		{
			titulo: "comparaciones",
			componente: Comparaciones,
			url: "comparaciones",
			icono: "balance-scale",
		},
		{
			titulo: "oraciones subordinadas",
			componente: OracionesSubordinadas,
			url: "oraciones-subordinadas",
			icono: "user-tag",
		},
	],
};

export default LasFrases2;

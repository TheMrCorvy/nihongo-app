import Jikushoukan from "./Sections/Construir Frases/Jikushoukan";
import KokoYDore from "./Sections/Construir Frases/KokoYDore";
import ImaImasu from "./Sections/Construir Frases/ImaImasu";
import NakerebaNarimasen from "./Sections/Construir Frases/NakerebaNarimasen";
import Kudasai from "./Sections/Construir Frases/Kudasai";
import FutsuuKei from "./Sections/Construir Frases/FutsuuKei";
import UnirPalabras from "./Sections/Construir Frases/UnirPalabras";
import Comparaciones from "./Sections/Construir Frases/Comparaciones";
import OracionesSubordinadas from "./Sections/Construir Frases/OracionesSubordinadas";
import Toki from "./Sections/Construir Frases/Toki";

const LasFrases = [
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
	{
		titulo: "en el pasado... とき",
		componente: Toki,
		url: "toki",
		icono: "clock",
	},
];

export default LasFrases;

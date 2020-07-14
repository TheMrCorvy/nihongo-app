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
import Favores from "./Sections/Construir Frases/Favores";

const LasFrases = {
	Elementos: [
		{
			titulo: "frases simples",
			bgColor:
				"linear-gradient(87deg, rgb(17, 205, 239) 0px, rgb(17, 113, 239) 100%)",
			sombra: "rgba(44, 168, 255, 0.6) 0px 5px 25px 0px",
			textColor: "text-white",
			elementos: [
				{
					titulo: "Presentación inicial",
					url: "jikushoukan",
					icono: "id-card",
				},
				{
					titulo: "actualmente estoy en...",
					url: "imasu",
					icono: "thumbtack",
				},
				{
					titulo: "ubicaciones y preguntas",
					url: "koko-soko-asoko",
					icono: "map-marked-alt",
				},
				{
					titulo: 'peticiones "por favor"',
					url: "kudasai",
					icono: "praying-hands",
				},
			],
		},
		{
			titulo: "frases simples 2: el imperio contraataca",
			bgColor:
				"linear-gradient(87deg, rgb(245, 96, 54) 0px, rgb(245, 54, 92) 100%)",
			sombra: "rgba(255, 54, 54, 0.6) 0px 5px 25px 0px",
			textColor: "text-white",
			elementos: [
				{
					titulo: "discurso normal 普通形",
					url: "futsuukei",
					icono: "jedi",
				},
				{
					titulo: "unir palabras",
					url: "unir-palabras",
					icono: "link",
				},
				{
					titulo: "comparaciones",
					url: "comparaciones",
					icono: "balance-scale",
				},
				{
					titulo: "en el pasado... とき",
					url: "toki",
					icono: "clock",
				},
			],
		},
		{
			titulo: "frases simples 3: la venganza del jedi",
			bgColor:
				"linear-gradient(87deg, rgb(251, 99, 64) 0px, rgb(251, 177, 64) 100%)",
			sombra: "rgba(251, 99, 64, 0.6) 0px 5px 25px 0px",
			textColor: "text-white",
			elementos: [
				{
					titulo: 'los "favores"',
					url: "favores",
					icono: "thumbs-up",
				},
				{
					titulo: "oraciones subordinadas",
					url: "oraciones-subordinadas",
					icono: "user-tag",
				},
				{
					titulo: "obligaciones y opcionales",
					url: "nakerebanarimasen",
					icono: "exclamation",
				},
			],
		},
	],
	Componentes: [
		{
			componente: Toki,
			url: "toki",
		},
		{
			componente: OracionesSubordinadas,
			url: "oraciones-subordinadas",
		},
		{
			componente: Comparaciones,
			url: "comparaciones",
		},
		{
			componente: UnirPalabras,
			url: "unir-palabras",
		},
		{
			componente: FutsuuKei,
			url: "futsuukei",
		},
		{
			componente: Kudasai,
			url: "kudasai",
		},
		{
			componente: NakerebaNarimasen,
			url: "nakerebanarimasen",
		},
		{
			componente: ImaImasu,
			url: "imasu",
		},
		{
			componente: KokoYDore,
			url: "koko-soko-asoko",
		},
		{
			componente: Jikushoukan,
			url: "jikushoukan",
		},
		{
			componente: Favores,
			url: "favores",
		},
	],
};

export default LasFrases;

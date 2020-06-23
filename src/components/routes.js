import Home from "views/Home";

import HiraganaView from "views/Kanas/HiraganaView";
import KatakanaView from "views/Kanas/KatakanaView";

import Creditos from "views/Creditos";
import Particulas from "views/Particulas";

import Verbos from "views/Vocabulario Palabras/Verbos";
import Adjetivos from "views/Vocabulario Palabras/Adjetivos";
import Sustantivos from "views/Vocabulario Palabras/Sustantivos";

import Grupos from "views/Grupos y Tiempos/Grupos";
import Tiempos from "views/Grupos y Tiempos/Tiempos";

import Transicion from "views/Transicion";

import Kanjis from "views/Kanjis";
import Kanji from "views/Kanji";

import Numeros from "views/Numeros y Fechas/Numeros";
import DiasSemana from "views/Numeros y Fechas/DiasSemana";
import DiasMes from "views/Numeros y Fechas/DiasMes";
import Horas from "views/Numeros y Fechas/Horas";

import Principiantes from "views/Principiantes";
import Contadores from "views/Numeros y Fechas/Contadores";

import FormasKei from "views/FormasKei";
import UnirAdjetivos from "views/Grupos y Tiempos/UnirAdjetivos";

const routes = [
	{
		path: "/",
		nameKey: "Home",
		component: Home,
	},
	{
		path: "/hiragana",
		nameKey: "Hiragana",
		component: HiraganaView,
	},
	{
		path: "/katakana",
		nameKey: "Katakana",
		component: KatakanaView,
	},
	{
		path: "/creditos",
		nameKey: "Creditos",
		component: Creditos,
	},
	{
		path: "/particulas",
		nameKey: "Particulas",
		component: Particulas,
	},
	{
		path: "/verbos",
		nameKey: "Verbos",
		component: Verbos,
	},
	{
		path: "/adjetivos",
		nameKey: "Vocabulario Adjetivos",
		component: Adjetivos,
	},
	{
		path: "/sustantivos",
		nameKey: "Vocabulario Sustantivos",
		component: Sustantivos,
	},
	{
		path: "/grupos",
		nameKey: "Grupos y Tiempos: Grupos y Tipos",
		component: Grupos,
	},
	{
		path: "/tiempos",
		nameKey: "Grupos y Tiempos: Tiempos",
		component: Tiempos,
	},
	{
		path: "/transicion/:recurso",
		nameKey: "Transicion",
		component: Transicion,
	},
	{
		path: "/kanjis",
		nameKey: "Diccionario Kanjis",
		component: Kanjis,
	},
	{
		path: "/kanji/:idKanji",
		nameKey: "Info Kanji",
		component: Kanji,
	},
	{
		path: "/numeros",
		nameKey: "Numeros y Fechas: Numeros",
		component: Numeros,
	},
	{
		path: "/dias-semana",
		nameKey: "Numeros y Fechas: Dias de la Semana",
		component: DiasSemana,
	},
	{
		path: "/dias-mes",
		nameKey: "Numeros y Fechas: Dias del Mes",
		component: DiasMes,
	},
	{
		path: "/beginers",
		nameKey: "Guía para Principiantes",
		component: Principiantes,
	},
	{
		path: "/horas",
		nameKey: "Numeros y Fechas: Las Horas del Día",
		component: Horas,
	},
	{
		path: "/contadores",
		nameKey: "Numeros y Fechas: Los Contadores",
		component: Contadores,
	},
	{
		path: "/formas-kei/:forma",
		nameKey: "Layout Formas Kei",
		component: FormasKei,
	},
	{
		path: "/unir-adjetivos",
		nameKey: "Unir Adjetivos",
		component: UnirAdjetivos,
	},
];
export default routes;

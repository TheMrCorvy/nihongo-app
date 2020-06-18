import ParticulaWa from "./Sections/Particulas/ParticulaWa";
import ParticulaGa from "./Sections/Particulas/ParticulaGa";
import ParticulaWo from "./Sections/Particulas/ParticulaWo";
import ParticulaTo from "./Sections/Particulas/ParticulaTo";
import ParticulaE from "./Sections/Particulas/ParticulaE";
import ParticulaMo from "./Sections/Particulas/ParticulaMo";
import ParticulaNo from "./Sections/Particulas/ParticulaNo";
import ParticulaKara from "./Sections/Particulas/ParticulaKara";
import ParticulaNi from "./Sections/Particulas/ParticulaNi";
import ParticulaDe from "./Sections/Particulas/ParticulaDe";

const LasParticulas = [
	{
		hiragana: "は",
		romaji: "wa",
		componente: ParticulaWa,
	},
	{
		hiragana: "が",
		romaji: "ga",
		componente: ParticulaGa,
	},
	{
		hiragana: "を",
		romaji: "wo",
		componente: ParticulaWo,
	},
	{
		hiragana: "と",
		romaji: "to",
		componente: ParticulaTo,
	},
	{
		hiragana: "へ",
		romaji: "he",
		componente: ParticulaE,
	},
	{
		hiragana: "も",
		romaji: "mo",
		componente: ParticulaMo,
	},
	{
		hiragana: "の",
		romaji: "no",
		componente: ParticulaNo,
	},
	{
		hiragana: "から y まで",
		romaji: "kara",
		componente: ParticulaKara,
	},
	{
		hiragana: "に",
		romaji: "ni",
		componente: ParticulaNi,
	},
	{
		hiragana: "で",
		romaji: "de",
		componente: ParticulaDe,
	},
];

export default LasParticulas;

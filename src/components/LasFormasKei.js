import Taikei from "components/Sections/FormasKei/Taikei";
import Tekei from "components/Sections/FormasKei/Tekei";
import Jishokei from "components/Sections/FormasKei/Jishokei";
import Naikei from "components/Sections/FormasKei/Naikei";
import Takei from "components/Sections/FormasKei/Takei";

const LasFormasKei = [
	{
		key: 1,
		nombre: "forma たい",
		icono: "hamburger",
		ruta: "tai",
		componente: Taikei,
	},
	{
		key: 2,
		nombre: "forma て",
		icono: "tasks",
		ruta: "te",
		componente: Tekei,
	},
	{
		key: 3,
		nombre: "Forma 辞書形 じしけい (う)",
		icono: "user-friends",
		ruta: "u",
		componente: Jishokei,
	},
	{
		key: 4,
		nombre: "Forma ない",
		icono: "times",
		ruta: "nai",
		componente: Naikei,
	},
	{
		key: 5,
		nombre: "Forma た",
		icono: "clock",
		ruta: "ta",
		componente: Takei,
	},
];

export default LasFormasKei;

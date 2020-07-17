import Parte1 from "components/Jsons/Kanjis/Parte1.json";
import Parte2 from "components/Jsons/Kanjis/Parte2.json";
import Parte3 from "components/Jsons/Kanjis/Parte3.json";
import Parte4 from "components/Jsons/Kanjis/Parte4.json";
import Parte5 from "components/Jsons/Kanjis/Parte5.json";
import Parte6 from "components/Jsons/Kanjis/Parte6.json";

const LosKanjis = Parte1.Parte1.concat(
	Parte2.Parte2,
	Parte3.Parte3,
	Parte4.Parte4,
	Parte5.Parte5,
	Parte6.Parte6
);

export default LosKanjis;

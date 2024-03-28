import "./style.css";

import { botonExtraerHTML, htmlTexto, contenedorTexto } from "./model";
import { crearTexto } from "./ui";
import { extraerURLS } from "./motor";

const handleBotonValidar = () => {
  if (contenedorTexto && contenedorTexto instanceof HTMLDivElement) {
    contenedorTexto.innerHTML = "";
  }
  if (htmlTexto && htmlTexto instanceof HTMLTextAreaElement) {
    const arrayURL = extraerURLS(htmlTexto.value);
    crearTexto(arrayURL);
  }
};

if (botonExtraerHTML && botonExtraerHTML instanceof HTMLButtonElement) {
  botonExtraerHTML.addEventListener("click", handleBotonValidar);
}

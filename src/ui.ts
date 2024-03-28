import { contenedorTexto } from "./model";
export const crearTexto = (arrayURL: string[]) => {
  arrayURL.forEach((url) => {
    if (contenedorTexto && contenedorTexto instanceof HTMLDivElement) {
      const parrafo = document.createElement("p");
      parrafo.textContent = url;
      contenedorTexto.appendChild(parrafo);
    }
  });
};

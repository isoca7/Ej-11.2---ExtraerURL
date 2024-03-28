import "./style.css";

import { IBAN, botonValidarIBAN } from "./iban.model";
import {
  mostrarSiEstaBienFormado,
  crearTexto,
  mostrarDigitoControl,
  mostrarNombreBanco,
  mostrarNumeroCuenta,
  mostrarSiEsValido,
  mostrarSucursal,
} from "./iban.ui";

const handleBotonValidar = () => {
  crearTexto();
  if (IBAN && IBAN instanceof HTMLInputElement) {
    mostrarSiEstaBienFormado(IBAN.value);
    mostrarSiEsValido(IBAN.value);
    mostrarNombreBanco(IBAN.value);
    mostrarSucursal(IBAN.value);
    mostrarDigitoControl(IBAN.value);
    mostrarNumeroCuenta(IBAN.value);
  }
};

if (botonValidarIBAN && botonValidarIBAN instanceof HTMLButtonElement) {
  botonValidarIBAN.addEventListener("click", handleBotonValidar);
}

import { esValido, separarDatos, determinarNombreBanco } from './iban.motor'
import * as ibantools from 'ibantools'
export const mostrarSiEstaBienFormado = (IBAN: string) => {
    const parrafoEsValido = document.getElementById('esta-bien-formado')
    if (parrafoEsValido && parrafoEsValido instanceof HTMLParagraphElement) {
      if (esValido(IBAN)) {
        parrafoEsValido.textContent = 'El IBAN está bien formado.'
      } else {
        parrafoEsValido.textContent = 'El IBAN no está bien formado.'
      }
    }
  }
  export  const mostrarSiEsValido = (IBAN: string) => {
    const IBANLimpio = IBAN.replace(/[-\s]/g, '')
    const parrafoEsValido = document.getElementById('es-valido')
    if (parrafoEsValido && parrafoEsValido instanceof HTMLParagraphElement) {
      if (ibantools.isValidIBAN(IBANLimpio)) {
        parrafoEsValido.textContent = 'El IBAN es válido.'
      } else {
        parrafoEsValido.textContent = 'El IBAN no es válido.'
      }
    }
  }
  
  export  const crearTexto = () => {
    const contenedorTexto = document.getElementById('contenedor-texto')
    if (contenedorTexto && contenedorTexto instanceof HTMLDivElement) {
      contenedorTexto.innerHTML = `<p id="esta-bien-formado"><p id ="es-valido"><p id='nombre-banco'></p><p id='codigo-sucursal'></p><p id='codigo-control'></p><p id='numero-cuenta'></p>`
    }
  }
  
  export  const mostrarNombreBanco = (IBAN: string) => {
    const parrafoNombreValido = document.getElementById('nombre-banco')
    if (
      parrafoNombreValido &&
      parrafoNombreValido instanceof HTMLParagraphElement
    ) {
      const IBANLimpio = IBAN.replace(/[-\s]/g, '')
      const datosBanco = separarDatos(IBANLimpio)
      if (datosBanco) {
        const identificadorBanco = datosBanco.numeroBanco
        parrafoNombreValido.textContent =
          determinarNombreBanco(identificadorBanco)
      } else {
        parrafoNombreValido.textContent = 'No se ha encontrado el banco'
      }
    }
  }
  
  export  const mostrarSucursal = (IBAN: string) => {
    const parrafoSucursal = document.getElementById('codigo-sucursal');
    if (parrafoSucursal && parrafoSucursal instanceof HTMLParagraphElement) {
      const datosBanco = separarDatos(IBAN);
      if (datosBanco) {
        parrafoSucursal.textContent = `Codigo sucursal: ${datosBanco.sucursal}`;
      } else {
        parrafoSucursal.textContent = `Codigo sucursal: No se ha encontrado el banco`;
      }
    }
  }
  export  const mostrarDigitoControl = (IBAN: string) => {
    const parrafoDigitoControl = document.getElementById('codigo-control');
    if (parrafoDigitoControl && parrafoDigitoControl instanceof HTMLParagraphElement) {
      const datosBanco = separarDatos(IBAN);
      if (datosBanco) {
        parrafoDigitoControl.textContent = `Digito de control: ${datosBanco.digitoControl}`;
      } else {
        parrafoDigitoControl.textContent = `Digito de control: No se ha encontrado el banco`;
      }
    }
  }
  export  const mostrarNumeroCuenta = (IBAN: string) => {
    const parrafoDigitoControl = document.getElementById('numero-cuenta');
    if (parrafoDigitoControl && parrafoDigitoControl instanceof HTMLParagraphElement) {
      const datosBanco = separarDatos(IBAN);
      if (datosBanco) {
        parrafoDigitoControl.textContent = `Numero Cuenta: ${datosBanco.numeroCuenta}`;
      } else {
        parrafoDigitoControl.textContent = `Numero Cuenta: No se ha encontrado el banco`;
      }
    }
  }
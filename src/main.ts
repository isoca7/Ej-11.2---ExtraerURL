import './style.css'
import * as ibantools from 'ibantools'
import { arrayBancos, Banco } from './iban.model'

const IBAN = document.getElementById('IBAN')
const botonValidarIBAN = document.getElementById('boton-validar')

const esValido = (IBAN: string): boolean => {
  const patron =
    /^\w{2}\d{2}(\s|-)?\d{4}(\s|-)?\d{4}(\s|-)?\d{2}(\s|-)?\d{10}$/gim
  return patron.test(IBAN) ? true : false
}

const mostrarSiEstaBienFormado = (IBAN: string) => {
  const parrafoEsValido = document.getElementById('esta-bien-formado')
  if (parrafoEsValido && parrafoEsValido instanceof HTMLParagraphElement) {
    if (esValido(IBAN)) {
      parrafoEsValido.textContent = 'El IBAN está bien formado.'
    } else {
      parrafoEsValido.textContent = 'El IBAN no está bien formado.'
    }
  }
}
const mostrarSiEsValido = (IBAN: string) => {
  const IBANLimpio = IBAN.replace(/[-\s]/g, '')
  const parrafoEsValido = document.getElementById('es-valido')
  if (parrafoEsValido && parrafoEsValido instanceof HTMLParagraphElement) {
    if (ibantools.isValidIBAN(IBANLimpio)) {
      parrafoEsValido.textContent = 'El IBAN es válido.'
    } else {
      parrafoEsValido.textContent = 'El IBAN no es válido.'
    }
  }
  console.log(ibantools.isValidIBAN(IBANLimpio))
}

const crearTexto = () => {
  const contenedorTexto = document.getElementById('contenedor-texto')
  if (contenedorTexto && contenedorTexto instanceof HTMLDivElement) {
    contenedorTexto.innerHTML = `<p id="esta-bien-formado"><p id ="es-valido"><p id='nombre-banco'></p><p id='codigo-sucursal'></p><p id='codigo-control'></p><p id='numero-cuenta'></p>`
  }
}
const determinarNombreBanco = (identificadorBanco: number) => {
  const banco = arrayBancos.find(
    (banco) => Number(banco.codigo) === Number(identificadorBanco)
  )
  return banco ? `Banco: ${banco.nombre}` : 'No se ha encontrado el banco'
}
const separarDatos = (IBAN: string): Banco | undefined => {
  const patron =
    /^\w{2}\d{2}(\s|-)?(?<numeroBanco>\d{4})(\s|-)?(?<sucursal>\d{4})(\s|-)?(?<digitoControl>\d{2})(\s|-)?(?<numeroCuenta>\d{10})$/gim
  const coincidencia = patron.exec(IBAN)
  if (coincidencia) {
    const { numeroBanco, sucursal, digitoControl, numeroCuenta } =
      coincidencia.groups as any
    const datosBanco: Banco = {
      numeroBanco,
      sucursal,
      digitoControl,
      numeroCuenta,
    }
    return datosBanco
  } else {
    return undefined
  }
}

const mostrarNombreBanco = (IBAN: string) => {
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

const mostrarSucursal = (IBAN: string) => {
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
const mostrarDigitoControl = (IBAN: string) => {
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
const mostrarNumeroCuenta = (IBAN: string) => {
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

const handleBotonValidar = () => {
  crearTexto()
  if (IBAN && IBAN instanceof HTMLInputElement) {
    mostrarSiEstaBienFormado(IBAN.value)
    mostrarSiEsValido(IBAN.value)
    mostrarNombreBanco(IBAN.value)
    mostrarSucursal(IBAN.value)
    mostrarDigitoControl(IBAN.value)
    mostrarNumeroCuenta(IBAN.value)
  }
}

if (botonValidarIBAN && botonValidarIBAN instanceof HTMLButtonElement) {
  botonValidarIBAN.addEventListener('click', handleBotonValidar)
}

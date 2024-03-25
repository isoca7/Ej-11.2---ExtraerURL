import './style.css'

const IBAN = document.getElementById('IBAN')
const botonValidarIBAN = document.getElementById('boton-validar')

const ibantools = require('ibantools');




ibantools.validateIBAN('NL91ABNA0517164300');

const esValido = (IBAN: string): boolean => {
  const patron = /^\w{2}\d{2}(\s|-)?\d{4}(\s|-)?\d{4}(\s|-)?\d{2}(\s|-)?\d{10}$/gim
  return patron.test(IBAN) ? true : false
}

const mostrarSiEstaBienFormado = (IBAN: string) => {
  const parrafoEsValido = document.getElementById('es-valido')
  if (parrafoEsValido && parrafoEsValido instanceof HTMLParagraphElement) {
    if (esValido(IBAN)) {
      parrafoEsValido.textContent = 'El IBAN está bien formado.'
    } else {
      parrafoEsValido.textContent = 'El IBAN no está bien formado.'
    }
  }
}

const crearTexto = () => {
  const contenedorTexto = document.getElementById('contenedor-texto')
  if (contenedorTexto && contenedorTexto instanceof HTMLDivElement) {
    contenedorTexto.innerHTML = `<p id="es-valido"><p>`
  }
}

const handleBotonValidar = () => {
  crearTexto()
  if (IBAN && IBAN instanceof HTMLInputElement) {
    mostrarSiEstaBienFormado(IBAN.value)
  }
  console.log(ibantools.isValidIBAN(IBAN));
}

if (botonValidarIBAN && botonValidarIBAN instanceof HTMLButtonElement) {
  botonValidarIBAN.addEventListener('click', handleBotonValidar)
}

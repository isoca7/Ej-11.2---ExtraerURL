import { arrayBancos, Banco } from './iban.model'

export const esValido = (IBAN: string): boolean => {
    const patron =
      /^\w{2}\d{2}(\s|-)?\d{4}(\s|-)?\d{4}(\s|-)?\d{2}(\s|-)?\d{10}$/gim
    return patron.test(IBAN) ? true : false
  }

export const determinarNombreBanco = (identificadorBanco: number) => {
    const banco = arrayBancos.find(
      (banco) => Number(banco.codigo) === Number(identificadorBanco)
    )
    return banco ? `Banco: ${banco.nombre}` : 'No se ha encontrado el banco'
  }

export   const separarDatos = (IBAN: string): Banco | undefined => {
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
  
export const formatCPF = (val: string) => {
    if (val.length <= 3) {
      return val
    }
  
    if (val.length <= 6) {
      return `${val.slice(0, 3)}.${val.slice(3, 6)}`
    }
  
    if (val.length <= 9) {
      return `${val.slice(0, 3)}.${val.slice(3, 6)}.${val.slice(6, 9)}`
    }
  
    return `${val.slice(0, 3)}.${val.slice(3, 6)}.${val.slice(6, 9)}-${val.slice(
      9,
      11,
    )}`
  }
  
  export const parseCPF = (val: string) => {
    const formatted: string = val.replaceAll('.', '').replaceAll('-', '')
  
    return formatted.slice(0, 11)
  }
  
/** Valida o CPF pelos dígitos verificadores. Aceita com ou sem máscara. */
export const isValidCPF = (val: string) => {
  const digits = (val || '').replace(/\D/g, '')
  if (digits.length !== 11 || /^(\d)\1{10}$/.test(digits)) return false

  const checkDigit = (base: string, firstWeight: number) => {
    const sum = base
      .split('')
      .reduce((acc, d, i) => acc + Number(d) * (firstWeight - i), 0)
    const rest = (sum * 10) % 11
    return rest === 10 ? 0 : rest
  }

  return (
    checkDigit(digits.slice(0, 9), 10) === Number(digits[9]) &&
    checkDigit(digits.slice(0, 10), 11) === Number(digits[10])
  )
}

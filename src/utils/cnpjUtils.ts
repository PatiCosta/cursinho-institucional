export function formatCnpj(cnpj: string) {
    return `${cnpj.slice(0, 2)}.${cnpj.slice(2, 5)}.${cnpj.slice(5, 8)}/${cnpj.slice(8, 12)}-${cnpj.slice(12, 14)}`
}

export const parseCnpj = (val: string) => {
    const formatted: string = val.replaceAll('.', '').replaceAll('-', '').replaceAll('/', '')
  
    return formatted.slice(0, 14)
  }

export function formatCep(cep: string | undefined) {
    if(cep === undefined) {
        return
    }
    
    return `${cep.slice(0, 5)}-${cep.slice(5, 8)}`
}

export const parseCep = (val: string) => {
    const formatted: string = val.replaceAll('-', '')
  
    return formatted.slice(0, 8)
  }
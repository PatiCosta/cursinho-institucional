export function formatPhone(phone: string | undefined) {
    if(phone === undefined) {
      return
    }
    
    return `(${phone.slice(0, 2)}) ${
      phone.length === 10
        ? ` ${phone.slice(2, 6)}-${phone.slice(6, 11)}`
        : ` ${phone.slice(2, 7)}-${phone.slice(7, 11)}`
    }`
}

export const parsePhone = (val: string) => {
    const formatted: string = val.replaceAll(' ', '').replaceAll('-', '').replaceAll('(', '').replaceAll(')', '')
  
    return formatted.slice(0, 11)
  }
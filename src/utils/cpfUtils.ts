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
  
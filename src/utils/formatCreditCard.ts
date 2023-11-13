export const formatCard = (val: string) => {
    let numericValue: string | undefined = ''

    if (val.match(/\d+/g) === null) {
        return numericValue
    }

    numericValue = val.match(/\d+/g)?.join().replaceAll(',', '')

    if(numericValue === undefined) {
        return ''
    }

    if(numericValue.length <= 4) {
        return numericValue
    }

    if(numericValue.length > 4 && numericValue.length <= 8) {
        return `${numericValue.slice(0, 4)} ${numericValue.slice(4, 8)}`
    }

    if(numericValue.length > 8 && numericValue.length <= 12) {
        return `${numericValue.slice(0, 4)} ${numericValue.slice(4, 8)} ${numericValue.slice(8, 12)}`
    }

    return `${numericValue.slice(0, 4)} ${numericValue.slice(4, 8)} ${numericValue.slice(8, 12)} ${numericValue.slice(12, 16)}`

}
export const formatNumeric = (val: string) => {
    let numericValue = ''

    if (val.match(/\d+/g) !== null) {
        numericValue = String(val.match(/\d+/g))
    }

    return numericValue
}
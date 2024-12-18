export function stringCalculator(inputString: string): number {
    if (inputString.length === 0) return 0;

    const baseSeparatorRegex = /[,\n]/;
    let customSeparatorRegex = "";
    const hasCustomSeparator = inputString.startsWith("//");
    if (hasCustomSeparator) {
        customSeparatorRegex = inputString.at(2)!;
    }

    const [, valueString] = hasCustomSeparator ? inputString.split(/\n/) : [, inputString];
    const separatorRegex = hasCustomSeparator ? customSeparatorRegex : baseSeparatorRegex;
    const valuesList = valueString.split(separatorRegex);
    const parsedValues = valuesList
        .map(valueItem => parseInt(valueItem))
    
    const negativeValues = parsedValues.filter(value => value < 0);

    if(negativeValues.length > 0) {
        throw(`negatives not allowed: ${negativeValues.join(",")}`);
    }

    const sum = parsedValues.reduce((sum, currentValue) => sum + currentValue, 0);

    return sum;
}

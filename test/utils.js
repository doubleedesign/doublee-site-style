export function evaluateCalc(cssValue) {
    if (!cssValue.includes('calc')) return cssValue;

    const unwrappedValue = cssValue.replace(/calc\((.*)\)/, '$1');
    const containsPixelUnits = unwrappedValue.includes('px');
    if (containsPixelUnits) {
        console.error('evaluateCalc is not set up to handle pixel units');
        return cssValue;
    }
    const containsPercentUnits = unwrappedValue.includes('%');
    if (containsPercentUnits) {
        console.error('evaluateCalc is not set up to handle percent units');
        return cssValue;
    }

    const strippedValue = unwrappedValue.replace('rem', '');
    const result = eval(strippedValue);
    const rounded = Math.round(result * 100) / 100; // Round to 2 decimal places
    return `${rounded}rem`;
}

function pow(base, exponent) {
    if (exponent === 0) return 1;
    if (exponent < 0) return 1 / pow(base, -exponent);
    let result = 1;
    for (let i = 0; i < exponent; i++) {
        result *= base;
    }
    return result;
}

export function getValueOfCssVariable(variableName) {
    const rootStyles = getComputedStyle(document.documentElement);
    return rootStyles.getPropertyValue(variableName).trim();
}
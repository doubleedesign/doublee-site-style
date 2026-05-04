import {
    TypographersQuotes
} from '../node_modules/@doubleedesign/clientside-typographers-quotes/dist/TypographersQuotes.js';
import {getValueOfCssVariable} from "/test/utils.js";

setTimeout(() => {
    createColourPalette();
    createSpacingPalette();
    createTypePalette();
    quotify();
}, 50);

function createColourPalette() {
    const palette = document.getElementById('palette');
    if (!palette) return;

    const colours = [
        'accent', 'primary', 'secondary',
        'light', 'dark',
        'info', 'success', 'warning', 'error',
        'body-text', 'body-text-muted',
    ];
    colours.forEach(colour => {
        const element = document.createElement('color-swatch');
        element.setAttribute('color', colour);
        palette.appendChild(element);
    });
}

function createSpacingPalette() {
    const palette = document.getElementById('spacing');
    if (!palette) return;

    const typescale = document.createElement('generic-swatch');
    typescale.setAttribute('label', '--typescale');
    typescale.textContent = getValueOfCssVariable('--typescale');
    palette.appendChild(typescale);

    const spacingStepSize = document.createElement('generic-swatch');
    spacingStepSize.setAttribute('label', '--spacing-step-size');
    spacingStepSize.textContent = getValueOfCssVariable('--spacing-step-size');
    palette.appendChild(spacingStepSize);


    const spacings = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'];
    spacings.forEach(size => {
        const element = document.createElement('spacing-swatch');
        element.setAttribute('size', size);
        palette.appendChild(element);
    });
}

function createTypePalette() {
    const palette = document.getElementById('typography');
    if (!palette) return;

    const fonts = ['sm', 'body', 'md', 'lg', 'xl', 'xxl', 'display'];
    fonts.forEach(size => {
        const element = document.createElement('font-swatch');
        element.setAttribute('size', size);
        palette.appendChild(element);
    });
}

function quotify() {
    const quotes = new TypographersQuotes({selectors: ['body']});
    quotes.apply();
}
/**
 * <color-swatch> web component
 *
 * Attribute:
 *   color — token name (e.g. "primary", "secondary"). The component reads
 *            --color-{value} from :root and uses the attribute value as the label.
 *
 * Usage:
 *   <color-swatch color="primary"></color-swatch>
 *   <color-swatch color="secondary"></color-swatch>
 *   <color-swatch color="accent"></color-swatch>
 */
import {getValueOfCssVariable} from "/test/utils.js";

class ColorSwatch extends HTMLElement {
    static get observedAttributes() {
        return ['color'];
    }

    connectedCallback() {
        this.render();
    }

    attributeChangedCallback() {
        this.render();
    }

    render() {
        const token = (this.getAttribute('color') || '').trim();
        const varName = `--color-${token}`;
        const value = getValueOfCssVariable(varName);

        const swatch = document.createElement('figure');
        swatch.className = 'swatch';

        const colorBlock = document.createElement('div');
        colorBlock.className = 'swatch__color';
        colorBlock.setAttribute('role', 'img');
        colorBlock.style.background = `var(${varName})`;
        swatch.appendChild(colorBlock);

        const caption = document.createElement('figcaption');
        caption.className = 'swatch__caption';
        swatch.appendChild(caption);

        const label = document.createElement('span');
        label.className = 'swatch__caption__label';
        label.textContent = token;
        caption.appendChild(label);

        const val = document.createElement('span');
        val.className = 'swatch__caption__value';
        val.textContent = value || varName;
        caption.appendChild(val);

        this.replaceChildren(swatch);
    }
}

customElements.define('color-swatch', ColorSwatch);
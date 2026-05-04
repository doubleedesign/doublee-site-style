/**
 * <font-swatch> web component
 *
 * Attribute:
 *   color — token name (e.g. "base", "md", "xl"). The component reads
 *            --font-{value} from :root and uses the attribute value as the label.
 *
 * Usage:
 *   <font-swatch size="base"></font-swatch>
 *   <font-swatch size="md"></font-swatch>
 *   <font-swatch size="xl"></font-swatch>
 */
import {getValueOfCssVariable} from "/test/utils.js";

class FontSwatch extends HTMLElement {
    static get observedAttributes() {
        return ['size'];
    }

    connectedCallback() {
        this.render();
    }

    attributeChangedCallback() {
        this.render();
    }

    render() {
        const token = (this.getAttribute('size') || '').trim();
        const varName = `--font-${token}`;
        const value = getValueOfCssVariable(varName);

        const swatch = document.createElement('figure');
        swatch.className = 'swatch';

        const typeBlock = document.createElement('div');
        typeBlock.className = 'swatch__text';
        typeBlock.setAttribute('role', 'img');
        typeBlock.style.font = `var(${varName})`;
        typeBlock.textContent = 'The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog';
        swatch.appendChild(typeBlock);

        const caption = document.createElement('figcaption');
        caption.className = 'swatch__caption';
        swatch.appendChild(caption);

        const label = document.createElement('span');
        label.className = 'swatch__caption__label';
        label.textContent = varName;
        caption.appendChild(label);

        const val = document.createElement('span');
        val.className = 'swatch__caption__value';
        val.textContent = value || varName;
        caption.appendChild(val);

        this.replaceChildren(swatch);
    }
}

customElements.define('font-swatch', FontSwatch);
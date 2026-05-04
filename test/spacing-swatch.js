/**
 * <spacing-swatch> web component
 *
 * Attribute:
 *   size — token name (e.g. "sm", "md", "xl"). The component reads
 *            --spacing-{value} from :root and uses the attribute value as the label.
 *
 * Usage:
 *   <spacing-swatch size="sm"></spacing-swatch>
 *   <spacing-swatch size="md"></spacing-swatch>
 *   <spacing-swatch size="xl"></spacing-swatch>
 */
import {evaluateCalc, getValueOfCssVariable} from "/test/utils.js";

class SpacingSwatch extends HTMLElement {
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
        const varName = `--spacing-${token}`;
        const rawValue = getValueOfCssVariable(varName);
        const value = evaluateCalc(rawValue);

        const swatch = document.createElement('figure');
        swatch.className = 'swatch';

        const spaceBlock = document.createElement('div');
        spaceBlock.className = 'swatch__spacing';
        spaceBlock.setAttribute('role', 'img');
        spaceBlock.style.width = `var(${varName})`;
        swatch.appendChild(spaceBlock);

        const caption = document.createElement('figcaption');
        caption.className = 'swatch__caption';
        swatch.appendChild(caption);

        const label = document.createElement('span');
        label.className = 'swatch__caption__label';
        label.textContent = varName;
        caption.appendChild(label);

        const val = document.createElement('span');
        val.className = 'swatch__caption__value';
        val.textContent = value + ` | ${rawValue}`;
        caption.appendChild(val);

        this.replaceChildren(swatch);
    }
}

customElements.define('spacing-swatch', SpacingSwatch);
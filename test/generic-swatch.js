/**
 * <swatch> web component
 *
 * Attributes:
 *   label — string literal to display as the label for the swatch
 *
 * Usage:
 *   <swatch label="Heading 1">
 *      <h1>Gum would be perfection</h1>
 *    </color-swatch>
 */

class GenericSwatch extends HTMLElement {
    static get observedAttributes() {
        return ['label'];
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.className = 'swatch';

        const wrapper = document.createElement('div');
        wrapper.className = 'swatch__caption';

        const label = document.createElement('span');
        label.className = 'swatch__caption__label';
        label.textContent = (this.getAttribute('label') || '').trim();
        wrapper.appendChild(label);
        setTimeout(() => {
            this.insertAdjacentElement('beforeend', wrapper);
        }, 10);
    }
}

customElements.define('generic-swatch', GenericSwatch);
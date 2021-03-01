import { LitElement, html, css } from 'lit-element';
import {bulmaStyles} from '@granite-elements/granite-lit-bulma/granite-lit-bulma';

export class BabelHome extends LitElement {

    static get styles () {
        return [
            bulmaStyles,
            css`
                :host{
                    display:block
                }
            `
        ]
    }

    render() {
        return html`
            <h1 class="title">Babel Home</h1>
        `;
    }
}

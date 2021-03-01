import { LitElement, html, css } from 'lit-element';
import {Router} from '@vaadin/router';
import './views/babelHome/babel-home.js';

export class BabelFormationApp extends LitElement {

    static get styles () {
        return [
            css`
                :host{
                    display:block
                }
            `
        ]
    }

    firstUpdated(_changedProperties){
        super.firstUpdated(_changedProperties);
        const router = new Router(this.shadowRoot.querySelector('#content-main'));
        router.setRoutes([
            {path: '/', component:'babel-home'}
        ])
    }
    render() {
        return html`
            <section>
                <main id="content-main">

                </main>
            </section>
        `
    }
}
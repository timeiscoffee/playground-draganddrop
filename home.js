customElements.define('region-wrapper',
    class extends HTMLElement {
        constructor() {
            super();

            var template = document.getElementById('region-wrapper').content;
            const shadowRoot = this.attachShadow({ mode: 'open' });
            shadowRoot.appendChild(template.cloneNode(true));

            var style = document.createElement('style');

            style.textContent =
                `
            .region-wrapper {
                border: 1px solid black;
            }
            `;
            shadowRoot.appendChild(style);
        }
    }
);

customElements.define('component-wrapper',
    class extends HTMLElement {
        constructor() {
            super();
            var template = document.getElementById('component-wrapper').content;
            const shadowRoot = this.attachShadow({ mode: 'open' });
            shadowRoot.appendChild(template.cloneNode(true));

            var style = document.createElement('style');

            style.textContent =
                `
            .component-wrapper {
                display: inline-block;
                margin: 1rem;
                padding: 1rem;
                border: 1px solid red;
            }
            `;
            shadowRoot.appendChild(style);
        }
    }
);

customElements.define('app-wrapper',
    class extends HTMLElement {
        constructor() {
            super();
            var template = document.getElementById('app-wrapper').content;
            const shadowRoot = this.attachShadow({ mode: 'open' });
            shadowRoot.appendChild(template.cloneNode(true));
        }
    }
);

customElements.define('app-layer1',
    class extends HTMLElement {
        constructor() {
            super();
            var template = document.getElementById('app-layer1').content;
            const shadowRoot = this.attachShadow({ mode: 'open' });
            shadowRoot.appendChild(template.cloneNode(true));
        }
    }
);

customElements.define('app-layer2',
    class extends HTMLElement {
        constructor() {
            super();
            var template = document.getElementById('app-layer2').content;
            const shadowRoot = this.attachShadow({ mode: 'open' });
            shadowRoot.appendChild(template.cloneNode(true));
        }
    }
);

customElements.define('app-layer3',
    class extends HTMLElement {
        constructor() {
            super();
            var template = document.getElementById('app-layer3').content;
            const shadowRoot = this.attachShadow({ mode: 'open' });
            shadowRoot.appendChild(template.cloneNode(true));

            var style = document.createElement('style');
        }
    })

dragula(Array.from(document.querySelectorAll('region-wrapper')));

function querySelectorAllShadowRoots(context, expression) {
    let result = [];
    const walker = document.createTreeWalker(context);

    do {
        const currentNode = walker.currentNode;
        if (currentNode.matches && currentNode.matches(expression)) {
            result.push(currentNode);
        }
        if (currentNode.shadowRoot) {
            result = result.concat(querySelectorAllShadowRoots(currentNode.shadowRoot, expression));
        }
    } while (walker.nextNode())

    return result;
}

console.log(querySelectorAllShadowRoots(document, '.target'));
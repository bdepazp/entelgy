class wccountry extends HTMLElement{
    constructor(){
        super();
    }

    connectedCallback () {
        this.innerHTML = `
        <div>
        <button>Comprar Ahora</button>
        </div>
        `;
    }
}

window.customElements.define('wc-country', wccountry);
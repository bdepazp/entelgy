// const template = document.createElement('template');

// template.innerHTML = `

// `;

class wccountry extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        let shadowRoot = this.attachShadow({ mode: 'open' });

        //let data = JSON.parse(this.getAttribute('data'));
        let data = {
            name: this.getAttribute('name'),
            flag: this.getAttribute('flag'),
            capital: this.getAttribute('capital'),
            region: this.getAttribute('region'),
            area: this.getAttribute('area').replace(/\B(?=(\d{3})+(?!\d))/g, ","),
            population: this.getAttribute('population').replace(/\B(?=(\d{3})+(?!\d))/g, ","),
        }
        //console.log(data);        

        shadowRoot.innerHTML = `
        <style>            
            .card{
                border: 1px solid #f0f0f0;                
                border-radius: 20px;
                background-color: rgba(255,255,255,0.6);
                margin: 10px;
                cursor: pointer; 
                box-shadow: 0 5px 5px #eee;
                transition: all ease 0.3s;
                overflow: hidden;
            }
            .card:hover{
                transform: scale(1.05);
                background-color: rgba(255,255,255,1);
            }
            .card .name { 
                font-family: "Roboto", sans-serif;
                font-size: 1.7rem;
                /*margin: 5px 0 5px 0;*/
                margin-top: 0;
                margin-bottom: 3px;
            }
            .card .name:hover { 
                text-decoration: underline;
            }
            .card .flag {
                text-align: center;
                min-height: 230px;
                display: flex;
                align-items: center;
                justify-content: center;
                background: rgba(0,0,0,0.05);
                padding: 20px;
            }
            .card .info{
                padding: 20px;
            }
            .card img {                                
                max-width: 100%; 
                max-height: 200px;               
            }
            .card .capital {
                margin-bottom: 0px;
                margin-top: 0;
                color: #70757a;
            }
            .card .region, .card .area, .card .population {
                font-size: 14px;
                margin-top: 15px;
            }
        </style>
        <div class="card">
            <div class="flag">
                <img src="${data.flag}" />
            </div>            
            <div class="info">
                <h3 class="name">${data.name}</h3>
                <div class="capital">Capital: ${data.capital}</div>
                <div class="region"><b>Continente:</b> ${data.region}</div>
                <div class="area"><b>Área:</b> ${data.area} km<sup>2<sup></div>
                <div class="population"><b>Población:</b> ${data.population} habitantes</div>
            </div>
        </div>
        `;

        shadowRoot.querySelector('.name').addEventListener('click', function () {
            let modal = document.querySelector('.popup-container');
            modal.querySelector('h2').innerHTML = data.name;
            modal.querySelector('.region').innerHTML = data.region;
            modal.style.display = 'block';
            modal.querySelector('.close').addEventListener('click', function () {
                modal.style.display = 'none';
            });
        });
    }
}

window.customElements.define('wc-country', wccountry);
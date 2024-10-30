import { ProductPage } from '../product/index.js'

export class ProductCardComponent {
    constructor(parent) {
        this.parent = parent;
    }

    get pageRoot() {
        return document.getElementById('main-page')
    }

    getData() {
        return [
            {
                id: 1,
                src: "https://i.pinimg.com/originals/c9/ea/65/c9ea654eb3a7398b1f702c758c1c4206.jpg",
                title: "Акция",
                text: "У меня есть крутая акция"
            },

            {
                id: 2,
                src: "https://i.pinimg.com/originals/c9/ea/65/c9ea654eb3a7398b1f702c758c1c4206.jpg",
                title: "Акция",
                text: "Такой акции вы еще не видели 2"
            },

            {
                id: 3,
                src: "https://i.pinimg.com/originals/c9/ea/65/c9ea654eb3a7398b1f702c758c1c4206.jpg",
                title: "Акция",
                text: "Такой акции вы еще не видели 3" 
            }
        ]
    }

    getHTML(data) {
        return (
            `<div class="card" style="width: 300px;">
                <img class="card-img-top" src="${data.src}" alt="картинка">
                <div class="card-body">
                    <h5 class="card-title">${data.title}</h5>
                    <p class="card-text">${data.text}</p>
                    <button class="btn btn-primary" id="click-card-${data.id}" data-id="${data.id}">Нажми на меня</button>
                </div>
            </div>`
        )
    }

    addListeners(data, listener) {
        document
        .getElementById(`click-card-${data.id}`)
        .addEventListener('click', listener)
    }

    render(data, listener) {
        const html = this.getHTML(data)
        this.parent.insertAdjacentHTML('beforeend', html)
        this.addListeners(data, listener)
    }

    clickCard(e) {
        const cardID = e.target.dataset.id
        const productPage = new ProductPage(this.parent, cardID)
        productPage.render()
    }

    render(data) {
        const productCard = new ProductCardComponent(this.pageRoot)

        for (let i = 0; i < data.length; i++) {
            const html = this.getHTML(data[i])
            this.parent.insertAdjacentHTML('beforeend', html)
            productCard.render(data[i], this.clickCard.bind(this))
        }
    }
}

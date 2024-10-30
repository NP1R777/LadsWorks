export class ProductCard {
    constructor(parent) {
        this.parent = parent
    }

    getData() {
        return [
            {
                id: 1,
                header: 'Хлеб (домашний)',
                text: `Хлеб — пищевой продукт, получаемый путём выпечки, паровой обработки или жарки теста,
                        состоящего как минимум из муки и воды. В большинстве случаев добавляется соль,
                        а также используется разрыхлитель, такой как дрожжи.`,
                picture: 'pictures/254553bd-3c6e-5178-b18c-20c826b67021.jpeg'
            },

            {
                id: 2,
                header: 'Колбаса (докторская)',
                text: `Колбаса́ — пищевой продукт; классообразующий тип колбасных изделий,
                представляющий собой мясной (часто свиной, говяжий или птичий) фарш в продолговатой оболочке.`,
                picture: 'pictures/image.png'
            },

            {
                id: 3,
                header: 'Сыр (сметанный)',
                text: `Сыр — пищевой продукт в виде твёрдой или полутвёрдой массы,
                получаемый в процессе сыроделия из заквашиваемого особым способом молока.`,
                picture: 'pictures/Снимок экрана 2024-10-25 194505.png'
            }
        ]
    }

    getHTML(data) {
        return (
            `
            <div id="${data.id}" class="inline-block w-72 border-2 border-zinc-700 rounded-lg ml-3">
                <img class="block border-y-0 w-52 m-auto rounded-xl mt-3" src="${data.picture}" alt="картинка">
                <div class="card-body">
                    <h5 class="pl-16 mb-1 text-lg">${data.header}</h5>
                    <span class="w-64 m-auto block bg-yellow-400 rounded-xl border-2
                                    border-solid border-black text-center px-2">
                        ${data.text}
                    </span>
                    <p><button id="clk-${data.id}" class="badge text-bg-success
                                                            block w-64 h-10 m-auto mt-3
                                                            mb-2 text-base border-2 border-black"
                                onclick="openWindow(${data.id})">
                    Перейти
                    </button></p>
                </div>
            </div>
            `
        )
    }

    render() {
        const data = this.getData()

        for (let i = 0; i < data.length; i++) {
            const html = this.getHTML(data[i])
            this.parent.insertAdjacentHTML('beforeend', html)
        }
    }
}

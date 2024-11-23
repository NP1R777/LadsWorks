import { urls } from "../modules/urls.js"
import { groupId } from "../modules/const.js";

export class ProductCard {
    constructor(parent) {
        this.parent = parent
    }

    getData = async () => {        
        let response = await fetch(urls.getGroupMembers(groupId))
        let getJson = await response.json()
        let dataJson = getJson.response.items

        return dataJson
    }

    getHTML(data) {
        return (
            `
            <div name="root" id="${data.id}" class="inline-block w-72 border-2 border-zinc-700 rounded-lg ml-3 mt-2">
                <img class="block border-y-0 w-52 m-auto rounded-xl mt-3" src="${data.photo_400_orig}" alt="картинка">
                <div class="card-body">
                    <h5 class="mb-1 text-lg text-center">${data.first_name} ${data.last_name}</h5>
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
    
    render = async () => {
        const data = await this.getData()

        for (let i = 0; i < data.length; i++) {
            const html = this.getHTML(data[i])
            this.parent.insertAdjacentHTML('beforeend', html)
            document.getElementById(data[i]["id"]).setAttribute("name", i)
        }
    }
}
